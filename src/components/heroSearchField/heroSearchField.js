'use client'
import styles from './heroSearchField.module.css'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaTwitter, FaFacebook, FaTiktok } from 'react-icons/fa'
import Image from 'next/image';

const HeroSearchField = () => {

  return (
    <div className={styles.heroSearchFieldContainer}>

      <div className={styles.heroIntroText}>
        <p>Din nye ejendomsmægler</p>

        <h2>Ring og få en snak med os idag.</h2>

        <h2>Vi klarer det for dig</h2>
      </div>
      
      <label className={styles.searchLabel}>Bolig vudering</label>
      <div className={styles.searchWrapper}>
          <input
            className={styles.searchInput}
            type='text'
            placeholder='Indtast adresse'
          />
          <button className={styles.searchButton}>
          <FaMagnifyingGlass />
          </button>
      </div>

      <label className={styles.searchLabel}>Søg bolig</label>
      <div className={styles.searchWrapper}>
          <input
            className={styles.searchInput}
            type='text'
            placeholder='postnummer, kommune, by, adresse'
          />
          <button className={styles.searchButton}>
          <FaMagnifyingGlass />
          </button>
      </div>

      <label className={styles.searchLabel}>Find mægler</label>
      <div className={styles.searchWrapper}>
          <input
            className={styles.searchInput}
            type='text'
            placeholder='By eller postnummer'
          />
          <button className={styles.searchButton}>
          <FaMagnifyingGlass />
          </button>
      </div>

      <div className={styles.soMeSearch}>
        <FaTwitter />
        <FaFacebook />
        <FaTiktok />
      </div>

      <figure className={styles.heroImage}>
        <Image src="/heroPersonPic.jpg" alt="person" width={100} height={100} />
      </figure>

    </div>
  )
}

export default HeroSearchField
