import { Link } from 'react-router-dom';
import business from '../data/business.js';
import Icon from './Icon.jsx';
import styles from './ServiceArea.module.css';

export default function ServiceArea() {
  return (
    <section id="service-area" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <span className="eyebrow">Service area</span>
          <h2 className="section-title">Serving {business.serviceAreaLabel}</h2>
          <p className="section-lead">
            Based in {business.city}, our trucks cover the coast and the canyons. Not sure if you&rsquo;re in range?
            Give us a call &mdash; if we can get there, we&rsquo;ll get it gone.
          </p>
          <div className={styles.ctas}>
            <Link to="/get-estimate" className="btn btn-primary">
              Get a Free Estimate <Icon name="arrow" />
            </Link>
            <a href={business.phoneHref} className="btn btn-navy">
              <Icon name="phone" /> {business.phone}
            </a>
          </div>
        </div>

        <div className={styles.panel}>
          <div className={styles.panelHead}>
            <Icon name="pin" size={20} />
            <span>Home base: {business.addressDisplay}</span>
          </div>
          <ul className={styles.list}>
            {business.serviceAreas.map((area, i) => (
              <li key={area} className={i === 0 ? styles.primary : undefined}>
                {area}
              </li>
            ))}
          </ul>
          <p className={styles.note}>&hellip;and nearby areas</p>
        </div>
      </div>
    </section>
  );
}
