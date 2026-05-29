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
            className="text-[11px] font-bold tracking-[0.3em] uppercase text-violet"
          >
            Por dentro da casa
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-4 font-[family-name:var(--font-display)] uppercase text-white leading-[0.96] tracking-[-0.01em] text-[clamp(2.25rem,6vw,4rem)]"
          >
            Não é grupo de Discord.
            <br />
            <span className="text-accent">É lugar de trabalhar.</span>
          </motion.h2>
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
                className="group relative rounded-3xl p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(180deg, #14141d 0%, #0c0c12 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-16 -right-10 w-56 h-56 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(124,92,255,0.22) 0%, transparent 70%)",
                    filter: "blur(24px)",
                  }}
                />
                <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-violet/12 text-violet">
                  <Icon className="w-6 h-6" strokeWidth={1.8} />
                </div>
                <h3 className="relative mt-5 text-[19px] font-bold text-white">
                  {f.title}
                </h3>
                <p className="relative mt-2 text-[14px] leading-relaxed text-muted">
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
