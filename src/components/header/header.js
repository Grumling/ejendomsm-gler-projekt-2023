'use client'
import Link from 'next/link'
import styles from './header.module.css'
import { FaRegUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";
import Image from 'next/image';
import ButtonGreen from '../buttonGreen/buttonGreen';
import { useState } from 'react';

const HeaderComponent = () => {

  const [isOpen, SetIsOpen] = useState(false);

  return (
    <nav className={styles.headerContainer}>

      <div className={styles.headerLogo}>
        <Image src="./madser-logo.svg" alt="logo" width={150} height={100} />
      </div>

      
      {/* DESKTOP NAVIGATION MENU */}

      <div className={styles.navigationDesktop}>

        <Link className={styles.dropdown} a href="/">Salg</Link>
          <div className={styles.dropdownContent}>
            <Link a href="/">Salgsvudering</Link>
            <Link a href="/">Mit boligsalg</Link>
            <Link a href="/">Find mægler</Link>
          </div>


        <Link className={styles.dropdown} a href="/">Køb</Link>
          <div className={styles.dropdownContent}>
            <Link a href="/">Boligkøbet</Link>
            <Link a href="/">Køberrådgivning</Link>
          </div>

        <Link a href="/">Leje</Link>
        <Link a href="/">Blog</Link>

        <Link className={styles.dropdown} a href="/">Om os</Link>
          <div className={styles.dropdownContent}>
            <Link a href="/">Kontakt</Link>
          </div>
         

        <div>
          <Link a href="/">Login</Link>
          <FaRegUser />
        </div>

      </div>

      {/* DESKTOP NAVIGATION MENU END*/}

      <ButtonGreen  />

      <div onClick={ () => SetIsOpen(!isOpen)}>
        {isOpen ? <FaBarsStaggered className={styles.bars}></FaBarsStaggered> : <FaBars   className={styles.bars}></FaBars>}
      </div>  

      <div className={`${styles.mobileOverlay} ${isOpen ? styles.openOverlay : ''}`}>

        <Link a href="/">Salg</Link>
        <Link a href="/">Køb</Link>
        <Link a href="/">Leje</Link>
        <Link a href="/">Blog</Link>
        <Link a href="/">Om os</Link>
        <Link a href="/">Login</Link>

      </div>

    </nav>
  )
}

export default HeaderComponent
