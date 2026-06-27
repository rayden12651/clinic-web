"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

/* ── REPLACE: Update WhatsApp URL and hero content below ── */
const WHATSAPP_URL =
  "https://wa.me/972500000000?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment";

const stats = [
  { value: "500+", label: "Happy Patients" },
  { value: "10+", label: "Years Experience" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "20+", label: "Expert Treatments" },
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
    // Only run parallax on non-touch devices
    const isTouchDevice = () => window.matchMedia("(hover: none)").matches;
    if (isTouchDevice()) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-rose-blush via-white to-gold-pale">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ x: floatXSlow, y: floatYSlow }}
          className="absolute -top-32 -right-32 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] rounded-full bg-rose-light/40 blur-3xl"
        />
        <motion.div
          style={{ x: floatX, y: floatY }}
          className="absolute bottom-0 -left-40 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full bg-gold-pale/60 blur-3xl"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/50 blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-6 sm:pt-24 sm:pb-8 lg:pt-28 lg:pb-16">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">

            {/* Left — Text */}
            <div className="flex flex-col">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-3 mb-4 lg:mb-7"
              >
                <div className="h-px w-8 lg:w-10 bg-rose-primary" />
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-rose-primary">
                  Luxury Medical Care
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="font-serif font-light text-[2.5rem] sm:text-5xl lg:text-[4rem] xl:text-[4.5rem] text-clinic-dark leading-[1.1] tracking-tight"
              >
                Premium Medical Care{" "}
                <em className="not-italic text-rose-primary">With a</em>
                <br />
                <em className="not-italic">Personal Touch</em>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.38 }}
                className="mt-3 lg:mt-6 text-clinic-muted text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg"
              >
                Where advanced aesthetic care meets the art of living well.
                Every treatment is thoughtfully designed to support your health,
                confidence, and natural beauty — with discretion, precision, and elegance.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.52 }}
                className="mt-5 lg:mt-10 flex flex-row sm:flex-row items-center gap-3"
              >
                <Link
                  href="/appointment"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 sm:px-8 sm:py-4 bg-rose-primary text-white text-xs sm:text-sm font-medium tracking-wider uppercase rounded-full hover:bg-rose-deep transition-all duration-300 hover:shadow-xl hover:shadow-rose-primary/25 hover:-translate-y-0.5 whitespace-nowrap"
                >
                  Book Appointment
                  <ArrowRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-8 sm:py-4 border border-clinic-border text-clinic-body text-xs sm:text-sm font-medium tracking-wider uppercase rounded-full hover:border-rose-primary hover:text-rose-primary transition-all duration-300 whitespace-nowrap"
                >
                  View Services
                </Link>
              </motion.div>

              {/* Trust line */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.75 }}
                className="mt-4 lg:mt-8 text-[10px] sm:text-xs text-clinic-muted/70 tracking-wide"
              >
                ✦ &nbsp;Consultation-based &nbsp;·&nbsp; Personalised care &nbsp;·&nbsp; Strictly confidential
              </motion.p>
            </div>

            {/* Right — Image (visible on all screens, responsive sizing) */}
            <motion.div
              initial={{ opacity: 0, x: 0, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.95, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative flex items-center justify-center mt-2 lg:mt-0"
            >
              {/* Desktop parallax wrapper — only wraps on lg+ */}
              <motion.div
                style={{ x: floatX, y: floatY }}
                className="relative hidden lg:flex items-center justify-center"
              >
                {/* Desktop image frame — full size */}
                {/* REPLACE: Replace this div with <Image> or <video> of your clinic/doctor */}
                <div className="relative w-[460px] h-[580px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-rose-primary/15">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-light via-rose-mid/50 to-rose-primary/30 flex flex-col items-center justify-center gap-4">
                    <div className="text-rose-primary/40">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                        <circle cx="12" cy="13" r="4"/>
                      </svg>
                    </div>
                    <p className="text-rose-primary/50 text-xs tracking-widest uppercase text-center px-8">
                      Replace with doctor or clinic photo
                      <br />(460 × 580 px recommended)
                    </p>
                  </div>
                  <div className="absolute inset-3 rounded-[2rem] border border-white/40 pointer-events-none" />
                </div>

                {/* Floating badge — top left (desktop only) */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-8 top-16 bg-white shadow-xl shadow-clinic-dark/8 rounded-2xl px-5 py-4 border border-clinic-border"
                >
                  <p className="text-xs text-clinic-muted uppercase tracking-widest mb-0.5">Trusted by</p>
                  <p className="font-serif text-2xl text-clinic-dark font-medium leading-none">500+</p>
                  <p className="text-xs text-clinic-muted mt-0.5">Patients</p>
                </motion.div>

                {/* Floating badge — bottom right (desktop only) */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
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

                {/* Decorative circles */}
                <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full border border-rose-mid/30" />
                <div className="absolute -right-5 -top-5 w-20 h-20 rounded-full border border-rose-mid/20" />
              </motion.div>

              {/* Mobile image frame — compact, no parallax, no floating badges */}
              {/* REPLACE: Replace this div with <Image> of your clinic/doctor */}
              <div className="lg:hidden relative w-full max-w-[320px] sm:max-w-[380px] h-[320px] sm:h-[380px] rounded-[1.75rem] overflow-hidden shadow-xl shadow-rose-primary/12 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-light via-rose-mid/50 to-rose-primary/30 flex flex-col items-center justify-center gap-3">
                  <div className="text-rose-primary/40">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                      <circle cx="12" cy="13" r="4"/>
                    </svg>
                  </div>
                  <p className="text-rose-primary/50 text-[10px] tracking-widest uppercase text-center px-6">
                    Replace with clinic photo
                  </p>
                </div>
                <div className="absolute inset-2.5 rounded-[1.5rem] border border-white/40 pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.85 }}
        className="relative z-10 bg-white/80 backdrop-blur-md border-t border-clinic-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-clinic-border">
            {stats.map((stat, i) => (
              <div key={i} className="py-4 md:py-6 px-3 sm:px-6 text-center">
                <p className="font-serif text-xl sm:text-2xl md:text-3xl text-clinic-dark font-medium">{stat.value}</p>
                <p className="text-[10px] sm:text-xs text-clinic-muted mt-1 tracking-wide uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll cue — desktop only */}
      <motion.button
        onClick={scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2 text-clinic-muted/60 hover:text-rose-primary transition-colors"
        aria-label="Scroll down"
      >
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
