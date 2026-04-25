"use client";

import { brands } from "@/lib/data";

export default function BrandsMarquee() {
  const loop = [...brands, ...brands];
  return (
    <section className="border-y border-white/5 bg-white/[0.02] py-8">
      <div className="marquee-mask overflow-hidden">
        <div className="flex animate-marquee gap-12 whitespace-nowrap px-6">
          {loop.map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="font-display text-2xl font-bold uppercase tracking-widest text-brand-ink/30 transition hover:text-brand-ink/80"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
