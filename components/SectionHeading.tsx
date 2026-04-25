"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
}: Props) {
  return (
    <div className="mb-14 text-center">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block rounded-full border border-brand-violet/30 bg-brand-violet/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-violet"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-4 font-display text-4xl font-bold leading-tight text-brand-ink sm:text-5xl"
      >
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-base text-brand-ink/65"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
