import React from 'react';
import { RECENT_BUILDS } from '../data';
import { ExternalLink, Check, ArrowRight, Shield, Sparkles } from 'lucide-react';

interface RecentBuildsGridProps {
  onOpenBooking: () => void;
  onSelectProject?: (projectId: string) => void;
}

export const RecentBuildsGrid: React.FC<RecentBuildsGridProps> = ({ onOpenBooking }) => {
  return (
    <section id="recent-work" className="py-16 sm:py-24 bg-[#070d18] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-amber-400 bg-amber-950/40 border border-amber-800/40 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Proven Architecture
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight leading-[1.25]">
              Recent Work
            </h2>
          </div>

          <a
            href="#closer"
            className="text-sm font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors group"
          >
            <span>See More of My Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 3 Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {RECENT_BUILDS.map((project) => (
            <div
              key={project.id}
              className="bg-[#0f172a] rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all duration-300 shadow-xl group"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={project.imageUrl}
                  alt={`${project.title} Preview`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80" />

                {/* Status & Tag Pill */}
                <div className="absolute top-3 left-3">
                  {project.isDemo ? (
                    <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-amber-500/90 text-slate-950 shadow-sm border border-amber-400">
                      Demo Build
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-500/90 text-slate-950 shadow-sm border border-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-950"></span>
                      Live Client Build
                    </span>
                  )}
                </div>

                {/* Category Pill */}
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-900/90 text-slate-300 border border-slate-700/80 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-100 tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal mb-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Metric pill */}
                  <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-semibold text-amber-300 mb-4 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{project.metric}</span>
                  </div>

                  {/* Outbound Link */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-sm transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    aria-label={`View live site for ${project.title}`}
                  >
                    <span>Visit Live Experience</span>
                    <ExternalLink className="w-4 h-4 text-slate-400" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Primary CTA #4 + Fear-buster */}
        <div className="max-w-md mx-auto text-center">
          <button
            onClick={onOpenBooking}
            className="w-full min-h-[52px] px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-base sm:text-lg shadow-lg shadow-amber-500/25 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <span>Book My Strategy Call</span>
            <ArrowRight className="w-5 h-5 text-slate-950" />
          </button>

          {/* Fear-buster */}
          <div className="flex items-center justify-center flex-wrap gap-x-3 gap-y-1 text-xs sm:text-sm text-slate-400 mt-3">
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              Direct access to Marquis
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              Clear weekly milestones
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              No surprise costs
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
