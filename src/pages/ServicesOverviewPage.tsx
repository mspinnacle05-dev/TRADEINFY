import { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { EditorialImage } from '../components/EditorialImage';
import { SERVICES, type RouteId, type ServiceItem, type ServiceSlug } from '../data/siteData';

interface ServicesOverviewPageProps {
  onNavigate: (route: RouteId, preselectedService?: ServiceSlug) => void;
}

type CategoryFilter = 'All' | ServiceItem['category'];

const CATEGORIES: CategoryFilter[] = [
  'All',
  'Technology & Infrastructure',
  'Brand & Editorial',
  'Growth & Capability',
];

export function ServicesOverviewPage({ onNavigate }: ServicesOverviewPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');

  const filteredServices =
    selectedCategory === 'All'
      ? SERVICES
      : SERVICES.filter((service) => service.category === selectedCategory);

  return (
    <div>
      {/* Header Band */}
      <section className="swiss-grid-bg border-b border-[#DDE3EE] bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <p className="text-xs font-semibold tracking-widest text-[#0057B8] uppercase">
            UAE Services Directory
          </p>
          <div className="mt-4 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h1 className="font-serif max-w-3xl text-[clamp(2.25rem,4vw,3.75rem)] leading-[1.08] font-medium tracking-tight text-[#061B49]">
              Integrated practices spanning UAE enterprise systems and strategic growth.
            </h1>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 bg-[#061B49] px-6 py-3.5 text-xs font-semibold text-white transition-colors hover:bg-[#0057B8] whitespace-nowrap shrink-0 self-start lg:self-auto"
            >
              <span>Request Custom Scope</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Interactive Discipline Filter Tabs */}
          <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-[#DDE3EE] pt-8">
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 border ${
                    active
                      ? 'border-[#061B49] bg-[#061B49] text-white'
                      : 'border-[#DDE3EE] bg-white text-[#475569] hover:border-[#061B49] hover:text-[#061B49]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Editorial Catalog Rows */}
      <section className="border-b border-[#DDE3EE] bg-[#F7F9FC] py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] space-y-10 px-6 lg:px-10">
          {filteredServices.map((service) => (
            <article
              key={service.slug}
              className="grid grid-cols-1 items-stretch border border-[#DDE3EE] bg-white lg:grid-cols-12"
            >
              {/* Left Narrative Column */}
              <div className="flex flex-col justify-between p-8 lg:col-span-7 lg:p-10">
                <div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-[#0057B8]">
                    <span className="h-2 w-2 bg-[#F96A04]" />
                    <span>{service.category}</span>
                  </div>

                  <h2 className="font-serif mt-3 text-3xl font-medium text-[#061B49]">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-base font-medium text-[#0057B8]">
                    {service.headline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#475569]">
                    {service.editorialOverview}
                  </p>

                  {/* Key Deliverable Preview */}
                  <div className="mt-6 grid grid-cols-1 gap-3 border-t border-[#DDE3EE] pt-6 sm:grid-cols-2">
                    {service.deliverables.map((item) => (
                      <div key={item.title} className="flex items-start gap-2 text-xs">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#0057B8]" />
                        <p className="font-semibold text-[#061B49]">{item.title}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-[#DDE3EE] pt-6">
                  <button
                    type="button"
                    onClick={() => onNavigate(service.slug)}
                    className="inline-flex items-center gap-2 bg-[#061B49] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#0057B8] whitespace-nowrap shrink-0"
                  >
                    <span>Explore {service.title}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('contact', service.slug)}
                    className="text-xs font-semibold text-[#061B49] hover:text-[#F96A04] transition-colors whitespace-nowrap shrink-0"
                  >
                    Inquire About This Service
                  </button>
                </div>
              </div>

              {/* Right Image & Metrics Column */}
              <div className="flex flex-col justify-between border-t border-[#DDE3EE] bg-[#F7F9FC] p-6 lg:col-span-5 lg:border-t-0 lg:border-l">
                <EditorialImage
                  src={service.imageUrl}
                  alt={service.imageAlt}
                  fallbackVariant={service.slug}
                  className="h-56 w-full lg:h-64"
                />

                <div className="mt-6 grid grid-cols-3 gap-4 border-t border-[#DDE3EE] pt-5">
                  {service.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="font-mono text-lg font-medium tabular-nums text-[#061B49]">
                        {metric.value}
                      </p>
                      <p className="mt-0.5 text-[11px] leading-snug text-[#475569]">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
