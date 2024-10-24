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
  
    useEffect(() => {
      setMounted(true);
    }, []);
  
    const getNavLinkClass = (href:any) => {
        if (!mounted) return styles.navLink;
        
        
        return `${styles.navLink} ${
          pathname === '/' || pathname === href ? styles.activeLink : styles.inactiveLink
        }`;
      };
  
    return (
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={`${styles.navItem} ${styles.logoItem}`}>
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
          <li className={styles.navItem}>
            <Link 
              href="/archiv" 
              className={getNavLinkClass('/archiv')}
            >
              Archiv
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link 
              href="/object" 
              className={getNavLinkClass('/object')}
            >
              Object
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link 
              href="/info" 
              className={getNavLinkClass('/info')}
            >
              Info
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link 
              href="/shop" 
              className={getNavLinkClass('/shop')}
            >
              Shop
            </Link>
          </li>
        </ul>
      </nav>
    );
  }