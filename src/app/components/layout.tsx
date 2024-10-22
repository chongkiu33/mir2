"use client"; // 客户端渲染

import { useEffect, useState } from 'react';  
import { usePathname } from 'next/navigation'; 
import Link from "next/link"; 
import { ReactNode } from "react";
import "../globals.css"; 
import Image from 'next/image';
import styles from './layout.module.css';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    if (pathname !== '/') {
      const handleScroll = () => {
        const logo = document.querySelector(`.${styles.logoItem}`);
        const links = document.querySelectorAll(`.${styles.navLink}`);
        const scrollTop = window.scrollY; // 仅在客户端执行

        if (logo) {
          if (scrollTop > 50) {
            logo.classList.add(styles.shrunk);
            const logo2 = document.querySelector(`.${styles.navImage}`) as HTMLImageElement;
            if (logo2) {
              logo2.style.transform = `rotate(${scrollTop * 0.5}deg)`;
            }
          } else {
            logo.classList.remove(styles.shrunk);
          }
        }

        links.forEach((link, index) => {
          setTimeout(() => {
            if (scrollTop > 50) {
              link.classList.add(styles.hidden);
              link.classList.remove(styles.showing);
            } else {
              link.classList.remove(styles.hidden);
              link.classList.add(styles.showing);
            }
          }, index * 100);
        });
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname === '/object') {
      const handleMouseMove = (event: MouseEvent) => {
        setMouseY(event.clientY);
        const logo = document.querySelector(`.${styles.logoItem}`);
        const links = document.querySelectorAll(`.${styles.navLink}`);

        if (logo) {
          if (event.clientY > 150) {
            logo.classList.add(styles.shrunk);
            logo.classList.add(styles.move);
          } else {
            logo.classList.remove(styles.shrunk);
            logo.classList.remove(styles.move);
          }
        }

        links.forEach((link, index) => {
          setTimeout(() => {
            if (event.clientY > 150) {
              link.classList.add(styles.hidden);
              link.classList.remove(styles.showing);
            } else {
              link.classList.remove(styles.hidden);
              link.classList.add(styles.showing);
            }
          }, index * 100);
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [pathname]);

  return (
    <div>
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
      </nav>
      <main>{children}</main>
    </div>
  );
}
