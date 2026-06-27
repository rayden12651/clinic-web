"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

/* ── REPLACE: Update WhatsApp URL below ── */
const WHATSAPP_URL =
  "https://wa.me/972500000000?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment";

export default function AppointmentCTA() {
  return (
    <section className="py-14 lg:py-24 relative overflow-hidden bg-gradient-to-br from-rose-primary via-rose-deep to-[#8B3856]">
      {/* Decorative circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/5 border border-white/10" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/5 border border-white/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/3" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-6">
        {/* Mobile: luxury invitation card wrapper — transparent/invisible on desktop */}
        <div className="text-center bg-white/10 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none border border-white/20 lg:border-0 rounded-[2rem] lg:rounded-none px-5 py-8 lg:px-0 lg:py-0 shadow-xl shadow-black/10 lg:shadow-none">

        {/* Doctor / clinic photo — mobile only. Replace with: <Image src="/images/doctor.jpg" fill alt="Dr. Pazit Khalil" className="object-cover rounded-[1.1rem]" /> */}
        <div className="lg:hidden w-full max-w-[190px] mx-auto h-[120px] rounded-[1.25rem] overflow-hidden mb-6 bg-white/15 border border-white/20 flex flex-col items-center justify-center gap-2">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/35">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          <p className="text-[8px] text-white/30 tracking-widest uppercase text-center">Replace with doctor photo</p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-[0.3em] uppercase text-rose-light/80 mb-4"
        >
          Begin Your Journey
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="font-serif font-light text-[1.875rem] sm:text-4xl lg:text-[3.5rem] text-white leading-tight"
        >
          Ready to Experience{" "}
          <br className="hidden sm:block" />
          Premium Care?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.18 }}
          className="mt-4 lg:mt-5 text-[13px] lg:text-base text-white/70 leading-relaxed max-w-xl mx-auto"
        >
          <span className="lg:hidden">Confidential. No pressure. Confirmed within 24 hours.</span>
          <span className="hidden lg:inline">Book a confidential consultation today. Our team will guide you through the process with care, transparency, and no pressure.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.28 }}
          className="mt-5 lg:mt-10 grid grid-cols-1 gap-3 lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-4"
        >
          <Link
            href="/appointment"
            className="group inline-flex items-center justify-center gap-2 w-full lg:w-auto px-8 py-3.5 lg:py-4 bg-white text-rose-deep text-[12px] lg:text-sm font-medium tracking-wider uppercase rounded-full hover:bg-rose-blush transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20"
          >
            Book Appointment
            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full lg:w-auto px-8 py-3.5 lg:py-4 border border-white/30 text-white text-[12px] lg:text-sm font-medium tracking-wider uppercase rounded-full hover:bg-white/10 transition-all duration-300"
          >
            <MessageCircle size={14} />
            WhatsApp Us
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="mt-8 text-xs text-white/40 tracking-wide"
        >
          Appointments confirmed within 24 hours · Strictly confidential
        </motion.p>
        </div>{/* end mobile card wrapper */}
      </div>
    </section>
  );
}
