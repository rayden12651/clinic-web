"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  hideSubtitleMobile?: boolean;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  hideSubtitleMobile = false,
}: SectionTitleProps) {
  const centered = align === "center";

  return (
    <div className={`${centered ? "text-center" : "text-left"} max-w-2xl ${centered ? "mx-auto" : ""}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase mb-3 sm:mb-4 ${
            light ? "text-rose-mid" : "text-rose-primary"
          }`}
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.05 }}
        className={`font-serif font-light leading-tight ${
          light ? "text-white" : "text-clinic-dark"
        } text-[1.875rem] sm:text-4xl md:text-5xl lg:text-[3.25rem]`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className={`mt-3 sm:mt-5 leading-relaxed text-sm sm:text-base lg:text-lg ${
            light ? "text-white/70" : "text-clinic-muted"
          } ${hideSubtitleMobile ? "hidden lg:block" : ""}`}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
        className={`mt-5 sm:mt-6 h-px bg-gradient-to-r from-transparent via-gold to-transparent ${
          centered ? "mx-auto" : "origin-left"
        }`}
        style={{ width: "60px" }}
      />
    </div>
  );
}
