"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Languages, Target } from "lucide-react";
import SectionHeading from "./SectionHeading";
import {
  about,
  certifications,
  education,
  languages as langs,
} from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About Me"
          title="Strategy meets"
          highlight="storytelling."
          description={about.intro}
        />

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Bio + highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass glow-card rounded-3xl p-8 lg:col-span-7"
          >
            <div className="flex items-center gap-3">
              <Target className="text-brand-pink" size={22} />
              <h3 className="font-display text-xl font-semibold text-brand-ink">
                What I Do
              </h3>
            </div>
            <p className="mt-4 text-brand-ink/75 leading-relaxed">
              {about.body}
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {about.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2 text-sm text-brand-ink/80"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-grad-primary" />
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass glow-card rounded-3xl p-8 lg:col-span-5"
          >
            <div className="flex items-center gap-3">
              <Languages className="text-brand-orange" size={22} />
              <h3 className="font-display text-xl font-semibold text-brand-ink">
                Languages
              </h3>
            </div>

            <div className="mt-6 space-y-5">
              {langs.map((l) => (
                <div key={l.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-brand-ink">
                      {l.name}
                    </span>
                    <span className="text-brand-ink/60">{l.level}</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${l.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full bg-grad-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass glow-card rounded-3xl p-8 lg:col-span-6"
          >
            <div className="flex items-center gap-3">
              <GraduationCap className="text-brand-violet" size={22} />
              <h3 className="font-display text-xl font-semibold text-brand-ink">
                Education
              </h3>
            </div>
            <ul className="mt-6 space-y-4">
              {education.map((e) => (
                <li
                  key={e.degree}
                  className="rounded-2xl border border-white/5 bg-white/[0.02] p-4"
                >
                  <div className="font-medium text-brand-ink">{e.degree}</div>
                  <div className="text-sm text-brand-ink/60">
                    {e.school} · {e.period}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass glow-card rounded-3xl p-8 lg:col-span-6"
          >
            <div className="flex items-center gap-3">
              <Award className="text-brand-amber" size={22} />
              <h3 className="font-display text-xl font-semibold text-brand-ink">
                Certifications
              </h3>
            </div>
            <ul className="mt-6 space-y-4">
              {certifications.map((c) => (
                <li
                  key={c.title}
                  className="flex items-start justify-between gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4"
                >
                  <div>
                    <div className="font-medium text-brand-ink">{c.title}</div>
                    <div className="text-sm text-brand-ink/60">{c.issuer}</div>
                  </div>
                  <span className="shrink-0 rounded-full bg-grad-primary/10 px-3 py-1 text-xs font-medium text-brand-amber">
                    {c.date}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
