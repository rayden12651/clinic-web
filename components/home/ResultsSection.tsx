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
    src: undefined,
    caption: "12-week personalised skin health programme",
  },
  {
    label: "Facial Rejuvenation",
    type: "image" as const,
    src: undefined,
    caption: "Non-invasive facial rejuvenation treatment series",
  },
  {
    label: "Wellness & Glow",
    type: "image" as const,
    src: undefined,
    caption: "Holistic wellness programme — 8-week plan",
  },
];

const mobileStats = [
  { value: "500+", label: "Patients Treated" },
  { value: "10+",  label: "Years Experience" },
  { value: "98%",  label: "Satisfaction Rate" },
  { value: "20+",  label: "Treatments Offered" },
];

const disclaimer =
  "Individual results may vary. All treatments are consultation-based and designed to support — not guarantee — specific outcomes.";

export default function ResultsSection() {
  return (
    <section className="py-16 lg:py-24 bg-rose-blush/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <SectionTitle
          eyebrow="Patient Journeys"
          title="Results That Speak for Themselves"
          subtitle="Every journey is different. Here is a glimpse at the kind of transformations our personalised programmes are designed to support."
          hideSubtitleMobile
        />

        {/* ── MOBILE: clean editorial stat grid ── */}
        <div className="lg:hidden mt-10 grid grid-cols-2 gap-x-6 gap-y-9">
          {mobileStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="pl-4 border-l border-rose-primary/25"
            >
              <p className="font-serif text-[2.25rem] text-clinic-dark font-light leading-none">
                {stat.value}
              </p>
              <p className="text-[10px] uppercase tracking-wider text-clinic-muted mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile disclaimer */}
        <p className="lg:hidden mt-8 text-center text-[10px] text-clinic-muted/50 leading-relaxed italic px-2">
          {disclaimer}
        </p>

        {/* ── DESKTOP: image results grid (unchanged) ── */}
        <div className="hidden lg:grid mt-16 grid-cols-3 gap-8">
          {results.map((r, i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <div className="group flex flex-col gap-4">
                <div className="overflow-hidden rounded-2xl">
                  <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.4 }}>
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

        {/* Desktop disclaimer */}
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
