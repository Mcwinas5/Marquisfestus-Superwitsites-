import React, { useState, useEffect } from 'react';
import { StrategyCallRequest } from '../types';
import { X, Check, Calendar, MessageSquare, Mail, Sparkles, Lock, ArrowRight } from 'lucide-react';
import { FOOTER_COPY } from '../data';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: StrategyCallRequest | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialData
}) => {
  const [formData, setFormData] = useState<StrategyCallRequest>({
    name: '',
    email: '',
    projectScope: '',
    timeline: 'Within 2-4 weeks',
    budget: '$1,500 - $3,500'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        name: initialData.name || prev.name,
        email: initialData.email || prev.email,
        projectScope: initialData.projectScope || prev.projectScope
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.projectScope.trim()) {
      newErrors.projectScope = 'Please share your project goals';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-xl bg-[#0f172a] rounded-3xl border border-slate-700 shadow-2xl p-6 sm:p-8 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Direct Strategy Session</span>
            </div>

            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight mb-2">
              Book Your 15-Minute Strategy Call
            </h3>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              We'll look at your current website or offer, pinpoint where visitors drop off, and lay out an exact blueprint for a site that delivers bookings.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Full Name <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Sarah Jenkins"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                    errors.name ? 'border-rose-500' : 'border-slate-700'
                  }`}
                />
                {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Email Address <span className="text-amber-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="sarah@yourbusiness.com"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                    errors.email ? 'border-rose-500' : 'border-slate-700'
                  }`}
                />
                {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  What are you looking to build or improve? <span className="text-amber-400">*</span>
                </label>
                <textarea
                  rows={2}
                  required
                  value={formData.projectScope}
                  onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                  placeholder="e.g. Need more client bookings for my clinic / coaching program..."
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none ${
                    errors.projectScope ? 'border-rose-500' : 'border-slate-700'
                  }`}
                />
                {errors.projectScope && <p className="text-xs text-rose-400 mt-1">{errors.projectScope}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Target Launch Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="ASAP (1-2 weeks)">ASAP (1-2 weeks)</option>
                    <option value="Within 2-4 weeks">Within 2-4 weeks</option>
                    <option value="Next 1-2 months">Next 1-2 months</option>
                    <option value="Just planning ahead">Just planning ahead</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Approximate Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="Under $1,500">Under $1,500</option>
                    <option value="$1,500 - $3,500">$1,500 - $3,500</option>
                    <option value="$3,500 - $7,000">$3,500 - $7,000</option>
                    <option value="$7,000+">$7,000+</option>
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full min-h-[52px] px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-base shadow-lg shadow-amber-500/25 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400"
                >
                  <span>Confirm Strategy Call Request</span>
                  <ArrowRight className="w-5 h-5 text-slate-950" />
                </button>

                <p className="text-center text-xs text-slate-400 mt-2.5 flex items-center justify-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                  <span>✓ 100% Free ✓ No obligation ✓ Your info is never shared</span>
                </p>
              </div>
            </form>

            {/* Instant WhatsApp Option */}
            <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Need to talk sooner?</span>
              <a
                href={`https://wa.me/${FOOTER_COPY.whatsappRaw}?text=Hi%20Marquis,%20I'd%20like%20to%20schedule%20a%20strategy%20call%20for%20my%20business%20website`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 font-semibold hover:underline flex items-center gap-1"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-950/80 border border-emerald-600 flex items-center justify-center mx-auto mb-4 text-emerald-400 shadow-lg">
              <Check className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-extrabold text-slate-100 mb-2 tracking-tight">
              Strategy Request Received!
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
              Thanks <span className="text-slate-100 font-semibold">{formData.name}</span>! Marquis is reviewing your project details. You'll receive a confirmation email and scheduling invite at <span className="text-amber-400 font-medium">{formData.email}</span> within 24 hours.
            </p>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-left text-xs text-slate-300 space-y-2 mb-6 max-w-md mx-auto">
              <div className="flex items-center gap-2 text-amber-400 font-semibold">
                <Calendar className="w-4 h-4" />
                <span>What happens next:</span>
              </div>
              <p className="text-slate-400">1. Marquis personally audits your requirements and target audience.</p>
              <p className="text-slate-400">2. You receive calendar invite options for your 15-minute video or phone call.</p>
              <p className="text-slate-400">3. We review the high-converting wireframe strategy together.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={resetAndClose}
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-colors focus:outline-none"
              >
                Back to Site
              </button>
              <a
                href={`https://wa.me/${FOOTER_COPY.whatsappRaw}?text=Hi%20Marquis,%20I%20just%20submitted%20my%20strategy%20request%20(${formData.name})`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold text-sm transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
