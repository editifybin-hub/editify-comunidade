import { AVATARS } from "@/lib/site";

/**
 * Faixa horizontal de avatares de editores, em loop infinito.
 * Usada embaixo do Hero e no CTA final.
 */
export default function AvatarMarquee({
  reverse = false,
  className = "",
}: {
  reverse?: boolean;
  className?: string;
}) {
  const base = AVATARS.slice(0, 20);
  const row = [...base, ...base];

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div
        className="flex gap-3 w-max"
        style={{
          animation: "cmty-marquee 50s linear infinite",
          animationDirection: reverse ? "reverse" : "normal",
          willChange: "transform",
        }}
      >
        {row.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={src}
            alt=""
            className="w-12 h-12 rounded-full object-cover border border-line bg-soft shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
