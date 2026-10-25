import { Link } from 'react-router-dom';
import business from '../data/business.js';
import Icon from './Icon.jsx';
import styles from './MobileCallBar.module.css';

export default function MobileCallBar() {
  return (
    <div className={styles.bar}>
      <a href={business.phoneHref} className={styles.call}>
        <Icon name="phone" size={18} /> Call Now
      </a>
      <Link to="/get-estimate" className={styles.quote}>
        Free Estimate
      </Link>
    </div>
  );
}
