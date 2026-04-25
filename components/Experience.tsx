"use client";

import { motion } from "framer-motion";
import { Briefcase, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Career Journey"
          title="Brands I've"
          highlight="leveled up."
          description="From Tripoli to Accra, Fort-de-France to Riyadh — here's the work that shaped my craft."
        />

        <div className="relative">
          {/* Timeline spine */}
          <div className="absolute left-4 top-0 bottom-0 hidden w-px bg-gradient-to-b from-brand-orange via-brand-pink to-brand-violet md:block" />

          <ol className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.li
                key={`${exp.company}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className="relative md:pl-14"
              >
                {/* Dot */}
                <span className="absolute left-2 top-7 hidden h-5 w-5 -translate-x-1/2 rounded-full border-4 border-[#0a0118] bg-grad-primary md:block" />

                <div className="glass glow-card rounded-3xl p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 text-sm font-medium text-brand-mute">
                        <Briefcase size={14} /> {exp.role}
                      </div>
                      <h3 className="mt-1 font-display text-2xl font-bold text-brand-ink">
                        {exp.company}
                      </h3>
                    </div>
                    <span className="rounded-full bg-grad-primary/10 px-3 py-1 text-xs font-semibold text-brand-amber">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {exp.bullets.map((b, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2 text-sm leading-relaxed text-brand-ink/75"
                      >
                        <ChevronRight
                          size={16}
                          className="mt-1 shrink-0 text-brand-pink"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-brand-violet/30 bg-brand-violet/10 px-3 py-1 text-xs font-medium text-brand-mute"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
