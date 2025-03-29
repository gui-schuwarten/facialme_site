import React from 'react';
import styles from './SpecialtiesSection.module.css';
import { SpecialtyCardProps } from './types';

export const SpecialtyCard: React.FC<SpecialtyCardProps> = ({
  icon,
  title,
  description,
  highlightWords = [],
}) => {
  const renderDescription = () =>
    description.split(' ').map((word, index) => {
      const cleanWord = word.replace(/[.,]/g, '');
      if (highlightWords.includes(cleanWord)) {
        return <strong key={index}>{word} </strong>;
      }
      return word + ' ';
    });

  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{renderDescription()}</p>
      </div>
    </div>
  );
};
