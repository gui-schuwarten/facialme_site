import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { HeroSection } from './components/HeroSection/HeroSection';
import { AboutSection } from './components/AboutSection/AboutSection';
import { SpecialtiesSection } from './components/SpecialtiesSection/SpecialtiesSection';
import { TestimonialsCarousel } from './components/TestimonialsCarousel/TestimonialsCarousel';
import { ContactSection } from './components/ContactSection/ContactSection';
import { Footer } from './components/Footer/Footer';
import {
  FaInstagram, FaLinkedin, FaYoutube, FaFacebook, FaWhatsapp,
  FaUserMd, FaDna, FaFileMedical, FaRobot, FaMobileAlt,
} from 'react-icons/fa';

const App: React.FC = () => {
  return (
    <>
      <Navbar
        logoSrc="/assets/logo.png"
        menuItems={[
          { label: 'Home', href: '#home' },
          { label: 'Sobre', href: '#sobre' },
          { label: 'Especialidades', href: '#especialidades' },
          { label: 'Fale Conosco', href: '#contato' },
        ]}
        socialLinks={[
          { href: 'https://instagram.com', icon: <FaInstagram />, label: 'Instagram' },
          { href: 'https://linkedin.com', icon: <FaLinkedin />, label: 'LinkedIn' },
          { href: 'https://youtube.com', icon: <FaYoutube />, label: 'YouTube' },
          { href: 'https://facebook.com', icon: <FaFacebook />, label: 'Facebook' },
          { href: 'https://wa.me/123456789', icon: <FaWhatsapp />, label: 'WhatsApp' },
        ]}
      />

      <main>
        <section id="home">
          <HeroSection
            backgroundImageUrl="/assets/hero-decor.webp"
            highlightWords={['referência', 'Inteligência', 'Artificial']}
          />
        </section>

        <section id="sobre">
          <AboutSection
            title="Desenvolvemos soluções inovadoras no campo da saúde."
            description="Oferecemos serviços de software que revolucionam e aprimoram as relações entre pacientes e profissionais."
            highlightWords={['Desenvolvemos', 'inovadoras', 'revolucionam', 'pacientes', 'profissionais']}
            features={[
              { icon: <FaUserMd />, title: 'Teleconsulta' },
              { icon: <FaDna />, title: 'Diagnósticos Automatizados com AI' },
              { icon: <FaFileMedical />, title: 'Prontuário Eletrônico do Paciente (PEP)' },
              { icon: <FaRobot />, title: 'Terapias Automatizadas por Inteligência Artificial' },
              { icon: <FaMobileAlt />, title: 'Dispositivo remoto para diagnóstico' },
            ]}
          />
        </section>

        <section id="especialidades">
          <SpecialtiesSection
            specialties={[
              {
                icon: <FaUserMd />,
                title: 'Teleconsulta',
                description:
                  'Oferecemos plataformas de teleconsulta que conectam pacientes e profissionais de saúde de maneira segura e eficiente, permitindo consultas remotas com a mesma qualidade de uma consulta presencial.',
                highlightWords: ['plataformas', 'teleconsulta', 'segura', 'eficiente', 'qualidade'],
              },
              {
                icon: <FaDna />,
                title: 'Diagnósticos Automatizados com AI',
                description:
                  'Desenvolvemos soluções avançadas de IA que auxiliam na análise de exames e diagnósticos, aumentando a precisão e a rapidez das avaliações médicas.',
                highlightWords: ['soluções', 'avançadas', 'precisão', 'rapidez'],
              },
              {
                icon: <FaFileMedical />,
                title: 'Prontuário Eletrônico do Paciente (PEP)',
                description:
                  'Nosso sistema de PEP permite o acesso rápido e seguro às informações dos pacientes, facilitando a tomada de decisões e melhorando a qualidade do atendimento.',
                highlightWords: ['acesso', 'seguro', 'tomada', 'decisões', 'qualidade'],
              },
              {
                icon: <FaRobot />,
                title: 'Terapias Automatizadas por Inteligência Artificial',
                description:
                  'Sistemas projetados para terapias personalizadas e automatizadas, adaptadas às necessidades individuais de cada paciente.',
                highlightWords: ['personalizadas', 'automatizadas', 'individuais'],
              },
              {
                icon: <FaMobileAlt />,
                title: 'Dispositivo remoto para diagnóstico',
                description:
                  'Aparelho que monitora sinais vitais de forma remota, agilizando o diagnóstico com maior precisão.',
                highlightWords: ['sinais', 'remota', 'precisão'],
              },
            ]}
          />
        </section>

        <TestimonialsCarousel
          testimonials={[
            {
              quote: 'A FacialME transformou nosso processo clínico com soluções realmente inteligentes.',
              author: 'Dr. Rafael Almeida',
              role: 'Médico Cardiologista',
            },
            {
              quote: 'A interface dos sistemas é fluida, moderna e fez toda a diferença para nossa equipe.',
              author: 'Dra. Camila Vieira',
              role: 'Gestora de TI – Clínica Saúde+',
            },
            {
              quote: 'Soluções confiáveis, suporte ágil e uma equipe extremamente competente!',
              author: 'Lucas Andrade',
              role: 'Diretor de Operações',
            },
          ]}
        />

        <section id="contato">
          <ContactSection
            contact={{
              email: 'contato@facialme.com.br',
              phone: '+55 11 94059 5708',
              addressLines: [
                'Rua Augusta, 890 – sala 905 – 01304-001',
                'Consolação – São Paulo/SP',
              ],
            }}
            socialLinks={[
              { href: 'https://instagram.com', icon: <FaInstagram />, label: 'Instagram' },
              { href: 'https://linkedin.com', icon: <FaLinkedin />, label: 'LinkedIn' },
              { href: 'https://youtube.com', icon: <FaYoutube />, label: 'YouTube' },
              { href: 'https://facebook.com', icon: <FaFacebook />, label: 'Facebook' },
              { href: 'https://wa.me/123456789', icon: <FaWhatsapp />, label: 'WhatsApp' },
            ]}
          />
        </section>
      </main>

      <Footer
        contactLine="contato@facialme.com.br / +55 11 94059 5708 / Rua Augusta, 890 – sala 905 – 01304-001 – Consolação – São Paulo/SP"
        socialLinks={[
          { href: 'https://instagram.com', icon: <FaInstagram />, label: 'Instagram' },
          { href: 'https://linkedin.com', icon: <FaLinkedin />, label: 'LinkedIn' },
          { href: 'https://youtube.com', icon: <FaYoutube />, label: 'YouTube' },
          { href: 'https://facebook.com', icon: <FaFacebook />, label: 'Facebook' },
          { href: 'https://wa.me/123456789', icon: <FaWhatsapp />, label: 'WhatsApp' },
        ]}
      />
    </>
  );
};

export default App;
