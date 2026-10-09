import React, { useState } from 'react';
import { CHIEF_INFO, DIRECT_OUTPOSTS } from '../data/portfolioData';
import { SocialIcon } from './SocialIcon';

export const RecruitmentSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'junior',
    orders: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep feedback visible for user confirmation
    }, 4000);
  };

  return (
    <section id="clan-recruitment" className="w-full px-4 sm:px-6 py-8 sm:py-12 lg:py-14">
      <div className="max-w-[1040px] mx-auto">
        <div className="relative bg-surface-container rounded-xl p-4 sm:p-6 flex flex-col gap-4 shadow-[0_12px_24px_rgba(0,0,0,0.7)] border border-surface-container-highest/70 overflow-hidden">
          {/* Runic Border Trim Highlight */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-container/20 via-primary-container to-primary-container/20"></div>

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-1">
            <div>
              <div className="flex items-center gap-1.5 text-primary-container font-label text-[11px] uppercase tracking-widest font-bold">
                <span className="material-symbols-outlined text-[16px]">mark_email_read</span>
                Guild Recruitment Outpost
              </div>
              <h2 className="font-display text-xl sm:text-2xl lg:text-[28px] font-extrabold uppercase text-on-surface tracking-tight mt-0.5">
                Send a Guild Missive to {CHIEF_INFO.name}
              </h2>
            </div>
            <div className="flex items-center gap-1.5 bg-surface-container-lowest px-2.5 py-1 rounded shadow-[0_2px_0_#050811] border border-surface-container-high/40 self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-label text-[10px] uppercase text-emerald-400 font-bold tracking-wider">
                0 Days Deployment Time • Ready to Build
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
            {/* Left Column: Parchment Form */}
            <div className="lg:col-span-7 bg-surface-container-lowest p-3.5 sm:p-5 rounded-xl shadow-[inset_0_4px_12px_rgba(0,0,0,0.8),0_4px_0_#050811] border border-surface-container-high/60 flex flex-col gap-3">
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {/* Name */}
                  <div className="flex flex-col gap-1">
                    <label className="font-label text-[10px] uppercase tracking-wider text-outline font-bold">
                      Chief Name / Recruiter
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Chief Sarah (Tech Lead)"
                      className="w-full bg-surface-container p-2 rounded text-on-surface placeholder:text-outline font-body text-xs sm:text-sm border border-surface-container-highest focus:outline-none focus:ring-1.5 focus:ring-primary-container transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1">
                    <label className="font-label text-[10px] uppercase tracking-wider text-outline font-bold">
                      Carrier Pigeon / Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="recruiter@clanengineering.io"
                      className="w-full bg-surface-container p-2 rounded text-on-surface placeholder:text-outline font-body text-xs sm:text-sm border border-surface-container-highest focus:outline-none focus:ring-1.5 focus:ring-primary-container transition-all"
                    />
                  </div>
                </div>

                {/* Battle Orders / Message */}
                <div className="flex flex-col gap-1">
                  <label className="font-label text-[10px] uppercase tracking-wider text-outline font-bold">
                    Battle Orders (Project or Team Details)
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.orders}
                    onChange={(e) => setFormData({ ...formData, orders: e.target.value })}
                    placeholder="Tell me about your product fortress, tech stack, and how you want me to contribute..."
                    className="w-full bg-surface-container p-2 rounded text-on-surface placeholder:text-outline font-body text-xs sm:text-sm border border-surface-container-highest focus:outline-none focus:ring-1.5 focus:ring-primary-container transition-all resize-none"
                  ></textarea>
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  className="btn-tactile-gold w-full py-2.5 rounded-lg font-display font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-[0_3px_0_#050811]"
                >
                  <span className="material-symbols-outlined text-[18px] material-symbols-fill">send</span>
                  <span>Send Clan Invitation (Dispatch)</span>
                </button>

                {submitted && (
                  <div className="p-2 rounded bg-primary-container/15 text-primary-container text-center font-body text-xs font-bold border border-primary-container/30 animate-in fade-in zoom-in-95">
                    🎉 Battle Scroll Dispatched! Chief {CHIEF_INFO.name} will reply via carrier pigeon within 24 hours.
                  </div>
                )}
              </form>
            </div>

            {/* Right Column: Direct Channels & Resume Plaque */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-3 sm:gap-4">
              <div className="bg-surface-container-lowest p-3.5 sm:p-4 rounded-xl shadow-[inset_0_4px_12px_rgba(0,0,0,0.8),0_4px_0_#050811] border border-surface-container-high/60 flex flex-col gap-2.5">
                <span className="font-label text-[10px] uppercase tracking-wider text-primary font-bold">
                  Fast-Troop Direct Outposts
                </span>
                <div className="flex flex-col gap-1.5">
                  {DIRECT_OUTPOSTS.map((outpost, idx) => (
                    <a
                      key={idx}
                      href={outpost.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between p-1.5 px-2.5 rounded bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-highest/40 group"
                    >
                      <span className="flex items-center gap-2 text-on-surface font-body text-xs group-hover:text-primary transition-colors">
                        <span className="text-primary-container group-hover:scale-110 transition-transform flex items-center justify-center w-4 h-4 shrink-0">
                          <SocialIcon platform={outpost.name} className="w-3.5 h-3.5" />
                        </span>
                        {outpost.name}
                      </span>
                      <span className="font-label text-[10px] text-outline font-bold group-hover:text-on-surface transition-colors">
                        {outpost.handle}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Resume Download Callout Plaque */}
              <div className="bg-surface-container-high p-3.5 sm:p-4 rounded-xl shadow-[0_4px_0_#050811] border border-surface-container-highest flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-sm text-primary uppercase">
                    Chief Scroll (Resume)
                  </span>
                  <span className="font-label text-[9px] text-tertiary bg-surface-container-lowest px-1.5 py-0.5 rounded font-bold border border-tertiary/30">
                    PDF V2025
                  </span>
                </div>
                <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                  Full technical specification, coursework, project metrics, and academic references formatted for ATS scans.
                </p>
                <a
                  href="/resume.pdf"
                  download
                  className="btn-tactile-stone mt-1 w-full py-2 rounded-lg font-display font-bold text-xs uppercase text-center flex items-center justify-center gap-1.5 cursor-pointer shadow-[0_3px_0_#050811]"
                >
                  <span className="material-symbols-outlined text-[16px]">download</span>
                  <span>Download Resume Scroll</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
