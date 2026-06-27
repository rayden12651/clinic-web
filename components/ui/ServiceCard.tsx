"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  delay?: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href = "/services",
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group bg-white border border-clinic-border rounded-2xl p-8 flex flex-col gap-5 hover:border-rose-mid hover:shadow-xl hover:shadow-rose-primary/8 transition-all duration-300"
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-rose-blush flex items-center justify-center text-rose-primary group-hover:bg-rose-primary group-hover:text-white transition-all duration-300">
        {icon}
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-serif text-xl font-medium text-clinic-dark mb-3">
          {title}
        </h3>
        <p className="text-clinic-muted text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Link */}
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm font-medium text-rose-primary hover:text-rose-deep transition-colors group/link"
      >
        Learn More
        <ArrowRight
          size={14}
          className="transition-transform duration-300 group-hover/link:translate-x-1"
        />
      </Link>
    </motion.div>
  );
}
