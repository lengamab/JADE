import styles from "./page.module.css";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JADE | AI-Powered Premium Encounters',
  description: 'Experience the future of connection with JADE, the premier AI-driven erotic phone service. Deeply engaging, completely confidential.',
}

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        
        <h1 className={styles.title}>Welcome to JADE</h1>
        <p className={styles.subtitle}>
          The future of connection is here. Immerse yourself in our premium, AI-driven erotic phone service. Completely confidential, hyper-realistic, and tailored exactly to your desires.
        </p>

        <div className={styles.ctas}>
          <a href="#start" className={styles.primary}>
            Start Your Experience
          </a>
          <a href="#learn-more" className={styles.secondary}>
            Learn More
          </a>
        </div>

        <section className={styles.features}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>✨</div>
            <h3 className={styles.featureTitle}>Advanced AI Voices</h3>
            <p className={styles.featureText}>
              Powered by the latest generative voice AI for incredibly realistic and responsive interactions that feel truly human.
            </p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔒</div>
            <h3 className={styles.featureTitle}>Total Privacy</h3>
            <p className={styles.featureText}>
              Your sessions are completely confidential. We use end-to-end encryption and strict data deletion policies.
            </p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🎭</div>
            <h3 className={styles.featureTitle}>Endless Scenarios</h3>
            <p className={styles.featureText}>
              From romantic whispers to wild fantasies, JADE adapts to your imagination in real-time.
            </p>
          </div>
        </section>

      </main>
    </div>
  );
}
