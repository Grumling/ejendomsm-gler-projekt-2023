import Hero from '@/components/hero/hero'
import styles from './page.module.css'

export default function Home() {
  return <div className={styles.page}>
    <Hero />
  </div>
}
