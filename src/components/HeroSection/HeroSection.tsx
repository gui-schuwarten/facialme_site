import React from 'react';
import styles from './HeroSection.module.css';

export interface HeroSectionProps {
  backgroundImageUrl: string;
  highlightWords: string[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImageUrl,
  highlightWords,
}) => {
  const title =
    'Nosso objetivo é ser a referência no desenvolvimento de softwares com Inteligência Artificial para a área da Saúde.';

  const renderHighlighted = (text: string) =>
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
    <section className={styles.hero}>
      <div
        className={styles.background}
        aria-hidden="true"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      />
      <div className={styles.content}>
        <h1>{renderHighlighted(title)}</h1>
      </div>
    </section>
  );
};
