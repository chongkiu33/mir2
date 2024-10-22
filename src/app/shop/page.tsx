"use client"
import Link from 'next/link';
import styles from './shop.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Shopping() {
  const [gap, setGap] = useState('20px');

  const handleLinkClick = (url: string) => {
    setGap('1500px');
    // 延迟跳转
    setTimeout(() => {
      window.location.href = url; // 使用 window.location.href 进行跳转
    }, 1000); // 设置延迟，确保与动画持续时间匹配
  }

  return (
    <div className={styles.bigcontainer}>
      <div className={styles.textContainer}>Please Select the region</div>
      <motion.div 
        className={styles.container} 
        style={{ gap }}
        initial={{ gap: '20px' }} 
        animate={{ gap }} 
        transition={{ duration: 1 }} 
      >
        <div className={styles.door}>
          <a className={styles.box} onClick={() => handleLinkClick('/shop/china')}>
            <video className={styles.video} autoPlay muted loop>
              <source src="/video/china.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className={styles.text}>China</div>
          </a>
        </div>

        <div className={styles.door2}>
          <a className={styles.box} onClick={() => handleLinkClick('/shop/europe')}>
            <video className={styles.video} autoPlay muted loop>
              <source src="/video/europe.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className={styles.text}>Europe</div>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
