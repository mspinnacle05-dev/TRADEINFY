import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { COMPANY_INFO, SERVICES, type RouteId, type ServiceSlug } from '../data/siteData';

interface HeaderProps {
  currentRoute: RouteId;
  onNavigate: (route: RouteId, preselectedService?: ServiceSlug) => void;
}

const SERVICE_SLUGS: ServiceSlug[] = SERVICES.map((s) => s.slug);

export function Header({ currentRoute, onNavigate }: HeaderProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<number | null>(null);

  const isServiceActive =
    currentRoute === 'services' || SERVICE_SLUGS.includes(currentRoute as ServiceSlug);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDropdownOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = window.setTimeout(() => {
      setDropdownOpen(false);
    }, 140);
  };

  const navigateAndClose = (route: RouteId) => {
    setDropdownOpen(false);
    setMobileOpen(false);
    onNavigate(route);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#DDE3EE] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 lg:h-20 max-w-[1280px] items-center justify-between gap-8 px-6 lg:px-10">
        {/* Zone 1: Brand Logo */}
        <button
          type="button"
          onClick={() => navigateAndClose('home')}
          className="flex items-center shrink-0 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0057B8]"
          aria-label={`${COMPANY_INFO.legalName} — Home`}
        >
          <img
            src={COMPANY_INFO.logoUrl}
            alt={COMPANY_INFO.legalName}
            referrerPolicy="no-referrer"
            className="h-9 lg:h-11 w-auto object-contain"
          />
        </button>

        {/* Zone 2: Primary Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#475569]"
        >
          <button
            type="button"
            onClick={() => navigateAndClose('home')}
            className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#061B49] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0057B8] ${
              currentRoute === 'home' ? 'text-[#061B49] font-semibold' : ''
            }`}
          >
            Home
            {currentRoute === 'home' && (
              <span className="absolute inset-x-0 -bottom-0.5 h-[2px] bg-[#F96A04]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => navigateAndClose('about')}
            className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#061B49] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0057B8] ${
              currentRoute === 'about' ? 'text-[#061B49] font-semibold' : ''
            }`}
          >
            About Us
            {currentRoute === 'about' && (
              <span className="absolute inset-x-0 -bottom-0.5 h-[2px] bg-[#F96A04]" />
            )}
          </button>

          {/* Services Dropdown Tab */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              aria-expanded={dropdownOpen}
              aria-haspopup="menu"
              onClick={() => setDropdownOpen((prev) => !prev)}
              className={`relative flex items-center gap-1.5 py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#061B49] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0057B8] ${
                isServiceActive ? 'text-[#061B49] font-semibold' : ''
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-150 ${
                  dropdownOpen ? 'rotate-180 text-[#0057B8]' : ''
                }`}
              />
              {isServiceActive && (
                <span className="absolute inset-x-0 -bottom-0.5 h-[2px] bg-[#F96A04]" />
              )}
            </button>

            {dropdownOpen && (
              <div
                role="menu"
                aria-label="Services Menu"
                className="absolute left-1/2 top-full mt-3 w-[430px] -translate-x-1/2 border border-[#DDE3EE] bg-white shadow-[0_20px_50px_rgba(6,27,73,0.1)]"
              >
                <div className="flex items-center justify-between border-b border-[#DDE3EE] bg-[#F7F9FC] px-5 py-3.5">
                  <span className="text-xs font-medium tracking-wide text-[#475569]">
                    UAE Practice Directory
                  </span>
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => navigateAndClose('services')}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#0057B8] hover:text-[#F96A04] whitespace-nowrap shrink-0"
                  >
                    <span>All Services Overview</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="divide-y divide-[#EEF2F7]">
                  {SERVICES.map((service) => {
                    const active = currentRoute === service.slug;
                    return (
                      <button
                        key={service.slug}
                        type="button"
                        role="menuitem"
                        onClick={() => navigateAndClose(service.slug)}
                        className={`group flex w-full items-start justify-between gap-4 px-5 py-3.5 text-left transition-colors duration-150 hover:bg-[#F7F9FC] ${
                          active ? 'bg-[#F0F5FC]' : ''
                        }`}
                      >
                        <div className="flex items-start gap-3 min-w-0">
                          <span
                            className={`mt-1.5 h-2 w-2 shrink-0 transition-colors ${
                              active
                                ? 'bg-[#F96A04]'
                                : 'bg-[#0057B8]/40 group-hover:bg-[#F96A04]'
                            }`}
                          />
                          <div className="min-w-0">
                            <p
                              className={`text-sm font-medium transition-colors group-hover:text-[#0057B8] ${
                                active ? 'text-[#0057B8] font-semibold' : 'text-[#061B49]'
                              }`}
                            >
                              {service.title}
                            </p>
                            <p className="mt-0.5 truncate text-xs text-[#475569]">
                              {service.category}
                            </p>
                          </div>
                        </div>
                        <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#94A3B8] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#F96A04]" />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => navigateAndClose('contact')}
            className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#061B49] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0057B8] ${
              currentRoute === 'contact' ? 'text-[#061B49] font-semibold' : ''
            }`}
          >
            Contact Us
            {currentRoute === 'contact' && (
              <span className="absolute inset-x-0 -bottom-0.5 h-[2px] bg-[#F96A04]" />
            )}
          </button>
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => navigateAndClose('contact')}
            className="hidden md:inline-flex items-center justify-center bg-[#061B49] px-5 py-2.5 text-xs font-semibold tracking-wide text-white transition-colors duration-150 hover:bg-[#0057B8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0057B8] whitespace-nowrap shrink-0"
          >
            Schedule Consultation
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center border border-[#DDE3EE] text-[#061B49] md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-[#DDE3EE] bg-white md:hidden">
          <nav aria-label="Mobile Navigation" className="divide-y divide-[#DDE3EE] px-6 py-4">
            <button
              type="button"
              onClick={() => navigateAndClose('home')}
              className={`flex w-full items-center justify-between py-3.5 text-left text-sm font-medium ${
                currentRoute === 'home' ? 'text-[#0057B8] font-semibold' : 'text-[#061B49]'
              }`}
            >
              <span>Home</span>
            </button>

            <button
              type="button"
              onClick={() => navigateAndClose('about')}
              className={`flex w-full items-center justify-between py-3.5 text-left text-sm font-medium ${
                currentRoute === 'about' ? 'text-[#0057B8] font-semibold' : 'text-[#061B49]'
              }`}
            >
              <span>About Us</span>
            </button>

            <div className="py-2">
              <button
                type="button"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className="flex w-full items-center justify-between py-2 text-left text-sm font-medium text-[#061B49]"
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-150 ${
                    mobileServicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="mt-1 space-y-1 border-l border-[#DDE3EE] pl-4 pb-2">
                  <button
                    type="button"
                    onClick={() => navigateAndClose('services')}
                    className={`block w-full py-2 text-left text-xs font-semibold ${
                      currentRoute === 'services' ? 'text-[#F96A04]' : 'text-[#0057B8]'
                    }`}
                  >
                    All Services Overview
                  </button>
                  {SERVICES.map((service) => (
                    <button
                      key={service.slug}
                      type="button"
                      onClick={() => navigateAndClose(service.slug)}
                      className={`flex w-full items-center gap-2.5 py-2 text-left text-xs ${
                        currentRoute === service.slug
                          ? 'font-semibold text-[#061B49]'
                          : 'text-[#475569]'
                      }`}
                    >
                      <span className="h-1.5 w-1.5 shrink-0 bg-[#0057B8]" />
                      <span>{service.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => navigateAndClose('contact')}
              className={`flex w-full items-center justify-between py-3.5 text-left text-sm font-medium ${
                currentRoute === 'contact' ? 'text-[#0057B8] font-semibold' : 'text-[#061B49]'
              }`}
            >
              <span>Contact Us</span>
            </button>

            <div className="pt-4 pb-2">
              <button
                type="button"
                onClick={() => navigateAndClose('contact')}
                className="w-full bg-[#061B49] px-5 py-3 text-center text-xs font-semibold text-white"
              >
                Schedule Consultation
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
