"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import { profile, stats } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* Animated gradient blobs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-brand-pink/30 blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, -25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-20 top-40 h-96 w-96 rounded-full bg-brand-violet/30 blur-[140px]"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-orange/25 blur-[120px]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12">
        {/* Left: Copy */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-pink/30 bg-brand-pink/10 px-4 py-1.5 text-xs font-medium text-brand-pink"
          >
            <Sparkles size={14} />
            Available for new projects · 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-brand-ink sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">{profile.name}</span>
            <br />
            <span className="text-brand-ink/90">Project Manager</span>{" "}
            <span className="gradient-text">×</span>{" "}
            <span className="text-brand-ink/90">Marketer.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-ink/70"
          >
            {profile.tagline} I lead{" "}
            <span className="text-brand-ink">multi-brand campaigns</span>,
            architect <span className="text-brand-ink">SEO strategies</span>,
            and turn ad budgets into{" "}
            <span className="text-brand-ink">measurable revenue</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white"
            >
              Start a Project <ArrowRight size={16} />
            </a>
            <a
              href={profile.cvFile}
              download
              className="btn-ghost inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-brand-ink"
            >
              <Download size={16} /> Download CV
            </a>
            <span className="inline-flex items-center gap-1.5 text-sm text-brand-ink/60">
              <MapPin size={14} /> {profile.location}
            </span>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass glow-card rounded-2xl p-4 transition-transform hover:-translate-y-1"
              >
                <div className="font-display text-2xl font-bold gradient-text">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-brand-ink/60">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Portrait card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto lg:col-span-5"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-grad-primary opacity-40 blur-3xl" />

          <div className="glow-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-brand-surface to-[#1a0833] p-1.5 shadow-2xl">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-brand-violet/30 via-brand-pink/20 to-brand-orange/20">
              <PortraitPlaceholder />

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-4 top-4 rounded-full bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md"
              >
                4+ Years
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-4 left-4 rounded-full bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md"
              >
                $200K+ Managed
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PortraitPlaceholder() {
  return (
    <svg
      viewBox="0 0 400 500"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 h-full w-full"
      aria-label="Portrait placeholder"
    >
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a0833" />
          <stop offset="100%" stopColor="#0a0118" />
        </linearGradient>
        <linearGradient id="suit" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#0f0c29" />
        </linearGradient>
        <radialGradient id="halo" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="rgba(236,72,153,0.35)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <rect width="400" height="500" fill="url(#bg)" />
      <circle cx="200" cy="200" r="200" fill="url(#halo)" />
      {/* Head */}
      <circle cx="200" cy="190" r="70" fill="#3a2a4a" />
      {/* Beard hint */}
      <path d="M150,210 Q200,260 250,210 L250,230 Q200,275 150,230 Z" fill="#1f1530" />
      {/* Glasses */}
      <circle cx="178" cy="180" r="14" stroke="#fbbf24" strokeWidth="2" fill="none" />
      <circle cx="222" cy="180" r="14" stroke="#fbbf24" strokeWidth="2" fill="none" />
      <line x1="192" y1="180" x2="208" y2="180" stroke="#fbbf24" strokeWidth="2" />
      {/* Body / Suit */}
      <path
        d="M80,500 L80,360 Q200,280 320,360 L320,500 Z"
        fill="url(#suit)"
      />
      {/* Shirt */}
      <path d="M170,500 L170,330 Q200,360 230,330 L230,500 Z" fill="#f5f3ff" />
      {/* Tie */}
      <path d="M195,330 L205,330 L210,420 L200,500 L190,420 Z" fill="#1e1b4b" />
      <text
        x="200"
        y="478"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="11"
        fill="#a78bfa"
        opacity="0.6"
      >
        Replace /public/profile.jpg
      </text>
    </svg>
  );
}
