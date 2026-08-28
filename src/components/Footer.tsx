import React from 'react';
import { FOOTER_COPY } from '../data';
import { Mail, MessageSquare, Twitter, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  return (
    <footer className="bg-[#050912] border-t border-slate-800/90 pt-12 pb-16 text-slate-400 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-slate-950 font-extrabold text-sm shadow-sm">
                M
              </div>
              <span className="font-bold text-slate-100 text-base">
                Marquis Festus
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Conversion website designer & funnel architect for small businesses, clinics, and coaches. Strategy to launch, zero agency runaround.
            </p>
          </div>

          {/* Contact Direct Channels */}
          <div className="md:col-span-4 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Direct Contact Channels
            </p>
            <div className="space-y-2.5">
              <a
                href={`mailto:${FOOTER_COPY.email}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-amber-400 transition-colors group text-sm min-h-[36px]"
              >
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="group-hover:underline">{FOOTER_COPY.email}</span>
              </a>

              <a
                href={`https://wa.me/${FOOTER_COPY.whatsappRaw}?text=Hi%20Marquis,%20I'd%20like%20to%20discuss%20a%20conversion%20website%20for%20my%20business`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors group text-sm min-h-[36px]"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="group-hover:underline">WhatsApp: {FOOTER_COPY.whatsappFormatted}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Secondary Low-Commitment CTA: Follow on X */}
          <div className="md:col-span-3 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
              Follow Along
            </p>
            <p className="text-xs text-slate-400 mb-3">
              Daily teardowns, conversion principles, and live build logs.
            </p>
            <a
              href={FOOTER_COPY.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <Twitter className="w-4 h-4 text-sky-400" />
              <span>Follow on X: {FOOTER_COPY.twitterHandle}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </div>

        {/* Bottom copyright and privacy links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{FOOTER_COPY.copyright}</p>
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-slate-200 underline focus:outline-none cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
