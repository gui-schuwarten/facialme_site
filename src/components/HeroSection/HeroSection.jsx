import styles from './HeroSection.module.css';
import bgImage from '../../assets/background.jpg';
// import bgImage from '../../../public/background.jpg';

export default function HeroSection() {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${bgImage})` }}
      id="home"
    >
      <div className={styles.overlay}>
        <div className={styles.textBox}>
          <p>
            Nosso objetivo é<span className={styles.break}></span> 
            ser a <strong>referência</strong><span className={styles.break}>
            </span> no desenvolvimento<span className={styles.break}>
            </span> de softwares com<span className={styles.break}>
            </span><strong> Inteligência Artificial</strong><span className={styles.break}></span>
            para a área da <strong>Saúde</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
