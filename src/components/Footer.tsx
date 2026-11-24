import { POLICY_PAGES } from '../data/policyData';
import { COMPANY_INFO, SERVICES, type RouteId } from '../data/siteData';

interface FooterProps {
  onNavigate: (route: RouteId) => void;
  onOpenCookieSettings: () => void;
}

export function Footer({ onNavigate, onOpenCookieSettings }: FooterProps) {
  return (
    <footer className="border-t border-[#DDE3EE] bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-3 space-y-5">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="inline-block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0057B8]"
              aria-label={COMPANY_INFO.legalName}
            >
              <img
                src={COMPANY_INFO.logoUrl}
                alt={COMPANY_INFO.legalName}
                referrerPolicy="no-referrer"
                className="h-10 w-auto object-contain"
              />
            </button>
            <p className="text-sm leading-relaxed text-[#475569]">
              Empowering businesses in the UAE and international markets through reliable technology, creativity, and strategic digital solutions.
            </p>
            <p className="text-xs font-medium text-[#061B49]">
              {COMPANY_INFO.location}
            </p>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-semibold tracking-wide text-[#061B49]">
              Company
            </p>
            <ul className="space-y-2.5 text-sm text-[#475569]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#0057B8] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#0057B8] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#0057B8] transition-colors"
                >
                  Services Overview
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#0057B8] transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-semibold tracking-wide text-[#061B49]">
              Services
            </p>
            <ul className="space-y-2.5 text-sm text-[#475569]">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <button
                    type="button"
                    onClick={() => onNavigate(service.slug)}
                    className="inline-flex items-center gap-2.5 text-left hover:text-[#0057B8] transition-colors"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 bg-[#F96A04]" />
                    <span>{service.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies & Legal (Footer-Only) */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-semibold tracking-wide text-[#061B49]">
              Policies &amp; Legal
            </p>
            <ul className="space-y-2.5 text-sm text-[#475569]">
              {POLICY_PAGES.map((policy) => (
                <li key={policy.slug}>
                  <button
                    type="button"
                    onClick={() => onNavigate(policy.slug)}
                    className="text-left hover:text-[#0057B8] transition-colors"
                  >
                    {policy.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-semibold tracking-wide text-[#061B49]">
              UAE Desk
            </p>
            <div className="space-y-2.5 text-sm text-[#475569]">
              <p>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-[#0057B8] transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </p>
              <p className="tabular-nums">{COMPANY_INFO.phone}</p>
              <p className="text-xs text-[#64748B]">{COMPANY_INFO.hours}</p>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenCookieSettings}
                className="text-xs font-semibold text-[#0057B8] hover:text-[#F96A04] transition-colors"
              >
                Cookie Preferences
              </button>
            </div>
          </div>
        </div>

        {/* Quiet Copyright Bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[#DDE3EE] pt-8 text-xs text-[#64748B] sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.legalName} All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <span>UAE PDPL Aligned</span>
            <span aria-hidden="true">·</span>
            <span>TDRA (.aeDA) Standards</span>
            <span aria-hidden="true">·</span>
            <span>UAE Media Council Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
