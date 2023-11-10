import Image from 'next/image'
import styles from '../footerQuickMenu/footerQuickMenu.module.css'
import ButtonWhite from '../buttonWhite/buttonWhite'

const FooterQuickMenu = () => {
  return (
    <div className={styles.footerQuickMenuWrapper}>
      <div className={styles.adressWrapper}>
        <h2>Tast din adresse</h2>
        <h3>For at får en bolig vudering</h3>
        <Image
          src='/quickMenuAdresseeIcon.svg'
          alt='Adress Icon'
          width={119}
          height={101}
        />
        <div className={styles.quickMenuInputWrapper}>
          <input
            className={styles.quickMenuInput}
            type='text'
            placeholder='Tast din adresse'
          />
          <button className={styles.quickMenuButton}>Videre</button>
        </div>
      </div>

      <hr className={styles.seperatorLine}></hr>

      <div className={styles.contactWrapper}>
        <h2>Har du spørgsmål</h2>
        <h3>Så indtast dit nummer, så ringer vi tilbage</h3>
        <Image
          src='/quickMenuContactIcon.svg'
          alt='Adress Icon'
          width={119}
          height={101}
        />
        <div className={styles.quickMenuInputWrapper}>
          <input
            className={styles.quickMenuInput}
            type='text'
            placeholder='Telefonnummer'
          />
          <button className={styles.quickMenuButton}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default FooterQuickMenu
