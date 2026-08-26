import React from 'react';
import { X, ShieldCheck, Lock, Check } from 'lucide-react';
import { FOOTER_COPY } from '../data';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-lg bg-[#0f172a] rounded-3xl border border-slate-700 shadow-2xl p-6 sm:p-8 my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors focus:outline-none"
          aria-label="Close privacy modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs uppercase tracking-wider mb-2">
          <ShieldCheck className="w-4 h-4" />
          <span>Privacy & Data Commitment</span>
        </div>

        <h3 id="privacy-modal-title" className="text-xl sm:text-2xl font-bold text-slate-100 mb-4 tracking-tight">
          Privacy Policy
        </h3>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
          <p>
            At <strong className="text-slate-100">SuperwitSites / Marquis Festus</strong>, your personal and business privacy is respected above all else. We maintain a strict zero-spam and zero-third-party-sharing policy.
          </p>

          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-slate-200 font-medium">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Never sold or rented to third-party advertisers.</span>
            </div>
            <div className="flex items-center gap-2 text-slate-200 font-medium">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Used solely by Marquis to prepare your strategy blueprint.</span>
            </div>
            <div className="flex items-center gap-2 text-slate-200 font-medium">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>No spam or promotional newsletters without your consent.</span>
            </div>
          </div>

          <h4 className="text-sm font-bold text-slate-100 pt-2">Data Collection</h4>
          <p>
            When you submit a strategy call request, we collect your name, email address, and project overview to evaluate fit and schedule our discussion.
          </p>

          <h4 className="text-sm font-bold text-slate-100 pt-2">Contact</h4>
          <p>
            For any privacy inquiries or to request data removal, contact Marquis Festus at <a href={`mailto:${FOOTER_COPY.email}`} className="text-amber-400 hover:underline">{FOOTER_COPY.email}</a>.
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm transition-colors focus:outline-none"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
