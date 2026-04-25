"use client";

import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#070110] px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-brand-ink/55">
          © {new Date().getFullYear()} {profile.name}. Crafted with passion in
          Tripoli, Lebanon.
        </p>
        <div className="flex items-center gap-3">
          <Social href={profile.social.linkedin} label="LinkedIn">
            <Linkedin size={16} />
          </Social>
          <Social href={profile.social.instagram} label="Instagram">
            <Instagram size={16} />
          </Social>
          <Social href={profile.social.facebook} label="Facebook">
            <Facebook size={16} />
          </Social>
          <Social href={profile.social.whatsapp} label="WhatsApp">
            <MessageCircle size={16} />
          </Social>
        </div>
      </div>
    </footer>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-brand-ink/70 transition hover:-translate-y-0.5 hover:border-brand-pink/50 hover:text-brand-ink"
    >
      {children}
    </a>
  );
}
