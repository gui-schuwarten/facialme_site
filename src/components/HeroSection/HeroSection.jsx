import styles from './HeroSection.module.css';
import bgImage from '../../assets/background.jpg';

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
            Nosso objetivo é ser a <strong>referência</strong> no desenvolvimento de softwares com
            <strong> Inteligência Artificial</strong> para a área da <strong>Saúde</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
