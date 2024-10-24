'use client'
import { usePathname } from 'next/navigation'
import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Navbar() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);
    const [isShrunk, setIsShrunk] = useState(false);
  
    useEffect(() => {
      setMounted(true);

      if (pathname !== '/' && pathname !== '/object') {
        const handleScroll = () => {
          if (window.scrollY > 50) { // 滚动 50px 之后触发动画
            setIsShrunk(true);
          } else {
            setIsShrunk(false);
          }
        };
        
        window.addEventListener('scroll', handleScroll);
  
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }
    }, [pathname]);
  
    const getNavLinkClass = (href: string, index: number) => {
        if (!mounted) return styles.navLink;

        const transitionDelay = `${index * 0.1}s`; // 每个链接延迟 0.1s
        
        return `${styles.navLink} ${
          pathname === '/' || pathname === href ? styles.activeLink : styles.inactiveLink
        } ${isShrunk ? styles.hidden :styles.showing}`;
    };
  
    return (
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={`${styles.navItem} ${styles.logoItem} ${isShrunk ? styles.shrunk : ''}`}>
            <Link 
              href="/" 
             
            >
              <Image 
                src="/logo.svg" 
                alt="Home" 
                width={50} 
                height={50} 
                className={styles.navImage}
              />
            </Link>
          </li>
          {['/archiv', '/object', '/info', '/shop'].map((href, index) => (
          <li key={href} className={styles.navItem}>
            <Link 
              href={href} 
              className={getNavLinkClass(href, index)}
              style={{ transitionDelay: `${index * 0.1}s` }} // 设置逐个上移的延迟
            >
              {href.replace('/', '')}
            </Link>
          </li>
        ))}
        </ul>
      </nav>
    );
  }