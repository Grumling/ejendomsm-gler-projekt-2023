'use client'
import HeroBottomField from '../heroBottomField/heroBottomField'
import HeroSearchField from '../heroSearchField/heroSearchField'
import styles from './hero.module.css'

const Hero = () => {

  return (
    <div className={styles.heroContainer}>

      <div className={styles.heroWrapper}>
        <HeroSearchField />
        <HeroBottomField />
      </div>

    </div>
  )
}

export default Hero
