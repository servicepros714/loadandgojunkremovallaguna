import { Link } from 'react-router-dom';
import business from '../data/business.js';
import Icon from './Icon.jsx';
import styles from './Hero.module.css';

const loadList = [
  { item: 'Old sectional sofa', where: 'Living room' },
  { item: 'Garage shelving + boxes', where: 'Garage' },
  { item: 'Refrigerator', where: 'Side yard' },
  { item: 'Patio set & umbrella', where: 'Back deck' },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.speed} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={styles.kicker}>
            <span className={styles.kickerDot} /> Junk removal in {business.serviceAreaLabel}
          </p>
          <h1 className={styles.title}>
            We Load It.
            <span className={styles.titleAccent}>You Watch It Go.</span>
          </h1>
          <p className={styles.lead}>
            Furniture, appliances, garage clutter, remodel debris &mdash; our crew does all the lifting and hauls it
            away the same day or next. Upfront pricing, confirmed before we touch a thing.
          </p>

          <div className={styles.ctas}>
            <Link to="/get-estimate" className="btn btn-primary">
              Get a Free Estimate <Icon name="arrow" />
            </Link>
            <a href={business.phoneHref} className="btn btn-ghost-light">
              <Icon name="phone" /> {business.phone}
            </a>
          </div>

          <ul className={styles.proof}>
            <li>
              <Icon name="check" size={18} strokeWidth={3} /> No hidden fees
            </li>
            <li>
              <Icon name="check" size={18} strokeWidth={3} /> We do the lifting
            </li>
            <li>
              <Icon name="check" size={18} strokeWidth={3} /> Donate &amp; recycle first
            </li>
          </ul>
        </div>

        <div className={styles.visual}>
          <div className={styles.ticket}>
            <div className={styles.ticketHead}>
              <span className={styles.ticketLabel}>Today&rsquo;s Load</span>
              <span className={styles.ticketTag}>
                <Icon name="truck" size={16} /> Ready to go
              </span>
            </div>
            <ul className={styles.ticketList}>
              {loadList.map((row) => (
                <li key={row.item}>
                  <span className={styles.tick}>
                    <Icon name="check" size={14} strokeWidth={3.2} />
                  </span>
                  <span className={styles.rowItem}>{row.item}</span>
                  <span className={styles.rowWhere}>{row.where}</span>
                </li>
              ))}
            </ul>
            <div className={styles.ticketFoot}>
              <div>
                <span className={styles.footSmall}>Price</span>
                <strong>Confirmed on-site, upfront</strong>
              </div>
              <div>
                <span className={styles.footSmall}>Cleanup</span>
                <strong>Swept &amp; done</strong>
              </div>
            </div>
          </div>
          <div className={styles.badge}>
            <strong>Same-Day</strong>
            <span>pickups available</span>
          </div>
        </div>
      </div>
    </section>
  );
}
