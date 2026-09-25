import { ServiceItem, WhyChooseItem, PortfolioItem, PricingCategory, LeaderProfile, PricingPlan } from '../types';

export const COMPANY_INFO = {
  name: 'APTAIC',
  tagline: 'Think Digital. Think APTAIC.',
  subTagline: 'We Build Technology That Moves Businesses Forward.',
  heroHeading: 'BUILD DIGITAL. BUILD SMART. BUILD WITH APTAIC.',
  heroDescription:
    'Aptaic is a technology and digital solutions company helping businesses transform ideas into powerful software, websites and digital experiences.',
  positioningStatement:
    "Aptaic doesn't just build websites or software. We build digital systems that help businesses operate, automate and grow.",
  address: 'Ithum Tower, Sector 62, Noida, UP 201309',
  addressShort: 'Sector 62, Noida, UP',
  gstin: '09EEPPA9557D1Z4',
  googleMapsLink: 'https://maps.google.com/?q=Ithum+Tower+Sector+62+Noida+UP+201309',
  phones: {
    primary: '8006264001',
    alternate: '8006264034',
  },
  email: 'info@aptaic.in',
  whatsappNumber: '918006264001',
  whatsappLink: 'https://wa.me/918006264001',
  copyright: '© 2026 Aptaic. All Rights Reserved.',
  logoUrl: '/assets/aptaic-logo.png',
};

// Reusable standard plans
const CLOUD_SOFTWARE_PLANS: PricingPlan[] = [
  {
    name: 'STANDARD',
    price: '₹9,999',
    gstNote: '+ 18% GST',
    billingPeriod: 'standard cloud deployment',
    includes: ['Single User', 'Cloud Access', 'Standard Support'],
    cta: 'Deploy Cloud Software',
    isPopular: false,
  },
  {
    name: 'PLUS',
    price: '₹12,499',
    gstNote: '+ 18% GST',
    billingPeriod: 'multi-user deployment',
    badge: 'Best Value',
    includes: ['2 Users', 'Cloud Access', 'Priority Support'],
    cta: 'Deploy Cloud Software',
    isPopular: true,
  },
  {
    name: 'PREMIUM',
    price: '₹15,499',
    gstNote: '+ 18% GST',
    billingPeriod: 'team deployment',
    includes: ['5 Users', 'Cloud Access', 'Priority Support & Onboarding'],
    cta: 'Deploy Cloud Software',
    isPopular: false,
  },
];

const DIGITAL_MARKETING_PLANS: PricingPlan[] = [
  {
    name: 'STANDARD',
    price: '₹6,999',
    gstNote: '+ 18% GST / Month',
    billingPeriod: 'per month',
    includes: ['30 Videos', '30 Posts', 'Social Media Handling'],
    cta: 'Get Started',
    isPopular: false,
  },
  {
    name: 'PLUS',
    price: '₹9,999',
    gstNote: '+ 18% GST / Month',
    billingPeriod: 'per month',
    badge: 'Most Popular',
    includes: ['30 Videos', '30 Posts', '3 Ads', 'Social Media Handling'],
    cta: 'Choose Plus',
    isPopular: true,
  },
  {
    name: 'PREMIUM',
    price: '₹12,999',
    gstNote: '+ 18% GST / Month',
    billingPeriod: 'per month',
    includes: ['30 Videos', '30 Posts', '6 Ads', 'Social Media Handling'],
    cta: 'Go Premium',
    isPopular: false,
  },
];

