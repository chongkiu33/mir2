"use client";

import { useState, useEffect } from 'react';
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
  const [isMounted, setIsMounted] = useState(false);

  // 在组件挂载后设置 isMounted 为 true
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // 确保代码只在客户端运行
    if (!isMounted) return;

    if (pathname !== '/') {
      const handleScroll = () => {
        const logo = document.querySelector(`.${styles.logoItem}`);
        const links = document.querySelectorAll(`.${styles.navLink}`);
        const scrollTop = window?.scrollY || 0;
        const logo2 = document.querySelector(`.${styles.navImage}`) as HTMLImageElement;

        if (scrollTop > 50) {
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

      // 使用可选链操作符检查 window 是否存在
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', handleScroll);
        
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }
    }
  }, [pathname, isMounted]);

  useEffect(() => {
    // 确保代码只在客户端运行
    if (!isMounted) return;

    if (pathname === '/object') {
      const handleMouseMove = (event: MouseEvent) => {
        setMouseY(event.clientY);
        const logo = document.querySelector(`.${styles.logoItem}`);
        const links = document.querySelectorAll(`.${styles.navLink}`);

        if (event.clientY > 150) {
          if (logo) {
            logo.classList.add(styles.shrunk);
            logo.classList.add(styles.move);
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

      // 使用可选链操作符检查 window 是否存在
      if (typeof window !== 'undefined') {
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }
    }
  }, [pathname, isMounted]);

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
            <Link href="/info" className={`${styles.navLink} ${pathname === '/info' ? styles.active : pathname === '/' ? styles.homePage : ''}`}>Info</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/shop" className={`${styles.navLink} ${pathname === '/shop' ? styles.active : pathname === '/' ? styles.homePage : ''}`}>Shop</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}