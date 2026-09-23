import React, { useEffect, useState } from 'react';
import { BarracksSection } from './components/BarracksSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
//import { LaboratorySection } from './components/LaboratorySection';
import { Navbar } from './components/Navbar';
import { RecruitmentSection } from './components/RecruitmentSection';
import { WarLogSection } from './components/WarLogSection';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('citadel-base');

  useEffect(() => {
    // Tactile Click scale feedback for pushable game elements
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('button, a[href^="#"]');
      if (target && target instanceof HTMLElement) {
        target.style.transform = 'scale(0.97)';
        setTimeout(() => {
          target.style.transform = '';
        }, 120);
      }
    };

    document.addEventListener('click', handleGlobalClick);

    // Scroll spy to update active section in citadel HUD
    const handleScroll = () => {
      const sections = ['citadel-base', 'army-camps', 'war-log', 'laboratory', 'clan-recruitment'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('click', handleGlobalClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-background text-on-surface antialiased flex flex-col selection:bg-primary-container selection:text-on-primary-container">
      {/* Citadel Top HUD Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Village Grounds */}
      <main className="w-full pt-24 bg-background flex-grow flex flex-col">
        {/* Village Base Town Hall & Chief Narrative */}
        <HeroSection />

        {/* Barracks & Arcane Forge (Skill Matrix) */}
        <BarracksSection />

        {/* Clan War Log & Battle Replays (Featured Projects) */}
        <WarLogSection />

        {/* Laboratory & Research Spells (Education & Masteries) */}


        {/* Guild Recruitment Outpost (Contact Missive & Resume) */}
        <RecruitmentSection />
      </main>

      {/* Camp Quarters & Scout Outposts Footer */}
      <Footer />
    </div>
  );
};

export default App;
