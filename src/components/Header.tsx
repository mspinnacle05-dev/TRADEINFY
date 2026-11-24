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
    <header className="sticky top-0 z-50 border-b border-[#E2E5EE] bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 lg:h-24 max-w-[1280px] items-center justify-between gap-8 px-6 lg:px-10">
        {/* Zone 1: Brand Logo */}
        <button
          type="button"
          onClick={() => navigateAndClose('home')}
          className="flex items-center shrink-0 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F26513]"
          aria-label={`${COMPANY_INFO.legalName} — Home`}
        >
          <img
            src={COMPANY_INFO.logoUrl}
            alt={COMPANY_INFO.legalName}
            referrerPolicy="no-referrer"
            className="h-16 lg:h-20 w-auto object-contain mix-blend-multiply"
          />
        </button>

        {/* Zone 2: Primary Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4E556B]"
        >
          <button
            type="button"
            onClick={() => navigateAndClose('home')}
            className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#0D1545] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F26513] ${
              currentRoute === 'home' ? 'text-[#0D1545] font-semibold' : ''
            }`}
          >
            Home
            {currentRoute === 'home' && (
              <span className="absolute inset-x-0 -bottom-0.5 h-[2px] bg-[#F26513]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => navigateAndClose('about')}
            className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#0D1545] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F26513] ${
              currentRoute === 'about' ? 'text-[#0D1545] font-semibold' : ''
            }`}
          >
            About Us
            {currentRoute === 'about' && (
              <span className="absolute inset-x-0 -bottom-0.5 h-[2px] bg-[#F26513]" />
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
              className={`relative flex items-center gap-1.5 py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#0D1545] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F26513] ${
                isServiceActive ? 'text-[#0D1545] font-semibold' : ''
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-150 ${
                  dropdownOpen ? 'rotate-180 text-[#F26513]' : ''
                }`}
              />
              {isServiceActive && (
                <span className="absolute inset-x-0 -bottom-0.5 h-[2px] bg-[#F26513]" />
              )}
            </button>

            {dropdownOpen && (
              <div
                role="menu"
                aria-label="Services Menu"
                className="absolute left-1/2 top-full mt-3 w-[430px] -translate-x-1/2 border border-[#E2E5EE] bg-white shadow-[0_20px_50px_rgba(13,21,69,0.12)]"
              >
                <div className="flex items-center justify-between border-b border-[#E2E5EE] bg-[#F8F9FB] px-5 py-3.5">
                  <span className="text-xs font-medium tracking-wide text-[#4E556B]">
                    UAE Practice Directory
                  </span>
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => navigateAndClose('services')}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#F26513] hover:text-[#0D1545] whitespace-nowrap shrink-0"
                  >
                    <span>All Services Overview</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="divide-y divide-[#EFF1F6]">
                  {SERVICES.map((service) => {
                    const active = currentRoute === service.slug;
                    return (
                      <button
                        key={service.slug}
                        type="button"
                        role="menuitem"
                        onClick={() => navigateAndClose(service.slug)}
                        className={`group flex w-full items-start justify-between gap-4 px-5 py-3.5 text-left transition-colors duration-150 hover:bg-[#F8F9FB] ${
                          active ? 'bg-[#FFF6F0]' : ''
                        }`}
                      >
                        <div className="flex items-start gap-3 min-w-0">
                          <span
                            className={`mt-1.5 h-2 w-2 shrink-0 transition-colors ${
                              active
                                ? 'bg-[#F26513]'
                                : 'bg-[#0D1545]/30 group-hover:bg-[#F26513]'
                            }`}
                          />
                          <div className="min-w-0">
                            <p
                              className={`text-sm font-medium transition-colors group-hover:text-[#F26513] ${
                                active ? 'text-[#F26513] font-semibold' : 'text-[#0D1545]'
                              }`}
                            >
                              {service.title}
                            </p>
                            <p className="mt-0.5 truncate text-xs text-[#4E556B]">
                              {service.category}
                            </p>
                          </div>
                        </div>
                        <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#94A3B8] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#F26513]" />
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
            className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#0D1545] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F26513] ${
              currentRoute === 'contact' ? 'text-[#0D1545] font-semibold' : ''
            }`}
          >
            Contact Us
            {currentRoute === 'contact' && (
              <span className="absolute inset-x-0 -bottom-0.5 h-[2px] bg-[#F26513]" />
            )}
          </button>
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => navigateAndClose('contact')}
            className="hidden md:inline-flex items-center justify-center bg-[#0D1545] px-5 py-2.5 text-xs font-semibold tracking-wide text-white transition-colors duration-150 hover:bg-[#F26513] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F26513] whitespace-nowrap shrink-0"
          >
            Schedule Consultation
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center border border-[#E2E5EE] text-[#0D1545] md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-[#E2E5EE] bg-white md:hidden">
          <nav aria-label="Mobile Navigation" className="divide-y divide-[#E2E5EE] px-6 py-4">
            <button
              type="button"
              onClick={() => navigateAndClose('home')}
              className={`flex w-full items-center justify-between py-3.5 text-left text-sm font-medium ${
                currentRoute === 'home' ? 'text-[#F26513] font-semibold' : 'text-[#0D1545]'
              }`}
            >
              <span>Home</span>
            </button>

            <button
              type="button"
              onClick={() => navigateAndClose('about')}
              className={`flex w-full items-center justify-between py-3.5 text-left text-sm font-medium ${
                currentRoute === 'about' ? 'text-[#F26513] font-semibold' : 'text-[#0D1545]'
              }`}
            >
              <span>About Us</span>
            </button>

            <div className="py-2">
              <button
                type="button"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                className="flex w-full items-center justify-between py-2 text-left text-sm font-medium text-[#0D1545]"
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-150 ${
                    mobileServicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="mt-1 space-y-1 border-l border-[#E2E5EE] pl-4 pb-2">
                  <button
                    type="button"
                    onClick={() => navigateAndClose('services')}
                    className={`block w-full py-2 text-left text-xs font-semibold ${
                      currentRoute === 'services' ? 'text-[#F26513]' : 'text-[#0D1545]'
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
                          ? 'font-semibold text-[#F26513]'
                          : 'text-[#4E556B]'
                      }`}
                    >
                      <span className="h-1.5 w-1.5 shrink-0 bg-[#F26513]" />
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
                currentRoute === 'contact' ? 'text-[#F26513] font-semibold' : 'text-[#0D1545]'
              }`}
            >
              <span>Contact Us</span>
            </button>

            <div className="pt-4 pb-2">
              <button
                type="button"
                onClick={() => navigateAndClose('contact')}
                className="w-full bg-[#0D1545] px-5 py-3 text-center text-xs font-semibold text-white"
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
