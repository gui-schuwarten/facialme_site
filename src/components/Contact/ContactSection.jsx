import styles from './ContactSection.module.css';

import iconInstagram from '../../assets/contact/icon-instagram.png';
import iconLinkedin from '../../assets/contact/icon-linkedin.png';
import iconYoutube from '../../assets/contact/icon-youtube.png';
import iconFacebook from '../../assets/contact/icon-facebook.png';
import iconWhatsapp from '../../assets/contact/icon-whatsapp.png';

export default function ContactSection() {
  return (
    <section className={styles.contactSection} id="contato">
      <h2 className={styles.title}>Fale Conosco</h2>

      <div className={styles.info}>
        <p>contato@facialme.com.br</p>
        <p>+55 11 94059 5708</p>
        <p>Rua Augusta, 890 - sala 905 - 01304-001</p>
        <p>Consolação - São Paulo/SP</p>
      </div>

      <p className={styles.subtitle}>Nos siga em nossas redes sociais:</p>

      <div className={styles.socialIcons}>
        <a href="#"><img src={iconInstagram} alt="Instagram" /></a>
        <a href="#"><img src={iconLinkedin} alt="LinkedIn" /></a>
        <a href="#"><img src={iconYoutube} alt="YouTube" /></a>
        <a href="#"><img src={iconFacebook} alt="Facebook" /></a>
        <a href="#"><img src={iconWhatsapp} alt="WhatsApp" /></a>
      </div>
    </section>
  );
}
