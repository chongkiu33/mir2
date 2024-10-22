
// src/app/info/page.tsx
import React from 'react';
import Image from 'next/image';
import styles from './info.module.css'; // 使用CSS模块
import Link from 'next/link';
import Footer from '../components/footer/footer';

const InfoPage = () => {
  return (
    <div className={styles.bigContainer}>
    <div  className={styles.container}>

      <div className={styles.imgContact}>
        <div className={styles.logoContainer}>
          <Image className={styles.logo} src="/logo.png" alt="logo" width={500} height={500} />
        </div>
        <div className={styles.contactContainer}>
        <Link href="/">——&gt;Email</Link>
        <Link href="/">——&gt;Instagram</Link>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.title}>Introduction of MIR DESIGN 
        from a design company</div>
        <div className={styles.contentContainer}>
          <div>
            <div className={styles.subTitle}>About  MIR Art</div>
            <p>
            Mir is an innovative art platform dedicated to celebrating object-based art and integrating the essence of creativity into everyday life. Working with artists around the world, Mir seeks to transform ordinary spaces into canvases of artistic expression, making life not only more artistic, but also more engaging and enjoyable.
            </p>
            </div>
            <div>
            <div className={styles.subTitle}>MIR Art concept</div>
            <p>
            Sustainability is at the core of our philosophy. We advocate the use of environmentally friendly materials and innovative technologies in our projects to ensure that our pursuit of artistic expression does not come at the expense of the planet&rsquo;s environment. At the same time, we encourage artists to make breakthroughs in new media and new technologies, keeping Mir at the forefront of artistic innovation.
            </p>
            </div>
            <div>
            <div className={styles.subTitle}>Contact MIR Art</div>
            <p>
            +86 19117237689
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
