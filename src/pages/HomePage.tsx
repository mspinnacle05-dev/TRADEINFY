import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { EditorialImage } from '../components/EditorialImage';
import {
  ABOUT_PRINCIPLES,
  COMPANY_INFO,
  FIRM_MILESTONES,
  SERVICES,
  SITE_IMAGES,
  UAE_GOVERNANCE_PILLARS,
  type RouteId,
  type ServiceSlug,
} from '../data/siteData';

interface HomePageProps {
  onNavigate: (route: RouteId, preselectedService?: ServiceSlug) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      {/* 1. Asymmetric Swiss Editorial Hero */}
      <section className="swiss-grid-bg border-b border-[#E2E5EE] bg-white">
        <div className="mx-auto max-w-[1280px] px-6 pt-12 pb-14 lg:px-10 lg:pt-20 lg:pb-20">
          <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-10">
            {/* Left Editorial Thesis */}
            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                <p className="text-xs font-semibold tracking-widest text-[#F26513] uppercase">
                  {COMPANY_INFO.legalName} · United Arab Emirates
                </p>

                <h1 className="font-serif mt-5 text-[clamp(2.5rem,4.4vw,4.15rem)] leading-[1.06] font-medium tracking-tight text-[#0D1545]">
                  Precision digital systems, editorial authority, and compliant UAE market growth.
                </h1>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4E556B] lg:text-lg">
                  Built for organizations across Dubai and the wider Emirates, we unite enterprise software stewardship, sovereign .ae domain custody, executive design, workforce training, and measurable digital marketing.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-6">
                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center gap-2.5 bg-[#0D1545] px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#F26513] whitespace-nowrap shrink-0"
                  >
                    <span>Schedule Executive Briefing</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate('services')}
                    className="inline-flex items-center gap-1.5 border-b border-[#0D1545] pb-0.5 text-sm font-semibold text-[#0D1545] transition-colors duration-150 hover:border-[#F26513] hover:text-[#F26513] whitespace-nowrap shrink-0"
                  >
                    <span>Explore All Practices</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="mt-12 border-t border-[#E2E5EE] pt-6 text-xs text-[#4E556B] flex flex-wrap items-center gap-x-4 gap-y-2">
                <span>Software Management</span>
                <span aria-hidden="true">·</span>
                <span>Domain Management</span>
                <span aria-hidden="true">·</span>
                <span>Graphics / Content Writing</span>
                <span aria-hidden="true">·</span>
                <span>Online Marketing</span>
                <span aria-hidden="true">·</span>
                <span>Software Training</span>
                <span aria-hidden="true">·</span>
                <span>Digital Marketing</span>
              </div>
            </div>

            {/* Right Architectural Visual */}
            <div className="lg:col-span-5">
              <EditorialImage
                src={SITE_IMAGES.hero}
                alt="TradeInfy Technology L.L.C. Dubai headquarters and strategy studio"
                fallbackVariant="hero"
                className="h-full min-h-[340px] lg:min-h-[440px]"
              />
            </div>
          </div>

          {/* Full-width 4-Column Operational Benchmark Strip */}
          <div className="mt-14 grid grid-cols-1 divide-y divide-[#E2E5EE] border border-[#E2E5EE] bg-[#F8F9FB] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
            {FIRM_MILESTONES.map((item) => (
              <div key={item.unit} className="p-6 lg:p-7">
                <p className="font-mono text-2xl font-medium tabular-nums text-[#0D1545] lg:text-3xl">
                  {item.metric}
                </p>
                <p className="mt-1.5 text-sm font-semibold text-[#F26513]">{item.unit}</p>
                <p className="mt-1 text-xs leading-relaxed text-[#4E556B]">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Curated Services Directory */}
      <section className="border-b border-[#E2E5EE] bg-[#F8F9FB] py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="flex flex-col justify-between gap-6 border-b border-[#E2E5EE] pb-10 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-widest text-[#F26513] uppercase">
                Core Practice Directory
              </p>
              <h2 className="font-serif mt-3 text-3xl font-medium tracking-tight text-[#0D1545] lg:text-4xl">
                Specialized corporate disciplines engineered to operate as one unified system.
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D1545] hover:text-[#F26513] transition-colors whitespace-nowrap shrink-0"
            >
              <span>View Full Services Matrix</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Swiss Grid of Services */}
          <div className="mt-12 grid grid-cols-1 gap-px bg-[#E2E5EE] border border-[#E2E5EE] md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <button
                key={service.slug}
                type="button"
                onClick={() => onNavigate(service.slug)}
                className="group flex flex-col justify-between bg-white p-8 text-left transition-colors duration-150 hover:bg-[#FFF9F5] focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#F26513]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-wide text-[#F26513]">
                      {service.category}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-[#94A3B8] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#F26513]" />
                  </div>

                  <h3 className="font-serif mt-4 text-2xl font-medium text-[#0D1545] group-hover:text-[#F26513] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#4E556B]">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="mt-8 border-t border-[#EFF1F6] pt-4 flex items-center justify-between text-xs font-semibold text-[#0D1545]">
                  <span className="group-hover:text-[#F26513] transition-colors">
                    Explore Practice
                  </span>
                  <span className="font-mono tabular-nums text-[#0D1545]">
                    {service.metrics[0].value}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. UAE Regulatory Governance & Standards */}
      <section className="border-b border-[#E2E5EE] bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5 space-y-5">
              <p className="text-xs font-semibold tracking-widest text-[#F26513] uppercase">
                UAE Regulatory Alignment
              </p>
              <h2 className="font-serif text-3xl font-medium leading-tight text-[#0D1545] lg:text-4xl">
                Designed from the ground up for UAE digital governance.
              </h2>
              <p className="text-sm leading-relaxed text-[#4E556B]">
                Operating in the United Arab Emirates demands strict respect for national regulatory frameworks. Every software deployment, .ae domain zone, editorial campaign, and marketing funnel we deliver is structured to protect your corporate standing.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 divide-y divide-[#E2E5EE] border border-[#E2E5EE] bg-[#F8F9FB]">
              {UAE_GOVERNANCE_PILLARS.map((pillar) => (
                <div key={pillar.authority} className="p-7 flex flex-col justify-between gap-2 sm:flex-row sm:items-start sm:gap-8">
                  <div className="sm:w-5/12">
                    <p className="text-sm font-semibold text-[#0D1545]">{pillar.authority}</p>
                    <p className="mt-1 text-xs font-medium text-[#F26513]">{pillar.scope}</p>
                  </div>
                  <p className="sm:w-7/12 text-sm leading-relaxed text-[#4E556B]">
                    {pillar.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Institutional Principles */}
      <section className="border-b border-[#E2E5EE] bg-[#F8F9FB] py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5 space-y-6">
              <p className="text-xs font-semibold tracking-widest text-[#F26513] uppercase">
                The TradeInfy Standard
              </p>
              <h2 className="font-serif text-3xl font-medium leading-tight text-[#0D1545] lg:text-4xl">
                Where technical stewardship meets disciplined commercial narrative.
              </h2>
              <p className="text-sm leading-relaxed text-[#4E556B]">
                Most agencies separate infrastructure from growth. Software vendors ignore brand positioning, while marketing firms overlook domain security and team readiness. TRADEINFY TECHNOLOGY L.L.C. eliminates that divide.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 border border-[#0D1545] bg-white px-5 py-2.5 text-xs font-semibold text-[#0D1545] transition-colors hover:bg-[#0D1545] hover:text-white whitespace-nowrap shrink-0"
              >
                <span>About Our Firm</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {ABOUT_PRINCIPLES.map((principle) => (
                <div
                  key={principle.title}
                  className="border border-[#E2E5EE] bg-white p-7"
                >
                  <span className="text-xs font-semibold tracking-wide text-[#F26513] uppercase">
                    {principle.tag}
                  </span>
                  <h3 className="mt-3 text-base font-semibold text-[#0D1545]">
                    {principle.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#4E556B]">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Dark Midnight Navy Architectural Closing Band */}
      <section className="bg-[#0D1545] py-20 text-white lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="text-xs font-semibold tracking-widest text-[#F26513] uppercase">
                Executive Engagement
              </p>
              <h2 className="font-serif mt-3 text-3xl font-medium leading-tight text-white lg:text-5xl">
                Ready to formalize your UAE technology and marketing architecture?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#CBD5E1]">
                Share your priorities across software operations, .ae domain custody, editorial design, workforce training, or digital marketing. Our Dubai consultation desk responds within one business day.
              </p>
            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2.5 bg-[#F26513] px-7 py-4 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#D95408] whitespace-nowrap shrink-0"
              >
                <span>Initiate Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
