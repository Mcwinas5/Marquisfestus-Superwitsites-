import React from 'react';
import { Calendar, ShieldCheck, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#070d18]/90 border-b border-slate-800/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand identity */}
        <a 
          href="#" 
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg p-1"
          aria-label="Marquis Festus Homepage"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-slate-950 font-extrabold text-lg shadow-md shadow-amber-500/20">
            M
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-100 text-base sm:text-lg tracking-tight group-hover:text-amber-400 transition-colors">
              Marquis Festus
            </span>
            <span className="text-xs text-slate-400 font-medium tracking-wide">
              SuperwitSites
            </span>
          </div>
        </a>

        {/* Status indicator & Direct call button */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 text-xs text-slate-300 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for 2 Q1 Builds</span>
          </div>

          <button
            onClick={onOpenBooking}
            className="min-h-[44px] px-4 sm:px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-100 font-semibold text-sm transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Schedule Call"
          >
            <Calendar className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">Strategy Call</span>
            <span className="sm:hidden">Call</span>
          </button>
        </div>
      </div>
    </header>
  );
};
