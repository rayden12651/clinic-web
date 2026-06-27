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

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
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
          className="mt-5 text-base text-white/70 leading-relaxed max-w-xl mx-auto"
        >
          Book a confidential consultation today. Our team will guide you
          through the process with care, transparency, and no pressure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.28 }}
          className="mt-6 lg:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/appointment"
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-white text-rose-deep text-sm font-medium tracking-wider uppercase rounded-full hover:bg-rose-blush transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20"
          >
            Book Appointment
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 border border-white/30 text-white text-sm font-medium tracking-wider uppercase rounded-full hover:bg-white/10 transition-all duration-300"
          >
            <MessageCircle size={15} />
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
      </div>
    </section>
  );
}
