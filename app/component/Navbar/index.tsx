"use client"
import { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import {  HiUser } from "react-icons/hi";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('#collect');
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);

  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link');

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
    
      navLinks.forEach(link => {
        const targetId = link.getAttribute('href');
        
        if (targetId !== null) {
          const targetElement = document.querySelector(targetId);
    
          if (targetElement instanceof HTMLElement) {
            const targetPosition = targetElement.offsetTop - 100;
    
            if (scrollPosition >= targetPosition) {
              setActiveLink(targetId);
            }
          }
        }
      });
      setIsNavbarScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <nav className={`${styles.nav} ${isNavbarScrolled ? styles.scrolled : ''} ${isNavbarScrolled ? styles['scrolled-bg'] : ''}`}>
        <h2 className={styles.logo}>.Cloth</h2>
        <ul>
          <li>
            <a href="#collect" className={`nav-link ${activeLink === '#collect' ? styles.active : ''}`}>
              Collection
            </a>
          </li>
          <li>
            <a href="#custom" className={`nav-link ${activeLink === '#custom' ? styles.active : ''}`}>
              Custom
            </a>
          </li>
          <li>
            <a href="#about" className={`nav-link ${activeLink === '#about' ? styles.active : ''}`}>
              About
            </a>
          </li>
        </ul>
        <span>
          <HiUser></HiUser>
          <p>profile</p>
        </span>
      </nav>
  );
};

export default Navbar;
