
// src/app/info/page.tsx
import React from 'react';
import Image from 'next/image';
import styles from './info.module.css'; 
import Link from 'next/link';
import Footer from '../components/footer/footer';

interface InfoData {
  About: string;
  MIRconcept: string;
  contact: string;
}


const InfoPage =  async() => {
  const res = await fetch('http://localhost:1337/api/info', { cache: 'no-store' });
  const data = await res.json();

  const { About, MIRconcept, contact } = data.data;


  return (
    <div className={styles.bigContainer}>
    <div  className={styles.container}>

      <div className={styles.imgContact}>
        <div className={styles.logoContainer}>
          <Image className={styles.logo} src="/logo.png" alt="logo" width={500} height={500} />
        </div>
        <div className={styles.contactContainer}>
        <Link href="/">——&gt;Email</Link>
        <Link href="https://www.instagram.com/mir88520?igsh=MW9vcXJyY2Zhd3Mycw%3D%3D&utm_source=qr">——&gt;Instagram</Link>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.title}>Introduction of MIR DESIGN 
        from a design company</div>
        <div className={styles.contentContainer}>
          <div>
            <div className={styles.subTitle}>About  MIR Art</div>
            <p>
            {About}
            </p>
            </div>
            <div>
            <div className={styles.subTitle}>MIR Art concept</div>
            <p>
            {MIRconcept}
            </p>
            </div>
            <div>
            <div className={styles.subTitle}>Contact MIR Art</div>
            <p>
            {contact}
            </p>
            
            </div>
          
        </div>
      </div>
      
    </div>
    <Footer />
    </div>
  );
};

export default InfoPage;
