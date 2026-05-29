"use client";

import { motion } from "framer-motion";
import { Video, CalendarHeart } from "lucide-react";
import { ERICK } from "@/lib/site";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay },
});

export default function Erick() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" style={{ background: "#f5f5f7" }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[0.85fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Foto */}
          <motion.div {...fadeUp(0)} className="relative">
            <div className="relative w-full aspect-[4/5] max-w-[420px] mx-auto lg:mx-0 rounded-[28px] overflow-hidden border border-line shadow-[0_30px_80px_rgba(15,15,20,0.15)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ERICK.photo} alt={ERICK.name} className="absolute inset-0 w-full h-full object-cover" />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-2/5"
                style={{ background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.8))" }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-[family-name:var(--font-display)] text-[30px] leading-none uppercase text-white">
                  {ERICK.name}
                </p>
                <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/70">
                  Fundador da Editify
                </p>
              </div>
            </div>
          </motion.div>

          {/* Texto */}
          <div>
            <motion.p {...fadeUp(0)} className="text-[11px] font-bold tracking-[0.3em] uppercase text-accent">
              Quem comanda a casa
            </motion.p>
            <motion.h2
              {...fadeUp(0.08)}
              className="mt-4 font-[family-name:var(--font-display)] uppercase text-ink leading-[0.96] tracking-[-0.01em] text-[clamp(2rem,5.5vw,3.5rem)]"
            >
              Todo mês,
              <br />
              cara a cara comigo.
            </motion.h2>
            <motion.p {...fadeUp(0.16)} className="mt-5 text-[15px] sm:text-[16px] text-muted leading-relaxed max-w-[520px]">
              Saí da escola aos 17 pra editar. Movimentei mais de R$2,2 milhões
              no mercado, dirigi agência gringa e formei mais de mil editores. A
              Editify é onde eu devolvo tudo isso, de perto.
            </motion.p>

            {/* stats de autoridade */}
            <motion.div {...fadeUp(0.24)} className="mt-7 grid grid-cols-3 gap-3 max-w-[520px]">
              {ERICK.stats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-white border border-line p-4">
                  <div className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,3vw,2.1rem)] leading-none text-accent">
                    {s.value}
                  </div>
                  <p className="mt-1.5 text-[11px] text-muted leading-snug">{s.label}</p>
                </div>
              ))}
            </motion.div>

            {/* ao vivo + encontro */}
            <motion.div {...fadeUp(0.32)} className="mt-5 grid sm:grid-cols-2 gap-3 max-w-[520px]">
              <div className="rounded-2xl bg-accent-soft border border-accent/20 p-4 flex items-start gap-3">
                <CalendarHeart className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-ink text-[14px]">Encontro mensal ao vivo</p>
                  <p className="text-[12px] text-muted mt-0.5">Uma vez por mês, em call comigo. Pergunta e resposta na hora, não é gravação.</p>
                </div>
              </div>
              <div className="rounded-2xl bg-white border border-line p-4 flex items-start gap-3">
                <Video className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-ink text-[14px]">Mentoria 1 a 1</p>
                  <p className="text-[12px] text-muted mt-0.5">Sessão individual que você destrava com XP. Online ou presencial.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
