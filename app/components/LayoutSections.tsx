"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import logo from "@/assets/blackmarkubes-improve.png";
import { useLanguage } from "../language-context";
import { getTranslations } from "../i18n";
import { LanguageToggle } from "./LanguageToggle";

const DynamicMarkovGraph3D = dynamic(
  () => import("./MarkovGraph3D").then((m) => m.MarkovGraph3D),
  { ssr: false },
);

export function Header() {
  const { lang } = useLanguage();
  const t = getTranslations(lang);

  return (
    <header className="sticky top-0 z-20 border-b border-white/5 bg-black/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-28">
            <Image
              src={logo}
              alt="Markubes logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="hidden text-xs font-medium uppercase tracking-[0.18em] text-zinc-500 sm:inline">
            Data Driven Infrastructure
          </span>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-5 text-sm text-zinc-300 md:flex">
            <a href="#product" className="hover:text-white">
              {t.nav.product}
            </a>
            <a href="#technology" className="hover:text-white">
              {t.nav.technology}
            </a>
            <a href="#for-whom" className="hover:text-white">
              {t.nav.forWhom}
            </a>
            <a href="#contact" className="hover:text-white">
              {t.nav.contact}
            </a>
          </div>
          <LanguageToggle />
        </div>
      </nav>
    </header>
  );
}

export function Hero() {
  const { lang } = useLanguage();
  const t = getTranslations(lang);

  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-10 md:px-8 md:flex-row md:items-center md:pt-16">
      <div className="flex-1 space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
          {t.hero.eyebrow}
        </p>
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
          {t.hero.title}
        </h1>
        <p className="max-w-xl text-pretty text-sm leading-relaxed text-zinc-300 sm:text-base">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-zinc-100"
          >
            {t.hero.primaryCta}
          </a>
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-medium text-zinc-100 backdrop-blur transition hover:border-white/40 hover:bg-white/10"
          >
            {t.hero.secondaryCta}
          </a>
        </div>
        <p className="max-w-md text-xs text-zinc-500">
          {t.hero.secondaryCaption}
        </p>
      </div>
      <div className="mt-4 flex-1 space-y-4 md:mt-0">
        <DynamicMarkovGraph3D />
        <p className="text-xs leading-relaxed text-zinc-400">
          Markov-like state graphs help us reason about how your infrastructure
          moves between states under real workloads — and how to nudge it
          towards more efficient, greener configurations.
        </p>
      </div>
    </section>
  );
}

