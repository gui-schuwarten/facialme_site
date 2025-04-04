import styles from './AboutSection.module.css';
import iconTeleconsulta from '../../assets/about/icon-teleconsulta.png';
import iconAI from '../../assets/about/icon-ai.png';
import iconProntuario from '../../assets/about/icon-prontuario.png';
import iconTerapia from '../../assets/about/icon-terapia.png';
import iconDispositivo from '../../assets/about/icon-dispositivo.png';

export default function AboutSection() {
  return (
    <section className={styles.aboutSection} id="sobre">
      <div className={styles.textBlock}>
        <h2 className={styles.title}>
          <span className={styles.bold}>Desenvolvemos</span> soluções<br />
          <span className={styles.bold}>inovadoras</span> no campo da <span>saúde</span>.
        </h2>
        <p>
          Oferecemos serviços de software que <strong>revolucionam</strong> e
          aprimoram as relações entre <strong>pacientes</strong> e <strong>profissionais</strong>.
        </p>
      </div>

      <div className={styles.iconGrid}>
        <div className={styles.iconItem}>
          <img src={iconTeleconsulta} alt="Teleconsulta" />
          <p>Teleconsulta</p>
        </div>
        <div className={styles.iconItem}>
          <img src={iconAI} alt="Diagnósticos Automatizados com AI" />
          <p>Diagnósticos Automatizados com AI</p>
        </div>
        <div className={styles.iconItem}>
          <img src={iconProntuario} alt="Prontuário Eletrônico do Paciente" />
          <p>Prontuário Eletrônico do Paciente (PEP)</p>
        </div>
        <div className={styles.iconItem}>
          <img src={iconTerapia} alt="Terapias Automatizadas por IA" />
          <p>Terapias Automatizadas por Inteligência Artificial</p>
        </div>
        <div className={styles.iconItem}>
          <img src={iconDispositivo} alt="Dispositivo remoto para diagnóstico" />
          <p>Dispositivo remoto para diagnóstico</p>
        </div>
      </div>
    </section>
  );
}
