import React, { useEffect, useState, lazy, Suspense } from 'react';
import { HeroSection } from './components/HeroSection';
import { IntroModal } from './components/IntroModal';
import { Navbar } from './components/Navbar';
import { ScrollReveal } from './components/ScrollReveal';
import { TroopBackgroundLayer } from './components/TroopBackgroundLayer';
import { villageAudio } from './utils/soundEffects';

// Below-fold sections — lazy-loaded so the initial JS bundle is smaller.
// Each fallback reserves the section's approximate height to prevent layout shift.
const BarracksSection = lazy(() =>
  import('./components/BarracksSection').then((m) => ({ default: m.BarracksSection }))
);
const WarLogSection = lazy(() =>
  import('./components/WarLogSection').then((m) => ({ default: m.WarLogSection }))
);
const RecruitmentSection = lazy(() =>
  import('./components/RecruitmentSection').then((m) => ({ default: m.RecruitmentSection }))
);
const Footer = lazy(() =>
  import('./components/Footer').then((m) => ({ default: m.Footer }))
);

// Minimal skeleton shown while a lazy section is loading.
// Uses the same bg colour as the page so the height reservation is invisible.
const SectionSkeleton: React.FC<{ minHeight?: string }> = ({ minHeight = '400px' }) => (
  <div style={{ minHeight }} aria-hidden="true" />
);

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('citadel-base');
  const [introOpen, setIntroOpen] = useState(true);

  const handleCloseIntro = () => {
    setIntroOpen(false);
    villageAudio.playHorn();
  };

  useEffect(() => {
    // Tactile Click scale feedback and sound effects for pushable game elements
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('button, a[href^="#"]');
      if (target && target instanceof HTMLElement) {
        target.style.transform = 'scale(0.97)';
        setTimeout(() => {
          target.style.transform = '';
        }, 120);

        const href = target.getAttribute('href') || '';
        const text = (target.textContent || '').toLowerCase();
        if (href.includes('war-log') || text.includes('expedition') || text.includes('inspect')) {
          villageAudio.playHorn();
        } else if (href.includes('clan-recruitment') || text.includes('hire') || text.includes('summon')) {
          villageAudio.playGold();
        } else {
          villageAudio.playTap();
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);

    // High-performance IntersectionObserver for Citadel HUD scroll spy (zero layout thrashing)
    const sectionIds = ['citadel-base', 'army-camps', 'war-log', 'clan-recruitment'];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-20% 0px -40% 0px', threshold: 0.05 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      document.removeEventListener('click', handleGlobalClick);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen text-on-surface antialiased flex flex-col selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden">
      {/* GPU-composited Fixed Game Atmosphere Background */}
      <div className="bg-game-atmosphere" />

      {/* Clash of Clans Ambient Troop Watermark Layer */}
      <TroopBackgroundLayer />

      {/* Clash of Clans Intro Briefing Modal */}
      <IntroModal isOpen={introOpen} onClose={handleCloseIntro} />

      {/* Citadel Top HUD Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Village Grounds */}
      <main className="relative z-10 w-full pt-16 sm:pt-20 pb-12 sm:pb-16 flex-grow flex flex-col gap-8 sm:gap-14 lg:gap-16">
        {/* Village Base Town Hall & Chief Narrative (Above fold, instant load) */}
        <HeroSection />

        {/* Barracks & Arcane Forge (Skill Matrix) */}
        <Suspense fallback={<SectionSkeleton minHeight="600px" />}>
          <ScrollReveal yOffset={28}>
            <BarracksSection />
          </ScrollReveal>
        </Suspense>

        {/* Clan War Log & Battle Replays (Featured Projects) */}
        <Suspense fallback={<SectionSkeleton minHeight="800px" />}>
          <ScrollReveal yOffset={28}>
            <WarLogSection />
          </ScrollReveal>
        </Suspense>

        {/* Guild Recruitment Outpost (Contact Missive & Resume) */}
        <Suspense fallback={<SectionSkeleton minHeight="500px" />}>
          <ScrollReveal yOffset={28}>
            <RecruitmentSection />
          </ScrollReveal>
        </Suspense>
      </main>

      {/* Camp Quarters & Scout Outposts Footer */}
      <Suspense fallback={<SectionSkeleton minHeight="200px" />}>
        <ScrollReveal yOffset={20}>
          <Footer />
        </ScrollReveal>
      </Suspense>
    </div>
  );
};

export default App;

