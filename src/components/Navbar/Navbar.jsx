import { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => setMenuOpen(prev => !prev);
    const closeMenu = () => setMenuOpen(false);
  
    return (
      <nav className={styles.navbar}>
        <img src={logo} alt="FacialME Logo" className={styles.logo} />
  
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
  
        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          {['home', 'sobre', 'especialidades', 'contato'].map((section) => (
            <li key={section}>
              <Link
                to={section}
                spy={true}
                smooth={true}
                offset={-80}
                duration={1200}
                activeClass={styles.active}
                className={styles.link}
                onClick={closeMenu}
              >
                {section[0].toUpperCase() + section.slice(1).replace('-', ' ')}
              </Link>
            </li>
          ))}
        </ul>
  
        <div className={styles.socialIcons}>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-whatsapp"></i></a>
        </div>
      </nav>
    );
  }
