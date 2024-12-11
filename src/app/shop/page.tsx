'use client';
import Link from 'next/link';
import styles from './shop.module.css';
import { useState } from 'react';
import { delay, motion } from 'framer-motion';
import Image from 'next/image';
import { transform } from 'next/dist/build/swc';

export default function Shopping() {
    const [gap, setGap] = useState('0px');
    const [zIndex, setZIndex] = useState(1);
    const [scale, setScale] = useState(1);
    const [opacity, setOpacity] = useState(1);

    const handleLinkClick = (e:any) => {
        e.preventDefault(); // 阻止默认跳转
        setZIndex(-2);
        setOpacity(0);
        setGap('1000px'); // 设置动画
        setScale(2.5); // 设置 scale 动画
        const targetUrl = e.currentTarget.getAttribute('href');

        // 等待动画完成后再进行页面跳转
        setTimeout(() => {
            window.location.href = targetUrl; // 手动跳转
        }, 500); // 动画持续时间（与transition.duration一致）
    };

    return (
      
        <motion.div
        className={styles.bigcontainer}
        animate={{ scale }} // 动画设置
        transition={{ duration: 0.5, delay: 0.3 }} // 动画持续时间
    >
            {/* <div className={styles.textContainer}>Please Select the region</div> */}
            <div className={styles.frame}>
            <Image src="/frame.png" alt="Activity Image" width={600} height={600} />
            </div>



            <motion.div 
                className={styles.doorbox}
                style={{ gap,zIndex }}
                initial={{ gap: '0' }} 
                animate={{ gap }} // 动画设置
                transition={{ duration: 0.5 }} // 动画持续时间
            >
            


               <Link className={styles.door}  href="/shop/china" onClick={handleLinkClick}>
                    <Image src="/left.png" alt="Activity Image" width={600} height={600} />
                </Link>
                

                <Link className={styles.door} href="/shop/europe" onClick={handleLinkClick}>
              <Image src="/right.png" alt="Activity Image" width={600} height={600} /> 
              </Link>
           
          
            </motion.div>


            <motion.div 
                className={styles.videobox}
                style={{ gap }}
                initial={{ gap: '0' }} 
                animate={{ gap }} // 动画设置
                transition={{ duration: 0.5 }} // 动画持续时间
            >
            


                <div className={styles.videodoor} >
                    
                <div className={styles.text} style={{transform:'translateX(20%)'}}>China</div>
                <div style={{width: '100%', height: '100%'}}>
                
                <video className={styles.video}  autoPlay muted loop unselectable='on'>
                            <source src="/video/china.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        
                </div>
                
                 </div>

              <div className={styles.videodoor} >
                <div className={styles.text} style={{transform:'translateX(-20%)'}}>Europe</div>
              <div style={{backgroundColor: 'black', width: '100%', height: '100%'}}>
              <video className={styles.video}  autoPlay muted loop unselectable='on'>
                            <source src="/video/europe2.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

              </div>
                        
              </div>
           

            </motion.div>


            </motion.div>
        
    );
}
