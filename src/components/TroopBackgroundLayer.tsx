import React from 'react';

interface FloatingTroopIcon {
  id: string;
  name: string;
  role: string;
  image: string;
  top: string;
  left?: string;
  right?: string;
  size: number;
  rotation: number;
  delay: string;
  duration: string;
  reverse?: boolean;
}

const FLOATING_TROOPS: FloatingTroopIcon[] = [
  // --- Hero / Citadel Base Section ---
  {
    id: 'hero-builder',
    name: 'BUILDER',
    role: 'Chief Craftsman',
    image: '/images/troops/builder.png',
    top: '100px',
    right: '2.5%',
    size: 110,
    rotation: 5,
    delay: '0s',
    duration: '6.5s',
  },
  {
    id: 'hero-archer',
    name: 'SUPER ARCHER',
    role: 'Precision Scout',
    image: '/images/troops/super_archer.png',
    top: '380px',
    left: '2%',
    size: 100,
    rotation: -7,
    delay: '1.2s',
    duration: '7.2s',
    reverse: true,
  },
  {
    id: 'hero-wizard',
    name: 'WIZARD',
    role: 'Arcane Apprentice',
    image: '/images/troops/wizard.png',
    top: '650px',
    right: '2%',
    size: 105,
    rotation: 6,
    delay: '2.5s',
    duration: '6.2s',
  },

  // --- Army Camps & Barracks / Skill Matrix ---
  {
    id: 'skills-pekka',
    name: 'P.E.K.K.A',
    role: 'Heavy Titan',
    image: '/images/troops/pekka.png',
    top: '960px',
    left: '1.5%',
    size: 125,
    rotation: -5,
    delay: '0.8s',
    duration: '8.2s',
  },
  {
    id: 'skills-lassi',
    name: 'L.A.S.S.I',
    role: 'Hero Pet Hound',
    image: '/images/troops/lassi.png',
    top: '1300px',
    right: '2%',
    size: 105,
    rotation: 8,
    delay: '3.2s',
    duration: '6.8s',
    reverse: true,
  },
  {
    id: 'skills-archer',
    name: 'SUPER ARCHER',
    role: 'Target Radar',
    image: '/images/troops/super_archer.png',
    top: '1620px',
    left: '2%',
    size: 98,
    rotation: 6,
    delay: '1.8s',
    duration: '7.5s',
  },

  // --- Clan War Log / Expeditions ---
  {
    id: 'war-builder',
    name: 'BUILDER',
    role: 'Raid Repair',
    image: '/images/troops/builder.png',
    top: '1980px',
    right: '2.5%',
    size: 108,
    rotation: -6,
    delay: '2.2s',
    duration: '6.6s',
    reverse: true,
  },
  {
    id: 'war-pekka',
    name: 'P.E.K.K.A',
    role: '3-Star Breaker',
    image: '/images/troops/pekka.png',
    top: '2350px',
    left: '1.5%',
    size: 125,
    rotation: 7,
    delay: '0.4s',
    duration: '8.5s',
  },
  {
    id: 'war-wizard',
    name: 'WIZARD',
    role: 'Spell Cannon',
    image: '/images/troops/wizard.png',
    top: '2720px',
    right: '2%',
    size: 105,
    rotation: -7,
    delay: '3.6s',
    duration: '7.0s',
  },

  // --- Guild Recruitment Outpost ---
  {
    id: 'recruit-lassi',
    name: 'L.A.S.S.I',
    role: 'Cyber Scout',
    image: '/images/troops/lassi.png',
    top: '3100px',
    left: '2%',
    size: 105,
    rotation: 6,
    delay: '1.5s',
    duration: '6.5s',
    reverse: true,
  },
  {
    id: 'recruit-builder',
    name: 'BUILDER',
    role: 'Ready to Deploy',
    image: '/images/troops/builder.png',
    top: '3450px',
    right: '2%',
    size: 110,
    rotation: 5,
    delay: '1.0s',
    duration: '6.8s',
  },
  {
    id: 'recruit-pekka',
    name: 'P.E.K.K.A',
    role: 'Citadel Vanguard',
    image: '/images/troops/pekka.png',
    top: '3800px',
    left: '1.5%',
    size: 125,
    rotation: -6,
    delay: '2.4s',
    duration: '8.2s',
    reverse: true,
  },
];

export const TroopBackgroundLayer: React.FC = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none contain-paint transform-gpu"
      aria-hidden="true"
    >
      {FLOATING_TROOPS.map((troop) => {
        const animationClass = troop.reverse
          ? 'animate-troop-float-reverse'
          : 'animate-troop-float';

        return (
          <div
            key={troop.id}
            className="absolute transition-opacity duration-700 pointer-events-auto"
            style={{
              top: troop.top,
              left: troop.left,
              right: troop.right,
              transform: `rotate(${troop.rotation}deg)`,
            }}
          >
            {/* Animated Floating Character Sprite */}
            <div
              className={`flex flex-col items-center group cursor-pointer ${animationClass}`}
              style={{
                animationDelay: troop.delay,
                animationDuration: troop.duration,
              }}
            >
              {/* Character Cutout with Ambient Glow */}
              <div
                className="relative transition-all duration-300 group-hover:scale-115 group-hover:brightness-110"
                style={{
                  width: `${troop.size}px`,
                  height: `${troop.size}px`,
                }}
              >
                <img
                  src={troop.image}
                  alt={troop.name}
                  loading="lazy"
                  className="w-full h-full object-contain opacity-40 sm:opacity-50 group-hover:opacity-95 transition-opacity duration-300 filter drop-shadow-[0_12px_22px_rgba(0,0,0,0.85)] drop-shadow-[0_0_14px_rgba(56,189,248,0.3)]"
                />
              </div>

              {/* Tactical Identification Plaque */}
              <div className="flex flex-col items-center mt-[-6px] opacity-45 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105">
                <span className="font-display font-extrabold text-[9px] sm:text-[10px] uppercase tracking-wider text-secondary bg-surface-container/85 px-2 py-0.5 rounded-full border border-secondary/30 shadow-md backdrop-blur-xs whitespace-nowrap">
                  {troop.name}
                </span>
                <span className="font-label text-[8px] uppercase tracking-widest text-outline/80 mt-0.5 whitespace-nowrap">
                  {troop.role}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
