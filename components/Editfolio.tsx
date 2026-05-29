"use client";

import { motion } from "framer-motion";
import { Star, MessageCircle, BadgeCheck, Check } from "lucide-react";
import { EDITFOLIO_FEATURES } from "@/lib/site";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay },
});

export default function Editfolio() {
  return (
    <section id="editfolio" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Mockup */}
          <motion.div
            {...fadeUp(0)}
            className="order-last lg:order-none rounded-3xl bg-white border border-line overflow-hidden shadow-[0_30px_80px_rgba(15,15,20,0.12)] max-w-[420px] w-full mx-auto"
          >
            <div className="h-20 bg-gradient-to-r from-accent to-[#ff5a45]" />
            <div className="px-6 pb-6 -mt-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/avatars2/luccagarcez.webp" alt="" className="w-20 h-20 rounded-2xl border-4 border-white object-cover bg-soft" />
              <div className="mt-3 flex items-center gap-2">
                <h3 className="text-[20px] font-bold text-ink">Lucca Garcez</h3>
                <BadgeCheck className="w-5 h-5 text-accent" />
              </div>
              <p className="text-[13px] text-muted">Especialista em Retenção Viral</p>
              <div className="mt-2 flex items-center gap-0.5">
                {[0, 1, 2].map((s) => (
                  <Star key={s} className="w-4 h-4" style={{ color: "#f5a200", fill: "#f5a200" }} />
                ))}
                <span className="ml-1.5 text-[12px] text-muted">Verificado 3★</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Reels", "VSL", "YouTube"].map((c) => (
                  <span key={c} className="text-[12px] font-medium text-ink/70 bg-soft border border-line rounded-full px-3 py-1">
                    {c}
                  </span>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="aspect-video rounded-lg bg-soft border border-line" />
                ))}
              </div>
              <div className="mt-4 flex items-center justify-center gap-2 rounded-xl py-3 text-white font-bold text-[14px]" style={{ background: "#22c55e" }}>
                <MessageCircle className="w-4 h-4" /> Falar com editor
              </div>
            </div>
          </motion.div>

          {/* Texto */}
          <div>
            <motion.p {...fadeUp(0)} className="text-[11px] font-bold tracking-[0.3em] uppercase text-accent">
              Editfólio
            </motion.p>
            <motion.h2
              {...fadeUp(0.08)}
              className="mt-4 font-[family-name:var(--font-display)] uppercase text-ink leading-[0.96] tracking-[-0.01em] text-[clamp(2.25rem,6vw,4rem)]"
            >
              Seu portfólio pronto
              <br />
              em 5 minutos.
            </motion.h2>
            <motion.p {...fadeUp(0.16)} className="mt-5 text-[15px] sm:text-[16px] text-muted leading-relaxed max-w-[520px]">
              Todo editor da casa ganha um site profissional no endereço{" "}
              <span className="font-mono text-ink text-[13px]">folio.editify.com.br/seu-nome</span>.
              Sem código, sem domínio, sem dor de cabeça. É a sua vitrine pro
              cliente bater o olho e querer fechar.
            </motion.p>
            <motion.ul {...fadeUp(0.24)} className="mt-6 space-y-2.5">
              {EDITFOLIO_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[14px] text-ink/80">
                  <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" strokeWidth={2.5} />
                  {f}
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
