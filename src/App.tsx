/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import {
  CookieConsentGate,
  type CookiePreferences,
} from './components/CookieConsentGate';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { POLICY_PAGES } from './data/policyData';
import {
  COMPANY_INFO,
  SERVICES,
  type PolicySlug,
  type RouteId,
  type ServiceSlug,
} from './data/siteData';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { PolicyPage } from './pages/PolicyPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ServicesOverviewPage } from './pages/ServicesOverviewPage';

const SERVICE_SLUGS: ServiceSlug[] = SERVICES.map((s) => s.slug);
const POLICY_SLUGS: PolicySlug[] = POLICY_PAGES.map((p) => p.slug);
const COOKIE_STORAGE_KEY = 'tradeinfy_cookie_consent_v1';

function loadStoredConsent(): CookiePreferences | null {
  try {
    const raw = window.localStorage.getItem(COOKIE_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookiePreferences;
    if (parsed && (parsed.status === 'accepted' || parsed.status === 'rejected')) {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}

function saveConsent(prefs: CookiePreferences) {
  try {
    window.localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    // Ignore storage unavailability
  }
}

function routeFromPath(pathname: string): RouteId {
  const clean = pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
  if (!clean || clean === 'home') return 'home';
  if (clean === 'about' || clean === 'about-us') return 'about';
  if (clean === 'services') return 'services';
  if (clean === 'contact' || clean === 'contact-us') return 'contact';
  if (POLICY_SLUGS.includes(clean as PolicySlug)) {
    return clean as PolicySlug;
  }
  const serviceSlug = clean.replace(/^services\//, '') as ServiceSlug;
  if (SERVICE_SLUGS.includes(serviceSlug)) {
    return serviceSlug;
  }
  return 'home';
}

function pathFromRoute(route: RouteId): string {
  if (route === 'home') return '/';
  if (route === 'about') return '/about';
  if (route === 'services') return '/services';
  if (route === 'contact') return '/contact';
  if (POLICY_SLUGS.includes(route as PolicySlug)) return `/${route}`;
  return `/services/${route}`;
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<RouteId>(() =>
    routeFromPath(window.location.pathname)
  );
  const [preselectedService, setPreselectedService] = useState<ServiceSlug | undefined>(
    undefined
  );

  const [cookiePrefs, setCookiePrefs] = useState<CookiePreferences | null>(() =>
    loadStoredConsent()
  );
  const [manualGateOpen, setManualGateOpen] = useState(false);

  const isConsented = cookiePrefs?.status === 'accepted';
  const isRejected = cookiePrefs?.status === 'rejected';
  const isGateOpen = !isConsented || manualGateOpen;

  const navigate = useCallback(
    (route: RouteId, serviceForContact?: ServiceSlug) => {
      if (!isConsented) return;
      if (serviceForContact) {
        setPreselectedService(serviceForContact);
      }
      setCurrentRoute(route);
      const nextPath = pathFromRoute(route);
      if (window.location.pathname !== nextPath) {
        window.history.pushState({ route }, '', nextPath);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [isConsented]
  );

  useEffect(() => {
    const handlePopState = () => {
      if (!isConsented) return;
      setCurrentRoute(routeFromPath(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [isConsented]);

  useEffect(() => {
    if (currentRoute === 'home') {
      document.title = `${COMPANY_INFO.legalName} — Digital Systems & Strategic Marketing`;
    } else if (currentRoute === 'about') {
      document.title = `About Us — ${COMPANY_INFO.legalName}`;
    } else if (currentRoute === 'services') {
      document.title = `Services — ${COMPANY_INFO.legalName}`;
    } else if (currentRoute === 'contact') {
      document.title = `Contact Us — ${COMPANY_INFO.legalName}`;
    } else if (POLICY_SLUGS.includes(currentRoute as PolicySlug)) {
      const matchedPolicy = POLICY_PAGES.find((p) => p.slug === currentRoute);
      document.title = matchedPolicy
        ? `${matchedPolicy.title} — ${COMPANY_INFO.legalName}`
        : COMPANY_INFO.legalName;
    } else {
      const matched = SERVICES.find((s) => s.slug === currentRoute);
      document.title = matched
        ? `${matched.title} — ${COMPANY_INFO.legalName}`
        : COMPANY_INFO.legalName;
    }
  }, [currentRoute]);

  const handleAcceptAll = () => {
    const next: CookiePreferences = {
      status: 'accepted',
      necessary: true,
      analytics: true,
      marketing: true,
      updatedAt: new Date().toISOString(),
    };
    saveConsent(next);
    setCookiePrefs(next);
    setManualGateOpen(false);
  };

  const handleSaveCustom = (analytics: boolean, marketing: boolean) => {
    const next: CookiePreferences = {
      status: 'accepted',
      necessary: true,
      analytics,
      marketing,
      updatedAt: new Date().toISOString(),
    };
    saveConsent(next);
    setCookiePrefs(next);
    setManualGateOpen(false);
  };

  const handleReject = () => {
    const next: CookiePreferences = {
      status: 'rejected',
      necessary: false,
      analytics: false,
      marketing: false,
      updatedAt: new Date().toISOString(),
    };
    saveConsent(next);
    setCookiePrefs(next);
    setManualGateOpen(true);
  };

  const handleReopenChoices = () => {
    setCookiePrefs(null);
    setManualGateOpen(true);
  };

  const isServiceDetail = SERVICE_SLUGS.includes(currentRoute as ServiceSlug);
  const isPolicyPage = POLICY_SLUGS.includes(currentRoute as PolicySlug);

  return (
    <MotionConfig reducedMotion="user">
      <div
        aria-hidden={isGateOpen}
        inert={isGateOpen || undefined}
        className={`flex min-h-screen flex-col bg-[#F8F9FB] text-[#0D1545] ${
          isGateOpen ? 'h-screen overflow-hidden pointer-events-none select-none' : ''
        }`}
      >
        <Header currentRoute={currentRoute} onNavigate={navigate} />

        <main className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRoute}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              {currentRoute === 'home' && <HomePage onNavigate={navigate} />}
              {currentRoute === 'about' && <AboutPage onNavigate={navigate} />}
              {currentRoute === 'services' && (
                <ServicesOverviewPage onNavigate={navigate} />
              )}
              {isServiceDetail && (
                <ServiceDetailPage
                  slug={currentRoute as ServiceSlug}
                  onNavigate={navigate}
                />
              )}
              {isPolicyPage && (
                <PolicyPage
                  slug={currentRoute as PolicySlug}
                  onNavigate={navigate}
                  onOpenCookieSettings={() => setManualGateOpen(true)}
                />
              )}
              {currentRoute === 'contact' && (
                <ContactPage preselectedService={preselectedService} />
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer
          onNavigate={navigate}
          onOpenCookieSettings={() => setManualGateOpen(true)}
        />
      </div>

      <CookieConsentGate
        isOpen={isGateOpen}
        isRejected={isRejected}
        initialPrefs={cookiePrefs}
        onAcceptAll={handleAcceptAll}
        onSaveCustom={handleSaveCustom}
        onReject={handleReject}
        onReopenChoices={handleReopenChoices}
      />
    </MotionConfig>
  );
}
