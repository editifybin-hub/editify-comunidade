"use client";

import { useEffect, useState } from "react";
import { DISCORD_URL } from "@/lib/site";
import { DiscordIcon } from "./Icons";

const LINKS = [
  { label: "Por dentro", href: "#por-dentro" },
  { label: "Liga", href: "#liga" },
  { label: "Recompensas", href: "#recompensas" },
  { label: "Editfólio", href: "#editfolio" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-50 px-3 sm:px-6 pt-3 sm:pt-5">
      <header
        className="mx-auto max-w-6xl rounded-full transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.6)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(15,15,20,0.08)",
          boxShadow: scrolled
            ? "0 12px 40px rgba(15,15,20,0.08)"
            : "none",
        }}
      >
        <div className="flex items-center justify-between gap-4 px-4 sm:px-5 h-[56px] sm:h-[62px]">
          <a href="#top" aria-label="Comunidade Editify" className="shrink-0 inline-flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icon.png"
              alt="Editify"
              width={34}
              height={34}
              className="h-8 w-8 object-contain invert"
            />
            <span className="hidden sm:inline text-[15px] font-semibold text-ink/55 leading-none">
              <span className="text-ink/30">/ </span>comunidade
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[14px] font-medium text-ink/65 hover:text-ink transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 text-white text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.06em] px-4 sm:px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-px"
            style={{
              background: "#5865F2",
              boxShadow: "0 8px 24px rgba(88,101,242,0.3)",
            }}
          >
            <DiscordIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Entrar</span>
          </a>
        </div>
      </header>
    </div>
  );
}
