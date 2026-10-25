import business from '../data/business.js';
import Icon from './Icon.jsx';
import styles from './Reviews.module.css';

// Renders only when real reviews are added to business.reviews
// Each review: { name: 'First L.', area: 'Laguna Beach', text: '...' }
export default function Reviews() {
  const reviews = business.reviews || [];
  if (reviews.length === 0) return null;

  return (
    <section id="reviews" className={styles.section}>
      <div className="container">
        <div className="center">
          <span className="eyebrow">Reviews</span>
          <h2 className="section-title">What Our Customers Say</h2>
        </div>
        <div className={styles.grid}>
          {reviews.map((r) => (
            <figure key={r.name + r.text.slice(0, 12)} className={styles.card}>
              <div className={styles.stars} aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((n) => (
                  <Icon key={n} name="star" size={18} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className={styles.text}>{r.text}</blockquote>
              <figcaption className={styles.who}>
                <strong>{r.name}</strong>
                {r.area && <span>{r.area}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
