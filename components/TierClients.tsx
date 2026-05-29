"use client";

import { motion } from "framer-motion";
import { Star, MessageCircle, BadgeCheck } from "lucide-react";
import { TIERS } from "@/lib/site";

export default function TierClients() {
  return (
    <section
      id="editfolio"
      className="relative py-24 sm:py-32 scroll-mt-24"
      style={{ background: "#f5f5f7" }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-bold tracking-[0.3em] uppercase text-accent"
          >
            Editfólio e contratação
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-4 font-[family-name:var(--font-display)] uppercase text-ink leading-[0.96] tracking-[-0.01em] text-[clamp(2.25rem,6vw,4rem)]"
          >
            Suas estrelas aparecem
            <br />
            pra quem vai te contratar.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-5 text-[15px] sm:text-[16px] text-muted"
          >
            Cada editor ganha um portfólio profissional sem código. O cliente
            acha você no marketplace, vê suas estrelas e chama direto no
            WhatsApp. 0% de comissão.
          </motion.p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Mockup do Editfólio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white border border-line overflow-hidden shadow-[0_24px_60px_rgba(15,15,20,0.1)]"
          >
            <div className="h-20 bg-gradient-to-r from-accent to-[#ff5a45]" />
            <div className="px-6 pb-6 -mt-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/avatars2/luccagarcez.webp"
                alt=""
                className="w-20 h-20 rounded-2xl border-4 border-white object-cover bg-soft"
              />
              <div className="mt-3 flex items-center gap-2">
                <h3 className="text-[20px] font-bold text-ink">Lucca Garcez</h3>
                <BadgeCheck className="w-5 h-5 text-accent" />
              </div>
              <p className="text-[13px] text-muted">Especialista em Retenção Viral</p>
              <div className="mt-2 flex items-center gap-0.5">
                {[0, 1, 2].map((s) => (
                  <Star key={s} className="w-4 h-4 text-gold" style={{ fill: "#f5a200" }} />
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
              <div
                className="mt-4 flex items-center justify-center gap-2 rounded-xl py-3 text-white font-bold text-[14px]"
                style={{ background: "#22c55e" }}
              >
                <MessageCircle className="w-4 h-4" /> Falar com editor
              </div>
            </div>
          </motion.div>

          {/* Tiers + contratação */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <h3 className="font-[family-name:var(--font-display)] text-[22px] uppercase text-ink mb-4">
              As estrelas que o cliente vê
            </h3>
            <div className="space-y-3">
              {TIERS.map((t, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-2xl bg-white border px-5 py-4"
                  style={{
                    borderColor:
                      t.color === "blue" ? "rgba(88,101,242,0.4)" : "var(--color-line)",
                  }}
                >
                  <div className="flex gap-0.5 shrink-0 w-[68px]">
                    {Array.from({ length: t.stars }).map((_, s) => (
                      <Star
                        key={s}
                        className="w-4.5 h-4.5"
                        style={{
                          color: t.color === "blue" ? "#5865F2" : "#f5a200",
                          fill: t.color === "blue" ? "#5865F2" : "#f5a200",
                        }}
                      />
                    ))}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-ink text-[15px] leading-tight">
                      {t.label}
                    </p>
                    <p className="text-[12px] text-muted">{t.how}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-accent-soft border border-accent/20 p-5">
              <p className="font-bold text-ink text-[15px]">0% de comissão</p>
              <p className="text-[13px] text-muted mt-1">
                A Editify não toca no dinheiro. O preço que você cobra é o que cai
                no seu PIX. O cliente acha, filtra por estilo e te chama direto.
              </p>
              <a
                href="https://contratar.editify.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-accent font-bold text-[14px] hover:underline"
              >
                Ver o contratar.editify.com.br
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
