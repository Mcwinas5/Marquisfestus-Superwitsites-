import { BenefitItem, FAQItem, ProjectBuild, SolutionStep } from './types';

export const HERO_COPY = {
  eyebrow: "Attention: Small Business Owners Tired of Websites That Don't Convert",
  headline: "The Conversion Website Designer Who Delivers Bookings",
  subheadline: "I build conversion-focused websites and funnels for small businesses, clinics, and coaches — strategy to launch, no agency runaround.",
  ctaText: "Book My Strategy Call",
  fearBuster: "Your info is safe. I hate spam too."
};

export const CREDIBILITY_STATS = [
  { value: "1 Year", label: "Building Conversion Sites" },
  { value: "6 Clients", label: "Delivered & Scaled" },
  { value: "5,000+", label: "Builder & Founder Community" }
];

export const PROBLEM_COPY = {
  headline: "Your Website Shouldn't Just Sit There",
  body: "You paid for a website. It looks fine. But it's not bringing in bookings — and you don't even know if it's working. Maybe you've been burned before: a freelancer who went quiet mid-project, or an agency that overcharged and disappeared after launch. You don't have months to wait and figure it out again."
};

export const SOLUTION_STEPS: SolutionStep[] = [
  {
    stepNumber: "01",
    title: "We Talk Strategy First",
    description: "A short call to understand your business, your customers, and what \"success\" actually looks like for you. No jargon, no pressure."
  },
  {
    stepNumber: "02",
    title: "I Build With You in the Loop",
    description: "You see the plan before I build anything. No surprise scope changes, no disappearing acts."
  },
  {
    stepNumber: "03",
    title: "You Launch With a Site Built to Convert",
    description: "Not just something that looks good — something engineered to turn visitors into booked clients."
  }
];

export const BEFORE_AFTER_COPY = {
  headline: "From 5 Bookings a Month to Over 15 — In 8 Weeks",
  body: "SmileWell Dental Clinic was getting roughly 5 bookings a month from their old website — barely moving the needle. Within 2 months of rebuilding their site around conversion, not just appearance, that jumped to over 15 bookings a month. That's the SuperwitSites approach: not a nicer-looking site — a site engineered to convert.",
  clientName: "SmileWell Dental Clinic",
  timeline: "8 Weeks",
  beforeStat: "5 / mo",
  beforeLabel: "Old site monthly bookings",
  afterStat: "15+ / mo",
  afterLabel: "New conversion system bookings",
  delta: "+200% Booking Increase"
};

export const VALUE_PROPS: BenefitItem[] = [
  {
    id: "converts",
    title: "A Site That Converts, Not Just Impresses",
    description: "Every section is built around getting you a booking, not winning design awards.",
    highlight: "Engineered for Revenue"
  },
  {
    id: "process",
    title: "A Process You Can Actually Follow",
    description: "Clear steps, real updates, no vanishing act.",
    highlight: "Zero Disappearing Acts"
  },
  {
    id: "accountable",
    title: "Someone Who Stays Accountable",
    description: "You're working directly with me, not a rotating team of subcontractors.",
    highlight: "Direct 1-on-1 Access"
  }
];

export const RECENT_BUILDS: ProjectBuild[] = [
  {
    id: "meridian",
    title: "MÉRIDIAN",
    category: "Luxury & Lifestyle Commerce",
    isDemo: false,
    tag: "Live Client Build",
    description: "High-end bespoke retail & reservation architecture designed to turn high-intent luxury shoppers into verified orders and appointments.",
    metric: "3.8x Mobile Checkout Completion",
    liveUrl: "https://meridian-demo.superwitstech.com",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "smileflow",
    title: "SmileFlow",
    category: "Dental & Private Practice Clinic",
    isDemo: true,
    tag: "Demo Build",
    description: "Interactive patient onboarding & frictionless consultation booking engine created specifically for modern dental clinics and private health practices.",
    metric: "Frictionless 60-Sec Patient Intake",
    liveUrl: "https://smileflow-demo.superwitstech.com",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "tonia-lifestyle",
    title: "Tonia Lifestyle Hub",
    category: "Executive Coaching & Wellness",
    isDemo: false,
    tag: "Live Client Build",
    description: "High-converting brand platform for a prominent wellness practitioner featuring interactive program matching and automated consultation scheduling.",
    metric: "4.2x Discovery Call Bookings",
    liveUrl: "https://tonia-lifestyle.superwitstech.com",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do I know you're not another agency that overpromises?",
    answer: "I show you real, specific results — like SmileWell's booking increase — not vague claims. You also work directly with me, not a black-box team."
  },
  {
    id: "faq-2",
    question: "How much does this actually cost?",
    answer: "It depends on scope, so I don't publish a flat number — but we'll cover it honestly on the call, no games."
  },
  {
    id: "faq-3",
    question: "How long will this really take?",
    answer: "Most builds move in weeks, not months, because we lock the plan together before I start building — no scope creep, no guessing."
  },
  {
    id: "faq-4",
    question: "What if I don't like what you build?",
    answer: "You see the plan and direction before anything is built — you're never surprised at the end."
  },
  {
    id: "faq-5",
    question: "You're in Nigeria — can you actually work with a US/UK business?",
    answer: "Yes — I already build for clients across the US, UK, Canada, and Australia. Time zones and distance haven't been a problem."
  },
  {
    id: "faq-6",
    question: "You've only got 6 clients and 1 year in — are you legit enough?",
    answer: "That's exactly why I'm hands-on with every project instead of handing you off to a junior team. Fewer clients means more attention on yours."
  },
  {
    id: "faq-7",
    question: "What happens after launch — do you disappear?",
    answer: "No — we agree on what \"done\" and \"support after\" look like before we start, so there's no ambiguity once the site is live."
  }
];

export const CLOSER_COPY = {
  headline: "Stop Wondering If Your Website Is Working",
  stack: [
    "A site built around one goal: getting you booked clients",
    "A process where you're never left guessing what's happening",
    "Direct access to me — not a team you'll never meet"
  ],
  riskReversal: "No pressure, no obligation — the call is just a conversation about whether this is a fit.",
  ctaText: "Book My Strategy Call",
  fearBuster: "✓ 100% Free ✓ No Credit Card ✓ Your Info Stays Private"
};

export const FOOTER_COPY = {
  email: "support@superwitstech.com",
  whatsappFormatted: "+234 704 738 1879",
  whatsappRaw: "2347047381879",
  twitterHandle: "@MarquisBuilds",
  twitterUrl: "https://x.com/MarquisBuilds",
  copyright: "© 2026 Marquis Festus / Superwits.tech. All rights reserved."
};
