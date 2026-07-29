import styles from '../page.module.css';
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'AI Technology | JADE',
  description: 'Learn about the hyper-realistic voice AI engine powering JADE. Ultra-low latency and unparalleled vocal inflection.',
}

export default function Technology() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.heroImageContainer} style={{ height: '300px' }}>
          <Image 
            src="/ai_voice.png" 
            alt="AI Voice Technology" 
            fill 
            className={styles.heroImage}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <h1 className={styles.title}>The Engine of Desire</h1>
        <p className={styles.subtitle}>
          Powered by state-of-the-art Generative Voice AI, JADE breathes, sighs, and speaks with indistinguishable human realism.
        </p>
      </main>
    </div>
  );
}
