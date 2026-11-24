import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { EditorialImage } from '../components/EditorialImage';
import {
  ABOUT_CONTENT,
  COMPANY_INFO,
  FIRM_MILESTONES,
  SERVICES,
  SITE_IMAGES,
  type RouteId,
  type ServiceSlug,
} from '../data/siteData';

interface AboutPageProps {
  onNavigate: (route: RouteId, preselectedService?: ServiceSlug) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div>
      {/* Editorial Page Masthead */}
      <section className="border-b border-[#E2E5EE] bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12">
            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                <p className="text-xs font-semibold tracking-widest text-[#F26513] uppercase">
                  About Us · {ABOUT_CONTENT.companyHeading}
                </p>
                <h1 className="font-serif mt-4 text-[clamp(2.25rem,4vw,3.65rem)] leading-[1.08] font-medium tracking-tight text-[#0D1545]">
                  {ABOUT_CONTENT.subheading}
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#4E556B] lg:text-lg">
                  {ABOUT_CONTENT.paragraphs[0]}
                </p>
              </div>

              <div className="mt-10 border-t border-[#E2E5EE] pt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {FIRM_MILESTONES.map((item) => (
                  <div key={item.unit}>
                    <p className="font-mono text-2xl font-medium tabular-nums text-[#0D1545]">
                      {item.metric}
                    </p>
                    <p className="mt-1 text-xs font-medium text-[#4E556B]">{item.unit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <EditorialImage
                src={SITE_IMAGES.about}
                alt="TRADEINFY TECHNOLOGY L.L.C. executive consultation studio in Dubai, UAE"
                fallbackVariant="about"
                className="h-full min-h-[320px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Monograph */}
      <section className="border-b border-[#E2E5EE] bg-[#F8F9FB] py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold tracking-widest text-[#F26513] uppercase">
                Company Profile
              </p>
              <h2 className="font-serif mt-3 text-3xl font-medium text-[#0D1545]">
                {ABOUT_CONTENT.companyHeading}
              </h2>
              <p className="mt-3 text-xs leading-relaxed text-[#64748B]">
                {COMPANY_INFO.location}
              </p>
            </div>

            <div className="lg:col-span-8 space-y-6 text-base leading-[1.8] text-[#334155] max-w-3xl">
              <p className="first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-5xl first-letter:font-medium first-letter:leading-none first-letter:text-[#0D1545]">
                {ABOUT_CONTENT.paragraphs[1]}
              </p>
              {ABOUT_CONTENT.paragraphs.slice(2).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Our Commitment */}
      <section className="border-b border-[#E2E5EE] bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-px bg-[#E2E5EE] border border-[#E2E5EE] lg:grid-cols-12">
            {/* Mission & Vision Left */}
            <div className="lg:col-span-6 divide-y divide-[#E2E5EE] bg-white">
              <div className="p-8 lg:p-12">
                <p className="text-xs font-semibold tracking-widest text-[#F26513] uppercase">
                  Purpose
                </p>
                <h2 className="font-serif mt-3 text-3xl font-medium text-[#0D1545]">
                  {ABOUT_CONTENT.missionTitle}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#4E556B]">
                  {ABOUT_CONTENT.missionText}
                </p>
              </div>

              <div className="p-8 lg:p-12 bg-[#F8F9FB]">
                <p className="text-xs font-semibold tracking-widest text-[#F26513] uppercase">
                  Direction
                </p>
                <h2 className="font-serif mt-3 text-3xl font-medium text-[#0D1545]">
                  {ABOUT_CONTENT.visionTitle}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#4E556B]">
                  {ABOUT_CONTENT.visionText}
                </p>
              </div>
            </div>

            {/* Our Commitment Right */}
            <div className="lg:col-span-6 bg-[#0D1545] p-8 text-white lg:p-12 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold tracking-widest text-[#F26513] uppercase">
                  Standards
                </p>
                <h2 className="font-serif mt-3 text-3xl font-medium text-white">
                  {ABOUT_CONTENT.commitmentTitle}
                </h2>

                <ul className="mt-8 divide-y divide-white/15 border-y border-white/15">
                  {ABOUT_CONTENT.commitments.map((item) => (
                    <li key={item} className="flex items-center gap-4 py-4 text-sm text-[#E2E8F0]">
                      <span className="h-2 w-2 shrink-0 bg-[#F26513]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 bg-[#F26513] px-6 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#D95408] whitespace-nowrap shrink-0"
                >
                  <span>Connect With Our Dubai Team</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Cross-Links */}
      <section className="bg-[#F8F9FB] py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="flex flex-col justify-between gap-6 border-b border-[#E2E5EE] pb-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#F26513] uppercase">
                Integrated Capabilities
              </p>
              <h2 className="font-serif mt-2 text-3xl font-medium text-[#0D1545]">
                Explore our specialized services
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 bg-[#0D1545] px-6 py-3 text-xs font-semibold text-white hover:bg-[#F26513] transition-colors whitespace-nowrap shrink-0"
            >
              <span>All Services Overview</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="mt-8 divide-y divide-[#E2E5EE] border border-[#E2E5EE] bg-white">
            {SERVICES.map((service) => (
              <button
                key={service.slug}
                type="button"
                onClick={() => onNavigate(service.slug)}
                className="group flex w-full flex-col justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-[#FFF9F5] sm:flex-row sm:items-center"
              >
                <div className="flex items-center gap-4">
                  <span className="h-2 w-2 shrink-0 bg-[#0D1545] group-hover:bg-[#F26513] transition-colors" />
                  <div>
                    <h3 className="text-base font-semibold text-[#0D1545] group-hover:text-[#F26513] transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-[#4E556B]">{service.category}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0D1545] group-hover:text-[#F26513] whitespace-nowrap shrink-0">
                  <span>View Service Page</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
