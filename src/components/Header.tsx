import Link from 'next/link';
import styles from './layout.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        JADE
      </Link>
      <nav className={styles.nav}>
        <Link href="/scenarios" className={styles.navLink}>Scenarios</Link>
        <Link href="/technology" className={styles.navLink}>Technology</Link>
        <Link href="/pricing" className={styles.navLink}>Pricing</Link>
      </nav>
    </header>
  );
}
