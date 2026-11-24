export type PolicySlug =
  | 'privacy-policy'
  | 'terms-and-conditions'
  | 'cookie-policy'
  | 'disclaimer'
  | 'refund-cancellation-policy'
  | 'copyright-information';

export type ServiceSlug =
  | 'software-management'
  | 'domain-management'
  | 'graphics-content-writing'
  | 'online-marketing'
  | 'software-training'
  | 'digital-marketing';

export type RouteId =
  | 'home'
  | 'about'
  | 'services'
  | 'contact'
  | ServiceSlug
  | PolicySlug;

export interface ServiceDeliverable {
  title: string;
  detail: string;
}

export interface ServicePhase {
  stage: string;
  name: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: ServiceSlug;
  category: 'Technology & Infrastructure' | 'Brand & Editorial' | 'Growth & Capability';
  title: string;
  headline: string;
  shortDescription: string;
  editorialOverview: string;
  uaeComplianceNote: string;
  strategicOutcome: string;
  imageUrl: string;
  imageAlt: string;
  imageCaption: string;
  metrics: {
    value: string;
    label: string;
    context: string;
  }[];
  deliverables: ServiceDeliverable[];
  methodology: ServicePhase[];
  faqs: ServiceFaq[];
}

export const SITE_IMAGES = {
  hero: '/src/assets/images/tradeinfy_dubai_hero_1795518308814.jpg',
  about: '/src/assets/images/tradeinfy_about_studio_1795518309051.jpg',
  softwareDomain: '/src/assets/images/tradeinfy_software_domain_1795518309102.jpg',
  editorialGraphics: '/src/assets/images/tradeinfy_editorial_graphics_1795518310618.jpg',
  growthMarketing: '/src/assets/images/tradeinfy_growth_marketing_1795518310827.jpg',
};

export const COMPANY_INFO = {
  legalName: 'TRADEINFY TECHNOLOGY L.L.C.',
  shortName: 'Tradeinfy',
  logoUrl: '/assets/aistudio/Tradeinfy_Technology_Logo_5f3da2b5.png',
  email: 'contact@tradeinfy.com',
  phone: '+971 4 555 0194',
  location: 'Dubai, United Arab Emirates',
  hours: 'Monday – Friday, 09:00 – 18:00 GST',
};

