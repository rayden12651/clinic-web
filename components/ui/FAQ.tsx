"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  light?: boolean;
}

export default function FAQ({ items, light = false }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-clinic-border">
      {items.map((item, i) => (
        <div key={i} className="py-5">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex items-center justify-between w-full text-left gap-4 group"
          >
            <span
              className={`font-serif text-lg font-medium transition-colors duration-300 ${
                light
                  ? "text-white group-hover:text-rose-mid"
                  : "text-clinic-dark group-hover:text-rose-primary"
              }`}
            >
              {item.question}
            </span>
            <span
              className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
                openIndex === i
                  ? "bg-rose-primary border-rose-primary text-white"
                  : light
                  ? "border-white/30 text-white/60 group-hover:border-rose-mid group-hover:text-rose-mid"
                  : "border-clinic-border text-clinic-muted group-hover:border-rose-primary group-hover:text-rose-primary"
              }`}
            >
              {openIndex === i ? <Minus size={13} /> : <Plus size={13} />}
            </span>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="overflow-hidden"
              >
                <p
                  className={`pt-4 text-sm leading-relaxed ${
                    light ? "text-white/65" : "text-clinic-muted"
                  }`}
                >
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
