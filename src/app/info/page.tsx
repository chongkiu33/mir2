'use client';

// src/app/info/page.tsx
import axios from "axios";
import React from 'react';
import { useEffect, useState } from "react";
import Image from 'next/image';
import styles from './info.module.css'; // 使用CSS模块
import Link from 'next/link';
import Footer from '../components/footer/footer';


const InfoPage = () => {
  const [data, setData] = useState({
    about: '',
    concept: '',
    contact: '',
    email: '',
    ins: '',
  });

  useEffect(() => {
      const fetchData = async () => {
          try {
              // 请求 API 获取数据
              const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/info`, 
                {
                headers: {
                  Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
                }}
              );
              // console.log('API Response:', response.data.data);
              const info=response.data.data;
              // console.log('Fetched Infos:', info);
              // 更新组件状态
              setData({
                  about: info.AboutMIRArt,
                  concept: info.MIRArtConcept,
                  contact: info.Contact,
                  email: info.Email,
                  ins: info.Instagram,
              });
          } catch (err) {
              console.log(err);
          }
      };

      fetchData();
  }, []);

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
                          <Link href={`mailto:${data.email}`}>——&gt;Email</Link>
                          <Link href={data.ins} target="_blank" rel="noopener noreferrer">——&gt;Instagram</Link>
                  </div>
              </div>

              <div className={styles.textContainer}>
                  <div className={styles.title}>
                      Introduction of MIR DESIGN from a design company
                  </div>
                  <div className={styles.contentContainer}>
                      <div>
                          <div className={styles.subTitle}>About MIR Art</div>
                          <p>{data.about}</p>
                      </div>
                      <div>
                          <div className={styles.subTitle}>MIR Art concept</div>
                          <p>{data.concept}</p>
                      </div>
                      <div>
                          <div className={styles.subTitle}>Contact MIR Art</div>
                          <p>{data.contact}</p>
                      </div>
                  </div>
              </div>
          </div>
          <Footer />
      </div>
  );
};

export default InfoPage;