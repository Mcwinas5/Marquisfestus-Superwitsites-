export interface StrategyCallRequest {
  name: string;
  email: string;
  projectScope: string;
  timeline?: string;
  budget?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProjectBuild {
  id: string;
  title: string;
  category: string;
  isDemo?: boolean;
  tag: string;
  description: string;
  metric: string;
  liveUrl: string;
  imageUrl: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  highlight: string;
}

export interface SolutionStep {
  stepNumber: string;
  title: string;
  description: string;
}
