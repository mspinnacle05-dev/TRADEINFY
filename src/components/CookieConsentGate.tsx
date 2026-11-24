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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#061B49]/80 p-4 backdrop-blur-md sm:p-6"
    >
      <div className="w-full max-w-2xl border border-[#DDE3EE] bg-white shadow-[0_32px_80px_rgba(6,27,73,0.35)]">
        {/* Top Brand Bar */}
        <div className="flex items-center justify-between border-b border-[#DDE3EE] bg-[#F7F9FC] px-6 py-4 sm:px-8">
          <img
            src={COMPANY_INFO.logoUrl}
            alt={COMPANY_INFO.legalName}
            referrerPolicy="no-referrer"
            className="h-8 w-auto object-contain"
          />
          <span className="text-[11px] font-semibold tracking-widest text-[#0057B8] uppercase">
            UAE PDPL Consent Gate
          </span>
        </div>

        {isRejected ? (
          /* Locked State when Rejected */
          <div className="p-6 sm:p-8">
            <div className="inline-flex h-10 w-10 items-center justify-center bg-[#061B49] text-[#F96A04]">
              <Lock className="h-5 w-5" />
            </div>

            <h2
              id="cookie-gate-title"
              className="font-serif mt-5 text-3xl font-medium text-[#061B49]"
            >
              Website Access Locked
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-[#475569]">
              You have rejected cookie consent. In compliance with {COMPANY_INFO.legalName}’s security and UAE data-governance standards, navigation, consultation forms, and service pages remain disabled until cookie consent is granted.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-[#DDE3EE] pt-6">
              <button
                type="button"
                onClick={onAcceptAll}
                className="bg-[#061B49] px-6 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#0057B8] whitespace-nowrap shrink-0"
              >
                Accept Cookies &amp; Enter Website
              </button>
              <button
                type="button"
                onClick={() => {
                  setCustomizeMode(true);
                  onReopenChoices();
                }}
                className="border border-[#061B49] bg-white px-5 py-3 text-xs font-semibold text-[#061B49] transition-colors hover:bg-[#F7F9FC] whitespace-nowrap shrink-0"
              >
                Customize Preferences
              </button>
            </div>
          </div>
        ) : (
          /* Standard Consent Prompt or Customize View */
          <div className="p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[#0057B8]" />
              <div>
                <h2
                  id="cookie-gate-title"
                  className="font-serif text-2xl font-medium text-[#061B49] sm:text-3xl"
                >
                  Cookie &amp; Privacy Consent Required
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-[#475569]">
                  Welcome to <span className="font-semibold text-[#061B49]">{COMPANY_INFO.legalName}</span>. In accordance with UAE Federal Decree-Law No. 45 of 2021 (PDPL), please accept or customize your cookie preferences before accessing our platform. Declining consent restricts access to site functionality.
                </p>
              </div>
            </div>

            {customizeMode && (
              <div className="mt-6 divide-y divide-[#DDE3EE] border border-[#DDE3EE] bg-[#F7F9FC]">
                {/* Strictly Necessary */}
                <div className="flex items-start justify-between gap-4 p-4">
                  <div>
                    <p className="text-xs font-semibold text-[#061B49]">
                      Strictly Necessary Cookies
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[#475569]">
                      Required for navigation state, consent persistence, and secure consultation requests.
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold text-[#0057B8] whitespace-nowrap shrink-0">
                    Always Active
                  </span>
                </div>

                {/* Analytics */}
                <label className="flex cursor-pointer items-start justify-between gap-4 p-4">
                  <div>
                    <p className="text-xs font-semibold text-[#061B49]">
                      Analytics &amp; Performance
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[#475569]">
                      Helps us evaluate page speed and improve clarity across our UAE service documentation.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={analyticsEnabled}
                    onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                    className="mt-0.5 h-4 w-4 accent-[#0057B8]"
                  />
                </label>

                {/* Marketing */}
                <label className="flex cursor-pointer items-start justify-between gap-4 p-4">
                  <div>
                    <p className="text-xs font-semibold text-[#061B49]">
                      Marketing &amp; Attribution
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[#475569]">
                      Supports campaign measurement across regional UAE business channels.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={marketingEnabled}
                    onChange={(e) => setMarketingEnabled(e.target.checked)}
                    className="mt-0.5 h-4 w-4 accent-[#0057B8]"
                  />
                </label>
              </div>
            )}

            <div className="mt-8 flex flex-col-reverse gap-3 border-t border-[#DDE3EE] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={onReject}
                className="border border-[#CBD5E1] bg-white px-5 py-3 text-xs font-semibold text-[#475569] transition-colors hover:border-[#061B49] hover:text-[#061B49] whitespace-nowrap shrink-0"
              >
                Reject Cookies
              </button>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                {customizeMode ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setCustomizeMode(false)}
                      className="border border-[#DDE3EE] px-4 py-3 text-xs font-semibold text-[#475569] hover:text-[#061B49] whitespace-nowrap shrink-0"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => onSaveCustom(analyticsEnabled, marketingEnabled)}
                      className="bg-[#0057B8] px-6 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#061B49] whitespace-nowrap shrink-0"
                    >
                      Save Preferences &amp; Continue
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => setCustomizeMode(true)}
                    className="inline-flex items-center justify-center gap-2 border border-[#061B49] bg-white px-5 py-3 text-xs font-semibold text-[#061B49] transition-colors hover:bg-[#F7F9FC] whitespace-nowrap shrink-0"
                  >
                    <SlidersHorizontal className="h-3.5 w-3.5" />
                    <span>Customize</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={onAcceptAll}
                  className="bg-[#F96A04] px-6 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#E05C00] whitespace-nowrap shrink-0"
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
