import { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => setMenuOpen(false);

    const sections = [
      { id: 'home', label: 'Home' },
      { id: 'sobre', label: 'Sobre' },
      { id: 'especialidades', label: 'Especialidades' },
      { id: 'contato', label: 'Fale Conosco' }
    ];
    
  
    return (
      <nav className={styles.navbar}>
        <img src={logo} alt="FacialME Logo" className={styles.logo} />
  
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
  
        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          {sections.map(({ id, label }) => (
            <li key={id}>
              <Link
                to={id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={1200}
                activeClass={styles.active}
                className={styles.link}
                onClick={closeMenu}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
  
        <div className={styles.socialIcons}>
          <a href="https://www.instagram.com/facialme.tech"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/company/facialme"><i className="fab fa-linkedin-in"></i></a>
          {/* <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-whatsapp"></i></a> */}
        </div>
      </nav>
    );
  }
