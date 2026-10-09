import React from 'react';
import { CHIEF_INFO } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section id="citadel-base" className="relative w-full px-4 sm:px-6 py-6 sm:py-8 overflow-hidden">
      {/* Atmospheric Background Gradients & Runes */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(14,165,233,0.18),rgba(8,13,26,0))]"></div>
      <div className="absolute -right-32 -top-32 w-80 h-80 rounded-full bg-secondary/15 blur-3xl pointer-events-none"></div>
      <div className="absolute -left-32 top-40 w-80 h-80 rounded-full bg-primary-container/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-[1040px] mx-auto flex flex-col gap-5">
        {/* HERO / VILLAGE TOWN HALL SECTION */}
        <div className="relative bg-surface-container rounded-xl shadow-[0_12px_28px_rgba(0,0,0,0.65),0_0_0_1px_rgba(56,189,248,0.15)] p-4 sm:p-6 overflow-hidden border border-surface-container-highest/60">
          {/* Inner Stone Rim & Wood Texture Accent */}
          <div className="absolute inset-0 bg-[radial-gradient(#263e6e_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none"></div>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary/20 via-primary-container to-secondary/20"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            {/* Left Column: Hero Narrative & Badges */}
            <div className="lg:col-span-7 flex flex-col gap-3.5">
              {/* Overline Wooden Plaque Token */}
              <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-0.5 rounded bg-surface-container-highest shadow-[0_2px_0_#050811] border border-surface-container-high/60">
                <span className="material-symbols-outlined text-primary-container text-[16px]">fort</span>
                <span className="font-label text-[11px] uppercase tracking-widest text-primary font-bold">
                  {CHIEF_INFO.craftsmanTitle}
                </span>
              </div>

              {/* Headline */}
              <div className="flex flex-col gap-1">
                <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-black uppercase text-on-surface tracking-tight leading-[1.12]">
                  Chief Builder of{' '}
                  <span className="text-primary-container drop-shadow-[0_2px_10px_rgba(245,158,11,0.4)]">
                    Resilient
                  </span>{' '}
                  Web Systems
                </h1>
                <p className="font-body text-sm sm:text-base text-on-surface-variant max-w-xl leading-relaxed mt-1">
                  {CHIEF_INFO.bio}
                </p>
              </div>

              {/* Village Key Stat Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                <div className="bg-surface-container-low p-2 rounded flex flex-col gap-0.5 shadow-[0_2px_0_#050811] border border-surface-container-high/40">
                  <span className="font-label text-[10px] uppercase text-outline font-bold">Citadel Rank</span>
                  <span className="font-display font-bold text-base text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary-container text-[16px]">military_tech</span>
                    {CHIEF_INFO.citadelRank}
                  </span>
                </div>

                <div className="bg-surface-container-low p-2 rounded flex flex-col gap-0.5 shadow-[0_2px_0_#050811] border border-surface-container-high/40">
                  <span className="font-label text-[10px] uppercase text-outline font-bold">Craft Stars</span>
                  <span className="font-display font-bold text-base text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary-fixed-dim text-[16px] material-symbols-fill">star</span>
                    {CHIEF_INFO.craftStars}
                  </span>
                </div>

                <div className="bg-surface-container-low p-2 rounded flex flex-col gap-0.5 shadow-[0_2px_0_#050811] border border-surface-container-high/40">
                  <span className="font-label text-[10px] uppercase text-outline font-bold">Guild Castle</span>
                  <span className="font-display font-bold text-base text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary-container text-[16px]">verified</span>
                    {CHIEF_INFO.guildCastle}
                  </span>
                </div>

                <div className="bg-surface-container-low p-2 rounded flex flex-col gap-0.5 shadow-[0_2px_0_#050811] border border-surface-container-high/40">
                  <span className="font-label text-[10px] uppercase text-outline font-bold">Deploy Period</span>
                  <span className="font-display font-bold text-base text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary-container text-[16px]">bolt</span>
                    {CHIEF_INFO.deployPeriod}
                  </span>
                </div>
              </div>

              {/* Chunky Pushable CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                {/* Primary Attack Button */}
                <a
                  href="#war-log"
                  className="btn-tactile-gold inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg font-display font-bold text-sm uppercase tracking-wider cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px] material-symbols-fill">explore</span>
                  <span>Expedition Log</span>
                </a>

                {/* Secondary Scroll Button */}
                <a
                  href="#clan-recruitment"
                  className="btn-tactile-stone inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg font-display font-bold text-sm uppercase tracking-wider cursor-pointer"
                >
                  <span className="material-symbols-outlined text-secondary text-[18px]">description</span>
                  <span>Summon Parchment CV</span>
                </a>
              </div>
            </div>

            {/* Right Column: Tactile Crest / Town Hall Shield */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative mt-4 lg:mt-0">
              <div className="relative w-full max-w-[280px] aspect-square rounded-2xl bg-surface-container-lowest p-3 sm:p-4 flex flex-col items-center justify-center shadow-[inset_0_4px_12px_rgba(0,0,0,0.8),0_10px_20px_rgba(0,0,0,0.7)] border border-surface-container-high/50">
                {/* Inner Crest Shield Graphic */}
                <img
                  className="w-36 h-36 object-contain drop-shadow-[0_8px_18px_rgba(14,165,233,0.35)] hover:rotate-2 transition-transform duration-300"
                  alt="Clash Crest Shield"
                  src={CHIEF_INFO.crestShieldImg}
                />

                {/* Builder Hut Floating Plaque */}
                <div className="mt-2.5 w-full bg-surface-container-high rounded p-2 flex items-center justify-between shadow-[0_2px_0_#050811] border border-surface-container-highest/40">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-container text-[18px]">construction</span>
                    <div className="flex flex-col">
                      <span className="font-label text-[10px] uppercase text-on-surface font-bold">
                        Builder Status: Active
                      </span>
                      <span className="font-body text-[11px] text-outline truncate max-w-[140px]">
                        {CHIEF_INFO.builderTask}
                      </span>
                    </div>
                  </div>
                  <span className="font-label text-[10px] text-primary-container bg-surface-container-lowest px-1.5 py-0.5 rounded font-bold border border-primary-container/20">
                    {CHIEF_INFO.builderStatus}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Builder Hut Motivation Ribbon */}
          <div className="mt-4 p-3 bg-surface-container-lowest rounded-lg flex flex-col sm:flex-row items-center justify-between gap-3 border border-surface-container-high/40 shadow-[inset_0_2px_6px_rgba(0,0,0,0.5)]">
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
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="font-label text-[12px] uppercase text-emerald-400 font-bold tracking-wider">
                Ready for Clan War
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
