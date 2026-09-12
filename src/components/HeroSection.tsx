import React from 'react';
import { CHIEF_INFO } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section id="citadel-base" className="relative w-full px-gutter-desktop py-space-xl overflow-hidden">
      {/* Atmospheric Background Gradients & Runes */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,184,0,0.18),rgba(22,19,16,0))]"></div>
      <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-secondary-container/15 blur-3xl pointer-events-none"></div>
      <div className="absolute -left-32 top-40 w-96 h-96 rounded-full bg-primary-container/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto flex flex-col gap-space-2xl">
        {/* HERO / VILLAGE TOWN HALL SECTION */}
        <div className="relative bg-surface-container rounded-xl shadow-[0_16px_36px_rgba(0,0,0,0.65)] p-space-md sm:p-space-xl overflow-hidden border border-surface-container-highest/60">
          {/* Inner Stone Rim & Wood Texture Accent */}
          <div className="absolute inset-0 bg-[radial-gradient(#393430_1px,transparent_1px)] [background-size:16px_16px] opacity-25 pointer-events-none"></div>
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-primary-container to-secondary-container"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            {/* Left Column: Hero Narrative & Badges */}
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              {/* Overline Wooden Plaque Token */}
              <div className="inline-flex items-center gap-space-xs self-start px-space-sm py-1 rounded bg-surface-container-highest shadow-[0_3px_0_#14100E] border border-surface-container-high/60">
                <span className="material-symbols-outlined text-primary-container text-[18px]">fort</span>
                <span className="font-label text-[12px] uppercase tracking-widest text-primary font-bold">
                  {CHIEF_INFO.craftsmanTitle}
                </span>
              </div>

              {/* Headline */}
              <div className="flex flex-col gap-space-2xs">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-black uppercase text-on-surface tracking-tight leading-[1.1]">
                  Chief Builder of{' '}
                  <span className="text-primary-container drop-shadow-[0_2px_10px_rgba(255,184,0,0.4)]">
                    Resilient
                  </span>{' '}
                  Web Systems
                </h1>
                <p className="font-body text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed mt-2">
                  {CHIEF_INFO.bio}
                </p>
              </div>

              {/* Village Key Stat Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs pt-space-xs">
                <div className="bg-surface-container-low p-space-xs rounded flex flex-col gap-1 shadow-[0_3px_0_#110d0b] border border-surface-container-high/40">
                  <span className="font-label text-[11px] uppercase text-outline font-bold">Citadel Rank</span>
                  <span className="font-display font-bold text-lg text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary-container text-[18px]">military_tech</span>
                    {CHIEF_INFO.citadelRank}
                  </span>
                </div>

                <div className="bg-surface-container-low p-space-xs rounded flex flex-col gap-1 shadow-[0_3px_0_#110d0b] border border-surface-container-high/40">
                  <span className="font-label text-[11px] uppercase text-outline font-bold">Craft Stars</span>
                  <span className="font-display font-bold text-lg text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary-fixed-dim text-[18px] material-symbols-fill">star</span>
                    {CHIEF_INFO.craftStars}
                  </span>
                </div>

                <div className="bg-surface-container-low p-space-xs rounded flex flex-col gap-1 shadow-[0_3px_0_#110d0b] border border-surface-container-high/40">
                  <span className="font-label text-[11px] uppercase text-outline font-bold">Guild Castle</span>
                  <span className="font-display font-bold text-lg text-tertiary flex items-center gap-1">
                    <span className="material-symbols-outlined text-tertiary-container text-[18px]">verified</span>
                    {CHIEF_INFO.guildCastle}
                  </span>
                </div>

                <div className="bg-surface-container-low p-space-xs rounded flex flex-col gap-1 shadow-[0_3px_0_#110d0b] border border-surface-container-high/40">
                  <span className="font-label text-[11px] uppercase text-outline font-bold">Deploy Period</span>
                  <span className="font-display font-bold text-lg text-secondary flex items-center gap-1">
                    <span className="material-symbols-outlined text-secondary-container text-[18px]">bolt</span>
                    {CHIEF_INFO.deployPeriod}
                  </span>
                </div>
              </div>

              {/* Chunky Pushable CTAs */}
              <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                {/* Primary Attack Button */}
                <a
                  href="#war-log"
                  className="btn-tactile-gold inline-flex items-center gap-space-xs px-space-lg py-3 rounded-lg font-display font-bold text-base uppercase tracking-wider cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px] material-symbols-fill">explore</span>
                  <span>Expedition Log</span>
                </a>

                {/* Secondary Scroll Button */}
                <a
                  href="#clan-recruitment"
                  className="btn-tactile-stone inline-flex items-center gap-space-xs px-space-lg py-3 rounded-lg font-display font-bold text-base uppercase tracking-wider cursor-pointer"
                >
                  <span className="material-symbols-outlined text-primary text-[20px]">description</span>
                  <span>Summon Parchment CV</span>
                </a>
              </div>
            </div>

            {/* Right Column: Tactile Crest / Town Hall Shield */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative mt-6 lg:mt-0">
              <div className="relative w-full max-w-[340px] aspect-square rounded-2xl bg-surface-container-lowest p-space-md flex flex-col items-center justify-center shadow-[inset_0_4px_12px_rgba(0,0,0,0.8),0_12px_24px_rgba(0,0,0,0.7)] border border-surface-container-high/50">
                {/* Inner Crest Shield Graphic */}
                <img
                  className="w-48 h-48 object-contain drop-shadow-[0_8px_18px_rgba(255,184,0,0.35)] hover:rotate-2 transition-transform duration-300"
                  alt="Clash Crest Shield"
                  src={CHIEF_INFO.crestShieldImg}
                />

                {/* Builder Hut Floating Plaque */}
                <div className="mt-space-sm w-full bg-surface-container-high rounded p-space-xs flex items-center justify-between shadow-[0_3px_0_#161310] border border-surface-container-highest/40">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-tertiary-container text-[22px]">construction</span>
                    <div className="flex flex-col">
                      <span className="font-label text-[11px] uppercase text-on-surface font-bold">
                        Builder Status: Active
                      </span>
                      <span className="font-body text-[12px] text-outline">
                        {CHIEF_INFO.builderTask}
                      </span>
                    </div>
                  </div>
                  <span className="font-label text-[11px] text-tertiary bg-surface-container-lowest px-2 py-0.5 rounded font-bold border border-tertiary/20">
                    {CHIEF_INFO.builderStatus}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Builder Hut Motivation Ribbon */}
          <div className="mt-space-lg pt-space-md bg-surface-container-lowest rounded-lg p-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md border border-surface-container-high/40 shadow-[inset_0_2px_6px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-space-sm">
              <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0 border border-primary-container/40">
                <span className="material-symbols-outlined text-primary-container text-[24px]">handyman</span>
              </div>
              <div>
                <p className="font-display font-bold text-base text-primary">Builder Hut Protocol</p>
                <p className="font-body text-xs sm:text-sm text-on-surface-variant">
                  Forged with high learning capacity, deep appreciation for design tokens, scalable microservices, and zero-defect deployments.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-space-xs shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-ping"></span>
              <span className="font-label text-[12px] uppercase text-tertiary font-bold tracking-wider">
                Ready for Clan War
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
