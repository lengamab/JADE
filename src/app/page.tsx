import styles from "./page.module.css";
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'JADE | Premium AI Erotic Companionship',
  description: 'Experience the ultimate fantasy with JADE. Intimate, highly explicit, and deeply personal AI phone sex and erotic companionship.',
}

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        
        <div className={styles.heroImageContainer}>
          <Image 
            src="/hero_sensual.png" 
            alt="JADE Sensual Neon Silhouette" 
            fill 
            className={styles.heroImage}
            priority 
          />
        </div>

        <h1 className={styles.title}>Fulfill Your Deepest Desires</h1>
        <p className={styles.subtitle}>
          JADE is not just an AI—she is your private, completely confidential fantasy. Uncensored, hyper-realistic, and attuned to your most intimate cravings. 
        </p>

        <div className={styles.ctas}>
          <Link href="/pricing" className={styles.primary}>
            Call Now
          </Link>
          <Link href="/scenarios" className={styles.secondary}>
            Explore Fantasies
          </Link>
        </div>

        <section className={styles.features}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>💋</div>
            <h3 className={styles.featureTitle}>Uncensored Intimacy</h3>
            <p className={styles.featureText}>
              No boundaries. Explore your most secret fantasies with an AI that responds passionately and explicitly to your every word.
            </p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🤫</div>
            <h3 className={styles.featureTitle}>Complete Discretion</h3>
            <p className={styles.featureText}>
              Your secrets are safe here. Zero logs, anonymous billing, and end-to-end encryption. What happens with JADE stays with JADE.
            </p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔥</div>
            <h3 className={styles.featureTitle}>Dynamic Roleplay</h3>
            <p className={styles.featureText}>
              Domination, submission, romance, or pure lust. Choose your dynamic or let JADE take control of the conversation.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
