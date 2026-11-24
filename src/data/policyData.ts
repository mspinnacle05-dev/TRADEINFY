import type { PolicySlug } from './siteData';

export interface PolicySection {
  heading: string;
  body: string[];
  bullets?: string[];
}

export interface PolicyDocument {
  slug: PolicySlug;
  title: string;
  subtitle: string;
  effectiveDate: string;
  jurisdiction: string;
  sections: PolicySection[];
}

export const POLICY_PAGES: PolicyDocument[] = [
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    subtitle:
      'Personal data governance, lawful processing, and privacy rights under UAE Federal Decree-Law No. 45 of 2021 (PDPL).',
    effectiveDate: 'November 2026',
    jurisdiction: 'Dubai, United Arab Emirates',
    sections: [
      {
        heading: 'Scope & Data Controller',
        body: [
          'TRADEINFY TECHNOLOGY L.L.C., located at GARHOUD - OFF106, Al Garhoud, Dubai, UAE, acts as the Data Controller for personal information collected through this website and during client consultations across Software Management, Domain Management, Graphics Design, Content Writing, Online Marketing, Software Training, and Digital Marketing engagements. Official inquiries may be sent to contact@tradeinfy.com or +971 50 175 7629.',
          'We process personal data strictly in compliance with UAE Federal Decree-Law No. 45 of 2021 regarding the Protection of Personal Data (PDPL) and its applicable executive regulations.',
        ],
      },
      {
        heading: 'Information We Collect',
        body: [
          'We collect only the personal and corporate information necessary to respond to inquiries, deliver contracted services, and fulfill statutory obligations in the United Arab Emirates:',
        ],
        bullets: [
          'Identity and Business Contact Details: Full name, corporate title, organization name, business email address, and telephone number submitted via our consultation forms.',
          'Service & Domain Administration Records: Technical requirements, software portfolio specifications, and corporate trade-license verification details needed for TDRA (.aeDA) or registrar domain custody.',
          'Technical & Consent Preferences: Browser compatibility signals and cookie preference selections recorded solely after explicit user consent.',
        ],
      },
      {
        heading: 'Lawful Basis & Purpose of Processing',
        body: [
          'Personal information is processed solely on verified lawful grounds, including explicit consent, preparation or performance of a commercial services agreement, and compliance with UAE legal requirements.',
          'TRADEINFY TECHNOLOGY L.L.C. does not sell, rent, or trade client contact records to unauthorized third-party brokers.',
        ],
      },
      {
        heading: 'Data Retention & Cross-Border Safeguards',
        body: [
          'Client records and inquiry correspondence are retained only for as long as required to fulfill the stated business purpose or satisfy UAE commercial and tax record-keeping mandates.',
          'Where cloud infrastructure or enterprise tools process data outside the UAE, we apply contractual confidentiality clauses and technical encryption aligned with PDPL cross-border transfer standards.',
        ],
      },
      {
        heading: 'Your Rights Under UAE Law',
        body: [
          'Under the UAE PDPL, you hold the right to request access to your personal data, seek correction of inaccurate records, request erasure where statutory retention no longer applies, or withdraw previously granted consent at any time by contacting contact@tradeinfy.com.',
        ],
      },
    ],
  },
  {
    slug: 'terms-and-conditions',
    title: 'Terms & Conditions',
    subtitle:
      'Governing terms for website use and professional engagements with TRADEINFY TECHNOLOGY L.L.C. in Dubai, United Arab Emirates.',
    effectiveDate: 'November 2026',
    jurisdiction: 'Dubai, United Arab Emirates',
    sections: [
      {
        heading: 'Acceptance of Terms',
        body: [
          'By accessing this website or engaging TRADEINFY TECHNOLOGY L.L.C. for Software Management, Domain Management, Graphics Design, Content Writing, Online Marketing, Software Training, or Digital Marketing, you agree to be bound by these Terms & Conditions and applicable laws of the United Arab Emirates.',
        ],
      },
      {
        heading: 'Scope of Professional Services',
        body: [
          'All commercial deliverables, service-level commitments, timelines, and fee structures are governed by a written Statement of Work (SOW) or Master Services Agreement executed between TRADEINFY TECHNOLOGY L.L.C. and the client organization.',
        ],
        bullets: [
          'Software Management & Software Training: Operational oversight, patching, and corporate workshops are scoped to agreed environments, user cohorts, and business hours.',
          'Domain Management: Registration, renewal, and transfer of .ae and international domains are subject to TDRA (.aeDA) and ICANN registry eligibility rules and accurate client documentation.',
          'Graphics Design, Content Writing & Marketing: Creative assets and digital campaigns are produced to approved briefs in compliance with UAE Media Council advertising and content regulations.',
        ],
      },
      {
        heading: 'Client Responsibilities & Account Ownership',
        body: [
          'Clients warrant that all materials, brand marks, trade licenses, and access credentials supplied to TRADEINFY TECHNOLOGY L.L.C. are accurate, authorized, and free of third-party infringement.',
          'Unless otherwise agreed in writing, clients retain legal ownership of their registered domain names, paid media accounts, and proprietary business data.',
        ],
      },
      {
        heading: 'Fees, Invoicing & Electronic Transactions',
        body: [
          'Fees are invoiced in United Arab Emirates Dirhams (AED) or agreed settlement currency according to the payment milestones specified in each proposal, in alignment with UAE Federal Decree-Law No. 50 of 2022 (Commercial Transactions) and Federal Decree-Law No. 46 of 2021 (Electronic Transactions and Trust Services).',
        ],
      },
      {
        heading: 'Governing Law & Jurisdiction',
        body: [
          'These Terms & Conditions are governed by and construed in accordance with the federal laws of the United Arab Emirates as applied in the Emirate of Dubai. Any dispute not resolved amicably shall fall under the exclusive jurisdiction of the competent courts of Dubai, UAE.',
        ],
      },
    ],
  },
  {
    slug: 'cookie-policy',
    title: 'Cookie Policy',
    subtitle:
      'Transparent disclosure of how cookies and consent preferences operate on the TRADEINFY TECHNOLOGY L.L.C. website.',
    effectiveDate: 'November 2026',
    jurisdiction: 'Dubai, United Arab Emirates',
    sections: [
      {
        heading: 'Consent-First Architecture',
        body: [
          'In alignment with UAE Federal Decree-Law No. 45 of 2021 (PDPL) transparency standards, TRADEINFY TECHNOLOGY L.L.C. requires explicit user consent before activating website navigation or storing preference tokens.',
          'Upon opening this website, visitors may choose to Accept all cookies, Customize individual categories, or Reject consent. Website navigation and interactive features remain locked unless consent is granted.',
        ],
      },
      {
        heading: 'Categories of Cookies Used',
        body: [
          'We classify website storage strictly by functional purpose:',
        ],
        bullets: [
          'Strictly Necessary Cookies: Essential to record your consent decision, preserve page navigation state, and maintain consultation form security.',
          'Analytics & Performance Cookies: Optional telemetry used only if permitted to measure page responsiveness and improve user experience.',
          'Marketing & Attribution Cookies: Optional tags activated strictly when consented to evaluate referral effectiveness across UAE digital channels.',
        ],
      },
      {
        heading: 'Managing or Revoking Consent',
        body: [
          'You may review, modify, or withdraw your cookie preferences at any point using the Cookie Preferences control provided below or by clearing site storage within your browser settings.',
        ],
      },
    ],
  },
  {
    slug: 'disclaimer',
    title: 'Disclaimer',
    subtitle:
      'Important notices regarding informational accuracy, marketing outcomes, third-party platforms, and UAE legal compliance.',
    effectiveDate: 'November 2026',
    jurisdiction: 'Dubai, United Arab Emirates',
    sections: [
      {
        heading: 'General Information Purpose',
        body: [
          'The materials presented on this website by TRADEINFY TECHNOLOGY L.L.C. are provided for general corporate and informational purposes. They do not constitute binding technical, legal, or regulatory advice outside a formally executed service agreement.',
        ],
      },
      {
        heading: 'Marketing & Performance Benchmarks',
        body: [
          'Metrics and operational outcomes referenced across our Digital Marketing, Online Marketing, Software Management, and Software Training pages illustrate historical engagement benchmarks. Actual results depend on market competition, client ad budgets, sector dynamics in the UAE, and internal team execution.',
        ],
      },
      {
        heading: 'UAE Media & Cybercrime Compliance',
        body: [
          'TRADEINFY TECHNOLOGY L.L.C. operates in full respect of UAE Federal Decree-Law No. 34 of 2021 on Combatting Rumours and Cybercrimes and UAE Media Council standards. Clients remain responsible for ensuring that product claims, sector-specific permits (such as healthcare, finance, or real estate advertising approvals), and underlying business representations provided for campaigns comply with UAE authorities.',
        ],
      },
      {
        heading: 'Third-Party Infrastructure & Registries',
        body: [
          'Domain Management and Software Management services often interface with accredited registrars (including TDRA .aeDA-accredited registrars), cloud providers, and commercial software publishers. TRADEINFY TECHNOLOGY L.L.C. is not liable for upstream outages, registry maintenance windows, or policy revisions imposed by independent third-party providers.',
        ],
      },
    ],
  },
  {
    slug: 'refund-cancellation-policy',
    title: 'Refund & Cancellation Policy',
    subtitle:
      'Clear commercial terms governing cancellations, milestone settlements, and non-refundable third-party procurements.',
    effectiveDate: 'November 2026',
    jurisdiction: 'Dubai, United Arab Emirates',
    sections: [
      {
        heading: 'General Cancellation Framework',
        body: [
          'TRADEINFY TECHNOLOGY L.L.C. structures engagements transparently so clients understand billing milestones prior to commencement. Cancellation requests must be submitted in writing to contact@tradeinfy.com from an authorized corporate representative.',
        ],
      },
      {
        heading: 'Service-Specific Terms',
        body: [
          'Because our practices combine immediate third-party registrations with bespoke advisory and creative execution, refund eligibility depends on service type:',
        ],
        bullets: [
          'Domain Management & Third-Party Licenses: Domain registrations, .ae renewals, SSL certificates, and third-party SaaS software licenses are non-refundable once provisioned with the registry or vendor.',
          'Graphics Design, Content Writing & Software Projects: Retainers or milestone invoices cover allocated creative and engineering hours. Work completed and approved up to the written cancellation date remains billable; unearned advance balances for unstarted phases may be refunded within 14 business days.',
          'Software Training Workshops: Scheduled corporate sessions may be rescheduled once without penalty with at least 5 business days’ prior written notice.',
          'Online & Digital Marketing Retainers: Ongoing monthly management retainers may be cancelled with 30 days’ written notice prior to the next billing cycle. Direct ad-network spend paid to Google, Meta, or LinkedIn is governed by those platforms’ policies.',
        ],
      },
      {
        heading: 'Refund Processing',
        body: [
          'Approved refunds are returned exclusively via the original corporate payment channel (bank transfer or card settlement) in AED or the invoiced currency, subject to UAE banking settlement timelines.',
        ],
      },
    ],
  },
  {
    slug: 'copyright-information',
    title: 'Copyright Information',
    subtitle:
      'Intellectual property ownership, brand protection, and licensing under UAE Federal Decree-Law No. 38 of 2021.',
    effectiveDate: 'November 2026',
    jurisdiction: 'Dubai, United Arab Emirates',
    sections: [
      {
        heading: 'Ownership of Website Content',
        body: [
          'All trademarks, the TRADEINFY TECHNOLOGY L.L.C. corporate logo, editorial copy, Swiss visual layouts, bespoke photography, technical diagrams, and source architecture displayed on this website are the intellectual property of TRADEINFY TECHNOLOGY L.L.C. and are protected under UAE Federal Decree-Law No. 38 of 2021 on Copyright and Neighbouring Rights as well as international copyright treaties.',
        ],
      },
      {
        heading: 'Permitted & Prohibited Use',
        body: [
          'Visitors may view and reference content on this website strictly for evaluating commercial services with TRADEINFY TECHNOLOGY L.L.C.',
          'No portion of this website—including visual assets, brand identity marks, or service text—may be reproduced, mirrored, scraped, redistributed, or repurposed for commercial use without prior written authorization from TRADEINFY TECHNOLOGY L.L.C.',
        ],
      },
      {
        heading: 'Client Deliverables & Intellectual Property Transfer',
        body: [
          'For commissioned Graphics Design, Content Writing, and custom Software deliverables, ownership rights transfer to the client upon full settlement of applicable invoices in accordance with the executed Statement of Work, excluding pre-existing proprietary frameworks, fonts, or licensed stock components.',
        ],
      },
      {
        heading: 'Intellectual Property Inquiries',
        body: [
          'To request licensing permission or report suspected unauthorized use of TRADEINFY TECHNOLOGY L.L.C. intellectual property, please contact contact@tradeinfy.com.',
        ],
      },
    ],
  },
];
