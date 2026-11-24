import type { ServiceSlug } from '../data/siteData';

interface ServiceGraphicProps {
  variant: ServiceSlug | 'hero' | 'about';
  className?: string;
}

export function ServiceGraphic({ variant, className = '' }: ServiceGraphicProps) {
  return (
    <div
      className={`relative overflow-hidden border border-[#DDE3EE] bg-white ${className}`}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(6,27,73,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(6,27,73,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {variant === 'hero' && (
        <svg viewBox="0 0 640 520" className="relative h-full w-full" fill="none">
          <rect x="40" y="40" width="560" height="440" stroke="#061B49" strokeWidth="1" strokeOpacity="0.18" />
          <line x1="226" y1="40" x2="226" y2="480" stroke="#061B49" strokeWidth="1" strokeOpacity="0.12" />
          <line x1="413" y1="40" x2="413" y2="480" stroke="#061B49" strokeWidth="1" strokeOpacity="0.12" />
          <line x1="40" y1="186" x2="600" y2="186" stroke="#061B49" strokeWidth="1" strokeOpacity="0.12" />
          <line x1="40" y1="333" x2="600" y2="333" stroke="#061B49" strokeWidth="1" strokeOpacity="0.12" />
          <path d="M110 355 C160 155, 395 95, 520 175" stroke="#F96A04" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M110 355 C235 420, 445 360, 520 175" stroke="#0057B8" strokeWidth="1.5" strokeDasharray="5 5" />
          <rect x="226" y="186" width="187" height="147" fill="#061B49" fillOpacity="0.03" stroke="#061B49" strokeWidth="1.2" />
          <rect x="252" y="212" width="56" height="56" fill="#061B49" />
          <rect x="320" y="212" width="66" height="24" fill="#0057B8" />
          <rect x="320" y="246" width="42" height="22" stroke="#061B49" strokeWidth="1" />
          <rect x="492" y="102" width="18" height="18" fill="#061B49" />
          <rect x="516" y="102" width="12" height="12" fill="#0057B8" />
          <rect x="476" y="126" width="12" height="12" fill="#0057B8" />
          <rect x="498" y="126" width="18" height="18" fill="#F96A04" />
          <text x="56" y="72" fill="#475569" fontSize="11" fontFamily="IBM Plex Mono, monospace" letterSpacing="0.08em">
            TRADEINFY UAE PRACTICE INDEX
          </text>
          <text x="56" y="458" fill="#475569" fontSize="11" fontFamily="IBM Plex Mono, monospace">
            INTEGRATED ENTERPRISE CAPABILITIES
          </text>
        </svg>
      )}

      {variant === 'about' && (
        <svg viewBox="0 0 600 420" className="relative h-full w-full" fill="none">
          <rect x="36" y="36" width="528" height="348" stroke="#061B49" strokeWidth="1" strokeOpacity="0.16" />
          <circle cx="300" cy="210" r="132" stroke="#061B49" strokeWidth="1" strokeOpacity="0.2" />
          <circle cx="300" cy="210" r="92" stroke="#0057B8" strokeWidth="1.5" />
          <circle cx="300" cy="210" r="48" stroke="#F96A04" strokeWidth="2" />
          <line x1="36" y1="210" x2="564" y2="210" stroke="#061B49" strokeWidth="1" strokeOpacity="0.14" />
          <line x1="300" y1="36" x2="300" y2="384" stroke="#061B49" strokeWidth="1" strokeOpacity="0.14" />
          <rect x="292" y="202" width="16" height="16" fill="#061B49" />
          <text x="54" y="64" fill="#475569" fontSize="11" fontFamily="IBM Plex Mono, monospace">
            UAE GOVERNANCE MODEL · PRECISION &amp; CUSTODY
          </text>
        </svg>
      )}

      {variant === 'software-management' && (
        <svg viewBox="0 0 560 360" className="relative h-full w-full" fill="none">
          <rect x="32" y="32" width="496" height="296" stroke="#061B49" strokeWidth="1" strokeOpacity="0.15" />
          <rect x="76" y="74" width="408" height="48" stroke="#061B49" strokeWidth="1.2" fill="#FFFFFF" />
          <rect x="76" y="154" width="408" height="48" stroke="#0057B8" strokeWidth="1.2" fill="#0057B8" fillOpacity="0.04" />
          <rect x="76" y="234" width="408" height="48" stroke="#061B49" strokeWidth="1.2" fill="#061B49" fillOpacity="0.03" />
          <rect x="92" y="90" width="16" height="16" fill="#061B49" />
          <rect x="92" y="170" width="16" height="16" fill="#0057B8" />
          <rect x="92" y="250" width="16" height="16" fill="#F96A04" />
          <text x="124" y="102" fill="#061B49" fontSize="12" fontFamily="IBM Plex Mono, monospace">
            PORTFOLIO &amp; LICENSE GOVERNANCE
          </text>
          <text x="124" y="182" fill="#0057B8" fontSize="12" fontFamily="IBM Plex Mono, monospace">
            RELEASE &amp; PDPL COMPLIANCE
          </text>
          <text x="124" y="262" fill="#061B49" fontSize="12" fontFamily="IBM Plex Mono, monospace">
            PRODUCTION SLA &amp; SECURITY PATCHES
          </text>
        </svg>
      )}

      {variant === 'domain-management' && (
        <svg viewBox="0 0 560 360" className="relative h-full w-full" fill="none">
          <rect x="32" y="32" width="496" height="296" stroke="#061B49" strokeWidth="1" strokeOpacity="0.15" />
          <rect x="200" y="64" width="160" height="44" fill="#061B49" />
          <text x="220" y="90" fill="#FFFFFF" fontSize="12" fontFamily="IBM Plex Mono, monospace">
            TDRA / .AE REGISTRY
          </text>
          <path d="M280 108 V152 M125 152 H435 M125 152 V190 M280 152 V190 M435 152 V190" stroke="#0057B8" strokeWidth="1.5" />
          <rect x="65" y="190" width="120" height="84" stroke="#061B49" strokeWidth="1.2" fill="#FFFFFF" />
          <rect x="220" y="190" width="120" height="84" stroke="#0057B8" strokeWidth="1.2" fill="#FFFFFF" />
          <rect x="375" y="190" width="120" height="84" stroke="#F96A04" strokeWidth="1.4" fill="#FFFFFF" />
          <text x="82" y="224" fill="#061B49" fontSize="11" fontFamily="IBM Plex Mono, monospace">DNSSEC</text>
          <text x="82" y="248" fill="#475569" fontSize="10" fontFamily="IBM Plex Mono, monospace">SIGNED ZONES</text>
          <text x="237" y="224" fill="#0057B8" fontSize="11" fontFamily="IBM Plex Mono, monospace">DMARC / SPF</text>
          <text x="237" y="248" fill="#475569" fontSize="10" fontFamily="IBM Plex Mono, monospace">MAIL TRUST</text>
          <text x="392" y="224" fill="#F96A04" fontSize="11" fontFamily="IBM Plex Mono, monospace">SSL / LOCK</text>
          <text x="392" y="248" fill="#475569" fontSize="10" fontFamily="IBM Plex Mono, monospace">ZERO LAPSE</text>
        </svg>
      )}

      {variant === 'graphics-content-writing' && (
        <svg viewBox="0 0 560 360" className="relative h-full w-full" fill="none">
          <rect x="32" y="32" width="496" height="296" stroke="#061B49" strokeWidth="1" strokeOpacity="0.15" />
          <rect x="68" y="64" width="260" height="232" stroke="#061B49" strokeWidth="1.2" fill="#FFFFFF" />
          <rect x="348" y="64" width="144" height="144" fill="#061B49" />
          <circle cx="420" cy="136" r="44" stroke="#F96A04" strokeWidth="2" />
          <rect x="348" y="224" width="144" height="72" stroke="#0057B8" strokeWidth="1.2" />
          <line x1="92" y1="104" x2="296" y2="104" stroke="#061B49" strokeWidth="3" />
          <line x1="92" y1="128" x2="246" y2="128" stroke="#061B49" strokeWidth="3" />
          <line x1="92" y1="164" x2="300" y2="164" stroke="#475569" strokeWidth="1.2" />
          <line x1="92" y1="184" x2="288" y2="184" stroke="#475569" strokeWidth="1.2" />
          <rect x="92" y="252" width="72" height="18" fill="#F96A04" />
          <text x="364" y="264" fill="#0057B8" fontSize="11" fontFamily="IBM Plex Mono, monospace">
            GRID · TYPE · COPY
          </text>
        </svg>
      )}

      {variant === 'online-marketing' && (
        <svg viewBox="0 0 560 360" className="relative h-full w-full" fill="none">
          <rect x="32" y="32" width="496" height="296" stroke="#061B49" strokeWidth="1" strokeOpacity="0.15" />
          <line x1="76" y1="280" x2="484" y2="280" stroke="#061B49" strokeWidth="1.2" />
          <line x1="76" y1="76" x2="76" y2="280" stroke="#061B49" strokeWidth="1.2" />
          <path d="M76 248 C156 238, 224 194, 304 152 C372 116, 424 94, 480 84" stroke="#0057B8" strokeWidth="2.5" />
          <path d="M76 264 C168 258, 250 226, 336 186 C400 156, 444 134, 480 124" stroke="#F96A04" strokeWidth="1.75" strokeDasharray="4 4" />
          <circle cx="480" cy="84" r="5" fill="#F96A04" />
          <text x="92" y="96" fill="#061B49" fontSize="11" fontFamily="IBM Plex Mono, monospace">
            UAE PIPELINE VELOCITY
          </text>
        </svg>
      )}

      {variant === 'software-training' && (
        <svg viewBox="0 0 560 360" className="relative h-full w-full" fill="none">
          <rect x="32" y="32" width="496" height="296" stroke="#061B49" strokeWidth="1" strokeOpacity="0.15" />
          <rect x="72" y="210" width="90" height="66" stroke="#061B49" strokeWidth="1.2" fill="#FFFFFF" />
          <rect x="180" y="170" width="90" height="106" stroke="#061B49" strokeWidth="1.2" fill="#FFFFFF" />
          <rect x="288" y="130" width="90" height="146" stroke="#0057B8" strokeWidth="1.4" fill="#0057B8" fillOpacity="0.04" />
          <rect x="396" y="86" width="90" height="190" stroke="#F96A04" strokeWidth="1.6" fill="#F96A04" fillOpacity="0.05" />
          <text x="92" y="246" fill="#061B49" fontSize="11" fontFamily="IBM Plex Mono, monospace">AUDIT</text>
          <text x="202" y="206" fill="#061B49" fontSize="11" fontFamily="IBM Plex Mono, monospace">LABS</text>
          <text x="298" y="166" fill="#0057B8" fontSize="11" fontFamily="IBM Plex Mono, monospace">PLAYBOOK</text>
          <text x="410" y="122" fill="#F96A04" fontSize="11" fontFamily="IBM Plex Mono, monospace">MASTERY</text>
        </svg>
      )}

      {variant === 'digital-marketing' && (
        <svg viewBox="0 0 560 360" className="relative h-full w-full" fill="none">
          <rect x="32" y="32" width="496" height="296" stroke="#061B49" strokeWidth="1" strokeOpacity="0.15" />
          <circle cx="280" cy="180" r="108" stroke="#061B49" strokeWidth="1" strokeOpacity="0.22" />
          <circle cx="280" cy="180" r="64" stroke="#0057B8" strokeWidth="1.5" />
          <rect x="248" y="164" width="64" height="32" fill="#061B49" />
          <text x="261" y="184" fill="#FFFFFF" fontSize="11" fontFamily="IBM Plex Mono, monospace">CORE</text>
          <circle cx="280" cy="72" r="7" fill="#F96A04" />
          <circle cx="388" cy="180" r="7" fill="#0057B8" />
          <circle cx="280" cy="288" r="7" fill="#061B49" />
          <circle cx="172" cy="180" r="7" fill="#0057B8" />
          <text x="296" y="76" fill="#061B49" fontSize="11" fontFamily="IBM Plex Mono, monospace">SEO</text>
          <text x="404" y="184" fill="#0057B8" fontSize="11" fontFamily="IBM Plex Mono, monospace">PAID</text>
          <text x="296" y="292" fill="#061B49" fontSize="11" fontFamily="IBM Plex Mono, monospace">CRM</text>
          <text x="110" y="184" fill="#0057B8" fontSize="11" fontFamily="IBM Plex Mono, monospace">BRAND</text>
        </svg>
      )}
    </div>
  );
}
