import React, { useState } from 'react';
import styles from './TestimonialsCarousel.module.css';
import { TestimonialsCarouselProps } from './types';

export const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({ testimonials }) => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const goPrev = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const goNext = () => setCurrent((prev) => (prev + 1) % total);

  const { quote, author, role } = testimonials[current];

  return (
    <section className={styles.carousel}>
      <div className={styles.slide}>
        <p className={styles.quote}>&ldquo;{quote}&rdquo;</p>
        <p className={styles.author}>
          {author}
          {role && <span>{role}</span>}
        </p>
      </div>

      <div className={styles.controls}>
        <button onClick={goPrev} aria-label="Depoimento anterior">←</button>
        <button onClick={goNext} aria-label="Próximo depoimento">→</button>
      </div>
    </section>
  );
};
