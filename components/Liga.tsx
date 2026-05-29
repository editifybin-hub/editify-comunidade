"use client";

import { motion } from "framer-motion";
import { Crown, TrendingUp } from "lucide-react";
import { LIGAS } from "@/lib/site";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay },
});

export default function Liga() {
  return (
    <section id="liga" className="relative py-24 sm:py-32 scroll-mt-24" style={{ background: "#f5f5f7" }}>
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="max-w-2xl">
          <motion.p {...fadeUp(0)} className="text-[11px] font-bold tracking-[0.3em] uppercase text-accent">
            Liga / seu nível no jogo
          </motion.p>
          <motion.h2
            {...fadeUp(0.08)}
            className="mt-4 font-[family-name:var(--font-display)] uppercase text-ink leading-[0.96] tracking-[-0.01em] text-[clamp(2.25rem,6vw,4rem)]"
          >
            Quanto você fatura,
            <br />
            mais alto você sobe.
          </motion.h2>
          <motion.p {...fadeUp(0.16)} className="mt-5 text-[15px] sm:text-[16px] text-muted leading-relaxed">
            Toda venda que você fecha editando, você registra na comunidade com
            print do pagamento. A soma do mês te coloca numa liga, do{" "}
            <span className="text-ink font-semibold">Iniciante</span> ao{" "}
            <span className="text-ink font-semibold">Elite</span>. Liga mais
            alta significa mais visibilidade pro cliente, mais respeito na casa e
            a prova de que seu trabalho tá crescendo de verdade.
          </motion.p>
        </div>

        {/* ── Timeline horizontal (desktop) ── */}
        <motion.div {...fadeUp(0.24)} className="mt-16 hidden md:block">
          <div className="flex items-end justify-between mb-2 text-[12px] font-semibold text-muted">
            <span>R$ 0</span>
            <span className="text-ink/40">faturamento no mês</span>
            <span>R$ 15.000+</span>
          </div>

          {/* barra segmentada */}
          <div className="flex h-5 rounded-full overflow-hidden shadow-[0_8px_24px_rgba(15,15,20,0.1)]">
            {LIGAS.map((l) => (
              <div
                key={l.name}
                className="flex-1 relative group"
                style={{ background: l.color }}
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-15 bg-black transition-opacity" />
              </div>
            ))}
          </div>

          {/* marcadores + labels */}
          <div className="flex mt-3">
            {LIGAS.map((l) => {
              const isTop = "crown" in l && l.crown;
              return (
                <div key={l.name} className="flex-1 px-1 text-center">
                  <span
                    className="inline-block w-3 h-3 rounded-full -mt-[26px] relative z-10 border-2 border-[#f5f5f7]"
                    style={{ background: l.color }}
                  />
                  <div className="flex items-center justify-center gap-1.5 mt-1">
                    <span className="font-[family-name:var(--font-display)] text-[18px] leading-none" style={{ color: l.color }}>
                      {l.name}
                    </span>
                    {isTop && <Crown className="w-4 h-4" style={{ color: l.color }} />}
                  </div>
                  <span className="block text-[11px] text-muted mt-1">{l.range}</span>
                  <span className="block text-[11px] text-muted/70">{l.desc}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Timeline vertical (mobile) ── */}
        <div className="mt-12 md:hidden relative pl-6">
          <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-line" />
          <div className="space-y-6">
            {LIGAS.map((l, i) => {
              const isTop = "crown" in l && l.crown;
              return (
                <motion.div
                  key={l.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="relative"
                >
                  <span
                    className="absolute -left-[22px] top-1 w-4 h-4 rounded-full border-2 border-[#f5f5f7]"
                    style={{ background: l.color }}
                  />
                  <div className="flex items-center gap-2">
                    <span className="font-[family-name:var(--font-display)] text-[22px] leading-none" style={{ color: l.color }}>
                      {l.name}
                    </span>
                    {isTop && <Crown className="w-4 h-4" style={{ color: l.color }} />}
                  </div>
                  <span className="block text-[14px] font-semibold text-ink mt-0.5">{l.range}</span>
                  <span className="block text-[12px] text-muted">{l.desc}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          {...fadeUp(0.3)}
          className="mt-14 flex flex-col sm:flex-row items-start gap-4 rounded-2xl bg-white border border-line p-6"
        >
          <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent-soft text-accent shrink-0">
            <TrendingUp className="w-5 h-5" />
          </span>
          <p className="text-[14px] sm:text-[15px] text-muted leading-relaxed">
            <span className="text-ink font-semibold">Dia 1 de cada mês, zera.</span>{" "}
            Todo mundo recomeça do mesmo ponto, e a corrida começa de novo. É o{" "}
            <a href="https://lp.treinamento.editify.com.br" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">
              Treinamento Editify
            </a>{" "}
            que te dá o método pra fechar mais cliente e subir de liga rápido.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
