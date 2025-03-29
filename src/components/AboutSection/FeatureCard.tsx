import React from 'react';
import styles from './AboutSection.module.css';
import { FeatureCardProps } from './types';

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title }) => (
  <div className={styles.featureCard}>
    <div className={styles.iconCircle}>{icon}</div>
    <span>{title}</span>
  </div>
);