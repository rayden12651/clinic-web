"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Leaf, Clock, Sun, Star, RefreshCcw } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import ScrollReveal from "@/components/effects/ScrollReveal";

const services = [
  {
    icon: <Sparkles size={18} />,
    title: "Aesthetic Consultation",
    mobileDesc: "One-on-one, no obligation — understanding your goals first.",
    description:
      "A thorough one-on-one consultation designed to understand your goals, skin health, and the treatments best suited to support your journey.",
  },
  {
    icon: <Leaf size={18} />,
    title: "Skin Health",
    mobileDesc: "Personalised protocols for clarity, texture, and vitality.",
    description:
      "Personalised protocols designed to support skin clarity, texture, and vitality — adapted to your unique skin profile and lifestyle.",
  },
  {
    icon: <Clock size={18} />,
    title: "Anti-Aging Care",
    mobileDesc: "Non-invasive approaches for a naturally refreshed look.",
    description:
      "Thoughtfully selected, non-invasive approaches designed to support a refreshed, naturally youthful appearance over time.",
  },
  {
    icon: <Sun size={18} />,
    title: "Facial Rejuvenation",
    mobileDesc: "Restore luminosity and radiance with precision.",
    description:
      "Advanced, consultation-based facial treatments designed to restore luminosity, firmness, and radiance with precision and care.",
  },
  {
    icon: <Star size={18} />,
    title: "Wellness Plans",
    mobileDesc: "Holistic strategies combining medical insight and lifestyle.",
    description:
      "Holistic wellness strategies created exclusively for you — combining medical insight with lifestyle guidance for lasting results.",
  },
  {
    icon: <RefreshCcw size={18} />,
    title: "Follow-Up Care",
    mobileDesc: "Dedicated support to monitor your progress.",
    description:
      "Dedicated post-treatment support to monitor your progress, answer your questions, and refine your care plan as needed.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-12 lg:py-24 bg-rose-blush">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionTitle
          eyebrow="Our Services"
          title="Treatments Designed Around You"
          subtitle="Each service at Dr. Pazit Clinic is consultation-based and personalised — never one-size-fits-all."
          hideSubtitleMobile
        />

        {/* ── MOBILE: compact numbered swipe carousel ── */}
        <div className="lg:hidden mt-6 flex overflow-x-auto gap-3 pb-3 -mx-5 px-5 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
          {services.map((svc, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-[78%] min-w-[240px] bg-white rounded-[1.5rem] border border-rose-light/50 overflow-hidden shadow-sm shadow-rose-primary/5 flex flex-col"
            >
              {/* Image placeholder — Replace with: <Image src="/images/service-X.jpg" fill alt={svc.title} className="object-cover" /> */}
              <div className="w-full h-[96px] bg-gradient-to-br from-rose-blush via-rose-light/40 to-white flex flex-col items-center justify-center gap-1 shrink-0 border-b border-rose-light/40">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="text-rose-primary/30">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
                <p className="text-[7px] text-rose-primary/30 tracking-widest uppercase text-center leading-tight px-4">{svc.title}</p>
              </div>
              {/* Card content */}
              <div className="p-5 flex flex-col flex-1">
                {/* Number + icon row */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-rose-primary/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-rose-blush flex items-center justify-center text-rose-primary">
                    {svc.icon}
                  </div>
                </div>
                {/* Title */}
                <h3 className="font-serif text-[1.05rem] text-clinic-dark leading-tight mb-2">
                  {svc.title}
                </h3>
                {/* Short desc */}
                <p className="text-[12px] text-clinic-muted leading-relaxed flex-1">
                  {svc.mobileDesc}
                </p>
                {/* Link */}
                <Link
                  href="/services"
                  className="mt-4 pt-3 border-t border-rose-blush flex items-center justify-between text-[11px] font-semibold text-rose-primary uppercase tracking-wider"
                >
                  Learn More
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
          {/* Trailing spacer */}
          <div className="shrink-0 w-2" aria-hidden />
        </div>

        {/* ── DESKTOP: three-column grid (unchanged) ── */}
        <div className="hidden lg:grid mt-16 grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <ServiceCard
              key={i}
              icon={svc.icon}
              title={svc.title}
              description={svc.description}
              delay={i * 0.08}
            />
          ))}
        </div>

        {/* CTA link — centered on both */}
        <ScrollReveal delay={0.3}>
          <div className="mt-8 lg:mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3 border border-rose-primary text-rose-primary text-[12px] lg:text-sm font-medium tracking-wider uppercase rounded-full hover:bg-rose-primary hover:text-white transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
