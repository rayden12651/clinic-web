import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/effects/CursorGlow";
import ScrollReveal from "@/components/effects/ScrollReveal";
import MediaBlock from "@/components/ui/MediaBlock";
import { Award, Shield, Heart, Star, ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Dr. Pazit Khalil and learn about the philosophy, values, and story behind Dr. Pazit Clinic.",
};

const stats = [
  { value: "10+",  label: "Years Experience", accent: true },
  { value: "500+", label: "Patients Treated",  accent: false },
  { value: "98%",  label: "Satisfaction Rate", accent: true },
  { value: "20+",  label: "Treatments",         accent: false },
];

const values = [
  { icon: <Heart size={18} />,  num: "01", title: "Genuine Care",      desc: "Every patient is a person, not a procedure." },
  { icon: <Award size={18} />,  num: "02", title: "Clinical Precision", desc: "Evidence-based protocols, continuously refined." },
  { icon: <Shield size={18} />, num: "03", title: "Total Privacy",      desc: "Complete confidentiality — always, without exception." },
  { icon: <Star size={18} />,   num: "04", title: "Luxury Experience",  desc: "Every detail curated for your calm and comfort." },
];

const credentials = [
  "Board Certified — Aesthetic Medicine",
  "Fellowship — Advanced Dermatology & Aesthetics",
  "Member — International Society of Aesthetic Medicine",
  "10+ Years Clinical Practice",
  "Advanced Training — Non-invasive Facial Rejuvenation",
];

const gallery = ["Clinic Reception", "Treatment Suite", "Consultation Room"];

const trustChips = ["Private Consultations", "Personalised Care", "Advanced Clinic"];

