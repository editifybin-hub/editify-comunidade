"use client";

import { motion } from "framer-motion";
import { Volume2, Trophy, Flame, Scissors, Hash } from "lucide-react";
import { AVATARS } from "@/lib/site";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.55, delay },
});

export default function Features() {
  return (
    <section id="por-dentro" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="max-w-2xl">
          <motion.p {...fadeUp(0)} className="text-[11px] font-bold tracking-[0.3em] uppercase text-accent">
            Por dentro da casa
          </motion.p>
          <motion.h2
            {...fadeUp(0.08)}
            className="mt-4 font-[family-name:var(--font-display)] uppercase text-ink leading-[0.96] tracking-[-0.01em] text-[clamp(2.25rem,6vw,4rem)]"
          >
            Grupo de editores
            <br />
            <span className="text-accent">pra trabalho e progresso.</span>
          </motion.h2>
          <motion.p {...fadeUp(0.16)} className="mt-5 text-[15px] sm:text-[16px] text-muted max-w-[540px]">
            Não é um Discord parado com gente jogando conversa fora. É um lugar
            onde cada dia de trabalho acontece junto e deixa rastro.
          </motion.p>
        </div>

        {/* Bento */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* Estúdio em voz — grande */}
          <motion.div
            {...fadeUp(0.05)}
            className="col-span-2 lg:row-span-2 relative rounded-3xl bg-white border border-line p-7 overflow-hidden flex flex-col"
          >
            <div className="flex items-center gap-2 text-muted text-[13px]">
              <Volume2 className="w-4 h-4 text-green-500" />
              <span className="font-semibold text-ink">Estúdio 01</span>
              <span className="ml-2 inline-flex items-center gap-1.5 text-[12px] text-green-600">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> ao vivo
              </span>
            </div>
            <h3 className="mt-4 text-[22px] font-bold text-ink">Estúdio em voz</h3>
            <p className="mt-2 text-[14px] text-muted max-w-sm">
              Senta em call e edita junto com a galera. A produtividade dobra e
              cada minuto ativo vira XP.
            </p>
            <div className="mt-auto pt-6 flex flex-wrap gap-2">
              {AVATARS.slice(10, 16).map((src, i) => (
                <span
                  key={src}
                  className="relative w-12 h-12 rounded-full overflow-hidden"
                  style={{ boxShadow: i % 2 === 0 ? "0 0 0 2.5px #22c55e" : "0 0 0 2.5px transparent" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </span>
              ))}
              <span className="w-12 h-12 rounded-full bg-soft border border-line flex items-center justify-center text-[12px] font-bold text-muted">
                +9
              </span>
            </div>
          </motion.div>

          {/* Mural de conquistas */}
          <motion.div {...fadeUp(0.12)} className="col-span-2 lg:col-span-2 relative rounded-3xl bg-white border border-line p-7 overflow-hidden">
            <div className="flex items-center gap-2 text-muted text-[13px]">
              <Hash className="w-4 h-4" />
              <span className="font-semibold text-ink">mural-de-conquistas</span>
            </div>
            <h3 className="mt-4 text-[20px] font-bold text-ink">Toda venda vira post</h3>
            <div className="mt-4 flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/avatars2/luccagarcez.webp" alt="" className="w-9 h-9 rounded-full object-cover" />
              <div className="flex items-center gap-2 rounded-xl bg-accent-soft border border-accent/20 px-3 py-2">
                <Trophy className="w-4 h-4 text-accent" />
                <span className="font-bold text-ink text-[15px]">R$ 3.000</span>
                <span className="text-[11px] text-muted">fechado hoje</span>
              </div>
            </div>
            <p className="mt-3 text-[13px] text-muted">
              Reputação se constrói na frente de todo mundo, com print do
              pagamento.
            </p>
          </motion.div>

          {/* Crítica */}
          <motion.div {...fadeUp(0.18)} className="relative rounded-3xl bg-white border border-line p-6 overflow-hidden">
            <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent-soft text-accent">
              <Scissors className="w-5 h-5" />
            </span>
            <h3 className="mt-4 text-[18px] font-bold text-ink">Crítica de vídeo</h3>
            <p className="mt-1.5 text-[13px] text-muted">
              Sobe seu corte e recebe feedback de quem entende. Critica e ganha XP.
            </p>
          </motion.div>

          {/* Streak */}
          <motion.div {...fadeUp(0.24)} className="relative rounded-3xl border border-accent/25 p-6 overflow-hidden bg-gradient-to-br from-accent-soft to-white">
            <div className="flex items-center gap-2">
              <Flame className="w-6 h-6 text-accent" />
              <span className="font-[family-name:var(--font-display)] text-[34px] leading-none text-accent">47</span>
            </div>
            <h3 className="mt-3 text-[18px] font-bold text-ink">Dias de streak</h3>
            <p className="mt-1.5 text-[13px] text-muted">
              Um ato por dia mantém o fogo aceso. 100 dias e você é outra pessoa.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
