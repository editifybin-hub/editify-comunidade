"use client";

import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import { XP_SOURCES, REWARDS } from "@/lib/site";
import { featureIcon } from "./Icons";

export default function XpRewards() {
  return (
    <section id="recompensas" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-bold tracking-[0.3em] uppercase text-accent"
          >
            XP e recompensas
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-4 font-[family-name:var(--font-display)] uppercase text-ink leading-[0.96] tracking-[-0.01em] text-[clamp(2.25rem,6vw,4rem)]"
          >
            Você é recompensado
            <br />
            <span className="text-accent">só por estar aqui.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-5 text-[15px] sm:text-[16px] text-muted"
          >
            XP é eterno e nunca reseta. Não compra acesso, compra status: estrelas
            no perfil, créditos de IA e até mentoria com o Erick.
          </motion.p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Como ganha */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-[family-name:var(--font-display)] text-[22px] uppercase text-ink mb-4">
              Como ganha
            </h3>
            <div className="rounded-3xl bg-white border border-line p-3 divide-y divide-line">
              {XP_SOURCES.map((s) => {
                const Icon = featureIcon(s.icon);
                return (
                  <div key={s.label} className="flex items-center gap-3 px-3 py-3.5">
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-accent-soft text-accent shrink-0">
                      <Icon className="w-4.5 h-4.5" strokeWidth={1.9} />
                    </span>
                    <span className="text-[15px] text-ink/85">{s.label}</span>
                    <span className="ml-auto font-bold text-ink text-[14px] tabular-nums">
                      {s.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Loja */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <h3 className="font-[family-name:var(--font-display)] text-[22px] uppercase text-ink mb-4 flex items-center gap-2">
              <Gift className="w-5 h-5 text-accent" /> Troca por
            </h3>
            <div className="space-y-3">
              {REWARDS.map((r) => (
                <div
                  key={r.label}
                  className="rounded-2xl bg-white border border-line p-4 flex items-center gap-4 hover:border-accent/30 transition-colors"
                >
                  <div className="min-w-0">
                    <p className="font-semibold text-ink text-[15px] leading-tight">
                      {r.label}
                    </p>
                    <p className="text-[12px] text-muted mt-0.5">{r.desc}</p>
                  </div>
                  <span
                    className="ml-auto shrink-0 rounded-full bg-accent-soft text-accent font-bold text-[12px] px-3 py-1.5 whitespace-nowrap"
                  >
                    {r.xp}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
