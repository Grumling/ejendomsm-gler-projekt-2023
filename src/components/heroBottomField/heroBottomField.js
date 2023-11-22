'use client'
import styles from './heroBottomField.module.css'
import { FaPhone } from "react-icons/fa6";

const HeroBottomField = () => {

  return (
    <div className={styles.heroBottomFieldContainer}>

      <div className={styles.heroBottomField}>
        <FaPhone />
        <p>Ring og få en snak med os idag</p>
        <p>Telefon + 45 88 88 88 88. Vi sidder klar på <br /> hverdage fra 09:00 - 16:00</p>
      </div>

    </div>
  )
}

export default HeroBottomField
