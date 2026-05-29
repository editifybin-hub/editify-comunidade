"use client";

import { motion } from "framer-motion";
import { DISCORD_URL, AVATARS } from "@/lib/site";
import { DiscordIcon } from "./Icons";

export default function FinalCTA() {
  const base = AVATARS.slice(0, 20);
  const marquee = [...base, ...base];

  return (
    <section className="relative pt-10 pb-24 overflow-hidden">
      {/* marquee de editores */}
      <div
        className="relative w-full overflow-hidden mb-16"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          className="flex gap-3 w-max"
          style={{ animation: "cmty-marquee 50s linear infinite", willChange: "transform" }}
        >
          {marquee.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={src}
              alt=""
              className="w-12 h-12 rounded-full object-cover border border-white/8 bg-surface shrink-0"
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-3xl mx-auto px-4 md:px-6 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] max-w-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(88,101,242,0.18) 0%, transparent 65%)",
            filter: "blur(30px)",
          }}
        />
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative font-[family-name:var(--font-display)] uppercase text-white leading-[0.95] tracking-[-0.01em] text-[clamp(2.5rem,7vw,5rem)]"
        >
          Tira o casaco.
          <br />
          <span className="text-accent">Você chegou.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mt-5 text-[16px] sm:text-[18px] text-muted"
        >
          Entra. Senta. Trabalha. Cresce. É isso aqui.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-9 inline-flex items-center justify-center gap-2.5 text-white font-bold text-[16px] uppercase tracking-wider px-9 py-5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
          style={{
            background: "#5865F2",
            boxShadow: "0 16px 44px rgba(88,101,242,0.45)",
          }}
        >
          <DiscordIcon className="w-5 h-5" />
          Entrar na comunidade
        </motion.a>
      </div>
    </section>
  );
}
