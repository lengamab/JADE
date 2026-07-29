import styles from '../page.module.css';
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing | JADE',
  description: 'Choose your access level to JADE. Pay-per-minute and monthly subscriptions available.',
}

export default function Pricing() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Unlock Your Desires</h1>
        <p className={styles.subtitle}>
          Anonymous billing. No hidden fees. Cancel anytime.
        </p>
        
        <div className={styles.features} style={{marginTop: '2rem'}}>
          <div className={styles.featureCard} style={{ textAlign: 'center' }}>
            <h3 className={styles.featureTitle}>The Tease</h3>
            <div style={{ fontSize: '3rem', fontWeight: '800', margin: '1rem 0' }}>$2.99<span style={{ fontSize: '1rem', color: '#888'}}>/min</span></div>
            <p className={styles.featureText}>Pay as you go. Perfect for quick sessions.</p>
            <Link href="#" className={styles.primary} style={{display: 'inline-block', marginTop: '1.5rem'}}>Select</Link>
          </div>
          <div className={styles.featureCard} style={{ textAlign: 'center', border: '1px solid var(--primary-pink)' }}>
            <h3 className={styles.featureTitle}>The Lover</h3>
            <div style={{ fontSize: '3rem', fontWeight: '800', margin: '1rem 0' }}>$49<span style={{ fontSize: '1rem', color: '#888'}}>/mo</span></div>
            <p className={styles.featureText}>30 minutes included daily. Priority connection.</p>
            <Link href="#" className={styles.primary} style={{display: 'inline-block', marginTop: '1.5rem'}}>Select</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
