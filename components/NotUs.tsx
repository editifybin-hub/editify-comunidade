"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { NOT_US } from "@/lib/site";

export default function NotUs() {
  return (
    <section className="relative py-20 sm:py-24 border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center font-[family-name:var(--font-display)] uppercase text-white leading-[0.98] tracking-[-0.01em] text-[clamp(1.9rem,5vw,3.25rem)]"
        >
          Sei o que você tá pensando
        </motion.h2>

        <div className="mt-10 space-y-3">
          {NOT_US.map((item, i) => (
            <motion.div
              key={item.not}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 rounded-2xl p-5"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <span className="inline-flex items-center gap-2 shrink-0 sm:w-[260px]">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/15 text-accent shrink-0">
                  <X className="w-3.5 h-3.5" strokeWidth={3} />
                </span>
                <span className="font-semibold text-white/90">{item.not}</span>
              </span>
              <span className="flex items-start gap-2 text-[14px] text-muted">
                <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" strokeWidth={2.5} />
                {item.yes}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
