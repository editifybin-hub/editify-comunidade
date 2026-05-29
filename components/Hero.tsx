"use client";

import { motion } from "framer-motion";
import { Hash, Volume2, Trophy } from "lucide-react";
import { DISCORD_URL, AVATARS } from "@/lib/site";
import { DiscordIcon } from "./Icons";
import CommunityCounter from "./CommunityCounter";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.7,
    delay,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  },
});

const CHAT = [
  { name: "luccagarcez", av: "/avatars2/luccagarcez.webp", msg: "fechei cliente novo hoje 🤝", value: "R$ 3.000" },
  { name: "raul_oeditor", av: "/avatars2/raul_oeditor.webp", msg: "subi pra Pleno esse mês!", value: null },
  { name: "gabicas", av: "/avatars2/gabicas.webp", msg: "primeiro pagamento gringo caiu 🇺🇸", value: "$ 1.000" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="relative max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-10 items-center">
          {/* LEFT */}
          <div>
            <motion.a
              {...fadeUp(0.05)}
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-soft px-4 py-1.5 text-[12px] font-semibold text-accent hover:bg-accent/10 transition-colors"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Comunidade no Discord
            </motion.a>

            <motion.h1
              {...fadeUp(0.15)}
              className="mt-6 font-[family-name:var(--font-display)] uppercase text-ink leading-[0.92] tracking-[-0.01em] text-[clamp(2.85rem,7.5vw,5.75rem)]"
            >
              Editar sozinho
              <br />
              <span className="text-accent">é muito chato.</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.3)}
              className="mt-6 max-w-[540px] text-[16px] sm:text-[18px] leading-relaxed text-muted"
            >
              A comunidade Editify é onde o editor de vídeo brasileiro vira
              profissional.
              <br className="hidden sm:block" />{" "}
              Treinamento, ferramentas e clientes no mesmo lugar.
            </motion.p>

            <motion.div {...fadeUp(0.45)} className="mt-8 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 text-white font-bold text-[15px] uppercase tracking-wider px-8 py-[18px] rounded-full transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "#5865F2",
                  boxShadow: "0 12px 36px rgba(88,101,242,0.35)",
                }}
              >
                <DiscordIcon className="w-5 h-5" />
                Entrar na comunidade
              </a>
              <a
                href="#por-dentro"
                className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-[18px] rounded-full border border-line text-ink/75 font-medium text-[15px] hover:bg-soft hover:text-ink transition-all"
              >
                Ver por dentro
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.6)} className="mt-8">
              <CommunityCounter />
            </motion.div>
          </div>

          {/* RIGHT — mockup de Discord (claro) */}
          <motion.div {...fadeUp(0.4)} className="relative">
            <div
              className="relative rounded-2xl overflow-hidden flex bg-white"
              style={{
                border: "1px solid rgba(15,15,20,0.1)",
                boxShadow: "0 40px 100px rgba(15,15,20,0.14)",
              }}
            >
              {/* rail de canais */}
              <div className="hidden sm:flex flex-col items-center gap-3 py-5 px-3 bg-soft border-r border-line">
                <div className="w-10 h-10 rounded-2xl bg-accent flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icon.png" alt="" className="w-6 h-6 object-contain" />
                </div>
                <div className="w-8 h-px bg-line" />
                {[0, 1, 2].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-2xl bg-ink/5" />
                ))}
              </div>

              {/* conteúdo */}
              <div className="flex-1 min-w-0">
                <div className="px-4 py-3 border-b border-line flex items-center gap-2 text-muted text-[13px]">
                  <Hash className="w-4 h-4" />
                  <span className="text-ink font-semibold">mural-de-conquistas</span>
                </div>

                <div className="px-4 py-4 space-y-4">
                  {CHAT.map((c, i) => (
                    <motion.div
                      key={c.name}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + i * 0.25 }}
                      className="flex gap-3"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={c.av} alt="" className="w-9 h-9 rounded-full object-cover bg-soft shrink-0" />
                      <div className="min-w-0">
                        <p className="text-[13px]">
                          <span className="font-semibold text-ink">{c.name}</span>{" "}
                          <span className="text-muted/60 text-[11px]">hoje</span>
                        </p>
                        <p className="text-[14px] text-ink/80">{c.msg}</p>
                        {c.value && (
                          <div className="mt-2 inline-flex items-center gap-2 rounded-lg bg-accent-soft border border-accent/20 px-3 py-1.5">
                            <Trophy className="w-3.5 h-3.5 text-accent" />
                            <span className="text-[13px] font-bold text-ink">{c.value}</span>
                            <span className="text-[11px] text-muted">conquista</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="px-4 py-3 border-t border-line flex items-center gap-2 text-muted text-[13px]">
                  <Volume2 className="w-4 h-4 text-green-500" />
                  <span>Estúdio 01</span>
                  <span className="ml-auto flex -space-x-2">
                    {AVATARS.slice(6, 10).map((src) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img key={src} src={src} alt="" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
                    ))}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
