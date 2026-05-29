"use client";

import { motion } from "framer-motion";
import { Star, Crown } from "lucide-react";
import { LIGAS, TIERS } from "@/lib/site";

export default function Gamification() {
  return (
    <section
      id="progresso"
      className="relative py-24 sm:py-32 scroll-mt-24 overflow-hidden border-y border-white/[0.06]"
      style={{
        background:
          "linear-gradient(180deg, #0d0d15 0%, #09090e 100%)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,184,0,0.1) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-bold tracking-[0.3em] uppercase text-gold"
          >
            O sistema de progresso
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-4 font-[family-name:var(--font-display)] uppercase text-white leading-[0.96] tracking-[-0.01em] text-[clamp(2.25rem,6vw,4rem)]"
          >
            Status que não é fake.
            <br />
            <span className="text-gold">É grana que entrou.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-5 text-[15px] sm:text-[16px] text-muted"
          >
            Sua Liga é o que você faturou ESTE mês. Reseta dia 1, todo mundo no
            mesmo ponto de partida. Suas estrelas aparecem pro cliente.
          </motion.p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* LIGA ladder */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-[family-name:var(--font-display)] text-[24px] uppercase text-white mb-5">
              Liga <span className="text-muted text-[15px] font-sans normal-case">/ faturamento do mês</span>
            </h3>
            <div className="space-y-2.5">
              {LIGAS.map((l, i) => {
                const isTop = "crown" in l && l.crown;
                return (
                  <div
                    key={l.name}
                    className="relative flex items-center gap-4 rounded-2xl px-5 py-4 transition-all"
                    style={{
                      background: isTop
                        ? "linear-gradient(100deg, rgba(227,6,19,0.18), rgba(255,184,0,0.1))"
                        : "rgba(255,255,255,0.03)",
                      border: isTop
                        ? "1px solid rgba(255,184,0,0.4)"
                        : "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    {/* barra de nível */}
                    <div
                      className="h-2 rounded-full shrink-0"
                      style={{
                        width: `${28 + i * 16}px`,
                        background: isTop
                          ? "linear-gradient(90deg, #e30613, #ffb800)"
                          : "rgba(227,6,19,0.6)",
                      }}
                    />
                    <span className="font-[family-name:var(--font-display)] text-[22px] leading-none text-white flex items-center gap-2">
                      {l.name}
                      {isTop && <Crown className="w-5 h-5 text-gold" />}
                    </span>
                    <span className="ml-auto text-right">
                      <span className="block font-bold text-white text-[15px]">
                        {l.value}
                      </span>
                      <span className="block text-[11px] text-muted">
                        {l.desc}
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>
            <p className="mt-4 text-[13px] text-muted">
              XP é eterno e nunca reseta. Só a Liga renova todo mês.
            </p>
          </motion.div>

          {/* TIERS */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <h3 className="font-[family-name:var(--font-display)] text-[24px] uppercase text-white mb-5">
              Tier <span className="text-muted text-[15px] font-sans normal-case">/ estrelas que o cliente vê</span>
            </h3>
            <div className="space-y-3">
              {TIERS.map((t, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-2xl px-5 py-4"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border:
                      t.color === "blue"
                        ? "1px solid rgba(124,92,255,0.4)"
                        : "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div className="flex gap-0.5 shrink-0 w-[72px]">
                    {Array.from({ length: t.stars }).map((_, s) => (
                      <Star
                        key={s}
                        className="w-4.5 h-4.5"
                        style={{
                          color: t.color === "blue" ? "#7c5cff" : "#ffb800",
                          fill: t.color === "blue" ? "#7c5cff" : "#ffb800",
                        }}
                      />
                    ))}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-white text-[15px] leading-tight">
                      {t.label}
                    </p>
                    <p className="text-[12px] text-muted">{t.how}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[13px] text-muted">
              Mais estrelas = aparece primeiro nas buscas do{" "}
              <span className="text-white/80">contratar</span> e ganha tag de
              Match.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
