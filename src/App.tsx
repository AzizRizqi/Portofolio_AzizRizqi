// src/App.tsx
import React, { useEffect } from 'react';
import './App.css'; // Hanya ini yang perlu diimpor

// Import komponen-komponen section
import HeroSection from './assets/components/Sections/HeroSection';
import AboutSection from './assets/components/Sections/AboutSection';
import ProjectsSection from './assets/components/Sections/ProjectsSection';
import SkillsSection from './assets/components/Sections/SkillsSection';
import ContactSection from './assets/components/Sections/ContactSection';

// Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

  // Pastikan path ini benar relatif terhadap folder `public`
  const profileImage = 'FotoProfile.jpeg';

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans relative overflow-hidden">
      <main>
        <HeroSection profileImage={profileImage} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;