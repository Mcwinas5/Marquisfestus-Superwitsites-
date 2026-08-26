import React from 'react';
import { CREDIBILITY_STATS } from '../data';
import { Award, Users, CheckCircle2 } from 'lucide-react';

export const CredibilityStrip: React.FC = () => {
  const icons = [
    <Award className="w-5 h-5 text-amber-400 shrink-0" key="1" />,
    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" key="2" />,
    <Users className="w-5 h-5 text-amber-400 shrink-0" key="3" />
  ];

  return (
    <section id="credibility" className="border-y border-slate-800/90 bg-[#0a1122]/90 py-8 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
          {CREDIBILITY_STATS.map((stat, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 ${
                index > 0 ? 'pt-4 sm:pt-0 sm:pl-8' : ''
              } justify-start sm:justify-center`}
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-inner">
                {icons[index]}
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-400 mt-0.5">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