export const ABOUT_CONTENT = {
  companyHeading: 'TRADEINFY TECHNOLOGY L.L.C.',
  subheading: 'Empowering Businesses Through Technology, Creativity & Digital Solutions',
  paragraphs: [
    'TRADEINFY TECHNOLOGY L.L.C. is a Dubai, United Arab Emirates-based technology and digital solutions company committed to helping businesses establish, manage, and strengthen their digital presence.',
    'We provide a range of technology-driven services designed to support businesses in managing their digital infrastructure, improving operational efficiency, and building effective online communication.',
    'Our service portfolio includes Software Management, Domain Management, Graphics Design, Content Writing, Online Marketing, Software Training, and Digital Marketing.',
    'At TRADEINFY TECHNOLOGY L.L.C., we believe that technology, creativity, and strategic digital solutions play an important role in modern business growth. Our approach focuses on understanding business requirements and delivering practical, reliable, and customized solutions.',
    "We aim to build long-term professional relationships through transparent communication, service quality, and a commitment to meeting our clients' business needs.",
  ],
  missionTitle: 'Our Mission',
  missionText:
    'To provide reliable technology and digital solutions that help businesses operate efficiently, strengthen their online presence, and adapt to an evolving digital environment.',
  visionTitle: 'Our Vision',
  visionText:
    'To become a trusted technology and digital solutions partner for businesses in the UAE and international markets.',
  commitmentTitle: 'Our Commitment',
  commitments: [
    'Professional and client-focused services.',
    'Reliable technology and digital support.',
    'Creative and effective digital solutions.',
    'Transparent business communication.',
    'Long-term client relationships.',
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    slug: 'software-management',
    category: 'Technology & Infrastructure',
    title: 'Software Management',
    headline:
      'Lifecycle governance, UAE data-protection alignment, and resilient enterprise software stewardship.',
    shortDescription:
      'Structured operational oversight for mission-critical UAE business software—spanning license rationalization, release pipelines, security patching, and SLA continuity.',
    editorialOverview:
      'Growing enterprises across the Emirates often contend with fragmented SaaS subscriptions, undocumented vendor releases, and inconsistent security controls. TRADEINFY TECHNOLOGY L.L.C. establishes a disciplined software management framework aligned with UAE Federal Decree-Law No. 45 of 2021 (PDPL) and UAE Information Assurance standards—giving leadership uninterrupted reliability and transparent cost control.',
    uaeComplianceNote:
      'Structured around UAE Personal Data Protection Law (PDPL) data-handling controls, regional cloud residency readiness, and documented access governance.',
    strategicOutcome:
      'Predictable production uptime, eliminated redundant software expenditure, and audit-ready release governance across every corporate department.',
    imageUrl: SITE_IMAGES.softwareDomain,
    imageAlt: 'Enterprise software operations and network governance workstation',
    imageCaption: 'Enterprise systems governance and release stewardship architecture.',
    metrics: [
      {
        value: '99.95%',
        label: 'Production Availability',
        context: 'Maintained across managed enterprise applications over 12 months',
      },
      {
        value: '32%',
        label: 'License Cost Reduction',
        context: 'Average redundant SaaS spend recovered within 90 days',
      },
      {
        value: '< 15m',
        label: 'Incident Triage SLA',
        context: 'Priority response protocol during UAE business operations',
      },
    ],
    deliverables: [
      {
        title: 'Application Portfolio & License Audit',
        detail:
          'Complete register of active SaaS, ERP, and proprietary software seats, renewal terms, and vendor contracts to eliminate unmonitored spend.',
      },
      {
        title: 'UAE PDPL & Access Governance',
        detail:
          'Role-based permission reviews, audit trails, and data-residency alignment supporting UAE Personal Data Protection Law obligations.',
      },
      {
        title: 'Release & Version Control Discipline',
        detail:
          'Standardized staging verification, rollback readiness, and change-log documentation prior to every production update.',
      },
      {
        title: 'Vendor & SLA Accountability',
        detail:
          'Single technical point of contact coordinating third-party software vendors, API integrations, and performance escalations.',
      },
    ],
    methodology: [
      {
        stage: 'Discovery',
        name: 'Asset & Risk Inventory',
        description:
          'Catalog active software licenses, hosting environments, access roles, and operational bottlenecks.',
      },
      {
        stage: 'Rationalization',
        name: 'Consolidation & Hardening',
        description:
          'Retire overlapping tools, standardize configurations, and enforce UAE data-protection controls.',
      },
      {
        stage: 'Operations',
        name: 'Managed Stewardship',
        description:
          'Execute scheduled patching, uptime monitoring, and verified deployment windows.',
      },
      {
        stage: 'Governance',
        name: 'Executive Ledger Review',
        description:
          'Quarterly reporting on reliability benchmarks, license savings, and infrastructure readiness.',
      },
    ],
    faqs: [
      {
        question: 'Can Tradeinfy manage software built by an external vendor or former agency?',
        answer:
          'Yes. We begin with a structured codebase, hosting, and documentation handover audit before assuming continuous operational management.',
      },
      {
        question: 'How do you support UAE regulatory compliance for business software?',
        answer:
          'We align access controls, encryption standards, and data-flow documentation with UAE PDPL and applicable sector cybersecurity expectations.',
      },
      {
        question: 'Do you oversee both commercial SaaS platforms and custom applications?',
        answer:
          'Yes. Our governance model covers ERP/CRM subscriptions as well as bespoke enterprise portals and internal APIs.',
      },
    ],
  },
  {
    slug: 'domain-management',
    category: 'Technology & Infrastructure',
    title: 'Domain Management',
    headline:
      'Sovereign .ae and global registry custody, hardened DNS routing, and zero-lapse digital protection.',
    shortDescription:
      'Centralized corporate domain governance covering TDRA (.aeDA) compliance, registrar consolidation, DNSSEC, email authentication, and SSL lifecycle.',
    editorialOverview:
      'In the UAE digital economy, a single misconfigured DNS record or lapsed domain registration can disrupt corporate email, customer portals, and government-facing verification systems. TRADEINFY TECHNOLOGY L.L.C. treats domain portfolios as strategic corporate property—maintaining clean legal ownership under TDRA (.aeDA) policies alongside enterprise-grade DNS resilience.',
    uaeComplianceNote:
      'Full adherence to UAE Telecommunications and Digital Government Regulatory Authority (TDRA / .aeDA) registration policies and domain-lock protocols.',
    strategicOutcome:
      'Zero accidental expirations, authenticated corporate email deliverability, and unified custody across all .ae and international brand domains.',
    imageUrl: SITE_IMAGES.softwareDomain,
    imageAlt: 'High-precision domain routing and DNS security operations workspace',
    imageCaption: 'Centralized .ae and global DNS infrastructure monitoring.',
    metrics: [
      {
        value: '100%',
        label: 'Renewal Continuity',
        context: 'Protected by registry locks and multi-year renewal stewardship',
      },
      {
        value: 'DNSSEC',
        label: 'Cryptographic Signing',
        context: 'Deployed across primary corporate zones and subdomains',
      },
      {
        value: '< 50ms',
        label: 'Regional DNS Resolution',
        context: 'Low-latency Anycast routing verified across MENA and global nodes',
      },
    ],
    deliverables: [
      {
        title: 'TDRA (.ae) & Global Portfolio Custody',
        detail:
          'Consolidating scattered domains under verified corporate entity ownership with strict trade-license and WHOIS accuracy.',
      },
      {
        title: 'Enterprise DNS Architecture',
        detail:
          'Structured zone management, failover routing, and documented change verification to eliminate propagation outages.',
      },
      {
        title: 'Email Trust (SPF, DKIM, DMARC)',
        detail:
          'Precision mail-authentication records protecting corporate leadership and customer communications from domain spoofing.',
      },
      {
        title: 'SSL / TLS & Defensive Coverage',
        detail:
          'Automated certificate lifecycle governance paired with strategic brand-protection registrations across key extensions.',
      },
    ],
    methodology: [
      {
        stage: 'Discovery',
        name: 'Zone & Registrar Audit',
        description:
          'Map every active domain, subdomain, registrar credential, and legacy DNS dependency.',
      },
      {
        stage: 'Consolidation',
        name: 'Custody & Registry Lock',
        description:
          'Verify corporate legal ownership, enable transfer locks, and enforce hardware-grade access security.',
      },
      {
        stage: 'Hardening',
        name: 'DNSSEC & Mail Enforcement',
        description:
          'Deploy DMARC enforcement, DNSSEC signing, and clean TTL architecture.',
      },
      {
        stage: 'Continuity',
        name: 'Proactive Lifecycle Care',
        description:
          'Continuous expiry safeguarding, SSL monitoring, and rapid zone updates on request.',
      },
    ],
    faqs: [
      {
        question: 'Does our company retain legal ownership of our .ae and .com domains?',
        answer:
          'Always. All domains are registered under your UAE trade license and corporate legal entity while Tradeinfy manages technical administration.',
      },
      {
        question: 'Can you help reclaim domains registered years ago under former staff accounts?',
        answer:
          'Yes. We handle registrar verification, ownership documentation, and zero-downtime zone migrations.',
      },
    ],
  },
  {
    slug: 'graphics-content-writing',
    category: 'Brand & Editorial',
    title: 'Graphics / Content Writing',
    headline:
      'Luxury editorial craft, Swiss visual systems, and compliant corporate storytelling for the UAE market.',
    shortDescription:
      'Executive brand graphics, investor decks, website copywriting, and thought leadership produced in alignment with UAE Media Council standards.',
    editorialOverview:
      'Discerning corporate buyers across Dubai and Abu Dhabi judge credibility within seconds of encountering your brand. TRADEINFY TECHNOLOGY L.L.C. unites Swiss typographic layout discipline with authoritative editorial writing—delivering visual suites and commercial narratives that reflect institutional stature while respecting UAE Media Council publishing and cultural guidelines.',
    uaeComplianceNote:
      'All visual campaigns and commercial copy are authored in strict alignment with UAE Media Council digital content, cultural sensitivity, and advertising accuracy standards.',
    strategicOutcome:
      'Cohesive visual identity across digital and print collateral paired with clear, persuasive messaging engineered for senior decision-makers.',
    imageUrl: SITE_IMAGES.editorialGraphics,
    imageAlt: 'Swiss editorial typography prints and brand design studio desk',
    imageCaption: 'Swiss typographic grid systems and corporate editorial production.',
    metrics: [
      {
        value: '48 hrs',
        label: 'Editorial Turnaround',
        context: 'Standard delivery window for structured campaign assets',
      },
      {
        value: '2.4x',
        label: 'Reader Retention Lift',
        context: 'Average engagement improvement following editorial redesigns',
      },
      {
        value: '100%',
        label: 'Brand System Parity',
        context: 'Consistent typography, grid rules, and tone across touchpoints',
      },
    ],
    deliverables: [
      {
        title: 'Corporate Brand & Campaign Graphics',
        detail:
          'Minimalist executive presentation decks, corporate brochures, social editorial plates, and structured web visual systems.',
      },
      {
        title: 'Website & Service Copywriting',
        detail:
          'Clear value propositions, commercial landing narratives, and conversion copy calibrated for regional and global B2B audiences.',
      },
      {
        title: 'Whitepapers & Thought Leadership',
        detail:
          'Researched industry briefings, annual capability profiles, and case studies written in an authoritative institutional voice.',
      },
      {
        title: 'Bilingual-Ready Brand Guidelines',
        detail:
          'Reusable design templates and editorial tone specifications enabling seamless English and Arabic brand parity.',
      },
    ],
    methodology: [
      {
        stage: 'Briefing',
        name: 'Positioning & Tone Calibration',
        description:
          'Define audience sophistication, commercial priorities, and UAE market nuances.',
      },
      {
        stage: 'Architecture',
        name: 'Grid & Narrative Blueprint',
        description:
          'Establish typographic hierarchy, visual proportions, and copy structure before production.',
      },
      {
        stage: 'Production',
        name: 'Visual & Editorial Craft',
        description:
          'Develop refined graphics and tightly edited prose through structured stakeholder review.',
      },
      {
        stage: 'Delivery',
        name: 'Master Asset Handoff',
        description:
          'Supply web-ready, print-ready, and editable master source files organized by channel.',
      },
    ],
    faqs: [
      {
        question: 'Do your graphics and copy follow UAE advertising and media guidelines?',
        answer:
          'Yes. We ensure claims are substantiated, disclosures are clear, and visual/editorial messaging respects UAE Media Council regulations.',
      },
      {
        question: 'Can you refresh our existing corporate profile without a complete rebrand?',
        answer:
          'Yes. We elevate existing brand marks with refined typography, cleaner Swiss layout structure, and sharper executive copy.',
      },
    ],
  },
  {
    slug: 'online-marketing',
    category: 'Growth & Capability',
    title: 'Online Marketing',
    headline:
      'High-intent paid acquisition and conversion architecture engineered for measurable commercial pipeline.',
    shortDescription:
      'Targeted search campaigns, LinkedIn executive outreach, and conversion landing pages calibrated for UAE buyer economics and transparent ROI.',
    editorialOverview:
      'Effective online marketing prioritizes qualified commercial inquiries over vanity clicks. TRADEINFY TECHNOLOGY L.L.C. builds disciplined paid search, social acquisition, and conversion optimization funnels tailored to high-value UAE and GCC sectors—operating within UAE digital advertising rules and transparent budget accountability.',
    uaeComplianceNote:
      'Campaigns adhere to UAE Media Council digital advertising transparency, UAE Consumer Protection standards, and compliant consent tracking.',
    strategicOutcome:
      'Predictable flow of qualified B2B and enterprise leads with clear visibility into acquisition cost and campaign return.',
    imageUrl: SITE_IMAGES.growthMarketing,
    imageAlt: 'Executive briefing displaying digital acquisition performance curves in Dubai',
    imageCaption: 'High-intent acquisition analytics and UAE commercial pipeline tracking.',
    metrics: [
      {
        value: '+140%',
        label: 'Qualified Lead Volume',
        context: 'Measured over 6 months across managed UAE acquisition programs',
      },
      {
        value: '3.8x',
        label: 'Blended Campaign ROAS',
        context: 'Verified return across high-intent search and LinkedIn media',
      },
      {
        value: '-28%',
        label: 'Cost Per Acquisition',
        context: 'Achieved via landing-page clarity and continuous keyword pruning',
      },
    ],
    deliverables: [
      {
        title: 'Search & LinkedIn Acquisition',
        detail:
          'Intent-segmented Google Search and LinkedIn B2B campaigns engineered around Emirate-level and regional GCC targeting.',
      },
      {
        title: 'Conversion Landing Frameworks',
        detail:
          'High-clarity destination pages combining credible proof points with frictionless consultation capture.',
      },
      {
        title: 'Measured Retargeting Sequences',
        detail:
          'Disciplined follow-up touchpoints tailored to buyer consideration timelines without ad fatigue.',
      },
      {
        title: 'Commercial Attribution Ledger',
        detail:
          'Monthly executive reporting detailing ad spend, qualified lead velocity, cost per opportunity, and next-cycle priorities.',
      },
    ],
    methodology: [
      {
        stage: 'Audit',
        name: 'Intent & Market Diagnostics',
        description:
          'Analyze historical spend, UAE search demand, and competitor positioning.',
      },
      {
        stage: 'Launch',
        name: 'Precision Campaign Build',
        description:
          'Implement verified conversion tracking, clean ad groups, and dedicated landing pages.',
      },
      {
        stage: 'Optimization',
        name: 'Weekly Bid & Copy Calibration',
        description:
          'Eliminate wasted impressions and shift budget toward highest-converting segments.',
      },
      {
        stage: 'Scale',
        name: 'Pipeline Expansion',
        description:
          'Expand winning acquisition channels validated against real CRM deal outcomes.',
      },
    ],
    faqs: [
      {
        question: 'How is Online Marketing distinct from your broader Digital Marketing service?',
        answer:
          'Online Marketing concentrates on direct-response paid media, search capture, and conversion funnels, whereas Digital Marketing integrates organic SEO, omnichannel brand authority, and CRM lifecycle retention.',
      },
      {
        question: 'Do we keep full administrative ownership of our ad accounts?',
        answer:
          'Yes. All Google, Meta, and LinkedIn ad accounts and billing profiles remain directly owned by your organization.',
      },
    ],
  },
  {
    slug: 'software-training',
    category: 'Growth & Capability',
    title: 'Software Training',
    headline:
      'Structured corporate software enablement empowering UAE teams to operate systems with precision.',
    shortDescription:
      'Tailored enterprise workshops, role-based onboarding curricula, and operational playbooks designed around your live business workflows.',
    editorialOverview:
      'Technology investments only deliver full value when internal teams use software confidently and consistently. TRADEINFY TECHNOLOGY L.L.C. delivers practical, scenario-driven training programs tailored to UAE corporate teams—covering enterprise productivity platforms, CRM/ERP workflows, digital collaboration suites, and proprietary internal applications.',
    uaeComplianceNote:
      'Designed around structured corporate upskilling benchmarks, UAE data-hygiene best practices, and secure operational usage.',
    strategicOutcome:
      'Higher software adoption across departments, faster onboarding for new hires, and fewer internal support bottlenecks.',
    imageUrl: SITE_IMAGES.about,
    imageAlt: 'UAE corporate executive training and consultation session',
    imageCaption: 'Role-based corporate software enablement and live workshop delivery.',
    metrics: [
      {
        value: '94%',
        label: 'Team Adoption Rate',
        context: 'Measured 60 days after cohort training completion',
      },
      {
        value: '45%',
        label: 'Faster Onboarding',
        context: 'Reduction in time-to-proficiency for newly hired staff',
      },
      {
        value: '-52%',
        label: 'Internal Support Tickets',
        context: 'Drop in repetitive workflow troubleshooting requests',
      },
    ],
    deliverables: [
      {
        title: 'Role-Segmented Curriculum Design',
        detail:
          'Focused modules tailored separately for leadership reporting, operational managers, and daily system users.',
      },
      {
        title: 'Live On-Site & Remote Workshops',
        detail:
          'Instructor-led sessions across Dubai and the wider UAE anchored in real company scenarios rather than generic slides.',
      },
      {
        title: 'Standard Operating Playbooks',
        detail:
          'Indexed visual reference guides, workflow checklists, and recorded walkthrough libraries for permanent internal use.',
      },
      {
        title: 'Post-Training Adoption Clinics',
        detail:
          'Follow-up office hours and practical competency checks ensuring new habits remain embedded in daily work.',
      },
    ],
    methodology: [
      {
        stage: 'Assessment',
        name: 'Workflow & Skill Mapping',
        description:
          'Identify friction points across departments and benchmark current software proficiency.',
      },
      {
        stage: 'Design',
        name: 'Custom Module Authoring',
        description:
          'Build hands-on exercises aligned directly to your production tools and security rules.',
      },
      {
        stage: 'Delivery',
        name: 'Interactive Cohort Sessions',
        description:
          'Facilitate focused small-group training with live Q&A and real-time troubleshooting.',
      },
      {
        stage: 'Sustainment',
        name: 'Playbooks & Refresher Clinics',
        description:
          'Transfer permanent training libraries and conduct 30-day adoption reviews.',
      },
    ],
    faqs: [
      {
        question: 'Can you train our staff on custom or industry-specific software?',
        answer:
          'Yes. We work alongside your IT or operations leads to document workflows and create bespoke training for proprietary platforms.',
      },
      {
        question: 'Do you offer both in-person Dubai workshops and hybrid virtual sessions?',
        answer:
          'Yes. We deliver on-site corporate sessions in the UAE as well as structured live virtual cohorts for distributed teams.',
      },
    ],
  },
  {
    slug: 'digital-marketing',
    category: 'Growth & Capability',
    title: 'Digital Marketing',
    headline:
      'Integrated omnichannel strategy uniting technical SEO, brand authority, and PDPL-compliant retention.',
    shortDescription:
      'End-to-end digital growth architecture combining UAE search visibility, executive social presence, CRM automation, and revenue attribution.',
    editorialOverview:
      'Enduring market authority in the UAE requires harmonized execution across every digital touchpoint. TRADEINFY TECHNOLOGY L.L.C. orchestrates technical SEO, authoritative editorial publishing, executive LinkedIn positioning, and UAE PDPL-compliant CRM lifecycle programs—building compounding brand equity rather than short-lived campaign spikes.',
    uaeComplianceNote:
      'Built on UAE Personal Data Protection Law (PDPL) consent-first CRM workflows, transparent cookie governance, and UAE Media Council standards.',
    strategicOutcome:
      'Sustainable organic search growth, elevated institutional authority, and unified customer lifecycle intelligence.',
    imageUrl: SITE_IMAGES.growthMarketing,
    imageAlt: 'Omnichannel digital marketing strategy presentation in UAE boardroom',
    imageCaption: 'Integrated omnichannel growth architecture and executive attribution.',
    metrics: [
      {
        value: '+210%',
        label: 'Organic Search Traffic',
        context: '12-month growth across technical SEO & editorial authority mandates',
      },
      {
        value: '4.1x',
        label: 'Lifecycle LTV Impact',
        context: 'Retention improvement via consent-based CRM automation',
      },
      {
        value: '18 mos',
        label: 'Compounding Equity',
        context: 'Sustained organic channel payback horizon across regional markets',
      },
    ],
    deliverables: [
      {
        title: 'Technical SEO & UAE Search Authority',
        detail:
          'Site architecture, Core Web Vitals engineering, structured schema, and regional search visibility across Dubai and MENA.',
      },
      {
        title: 'Executive Social & Content Distribution',
        detail:
          'Cohesive editorial calendars elevating brand leadership across LinkedIn and high-trust industry channels.',
      },
      {
        title: 'PDPL-Compliant CRM & Email Journeys',
        detail:
          'Opt-in lifecycle nurturing, lead scoring, and automated retention sequences respecting UAE data privacy standards.',
      },
      {
        title: 'Unified Analytics & Executive Scorecards',
        detail:
          'Server-side tracking, GA4 governance, and board-level reporting linking channel activity directly to revenue pipeline.',
      },
    ],
    methodology: [
      {
        stage: 'Diagnostics',
        name: 'Ecosystem & Compliance Audit',
        description:
          'Evaluate technical SEO health, brand share-of-voice, and CRM consent architecture.',
      },
      {
        stage: 'Blueprint',
        name: 'Omnichannel Roadmap',
        description:
          'Align search, editorial, social, and retention programs under unified quarterly targets.',
      },
      {
        stage: 'Execution',
        name: 'Synchronized Publishing & Media',
        description:
          'Coordinate technical deployments, authority content, and targeted amplification.',
      },
      {
        stage: 'Compounding',
        name: 'Quarterly Attribution Review',
        description:
          'Reallocate effort toward highest-margin acquisition and retention levers.',
      },
    ],
    faqs: [
      {
        question: 'How does your Digital Marketing approach align with UAE PDPL privacy rules?',
        answer:
          'We design lead capture, cookie consent, and CRM email automation around explicit opt-in records and transparent data-retention practices.',
      },
      {
        question: 'Can Tradeinfy partner with our internal marketing leadership?',
        answer:
          'Yes. We routinely operate as the strategic, technical, and execution partner for internal corporate marketing teams.',
      },
    ],
  },
];

