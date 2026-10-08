import React from 'react';
import { CHIEF_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-container-lowest mt-space-3xl border-t border-surface-container-highest/60">
      <div className="max-w-[1200px] mx-auto px-gutter-desktop py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-space-lg mb-space-xl">
          {/* Chief Info */}
          <div className="md:col-span-2 flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-2xs">
              <span className="font-display font-black text-xl uppercase text-primary">
                Chief {CHIEF_INFO.name}
              </span>
            </div>
            <p className="font-body text-xs sm:text-sm text-on-surface-variant max-w-md leading-relaxed">
              Entry-level Software &amp; UI Engineer forged in modern web frameworks, component architectures, and responsive game-inspired interfaces. Ready to join a high-impact clan to build fortified digital products.
            </p>
          </div>

          {/* Camp Quarters */}
          <div className="flex flex-col gap-space-2xs">
            <span className="font-label text-[11px] uppercase tracking-wider text-primary-fixed font-bold">
              Camp Quarters
            </span>
            <ul className="flex flex-col gap-1 text-on-surface-variant font-body text-xs">
              <li>Village: India (Open to Remote / Relo)</li>
              <li>Role: Junior Full-Stack Engineer</li>
              <li>Specialization: UI/UX &amp; Creative Front-End</li>
              <li>Clan Status: Ready for Recruitment</li>
            </ul>
          </div>

          {/* Scout Outposts */}
          <div className="flex flex-col gap-space-2xs">
            <span className="font-label text-[11px] uppercase tracking-wider text-primary-fixed font-bold">
              Scout Outposts
            </span>
            <div className="flex flex-col gap-1 font-body text-xs text-on-surface-variant">
              <a
                href="https://github.com/milan-mk"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                GitHub War Commits
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                LinkedIn Stronghold
              </a>
              <a href="/resume.pdf" download className="hover:text-primary transition-colors">
                Download Scroll (Resume)
              </a>
              <a href="mailto:milan.modak.dev@gmail.com" className="hover:text-primary transition-colors">
                Email Outpost
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-md border-t border-surface-container-high/40 text-on-surface-variant font-body text-xs">
          <p>
            © {new Date().getFullYear()} {CHIEF_INFO.name}. Tactile Strategy RPG Inspired Portfolio.
          </p>
          <p className="font-label text-[11px] uppercase tracking-widest text-outline font-bold">
            Citadel Shield Active • Level 1 Code Craftsman
          </p>
        </div>
      </div>
    </footer>
  );
};
