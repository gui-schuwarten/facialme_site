import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { NavbarProps } from './types';

export const Navbar: React.FC<NavbarProps> = ({ logoSrc, menuItems, socialLinks }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logoSrc} alt="Logo da empresa" />
        </div>

        <nav className={`${styles.menu} ${mobileOpen ? styles.open : ''}`}>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={item.isActive ? styles.active : ''}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.social}>
          {socialLinks.map((item, index) => (
            <a key={index} href={item.href} aria-label={item.label} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          ))}
        </div>

        <button
          className={styles.toggle}
          aria-label="Abrir menu mobile"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
};
