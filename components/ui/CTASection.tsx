"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryBtn?: { label: string; href: string };
  secondaryBtn?: { label: string; href: string };
  variant?: "rose" | "dark" | "light";
}

export default function CTASection({
  eyebrow,
  title,
  subtitle,
  primaryBtn = { label: "Book Appointment", href: "/appointment" },
  secondaryBtn,
  variant = "rose",
}: CTASectionProps) {
  const variantMap = {
    rose: {
      bg: "bg-gradient-to-br from-rose-primary to-rose-deep",
      eyebrowColor: "text-rose-light/80",
      titleColor: "text-white",
      subtitleColor: "text-white/75",
      primaryBtnClass:
        "bg-white text-rose-deep hover:bg-rose-blush",
      secondaryBtnClass:
        "border-white/40 text-white hover:bg-white/10",
    },
    dark: {
      bg: "bg-clinic-dark",
      eyebrowColor: "text-rose-mid/70",
      titleColor: "text-white",
      subtitleColor: "text-white/60",
      primaryBtnClass: "bg-rose-primary text-white hover:bg-rose-deep",
      secondaryBtnClass: "border-white/30 text-white hover:bg-white/10",
    },
    light: {
      bg: "bg-rose-blush",
      eyebrowColor: "text-rose-primary",
      titleColor: "text-clinic-dark",
      subtitleColor: "text-clinic-muted",
      primaryBtnClass:
        "bg-rose-primary text-white hover:bg-rose-deep hover:shadow-lg hover:shadow-rose-primary/25",
      secondaryBtnClass:
        "border-clinic-border text-clinic-body hover:border-rose-primary hover:text-rose-primary",
    },
  };

  const v = variantMap[variant];

  return (
    <section className={`${v.bg} py-20 lg:py-28`}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`text-xs font-semibold tracking-[0.25em] uppercase mb-4 ${v.eyebrowColor}`}
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.05 }}
          className={`font-serif font-light text-4xl md:text-5xl leading-tight ${v.titleColor}`}
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className={`mt-5 text-base leading-relaxed ${v.subtitleColor}`}
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.25 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href={primaryBtn.href}
            className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5 ${v.primaryBtnClass}`}
          >
            {primaryBtn.label}
            <ArrowRight size={14} />
          </Link>

          {secondaryBtn && (
            <Link
              href={secondaryBtn.href}
              className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full border text-sm font-medium tracking-wider uppercase transition-all duration-300 ${v.secondaryBtnClass}`}
            >
              {secondaryBtn.label}
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
