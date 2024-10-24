"use client"; // 客户端渲染

import { useState, useEffect } from 'react';  // React 的 Hooks，用于状态管理和副作用处理
import { useRouter, usePathname } from 'next/navigation'; // 使用 next/navigation 获取路由和路径名
import Link from "next/link"; 
import { ReactNode } from "react";
import "../globals.css"; 
import Image from 'next/image';
import Loading from './Loading'; 
import styles from './layout.module.css';


type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleRouteChangeStart = () => setLoading(true);
    const handleRouteChangeComplete = () => setLoading(false);

    handleRouteChangeStart();
    handleRouteChangeComplete();
  }, [pathname]);

  useEffect(() => {
    if (pathname !== '/') { // 确保滚动隐藏效果在所有非主页的页面应用
      const handleScroll = () => {
        const logo = document.querySelector(`.${styles.logoItem}`);
        const links = document.querySelectorAll(`.${styles.navLink}`);
        const scrollTop = window.scrollY;
        const logo2 = document.querySelector(`.${styles.navImage}`)  as HTMLImageElement;

        if (scrollTop > 50) { // Adjust the scroll value as needed
          if (logo) {
            logo.classList.add(styles.shrunk);
            logo2.style.transform = `rotate(${scrollTop*0.5}deg)`;
          }
          if (links) {
            links.forEach((link, index) => {
              setTimeout(() => {
                link.classList.add(styles.hidden);
                link.classList.remove(styles.showing);
              }, index * 100);
            });
          }
        } else {
          if (logo) {
            logo.classList.remove(styles.shrunk);
          }
          if (links) {
            links.forEach((link, index) => {
              setTimeout(() => {
                link.classList.remove(styles.hidden);
                link.classList.add(styles.showing);
              }, index * 100);
            });
          }
        }

      

      };


      window.addEventListener('scroll', handleScroll);
      

      return () => {
        window.removeEventListener('scroll', handleScroll);
       
      };
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname === '/object') { // 替换为您需要应用此效果的页面路径
        const handleMouseMove = (event: MouseEvent) => {
            setMouseY(event.clientY);
            const logo = document.querySelector(`.${styles.logoItem}`);
            const links = document.querySelectorAll(`.${styles.navLink}`);
            const scrollTop = window.scrollY;

            if (event.clientY > 150) { // 调整为需要的鼠标高度
              if (logo) {
                logo.classList.add(styles.shrunk);
                logo.classList.add(styles.move);
              } // 隐藏 logo 和链接
              if (links) {
                links.forEach((link, index) => {
                  setTimeout(() => {
                    link.classList.add(styles.hidden);
                    link.classList.remove(styles.showing);
                  }, index * 100);
                });
              }
            } else {
              if (logo) {
                logo.classList.remove(styles.shrunk);
                logo.classList.remove(styles.move);
              }
              if (links) {
                links.forEach((link, index) => {
                  setTimeout(() => {
                    link.classList.remove(styles.hidden);
                    link.classList.add(styles.showing);
                  }, index * 100);
                });
              }
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }
}, [pathname]);

  return (
    <>
      {/* {loading ? (
        <Loading onLoadingComplete={() => setLoading(false)} />
      ) : (
        <div >
          <nav className={styles.navbar}>
            <ul className={styles.navList}>
              <li className={`${styles.navItem} ${styles.logoItem}`}>
                <Link href="/">
                  <Image src="/logo.svg" alt="Home" width={50} height={50} className={styles.navImage} />
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/archiv" className={`${styles.navLink} ${pathname === '/archiv' ? styles.active : pathname === '/' ? styles.homePage : ''}`}>Archiv</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/object" className={`${styles.navLink} ${pathname === '/object' ? styles.active : pathname === '/' ? styles.homePage : ''}`}>Object</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/info" className={`${styles.navLink} ${pathname === '/info' ? styles.active : pathname === '/' ? styles.homePage  : ''}`}>Info</Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/shop" className={`${styles.navLink} ${pathname === '/shop' ? styles.active : pathname === '/' ? styles.homePage  : ''}`}>Shop</Link>
              </li>
            </ul>
          </nav> */}
          <main>{children}</main>
        {/* </div>
      )} */}
    </>
  );
}
