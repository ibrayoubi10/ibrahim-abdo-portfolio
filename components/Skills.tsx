"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Megaphone,
  Palette,
  Wrench,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "@/lib/data";

const icons = [Briefcase, Megaphone, Palette, Wrench];

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="Tools, frameworks &"
          highlight="superpowers."
          description="A blended stack of strategy, performance marketing, and creative production."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.article
                key={g.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass glow-card group relative overflow-hidden rounded-3xl p-6"
              >
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-grad-primary/15 ring-1 ring-brand-pink/30">
                  <Icon className="text-brand-pink" size={22} />
                </div>
                <h3 className="font-display text-lg font-bold text-brand-ink">
                  {g.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-brand-ink/80 transition group-hover:border-brand-pink/40"
                    >
                      {it}
                    </li>
                  ))}
                </ul>

                {/* Decorative gradient corner */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-grad-primary opacity-10 blur-3xl transition group-hover:opacity-25" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
