export const profile = {
  name: "Ibrahim Abdo",
  title: "Project Manager & Digital Marketing Specialist",
  tagline:
    "Turning bold ideas into KPI-crushing campaigns across Lebanon, Ghana, Martinique & beyond.",
  location: "Tripoli, North Lebanon",
  email: "befjawi@gmail.com",
  phone: "+961 03 54 06 14",
  cvFile: "/CV-Ibrahim-Abdo.pdf",
  social: {
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    whatsapp: "https://wa.me/96103540614",
  },
};

export const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "$200K+", label: "Ad Budgets Managed" },
  { value: "20K+", label: "Followers Grown in 75 Days" },
  { value: "60%", label: "Avg. Organic Traffic Lift" },
];

export const about = {
  intro:
    "I'm a Project Manager & Digital Marketing Specialist with 4+ years of experience leading marketing strategy, brand management, and multi-project coordination across local and international markets.",
  body: "I deliver measurable growth through KPI-driven campaigns, cross-functional team leadership, and budget optimization — integrating digital marketing, SEO, and creative content strategies to maximize ROI and elevate brand visibility. From e-commerce launches in Ghana to luxury automotive SEO in Martinique, my work bridges strategy, creativity, and data.",
  highlights: [
    "Multi-project coordinator across 5+ concurrent e-commerce brands",
    "Cross-border campaign manager (Lebanon · Ghana · Martinique · KSA)",
    "Performance marketer with budgets up to $200K+",
    "SEO strategist averaging 45–60% organic traffic uplift",
  ],
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  bullets: string[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    role: "Project Manager",
    company: "Ishtari",
    period: "2024 — Present",
    bullets: [
      "Direct 5 concurrent e-commerce projects — Ishtari Ghana, Ishtari Lebanon, English Home, FLO Store, NEO Development — overseeing planning, social strategy, campaign execution, and performance optimization.",
      "Implement monthly “Deal of the Month” campaigns with structured teasers, multi-phase ads, and conversion-focused creatives — averaging 45% rate of return.",
      "Manage cross-border collaboration with the Ghana operations team, coordinating ad creatives, event schedules, and platform updates for localized targeting.",
      "Launch conversion-optimized ad campaigns with API-integrated order tracking and customer data management.",
      "Apply keyword-focused SEO strategies, increasing organic traffic and engagement across product categories.",
    ],
    tags: ["E-commerce", "Multi-brand", "SEO", "Meta Ads", "Cross-border"],
  },
  {
    role: "Project Manager",
    company: "Brandexio Digital Agency",
    period: "2023 — Present",
    bullets: [
      "Lead end-to-end marketing project management for retail, food, and fashion clients — from discovery and business studies to custom marketing, design, and video plans with detailed quotations.",
      "Manage brand identity refreshes — logo redesign, visual guidelines, and market repositioning aligned with brand voice.",
      "Direct online & offline ad campaigns averaging $5,000/month in spend, optimizing across social ads, in-store events, and activations.",
      "Grew followers from 0 → 20,000+ in 75 days, lifted engagement 65%, and generated significant sales uplift.",
      "Executed “Cell and Sell” hybrid live store events: +40% foot traffic, +25% conversion rate.",
    ],
    tags: ["Branding", "Agency", "Events", "Paid Social", "ROI"],
  },
  {
    role: "SEO Specialist",
    company: "WSI Martinique Agency",
    period: "2023 — Present",
    bullets: [
      "Manage SEO and digital marketing for Mercedes, Opel, Audi, and Intersport across Martinique and Dominique — combined budgets exceeding $200,000.",
      "Drove 45% improvement in keyword rankings and 60%+ organic traffic growth within six months.",
      "Used Trello, Siteglitte, and Meta Ads Manager to coordinate teams — boosting CTR by 35%.",
      "Boosted conversion rate 25% and improved CPC efficiency 18% via structured monthly reporting.",
      "Aligned on-page SEO with content & technical teams — increasing average session duration 22%.",
    ],
    tags: ["SEO", "Automotive", "Luxury Brands", "Analytics", "Strategy"],
  },
  {
    role: "Editor in Chief",
    company: "Typhon Agency",
    period: "2020 — 2022",
    bullets: [
      "Led an 8-writer content team producing high-quality automotive content for major KSA clients.",
      "Established editorial standards & a review process — cutting revision cycles 30%.",
      "Published 120+ articles/month with SEO best practices: +50% organic traffic, +35% keyword ranking improvement.",
      "Launched trending content sections that drove +25% session duration.",
      "Implemented structured editorial calendar, hitting 100% of content deadlines.",
    ],
    tags: ["Content", "Editorial", "SEO", "Team Leadership", "KSA Market"],
  },
  {
    role: "Project Manager",
    company: "Remax Experts · Vivadoo · SQM · Saerni · Motory 360",
    period: "2017 — 2020",
    bullets: [
      "Managed long-term digital growth — business planning, social content, video production, and paid ads.",
      "Ran daily $50 ad budgets for Vivadoo: 200+ conversions at $0.29 cost-per-conversion.",
      "Conducted strategic planning sessions and onboarded clients to digital platforms end-to-end.",
    ],
    tags: ["Multi-client", "Performance Ads", "Strategy", "Onboarding"],
  },
  {
    role: "Field Officer & Photographer",
    company: "Fasila Fund NGO",
    period: "2024 — Present",
    bullets: [
      "Conduct 150+ on-ground beneficiary visits/year with full needs assessment & 100% case documentation.",
      "Coordinate procurement & delivery — 95% on-time fulfillment, full audit & donor compliance.",
      "Document the assistance process with high-resolution photography (+40% donor reporting transparency).",
      "Grew multi-platform NGO social presence: +35% followers, +28% engagement in 6 months.",
      "Designed 25+ brand identity assets — vinyl signage, flyers, brochures, letterheads, watermarks.",
    ],
    tags: ["NGO", "Photography", "Branding", "Reporting"],
  },
  {
    role: "Freelance Marketing & Consulting",
    company: "Al Markaz · Glam Clinic · Pharmacy Pro · My Family Bakery",
    period: "2024 — Present",
    bullets: [
      "Branding & digital marketing across education, beauty, health, and food sectors.",
      "Built complete brand identities — logos, color palettes, typography, multimedia content.",
      "Set up & optimized social accounts via Meta Business Suite with full scheduling systems.",
      "Drove up to 40% follower growth, 25% sales/registration lift, and 28% boost in customer footfall.",
    ],
    tags: ["Freelance", "Branding", "Multi-sector", "Performance"],
  },
];

