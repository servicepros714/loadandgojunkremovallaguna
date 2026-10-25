import business from '../data/business.js';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <span className="eyebrow">About us</span>
        <h2 className="section-title">Local Crew. Quick Trucks. Zero Hassle.</h2>
        <div className={styles.copy}>
          <p>
            {business.name} was built around one simple idea: getting rid of junk shouldn&rsquo;t take over your
            weekend. You point, we lift, load, and go &mdash; and your space is clear before you know it.
          </p>
          <p>
            We know Laguna. Steep driveways, tight canyon streets, hillside stairs, and beach cottages with no
            room to spare are all part of a normal day for our crew. We show up on time, protect your floors and
            walls, and leave every space swept and clean.
          </p>
          <p>
            Before anything hits the landfill, we sort it. Usable furniture and household goods go to local
            charities, and metals, electronics, and cardboard get recycled, so less of our coastline&rsquo;s waste
            ends up buried.
          </p>
        </div>
        <p className={styles.sign}>Load it up. Watch it go.</p>
      </div>
    </section>
  );
}
