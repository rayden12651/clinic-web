"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role?: string;
  review: string;
  rating?: number;
  delay?: number;
}

export default function TestimonialCard({
  name,
  role,
  review,
  rating = 5,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="bg-white border border-clinic-border rounded-2xl p-8 flex flex-col gap-6 hover:shadow-lg hover:shadow-rose-primary/6 hover:border-rose-mid transition-all duration-300 relative"
    >
      {/* Quote icon */}
      <div className="absolute top-7 right-7 text-rose-light opacity-60">
        <Quote size={28} />
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            size={13}
            className="text-gold fill-gold"
          />
        ))}
      </div>

      {/* Review text */}
      <p className="text-clinic-body leading-relaxed text-sm italic">
        &ldquo;{review}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-clinic-border">
        {/* Avatar placeholder */}
        <div className="w-10 h-10 rounded-full bg-rose-light flex items-center justify-center text-rose-primary font-serif text-sm font-semibold shrink-0">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-clinic-dark">{name}</p>
          {role && <p className="text-xs text-clinic-muted mt-0.5">{role}</p>}
        </div>
      </div>
    </motion.div>
  );
}
