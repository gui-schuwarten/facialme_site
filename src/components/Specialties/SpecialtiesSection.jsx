import styles from './SpecialtiesSection.module.css';

import iconTeleconsulta from '../../assets/specialties/icon-teleconsulta.png';
import iconTerapia from '../../assets/specialties/icon-terapia.png';
import iconAI from '../../assets/specialties/icon-ai.png';
import iconDispositivo from '../../assets/specialties/icon-dispositivo.png';
import iconPEP from '../../assets/specialties/icon-prontuario.png';

export default function SpecialtiesSection() {
  return (
    <section className={styles.specialtiesSection} id="especialidades">
      {/* <div className={styles.grid}>

        <div className={styles.item}>
          <img src={iconTeleconsulta} alt="Teleconsulta" />
          <div>
            <h3>Teleconsulta</h3>
            <p>
              Oferecemos <strong>plataformas de teleconsulta</strong> que <strong>conectam</strong> pacientes e profissionais de saúde de maneira <strong>segura e eficiente</strong>, permitindo consultas remotas com a mesma <strong>qualidade</strong> de uma consulta presencial.
            </p>
          </div>
        </div>

        <div className={styles.item}>
          <img src={iconTerapia} alt="Terapias Automatizadas" />
          <div>
            <h3>Terapias Automatizadas por Inteligência Artificial</h3>
            <p>
              Nossos sistemas de IA são projetados para proporcionar <strong>terapias personalizadas</strong> e <strong>automatizadas</strong>, adaptando-se às necessidades <strong>individuais</strong> do paciente para melhores resultados no tratamento.
            </p>
          </div>
        </div>

        <div className={styles.item}>
          <img src={iconAI} alt="Diagnósticos com AI" />
          <div>
            <h3>Diagnósticos Automatizados com AI</h3>
            <p>
              Desenvolvemos <strong>soluções avançadas</strong> de IA que auxiliam na análise de exames e diagnósticos, aumentando a <strong>precisão</strong> e a <strong>rapidez</strong> das avaliações médicas.
            </p>
          </div>
        </div>

        <div className={styles.item}>
          <img src={iconDispositivo} alt="Dispositivo remoto" />
          <div>
            <h3>Dispositivo remoto para diagnóstico</h3>
            <p>
              Nosso aparelho para aferir as condições dos <strong>sinais vitais</strong> do paciente de maneira <strong>remota</strong>, facilita o diagnóstico, agilizando o direcionamento do tratamento e com uma <strong>maior precisão</strong>.
            </p>
          </div>
        </div>

        <div className={styles.item}>
          <img src={iconPEP} alt="Prontuário PEP" />
          <div>
            <h3>Prontuário Eletrônico do Paciente (PEP)</h3>
            <p>
              Através de um mecanismo de consolidação de dados inteligente, nosso sistema de PEP permite o <strong>acesso rápido e seguro</strong> às informações dos pacientes, agilizando e facilitando a <strong>tomada de decisões</strong> clínicas e melhorando a <strong>qualidade</strong> do atendimento.
            </p>
          </div>
        </div>

      </div> */}
    </section>
  );
}
