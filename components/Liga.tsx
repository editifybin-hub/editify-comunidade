"use client";

import { motion } from "framer-motion";
import { Crown } from "lucide-react";
import { LIGAS } from "@/lib/site";

export default function Liga() {
  return (
    <section
      id="liga"
      className="relative py-24 sm:py-32 scroll-mt-24"
      style={{ background: "#f5f5f7" }}
    >
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-bold tracking-[0.3em] uppercase text-accent"
          >
            Liga / faturamento do mês
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-4 font-[family-name:var(--font-display)] uppercase text-ink leading-[0.96] tracking-[-0.01em] text-[clamp(2.25rem,6vw,4rem)]"
          >
            Sua liga é a grana
            <br />
            que entrou esse mês.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-5 text-[15px] sm:text-[16px] text-muted"
          >
            Cada cliente fechado você registra com print do pagamento. A soma do
            mês define sua liga. Reseta dia 1, todo mundo no mesmo ponto de
            partida.
          </motion.p>
        </div>

        {/* Ladder */}
        <div className="mt-14 space-y-3">
          {LIGAS.map((l, i) => {
            const isTop = "crown" in l && l.crown;
            return (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-4 sm:gap-6 rounded-2xl bg-white border px-5 sm:px-6 py-4 sm:py-5"
                style={{
                  borderColor: isTop ? `${l.color}66` : "var(--color-line)",
                  boxShadow: isTop
                    ? `0 16px 44px ${l.color}22`
                    : "0 6px 20px rgba(15,15,20,0.04)",
                }}
              >
                {/* selo de cor */}
                <span
                  className="flex items-center justify-center shrink-0 rounded-xl font-[family-name:var(--font-display)] text-white"
                  style={{
                    background: l.color,
                    width: 52,
                    height: 52,
                    fontSize: 20,
                  }}
                >
                  {i + 1}
                </span>

                {/* nome + barra */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-[family-name:var(--font-display)] text-[22px] sm:text-[26px] leading-none text-ink">
                      {l.name}
                    </span>
                    {isTop && <Crown className="w-5 h-5" style={{ color: l.color }} />}
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-soft overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${24 + i * 19}%`,
                        background: l.color,
                      }}
                    />
                  </div>
                </div>

                {/* range */}
                <div className="text-right shrink-0">
                  <span className="block font-bold text-ink text-[14px] sm:text-[16px]">
                    {l.range}
                  </span>
                  <span className="block text-[11px] sm:text-[12px] text-muted">
                    {l.desc}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center text-[14px] text-muted"
        >
          A liga é o reflexo do que o{" "}
          <a
            href="https://lp.treinamento.editify.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-semibold hover:underline"
          >
            Treinamento Editify
          </a>{" "}
          te ensina a faturar. Mês novo, ranking zerado, bora ver quem sobe mais
          rápido.
        </motion.p>
      </div>
    </section>
  );
}
