'use client';

// src/app/info/page.tsx

import React from 'react';
import { useEffect, useState } from "react";
import Image from 'next/image';
import styles from './info.module.css'; // 使用CSS模块
import Link from 'next/link';
import Footer from '../components/footer/footer';


const InfoPage = () => {
 

  return (
      <div className={styles.bigContainer}>
          <div className={styles.container}>
              <div className={styles.imgContact}>
                  <div className={styles.logoContainer}>
                      <Image
                          className={styles.logo}
                          src="/logo.png"
                          alt="logo"
                          width={500}
                          height={500}
                      />
                  </div>
                  <div className={styles.contactContainer}>
                          <Link href={` 'hello@mir.dog'`}>——&gt;Email</Link>
                          <Link href={'https://www.instagram.com/mir/'} target="_blank" rel="noopener noreferrer">——&gt;Instagram</Link>
                  </div>
              </div>

              <div className={styles.textContainer}>
                  <div className={styles.title}>
                      Introduction of MIR DESIGN from a design company
                  </div>
                  <div className={styles.contentContainer}>
                      <div>
                          <div className={styles.subTitle}>About MIR Art</div>
                          <p>about infomation</p>
                      </div>
                      <div>
                          <div className={styles.subTitle}>MIR Art concept</div>
                          <p>concept infomation</p>
                      </div>
                      <div>
                          <div className={styles.subTitle}>Contact MIR Art</div>
                          <p>contact infomation</p>
                      </div>
                  </div>
              </div>
          </div>
          <Footer />
      </div>
  );
};

export default InfoPage; 