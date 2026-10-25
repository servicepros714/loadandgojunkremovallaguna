import { whyUs } from '../data/business.js';
import Icon from './Icon.jsx';
import styles from './TrustBar.module.css';

export default function TrustBar() {
  return (
    <section className={styles.wrap} aria-label="Why choose us">
      <div className={`container ${styles.grid}`}>
        {whyUs.map((item) => (
          <div key={item.title} className={styles.item}>
            <span className={styles.icon}>
              <Icon name={item.icon} size={22} />
            </span>
            <div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
