"use client";

import { motion } from "framer-motion";
import { DISCORD_URL } from "@/lib/site";
import { DiscordIcon } from "./Icons";
import AvatarMarquee from "./AvatarMarquee";

export default function FinalCTA() {
  return (
    <section className="relative pt-10 pb-24 overflow-hidden">
      <AvatarMarquee className="mb-16" />

      <div className="relative max-w-3xl mx-auto px-4 md:px-6">
        <div
          className="relative rounded-[32px] px-6 py-14 sm:py-16 text-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #e30613 0%, #b00510 100%)",
            boxShadow: "0 30px 80px rgba(227,6,19,0.3)",
          }}
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "26px 26px",
            }}
          />
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative font-[family-name:var(--font-display)] uppercase text-white leading-[0.95] tracking-[-0.01em] text-[clamp(2.5rem,7vw,4.5rem)]"
          >
            Tira o casaco.
            <br />
            Você chegou.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative mt-4 text-[16px] sm:text-[18px] text-white/85"
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
            className="relative mt-8 inline-flex items-center justify-center gap-2.5 bg-white text-ink font-bold text-[16px] uppercase tracking-wider px-9 py-5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)]"
          >
            <DiscordIcon className="w-5 h-5 text-discord" />
            Entrar na comunidade
          </motion.a>
        </div>
      </div>
    </section>
  );
}
