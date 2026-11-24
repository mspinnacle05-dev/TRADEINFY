import { ArrowRight, SlidersHorizontal } from 'lucide-react';
import { POLICY_PAGES } from '../data/policyData';
import { COMPANY_INFO, type PolicySlug, type RouteId } from '../data/siteData';

interface PolicyPageProps {
  slug: PolicySlug;
  onNavigate: (route: RouteId) => void;
  onOpenCookieSettings: () => void;
}

export function PolicyPage({
  slug,
  onNavigate,
  onOpenCookieSettings,
}: PolicyPageProps) {
  const doc = POLICY_PAGES.find((p) => p.slug === slug) ?? POLICY_PAGES[0];

  return (
    <div>
      {/* Editorial Legal Header */}
      <section className="swiss-grid-bg border-b border-[#DDE3EE] bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#475569]">
            <span className="font-semibold text-[#0057B8] uppercase tracking-widest">
              Legal &amp; Governance
            </span>
            <span aria-hidden="true">·</span>
            <span>{doc.jurisdiction}</span>
            <span aria-hidden="true">·</span>
            <span>Effective {doc.effectiveDate}</span>
          </div>

          <h1 className="font-serif mt-4 max-w-3xl text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.08] font-medium tracking-tight text-[#061B49]">
            {doc.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#475569]">
            {doc.subtitle}
          </p>
        </div>
      </section>

      {/* Two-Column Swiss Legal Reading Canvas */}
      <section className="bg-[#F7F9FC] py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Sidebar Policy Index */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="border border-[#DDE3EE] bg-white p-6">
                <p className="text-xs font-semibold tracking-wide text-[#061B49] uppercase">
                  Corporate Policies
                </p>
                <nav
                  aria-label="Legal Policy Navigation"
                  className="mt-4 divide-y divide-[#EEF2F7]"
                >
                  {POLICY_PAGES.map((item) => {
                    const active = item.slug === doc.slug;
                    return (
                      <button
                        key={item.slug}
                        type="button"
                        onClick={() => onNavigate(item.slug)}
                        className={`flex w-full items-center justify-between py-3 text-left text-sm transition-colors ${
                          active
                            ? 'font-semibold text-[#0057B8]'
                            : 'text-[#475569] hover:text-[#061B49]'
                        }`}
                      >
                        <span>{item.title}</span>
                        {active && (
                          <span className="h-2 w-2 shrink-0 bg-[#F96A04]" />
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>

              <div className="border border-[#DDE3EE] bg-white p-6">
                <p className="text-xs font-semibold tracking-wide text-[#061B49] uppercase">
                  Legal Inquiries
                </p>
                <p className="mt-2.5 text-sm leading-relaxed text-[#475569]">
                  Questions regarding our policies or UAE regulatory compliance may be directed to{' '}
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="font-medium text-[#0057B8] hover:underline"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#061B49] hover:text-[#F96A04] transition-colors"
                >
                  <span>Contact Executive Desk</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </aside>

            {/* Main Legal Prose */}
            <article className="lg:col-span-8 border border-[#DDE3EE] bg-white p-8 lg:p-12">
              <div className="divide-y divide-[#DDE3EE]">
                {doc.sections.map((section, idx) => (
                  <div
                    key={section.heading}
                    className={idx === 0 ? 'pb-8' : 'py-8'}
                  >
                    <h2 className="font-serif text-2xl font-medium text-[#061B49]">
                      {section.heading}
                    </h2>
                    <div className="mt-4 space-y-4 text-sm leading-[1.8] text-[#334155]">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    {section.bullets && (
                      <ul className="mt-5 space-y-3 border-t border-[#EEF2F7] pt-5">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-3 text-sm leading-relaxed text-[#334155]"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#F96A04]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {doc.slug === 'cookie-policy' && (
                <div className="mt-4 border-t border-[#DDE3EE] pt-8 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-sm text-[#475569]">
                    Need to update or withdraw your current cookie selection?
                  </p>
                  <button
                    type="button"
                    onClick={onOpenCookieSettings}
                    className="inline-flex items-center gap-2 bg-[#061B49] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#0057B8] whitespace-nowrap shrink-0"
                  >
                    <SlidersHorizontal className="h-3.5 w-3.5" />
                    <span>Manage Cookie Preferences</span>
                  </button>
                </div>
              )}
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
