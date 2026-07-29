import Link from 'next/link';
import styles from './layout.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerNav}>
        <Link href="/privacy" className={styles.footerLink}>Privacy Policy</Link>
        <Link href="/terms" className={styles.footerLink}>Terms of Service</Link>
        <Link href="/contact" className={styles.footerLink}>Contact Us</Link>
      </div>
      <p className={styles.copyright}>© {new Date().getFullYear()} JADE IA. All rights reserved. 18+ strictly enforced.</p>
    </footer>
  );
}
