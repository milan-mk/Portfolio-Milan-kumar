import React, { useState } from 'react';
import { CHIEF_INFO } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  const [activeView, setActiveView] = useState<'builder' | 'base'>('builder');
  const [showBaseModal, setShowBaseModal] = useState(false);
  return (
    <section id="citadel-base" className="relative w-full px-4 sm:px-6 py-6 sm:py-8 overflow-hidden">
      {/* Atmospheric Background Gradients & Magma Runes */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(234,88,12,0.22),rgba(12,7,9,0))] pointer-events-none"></div>
      <div className="absolute -right-32 -top-32 w-80 h-80 rounded-full bg-secondary/15 blur-3xl pointer-events-none transform-gpu"></div>
      <div className="absolute -left-32 top-40 w-80 h-80 rounded-full bg-primary-container/10 blur-3xl pointer-events-none transform-gpu"></div>

      <div className="max-w-[1040px] mx-auto flex flex-col gap-5">
        {/* HERO / VILLAGE TOWN HALL 10 SECTION */}
        <div className="relative bg-surface-container rounded-xl shadow-[0_12px_28px_rgba(0,0,0,0.75),0_0_0_1px_rgba(234,88,12,0.25)] p-4 sm:p-6 overflow-hidden border border-surface-container-highest/60 animate-magma-glow">
          {/* Inner Scorched Basalt Rim & Magma Texture Accent */}
          <div className="absolute inset-0 bg-[radial-gradient(#3a1f26_1px,transparent_1px)] [background-size:16px_16px] opacity-35 pointer-events-none"></div>
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600/40 via-primary-container to-orange-500/40 shadow-[0_0_12px_rgba(234,88,12,0.6)]"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
            {/* Left Column: Hero Narrative & Badges */}
            <div className="lg:col-span-7 flex flex-col gap-3.5">
              {/* Overline Wooden Plaque Token */}
              <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-0.5 rounded bg-surface-container-highest shadow-[0_2px_0_#070304] border border-surface-container-high/60">
                <span className="material-symbols-outlined text-primary-container text-[16px]">fort</span>
                <span className="font-label text-[11px] uppercase tracking-widest text-primary font-bold">
                  {CHIEF_INFO.craftsmanTitle}
                </span>
              </div>

              {/* Headline */}
              <div className="flex flex-col gap-1">
                <h1 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-black uppercase text-on-surface tracking-tight leading-[1.12]">
                  Chief Builder of{' '}
                  <span className="text-primary-container drop-shadow-[0_2px_12px_rgba(234,88,12,0.55)]">
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
                <div className="bg-surface-container-low p-2 rounded flex flex-col gap-0.5 shadow-[0_2px_0_#070304] border border-surface-container-high/40">
                  <span className="font-label text-[10px] uppercase text-outline font-bold">Town Hall Rank</span>
                  <span className="font-display font-bold text-base text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary-container text-[16px]">military_tech</span>
                    {CHIEF_INFO.citadelRank}
                  </span>
                </div>

                <div className="bg-surface-container-low p-2 rounded flex flex-col gap-0.5 shadow-[0_2px_0_#070304] border border-surface-container-high/40">
                  <span className="font-label text-[10px] uppercase text-outline font-bold">Craft Stars</span>
                  <span className="font-display font-bold text-base text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary-fixed-dim text-[16px] material-symbols-fill">star</span>
                    {CHIEF_INFO.craftStars}
                  </span>
                </div>

                <div className="bg-surface-container-low p-2 rounded flex flex-col gap-0.5 shadow-[0_2px_0_#070304] border border-surface-container-high/40">
                  <span className="font-label text-[10px] uppercase text-outline font-bold">Guild Castle</span>
                  <span className="font-display font-bold text-base text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary-container text-[16px]">verified</span>
                    {CHIEF_INFO.guildCastle}
                  </span>
                </div>

                <div className="bg-surface-container-low p-2 rounded flex flex-col gap-0.5 shadow-[0_2px_0_#070304] border border-surface-container-high/40">
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

            {/* Right Column: Tactile Crest / Town Hall 10 & Builder Hall Showcase */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative mt-4 lg:mt-0">
              <div className="relative w-full max-w-[300px] rounded-2xl bg-surface-container-lowest p-3.5 sm:p-4 flex flex-col items-center justify-center shadow-[inset_0_4px_12px_rgba(0,0,0,0.8),0_10px_20px_rgba(0,0,0,0.7)] border border-surface-container-high/50">
                {/* Header Switcher: Builder Hall vs TH10 Base */}
                <div className="w-full flex items-center justify-between mb-2 pb-2 border-b border-surface-container-high/40">
                  <div className="flex items-center gap-1.5">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                    <span className="font-label text-[10px] uppercase tracking-wider text-primary font-bold">
                      {activeView === 'builder' ? 'Builder Hall Lv. 10' : 'TH10 War Base'}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveView(activeView === 'builder' ? 'base' : 'builder')}
                    className="font-label text-[9px] uppercase px-2 py-0.5 rounded bg-surface-container-high hover:bg-surface-container-highest text-secondary border border-secondary/30 transition-all flex items-center gap-1 cursor-pointer active:scale-95"
                    title="Toggle between Builder Hall and TH10 War Base"
                  >
                    <span className="material-symbols-outlined text-[13px]">
                      {activeView === 'builder' ? 'map' : 'handyman'}
                    </span>
                    {activeView === 'builder' ? 'View TH10 Base' : 'View Builder'}
                  </button>
                </div>

                {/* Display Image Container */}
                {activeView === 'builder' ? (
                  <div
                    className="relative w-full aspect-square max-w-[210px] flex items-center justify-center group cursor-pointer my-1"
                    onClick={() => setActiveView('base')}
                    title="Click to view TH10 War Base"
                  >
                    <div className="absolute inset-4 rounded-full bg-gradient-to-t from-orange-600/35 to-amber-500/10 blur-xl pointer-events-none group-hover:from-orange-600/50 transition-all"></div>
                    <img
                      className="w-44 h-44 object-contain drop-shadow-[0_10px_22px_rgba(234,88,12,0.6)] group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300"
                      alt="Builder Hall Level 10"
                      src={CHIEF_INFO.builderHallImg}
                      decoding="async"
                    />
                    <div className="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity bg-surface-container-lowest/90 px-1.5 py-0.5 rounded text-[9px] font-label text-primary border border-primary-container/30">
                      Click to switch
                    </div>
                  </div>
                ) : (
                  <div
                    className="relative w-full aspect-square max-w-[220px] flex items-center justify-center group cursor-pointer my-1 p-1 rounded-xl bg-surface-container-high/40 border border-secondary/40 shadow-inner overflow-hidden"
                    onClick={() => setShowBaseModal(true)}
                    title="Click to inspect base blueprint"
                  >
                    <img
                      className="w-full h-full object-contain rounded-lg drop-shadow-[0_8px_18px_rgba(234,88,12,0.55)] group-hover:scale-105 transition-all duration-300"
                      alt="Town Hall 10 War Base Layout"
                      src={CHIEF_INFO.th10BaseImg}
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex flex-col items-center justify-center gap-1 text-primary text-xs font-display font-bold uppercase tracking-wider backdrop-blur-[1px]">
                      <span className="material-symbols-outlined text-[22px] text-primary-container">zoom_in</span>
                      <span>Inspect Blueprint</span>
                      <span className="font-label text-[8px] text-on-surface-variant font-normal">Anti-3-Star Layout</span>
                    </div>
                  </div>
                )}

                {/* Builder Hut Floating Plaque (Always sits directly underneath) */}
                <div className="mt-2 w-full bg-surface-container-high rounded p-2 flex items-center justify-between shadow-[0_2px_0_#070304] border border-surface-container-highest/40">
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

      {/* TH10 Base Blueprint Inspection Modal */}
      {showBaseModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setShowBaseModal(false)}
        >
          <div
            className="relative w-full max-w-[620px] bg-surface-container rounded-2xl p-5 sm:p-6 border border-secondary/60 shadow-[0_0_40px_rgba(234,88,12,0.4),0_20px_40px_rgba(0,0,0,0.85)] flex flex-col gap-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top molten ember stripe */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-primary-container to-orange-500 shadow-[0_0_12px_rgba(234,88,12,0.8)]"></div>

            {/* Modal Header */}
            <div className="flex items-center justify-between pb-2 border-b border-surface-container-high/60">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-container text-[22px]">shield</span>
                <div>
                  <h3 className="font-display font-black text-lg sm:text-xl uppercase text-on-surface">
                    TH10 Anti-3-Star War Base Layout
                  </h3>
                  <span className="font-label text-[10px] uppercase tracking-wider text-secondary font-bold">
                    Citadel Defense Blueprint &bull; 0 Stars Conceded
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowBaseModal(false)}
                className="w-8 h-8 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface flex items-center justify-center transition-colors border border-surface-container-highest cursor-pointer"
                aria-label="Close Modal"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            {/* Base Image & Tactical Blueprint Overlay */}
            <div className="relative w-full aspect-square max-h-[340px] rounded-xl bg-surface-container-lowest p-2 border border-surface-container-high/60 flex items-center justify-center overflow-hidden shadow-inner group">
              <img
                src={CHIEF_INFO.th10BaseImg}
                alt="TH10 Active War Base Map"
                className="w-full h-full object-contain rounded-lg drop-shadow-[0_8px_20px_rgba(234,88,12,0.5)] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-surface-container-lowest/90 px-2 py-0.5 rounded font-label text-[9px] uppercase tracking-wider text-primary border border-primary-container/40 flex items-center gap-1 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                Active Defense Layout
              </div>
            </div>

            {/* Defense Specs / Engineering Equivalents */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              <div className="bg-surface-container-lowest p-2 rounded flex flex-col gap-0.5 border border-surface-container-high/40">
                <span className="font-label text-[9px] uppercase text-outline font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px] text-primary-container">local_fire_department</span>
                  Infernos
                </span>
                <span className="font-display font-bold text-xs text-primary">Dual Multi-Target</span>
                <span className="font-body text-[10px] text-on-surface-variant">Continuous Load Balance</span>
              </div>

              <div className="bg-surface-container-lowest p-2 rounded flex flex-col gap-0.5 border border-surface-container-high/40">
                <span className="font-label text-[9px] uppercase text-outline font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px] text-primary-container">adjust</span>
                  X-Bows
                </span>
                <span className="font-display font-bold text-xs text-primary">Triple Ground &amp; Air</span>
                <span className="font-body text-[10px] text-on-surface-variant">High-Speed Event Loop</span>
              </div>

              <div className="bg-surface-container-lowest p-2 rounded flex flex-col gap-0.5 border border-surface-container-high/40">
                <span className="font-label text-[9px] uppercase text-outline font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px] text-primary-container">fort</span>
                  Clan Castle
                </span>
                <span className="font-display font-bold text-xs text-primary">Max Reinforcements</span>
                <span className="font-body text-[10px] text-on-surface-variant">Modular Microservices</span>
              </div>

              <div className="bg-surface-container-lowest p-2 rounded flex flex-col gap-0.5 border border-surface-container-high/40">
                <span className="font-label text-[9px] uppercase text-outline font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px] text-primary-container">verified_user</span>
                  Lava Walls
                </span>
                <span className="font-display font-bold text-xs text-primary">Lv. 10 Magma</span>
                <span className="font-body text-[10px] text-on-surface-variant">Zero-Exploit Type Safety</span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between pt-1">
              <span className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant">
                Tactical architecture certified for production stability
              </span>
              <button
                type="button"
                onClick={() => setShowBaseModal(false)}
                className="btn-tactile-secondary px-3.5 py-1.5 rounded-lg font-display font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                Return to Base
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
