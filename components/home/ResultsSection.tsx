"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/effects/ScrollReveal";
import MediaBlock from "@/components/ui/MediaBlock";

/* ── REPLACE: Add your actual before/after or treatment result images/videos ── */
const results = [
  {
    label: "Skin Health Journey",
    type: "image" as const,
    src: undefined, // Replace: src="/images/result-1.jpg"
    caption: "12-week personalised skin health programme",
  },
  {
    label: "Facial Rejuvenation",
    type: "image" as const,
    src: undefined, // Replace: src="/images/result-2.jpg"
    caption: "Non-invasive facial rejuvenation treatment series",
  },
  {
    label: "Wellness & Glow",
    type: "image" as const,
    src: undefined, // Replace: src="/images/result-3.jpg"
    caption: "Holistic wellness programme — 8-week plan",
  },
];

const disclaimer =
  "Individual results may vary. All treatments are consultation-based and designed to support — not guarantee — specific outcomes. Medical imagery is used for informational purposes only.";

export default function ResultsSection() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          eyebrow="Patient Journeys"
          title="Results That Speak for Themselves"
          subtitle="Every journey is different. Here is a glimpse at the kind of transformations our personalised programmes are designed to support."
        />

        {/* Results grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {results.map((r, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <div className="group flex flex-col gap-4">
                <div className="overflow-hidden rounded-2xl">
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.4 }}
                  >
                    <MediaBlock
                      type={r.type}
                      src={r.src}
                      label={r.label}
                      aspectRatio="portrait"
                      rounded="2xl"
                    />
                  </motion.div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-clinic-dark">{r.label}</p>
                  <p className="text-xs text-clinic-muted mt-1 leading-snug">{r.caption}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Disclaimer */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 max-w-2xl mx-auto">
            <p className="text-center text-xs text-clinic-muted/70 leading-relaxed italic border-t border-clinic-border pt-6">
              {disclaimer}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
