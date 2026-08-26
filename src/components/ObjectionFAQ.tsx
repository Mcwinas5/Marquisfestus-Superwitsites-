import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data';
import { ChevronDown, Check, ArrowRight, HelpCircle, PhoneCall } from 'lucide-react';

interface ObjectionFAQProps {
  onOpenBooking: () => void;
}

export const ObjectionFAQ: React.FC<ObjectionFAQProps> = ({ onOpenBooking }) => {
  // First item open by default for immediate engagement
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#090f1e] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-left sm:text-center max-w-3xl sm:mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-amber-400 bg-amber-950/40 border border-amber-800/40 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Clear Answers
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight leading-[1.25]">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-300 mt-3 max-w-xl sm:mx-auto">
            Everything you need to know about working directly with me, pricing expectations, and project timelines.
          </p>
        </div>

        {/* 7 Verbatim Accordions */}
        <div className="space-y-4 mb-10 sm:mb-12">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="bg-[#0f172a] rounded-2xl border border-slate-800/90 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  className="w-full min-h-[56px] px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-2xl"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-100 pr-2">
                    {index + 1}. {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-400 border-amber-500/40' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60 font-normal">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer line from PRD */}
        <div className="text-center mb-8">
          <p className="text-base sm:text-lg font-semibold text-slate-200">
            Still have questions? Book a 15-minute call.
          </p>
        </div>

        {/* Primary CTA #5 + Fear-buster */}
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
              15-minute quick fit conversation
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              Zero sales pressure
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
