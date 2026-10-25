import { Link } from 'react-router-dom';
import { beforeAfter } from '../data/business.js';
import Icon from './Icon.jsx';
import styles from './BeforeAfter.module.css';

export default function BeforeAfter() {
  if (!beforeAfter || beforeAfter.length === 0) return null;

  return (
    <section id="before-after" className={styles.section}>
      <div className="container">
        <div className="center">
          <span className="eyebrow">Real jobs</span>
          <h2 className="section-title">Before &amp; After</h2>
          <p className="section-lead">
            Real pickups from our crew. We load it up, haul it off, and leave the space swept and clear.
          </p>
        </div>

        <div className={styles.list}>
          {beforeAfter.map((job) => (
            <article key={job.title} className={styles.job}>
              <div className={styles.pair}>
                <figure className={styles.shot}>
                  <img src={job.before} alt={`${job.title} before junk removal`} width="736" height="981" loading="lazy" />
                  <figcaption className={`${styles.tag} ${styles.before}`}>Before</figcaption>
                </figure>
                <span className={styles.arrow} aria-hidden="true">
                  <Icon name="arrow" size={20} strokeWidth={2.6} />
                </span>
                <figure className={styles.shot}>
                  <img src={job.after} alt={`${job.title} after junk removal`} width="736" height="981" loading="lazy" />
                  <figcaption className={`${styles.tag} ${styles.after}`}>After</figcaption>
                </figure>
              </div>
              <h3 className={styles.title}>{job.title}</h3>
              <p className={styles.caption}>{job.caption}</p>
            </article>
          ))}
        </div>

        <div className={styles.foot}>
          <Link to="/get-estimate" className="btn btn-primary">
            Get a Free Estimate <Icon name="arrow" />
          </Link>
        </div>
      </div>
    </section>
  );
}
