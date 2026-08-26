import React from 'react';
import { VALUE_PROPS } from '../data';
import { Target, Compass, UserCheck, CheckCircle } from 'lucide-react';

export const ValuePropBenefits: React.FC = () => {
  const benefitIcons = [
    <Target className="w-7 h-7 text-amber-400" key="icon-1" />,
    <Compass className="w-7 h-7 text-amber-400" key="icon-2" />,
    <UserCheck className="w-7 h-7 text-amber-400" key="icon-3" />
  ];

  return (
    <section id="benefits" className="py-16 sm:py-24 bg-[#090f1e] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-left sm:text-center max-w-3xl sm:mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-amber-400 bg-amber-950/40 border border-amber-800/40 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Core Value
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight leading-[1.25]">
            What You Actually Get
          </h2>
        </div>

        {/* 3 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {VALUE_PROPS.map((benefit, index) => (
            <div
              key={benefit.id}
              className="bg-[#0f172a] rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-amber-500/40 transition-colors shadow-lg group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 group-hover:border-amber-500/50 transition-colors">
                  {benefitIcons[index]}
                </div>

                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
                  {benefit.highlight}
                </span>

                <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-3 tracking-tight leading-snug">
                  {benefit.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {benefit.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Standard on every SuperwitSites build</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
