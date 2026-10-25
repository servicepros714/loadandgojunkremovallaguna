import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import business from '../data/business.js';
import Logo from './Logo.jsx';
import Icon from './Icon.jsx';
import styles from './Header.module.css';

const nav = [
  { label: 'Services', href: '/#services' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'About', href: '/#about' },
  { label: 'Service Area', href: '/#service-area' },
  { label: 'FAQ', href: '/#faq' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.topbar}>
        <div className={`container ${styles.topInner}`}>
          <span className={styles.topItem}>
            <Icon name="pin" size={15} /> Serving {business.serviceAreaLabel}
          </span>
          <span className={styles.topItem}>
            <Icon name="clock" size={15} /> Same-day &amp; next-day pickups
          </span>
        </div>
      </div>

      <div className={`container ${styles.bar}`}>
        <Logo onClick={close} />

        <nav className={styles.nav} aria-label="Main">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href={business.phoneHref} className={styles.phone}>
            <span className={styles.phoneIcon}>
              <Icon name="phone" size={16} />
            </span>
            <span className={styles.phoneText}>
              <small>Call now</small>
              {business.phone}
            </span>
          </a>
          <Link to="/get-estimate" className={`btn btn-primary ${styles.cta}`}>
            Get a Free Estimate
          </Link>
          <button
            type="button"
            className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`} hidden={!open}>
        <nav className={styles.drawerNav} aria-label="Mobile">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className={styles.drawerLink} onClick={close}>
              {item.label}
              <Icon name="arrow" size={18} />
            </a>
          ))}
        </nav>
        <div className={styles.drawerActions}>
          <Link to="/get-estimate" className="btn btn-primary" onClick={close}>
            Get a Free Estimate
          </Link>
          <a href={business.phoneHref} className="btn btn-navy" onClick={close}>
            <Icon name="phone" /> {business.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
