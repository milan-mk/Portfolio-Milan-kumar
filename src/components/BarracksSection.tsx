import React from 'react';
import { DEVOPS_SKILLS, HEAVY_STACK_SKILLS, INFANTRY_SKILLS } from '../data/portfolioData';

export const BarracksSection: React.FC = () => {
  return (
    <section id="army-camps" className="w-full px-gutter-desktop py-space-xl">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-space-2xl">
        {/* Section Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-xs pb-space-xs border-b border-surface-container-highest">
          <div>
            <div className="flex items-center gap-space-xs text-primary-container font-label text-[12px] uppercase tracking-widest font-bold">
              <span className="material-symbols-outlined text-[18px]">swords</span>
              Barracks &amp; Arcane Forge
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-extrabold uppercase text-on-surface tracking-tight mt-1">
              Trained Unit Capacity (Skill Matrix)
            </h2>
          </div>
          <div className="font-label text-[11px] uppercase tracking-widest text-outline bg-surface-container px-space-sm py-1.5 rounded border border-surface-container-high self-start sm:self-auto font-bold">
            Total Housing Space: 240 / 240
          </div>
        </div>

        {/* Troop Category 1: Barbarians & Archers (Core Fundamentals) */}
        <div className="flex flex-col gap-space-md">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-primary text-[22px]">sports_martial_arts</span>
            <h3 className="font-display text-xl font-bold uppercase text-primary tracking-wide">
              Infantry: Core Fundamentals
            </h3>
            <span className="text-on-surface-variant font-label text-[11px] bg-surface-container px-2 py-0.5 rounded font-semibold ml-2">
              Tier I Barracks
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {INFANTRY_SKILLS.map((unit) => {
              const isGold = unit.colorType === 'primary' || unit.colorType === 'primary-fixed';
              const isSecondary = unit.colorType === 'secondary';
              const badgeClass = isGold
                ? 'bg-primary-container text-on-primary-container'
                : isSecondary
                ? 'bg-secondary-container text-on-secondary-container'
                : 'bg-tertiary-container text-on-tertiary-container';
              const barClass = isGold
                ? 'bg-primary-container'
                : isSecondary
                ? 'bg-secondary-container'
                : 'bg-tertiary';

              return (
                <div
                  key={unit.id}
                  className="bg-surface-container rounded-lg p-space-md flex flex-col gap-space-sm shadow-[0_5px_0_#110d0b] border border-surface-container-highest/60 hover:-translate-y-1 transition-transform"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-space-xs">
                      <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center text-primary font-bold font-display text-[15px] border border-surface-container-highest">
                        {unit.code}
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-base text-on-surface leading-tight">
                          {unit.name}
                        </h4>
                        <span className="font-label text-[11px] text-primary-container uppercase font-semibold">
                          {unit.rank}
                        </span>
                      </div>
                    </div>
                    <span className={`px-2 py-0.5 rounded font-label text-[11px] font-bold shadow-[0_2px_0_rgba(0,0,0,0.4)] ${badgeClass}`}>
                      Lv. {unit.level}
                    </span>
                  </div>

                  <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {unit.description}
                  </p>

                  <div className="flex flex-col gap-1 mt-auto pt-2 border-t border-surface-container-highest/40">
                    <div className="flex justify-between font-label text-[10px] text-outline font-bold">
                      <span>{unit.metricLabel}</span>
                      <span className="text-on-surface">{unit.metricValue} / 100</span>
                    </div>
                    <div className="h-2 w-full bg-surface-container-lowest rounded-full overflow-hidden p-[1px]">
                      <div
                        className={`h-full rounded-full ${barClass}`}
                        style={{ width: `${unit.metricValue}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Troop Category 2: Giants & Golems (Heavy Stacks) */}
        <div className="flex flex-col gap-space-md">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-secondary text-[22px]">shield</span>
            <h3 className="font-display text-xl font-bold uppercase text-secondary tracking-wide">
              Giants &amp; Golems: Heavy Stacks
            </h3>
            <span className="text-on-surface-variant font-label text-[11px] bg-surface-container px-2 py-0.5 rounded font-semibold ml-2">
              Dark Barracks
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {HEAVY_STACK_SKILLS.map((unit) => {
              const isGold = unit.colorType === 'primary';
              const isSecondary = unit.colorType === 'secondary';
              const badgeClass = isGold
                ? 'bg-primary-container text-on-primary-container'
                : isSecondary
                ? 'bg-secondary-container text-on-secondary-container'
                : 'bg-tertiary-container text-on-tertiary-container';
              const barClass = isGold
                ? 'bg-primary-container'
                : isSecondary
                ? 'bg-secondary-container'
                : 'bg-tertiary';

              return (
                <div
                  key={unit.id}
                  className="bg-surface-container rounded-lg p-space-md flex flex-col gap-space-sm shadow-[0_5px_0_#110d0b] border border-surface-container-highest/60 hover:-translate-y-1 transition-transform"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-space-xs">
                      <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center text-primary-container border border-surface-container-highest">
                        <span className="material-symbols-outlined text-[22px]">{unit.code}</span>
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-base text-on-surface leading-tight">
                          {unit.name}
                        </h4>
                        <span className="font-label text-[11px] text-primary uppercase font-semibold">
                          {unit.rank}
                        </span>
                      </div>
                    </div>
                    <span className={`px-2 py-0.5 rounded font-label text-[11px] font-bold shadow-[0_2px_0_rgba(0,0,0,0.4)] ${badgeClass}`}>
                      Lv. {unit.level}
                    </span>
                  </div>

                  <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {unit.description}
                  </p>

                  <div className="flex flex-col gap-1 mt-auto pt-2 border-t border-surface-container-highest/40">
                    <div className="flex justify-between font-label text-[10px] text-outline font-bold">
                      <span>{unit.metricLabel}</span>
                      <span className="text-on-surface">{unit.metricValue} / 100</span>
                    </div>
                    <div className="h-2 w-full bg-surface-container-lowest rounded-full overflow-hidden p-[1px]">
                      <div
                        className={`h-full rounded-full ${barClass}`}
                        style={{ width: `${unit.metricValue}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Troop Category 3: Spells & Dark Elixir (DevOps & Tools) */}
        <div className="flex flex-col gap-space-md">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-tertiary text-[22px]">auto_fix_high</span>
            <h3 className="font-display text-xl font-bold uppercase text-tertiary tracking-wide">
              Spells &amp; Dark Elixir: DevOps &amp; Tooling
            </h3>
            <span className="text-on-surface-variant font-label text-[11px] bg-surface-container px-2 py-0.5 rounded font-semibold ml-2">
              Spell Forge
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {DEVOPS_SKILLS.map((tool, idx) => (
              <div
                key={idx}
                className="bg-surface-container-low rounded-lg p-space-md flex flex-col gap-space-xs shadow-[0_3px_0_#110d0b] border border-surface-container-high/40 hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center justify-between">
                  <span className={`font-display font-bold text-base ${tool.color}`}>{tool.name}</span>
                  <span className={`font-label text-[11px] ${tool.badgeColor} bg-surface-container-high px-2 py-0.5 rounded font-bold`}>
                    {tool.level}
                  </span>
                </div>
                <p className="font-body text-xs text-on-surface-variant leading-relaxed mt-1">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
