import React, { useState } from 'react';
import { HERO_COPY } from '../data';
import { StrategyCallRequest } from '../types';
import { CheckCircle, ArrowRight, ShieldCheck, Lock, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onSubmitRequest: (data: StrategyCallRequest) => void;
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSubmitRequest, onOpenBooking }) => {
  const [formData, setFormData] = useState<StrategyCallRequest>({
    name: '',
    email: '',
    projectScope: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.projectScope.trim()) {
      newErrors.projectScope = 'Please share what you are looking to build';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        onSubmitRequest(formData);
      }, 400);
    }
  };

  return (
    <section id="hero" className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent pointer-events-none -z-10 blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Eyebrow badge */}
        <div className="flex justify-start sm:justify-center mb-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/95 border border-amber-500/30 text-amber-300 font-semibold text-xs sm:text-sm tracking-wide shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>{HERO_COPY.eyebrow}</span>
          </div>
        </div>

        {/* Hero Headlines */}
        <div className="text-left sm:text-center max-w-3xl sm:mx-auto mb-10 sm:mb-14">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.18] sm:leading-[1.15] mb-5">
            {HERO_COPY.headline}
          </h1>
          <p className="text-base sm:text-xl text-slate-300 leading-[1.6] max-w-2xl sm:mx-auto font-normal">
            {HERO_COPY.subheadline}
          </p>
        </div>

        {/* 2-Column Grid: Authentic Photo of Marquis & 3-Field Conversion Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center max-w-5xl mx-auto">
          {/* Left Column: Authentic Portrait of Marquis */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/80 shadow-2xl p-3 sm:p-4">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-950">
                <img
                  src="https://i.imgur.com/0dAReMB.png"
                  alt="Marquis Festus — Conversion Website Designer"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070d18] via-transparent to-transparent opacity-80" />
                
                {/* Floating identity badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-700/70 text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-slate-100 text-sm sm:text-base">Marquis Festus</p>
                      <p className="text-xs text-amber-400 font-medium">Founder & Conversion Architect</p>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.5 rounded">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      Direct 1-on-1
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust statement under photo */}
              <div className="mt-3 px-2 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  Direct accountability
                </span>
                <span>No agency middlemen</span>
              </div>
            </div>
          </div>

          {/* Right Column: Minimal 3-Field Hero Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0f172a] rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl relative">
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight mb-2">
                  Request Your Free Strategy Call
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Tell me a bit about what you need. I'll review your project scope and respond with honest feedback within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Field 1: Name */}
                <div>
                  <label htmlFor="hero-name" className="block text-sm font-semibold text-slate-200 mb-1.5">
                    Your Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    id="hero-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full min-h-[48px] px-4 py-3 rounded-xl bg-slate-900 border text-slate-100 text-base placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors ${
                      errors.name ? 'border-rose-500' : 'border-slate-700'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
                </div>

                {/* Field 2: Email */}
                <div>
                  <label htmlFor="hero-email" className="block text-sm font-semibold text-slate-200 mb-1.5">
                    Your Email <span className="text-amber-400">*</span>
                  </label>
                  <input
                    id="hero-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@yourbusiness.com"
                    className={`w-full min-h-[48px] px-4 py-3 rounded-xl bg-slate-900 border text-slate-100 text-base placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors ${
                      errors.email ? 'border-rose-500' : 'border-slate-700'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                </div>

                {/* Field 3: What are you looking to build? */}
                <div>
                  <label htmlFor="hero-scope" className="block text-sm font-semibold text-slate-200 mb-1.5">
                    What are you looking to build? <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    id="hero-scope"
                    rows={3}
                    required
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    placeholder="e.g. Dental clinic booking site, coaching funnel redesign, or new business launch..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900 border text-slate-100 text-base placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-none ${
                      errors.projectScope ? 'border-rose-500' : 'border-slate-700'
                    }`}
                  />
                  {errors.projectScope && <p className="text-xs text-rose-400 mt-1">{errors.projectScope}</p>}
                </div>

                {/* Primary CTA #1 */}
                <div className="pt-2">
                  <button
                    id="hero-primary-cta"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[52px] px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-base sm:text-lg shadow-lg shadow-amber-500/25 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    <span>{HERO_COPY.ctaText}</span>
                    <ArrowRight className="w-5 h-5 text-slate-950" />
                  </button>

                  {/* Fear-buster micro-copy directly beneath CTA */}
                  <p className="text-center text-xs sm:text-sm text-slate-400 mt-2.5 flex items-center justify-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{HERO_COPY.fearBuster}</span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
