"use client";

import { motion } from "framer-motion";
import { Bot, Sparkles } from "lucide-react";
import { IA_TONES } from "@/lib/site";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay },
});

export default function IACliente() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" style={{ background: "#f5f5f7" }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* texto */}
          <div>
            <motion.p {...fadeUp(0)} className="text-[11px] font-bold tracking-[0.3em] uppercase text-accent">
              IA da casa
            </motion.p>
            <motion.h2
              {...fadeUp(0.08)}
              className="mt-4 font-[family-name:var(--font-display)] uppercase text-ink leading-[0.96] tracking-[-0.01em] text-[clamp(2.25rem,6vw,4rem)]"
            >
              Cliente difícil?
              <br />
              <span className="text-accent">A IA responde por você.</span>
            </motion.h2>
            <motion.p {...fadeUp(0.16)} className="mt-5 text-[15px] sm:text-[16px] text-muted leading-relaxed max-w-[520px]">
              Aquela mensagem chata que te trava por horas? Cola no comando{" "}
              <span className="font-mono text-ink bg-soft border border-line rounded px-1.5 py-0.5 text-[13px]">/cliente</span>.
              A IA é treinada no jeito do Erick lidar com cliente e te devolve
              uma resposta pronta, profissional, sem perder a venda.
            </motion.p>
            <motion.div {...fadeUp(0.24)} className="mt-6 flex flex-wrap gap-2">
              {IA_TONES.map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-white border border-line px-3.5 py-1.5 text-[13px] font-medium text-ink/75">
                  <Sparkles className="w-3.5 h-3.5 text-accent" /> {t}
                </span>
              ))}
            </motion.div>
            <motion.p {...fadeUp(0.3)} className="mt-4 text-[13px] text-muted">
              Escolhe o tom, a IA escreve. Funciona em modo privado (só você vê)
              ou público (a casa toda aprende junto).
            </motion.p>
          </div>

          {/* mockup chat */}
          <motion.div
            {...fadeUp(0.2)}
            className="rounded-3xl bg-white border border-line overflow-hidden shadow-[0_30px_80px_rgba(15,15,20,0.12)]"
          >
            <div className="px-5 py-3 border-b border-line flex items-center gap-2">
              <Bot className="w-4 h-4 text-accent" />
              <span className="font-semibold text-ink text-[14px]">/cliente</span>
              <span className="ml-auto text-[11px] text-muted">tom: Firme</span>
            </div>
            <div className="p-5 space-y-4 bg-soft/40">
              {/* mensagem do cliente */}
              <div className="max-w-[85%]">
                <p className="text-[11px] text-muted mb-1">Cliente</p>
                <div className="rounded-2xl rounded-tl-sm bg-white border border-line px-4 py-3 text-[14px] text-ink/85">
                  &ldquo;cara achei caro demais, R$1.500 num videozinho desse?
                  meu sobrinho faz por 200&rdquo;
                </div>
              </div>
              {/* resposta da IA */}
              <div className="max-w-[88%] ml-auto">
                <p className="text-[11px] text-accent mb-1 text-right flex items-center justify-end gap-1">
                  <Sparkles className="w-3 h-3" /> Resposta sugerida
                </p>
                <div
                  className="rounded-2xl rounded-tr-sm px-4 py-3 text-[14px] text-white leading-relaxed"
                  style={{ background: "linear-gradient(135deg, #e30613, #b00510)" }}
                >
                  Entendo a comparação, mas o que você contrata comigo não é o
                  corte, é o resultado: retenção, ritmo e um vídeo que vende. Se
                  R$200 resolvesse, você não estaria falando comigo. Posso te
                  mostrar 2 cases parecidos com o seu?
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
