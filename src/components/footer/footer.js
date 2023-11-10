import styles from './footer.module.css'
import ButtonWhite from '../buttonWhite/buttonWhite'
import { FaTwitter, FaFacebook, FaTiktok } from 'react-icons/fa'
import FooterQuickMenu from '../footerQuickMenu/footerQuickMenu'

const FooterComponent = () => {
  return (
    <footer className={styles.footerContainer}>

        <div className={styles.footerWrapper}> 

          <div className={styles.footerQuickMenuWrapper}>
            <FooterQuickMenu />
          </div>

          <div className={styles.topContainer}>

            <h2>
              Vi hjælper dig hele vejen igenem
            </h2>

            <p>
            Selvom du selv står for fremvisningerne, så er du aldrig helt alene. Vores dygtige medarbejdere står altid klar til at hjælpe med lige netop dit boligsalg.
            </p>

            <ButtonWhite />
          </div>

          <div className={styles.bottomContainer}>
            
          <div className={styles.soMeWrapper}>
            <h2>
              Find os her
            </h2>
  
            <div className={styles.someIocns}>
              <FaTwitter />
              <FaFacebook />
              <FaTiktok />
            </div>
          </div>

          <div className={styles.contactWrapper}> 

            <p>
              MadsER bolig Danmarks bedste ejendomsmægler
            </p>

            <p>
              Copyright © 2023, Mike B Kristiansen
            </p>
          
          </div>

          </div>

        </div>

    </footer>
  )
}

export default FooterComponent
