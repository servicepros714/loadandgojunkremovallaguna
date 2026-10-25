import { Link } from 'react-router-dom';
import business, { steps } from '../data/business.js';
import Icon from './Icon.jsx';
import styles from './HowItWorks.module.css';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.stripe} aria-hidden="true" />
      <div className="container">
        <div className="center">
          <span className={`eyebrow ${styles.eyebrow}`}>Three steps</span>
          <h2 className={`section-title ${styles.title}`}>How It Works</h2>
          <p className={`section-lead ${styles.lead}`}>
            From first call to clean floor, the whole thing usually takes less time than a trip to the dump.
          </p>
        </div>

        <ol className={styles.steps}>
          {steps.map((s, i) => (
            <li key={s.title} className={styles.step}>
              <span className={styles.num}>{i + 1}</span>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepText}>{s.text}</p>
            </li>
          ))}
        </ol>

        <div className={styles.ctas}>
          <Link to="/get-estimate" className="btn btn-primary">
            Get a Free Estimate <Icon name="arrow" />
          </Link>
          <a href={business.phoneHref} className="btn btn-ghost-light">
            <Icon name="phone" /> Call {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
