import React from 'react';
import { CAMPAIGN_PROJECTS } from '../data/portfolioData';

export const WarLogSection: React.FC = () => {
  return (
    <section id="war-log" className="w-full px-gutter-desktop py-space-xl">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-space-2xl">
        {/* Section Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-xs pb-space-xs border-b border-surface-container-highest">
          <div>
            <div className="flex items-center gap-space-xs text-primary font-label text-[12px] uppercase tracking-widest font-bold">
              <span className="material-symbols-outlined text-[18px]">military_tech</span>
              Guild Campaign Log: 100% Cleared Expeditions
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-extrabold uppercase text-on-surface tracking-tight mt-1">
              Featured Engineering Battle Replays
            </h2>
          </div>
          <div className="flex items-center gap-space-xs bg-surface-container px-space-sm py-1.5 rounded border border-surface-container-high self-start sm:self-auto shadow-[0_2px_0_#110d0b]">
            <span className="material-symbols-outlined text-primary-container text-[18px] material-symbols-fill">star</span>
            <span className="material-symbols-outlined text-primary-container text-[18px] material-symbols-fill">star</span>
            <span className="material-symbols-outlined text-primary-container text-[18px] material-symbols-fill">star</span>
            <span className="font-label text-[11px] uppercase text-primary font-bold ml-1">
              Perfect Campaign Record
            </span>
          </div>
        </div>

        {/* Projects Grid: Clan War Attack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {CAMPAIGN_PROJECTS.map((project) => {
            const isGoldTheme = project.questNumber === 1 || project.questNumber === 4;
            const isSecondaryTheme = project.questNumber === 2;
            const titleHoverColor = isGoldTheme
              ? 'group-hover:text-primary'
              : isSecondaryTheme
              ? 'group-hover:text-secondary'
              : 'group-hover:text-tertiary';

            const demoBtnClass = isGoldTheme
              ? 'btn-tactile-gold'
              : isSecondaryTheme
              ? 'btn-tactile-secondary'
              : 'btn-tactile-tertiary';

            return (
              <div
                key={project.id}
                className="relative bg-surface-container rounded-xl p-space-md sm:p-space-lg flex flex-col gap-space-md shadow-[0_8px_0_#14100E] border border-surface-container-highest/70 overflow-hidden group hover:border-surface-tint/50 transition-all duration-300"
              >
                {/* Header info & stars */}
                <div className="flex items-start justify-between gap-space-sm">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-space-xs">
                      <span className="font-label text-[11px] uppercase text-primary font-bold">
                        Quest #{project.questNumber} Conquered
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container-highest font-label text-[10px] text-tertiary uppercase font-bold">
                        {project.category}
                      </span>
                    </div>
                    <h3 className={`font-display text-xl font-bold uppercase text-on-surface transition-colors ${titleHoverColor}`}>
                      {project.title}
                    </h3>
                  </div>

                  {/* 3-Star Badge */}
                  <div className="flex items-center gap-0.5 bg-surface-container-lowest px-2 py-1 rounded shadow-[0_2px_0_#110d0b] shrink-0 border border-surface-container-high/60">
                    {Array.from({ length: project.stars }).map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-primary-container text-[18px] material-symbols-fill">
                        star
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Image Preview */}
                <div className="relative w-full h-48 rounded-lg overflow-hidden shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)] border border-surface-container-highest/60 bg-surface-container-lowest">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    alt={project.title}
                    src={project.image}
                  />
                  <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-surface-container-lowest/90 backdrop-blur font-label text-[11px] font-bold text-on-surface border border-surface-container-high shadow-md">
                    {project.badgeHighlight}
                  </div>
                </div>

                {/* Description */}
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  {project.description}
                </p>

                {/* Loot Won (Impact Metrics) */}
                <div className="grid grid-cols-3 gap-space-xs bg-surface-container-lowest p-space-xs rounded shadow-[0_2px_0_#110d0b] border border-surface-container-high/40">
                  <div className="flex flex-col text-center">
                    <span className={`font-display font-bold text-base sm:text-lg ${project.lootWon.stat1.color}`}>
                      {project.lootWon.stat1.value}
                    </span>
                    <span className="font-label text-[10px] uppercase text-outline font-bold">
                      {project.lootWon.stat1.label}
                    </span>
                  </div>
                  <div className="flex flex-col text-center border-x border-surface-container-high/50">
                    <span className={`font-display font-bold text-base sm:text-lg ${project.lootWon.stat2.color}`}>
                      {project.lootWon.stat2.value}
                    </span>
                    <span className="font-label text-[10px] uppercase text-outline font-bold">
                      {project.lootWon.stat2.label}
                    </span>
                  </div>
                  <div className="flex flex-col text-center">
                    <span className={`font-display font-bold text-base sm:text-lg ${project.lootWon.stat3.color}`}>
                      {project.lootWon.stat3.value}
                    </span>
                    <span className="font-label text-[10px] uppercase text-outline font-bold">
                      {project.lootWon.stat3.label}
                    </span>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`font-label text-[11px] px-2.5 py-0.5 rounded bg-surface-container-high ${tag.color} font-semibold border border-surface-container-highest`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

                {/* Action Triggers */}
                <div className="flex items-center gap-space-sm mt-auto pt-space-xs">
                  <a
                    href={project.demoUrl}
                    className={`flex-1 text-center py-2.5 rounded-lg font-display font-bold text-sm uppercase tracking-wide cursor-pointer flex items-center justify-center gap-1 ${demoBtnClass}`}
                  >
                    <span className="material-symbols-outlined text-[18px] material-symbols-fill">play_arrow</span>
                    <span>Attack (Demo)</span>
                  </a>
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-2.5 rounded-lg bg-surface-container-highest text-primary hover:bg-surface-bright font-display font-bold text-sm uppercase tracking-wide shadow-[0_3px_0_#110d0b] active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-1 border border-surface-container-high/60 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">code</span>
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
