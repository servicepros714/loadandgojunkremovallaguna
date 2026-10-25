import { Link } from 'react-router-dom';
import business from '../data/business.js';
import Icon from './Icon.jsx';
import styles from './CtaBand.module.css';

export default function CtaBand() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.band}>
          <div className={styles.copy}>
            <h2 className={styles.title}>Ready to Load &amp; Go?</h2>
            <p className={styles.text}>
              Tell us what&rsquo;s going. We&rsquo;ll give you a free, no-obligation estimate and can often haul it
              the same day.
            </p>
          </div>
          <div className={styles.ctas}>
            <Link to="/get-estimate" className={`btn ${styles.btnWhite}`}>
              Get a Free Estimate <Icon name="arrow" />
            </Link>
            <a href={business.phoneHref} className="btn btn-navy">
              <Icon name="phone" /> {business.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
