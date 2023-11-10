import Image from 'next/image'
import styles from './boilerbox.module.css'
import Link from 'next/link'

const BoilerBox = () => {
  return (
    <div className={styles.boilerbox}>
      <Image
        src={'/next-js.svg'}
        alt={'MCDM Logo'}
        width={232}
        height={195}
      ></Image>
      <div>
        <h1>NextJS Template</h1>
        <p>Medieskolerne Viborg</p>
        <br />
        <h2>Husk at køre npm install</h2>
        <span>
          <Link href={'/about'}></Link>
        </span>
      </div>
    </div>
  )
}

export default BoilerBox
