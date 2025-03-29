import React from 'react';
import styles from './AboutSection.module.css';
import { AboutSectionProps } from './types';
import { FeatureCard } from './FeatureCard';

export const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  description,
  highlightWords = [],
  features,
}) => {
  const renderHighlightedText = (text: string) =>
    text.split(' ').map((word, index) => {
      const cleanWord = word.replace(/[.,]/g, '');
      if (highlightWords.includes(cleanWord)) {
        return (
          <span key={index} className={styles.highlight}>
            {word}{' '}
          </span>
        );
      }
      return word + ' ';
    });

  return (
    <section className={styles.about}>
      <div className={styles.aboutText}>
        <h2>{renderHighlightedText(title)}</h2>
        <p>{renderHighlightedText(description)}</p>
      </div>
      <div className={styles.featureGrid}>
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};
