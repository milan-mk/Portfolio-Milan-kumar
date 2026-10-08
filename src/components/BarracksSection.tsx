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
            Total Housing Space: {totalUnits} / {totalUnits} Units
          </div>
        </div>

        {/* Category Tactical Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`font-label text-xs uppercase tracking-wider px-3.5 py-1.5 rounded font-bold cursor-pointer transition-all border ${
              activeCategory === 'all'
                ? 'bg-primary-container text-on-primary-container border-primary-container shadow-[0_3px_0_#9a6d00]'
                : 'bg-surface-container text-on-surface-variant hover:text-on-surface border-surface-container-highest shadow-[0_2px_0_#110d0b]'
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
                className={`flex items-center gap-1.5 font-label text-xs uppercase tracking-wider px-3.5 py-1.5 rounded font-bold cursor-pointer transition-all border ${
                  isActive
                    ? 'bg-primary-container text-on-primary-container border-primary-container shadow-[0_3px_0_#9a6d00]'
                    : 'bg-surface-container text-on-surface-variant hover:text-on-surface border-surface-container-highest shadow-[0_2px_0_#110d0b]'
                }`}
              >
                <span className="material-symbols-outlined text-[15px]">{cat.icon}</span>
                {cat.name} ({cat.skills.length})
              </button>
            );
          })}
        </div>

        {/* Skill Categories */}
        <div className="flex flex-col gap-space-2xl">
          {displayedCategories.map((category) => {
            const categoryHeaderColor =
              category.themeColor === 'primary' || category.themeColor === 'primary-fixed'
                ? 'text-primary'
                : category.themeColor === 'secondary'
                  ? 'text-secondary'
                  : 'text-tertiary';

            const categoryIconColor =
              category.themeColor === 'primary' || category.themeColor === 'primary-fixed'
                ? 'text-primary-container'
                : category.themeColor === 'secondary'
                  ? 'text-secondary'
                  : 'text-tertiary';

            return (
              <div key={category.id} className="flex flex-col gap-space-md">
                {/* Category Header */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-space-xs">
                    <span className={`material-symbols-outlined text-[24px] ${categoryIconColor}`}>
                      {category.icon}
                    </span>
                    <h3 className={`font-display text-xl sm:text-2xl font-bold uppercase tracking-wide ${categoryHeaderColor}`}>
                      {category.name}
                    </h3>
                    <span className="text-on-surface-variant font-label text-[11px] bg-surface-container px-2 py-0.5 rounded font-semibold ml-1">
                      {category.tierBadge}
                    </span>
                  </div>
                  <span className="font-label text-[11px] text-outline uppercase font-semibold">
                    {category.skills.length} Trained Units
                  </span>
                </div>

                {/* Units Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-space-md">
                  {category.skills.map((unit) => {
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

                    const iconColorClass = isGold
                      ? 'text-primary-container'
                      : isSecondary
                        ? 'text-secondary'
                        : 'text-tertiary';

                    return (
                      <div
                        key={unit.id}
                        className="bg-surface-container rounded-lg p-space-md flex flex-col gap-space-sm shadow-[0_5px_0_#110d0b] border border-surface-container-highest/60 hover:-translate-y-1 transition-transform"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-space-xs min-w-0">
                            <div
                              className={`w-10 h-10 shrink-0 rounded bg-surface-container-high flex items-center justify-center font-bold font-display border border-surface-container-highest ${iconColorClass}`}
                            >
                              {unit.isIcon ? (
                                <span className="material-symbols-outlined text-[22px]">{unit.code}</span>
                              ) : (
                                <span className="text-[14px] uppercase">{unit.code}</span>
                              )}
                            </div>
                            <div className="min-w-0">
                              <h4 className="font-display font-bold text-base text-on-surface leading-tight truncate">
                                {unit.name}
                              </h4>
                              <span className="font-label text-[11px] text-primary-container uppercase font-semibold block truncate">
                                {unit.rank}
                              </span>
                            </div>
                          </div>
                          <span
                            className={`shrink-0 px-2 py-0.5 rounded font-label text-[11px] font-bold shadow-[0_2px_0_rgba(0,0,0,0.4)] ${badgeClass}`}
                          >
                            Lv. {unit.level}
                          </span>
                        </div>

                        <div className="flex flex-col gap-1 mt-auto pt-2 border-t border-surface-container-highest/40">
                          <div className="flex justify-between font-label text-[10px] text-outline font-bold">
                            <span>{unit.metricLabel}</span>
                            <span className="text-on-surface">{unit.metricValue} / 100</span>
                          </div>
                          <div className="h-2 w-full bg-surface-container-lowest rounded-full overflow-hidden p-[1px]">
                            <div
                              className={`h-full rounded-full transition-all duration-500 ${barClass}`}
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
