import { DISCORD_URL } from "@/lib/site";
import { DiscordIcon } from "./Icons";

const LINKS = [
  { label: "Treinamento", href: "https://lp.treinamento.editify.com.br" },
  { label: "Contratar", href: "https://contratar.editify.com.br" },
  { label: "Editify", href: "https://editify.com.br" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icon.png" alt="Editify" width={28} height={28} className="h-7 w-7 object-contain" />
          <span className="text-[15px] font-semibold text-white/55">
            <span className="text-white/30">/ </span>comunidade
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-white/60 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-bold text-white transition-all hover:-translate-y-px"
          style={{ background: "#5865F2", boxShadow: "0 8px 24px rgba(88,101,242,0.35)" }}
        >
          <DiscordIcon className="w-4 h-4" />
          Entrar
        </a>
      </div>
      <p className="pb-8 text-center text-[12px] text-white/35 leading-relaxed px-4">
        © {year} Editify · CNPJ 53.169.343/0001-40
        <br />
        Editify é a casa do editor de vídeo brasileiro.
      </p>
    </footer>
  );
}
