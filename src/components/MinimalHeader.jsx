import business from '../data/business.js';
import Logo from './Logo.jsx';
import Icon from './Icon.jsx';
import styles from './MinimalHeader.module.css';

export default function MinimalHeader() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Logo size="sm" />
        <a href={business.phoneHref} className={styles.phone}>
          <Icon name="phone" size={16} />
          <span>{business.phone}</span>
        </a>
      </div>
    </header>
  );
}
