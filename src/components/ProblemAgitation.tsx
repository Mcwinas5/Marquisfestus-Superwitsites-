import React from 'react';
import { PROBLEM_COPY } from '../data';
import { AlertCircle, Ghost, DollarSign, Clock } from 'lucide-react';

export const ProblemAgitation: React.FC = () => {
  return (
    <section id="problem" className="py-16 sm:py-24 bg-[#070d18] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0f172a] rounded-2xl sm:rounded-3xl border border-slate-800/90 p-6 sm:p-12 relative overflow-hidden shadow-2xl">
          {/* Subtle warning glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-2.5 text-amber-400 font-semibold text-xs sm:text-sm tracking-wider uppercase mb-4">
            <AlertCircle className="w-4 h-4" />
            <span>The Reality Most Small Businesses Face</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight leading-[1.25] mb-6">
            {PROBLEM_COPY.headline}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-[1.7] mb-8 font-normal">
            {PROBLEM_COPY.body}
          </p>

          {/* 3 Callout highlights representing the burned experiences */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/60">
              <Ghost className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-slate-200">The Disappearing Act</h3>
                <p className="text-xs text-slate-400 mt-0.5">Freelancers who go quiet the moment revisions get requested.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/60">
              <DollarSign className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-slate-200">The Agency Markup</h3>
                <p className="text-xs text-slate-400 mt-0.5">Five-figure retainers for pretty layouts that fail to convert.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/60">
              <Clock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-slate-200">Lost Months</h3>
                <p className="text-xs text-slate-400 mt-0.5">Every month without qualified bookings is revenue left on the table.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
