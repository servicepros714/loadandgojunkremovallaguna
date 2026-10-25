import { Link } from 'react-router-dom';
import business, { pricingPoints } from '../data/business.js';
import Icon from './Icon.jsx';
import styles from './Pricing.module.css';

export default function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <span className="eyebrow">Upfront pricing</span>
        <h2 className="section-title">Pay for Space, Not Surprises</h2>
        <p className="section-lead">
          You only pay for the room your junk takes up in our truck. The price is confirmed before we start, and
          it includes everything.
        </p>

        <ul className={styles.list}>
          {pricingPoints.map((p) => (
            <li key={p}>
              <span className={styles.check}>
                <Icon name="check" size={15} strokeWidth={3.2} />
              </span>
              {p}
            </li>
          ))}
        </ul>

        <div className={styles.ctas}>
          <Link to="/get-estimate" className="btn btn-primary">
            Get a Free Estimate <Icon name="arrow" />
          </Link>
          <a href={business.phoneHref} className="btn btn-navy">
            <Icon name="phone" /> {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