export const skillGroups = [
  {
    title: "Project & Brand Management",
    items: [
      "Multi-Project Coordination",
      "Campaign Planning",
      "KPI Tracking",
      "Budget Control",
      "Cross-Border Team Leadership",
    ],
  },
  {
    title: "Digital Marketing & SEO",
    items: [
      "Social Media Strategy",
      "Paid Advertising",
      "Keyword Optimization",
      "Meta Business Suite",
      "Google Analytics",
    ],
  },
  {
    title: "Creative & Technical",
    items: [
      "Branding",
      "Logo Design",
      "Content Creation",
      "Photography",
      "Video Production",
      "API Integration",
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Trello",
      "Siteglitte",
      "Meta Ads Manager",
      "WordPress",
      "Laravel",
      "Canva",
      "Microsoft Office",
    ],
  },
];

export const languages = [
  { name: "Arabic", level: "Native", percent: 100 },
  { name: "French", level: "Fluent", percent: 92 },
  { name: "English", level: "Fluent", percent: 90 },
];

export const education = [
  {
    degree: "Master's in Mechanical Engineering",
    school: "Lebanese International University",
    period: "In Progress",
  },
  {
    degree: "Bachelor's in Mechanical Engineering",
    school: "Lebanese International University",
    period: "2025",
  },
];

export const certifications = [
  { title: "Measure & Optimize Social Media Marketing Campaigns", issuer: "Meta", date: "Aug 2024" },
  { title: "Advertising with Meta", issuer: "Meta", date: "Jul 2024" },
  { title: "Foundation of Digital Marketing & E-commerce", issuer: "Google", date: "Dec 2023" },
];

export const brands = [
  "Ishtari", "English Home", "FLO Store", "Mercedes", "Audi", "Opel",
  "Intersport", "Remax", "Vivadoo", "Glam Clinic", "Pharmacy Pro", "Al Markaz",
];
