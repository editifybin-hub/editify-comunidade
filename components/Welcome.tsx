"use client";

import { WELCOME_LINES } from "@/lib/site";

export default function Welcome() {
  const lines = [...WELCOME_LINES, ...WELCOME_LINES];

  return (
    <section className="relative py-5 overflow-hidden" style={{ background: "#0f0f14" }}>
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
              <span className="font-[family-name:var(--font-display)] uppercase text-[clamp(1.25rem,2.6vw,1.9rem)] text-white whitespace-nowrap">
                {l}
              </span>
              <span className="text-accent text-lg">❤</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
