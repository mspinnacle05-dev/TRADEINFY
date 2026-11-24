import { useState } from 'react';
import { Lock, ShieldCheck, SlidersHorizontal } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export interface CookiePreferences {
  status: 'accepted' | 'rejected';
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
}

interface CookieConsentGateProps {
  isOpen: boolean;
  isRejected: boolean;
  initialPrefs: CookiePreferences | null;
  onAcceptAll: () => void;
  onSaveCustom: (analytics: boolean, marketing: boolean) => void;
  onReject: () => void;
  onReopenChoices: () => void;
}

export function CookieConsentGate({
  isOpen,
  isRejected,
  initialPrefs,
  onAcceptAll,
  onSaveCustom,
  onReject,
  onReopenChoices,
}: CookieConsentGateProps) {
  const [customizeMode, setCustomizeMode] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(
    initialPrefs?.analytics ?? true
  );
  const [marketingEnabled, setMarketingEnabled] = useState(
    initialPrefs?.marketing ?? false
  );

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-gate-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0D1545]/80 p-4 backdrop-blur-md sm:p-6"
    >
      <div className="w-full max-w-2xl border border-[#E2E5EE] bg-white shadow-[0_32px_80px_rgba(13,21,69,0.35)]">
        {/* Top Brand Bar */}
        <div className="flex items-center justify-between border-b border-[#E2E5EE] bg-[#F8F9FB] px-6 py-4 sm:px-8">
          <img
            src={COMPANY_INFO.logoUrl}
            alt={COMPANY_INFO.legalName}
            referrerPolicy="no-referrer"
            className="h-14 sm:h-16 w-auto object-contain mix-blend-multiply"
          />
          <span className="text-[11px] font-semibold tracking-widest text-[#F26513] uppercase">
            UAE PDPL Consent Gate
          </span>
        </div>

        {isRejected ? (
          /* Locked State when Rejected */
          <div className="p-6 sm:p-8">
            <div className="inline-flex h-10 w-10 items-center justify-center bg-[#0D1545] text-[#F26513]">
              <Lock className="h-5 w-5" />
            </div>

            <h2
              id="cookie-gate-title"
              className="font-serif mt-5 text-3xl font-medium text-[#0D1545]"
            >
              Website Access Locked
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-[#4E556B]">
              You have rejected cookie consent. In compliance with {COMPANY_INFO.legalName}’s security and UAE data-governance standards, navigation, consultation forms, and service pages remain disabled until cookie consent is granted.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-[#E2E5EE] pt-6">
              <button
                type="button"
                onClick={onAcceptAll}
                className="bg-[#F26513] px-6 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#D95408] whitespace-nowrap shrink-0"
              >
                Accept Cookies &amp; Enter Website
              </button>
              <button
                type="button"
                onClick={() => {
                  setCustomizeMode(true);
                  onReopenChoices();
                }}
                className="border border-[#0D1545] bg-white px-5 py-3 text-xs font-semibold text-[#0D1545] transition-colors hover:bg-[#F8F9FB] whitespace-nowrap shrink-0"
              >
                Customize Preferences
              </button>
            </div>
          </div>
        ) : (
          /* Standard Consent Prompt or Customize View */
          <div className="p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[#F26513]" />
              <div>
                <h2
                  id="cookie-gate-title"
                  className="font-serif text-2xl font-medium text-[#0D1545] sm:text-3xl"
                >
                  Cookie &amp; Privacy Consent Required
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-[#4E556B]">
                  Welcome to <span className="font-semibold text-[#0D1545]">{COMPANY_INFO.legalName}</span>. In accordance with UAE Federal Decree-Law No. 45 of 2021 (PDPL), please accept or customize your cookie preferences before accessing our platform. Declining consent restricts access to site functionality.
                </p>
              </div>
            </div>

            {customizeMode && (
              <div className="mt-6 divide-y divide-[#E2E5EE] border border-[#E2E5EE] bg-[#F8F9FB]">
                {/* Strictly Necessary */}
                <div className="flex items-start justify-between gap-4 p-4">
                  <div>
                    <p className="text-xs font-semibold text-[#0D1545]">
                      Strictly Necessary Cookies
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[#4E556B]">
                      Required for navigation state, consent persistence, and secure consultation requests.
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold text-[#F26513] whitespace-nowrap shrink-0">
                    Always Active
                  </span>
                </div>

                {/* Analytics */}
                <label className="flex cursor-pointer items-start justify-between gap-4 p-4">
                  <div>
                    <p className="text-xs font-semibold text-[#0D1545]">
                      Analytics &amp; Performance
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[#4E556B]">
                      Helps us evaluate page speed and improve clarity across our UAE service documentation.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={analyticsEnabled}
                    onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                    className="mt-0.5 h-4 w-4 accent-[#F26513]"
                  />
                </label>

                {/* Marketing */}
                <label className="flex cursor-pointer items-start justify-between gap-4 p-4">
                  <div>
                    <p className="text-xs font-semibold text-[#0D1545]">
                      Marketing &amp; Attribution
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[#4E556B]">
                      Supports campaign measurement across regional UAE business channels.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={marketingEnabled}
                    onChange={(e) => setMarketingEnabled(e.target.checked)}
                    className="mt-0.5 h-4 w-4 accent-[#F26513]"
                  />
                </label>
              </div>
            )}

            <div className="mt-8 flex flex-col-reverse gap-3 border-t border-[#E2E5EE] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={onReject}
                className="border border-[#CBD5E1] bg-white px-5 py-3 text-xs font-semibold text-[#4E556B] transition-colors hover:border-[#0D1545] hover:text-[#0D1545] whitespace-nowrap shrink-0"
              >
                Reject Cookies
              </button>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                {customizeMode ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setCustomizeMode(false)}
                      className="border border-[#E2E5EE] px-4 py-3 text-xs font-semibold text-[#4E556B] hover:text-[#0D1545] whitespace-nowrap shrink-0"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => onSaveCustom(analyticsEnabled, marketingEnabled)}
                      className="bg-[#0D1545] px-6 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#F26513] whitespace-nowrap shrink-0"
                    >
                      Save Preferences &amp; Continue
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => setCustomizeMode(true)}
                    className="inline-flex items-center justify-center gap-2 border border-[#0D1545] bg-white px-5 py-3 text-xs font-semibold text-[#0D1545] transition-colors hover:bg-[#F8F9FB] whitespace-nowrap shrink-0"
                  >
                    <SlidersHorizontal className="h-3.5 w-3.5" />
                    <span>Customize</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={onAcceptAll}
                  className="bg-[#F26513] px-6 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#D95408] whitespace-nowrap shrink-0"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