export const ABOUT_PRINCIPLES = [
  {
    tag: 'Discipline',
    title: 'Swiss Architectural Clarity',
    description:
      'Every platform, visual asset, and marketing campaign is built around clear hierarchy, verifiable proof, and purposeful restraint.',
  },
  {
    tag: 'Integration',
    title: 'Systems & Growth Unified',
    description:
      'Technical reliability and commercial visibility belong together—combining software governance, domain custody, and marketing execution.',
  },
  {
    tag: 'Compliance',
    title: 'UAE Regulatory Readiness',
    description:
      'Our deliverables reflect UAE PDPL data-protection principles, TDRA (.ae) domain standards, and UAE Media Council advertising integrity.',
  },
  {
    tag: 'Custody',
    title: 'Unambiguous Client Ownership',
    description:
      'Your domains, software repositories, ad accounts, and analytics properties stay legally and technically in your organization’s hands.',
  },
];

export const FIRM_MILESTONES = [
  {
    metric: 'Six',
    unit: 'Integrated Practices',
    caption: 'Technology stewardship, editorial craft, and growth strategy',
  },
  {
    metric: '99.95%',
    unit: 'Operational SLA',
    caption: 'Maintained across managed software & .ae domain portfolios',
  },
  {
    metric: '40+',
    unit: 'Enterprise Stacks',
    caption: 'Audited, hardened, and documented across UAE engagements',
  },
  {
    metric: '24 hrs',
    unit: 'Executive Response',
    caption: 'Dedicated consultation turnaround from our Dubai desk',
  },
];

export const UAE_GOVERNANCE_PILLARS = [
  {
    authority: 'TDRA (.aeDA) Alignment',
    scope: 'Domain Management',
    summary:
      'Corporate .ae domain custody, accurate trade-license registrant records, and hardened DNS infrastructure.',
  },
  {
    authority: 'UAE PDPL (Federal Decree-Law 45/2021)',
    scope: 'Software & Digital Marketing',
    summary:
      'Consent-first CRM architecture, role-based access reviews, and disciplined corporate data stewardship.',
  },
  {
    authority: 'UAE Media Council Standards',
    scope: 'Graphics, Content & Online Ads',
    summary:
      'Substantiated commercial claims, respectful cultural framing, and transparent digital advertising practices.',
  },
];
