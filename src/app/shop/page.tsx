'use client';
import Link from 'next/link';
import styles from './shop.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Shopping() {
    const [gap, setGap] = useState('20px');

    const handleLinkClick = (e:any) => {
        e.preventDefault(); // 阻止默认跳转
        setGap('1500px'); // 设置动画
        const targetUrl = e.currentTarget.getAttribute('href');

        // 等待动画完成后再进行页面跳转
        setTimeout(() => {
            window.location.href = targetUrl; // 手动跳转
        }, 500); // 动画持续时间（与transition.duration一致）
    };

    return (
        <div className={styles.bigcontainer}>
            <div className={styles.textContainer}>Please Select the region</div>

            <motion.div 
                className={styles.container} 
                style={{ gap }}
                initial={{ gap: '20px' }} 
                animate={{ gap }} // 动画设置
                transition={{ duration: 0.5 }} // 动画持续时间
            >
                <div className={styles.door}>
                    <Link className={styles.box} href="/shop/china" onClick={handleLinkClick}>
                        <video className={styles.video} autoPlay muted loop>
                            <source src="/video/china.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className={styles.text}>China</div>
                    </Link>
                </div>

                <div className={styles.door2}>
                    <Link className={styles.box} href="/shop/europe" onClick={handleLinkClick}>
                        <video className={styles.video} autoPlay muted loop>
                            <source src="/video/europe.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className={styles.text}>Europe</div>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
