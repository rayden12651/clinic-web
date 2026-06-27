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

const mobileStats = [
  { value: "500+", label: "Patients Treated", accent: true },
  { value: "10+",  label: "Years Experience", accent: false },
  { value: "98%",  label: "Satisfaction Rate", accent: false },
  { value: "20+",  label: "Treatments Offered", accent: true },
];

const disclaimer =
  "Individual results may vary. All treatments are consultation-based and designed to support — not guarantee — specific outcomes.";

export default function ResultsSection() {
  return (
    <section className="py-12 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionTitle
          eyebrow="Patient Journeys"
          title="Results That Speak for Themselves"
          subtitle="Every journey is different. Here is a glimpse at the kind of transformations our personalised programmes are designed to support."
          hideSubtitleMobile
        />

        {/* ── MOBILE: premium 2×2 stats grid ── */}
        <div className="lg:hidden mt-8 grid grid-cols-2 gap-3">
          {mobileStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`rounded-[1.25rem] p-5 flex flex-col gap-1 border ${
                stat.accent
                  ? "bg-gradient-to-br from-rose-primary to-rose-deep border-rose-deep text-white"
                  : "bg-gradient-to-br from-rose-blush to-white border-rose-light/60"
              }`}
            >
              <p className={`font-serif text-[2rem] font-light leading-none ${stat.accent ? "text-white" : "text-rose-primary"}`}>
                {stat.value}
              </p>
              <p className={`text-[11px] uppercase tracking-wide mt-1 ${stat.accent ? "text-white/75" : "text-clinic-muted"}`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: short disclaimer */}
        <p className="lg:hidden mt-5 text-center text-[11px] text-clinic-muted/60 leading-relaxed italic px-2">
          {disclaimer}
        </p>

        {/* ── DESKTOP: image results grid (unchanged) ── */}
        <div className="hidden lg:grid mt-16 grid-cols-3 gap-8">
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

        {/* Desktop: disclaimer */}
        <ScrollReveal delay={0.3}>
          <div className="hidden lg:block mt-12 max-w-2xl mx-auto">
            <p className="text-center text-xs text-clinic-muted/70 leading-relaxed italic border-t border-clinic-border pt-6">
              {disclaimer} Medical imagery is used for informational purposes only.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