const WEBSITE_DEVELOPMENT_PLANS: PricingPlan[] = [
  {
    name: 'BASIC WEBSITE',
    price: '₹12,699',
    gstNote: '+ 18% GST',
    billingPeriod: 'one-time (includes 1 Year hosting)',
    includes: ['Professional Website', 'Hosting', 'Domain', '1 Year Support'],
    cta: 'Start Basic Website',
    isPopular: false,
  },
  {
    name: 'BUSINESS WEBSITE',
    price: '₹17,999',
    gstNote: '+ 18% GST',
    billingPeriod: 'one-time (includes 1 Year hosting)',
    badge: 'Recommended',
    includes: ['Professional Business Website', 'Hosting', 'Domain', '1 Year Support'],
    cta: 'Start Business Website',
    isPopular: true,
  },
  {
    name: 'E-COMMERCE',
    price: '₹21,999',
    gstNote: '+ 18% GST',
    billingPeriod: 'one-time (includes 1 Year hosting)',
    includes: ['E-Commerce Website', 'Hosting', 'Domain', '1 Year Support'],
    cta: 'Start E-Commerce Store',
    isPopular: false,
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'software-development',
    number: '01',
    title: 'Custom Software Development',
    shortDesc: 'Custom software designed around your business processes.',
    fullDesc: 'Build customized business applications according to specific workflows.',
    iconName: 'Code2',
    pricingCategory: 'CLOUD SOFTWARE',
    features: [
      'Custom dashboards',
      'User management',
      'Role-based access',
      'Cloud database',
      'Business automation',
      'Reports',
      'Notifications',
      'Integrations',
    ],
    pricingPlans: CLOUD_SOFTWARE_PLANS,
  },
  {
    id: 'crm-erp-solutions',
    number: '02',
    title: 'CRM & ERP Solutions',
    shortDesc: 'Centralize customers, operations, accounts, employees and business workflows.',
    fullDesc: 'Create centralized business management systems.',
    iconName: 'Database',
    pricingCategory: 'CLOUD SOFTWARE',
    features: [
      'Customer management',
      'Employee management',
      'Inventory',
      'Accounts',
      'Sales',
      'Purchase',
      'Reports',
      'Dashboard',
      'Role management',
    ],
    pricingPlans: CLOUD_SOFTWARE_PLANS,
  },
  {
    id: 'hrms-solutions',
    number: '03',
    title: 'HRMS Development',
    shortDesc: 'Modern employee management, attendance, payroll and HR automation.',
    fullDesc: 'Modern employee management, attendance, payroll and HR automation systems for growing organizations.',
    iconName: 'Users',
    pricingCategory: 'CLOUD SOFTWARE',
    features: [
      'Employee management',
      'Attendance',
      'Payroll',
      'Leave management',
      'Salary',
      'Employee dashboard',
      'Reports',
    ],
    pricingPlans: CLOUD_SOFTWARE_PLANS,
  },
  {
    id: 'website-development',
    number: '04',
    title: 'Website Development',
    shortDesc: 'Fast, responsive and conversion-focused websites for businesses.',
    fullDesc: 'High-performance, modern business websites engineered for speed, conversion, and brand authority.',
    iconName: 'Globe',
    pricingCategory: 'WEBSITE DEVELOPMENT',
    features: [
      'Corporate websites',
      'Business websites',
      'Landing pages',
      'Portfolio websites',
      'Responsive design',
      'SEO-friendly structure',
      'Performance optimization',
    ],
    pricingPlans: WEBSITE_DEVELOPMENT_PLANS,
  },
  {
    id: 'ecommerce-development',
    number: '05',
    title: 'E-Commerce Development',
    shortDesc: 'Scalable online stores designed to help businesses sell digitally.',
    fullDesc: 'Scalable, secure online stores designed to accelerate sales, automate fulfillment, and elevate customer experience.',
    iconName: 'ShoppingCart',
    pricingCategory: 'WEBSITE DEVELOPMENT',
    features: [
      'Product management',
      'Customer management',
      'Orders',
      'Payments',
      'Inventory',
      'Admin dashboard',
      'Responsive storefront',
    ],
    pricingPlans: WEBSITE_DEVELOPMENT_PLANS,
  },
  {
    id: 'digital-marketing',
    number: '06',
    title: 'Digital Marketing',
    shortDesc: 'Social media management, content creation, advertising and digital growth.',
    fullDesc: 'Data-driven marketing strategies, high-impact content, and paid acquisition to build lasting digital market presence.',
    iconName: 'Megaphone',
    pricingCategory: 'DIGITAL MARKETING',
    features: [
      'Social media management',
      'Content creation',
      'Video content',
      'Advertising',
      'Brand management',
      'Campaign management',
    ],
    pricingPlans: DIGITAL_MARKETING_PLANS,
  },
];