export function TechnologySection() {
  const { lang } = useLanguage();
  const t = getTranslations(lang);

  return (
    <section
      id="technology"
      className="mx-auto max-w-6xl px-4 pb-16 md:px-8"
    >
      <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-white">
            {t.markov.title}
          </h2>
          <p className="text-sm leading-relaxed text-zinc-300">
            {t.markov.subtitle}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            {t.markov.bullets.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 rounded-3xl border border-white/5 bg-gradient-to-br from-zinc-950/60 via-black to-zinc-900/80 p-5 text-sm text-zinc-300">
          <p>
            Every workload, deployment and resource allocation becomes a node in
            a probability graph. Instead of manual tuning, we continuously learn
            from how your system behaves in production.
          </p>
          <p>
            That lets us propose and apply changes which move you towards more
            efficient states — reducing cost and carbon footprint while keeping
            reliability first.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ProductSection() {
  const { lang } = useLanguage();
  const t = getTranslations(lang);

  return (
    <section
      id="product"
      className="mx-auto max-w-6xl px-4 pb-16 md:px-8"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        <div className="flex-1 space-y-3">
          <h2 className="text-lg font-medium text-white">{t.product.title}</h2>
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {t.product.tag}
          </p>
        </div>
        <div className="flex-[1.6]">
          <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br from-sky-900/40 via-zinc-950 to-black p-6">
            <div className="space-y-3">
              <h3 className="text-base font-medium text-white">
                {t.product.k8sTitle}
              </h3>
              <p className="text-sm text-zinc-300">{t.product.k8sBody}</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                {t.product.bullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-500/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 right-10 h-40 w-40 rounded-full bg-emerald-400/25 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function AudienceSection() {
  const { lang } = useLanguage();
  const t = getTranslations(lang);

  return (
    <section
      id="for-whom"
      className="mx-auto max-w-6xl px-4 pb-16 md:px-8"
    >
      <h2 className="mb-6 text-lg font-medium text-white">
        {t.audience.title}
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/8 bg-zinc-900/70 p-6">
          <h3 className="text-sm font-medium text-white">
            {t.audience.companiesTitle}
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            {t.audience.companiesBullets.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-white/8 bg-zinc-900/70 p-6">
          <h3 className="text-sm font-medium text-white">
            {t.audience.engineersTitle}
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            {t.audience.engineersBullets.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function LatamSection() {
  const { lang } = useLanguage();
  const t = getTranslations(lang);

  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 md:px-8">
      <div className="rounded-3xl border border-emerald-400/25 bg-gradient-to-r from-emerald-900/40 via-zinc-950 to-black p-6 md:p-8">
        <h2 className="text-lg font-medium text-white">{t.latam.title}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-200">
          {t.latam.body}
        </p>
      </div>
    </section>
  );
}

export function ContactWaitlistSection() {
  const { lang } = useLanguage();
  const t = getTranslations(lang);

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-4 pb-20 md:px-8"
    >
      <div className="grid gap-8 md:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-white">
            {t.forms.contactTitle}
          </h2>
          <p className="text-sm text-zinc-300">{t.forms.contactSubtitle}</p>
          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={t.forms.name} name="name" />
              <Field label={t.forms.email} name="email" type="email" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={t.forms.company} name="company" />
              <Field label={t.forms.role} name="role" />
            </div>
            <FieldTextarea label={t.forms.message} name="message" />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-zinc-100"
            >
              {t.forms.submitContact}
            </button>
            <p className="mt-2 text-xs text-zinc-500">
              This form is a preview. We will wire it to your preferred backend
              or CRM when ready.
            </p>
          </form>
        </div>
        <div
          id="waitlist"
          className="rounded-3xl border border-white/8 bg-zinc-900/70 p-6"
        >
          <h3 className="text-sm font-medium text-white">
            {t.forms.waitlistTitle}
          </h3>
          <p className="mt-2 text-xs text-zinc-300">
            {t.forms.waitlistSubtitle}
          </p>
          <form className="mt-4 space-y-4">
            <Field label={t.forms.email} name="waitlist-email" type="email" />
            <div className="space-y-2 text-xs text-zinc-300">
              <p className="font-medium text-zinc-200">
                {t.forms.interestLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                <Tag>{t.forms.interestCompany}</Tag>
                <Tag>{t.forms.interestEngineer}</Tag>
              </div>
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-medium text-zinc-100 backdrop-blur transition hover:border-white/40 hover:bg-white/10"
            >
              {t.forms.submitWaitlist}
            </button>
            <p className="mt-2 text-[11px] text-zinc-500">
              By joining, you agree that we can contact you about early access
              and product updates.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
};

function Field({ label, name, type = "text" }: FieldProps) {
  return (
    <label className="flex flex-col gap-1 text-xs text-zinc-300">
      <span>{label}</span>
      <input
        name={name}
        type={type}
        className="rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:border-white/40 focus:outline-none focus:ring-0"
        placeholder=""
      />
    </label>
  );
}

function FieldTextarea({ label, name }: { label: string; name: string }) {
  return (
    <label className="flex flex-col gap-1 text-xs text-zinc-300">
      <span>{label}</span>
      <textarea
        name={name}
        rows={4}
        className="resize-none rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:border-white/40 focus:outline-none focus:ring-0"
      />
    </label>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium text-zinc-100">
      {children}
    </span>
  );
}

export function Footer() {
  const { lang } = useLanguage();
  const t = getTranslations(lang);

  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-zinc-400 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="max-w-md">{t.footer.mission}</p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/company/markuves/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            {t.footer.linkedin}
          </a>
          <a
            href="https://github.com/Markuves"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            {t.footer.github}
          </a>
          <span className="text-zinc-500">© {new Date().getFullYear()} Markubes</span>
        </div>
      </div>
    </footer>
  );
}

