import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const BarracksSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const totalUnits = SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);

  const displayedCategories =
    activeCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === activeCategory);

  return (
    <section id="army-camps" className="w-full px-4 sm:px-6 py-6 sm:py-8">
      <div className="max-w-[1040px] mx-auto flex flex-col gap-5">
        {/* Section Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-1.5 pb-2 border-b border-surface-container-highest">
          <div>
            <div className="flex items-center gap-1.5 text-primary-container font-label text-[11px] uppercase tracking-widest font-bold">
              <span className="material-symbols-outlined text-[16px]">swords</span>
              Barracks &amp; Arcane Forge
            </div>
            <h2 className="font-display text-xl sm:text-2xl lg:text-[28px] font-extrabold uppercase text-on-surface tracking-tight mt-0.5">
              Trained Unit Capacity (Skill Matrix)
            </h2>
          </div>
          <div className="font-label text-[10px] uppercase tracking-widest text-outline bg-surface-container px-2.5 py-1 rounded border border-surface-container-high self-start sm:self-auto font-bold">
            Total Housing Space: {totalUnits} / {totalUnits} Units
          </div>
        </div>

        {/* Category Tactical Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`font-label text-xs uppercase tracking-wider px-3 py-1 rounded font-bold cursor-pointer transition-all border ${
              activeCategory === 'all'
                ? 'bg-primary-container text-on-primary-container border-primary-container shadow-[0_2px_0_#78350f]'
                : 'bg-surface-container text-on-surface-variant hover:text-on-surface border-surface-container-highest shadow-[0_2px_0_#050811]'
            }`}
          >
            All Units ({totalUnits})
          </button>
          {SKILL_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1 font-label text-xs uppercase tracking-wider px-3 py-1 rounded font-bold cursor-pointer transition-all border ${
                  isActive
                    ? 'bg-primary-container text-on-primary-container border-primary-container shadow-[0_2px_0_#78350f]'
                    : 'bg-surface-container text-on-surface-variant hover:text-on-surface border-surface-container-highest shadow-[0_2px_0_#050811]'
                }`}
              >
                <span className="material-symbols-outlined text-[14px]">{cat.icon}</span>
                {cat.name} ({cat.skills.length})
              </button>
            );
          })}
        </div>

        {/* Skill Categories */}
        <div className="flex flex-col gap-5">
          {displayedCategories.map((category) => {
            return (
              <div key={category.id} className="flex flex-col gap-2.5">
                {/* Category Header */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[20px] text-primary-container">
                      {category.icon}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-wide text-on-surface">
                      {category.name}
                    </h3>
                    <span className="text-outline font-label text-[10px] bg-surface-container-high px-1.5 py-0.5 rounded font-semibold ml-1 border border-surface-container-highest">
                      {category.tierBadge}
                    </span>
                  </div>
                  <span className="font-label text-[10px] text-outline uppercase font-semibold">
                    {category.skills.length} Trained Units
                  </span>
                </div>

                {/* Units Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-3">
                  {category.skills.map((unit) => {
                    return (
                      <div
                        key={unit.id}
                        className="bg-surface-container rounded-lg p-3 flex flex-col gap-2 shadow-[0_3px_0_#050811] border border-surface-container-highest/60 hover:border-secondary/50 hover:-translate-y-0.5 transition-all"
                      >
                        <div className="flex items-start justify-between gap-1.5">
                          <div className="flex items-center gap-2 min-w-0">
                            <div className="w-8 h-8 shrink-0 rounded bg-surface-container-high flex items-center justify-center font-bold font-display border border-surface-container-highest text-secondary">
                              {unit.isIcon ? (
                                <span className="material-symbols-outlined text-[18px]">{unit.code}</span>
                              ) : (
                                <span className="text-[12px] uppercase">{unit.code}</span>
                              )}
                            </div>
                            <div className="min-w-0">
                              <h4 className="font-display font-bold text-sm text-on-surface leading-tight truncate">
                                {unit.name}
                              </h4>
                              <span className="font-label text-[10px] text-outline uppercase font-semibold block truncate">
                                {unit.rank}
                              </span>
                            </div>
                          </div>
                          <span className="shrink-0 px-1.5 py-0.5 rounded font-label text-[10px] font-bold bg-surface-container-highest text-primary-container border border-primary-container/20 shadow-xs">
                            Lv. {unit.level}
                          </span>
                        </div>

                        <div className="flex flex-col gap-0.5 mt-auto pt-1.5 border-t border-surface-container-highest/40">
                          <div className="flex justify-between font-label text-[9px] text-outline font-bold">
                            <span>{unit.metricLabel}</span>
                            <span className="text-on-surface">{unit.metricValue} / 100</span>
                          </div>
                          <div className="h-1.5 w-full bg-surface-container-lowest rounded-full overflow-hidden p-[1px]">
                            <div
                              className="h-full rounded-full transition-all duration-500 bg-gradient-to-r from-secondary-container via-secondary to-primary-container"
                              style={{ width: `${unit.metricValue}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
