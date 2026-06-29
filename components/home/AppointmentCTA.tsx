"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

/* ── REPLACE: Update WhatsApp URL below ── */
const WHATSAPP_URL =
  "https://wa.me/972500000000?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment";

export default function AppointmentCTA() {
  return (
    <section className="py-24 lg:py-36 bg-clinic-dark relative overflow-hidden">

      {/* Subtle texture overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(217,124,146,0.06),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_20%,rgba(201,169,110,0.05),transparent)]" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[9px] tracking-[0.42em] uppercase text-rose-primary/80 mb-7"
        >
          Begin Your Journey
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="h-px w-10 bg-rose-primary/30 mx-auto mb-9"
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-serif font-light text-[2.5rem] lg:text-[3.5rem] text-white leading-[0.97] tracking-[-0.02em] mb-7"
        >
          Ready to Experience
          <br />Premium{" "}
          <em className="not-italic text-rose-light">Care?</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.22 }}
          className="text-[13px] lg:text-[14px] text-white/65 leading-[1.8] mb-11 max-w-md mx-auto"
        >
          Book a confidential consultation.
          <br className="hidden sm:block" />
          Tailored, private, and designed entirely around you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.32 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/appointment"
            className="group inline-flex items-center gap-2 px-9 py-3.5 bg-white text-clinic-dark text-[11px] font-medium tracking-[0.2em] uppercase rounded-full hover:bg-rose-blush transition-all duration-300"
          >
            Book Appointment
            <ArrowRight size={11} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-white/60 hover:text-white transition-colors duration-300 border-b border-white/30 hover:border-white pb-0.5"
          >
            <MessageCircle size={12} />
            WhatsApp Us
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-[9px] text-white/45 tracking-[0.18em] uppercase"
        >
          Appointments confirmed within 24 hours &nbsp;·&nbsp; Strictly confidential
        </motion.p>

      </div>
    </section>
  );
}
