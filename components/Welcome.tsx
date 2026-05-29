"use client";

import { motion } from "framer-motion";
import { WELCOME_LINES } from "@/lib/site";

export default function Welcome() {
  // duplica pro marquee contínuo
  const lines = [...WELCOME_LINES, ...WELCOME_LINES];

  return (
    <section className="relative py-10 border-y border-white/[0.06] overflow-hidden">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "linear-gradient(90deg, rgba(124,92,255,0.08), rgba(227,6,19,0.06))",
        }}
      />
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div
          className="flex items-center gap-10 w-max"
          style={{ animation: "cmty-marquee 38s linear infinite", willChange: "transform" }}
        >
          {lines.map((l, i) => (
            <div key={i} className="flex items-center gap-10 shrink-0">
              <span className="font-[family-name:var(--font-display)] uppercase text-[clamp(1.4rem,3vw,2.25rem)] text-white/90 whitespace-nowrap">
                {l}
              </span>
              <span className="text-violet text-xl">💙</span>
            </div>
          ))}
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative text-center text-[13px] text-muted mt-7"
      >
        Quando você entra, recebe uma DM. A linguagem aqui é de casa, não de
        networking gelado.
      </motion.p>
    </section>
  );
}
