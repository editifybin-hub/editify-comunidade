"use client";

import { motion } from "framer-motion";
import { FEATURES } from "@/lib/site";
import { featureIcon } from "./Icons";

export default function Features() {
  return (
    <section id="por-dentro" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-bold tracking-[0.3em] uppercase text-accent"
          >
            Por dentro da casa
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-4 font-[family-name:var(--font-display)] uppercase text-ink leading-[0.96] tracking-[-0.01em] text-[clamp(2.25rem,6vw,4rem)]"
          >
            Grupo de editores
            <br />
            <span className="text-accent">pra trabalho e progresso.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-5 text-[15px] sm:text-[16px] text-muted max-w-[520px]"
          >
            Tudo que você já faria editando, só que com gente do lado, ferramenta
            de verdade e cada passo virando reputação.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => {
            const Icon = featureIcon(f.icon);
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="group relative rounded-3xl p-7 bg-white border border-line transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,15,20,0.1)] hover:border-accent/30"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-soft text-accent">
                  <Icon className="w-6 h-6" strokeWidth={1.9} />
                </div>
                <h3 className="mt-5 text-[19px] font-bold text-ink">{f.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">
                  {f.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