export const WHY_CHOOSE_DATA: WhyChooseItem[] = [
  {
    id: 'business-first',
    title: 'Business First',
    description: 'We understand the business problem before building the technology.',
    iconName: 'Target',
  },
  {
    id: 'custom-solutions',
    title: 'Custom Solutions',
    description: 'No unnecessary features. Build what your business actually needs.',
    iconName: 'Sliders',
  },
  {
    id: 'modern-technology',
    title: 'Modern Technology',
    description: 'Use modern frameworks and scalable cloud technologies.',
    iconName: 'Cpu',
  },
  {
    id: 'one-technology-partner',
    title: 'One Technology Partner',
    description: 'Software, websites, CRM, ERP and digital marketing under one roof.',
    iconName: 'Layers',
  },
  {
    id: 'scalable',
    title: 'Scalable',
    description: 'Solutions can grow as the business grows.',
    iconName: 'TrendingUp',
  },
  {
    id: 'human-support',
    title: 'Human Support',
    description: 'Direct communication and practical support.',
    iconName: 'Headphones',
  },
];

export const LEADERSHIP_DATA: LeaderProfile[] = [
  {
    name: 'Harshit Agrawal',
    role: 'Founder',
    photoUrl: '/assets/harshit-agrawal.jpg',
    description:
      'Harshit Agrawal is the Founder of Aptaic, focused on building practical technology solutions that help businesses simplify operations and grow digitally.',
    expertise: ['Enterprise Architecture', 'Product Strategy', 'Custom Software Systems', 'Cloud Solutions'],
    quote: 'Technology creates real value only when it directly solves operational friction and powers scalable business growth.',
  },
  {
    name: 'Mridul Gautam',
    role: 'Co-Founder',
    photoUrl: '/assets/mridul-gautam.jpg',
    description:
      'Mridul Gautam is the Co-Founder of Aptaic, contributing to technology, business development and the execution of digital solutions for growing businesses.',
    expertise: ['Business Development', 'Execution Management', 'Client Partnerships', 'Digital Transformation'],
    quote: 'We partner closely with founders and enterprises to turn ambitious digital visions into dependable daily systems.',
  },
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'shri-shyam-enterprises',
    number: 'PROJECT 01',
    clientName: 'M/S Shri Shyam Enterprises',
    solution: 'CRM for Mobile Shop',
    category: 'CRM / Retail',
    industry: 'Retail & Electronics',
    description:
      'A customized CRM solution designed to help a mobile retail business manage customers, sales and day-to-day business operations.',
    highlights: [
      'IMEI barcode tracking & cataloging',
      'Daily customer sales & credit ledger',
      'Automated GST bill printing & SMS receipts',
      'Warranty status tracking & return management',
    ],
    techStack: ['Custom Cloud Database', 'Retail POS Engine', 'Multi-tier User Access', 'Daily Analytics'],
    color: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'shiv-shakti-construction',
    number: 'PROJECT 02',
    clientName: 'Shiv Shakti Construction',
    solution: 'HRMS System',
    category: 'HRMS / Construction',
    industry: 'Infrastructure & Construction',
    description:
      'Employee and HR management software designed to simplify attendance, employee management and workforce operations.',
    highlights: [
      'Site-based biometric & mobile attendance',
      'Labor wage calculation & overtime records',
      'Contractor workforce roster scheduling',
      'Real-time workforce deployment reports',
    ],
    techStack: ['React Cloud Console', 'Role-Based Permissions', 'Payroll Engine', 'Site Dispatch Sync'],
    color: 'from-cyan-600 to-blue-700',
  },
  {
    id: 'vindhyachal',
    number: 'PROJECT 03',
    clientName: 'Vindhyachal',
    solution: 'HRMS System',
    category: 'HRMS',
    industry: 'Enterprise Operations',
    description:
      'Digital HR management solution for organizing employee information and workforce processes.',
    highlights: [
      'Centralized digital employee directory & KYC',
      'Multi-level leave approval workflow',
      'Salary slip generation & bank payout export',
      'Departmental productivity analytics',
    ],
    techStack: ['Enterprise HRMS Core', 'Document Vault', 'Automated Email Alerts', 'Exportable Audits'],
    color: 'from-indigo-600 to-purple-700',
  },
  {
    id: 'svsm-construction',
    number: 'PROJECT 04',
    clientName: 'Shri 1008 SVSM Construction Company',
    solution: 'Inventory CRM',
    category: 'Inventory / CRM / Construction',
    industry: 'Heavy Construction & Civil Contracting',
    description:
      'Business management solution designed to improve inventory visibility and customer/business operations.',
    highlights: [
      'Raw material stock tracking across multiple sites',
      'Vendor purchase orders & quotation comparisons',
      'Equipment maintenance logging & dispatch ledger',
      'Project-wise consumption and cost variance alerts',
    ],
    techStack: ['Multi-Warehouse Inventory', 'Vendor Ledger', 'Real-time Stock Alerts', 'Secure Cloud API'],
    color: 'from-blue-700 to-navy',
  },
  {
    id: 'raj-hotels',
    number: 'PROJECT 05',
    clientName: 'Raj Hotels',
    solution: 'Restaurant CRM',
    category: 'Restaurant Management',
    industry: 'Hospitality & Dining',
    description:
      'A customized restaurant CRM solution designed to support restaurant operations and customer management.',
    highlights: [
      'Table reservation & dining guest profiles',
      'Digital Kitchen Order Ticketing (KOT) sync',
      'Customer loyalty points & repeat visit marketing',
      'Daily food cost & revenue reconciliations',
    ],
    techStack: ['Real-time Order Sync', 'Customer Loyalty Vault', 'POS Integration', 'Sales Dashboard'],
    color: 'from-purple-600 to-blue-800',
  },
  {
    id: 'rudrifycart',
    number: 'PROJECT 06',
    clientName: 'Rudrifycart',
    solution: 'E-Commerce Website',
    category: 'E-Commerce',
    industry: 'Digital Retail & Consumer Goods',
    description:
      'An e-commerce platform designed to provide customers with a modern digital shopping experience.',
    highlights: [
      'High-speed product catalog with instant filtering',
      'Secure multi-gateway payment integration',
      'Automated dispatch tracking & order notifications',
      'Mobile-optimized responsive checkout flow',
    ],
    techStack: ['Modern Storefront', 'Cloud Database', 'Payment Gateway API', 'Order Management'],
    color: 'from-cyan-500 to-blue-600',
  },
];

export const PRICING_DATA: PricingCategory[] = [
  {
    category: 'DIGITAL MARKETING',
    subtitle: 'Strategic content production, audience growth, and multi-channel brand building.',
    plans: DIGITAL_MARKETING_PLANS,
  },
  {
    category: 'WEBSITE DEVELOPMENT',
    subtitle: 'High-speed, conversion-focused websites with domain and cloud hosting included.',
    plans: WEBSITE_DEVELOPMENT_PLANS,
  },
  {
    category: 'CLOUD SOFTWARE',
    subtitle: 'Scalable business software deployed on robust, high-availability cloud infrastructure.',
    plans: CLOUD_SOFTWARE_PLANS,
  },
];

export const PRICING_DISCLAIMER =
  'Pricing shown is based on the current standard package structure. Custom requirements, integrations, third-party services and additional features may be charged separately.';
