"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Shield, Heart } from "lucide-react";
import ScrollReveal from "@/components/effects/ScrollReveal";

const values = [
  {
    icon: <Award size={15} />,
    title: "Precision & Expertise",
    desc: "Every consultation is guided by evidence-based practice and years of specialised experience.",
  },
  {
    icon: <Shield size={15} />,
    title: "Privacy & Discretion",
    desc: "Your personal health journey is treated with the highest standards of confidentiality and care.",
  },
  {
    icon: <Heart size={15} />,
    title: "Personalised Care",
    desc: "No two patients are alike. Every treatment plan is thoughtfully tailored to your unique needs.",
  },
];

export default function AboutPreview() {
  return (
    <section className="bg-white overflow-hidden">

      {/* ══════════════════════════════════════════════════════════
          MOBILE — editorial overlapping card layout
      ══════════════════════════════════════════════════════════ */}
      <div className="lg:hidden pt-14 pb-6">
        {/* Image — padded, with stat badge */}
        <ScrollReveal>
          <div className="relative mx-4">
            {/* REPLACE: Replace with <Image> of the doctor or clinic interior */}
            <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl shadow-rose-primary/12 bg-gradient-to-br from-rose-light to-rose-mid relative flex items-center justify-center">
              <div className="text-center px-8 text-rose-primary/40">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mx-auto mb-2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <p className="text-[9px] tracking-widest uppercase">Doctor photo here</p>
              </div>
              {/* Inset border */}
              <div className="absolute inset-3 rounded-[1.6rem] border border-white/30 pointer-events-none" />
              {/* Stat badge */}
              <div className="absolute bottom-4 right-4 bg-white/93 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/70 shadow-lg shadow-rose-primary/10">
                <p className="font-serif text-2xl text-rose-primary font-medium leading-none">10+</p>
                <p className="text-[9px] text-clinic-muted mt-0.5 uppercase tracking-wider">Years Experience</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Text card — overlaps the image bottom */}
        <ScrollReveal delay={0.15}>
          <div className="relative z-10 -mt-10 mx-4 bg-white/96 backdrop-blur-sm rounded-[1.75rem] border border-rose-light/60 shadow-2xl shadow-rose-primary/6 p-6">
            <p className="text-[10px] font-semibold tracking-[0.28em] uppercase text-rose-primary mb-2">
              About the Clinic
            </p>
            <h2 className="font-serif font-light text-[1.625rem] text-clinic-dark leading-[1.15] mb-3">
              Where Expertise Meets{" "}
              <em className="not-italic text-rose-primary">Elegance</em>
            </h2>
            <p className="text-[13px] text-clinic-muted leading-relaxed mb-5">
              Led by Dr. Pazit Khalil — clinical precision meets genuine personal care.
            </p>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-rose-blush mb-5">
              {["Private Care", "Advanced Clinic", "Personal Approach"].map((chip) => (
                <span key={chip} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-blush border border-rose-light/70 text-[11px] font-medium text-rose-primary tracking-wide">
                  <span className="w-1 h-1 rounded-full bg-rose-primary" />
                  {chip}
                </span>
              ))}
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-[13px] font-medium text-rose-primary hover:text-rose-deep transition-colors"
            >
              Discover Our Story
              <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>

        {/* 2 image thumbnails — Replace with actual clinic interior photos */}
        <ScrollReveal delay={0.25}>
          <div className="mt-3 mx-4 grid grid-cols-2 gap-2.5">
            {/* Replace with: <Image src="/images/treatment-suite.jpg" fill alt="Treatment Suite" className="object-cover" /> */}
            <div className="aspect-[4/3] rounded-[1.1rem] overflow-hidden bg-gradient-to-br from-rose-blush to-rose-light/70 flex flex-col items-center justify-center gap-1 border border-rose-light/40">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="text-rose-primary/35">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                <circle cx="12" cy="13" r="4"/>
              </svg>
              <p className="text-[7px] text-rose-primary/35 tracking-widest uppercase text-center">Treatment Suite</p>
            </div>
            {/* Replace with: <Image src="/images/consultation.jpg" fill alt="Consultation Room" className="object-cover" /> */}
            <div className="aspect-[4/3] rounded-[1.1rem] overflow-hidden bg-gradient-to-br from-rose-mid/20 to-rose-light/50 flex flex-col items-center justify-center gap-1 border border-rose-light/40">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="text-rose-primary/35">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <p className="text-[7px] text-rose-primary/35 tracking-widest uppercase text-center">Consultation Room</p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ══════════════════════════════════════════════════════════
          DESKTOP — original two-column grid (UNCHANGED)
      ══════════════════════════════════════════════════════════ */}
      <div className="hidden lg:block py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* Left — Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              {/* REPLACE: Replace with <Image> of the doctor or clinic interior */}
              <div className="w-full aspect-[3/4] max-w-sm mx-auto rounded-[2.5rem] overflow-hidden shadow-xl shadow-rose-primary/10 bg-gradient-to-br from-rose-light to-rose-mid flex items-center justify-center">
                <div className="text-center px-8 text-rose-primary/40">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mx-auto mb-3">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  <p className="text-xs tracking-widest uppercase">Doctor photo here<br/>(400×530 px)</p>
                </div>
              </div>

              {/* Floating accent card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-1/3 bg-white border border-clinic-border shadow-xl rounded-2xl p-5 max-w-[180px]"
              >
                <p className="font-serif text-3xl text-rose-primary font-medium">10+</p>
                <p className="text-xs text-clinic-muted mt-1 leading-snug">Years of specialised experience</p>
              </motion.div>

              {/* Gold rings */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full border border-gold/30 pointer-events-none" />
              <div className="absolute -bottom-2 -left-2 w-20 h-20 rounded-full border border-gold/20 pointer-events-none" />
            </div>
          </ScrollReveal>

          {/* Right — Text */}
          <div className="flex flex-col">
            <ScrollReveal>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-rose-primary mb-4">
                About the Clinic
              </p>
              <h2 className="font-serif font-light text-4xl md:text-5xl text-clinic-dark leading-tight mb-6">
                Where Expertise Meets{" "}
                <em className="not-italic text-rose-primary">Elegance</em>
              </h2>
              <p className="text-clinic-muted leading-relaxed mb-4">
                Dr. Pazit Clinic was founded on a simple belief: that exceptional medical care
                should feel as beautiful as it looks. Led by Dr. Pazit Khalil, our clinic
                combines clinical excellence with a deeply personal approach — creating an
                environment where you feel heard, valued, and cared for at every step.
              </p>
              <p className="text-clinic-muted leading-relaxed mb-8">
                From your first consultation to your follow-up care, we are committed to
                outcomes that align with your lifestyle, your goals, and your wellbeing.
                Every detail is considered. Every treatment is designed with you in mind.
              </p>
            </ScrollReveal>

            {/* Values */}
            <div className="flex flex-col gap-5 mb-10">
              {values.map((v, i) => (
                <ScrollReveal key={i} delay={i * 0.12} direction="left">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-rose-blush flex items-center justify-center text-rose-primary shrink-0 mt-0.5">
                      {v.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-clinic-dark mb-1">{v.title}</p>
                      <p className="text-xs text-clinic-muted leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.3}>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-medium text-rose-primary hover:text-rose-deep transition-colors"
              >
                Discover Our Story
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
