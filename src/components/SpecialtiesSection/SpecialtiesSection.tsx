import React from 'react';
import styles from './SpecialtiesSection.module.css';
import { SpecialtiesSectionProps } from './types';
import { SpecialtyCard } from './SpecialtyCard';

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({ specialties }) => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {specialties.map((spec, index) => (
          <SpecialtyCard key={index} {...spec} />
        ))}
      </div>
    </section>
  );
};
