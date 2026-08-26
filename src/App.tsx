import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CredibilityStrip } from './components/CredibilityStrip';
import { ProblemAgitation } from './components/ProblemAgitation';
import { SolutionSection } from './components/SolutionSection';
import { BeforeAfterStory } from './components/BeforeAfterStory';
import { ValuePropBenefits } from './components/ValuePropBenefits';
import { RecentBuildsGrid } from './components/RecentBuildsGrid';
import { ObjectionFAQ } from './components/ObjectionFAQ';
import { CloserBlock } from './components/CloserBlock';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { PrivacyModal } from './components/PrivacyModal';
import { StrategyCallRequest } from './types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [heroFormData, setHeroFormData] = useState<StrategyCallRequest | null>(null);

  const handleHeroSubmit = (data: StrategyCallRequest) => {
    setHeroFormData(data);
    setIsBookingOpen(true);
  };

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#070d18] text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950 font-sans">
      {/* 1. Header / Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="flex-grow">
        {/* Section 1: Hero (with Eyebrow, H1, Sub-headline, Real Photo of Marquis, Minimal 3-field form, Primary CTA #1, Fear-buster) */}
        <HeroSection 
          onSubmitRequest={handleHeroSubmit} 
          onOpenBooking={handleOpenBooking} 
        />

        {/* Section 2: Credibility Strip (3-stat bar) */}
        <CredibilityStrip />

        {/* Section 3: Problem / Agitation */}
        <ProblemAgitation />

        {/* Section 4: Solution 3-Step (with Primary CTA #2 & Fear-buster) */}
        <SolutionSection onOpenBooking={handleOpenBooking} />

        {/* Section 5: Before / After Story (SmileWell Dental Clinic with Primary CTA #3 & Fear-buster) */}
        <BeforeAfterStory onOpenBooking={handleOpenBooking} />

        {/* Section 6: Value Prop / Benefits (3 outcome cards) */}
        <ValuePropBenefits />

        {/* Section 7: Recent Builds Grid (MÉRIDIAN, SmileFlow [Demo Build], Tonia Lifestyle Hub with Primary CTA #4 & Fear-buster) */}
        <RecentBuildsGrid onOpenBooking={handleOpenBooking} />

        {/* Section 8: Objection FAQ (7 Q&As, footer line, Primary CTA #5 & Fear-buster) */}
        <ObjectionFAQ onOpenBooking={handleOpenBooking} />

        {/* Section 9: Closer Block (Recap headline, 3-item trust stack, risk reversal line, Primary CTA #6 & Fear-buster) */}
        <CloserBlock onOpenBooking={handleOpenBooking} />
      </main>

      {/* Section 10: Footer (Contact info, WhatsApp, X handle, secondary CTA "Follow on X", copyright, privacy policy link) */}
      <Footer onOpenPrivacy={() => setIsPrivacyOpen(true)} />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialData={heroFormData}
      />

      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </div>
  );
}
