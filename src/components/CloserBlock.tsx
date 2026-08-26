import React from 'react';
import { CLOSER_COPY } from '../data';
import { Check, ShieldAlert, ArrowRight, CheckCircle2, Lock } from 'lucide-react';

interface CloserBlockProps {
  onOpenBooking: () => void;
}

export const CloserBlock: React.FC<CloserBlockProps> = ({ onOpenBooking }) => {
  return (
    <section id="closer" className="py-16 sm:py-24 bg-[#070d18] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-amber-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        <div className="bg-[#0f172a] rounded-3xl border border-slate-700/80 p-8 sm:p-14 text-center shadow-2xl">
          {/* Headline */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight leading-[1.2] mb-8">
            {CLOSER_COPY.headline}
          </h2>

          {/* 3-Item Trust Stack */}
          <div className="max-w-xl mx-auto space-y-4 mb-8 text-left">
            {CLOSER_COPY.stack.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-slate-900/90 border border-slate-800"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-950 border border-emerald-700/80 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span className="text-sm sm:text-base font-semibold text-slate-200">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Risk Reversal Line */}
          <p className="text-sm sm:text-base text-slate-300 font-medium max-w-lg mx-auto mb-8 leading-relaxed">
            {CLOSER_COPY.riskReversal}
          </p>

          {/* Primary CTA #6 */}
          <div className="max-w-md mx-auto">
            <button
              onClick={onOpenBooking}
              className="w-full min-h-[56px] px-6 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold text-base sm:text-lg shadow-xl shadow-amber-500/25 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <span>{CLOSER_COPY.ctaText}</span>
              <ArrowRight className="w-5 h-5 text-slate-950" />
            </button>

            {/* Fear-buster */}
            <div className="flex items-center justify-center flex-wrap gap-x-3 gap-y-1 text-xs sm:text-sm text-slate-400 mt-3.5">
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                100% Free
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                No Credit Card
              </span>
              <span className="flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                Your Info Stays Private
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
