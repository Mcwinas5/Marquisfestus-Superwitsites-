import React from 'react';
import { SOLUTION_STEPS } from '../data';
import { PhoneCall, Layers, Rocket, ArrowRight, Check } from 'lucide-react';

interface SolutionSectionProps {
  onOpenBooking: () => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ onOpenBooking }) => {
  const stepIcons = [
    <PhoneCall className="w-6 h-6 text-amber-400" key="step-1" />,
    <Layers className="w-6 h-6 text-amber-400" key="step-2" />,
    <Rocket className="w-6 h-6 text-amber-400" key="step-3" />
  ];

  return (
    <section id="solution" className="py-16 sm:py-24 bg-[#090f1e] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-left sm:text-center max-w-3xl sm:mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-amber-400 bg-amber-950/40 border border-amber-800/40 px-3.5 py-1.5 rounded-full inline-block mb-3">
            The 3-Step SuperwitSites Framework
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight leading-[1.25]">
            Here's Exactly What Happens When You Work With Me
          </h2>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 sm:mb-14">
          {SOLUTION_STEPS.map((step, index) => (
            <div
              key={step.stepNumber}
              className="bg-[#0f172a] rounded-2xl border border-slate-800 p-6 sm:p-7 flex flex-col justify-between relative hover:border-slate-700 transition-colors shadow-lg group"
            >
              {/* Step indicator top */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-amber-500/40 transition-colors">
                    {stepIcons[index]}
                  </div>
                  <span className="text-2xl font-black text-slate-700 group-hover:text-amber-500/50 transition-colors">
                    {step.stepNumber}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-3 tracking-tight">
                  {step.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {/* Progress arrow indicator on desktop */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center text-xs text-slate-400 font-medium">
                <span className="text-amber-400 font-semibold mr-1">Phase {step.stepNumber}:</span>
                {index === 0 && "Discovery & Clarity"}
                {index === 1 && "Weekly Interactive Milestones"}
                {index === 2 && "Conversion Ready Deployment"}
              </div>
            </div>
          ))}
        </div>

        {/* Primary CTA #2 + Fear-buster */}
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
              No pressure
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              No obligation
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              Straight answers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
