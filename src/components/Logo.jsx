import { Link } from 'react-router-dom';
import business from '../data/business.js';
import styles from './Logo.module.css';

// Logo source ratio 900 x 237 (≈ 3.8 : 1). Explicit pixel sizes +
// aspect-ratio + object-fit prevent stretching in flex layouts.
export default function Logo({ variant = 'color', size = 'md', onClick }) {
  const src = variant === 'white' ? '/logo-white.png' : '/logo.png';
  return (
    <Link to="/" className={`${styles.wrap} ${styles[size]}`} aria-label={`${business.name} home`} onClick={onClick}>
      <img src={src} alt={business.name} width="900" height="237" className={styles.img} />
    </Link>
  );
}
