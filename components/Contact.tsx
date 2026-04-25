"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { profile } from "@/lib/data";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`New project inquiry from ${name}`);
    const body = encodeURIComponent(
      `Hi Ibrahim,\n\n${message}\n\n— ${name}\n${email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    form.reset();
  }

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Let's Collaborate"
          title="Got a brand to"
          highlight="grow?"
          description="Tell me about your project, your goals, or just say hello — I'll reply within 24 hours."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Info card */}
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass glow-card rounded-3xl p-8 lg:col-span-2"
          >
            <h3 className="font-display text-2xl font-bold text-brand-ink">
              Reach out directly
            </h3>
            <p className="mt-2 text-sm text-brand-ink/65">
              Open to remote, hybrid, and on-site engagements.
            </p>

            <ul className="mt-8 space-y-5">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="group flex items-center gap-4"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-grad-primary/15 ring-1 ring-brand-pink/30 transition group-hover:scale-110">
                    <Mail size={18} className="text-brand-pink" />
                  </span>
                  <span>
                    <div className="text-xs uppercase tracking-wider text-brand-ink/50">
                      Email
                    </div>
                    <div className="text-sm font-medium text-brand-ink">
                      {profile.email}
                    </div>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="group flex items-center gap-4"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-grad-primary/15 ring-1 ring-brand-pink/30 transition group-hover:scale-110">
                    <Phone size={18} className="text-brand-orange" />
                  </span>
                  <span>
                    <div className="text-xs uppercase tracking-wider text-brand-ink/50">
                      Phone
                    </div>
                    <div className="text-sm font-medium text-brand-ink">
                      {profile.phone}
                    </div>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-grad-primary/15 ring-1 ring-brand-pink/30">
                  <MapPin size={18} className="text-brand-violet" />
                </span>
                <span>
                  <div className="text-xs uppercase tracking-wider text-brand-ink/50">
                    Location
                  </div>
                  <div className="text-sm font-medium text-brand-ink">
                    {profile.location}
                  </div>
                </span>
              </li>
            </ul>

            <div className="mt-8 rounded-2xl border border-brand-pink/20 bg-brand-pink/5 p-4 text-sm text-brand-ink/70">
              <strong className="text-brand-ink">Open to:</strong> Project
              Management · SEO Audits · Paid Ad Campaigns · Brand Identity ·
              E-commerce Growth
            </div>
          </motion.aside>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass glow-card grid gap-5 rounded-3xl p-8 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field name="name" label="Your Name" placeholder="Talal Khazen" required />
              <Field
                name="email"
                label="Email"
                type="email"
                placeholder="talal@brand.com"
                required
              />
            </div>
            <Field
              name="subject"
              label="Subject"
              placeholder="E.g. New e-commerce launch"
            />
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-brand-ink/60">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me a bit about your project, timeline & budget…"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-brand-ink placeholder:text-brand-ink/35 focus:border-brand-pink/60 focus:outline-none focus:ring-2 focus:ring-brand-pink/30"
              />
            </div>

            <button
              type="submit"
              className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white"
            >
              <Send size={16} /> {sent ? "Email opened — send it!" : "Send Message"}
            </button>
            <p className="text-center text-xs text-brand-ink/45">
              This form opens your email client. For instant chat, use WhatsApp.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-brand-ink/60">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-brand-ink placeholder:text-brand-ink/35 focus:border-brand-pink/60 focus:outline-none focus:ring-2 focus:ring-brand-pink/30"
      />
    </div>
  );
}
