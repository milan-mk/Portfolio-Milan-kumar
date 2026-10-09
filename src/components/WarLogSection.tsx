import React from 'react';
import { CAMPAIGN_PROJECTS } from '../data/portfolioData';

export const WarLogSection: React.FC = () => {
  return (
    <section id="war-log" className="w-full px-4 sm:px-6 py-6 sm:py-8">
      <div className="max-w-[1040px] mx-auto flex flex-col gap-5">
        {/* Section Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-1.5 pb-2 border-b border-surface-container-highest">
          <div>
            <div className="flex items-center gap-1.5 text-primary font-label text-[11px] uppercase tracking-widest font-bold">
              <span className="material-symbols-outlined text-[16px]">military_tech</span>
              Guild Campaign Log: 100% Cleared Expeditions
            </div>
            <h2 className="font-display text-xl sm:text-2xl lg:text-[28px] font-extrabold uppercase text-on-surface tracking-tight mt-0.5">
              Featured Engineering Battle Replays
            </h2>
          </div>
          <div className="flex items-center gap-1 bg-surface-container px-2.5 py-1 rounded border border-surface-container-high self-start sm:self-auto shadow-[0_2px_0_#050811]">
            <span className="material-symbols-outlined text-primary-container text-[16px] material-symbols-fill">star</span>
            <span className="material-symbols-outlined text-primary-container text-[16px] material-symbols-fill">star</span>
            <span className="material-symbols-outlined text-primary-container text-[16px] material-symbols-fill">star</span>
            <span className="font-label text-[10px] uppercase text-primary font-bold ml-1">
              Perfect Campaign Record
            </span>
          </div>
        </div>

        {/* Projects Grid: Clan War Attack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {CAMPAIGN_PROJECTS.map((project) => {
            return (
              <div
                key={project.id}
                className="relative bg-surface-container rounded-xl p-4 sm:p-5 flex flex-col gap-3 shadow-[0_4px_0_#050811] border border-surface-container-highest/70 overflow-hidden group hover:border-secondary/50 transition-all duration-300"
              >
                {/* Header info & stars */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="font-label text-[10px] uppercase text-primary-container font-bold">
                        Quest #{project.questNumber} Conquered
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-surface-container-highest font-label text-[9px] text-outline uppercase font-bold border border-surface-container-high">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold uppercase text-on-surface transition-colors group-hover:text-secondary mt-0.5">
                      {project.title}
                    </h3>
                  </div>

                  {/* 3-Star Badge */}
                  <div className="flex items-center gap-0.5 bg-surface-container-lowest px-1.5 py-0.5 rounded shadow-[0_1px_0_#050811] shrink-0 border border-surface-container-high/60">
                    {Array.from({ length: project.stars }).map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-primary-container text-[15px] material-symbols-fill">
                        star
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Image Preview */}
                <div className="relative w-full h-36 sm:h-40 rounded-lg overflow-hidden shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)] border border-surface-container-highest/60 bg-surface-container-lowest">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    alt={project.title}
                    src={project.image}
                  />
                  <div className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded bg-surface-container-lowest/90 backdrop-blur font-label text-[10px] font-bold text-on-surface border border-surface-container-high shadow-xs">
                    {project.badgeHighlight}
                  </div>
                </div>

                {/* Description */}
                <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {project.description}
                </p>

                {/* Loot Won (Impact Metrics) */}
                <div className="grid grid-cols-3 gap-1 bg-surface-container-lowest p-2 rounded shadow-[0_1px_0_#050811] border border-surface-container-high/40">
                  <div className="flex flex-col text-center">
                    <span className="font-display font-bold text-sm sm:text-base text-primary">
                      {project.lootWon.stat1.value}
                    </span>
                    <span className="font-label text-[9px] uppercase text-outline font-bold">
                      {project.lootWon.stat1.label}
                    </span>
                  </div>
                  <div className="flex flex-col text-center border-x border-surface-container-high/50">
                    <span className="font-display font-bold text-sm sm:text-base text-primary">
                      {project.lootWon.stat2.value}
                    </span>
                    <span className="font-label text-[9px] uppercase text-outline font-bold">
                      {project.lootWon.stat2.label}
                    </span>
                  </div>
                  <div className="flex flex-col text-center">
                    <span className="font-display font-bold text-sm sm:text-base text-primary">
                      {project.lootWon.stat3.value}
                    </span>
                    <span className="font-label text-[9px] uppercase text-outline font-bold">
                      {project.lootWon.stat3.label}
                    </span>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="font-label text-[10px] px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-semibold border border-surface-container-highest hover:text-primary transition-colors"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

                {/* Action Triggers */}
                <div className="flex items-center gap-2 mt-auto pt-1">
                  <a
                    href={project.demoUrl}
                    className="flex-1 text-center py-2 rounded-lg font-display font-bold text-xs sm:text-sm uppercase tracking-wide cursor-pointer flex items-center justify-center gap-1 btn-tactile-gold"
                  >
                    <span className="material-symbols-outlined text-[16px] material-symbols-fill">play_arrow</span>
                    <span>Attack (Demo)</span>
                  </a>
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-2 rounded-lg bg-surface-container-highest text-primary hover:bg-surface-bright font-display font-bold text-xs sm:text-sm uppercase tracking-wide shadow-[0_2px_0_#050811] active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-1 border border-surface-container-high/60 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">code</span>
                    <span>Inspect Source</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