export default function AboutPage() {
  return (
    <>
      <CursorGlow />
      <Header />
      <main>

        {/* ══ HERO ══════════════════════════════════════════════════════════ */}
        <section className="pt-28 lg:pt-36 pb-10 lg:pb-20 bg-gradient-to-b from-rose-blush via-rose-blush/40 to-white">
          <div className="max-w-3xl mx-auto px-5 lg:px-6 text-center">
            <ScrollReveal>
              <p className="text-[10px] lg:text-xs font-semibold tracking-[0.3em] uppercase text-rose-primary mb-3">
                About the Clinic
              </p>
              <h1 className="font-serif font-light text-[2.25rem] sm:text-5xl lg:text-6xl text-clinic-dark leading-tight">
                Where Medical Care{" "}
                <em className="not-italic text-rose-primary">Meets Elegance</em>
              </h1>
              <p className="mt-3 lg:mt-5 text-[13px] lg:text-base text-clinic-muted leading-relaxed max-w-md mx-auto">
                <span className="lg:hidden">A sanctuary of advanced care, built around you.</span>
                <span className="hidden lg:inline">A sanctuary of advanced aesthetic and wellness care, thoughtfully designed around every patient.</span>
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ══ DOCTOR SECTION ════════════════════════════════════════════════ */}
        {/* MOBILE: overlapping image + card */}
        <section className="bg-white">
          <div className="lg:hidden pt-2 pb-10">
            <ScrollReveal>
              {/* Image card */}
              <div className="px-4">
                {/* REPLACE: Add <Image> of Dr. Pazit here */}
                <MediaBlock
                  label="Dr. Pazit Khalil"
                  aspectRatio="landscape"
                  rounded="2xl"
                />
              </div>
            </ScrollReveal>

            {/* Overlapping bio card */}
            <ScrollReveal delay={0.12}>
              <div className="relative z-10 -mt-8 mx-4 bg-white/96 backdrop-blur-sm rounded-[1.75rem] border border-rose-light/60 shadow-xl shadow-rose-primary/6 p-6">
                <p className="text-[10px] font-semibold tracking-[0.28em] uppercase text-rose-primary mb-1">
                  Meet the Doctor
                </p>
                <h2 className="font-serif font-light text-[1.5rem] text-clinic-dark leading-tight mb-3">
                  Dr. Pazit Khalil
                </h2>
                <p className="text-[12px] text-clinic-muted leading-relaxed mb-4">
                  Board-certified aesthetic physician with over a decade of experience. Trained across leading
                  institutions in Europe and the Middle East — combining scientific precision with a deeply personal approach.
                </p>
                {/* Trust chips */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-rose-blush">
                  {trustChips.map((chip) => (
                    <span key={chip} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-blush border border-rose-light/70 text-[11px] font-medium text-rose-primary">
                      <span className="w-1 h-1 rounded-full bg-rose-primary" />
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* DESKTOP: two-column layout */}
          <div className="hidden lg:block py-24 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal direction="left">
                {/* REPLACE: Add <Image> of Dr. Pazit here */}
                <MediaBlock
                  label="Dr. Pazit Khalil — Principal Physician"
                  aspectRatio="portrait"
                  rounded="2xl"
                />
              </ScrollReveal>

              <div>
                <ScrollReveal>
                  <p className="text-xs font-semibold tracking-[0.3em] uppercase text-rose-primary mb-4">
                    Meet the Doctor
                  </p>
                  <h2 className="font-serif font-light text-4xl md:text-5xl text-clinic-dark leading-tight mb-6">
                    Dr. Pazit Khalil
                  </h2>
                  <p className="text-clinic-muted leading-relaxed mb-4">
                    Dr. Pazit Khalil is a board-certified aesthetic physician with over a decade
                    of experience helping patients feel confident, healthy, and beautifully
                    themselves. Trained across leading institutions in Europe and the Middle East,
                    she brings a rare combination of scientific precision and an artist's eye to
                    every consultation.
                  </p>
                  <p className="text-clinic-muted leading-relaxed mb-8">
                    Her philosophy is simple: every face tells a story, and every treatment
                    should honour that story — not erase it. She approaches each patient
                    with curiosity, compassion, and a deep respect for their individuality.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="space-y-3">
                    {credentials.map((c, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle size={14} className="text-rose-primary shrink-0" />
                        <span className="text-sm text-clinic-body">{c}</span>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* ══ STATS STRIP ═══════════════════════════════════════════════════ */}
        <section className="py-10 lg:py-16 bg-rose-blush/30">
          <div className="max-w-4xl mx-auto px-5 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
              {stats.map((s, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className={`rounded-[1.25rem] p-4 lg:p-6 flex flex-col gap-1 border text-center ${
                    s.accent
                      ? "bg-gradient-to-br from-rose-primary to-rose-deep border-rose-deep"
                      : "bg-white border-rose-light/60"
                  }`}>
                    <p className={`font-serif text-[1.875rem] lg:text-4xl font-light leading-none ${s.accent ? "text-white" : "text-rose-primary"}`}>
                      {s.value}
                    </p>
                    <p className={`text-[10px] lg:text-xs uppercase tracking-wide mt-1 ${s.accent ? "text-white/75" : "text-clinic-muted"}`}>
                      {s.label}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══ VALUES ════════════════════════════════════════════════════════ */}
        <section className="py-10 lg:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-5 lg:px-8">
            <ScrollReveal>
              <p className="text-[10px] lg:text-xs font-semibold tracking-[0.28em] uppercase text-rose-primary mb-2 text-center">Our Values</p>
              <h2 className="font-serif font-light text-[1.625rem] lg:text-4xl text-clinic-dark text-center mb-8 lg:mb-12">What We Believe In</h2>
            </ScrollReveal>

            {/* Mobile: 2x2 compact grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
              {values.map((v, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="bg-rose-blush/50 lg:bg-white border border-rose-light/50 lg:border-clinic-border rounded-2xl p-4 lg:p-7 hover:border-rose-mid hover:shadow-lg hover:shadow-rose-primary/6 transition-all duration-300 h-full">
                    <div className="flex items-center justify-between mb-3 lg:mb-0">
                      <div className="w-9 h-9 lg:w-11 lg:h-11 rounded-xl bg-rose-blush lg:bg-rose-blush flex items-center justify-center text-rose-primary">
                        {v.icon}
                      </div>
                      <span className="text-[9px] font-bold tracking-[0.15em] text-rose-primary/40 lg:hidden">{v.num}</span>
                    </div>
                    <h3 className="font-serif text-[0.95rem] lg:text-lg text-clinic-dark mt-2 lg:mt-5 mb-1.5 lg:mb-3">{v.title}</h3>
                    <p className="text-[11px] lg:text-sm text-clinic-muted leading-relaxed">{v.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══ GALLERY ═══════════════════════════════════════════════════════ */}
        <section className="py-10 lg:py-20 bg-rose-blush/20">
          <div className="max-w-5xl mx-auto px-5 lg:px-8">
            <ScrollReveal>
              <p className="text-[10px] lg:text-xs font-semibold tracking-[0.28em] uppercase text-rose-primary mb-2 text-center">The Clinic</p>
              <h2 className="font-serif font-light text-[1.625rem] lg:text-4xl text-clinic-dark text-center mb-6 lg:mb-10">Our Space</h2>
            </ScrollReveal>

            {/* REPLACE: Replace MediaBlock placeholders with real clinic images */}
            <div className="grid grid-cols-3 gap-3 lg:gap-5">
              {gallery.map((label, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <MediaBlock
                    label={label}
                    aspectRatio={i === 0 ? "portrait" : "square"}
                    rounded="xl"
                  />
                </ScrollReveal>
              ))}
            </div>
            <p className="mt-4 text-center text-[11px] lg:hidden text-clinic-muted italic">
              Designed to feel like a retreat — calm, beautiful, and entirely yours.
            </p>
            <p className="hidden lg:block mt-6 text-center text-sm text-clinic-muted/85 max-w-md mx-auto">
              Designed to feel like a retreat — calm, beautiful, and entirely yours during your visit.
            </p>
          </div>
        </section>

        {/* ══ CTA ═══════════════════════════════════════════════════════════ */}
        <section className="py-10 lg:py-20 bg-gradient-to-br from-rose-primary to-rose-deep">
          <div className="max-w-2xl mx-auto px-5 lg:px-8 text-center">
            <ScrollReveal>
              <p className="text-[10px] font-semibold tracking-[0.28em] uppercase text-white/85 mb-3">
                Your Journey Starts Here
              </p>
              <h2 className="font-serif font-light text-[1.75rem] lg:text-4xl text-white leading-tight mb-3">
                Ready to Begin Your Private Consultation?
              </h2>
              <p className="text-[13px] lg:text-sm text-white/70 mb-6 lg:mb-8 max-w-sm mx-auto">
                Experience care that is truly personal — from the first call to your final follow-up.
              </p>
              <div className="flex items-center justify-center gap-3">
                <Link
                  href="/appointment"
                  className="inline-flex items-center gap-1.5 px-6 py-3 lg:px-8 lg:py-3.5 bg-white text-rose-deep text-[12px] lg:text-sm font-medium tracking-wider uppercase rounded-full hover:bg-rose-blush transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/20"
                >
                  Book Appointment
                  <ArrowRight size={13} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-6 py-3 lg:px-8 lg:py-3.5 border border-white/30 text-white text-[12px] lg:text-sm font-medium tracking-wider uppercase rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  View Services
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
