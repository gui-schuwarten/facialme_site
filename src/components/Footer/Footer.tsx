import React from 'react';
import styles from './Footer.module.css';
import { FooterProps } from './types';

export const Footer: React.FC<FooterProps> = ({ contactLine, socialLinks }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        {socialLinks.map((item, index) => (
          <a
            key={index}
            href={item.href}
            aria-label={item.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ))}
      </div>
      <p className={styles.contact}>{contactLine}</p>
    </footer>
  );
};
