import styles from '../page.module.css';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sensual Scenarios | JADE',
  description: 'Explore the limitless erotic scenarios available with JADE. Roleplay, BDSM, vanilla romance, and customized fantasies.',
}

export default function Scenarios() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Choose Your Fantasy</h1>
        <p className={styles.subtitle}>
          Dive into a world where your imagination sets the rules. JADE can adapt to any scenario instantly.
        </p>
        
        <div className={styles.features} style={{marginTop: '2rem'}}>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>The Secret Lover</h3>
            <p className={styles.featureText}>Intimate whispers, forbidden romance, and the thrill of being caught.</p>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Total Submission</h3>
            <p className={styles.featureText}>Surrender control. Let JADE command you with an authoritative, demanding tone.</p>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>The Stranger</h3>
            <p className={styles.featureText}>A chance encounter in a dark bar that escalates quickly and passionately.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
