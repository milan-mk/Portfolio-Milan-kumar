import React, { useState } from 'react';
import { CHIEF_INFO, DIRECT_OUTPOSTS } from '../data/portfolioData';

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
    <section id="clan-recruitment" className="w-full px-gutter-desktop py-space-xl">
      <div className="max-w-[1200px] mx-auto">
        <div className="relative bg-surface-container rounded-xl p-space-md sm:p-space-xl flex flex-col gap-space-lg shadow-[0_16px_32px_rgba(0,0,0,0.7)] border border-surface-container-highest/70 overflow-hidden">
          {/* Runic Border Trim Highlight */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-tertiary-container via-primary-container to-secondary-container"></div>

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md pt-2">
            <div>
              <div className="flex items-center gap-space-xs text-primary-container font-label text-[12px] uppercase tracking-widest font-bold">
                <span className="material-symbols-outlined text-[18px]">mark_email_read</span>
                Guild Recruitment Outpost
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-extrabold uppercase text-on-surface tracking-tight mt-1">
                Send a Guild Missive to {CHIEF_INFO.name}
              </h2>
            </div>
            <div className="flex items-center gap-space-xs bg-surface-container-lowest px-space-sm py-1.5 rounded shadow-[0_2px_0_#110d0b] border border-surface-container-high/40 self-start sm:self-auto">
              <span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse"></span>
              <span className="font-label text-[11px] uppercase text-tertiary font-bold tracking-wider">
                0 Days Deployment Time • Ready to Build
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
            {/* Left Column: Parchment Form */}
            <div className="lg:col-span-7 bg-surface-container-lowest p-space-md sm:p-space-lg rounded-xl shadow-[inset_0_4px_12px_rgba(0,0,0,0.8),0_6px_0_#110d0b] border border-surface-container-high/60 flex flex-col gap-space-md">
              <form onSubmit={handleSubmit} className="flex flex-col gap-space-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                  {/* Name */}
                  <div className="flex flex-col gap-1">
                    <label className="font-label text-[11px] uppercase tracking-wider text-outline font-bold">
                      Chief Name / Recruiter
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Chief Sarah (Tech Lead)"
                      className="w-full bg-surface-container p-2.5 rounded text-on-surface placeholder:text-outline font-body text-sm border border-surface-container-highest focus:outline-none focus:ring-2 focus:ring-primary-container transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1">
                    <label className="font-label text-[11px] uppercase tracking-wider text-outline font-bold">
                      Carrier Pigeon / Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="recruiter@clanengineering.io"
                      className="w-full bg-surface-container p-2.5 rounded text-on-surface placeholder:text-outline font-body text-sm border border-surface-container-highest focus:outline-none focus:ring-2 focus:ring-primary-container transition-all"
                    />
                  </div>
                </div>

                {/* Role Offer Type Dropdown */}
                {/* <div className="flex flex-col gap-1">
                  <label className="font-label text-[11px] uppercase tracking-wider text-outline font-bold">
                    Role / Clan Position Offered
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-surface-container p-2.5 rounded text-on-surface font-body text-sm border border-surface-container-highest focus:outline-none focus:ring-2 focus:ring-primary-container transition-all cursor-pointer"
                  >
                    <option value="junior">Junior Software Engineer (Full-Time SDE I)</option>
                    <option value="frontend">Frontend / Creative UI Engineer</option>
                    <option value="intern">Software Engineering Intern / Co-op</option>
                    <option value="contract">High-Impact Contract / MVP Build</option>
                  </select>
                </div> */}

                {/* Battle Orders / Message */}
                <div className="flex flex-col gap-1">
                  <label className="font-label text-[11px] uppercase tracking-wider text-outline font-bold">
                    Battle Orders (Project or Team Details)
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.orders}
                    onChange={(e) => setFormData({ ...formData, orders: e.target.value })}
                    placeholder="Tell me about your product fortress, tech stack, and how you want me to contribute..."
                    className="w-full bg-surface-container p-2.5 rounded text-on-surface placeholder:text-outline font-body text-sm border border-surface-container-highest focus:outline-none focus:ring-2 focus:ring-primary-container transition-all resize-none"
                  ></textarea>
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  className="btn-tactile-gold w-full py-3 rounded-lg font-display font-bold text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-space-xs cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px] material-symbols-fill">send</span>
                  <span>Send Clan Invitation (Dispatch)</span>
                </button>

                {submitted && (
                  <div className="p-space-xs rounded bg-tertiary-container/20 text-tertiary text-center font-body text-xs sm:text-sm font-bold border border-tertiary/30 animate-in fade-in zoom-in-95">
                    🎉 Battle Scroll Dispatched! Chief {CHIEF_INFO.name} will reply via carrier pigeon within 24 hours.
                  </div>
                )}
              </form>
            </div>

            {/* Right Column: Direct Channels & Resume Plaque */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-space-md">
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-[inset_0_4px_12px_rgba(0,0,0,0.8),0_6px_0_#110d0b] border border-surface-container-high/60 flex flex-col gap-space-sm">
                <span className="font-label text-[11px] uppercase tracking-wider text-primary font-bold">
                  Fast-Troop Direct Outposts
                </span>
                <div className="flex flex-col gap-2">
                  {DIRECT_OUTPOSTS.map((outpost, idx) => (
                    <a
                      key={idx}
                      href={outpost.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between p-space-xs rounded bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-container-highest/40 group"
                    >
                      <span className="flex items-center gap-space-xs text-on-surface font-body text-xs sm:text-sm group-hover:text-primary transition-colors">
                        <span className={`material-symbols-outlined ${outpost.color} text-[20px]`}>
                          {outpost.icon}
                        </span>
                        {outpost.name}
                      </span>
                      <span className="font-label text-[11px] text-outline font-bold group-hover:text-on-surface transition-colors">
                        {outpost.handle}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Resume Download Callout Plaque */}
              <div className="bg-surface-container-high p-space-md rounded-xl shadow-[0_6px_0_#14100E] border border-surface-container-highest flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-base text-primary uppercase">
                    Chief Scroll (Resume)
                  </span>
                  <span className="font-label text-[10px] text-tertiary bg-surface-container-lowest px-2 py-0.5 rounded font-bold border border-tertiary/30">
                    PDF V2025
                  </span>
                </div>
                <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                  Full technical specification, coursework, project metrics, and academic references formatted for ATS scans and hiring managers.
                </p>
                <a
                  href="/resume.pdf"
                  download
                  className="btn-tactile-stone mt-space-2xs w-full py-2.5 rounded-lg font-display font-bold text-sm uppercase text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">download</span>
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
