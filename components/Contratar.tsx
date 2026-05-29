"use client";

import { motion } from "framer-motion";
import { Search, Filter, MessageCircle, Megaphone } from "lucide-react";
import { CONTRATAR_STEPS } from "@/lib/site";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay },
});

export default function Contratar() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="max-w-2xl">
          <motion.p {...fadeUp(0)} className="text-[11px] font-bold tracking-[0.3em] uppercase text-accent">
            contratar.editify.com.br
          </motion.p>
          <motion.h2
            {...fadeUp(0.08)}
            className="mt-4 font-[family-name:var(--font-display)] uppercase text-ink leading-[0.96] tracking-[-0.01em] text-[clamp(2.25rem,6vw,4rem)]"
          >
            O cliente te acha.
            <br />
            <span className="text-accent">Você recebe direto.</span>
          </motion.h2>
          <motion.p {...fadeUp(0.16)} className="mt-5 text-[15px] sm:text-[16px] text-muted leading-relaxed max-w-[540px]">
            É o marketplace onde cliente e editor se encontram sem agência no
            meio. A Editify não toca no seu dinheiro: o preço que você cobra cai
            inteiro no seu PIX.
          </motion.p>
        </div>

        {/* 3 passos */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {CONTRATAR_STEPS.map((s, i) => {
            const Icon = [Search, Filter, MessageCircle][i];
            return (
              <motion.div
                key={s.n}
                {...fadeUp(0.1 + i * 0.1)}
                className="relative rounded-3xl bg-white border border-line p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent-soft text-accent">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="font-[family-name:var(--font-display)] text-[28px] text-ink/12 leading-none">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-5 text-[18px] font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-[14px] text-muted leading-relaxed">{s.text}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Mural de ofertas + 0% comissão */}
        <div className="mt-5 grid lg:grid-cols-[1.3fr_1fr] gap-5">
          <motion.div {...fadeUp(0.2)} className="rounded-3xl bg-white border border-line p-7">
            <div className="flex items-center gap-2 text-muted text-[13px]">
              <Megaphone className="w-4 h-4 text-accent" />
              <span className="font-semibold text-ink">mural-de-ofertas</span>
            </div>
            <h3 className="mt-3 text-[19px] font-bold text-ink">
              Tem cliente postando oferta toda hora
            </h3>
            <p className="mt-2 text-[14px] text-muted leading-relaxed max-w-lg">
              Quem não quer procurar posta a vaga direto no Discord, em 20
              segundos. Os editores interessados chamam no WhatsApp. Você só
              precisa estar de olho.
            </p>
            <div className="mt-4 rounded-2xl bg-soft border border-line p-4">
              <p className="text-[13px] text-ink/80">
                <span className="font-semibold text-ink">@criador_x</span> procura editor de Reels, estilo gringo, 8 vídeos/mês
              </p>
              <div className="mt-2 flex flex-wrap gap-2 text-[11px]">
                <span className="rounded-full bg-accent-soft text-accent px-2.5 py-1 font-medium">Reels</span>
                <span className="rounded-full bg-white border border-line px-2.5 py-1 text-muted">até R$ 3.000/mês</span>
                <span className="rounded-full bg-white border border-line px-2.5 py-1 text-muted">urgente</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.28)}
            className="rounded-3xl p-7 flex flex-col justify-center text-white"
            style={{ background: "linear-gradient(135deg, #0f0f14, #1c1c26)" }}
          >
            <span className="font-[family-name:var(--font-display)] text-[clamp(3rem,8vw,5rem)] leading-none text-accent">
              0%
            </span>
            <p className="mt-2 text-[18px] font-bold">de comissão</p>
            <p className="mt-2 text-[14px] text-white/65 leading-relaxed">
              Plataforma de freela cobra até 20%. Agência cobra 30%. Aqui é zero.
              O preço do editor é o que o cliente paga.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
