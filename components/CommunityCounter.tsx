"use client";

import { useEffect, useRef, useState } from "react";
import { AVATARS, EDITOR_COUNT } from "@/lib/site";

const VISIBLE = 5;

export default function CommunityCounter() {
  const [count, setCount] = useState(EDITOR_COUNT);
  const nextIdx = useRef(VISIBLE);
  const idCounter = useRef(VISIBLE);
  const [ring, setRing] = useState(() =>
    AVATARS.slice(0, VISIBLE).map((src, i) => ({ src, id: i }))
  );

  // contador sobe devagar
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      setCount((c) => c + 1);
      t = setTimeout(tick, 4000 + Math.random() * 5000);
    };
    t = setTimeout(tick, 3000);
    return () => clearTimeout(t);
  }, []);

  // troca uma foto por vez
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const cycle = () => {
      const newSrc = AVATARS[nextIdx.current % AVATARS.length];
      nextIdx.current += 1;
      idCounter.current += 1;
      const newId = idCounter.current;
      setRing((prev) => [...prev.slice(1), { src: newSrc, id: newId }]);
      t = setTimeout(cycle, 1800);
    };
    t = setTimeout(cycle, 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="inline-flex items-center gap-4 rounded-2xl bg-white border border-line px-5 py-3.5 shadow-[0_10px_30px_rgba(15,15,20,0.06)]">
      <div className="flex -space-x-3">
        {ring.map(({ src, id }, i) => (
          <span
            key={id}
            className="w-9 h-9 rounded-full border-2 border-white overflow-hidden bg-soft shrink-0"
            style={{ zIndex: VISIBLE - i }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </span>
        ))}
      </div>
      <div className="text-left leading-tight">
        <span className="block font-[family-name:var(--font-display)] text-[26px] text-ink leading-none">
          +<span className="tabular-nums">{count.toLocaleString("pt-BR")}</span>
        </span>
        <span className="block text-[12px] text-muted">
          editores na comunidade
        </span>
      </div>
    </div>
  );
}
