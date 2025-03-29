import React from 'react';
import styles from './ContactSection.module.css';
import { ContactSectionProps } from './types';

export const ContactSection: React.FC<ContactSectionProps> = ({
  title = 'Fale Conosco',
  contact,
  socialLinks,
}) => {
  return (
    <section className={styles.contact}>
      <h2>{title}</h2>

      <div className={styles.contactInfo}>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
        {contact.addressLines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      <div className={styles.contactSocial}>
        <p>Nos siga em nossas redes sociais:</p>
        <div className={styles.socialIcons}>
          {socialLinks.map((item, i) => (
            <a
              key={i}
              href={item.href}
              aria-label={item.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
