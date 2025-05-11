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
    const [rotateAngel, setRotateAngel] = useState(0);
  
    useEffect(() => {
      setMounted(true);

      const handleScroll = () => {
        const srollY = window.scrollY;

        if (window.scrollY > 50) { // 滚动 50px 之后触发动画
          setIsShrunk(true);
        } else {
          setIsShrunk(false);
        }

        setRotateAngel(srollY * 0.5); 
      };

      const handleMouseMove = (event:any) =>{
        if (pathname === '/object'){
          if(event.clientY >150){
            setIsShrunk(true);
          }else{
            setIsShrunk(false);
          }
        }

        if(pathname ==='/object' || pathname ==='/'){
          setRotateAngel(event.clientX * 0.5);
        }
      };

      if (pathname == '/object'){
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);
      } else if (pathname !=='/'){
        window.addEventListener('scroll', handleScroll);
      }else if (pathname ==='/'){
        window.addEventListener('mousemove', handleMouseMove);
        setIsShrunk(false);
        
      }

      return () => {
        if (pathname === '/object' || pathname === '/') {
          window.removeEventListener('mousemove', handleMouseMove);
        } else {
          window.removeEventListener('scroll', handleScroll);
        }
      };



    }, [pathname]);

    useEffect(() => {
      setRotateAngel(0);
    }, [pathname]);
  
    const getNavLinkClass = (href: string, index: number) => {
        if (!mounted) return styles.navLink;

        const transitionDelay = `${index * 0.1}s`; // 每个链接延迟 0.1s
        
        return `${styles.navLink} ${
          pathname === '/' || pathname.startsWith(href) ? styles.activeLink : styles.inactiveLink
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
                src="/logo9.svg"
                alt="Home" 
                width={50} 
                height={50} 
                className={styles.navImage}
                style={{ transform: `rotate(${rotateAngel}deg)` }}
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
              {href.replace('/', '').charAt(0).toUpperCase() + href.replace('/', '').slice(1)}
            </Link>
          </li>
        ))}
        </ul>
      </nav>
    );
  }


  