export interface PricingPlan {
  name: string;
  price: string;
  gstNote: string;
  billingPeriod?: string;
  badge?: string;
  includes: string[];
  cta: string;
  isPopular?: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  deliverables?: string[];
  pricingCategory?: string;
  pricingPlans?: PricingPlan[];
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  number: string;
  clientName: string;
  solution: string;
  category: string;
  industry: string;
  description: string;
  highlights: string[];
  techStack: string[];
  color: string;
}

export interface PricingCategory {
  category: string;
  subtitle: string;
  plans: PricingPlan[];
}

export interface LeaderProfile {
  name: string;
  role: string;
  photoUrl: string;
  description: string;
  expertise: string[];
  quote?: string;
}
