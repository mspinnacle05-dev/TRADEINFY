import { useState } from 'react';
import { ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';
import { EditorialImage } from '../components/EditorialImage';
import { SERVICES, type RouteId, type ServiceSlug } from '../data/siteData';

interface ServiceDetailPageProps {
  slug: ServiceSlug;
  onNavigate: (route: RouteId, preselectedService?: ServiceSlug) => void;
}

export function ServiceDetailPage({ slug, onNavigate }: ServiceDetailPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const currentIndex = SERVICES.findIndex((s) => s.slug === slug);
  const service = SERVICES[currentIndex] ?? SERVICES[0];
  const prevService = SERVICES[(currentIndex - 1 + SERVICES.length) % SERVICES.length];
  const nextService = SERVICES[(currentIndex + 1) % SERVICES.length];

  return (
    <div>
      {/* Breadcrumb & Practice Bar */}
      <div className="border-b border-[#E2E5EE] bg-[#F8F9FB]">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 px-6 py-3.5 text-xs lg:px-10">
          <div className="flex items-center gap-2.5 text-[#4E556B]">
            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="font-semibold text-[#0D1545] hover:text-[#F26513] transition-colors"
            >
              Services
            </button>
            <span aria-hidden="true">/</span>
            <span className="font-semibold text-[#F26513]">{service.title}</span>
          </div>

          <span className="text-[#4E556B]">{service.category}</span>
        </div>
      </div>

      {/* Hero Split */}
      <section className="swiss-grid-bg border-b border-[#E2E5EE] bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12">
            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                <p className="text-xs font-semibold tracking-widest text-[#F26513] uppercase">
                  {service.category} · UAE Practice
                </p>
                <h1 className="font-serif mt-4 text-[clamp(2.25rem,4vw,3.75rem)] leading-[1.08] font-medium tracking-tight text-[#0D1545]">
                  {service.title}
                </h1>
                <p className="mt-4 text-lg font-medium leading-snug text-[#0D1545]/80">
                  {service.headline}
                </p>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#4E556B]">
                  {service.editorialOverview}
                </p>

                <div className="mt-6 border border-[#E2E5EE] bg-[#F8F9FB] px-5 py-4 text-xs leading-relaxed text-[#0D1545]">
                  <span className="font-semibold text-[#F26513] uppercase tracking-wide mr-2">
                    UAE Standard:
                  </span>
                  {service.uaeComplianceNote}
                </div>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-5">
                <button
                  type="button"
                  onClick={() => onNavigate('contact', service.slug)}
                  className="inline-flex items-center gap-2.5 bg-[#0D1545] px-6 py-3.5 text-xs font-semibold text-white transition-colors hover:bg-[#F26513] whitespace-nowrap shrink-0"
                >
                  <span>Request {service.title} Proposal</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="text-xs font-semibold text-[#0D1545] hover:text-[#F26513] transition-colors whitespace-nowrap shrink-0"
                >
                  View All Services
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <EditorialImage
                src={service.imageUrl}
                alt={service.imageAlt}
                fallbackVariant={service.slug}
                caption={service.imageCaption}
                className="h-full min-h-[300px]"
              />
            </div>
          </div>

          {/* 3-Column Benchmark Proof Strip */}
          <div className="mt-14 grid grid-cols-1 divide-y divide-[#E2E5EE] border border-[#E2E5EE] bg-[#F8F9FB] md:grid-cols-3 md:divide-y-0 md:divide-x">
            {service.metrics.map((metric) => (
              <div key={metric.label} className="p-6 lg:p-7">
                <p className="font-mono text-2xl font-medium tabular-nums text-[#0D1545] lg:text-3xl">
                  {metric.value}
                </p>
                <p className="mt-1.5 text-sm font-semibold text-[#F26513]">{metric.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-[#4E556B]">{metric.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables & Scope Matrix */}
      <section className="border-b border-[#E2E5EE] bg-[#F8F9FB] py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4 space-y-4">
              <p className="text-xs font-semibold tracking-widest text-[#F26513] uppercase">
                Deliverables &amp; Scope
              </p>
              <h2 className="font-serif text-3xl font-medium text-[#0D1545]">
                Structured execution tailored to UAE corporate standards.
              </h2>
              <p className="text-sm leading-relaxed text-[#4E556B]">
                {service.strategicOutcome}
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 gap-px bg-[#E2E5EE] border border-[#E2E5EE] sm:grid-cols-2">
              {service.deliverables.map((item) => (
                <div key={item.title} className="bg-white p-7 lg:p-8">
                  <span className="inline-block h-2 w-2 bg-[#F26513]" />
                  <h3 className="mt-3 text-base font-semibold text-[#0D1545]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#4E556B]">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Cadence */}
      <section className="border-b border-[#E2E5EE] bg-white py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest text-[#F26513] uppercase">
              Delivery Cadence
            </p>
            <h2 className="font-serif mt-3 text-3xl font-medium text-[#0D1545]">
              Structured engagement architecture.
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 divide-y divide-[#E2E5EE] border border-[#E2E5EE] md:grid-cols-4 md:divide-y-0 md:divide-x">
            {service.methodology.map((phase) => (
              <div key={phase.stage} className="p-7 bg-[#F8F9FB]">
                <span className="text-xs font-semibold tracking-wide text-[#F26513] uppercase">
                  {phase.stage}
                </span>
                <h3 className="font-serif mt-3 text-xl font-medium text-[#0D1545]">
                  {phase.name}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#4E556B]">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Scope Questions (FAQ) */}
      <section className="border-b border-[#E2E5EE] bg-[#F8F9FB] py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold tracking-widest text-[#F26513] uppercase">
                Engagement Clarity
              </p>
              <h2 className="font-serif mt-3 text-3xl font-medium text-[#0D1545]">
                Common operational questions.
              </h2>
            </div>

            <div className="lg:col-span-8 divide-y divide-[#E2E5EE] border border-[#E2E5EE] bg-white">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={faq.question}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-[#F8F9FB]"
                    >
                      <span className="text-sm font-semibold text-[#0D1545]">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-[#F26513] transition-transform duration-150 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="border-t border-[#EFF1F6] bg-[#F8F9FB] px-6 py-4 text-sm leading-relaxed text-[#4E556B]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Seamless Prev / Next Practice Navigation */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-12 lg:px-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => {
                setOpenFaqIndex(0);
                onNavigate(prevService.slug);
              }}
              className="group flex items-center justify-between border border-[#E2E5EE] p-6 text-left transition-colors hover:border-[#0D1545] hover:bg-[#FFF9F5]"
            >
              <div>
                <p className="text-xs text-[#64748B]">Previous Service</p>
                <p className="font-serif mt-1 text-xl font-medium text-[#0D1545] group-hover:text-[#F26513]">
                  {prevService.title}
                </p>
              </div>
              <ArrowLeft className="h-4 w-4 text-[#4E556B] group-hover:-translate-x-1 transition-transform" />
            </button>

            <button
              type="button"
              onClick={() => {
                setOpenFaqIndex(0);
                onNavigate(nextService.slug);
              }}
              className="group flex items-center justify-between border border-[#E2E5EE] p-6 text-left transition-colors hover:border-[#0D1545] hover:bg-[#FFF9F5]"
            >
              <div>
                <p className="text-xs text-[#64748B]">Next Service</p>
                <p className="font-serif mt-1 text-xl font-medium text-[#0D1545] group-hover:text-[#F26513]">
                  {nextService.title}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-[#4E556B] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
