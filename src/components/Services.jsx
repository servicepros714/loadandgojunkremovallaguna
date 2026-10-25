import { Link } from 'react-router-dom';
import { services } from '../data/business.js';
import Icon from './Icon.jsx';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <div>
            <span className="eyebrow">What we haul</span>
            <h2 className="section-title">Junk Removal Services</h2>
          </div>
          <p className={styles.headText}>
            If two people can lift it, we can take it. One item or a whole house, we load it up and haul it off.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <article key={s.title} className={styles.card}>
              <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
              <span className={styles.icon}>
                <Icon name={s.icon} size={26} />
              </span>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.text}>{s.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.foot}>
          <p>Don&rsquo;t see your item? We probably take it.</p>
          <Link to="/get-estimate" className="btn btn-navy">
            Get a Free Estimate <Icon name="arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
