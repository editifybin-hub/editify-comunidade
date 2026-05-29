"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TIERS } from "@/lib/site";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay },
});

export default function Estrelas() {
  return (
    <section className="relative py-24 sm:py-32" style={{ background: "#f5f5f7" }}>
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <motion.p {...fadeUp(0)} className="text-[11px] font-bold tracking-[0.3em] uppercase text-accent">
            As estrelas
          </motion.p>
          <motion.h2
            {...fadeUp(0.08)}
            className="mt-4 font-[family-name:var(--font-display)] uppercase text-ink leading-[0.96] tracking-[-0.01em] text-[clamp(2.25rem,6vw,4rem)]"
          >
            Suas estrelas dizem
            <br />
            o quão longe você chegou.
          </motion.h2>
          <motion.p {...fadeUp(0.16)} className="mt-5 text-[15px] sm:text-[16px] text-muted leading-relaxed">
            As estrelas ficam no seu Editfólio e o cliente vê na hora. Quanto
            mais estrelas, mais no topo das buscas você aparece. Elas se
            conquistam com XP e constância, não se compram com lábia.
          </motion.p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {TIERS.map((t, i) => {
            const blue = t.color === "blue";
            return (
              <motion.div
                key={i}
                {...fadeUp(0.1 + i * 0.08)}
                className="relative rounded-3xl bg-white border p-7 overflow-hidden"
                style={{ borderColor: blue ? "rgba(88,101,242,0.4)" : "var(--color-line)" }}
              >
                {blue && (
                  <span className="absolute top-5 right-5 text-[10px] font-bold uppercase tracking-[0.15em] text-discord bg-discord/10 border border-discord/25 rounded-full px-2.5 py-1">
                    Mais raro
                  </span>
                )}
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star
                      key={s}
                      className="w-6 h-6"
                      style={{
                        color: blue ? "#5865F2" : "#f5a200",
                        fill: blue ? "#5865F2" : "#f5a200",
                      }}
                    />
                  ))}
                </div>
                <h3 className="mt-4 text-[22px] font-bold text-ink">{t.label}</h3>
                <p className="mt-1 text-[13px] font-medium text-muted">{t.how}</p>
                <p className="mt-3 text-[14px] text-ink/70 leading-relaxed">{t.unlock}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
