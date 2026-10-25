import { Link } from 'react-router-dom';
import business, { services } from '../data/business.js';
import Logo from './Logo.jsx';
import Icon from './Icon.jsx';
import styles from './Footer.module.css';

const links = [
  { label: 'Services', href: '/#services' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Our Work', href: '/#before-after' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'About', href: '/#about' },
  { label: 'Service Area', href: '/#service-area' },
  { label: 'FAQ', href: '/#faq' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.blade} aria-hidden="true" />
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Logo variant="white" size="lg" />
          <p className={styles.about}>
            Fast, upfront-priced junk removal for homes and businesses in {business.serviceAreaLabel}.
          </p>
          <Link to="/get-estimate" className="btn btn-primary">
            Get a Free Estimate
          </Link>
        </div>

        <div>
          <h3 className={styles.heading}>Services</h3>
          <ul className={styles.list}>
            {services.slice(0, 6).map((s) => (
              <li key={s.title}>
                <a href="/#services">{s.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={styles.heading}>Company</h3>
          <ul className={styles.list}>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={styles.heading}>Contact</h3>
          <ul className={`${styles.list} ${styles.contact}`}>
            <li>
              <Icon name="phone" size={17} />
              <a href={business.phoneHref}>{business.phone}</a>
            </li>
            <li>
              <Icon name="pin" size={17} />
              <span>{business.addressDisplay}</span>
            </li>
            <li>
              <Icon name="clock" size={17} />
              <span>{business.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <span>
            &copy; {year} {business.name}. All rights reserved.
          </span>
          <span>Serving {business.serviceAreaLabel}</span>
        </div>
      </div>
    </footer>
  );
}
