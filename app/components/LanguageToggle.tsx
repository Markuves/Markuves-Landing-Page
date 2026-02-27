"use client";

import { useLanguage } from "../language-context";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <button
      type="button"
      aria-label="Toggle language"
      className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-zinc-200 backdrop-blur transition hover:border-white/30 hover:bg-white/10"
      onClick={() => setLang(lang === "en" ? "es" : "en")}
    >
      <span
        className={
          lang === "es" ? "opacity-100" : "opacity-60 transition-opacity"
        }
      >
        ES
      </span>
      <span className="h-3 w-px bg-white/20" />
      <span
        className={
          lang === "en" ? "opacity-100" : "opacity-60 transition-opacity"
        }
      >
        EN
      </span>
    </button>
  );
}

