"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Leaf, Clock, Sun, Star, RefreshCcw } from "lucide-react";
import ScrollReveal from "@/components/effects/ScrollReveal";

const services = [
  {
    icon: <Sparkles size={14} />,
    title: "Aesthetic Consultation",
    desc: "One-on-one, understanding your goals first.",
  },
  {
    icon: <Leaf size={14} />,
    title: "Skin Health",
    desc: "Personalised protocols for clarity and vitality.",
  },
  {
    icon: <Clock size={14} />,
    title: "Anti-Aging Care",
    desc: "Non-invasive approaches for a naturally refreshed look.",
  },
  {
    icon: <Sun size={14} />,
    title: "Facial Rejuvenation",
    desc: "Restore luminosity and radiance with precision.",
  },
  {
    icon: <Star size={14} />,
    title: "Wellness Plans",
    desc: "Holistic strategies combining medical insight and lifestyle.",
  },
  {
    icon: <RefreshCcw size={14} />,
    title: "Follow-Up Care",
    desc: "Dedicated support to monitor and refine your progress.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <div className="flex items-end justify-between pb-8 lg:pb-12 border-b border-clinic-border">
          <div>
            <p className="text-[9px] tracking-[0.38em] uppercase text-rose-primary mb-3">Our Services</p>
            <h2 className="font-serif font-light text-[1.875rem] lg:text-[3rem] text-clinic-dark leading-[1.0]">
              Treatments Designed
              <br /><em className="not-italic text-rose-primary">Around You</em>
            </h2>
          </div>
          <Link
            href="/services"
            className="hidden lg:inline-flex items-center gap-1.5 text-[10px] font-medium tracking-[0.22em] uppercase text-clinic-muted hover:text-rose-primary transition-colors duration-300 pb-0.5 border-b border-transparent hover:border-rose-primary shrink-0 mb-1"
          >
            All Treatments
            <ArrowRight size={10} />
          </Link>
        </div>

        {/* Editorial numbered list */}
        <div className="divide-y divide-clinic-border">
          {services.map((svc, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <Link
                href="/services"
                className="group flex items-center gap-5 lg:gap-8 py-5 lg:py-6 hover:pl-1.5 transition-all duration-300"
              >
                {/* Number */}
                <span className="text-[10px] font-medium tracking-[0.2em] text-rose-primary/40 w-5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <span className="text-rose-primary/50 shrink-0 group-hover:text-rose-primary transition-colors duration-300">
                  {svc.icon}
                </span>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="font-serif text-[1.05rem] lg:text-[1.2rem] text-clinic-dark group-hover:text-rose-primary transition-colors duration-300 leading-snug">
                    {svc.title}
                  </p>
                  <p className="text-[11px] lg:text-[12px] text-clinic-muted mt-0.5 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowRight
                  size={13}
                  className="text-clinic-border group-hover:text-rose-primary transition-all duration-300 group-hover:translate-x-0.5 shrink-0"
                />
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 lg:hidden text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-7 py-3 border border-clinic-border text-clinic-body text-[11px] font-medium tracking-wider uppercase rounded-full hover:border-rose-primary hover:text-rose-primary transition-all duration-300"
          >
            View All Services
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
