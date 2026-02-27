"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";
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
  const [showWaitlistNotice, setShowWaitlistNotice] = useState(false);

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
          <button
            type="button"
            onClick={() => setShowWaitlistNotice(true)}
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-medium text-zinc-100 backdrop-blur transition hover:border-white/40 hover:bg-white/10"
          >
            {t.hero.secondaryCta}
          </button>
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
      {showWaitlistNotice && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/60 px-4">
          <div className="max-w-sm rounded-2xl border border-white/10 bg-zinc-950 p-5 shadow-xl">
            <h3 className="text-sm font-semibold text-white">
              {lang === "en"
                ? "Private waiting list coming soon"
                : "Waiting list privada muy pronto"}
            </h3>
            <p className="mt-2 text-xs text-zinc-300">
              {lang === "en"
                ? "We are not accepting sign-ups yet. In the meantime, follow us on LinkedIn to know when the private waiting list opens."
                : "Todavía no estamos aceptando registros. Mientras tanto, síguenos en LinkedIn para enterarte cuando abramos la waiting list privada."}
            </p>
            <div className="mt-4 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowWaitlistNotice(false)}
                className="rounded-full border border-white/15 px-4 py-1.5 text-xs font-medium text-zinc-200 hover:border-white/40 hover:bg-white/5"
              >
                {lang === "en" ? "Close" : "Cerrar"}
              </button>
              <a
                href="https://www.linkedin.com/company/markuves/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-black shadow-lg shadow-sky-500/20 hover:bg-zinc-100"
              >
                {t.footer.linkedin}
              </a>
            </div>
          </div>
        </div>
      )}
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
      <div className="space-y-6 rounded-3xl border border-white/8 bg-zinc-900/70 p-6 md:p-8">
        <h2 className="text-lg font-medium text-white">
          {lang === "en" ? "Stay close to Markubes" : "Mantente cerca de Markubes"}
        </h2>
        <p className="max-w-2xl text-sm text-zinc-300">
          {lang === "en"
            ? "Follow our journey and product updates through our community channels. A private waiting list is coming soon for teams that want to be first in line."
            : "Sigue nuestro camino y las novedades del producto a través de nuestros canales. Muy pronto abriremos una waiting list privada para los equipos que quieran estar primeros en la fila."}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.linkedin.com/company/markuves/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-zinc-100"
          >
            {t.footer.linkedin}
          </a>
          <a
            href="https://github.com/Markuves"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-medium text-zinc-100 backdrop-blur transition hover:border-white/40 hover:bg-white/10"
          >
            {t.footer.github}
          </a>
        </div>
        <p className="text-xs text-zinc-500">
          {lang === "en"
            ? "Join our waiting list soon to experiment with Markubes in your infrastructure."
            : "Únete pronto a nuestra waiting list para experimentar con Markubes en tu infraestructura."}
        </p>
      </div>
    </section>
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

