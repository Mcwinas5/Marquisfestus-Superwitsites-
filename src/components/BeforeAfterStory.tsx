import React from 'react';
import { BEFORE_AFTER_COPY } from '../data';
import { TrendingUp, Check, ArrowRight, ShieldCheck, Activity } from 'lucide-react';

interface BeforeAfterStoryProps {
  onOpenBooking: () => void;
}

export const BeforeAfterStory: React.FC<BeforeAfterStoryProps> = ({ onOpenBooking }) => {
  return (
    <section id="case-study" className="py-16 sm:py-24 bg-[#070d18] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0f172a] rounded-2xl sm:rounded-3xl border border-slate-800 p-6 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Top Label */}
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs sm:text-sm tracking-wider uppercase mb-4">
            <TrendingUp className="w-4 h-4" />
            <span>Proven Case Study • {BEFORE_AFTER_COPY.clientName}</span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight leading-[1.25] mb-6">
            {BEFORE_AFTER_COPY.headline}
          </h2>

          {/* Body */}
          <p className="text-base sm:text-lg text-slate-300 leading-[1.7] mb-10 font-normal">
            {BEFORE_AFTER_COPY.body}
          </p>

          {/* Visual Transformation Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 mb-10">
            {/* Before state */}
            <div className="p-5 rounded-xl bg-slate-950/60 border border-rose-900/30 flex flex-col justify-between">
              <div>
                <span className="inline-block px-2.5 py-1 rounded bg-rose-950/80 text-rose-300 border border-rose-800/60 text-xs font-bold uppercase tracking-wider mb-3">
                  Before: Old Template Site
                </span>
                <div className="text-3xl sm:text-4xl font-black text-rose-300 mb-1">
                  ~5 Bookings / mo
                </div>
                <p className="text-xs sm:text-sm text-slate-400">
                  Visitor drop-offs, slow multi-step form, no trust elements, passive contact page.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs text-rose-400/80 font-medium">
                ✕ High ad spend with low conversion return
              </div>
            </div>

            {/* After state */}
            <div className="p-5 rounded-xl bg-slate-950/80 border border-emerald-500/40 flex flex-col justify-between shadow-lg relative">
              <div className="absolute top-4 right-4 hidden sm:flex items-center gap-1 text-[11px] font-bold text-amber-400 bg-amber-950/60 border border-amber-800/60 px-2 py-0.5 rounded">
                <Activity className="w-3 h-3 text-amber-400" />
                8-Week Delivery
              </div>
              <div>
                <span className="inline-block px-2.5 py-1 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-700/60 text-xs font-bold uppercase tracking-wider mb-3">
                  After: SuperwitSites Engine
                </span>
                <div className="text-3xl sm:text-4xl font-black text-emerald-400 mb-1 flex items-center gap-2">
                  15+ Bookings / mo
                  <span className="text-xs font-bold px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300">
                    +200%
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300">
                  Frictionless 60-second patient intake, mobile thumb-zone CTAs, transparent treatment breakdown.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" />
                Consistent patient acquisition engine without agency retainers
              </div>
            </div>
          </div>

          {/* Primary CTA #3 + Fear-buster */}
          <div className="max-w-md mx-auto text-center">
            <button
              onClick={onOpenBooking}
              className="w-full min-h-[52px] px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-base sm:text-lg shadow-lg shadow-amber-500/25 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <span>Book My Strategy Call</span>
              <ArrowRight className="w-5 h-5 text-slate-950" />
            </button>

            {/* Fear-buster micro-copy */}
            <div className="flex items-center justify-center flex-wrap gap-x-3 gap-y-1 text-xs sm:text-sm text-slate-400 mt-3">
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                Real results
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                No vanity metrics
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                100% focused on bookings
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
