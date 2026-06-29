"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* ════════════════════════════════════════════════════════════
          MOBILE HERO — full-bleed dark video, text overlay at bottom
      ════════════════════════════════════════════════════════════ */}
      <div className="lg:hidden relative min-h-[100svh] flex flex-col">

        {/* Video / Placeholder background */}
        <div className="absolute inset-0">
          {/* Luxury dark placeholder — visible when no video is loaded */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f0d] via-[#2d1a17] to-[#3d2a25]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,rgba(217,124,146,0.14),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_80%,rgba(201,169,110,0.08),transparent)]" />
          {/* Replace this with the clinic hero video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            {/* <source src="/videos/hero.mp4" type="video/mp4" /> */}
          </video>
        </div>

        {/* Bottom-to-top gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 pointer-events-none" />

        {/* Placeholder indicator — remove once real video is added */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 text-white/20 pointer-events-none">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75">
            <path d="M15 10l4.553-2.069A1 1 0 0 1 21 8.845v6.31a1 1 0 0 1-1.447.894L15 14M3 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8z"/>
          </svg>
          <p className="text-[8px] tracking-[0.3em] uppercase">Add video: /videos/hero.mp4</p>
        </div>

        {/* Content pinned to bottom */}
        <div className="relative z-10 mt-auto px-6 pb-12 pt-28">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[9px] tracking-[0.42em] uppercase text-rose-primary/90 mb-5"
          >
            Aesthetic &nbsp;·&nbsp; Medicine
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif font-light text-[2.75rem] leading-[0.95] tracking-[-0.02em] text-white mb-8"
          >
            Premium{" "}
            <em className="not-italic text-rose-light">Care,</em>
            <br />Personal Touch.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <Link
              href="/appointment"
              className="group inline-flex items-center gap-2 px-7 py-3 bg-white text-clinic-dark text-[11px] font-medium tracking-[0.18em] uppercase rounded-full hover:bg-rose-blush transition-all duration-300"
            >
              Book Consultation
              <ArrowRight size={11} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="mt-6 text-[9px] text-white/60 tracking-[0.16em] uppercase"
          >
            Consultation-based &nbsp;·&nbsp; Strictly confidential
          </motion.p>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════
          DESKTOP HERO — cinematic text panel (left) + video (right)
      ════════════════════════════════════════════════════════════ */}
      <div className="hidden lg:flex min-h-screen">

        {/* Left: editorial text panel */}
        <div className="w-[42%] xl:w-[38%] flex flex-col justify-center px-14 xl:px-20 py-28 bg-white border-r border-clinic-border relative z-10">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-14"
          >
            <div className="h-px w-8 bg-rose-primary" />
            <span className="text-[10px] font-medium tracking-[0.32em] uppercase text-rose-primary">
              Aesthetic Medicine
            </span>
          </motion.div>

          {/* Headline — two lines, cinematic */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif font-light text-[56px] xl:text-[68px] leading-[0.93] tracking-[-0.025em] text-clinic-dark mb-10"
          >
            Refined <em className="not-italic text-rose-primary">Care,</em>
            <br />Quiet Luxury.
          </motion.h1>

          {/* Single-line description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="text-[13px] text-clinic-muted leading-[1.85] max-w-[220px] mb-14"
          >
            Personalized aesthetic care in a calm, private clinical setting.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.46 }}
            className="flex items-center gap-7"
          >
            <Link
              href="/appointment"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-rose-primary text-white text-[11px] font-medium tracking-[0.2em] uppercase rounded-full hover:bg-rose-deep transition-all duration-300 hover:shadow-lg hover:shadow-rose-primary/25"
            >
              Book Consultation
              <ArrowRight size={11} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/services"
              className="text-[10px] tracking-[0.18em] uppercase text-clinic-muted/70 hover:text-rose-primary transition-colors duration-300"
            >
              Our Services
            </Link>
          </motion.div>

        </div>

        {/* Right: video panel */}
        <div className="flex-1 relative overflow-hidden">
          {/* Warm rose placeholder background */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-light via-rose-mid/70 to-rose-deep/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_30%_30%,rgba(255,255,255,0.18),transparent)]" />

          {/* Placeholder indicator */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/40 pointer-events-none">
            <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75">
              <path d="M15 10l4.553-2.069A1 1 0 0 1 21 8.845v6.31a1 1 0 0 1-1.447.894L15 14M3 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8z"/>
            </svg>
            <p className="text-[10px] tracking-[0.28em] uppercase">Replace with clinic video</p>
            <p className="text-[9px] opacity-60">/public/videos/hero.mp4</p>
          </div>

          {/* Replace this with the clinic hero video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            {/* <source src="/videos/hero.mp4" type="video/mp4" /> */}
          </video>

          {/* Subtle watermark bottom-right */}
          <div className="absolute bottom-8 right-10 text-right pointer-events-none">
            <p className="text-white/30 text-[9px] tracking-[0.3em] uppercase font-light">Dr. Pazit Clinic</p>
          </div>
        </div>

      </div>
    </section>
  );
}
