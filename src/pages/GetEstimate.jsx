import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import business from '../data/business.js';
import Icon from '../components/Icon.jsx';
import styles from './GetEstimate.module.css';

const STEPS = ['Location', 'Junk Type', 'Contact'];

const areaOptions = [
  { value: 'yes', label: 'Yes', sub: 'I’m in or near Orange County, CA' },
  { value: 'no', label: 'No', sub: 'I’m outside the area' },
];

const junkOptions = [
  { value: 'household', label: 'Household Items', sub: 'Furniture, appliances, mattresses, boxes' },
  { value: 'storage', label: 'Storage Unit', sub: 'Full or partial unit cleanouts' },
  { value: 'construction', label: 'Construction Debris', sub: 'Drywall, wood, tile, remodel waste' },
  { value: 'misc', label: 'Miscellaneous', sub: 'Yard waste, e-waste, anything else' },
];

function formatPhone(digits) {
  const d = digits.slice(0, 10);
  if (d.length === 0) return '';
  if (d.length < 4) return `(${d}`;
  if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

function digitsOnly(value) {
  let d = value.replace(/\D/g, '');
  if (d.length === 11 && d.startsWith('1')) d = d.slice(1);
  return d.slice(0, 10);
}

function Progress({ step }) {
  return (
    <ol className={styles.progress}>
      {STEPS.map((label, i) => {
        const n = i + 1;
        const state = n < step ? 'complete' : n === step ? 'current' : 'upcoming';
        return (
          <li
            key={label}
            className={`${styles.pStep} ${styles[state]}`}
            aria-current={state === 'current' ? 'step' : undefined}
          >
            <span className={styles.pCircle}>
              {state === 'complete' ? <Icon name="check" size={16} strokeWidth={3.2} /> : n}
            </span>
            <span className={styles.pLabel}>{label}</span>
            <span className="visually-hidden">
              {state === 'complete' ? ' (completed)' : state === 'current' ? ' (current step)' : ' (upcoming)'}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

function OptionCard({ type, name, checked, onChange, label, sub }) {
  return (
    <label className={`${styles.wizardOption} ${checked ? styles.selected : ''}`}>
      <input type={type} name={name} checked={checked} onChange={onChange} className={styles.nativeInput} />
      <span className={styles.wizardOptionTop}>
        <span className={styles.box} aria-hidden="true">
          {checked && <Icon name="check" size={13} strokeWidth={3.4} />}
        </span>
        <span className={styles.optLabel}>{label}</span>
      </span>
      <span className={styles.optSub}>{sub}</span>
    </label>
  );
}

export default function GetEstimate() {
  const [step, setStep] = useState(1);
  const [inArea, setInArea] = useState('');
  const [types, setTypes] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | done

  useEffect(() => {
    document.title = `Free Estimate | ${business.name}`;
    return () => {
      document.title = `${business.name} | Junk Removal in ${business.city}, ${business.state}`;
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step, status]);

  const toggleType = (value) => {
    setTypes((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
  };

  const canNext = step === 1 ? inArea !== '' : step === 2 ? types.length > 0 : true;

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = 'Please enter your name.';
    if (digitsOnly(phone).length !== 10) e.phone = 'Please enter a valid 10-digit US phone number.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handlePhoneKeyDown = (e) => {
    const allowed = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Home', 'End', 'Enter'];
    if (allowed.includes(e.key) || e.metaKey || e.ctrlKey) return;
    if (!/^\d$/.test(e.key)) e.preventDefault();
  };

  const handlePhonePaste = (e) => {
    e.preventDefault();
    const pasted = (e.clipboardData || window.clipboardData).getData('text');
    setPhone(formatPhone(digitsOnly(pasted)));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step < 3) {
      if (canNext) setStep(step + 1);
      return;
    }
    if (!validate()) return;

    setStatus('sending');
    const payload = {
      business: business.name,
      inServiceArea: inArea === 'yes',
      junkTypes: types.map((t) => junkOptions.find((o) => o.value === t)?.label),
      name: name.trim(),
      phone: digitsOnly(phone),
      details: details.trim(),
      source: window.location.href,
      submittedAt: new Date().toISOString(),
    };

    if (business.estimateWebhook) {
      try {
        await fetch(business.estimateWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } catch (err) {
        // Still confirm to the user; they can call if needed.
        console.error('Estimate submit failed', err);
      }
    }
    setStatus('done');
  };

  if (status === 'done') {
    return (
      <section className={styles.page}>
        <div className={styles.wrap}>
          <div className={styles.done}>
            <span className={styles.doneIcon}>
              <Icon name="check" size={34} strokeWidth={3} />
            </span>
            <h1 className={styles.doneTitle}>You&rsquo;re All Set, {name.split(' ')[0]}!</h1>
            <p className={styles.doneText}>
              We got your request. A member of our crew will reach out shortly with your free estimate. Need it
              faster? Give us a call.
            </p>
            <div className={styles.doneActions}>
              <a href={business.phoneHref} className={styles.nextBtn}>
                <Icon name="phone" size={18} /> Call {business.phone}
              </a>
              <Link to="/" className={styles.backBtn}>
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.page}>
      <div className={styles.wrap}>
        <div className={styles.trust}>
          <span className={styles.trustIcon}>
            <Icon name="check" size={14} strokeWidth={3.4} />
          </span>
          Free, No-Obligation Estimate
        </div>

        <Progress step={step} />

        <form className={styles.card} onSubmit={handleSubmit} noValidate>
          {step === 1 && (
            <fieldset className={styles.fieldset}>
              <legend className={styles.question}>Is your pickup in {business.serviceAreaLabel}?</legend>
              <div className={styles.twoUp}>
                {areaOptions.map((o) => (
                  <OptionCard
                    key={o.value}
                    type="radio"
                    name="inArea"
                    checked={inArea === o.value}
                    onChange={() => setInArea(o.value)}
                    label={o.label}
                    sub={o.sub}
                  />
                ))}
              </div>
              <div className={`${styles.notice} ${inArea === 'no' ? styles.noticeShow : ''}`} aria-live="polite">
                <div className={styles.noticeInner}>
                  <strong>Heads up:</strong> a small trip fee may apply for pickups outside our standard service
                  area. We&rsquo;ll confirm it with you before booking.
                </div>
              </div>
            </fieldset>
          )}

          {step === 2 && (
            <fieldset className={styles.fieldset}>
              <legend className={styles.question}>What type of junk are we hauling?</legend>
              <p className={styles.hint}>Select all that apply.</p>
              <div className={styles.fourUp}>
                {junkOptions.map((o) => (
                  <OptionCard
                    key={o.value}
                    type="checkbox"
                    name="junkType"
                    checked={types.includes(o.value)}
                    onChange={() => toggleType(o.value)}
                    label={o.label}
                    sub={o.sub}
                  />
                ))}
              </div>
            </fieldset>
          )}

          {step === 3 && (
            <fieldset className={styles.fieldset}>
              <legend className={styles.question}>Where should we send your quote?</legend>
              <div className={styles.fields}>
                <div className={styles.field}>
                  <label htmlFor="est-name">Name</label>
                  <input
                    id="est-name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'err-name' : undefined}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <span id="err-name" className={styles.error}>
                      {errors.name}
                    </span>
                  )}
                </div>
                <div className={styles.field}>
                  <label htmlFor="est-phone">Phone</label>
                  <input
                    id="est-phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    value={phone}
                    onKeyDown={handlePhoneKeyDown}
                    onPaste={handlePhonePaste}
                    onChange={(e) => setPhone(formatPhone(digitsOnly(e.target.value)))}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'err-phone' : undefined}
                    placeholder="(555) 555-5555"
                  />
                  {errors.phone && (
                    <span id="err-phone" className={styles.error}>
                      {errors.phone}
                    </span>
                  )}
                </div>
                <div className={`${styles.field} ${styles.full}`}>
                  <label htmlFor="est-details">Details</label>
                  <textarea
                    id="est-details"
                    rows={4}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="What are we hauling, and where is it? (garage, upstairs, curbside…)"
                  />
                </div>
              </div>
            </fieldset>
          )}

          <div className={styles.nav}>
            <button
              type="button"
              className={styles.backBtn}
              onClick={() => setStep(step - 1)}
              style={{ visibility: step === 1 ? 'hidden' : 'visible' }}
              aria-hidden={step === 1}
              tabIndex={step === 1 ? -1 : 0}
            >
              <Icon name="back" size={16} /> Back
            </button>
            <button type="submit" className={styles.nextBtn} disabled={!canNext || status === 'sending'}>
              {step < 3 ? (
                <>
                  Next <Icon name="arrow" size={16} />
                </>
              ) : status === 'sending' ? (
                'Sending…'
              ) : (
                'Get Your Quote'
              )}
            </button>
          </div>
        </form>

        <p className={styles.callLine}>
          Prefer to talk? Call <a href={business.phoneHref}>{business.phone}</a>
        </p>
      </div>
    </section>
  );
}
