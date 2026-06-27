"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "500+", label: "Patients" },
  { value: "10+", label: "Years" },
  { value: "98%", label: "Satisfaction" },
  { value: "20+", label: "Treatments" },
];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springCfg = { damping: 35, stiffness: 100 };
  const floatX = useSpring(useTransform(mouseX, [-600, 600], [-18, 18]), springCfg);
  const floatY = useSpring(useTransform(mouseY, [-400, 400], [-12, 12]), springCfg);
  const floatXSlow = useSpring(useTransform(mouseX, [-600, 600], [-8, 8]), springCfg);
  const floatYSlow = useSpring(useTransform(mouseY, [-400, 400], [-5, 5]), springCfg);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-blush via-white to-gold-pale lg:min-h-screen lg:flex lg:flex-col">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ x: floatXSlow, y: floatYSlow }}
          className="absolute -top-32 -right-32 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] rounded-full bg-rose-light/40 blur-3xl"
        />
        <motion.div
          style={{ x: floatX, y: floatY }}
          className="absolute bottom-0 -left-32 w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] rounded-full bg-gold-pale/60 blur-3xl"
        />
      </div>

      {/* Content — no min-h-screen on mobile, tight padding */}
      <div className="relative z-10 lg:flex-1 lg:flex lg:items-center">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full pt-[76px] pb-8 sm:pt-[88px] sm:pb-10 lg:pt-28 lg:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">

            {/* ── Left: Text ── */}
            <div>
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-2 mb-3 lg:mb-5"
              >
                <div className="h-px w-6 lg:w-10 bg-rose-primary" />
                <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-rose-primary">
                  Luxury Medical Care
                </span>
              </motion.div>

              {/* Title — 42px mobile → 76px desktop */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="font-serif font-light text-[42px] sm:text-[52px] md:text-[64px] lg:text-[72px] xl:text-[80px] leading-[0.95] tracking-[-0.02em] text-clinic-dark"
              >
                Premium Medical{" "}
                <em className="not-italic text-rose-primary">Care</em>
                <br />
                With a Personal Touch
              </motion.h1>

              {/* Subtitle — short on mobile, full on desktop */}
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.32 }}
                className="mt-3 sm:mt-4 lg:mt-6 text-[13px] sm:text-[15px] lg:text-base leading-[1.65] text-clinic-muted max-w-md"
              >
                <span className="lg:hidden">Tailored aesthetic care, designed around you.</span>
                <span className="hidden lg:inline">Where advanced aesthetic care meets the art of living well.
                Every treatment is thoughtfully tailored to your health,
                confidence, and natural beauty.</span>
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.44 }}
                className="mt-4 lg:mt-8 flex flex-row items-center gap-2 sm:gap-3"
              >
                <Link
                  href="/appointment"
                  className="group inline-flex items-center gap-1.5 px-4 py-2.5 sm:px-7 sm:py-3.5 bg-rose-primary text-white text-[11px] sm:text-[13px] font-medium tracking-wider uppercase rounded-full hover:bg-rose-deep transition-all duration-300 hover:shadow-lg hover:shadow-rose-primary/25 hover:-translate-y-0.5 whitespace-nowrap"
                >
                  Book Now
                  <ArrowRight size={11} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-4 py-2.5 sm:px-7 sm:py-3.5 border border-clinic-border text-clinic-body text-[11px] sm:text-[13px] font-medium tracking-wider uppercase rounded-full hover:border-rose-primary hover:text-rose-primary transition-all duration-300 whitespace-nowrap"
                >
                  Our Services
                </Link>
              </motion.div>

              {/* Trust line */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-3 lg:mt-6 text-[10px] text-clinic-muted/60 tracking-wide"
              >
                ✦&nbsp; Consultation-based &nbsp;·&nbsp; Strictly confidential
              </motion.p>
            </div>

            {/* ── Right: Image ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="flex justify-center lg:justify-start mt-5 lg:mt-0"
            >
              {/* Mobile image — with editorial stat badges */}
              {/* REPLACE: swap this div for <Image src="/your-photo.jpg" ... /> */}
              <div className="lg:hidden h-[260px] sm:h-[360px] w-[86vw] max-w-[340px] rounded-[1.75rem] overflow-hidden shadow-xl shadow-rose-primary/10 bg-gradient-to-br from-rose-light via-rose-mid/60 to-rose-primary/25 flex flex-col items-center justify-center gap-3 relative">
                <div className="text-rose-primary/35">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                    <circle cx="12" cy="13" r="4"/>
                  </svg>
                </div>
                <p className="text-rose-primary/45 text-[9px] tracking-widest uppercase text-center px-6">
                  Replace with clinic photo
                </p>
                <div className="absolute inset-2 rounded-[1.4rem] border border-white/30 pointer-events-none" />
                {/* Stat badge — bottom left */}
                <div className="absolute bottom-4 left-4 bg-white/92 backdrop-blur-sm rounded-2xl px-3.5 py-2.5 border border-white/70 shadow-lg">
                  <p className="font-serif text-lg text-rose-primary font-medium leading-none">500+</p>
                  <p className="text-[9px] text-clinic-muted mt-0.5 uppercase tracking-wide">Patients</p>
                </div>
                {/* Satisfaction badge — bottom right */}
                <div className="absolute bottom-4 right-4 bg-white/92 backdrop-blur-sm rounded-2xl px-3.5 py-2.5 border border-white/70 shadow-lg flex items-center gap-1.5">
                  <span className="text-[#C9A96E] text-base leading-none">★</span>
                  <div>
                    <p className="font-serif text-lg text-rose-primary font-medium leading-none">98%</p>
                    <p className="text-[9px] text-clinic-muted mt-0.5 uppercase tracking-wide">Rated</p>
                  </div>
                </div>
              </div>

              {/* Desktop image — with parallax + floating badges */}
              <motion.div
                style={{ x: floatX, y: floatY }}
                className="hidden lg:flex items-center justify-center relative"
              >
                {/* REPLACE: swap this div for <Image src="/your-photo.jpg" ... /> */}
                <div className="relative w-[460px] h-[580px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-rose-primary/15 bg-gradient-to-br from-rose-light via-rose-mid/50 to-rose-primary/25 flex flex-col items-center justify-center gap-4">
                  <div className="text-rose-primary/40">
                    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                      <circle cx="12" cy="13" r="4"/>
                    </svg>
                  </div>
                  <p className="text-rose-primary/50 text-xs tracking-widest uppercase text-center px-10">
                    Replace with doctor or clinic photo
                    <br />(460 × 580 px)
                  </p>
                  <div className="absolute inset-3 rounded-[2rem] border border-white/40 pointer-events-none" />
                </div>

                {/* Floating badge top-left */}
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-8 top-16 bg-white shadow-xl shadow-clinic-dark/8 rounded-2xl px-5 py-4 border border-clinic-border"
                >
                  <p className="text-[10px] text-clinic-muted uppercase tracking-widest mb-0.5">Trusted by</p>
                  <p className="font-serif text-2xl text-clinic-dark font-medium leading-none">500+</p>
                  <p className="text-[10px] text-clinic-muted mt-0.5">Patients</p>
                </motion.div>

                {/* Floating badge bottom-right */}
                <motion.div
                  animate={{ y: [0, 7, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute -right-6 bottom-20 bg-white shadow-xl shadow-clinic-dark/8 rounded-2xl px-5 py-4 border border-clinic-border"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gold-pale flex items-center justify-center">
                      <span className="text-gold text-sm">★</span>
                    </div>
                    <div>
                      <p className="font-serif text-lg text-clinic-dark font-medium leading-none">98%</p>
                      <p className="text-[10px] text-clinic-muted mt-0.5 uppercase tracking-wider">Satisfaction</p>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative rings */}
                <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full border border-rose-mid/30" />
                <div className="absolute -right-5 -top-5 w-20 h-20 rounded-full border border-rose-mid/20" />
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile-only: mini visual gallery strip — Replace with actual clinic photos */}
          <div className="lg:hidden mt-4 mb-1 flex gap-2.5 overflow-x-auto -mx-5 px-5 pb-1 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
            {[
              { label: "Clinic Interior" },   // Replace: <Image src="/images/clinic.jpg" />
              { label: "Treatment Suite" },   // Replace: <Image src="/images/treatment.jpg" />
              { label: "Consultation Room" }, // Replace: <Image src="/images/consultation.jpg" />
              { label: "Our Space" },         // Replace: <Image src="/images/space.jpg" />
            ].map((item, i) => (
              <div
                key={i}
                className="shrink-0 w-[26vw] max-w-[100px] min-w-[82px] h-[58px] rounded-[0.875rem] overflow-hidden bg-gradient-to-br from-rose-blush to-rose-light flex flex-col items-center justify-center gap-0.5 border border-rose-light/50"
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-rose-primary/35">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
                <p className="text-[6px] text-rose-primary/35 tracking-widest uppercase text-center leading-tight px-1">{item.label}</p>
              </div>
            ))}
            <div className="shrink-0 w-2" aria-hidden />
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="relative z-10 bg-white/80 backdrop-blur-md border-t border-clinic-border"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 divide-x divide-clinic-border">
            {stats.map((stat, i) => (
              <div key={i} className="py-3 sm:py-5 px-2 sm:px-5 text-center">
                <p className="font-serif text-[18px] sm:text-2xl md:text-3xl text-clinic-dark font-medium leading-none">{stat.value}</p>
                <p className="text-[9px] sm:text-xs text-clinic-muted mt-1 tracking-wide uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
