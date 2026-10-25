import { useState } from 'react';
import { faqs } from '../data/business.js';
import Icon from './Icon.jsx';
import styles from './FAQ.module.css';

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className="center">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title">Questions, Answered</h2>
        </div>

        <div className={styles.list}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            const id = `faq-${i}`;
            return (
              <div key={f.q} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
                <h3 className={styles.qWrap}>
                  <button
                    type="button"
                    className={styles.q}
                    aria-expanded={isOpen}
                    aria-controls={id}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span>{f.q}</span>
                    <span className={styles.toggle}>
                      <Icon name="plus" size={18} strokeWidth={2.6} />
                    </span>
                  </button>
                </h3>
                <div id={id} className={styles.a} role="region">
                  <div className={styles.aInner}>
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
