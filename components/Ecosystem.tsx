"use client";

import { motion } from "framer-motion";
import { ECOSYSTEM } from "@/lib/site";

export default function Ecosystem() {
  return (
    <section id="ecossistema" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-bold tracking-[0.3em] uppercase text-violet"
          >
            Mais que um Discord
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-4 font-[family-name:var(--font-display)] uppercase text-white leading-[0.96] tracking-[-0.01em] text-[clamp(2.25rem,6vw,4rem)]"
          >
            Comunidade, portfólio
            <br />
            e <span className="text-accent">clientes.</span> Conectados.
          </motion.h2>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {ECOSYSTEM.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative rounded-3xl p-7 sm:p-8 flex flex-col overflow-hidden"
              style={{
                background: "linear-gradient(180deg, #14141d 0%, #0c0c12 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span className="inline-flex self-start items-center rounded-full bg-violet/12 border border-violet/25 px-3 py-1 text-[11px] font-mono text-violet">
                {e.tag}
              </span>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-[30px] leading-none uppercase text-white">
                {e.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-muted flex-1">
                {e.text}
              </p>
              <div
                className="mt-6 h-1 w-12 rounded-full"
                style={{
                  background:
                    i === 2
                      ? "linear-gradient(90deg, #e30613, #ffb800)"
                      : "#7c5cff",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
