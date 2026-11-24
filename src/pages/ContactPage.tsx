import { useEffect, useState, type FormEvent } from 'react';
import { Check, Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY_INFO, SERVICES, type ServiceSlug } from '../data/siteData';

interface ContactPageProps {
  preselectedService?: ServiceSlug;
}

interface FormState {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

const CONSULTATION_STEPS = [
  {
    label: 'Brief Review',
    detail: 'Alignment on your UAE operational, compliance, or marketing objectives.',
  },
  {
    label: 'Discovery Call',
    detail: 'Focused 30-minute consultation with the relevant practice specialist.',
  },
  {
    label: 'Written Scope',
    detail: 'Structured deliverables schedule, timeline, and transparent commercial proposal.',
  },
];

export function ContactPage({ preselectedService }: ContactPageProps) {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    service: preselectedService ?? 'software-management',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setForm((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (!form.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email.trim())) {
      nextErrors.email = 'Please provide a valid corporate or personal email address.';
    }
    if (form.message.trim().length < 12) {
      nextErrors.message =
        'Please share a brief overview of your requirements (at least 12 characters).';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const selectedServiceObj = SERVICES.find((s) => s.slug === form.service);

  return (
    <div>
      {/* Header Band */}
      <section className="swiss-grid-bg border-b border-[#DDE3EE] bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <p className="text-xs font-semibold tracking-widest text-[#0057B8] uppercase">
            Contact Us · UAE Executive Desk
          </p>
          <h1 className="font-serif mt-4 max-w-3xl text-[clamp(2.25rem,4vw,3.75rem)] leading-[1.08] font-medium tracking-tight text-[#061B49]">
            Begin a structured conversation with {COMPANY_INFO.shortName}.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#475569]">
            Whether your priority is software stewardship, .ae domain governance, corporate editorial design, workforce training, or UAE digital marketing, our consultation desk responds within one business day.
          </p>
        </div>
      </section>

      {/* Split Editorial Contact Layout */}
      <section className="bg-[#F7F9FC] py-16 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Direct Channels Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="border border-[#DDE3EE] bg-white p-8">
                <p className="text-xs font-semibold tracking-wide text-[#061B49] uppercase">
                  UAE Corporate Desk
                </p>

                <div className="mt-6 space-y-6 text-sm text-[#475569]">
                  <div className="flex items-start gap-3.5">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#0057B8]" />
                    <div>
                      <p className="text-xs text-[#64748B]">Email</p>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="mt-0.5 block font-medium text-[#061B49] hover:text-[#0057B8]"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#0057B8]" />
                    <div>
                      <p className="text-xs text-[#64748B]">Telephone</p>
                      <p className="mt-0.5 font-medium tabular-nums text-[#061B49]">
                        {COMPANY_INFO.phone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0057B8]" />
                    <div>
                      <p className="text-xs text-[#64748B]">Office &amp; Hours</p>
                      <p className="mt-0.5 font-medium text-[#061B49]">
                        {COMPANY_INFO.location}
                      </p>
                      <p className="mt-1 text-xs text-[#64748B]">{COMPANY_INFO.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-[#DDE3EE] bg-white p-8">
                <p className="text-xs font-semibold tracking-wide text-[#061B49] uppercase">
                  Consultation Cadence
                </p>
                <div className="mt-5 space-y-5 text-sm text-[#475569]">
                  {CONSULTATION_STEPS.map((step) => (
                    <div key={step.label} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 bg-[#F96A04]" />
                      <div>
                        <p className="text-xs font-semibold text-[#061B49] uppercase tracking-wide">
                          {step.label}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-[#475569]">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Inquiry Form Column */}
            <div className="lg:col-span-7">
              <div className="border border-[#DDE3EE] bg-white p-8 lg:p-10">
                {submitted ? (
                  <div className="py-10">
                    <div className="inline-flex h-11 w-11 items-center justify-center bg-[#061B49] text-white">
                      <Check className="h-5 w-5" />
                    </div>
                    <h2 className="font-serif mt-6 text-3xl font-medium text-[#061B49]">
                      Inquiry Received
                    </h2>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#475569]">
                      Thank you, <span className="font-semibold text-[#061B49]">{form.fullName}</span>. Your brief regarding{' '}
                      <span className="font-semibold text-[#0057B8]">
                        {selectedServiceObj?.title ?? 'Tradeinfy Services'}
                      </span>{' '}
                      has been recorded. Our UAE consultation desk will respond to{' '}
                      <span className="font-medium text-[#061B49]">{form.email}</span> within one business day.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          fullName: '',
                          email: '',
                          company: '',
                          phone: '',
                          service: preselectedService ?? 'software-management',
                          message: '',
                        });
                      }}
                      className="mt-8 border border-[#061B49] px-5 py-2.5 text-xs font-semibold text-[#061B49] transition-colors hover:bg-[#061B49] hover:text-white"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div>
                      <h2 className="font-serif text-2xl font-medium text-[#061B49] lg:text-3xl">
                        Project &amp; Service Inquiry
                      </h2>
                      <p className="mt-1.5 text-xs text-[#64748B]">
                        Select your primary discipline and outline your requirements below.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-xs font-semibold text-[#061B49]"
                        >
                          Full Name *
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          value={form.fullName}
                          onChange={(e) => {
                            setForm({ ...form, fullName: e.target.value });
                            if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                          }}
                          placeholder="e.g. Tariq Al Mansoori"
                          className="mt-2 w-full border border-[#CBD5E1] bg-white px-4 py-3 text-sm text-[#061B49] placeholder:text-[#94A3B8] focus:border-[#0057B8] focus:outline-none"
                        />
                        {errors.fullName && (
                          <p className="mt-1.5 text-xs text-[#B91C1C]" role="alert">
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-semibold text-[#061B49]"
                        >
                          Work Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={(e) => {
                            setForm({ ...form, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          placeholder="name@company.ae"
                          className="mt-2 w-full border border-[#CBD5E1] bg-white px-4 py-3 text-sm text-[#061B49] placeholder:text-[#94A3B8] focus:border-[#0057B8] focus:outline-none"
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-xs text-[#B91C1C]" role="alert">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-xs font-semibold text-[#061B49]"
                        >
                          Organization
                        </label>
                        <input
                          id="company"
                          type="text"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          placeholder="Company name"
                          className="mt-2 w-full border border-[#CBD5E1] bg-white px-4 py-3 text-sm text-[#061B49] placeholder:text-[#94A3B8] focus:border-[#0057B8] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-semibold text-[#061B49]"
                        >
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+971 ..."
                          className="mt-2 w-full border border-[#CBD5E1] bg-white px-4 py-3 text-sm text-[#061B49] placeholder:text-[#94A3B8] focus:border-[#0057B8] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-xs font-semibold text-[#061B49]"
                      >
                        Primary Service
                      </label>
                      <select
                        id="service"
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="mt-2 w-full border border-[#CBD5E1] bg-white px-4 py-3 text-sm text-[#061B49] focus:border-[#0057B8] focus:outline-none"
                      >
                        {SERVICES.map((service) => (
                          <option key={service.slug} value={service.slug}>
                            {service.title}
                          </option>
                        ))}
                        <option value="multi-service">Multiple Integrated Services</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-semibold text-[#061B49]"
                      >
                        Project Scope &amp; Objectives *
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        value={form.message}
                        onChange={(e) => {
                          setForm({ ...form, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: undefined });
                        }}
                        placeholder="Share your goals, timeline, and key deliverables..."
                        className="mt-2 w-full border border-[#CBD5E1] bg-white px-4 py-3 text-sm text-[#061B49] placeholder:text-[#94A3B8] focus:border-[#0057B8] focus:outline-none"
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-xs text-[#B91C1C]" role="alert">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-[#061B49] px-7 py-4 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#F96A04] sm:w-auto"
                      >
                        Submit Executive Inquiry
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
