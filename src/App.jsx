import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/About/AboutSection';
import SpecialtiesSection from './components/Specialties/SpecialtiesSection';
import ContactSection from './components/Contact/ContactSection';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SpecialtiesSection />
      {/* <ContactSection /> */}
    </>
  );
}

export default App;