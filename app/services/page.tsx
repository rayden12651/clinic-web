import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/effects/CursorGlow";
import ScrollReveal from "@/components/effects/ScrollReveal";
import { Sparkles, Leaf, Clock, Sun, Star, RefreshCcw, ArrowRight, Shield, User, Gem } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore the personalised aesthetic and wellness services offered at Dr. Pazit Clinic.",
};

const services = [
  {
    num: "01",
    icon: <Sparkles size={19} />,
    title: "Aesthetic Consultation",
    short: "One-on-one — no obligation, fully confidential.",
    desc: "A comprehensive private consultation where Dr. Pazit takes time to understand your health history and aesthetic goals — with full transparency and no pressure.",
    detail: [
      "In-depth skin and health assessment",
      "Goal-setting and expectation alignment",
      "Personalised treatment roadmap",
      "No obligation or upselling",
    ],
  },
  {
    num: "02",
    icon: <Leaf size={19} />,
    title: "Skin Health",
    short: "Personalised protocols for clarity and vitality.",
    desc: "Clinically designed protocols to support skin clarity, texture, tone, and vitality. Each programme is adapted to your unique skin profile and lifestyle.",
    detail: [
      "Personalised skin analysis",
      "Professional-grade treatment protocols",
      "Homecare guidance and routine building",
      "Progress monitoring and adaptation",
    ],
  },
  {
    num: "03",
    icon: <Clock size={19} />,
    title: "Anti-Aging Care",
    short: "Non-invasive approaches for a refreshed look.",
    desc: "A thoughtful, non-invasive approach to supporting a refreshed, naturally youthful appearance. Designed to work with your skin over time.",
    detail: [
      "Non-invasive treatment options",
      "Collagen-supporting protocols",
      "Tailored to your age and skin type",
      "Long-term maintenance planning",
    ],
  },
  {
    num: "04",
    icon: <Sun size={19} />,
    title: "Facial Rejuvenation",
    short: "Restore luminosity and radiance with precision.",
    desc: "Advanced, consultation-based facial treatments designed to restore luminosity, firmness, and radiance. Precise, elegant, and always tailored to your natural features.",
    detail: [
      "Advanced non-surgical techniques",
      "Natural-looking, subtle results",
      "Designed to enhance, not alter",
      "Ongoing follow-up included",
    ],
  },
  {
    num: "05",
    icon: <Star size={19} />,
    title: "Wellness Plans",
    short: "Holistic strategies combining insight and lifestyle.",
    desc: "A holistic approach to your health and appearance — combining medical insight, nutritional awareness, and lifestyle guidance for results that go beyond the surface.",
    detail: [
      "Full wellness assessment",
      "Integrated nutrition and lifestyle guidance",
      "Stress and wellbeing support",
      "Long-term health monitoring",
    ],
  },
  {
    num: "06",
    icon: <RefreshCcw size={19} />,
    title: "Follow-Up Care",
    short: "Dedicated support after every treatment.",
    desc: "Our commitment to your wellbeing does not end after treatment. Dedicated follow-up appointments ensure you are supported and delighted with your progress.",
    detail: [
      "Post-treatment progress reviews",
      "Open-access support between sessions",
      "Treatment plan refinement",
      "Priority rebooking for existing patients",
    ],
  },
];

const steps = [
  { num: "01", title: "Consultation",      desc: "Private one-on-one session to understand your goals." },
  { num: "02", title: "Personalised Plan", desc: "A tailored treatment roadmap designed exclusively for you." },
  { num: "03", title: "Follow-Up Care",    desc: "Ongoing support to monitor and refine your results." },
];

const whyUs = [
  { icon: <Shield size={19} />,  title: "Private Care",           desc: "Strict confidentiality at every stage of your journey." },
  { icon: <User size={19} />,    title: "Tailored Treatments",    desc: "Every plan is built around your individual needs, never a template." },
  { icon: <Gem size={19} />,     title: "Elegant Experience",     desc: "A clinic designed to feel calm, beautiful, and entirely yours." },
];

export default function ServicesPage() {
  return (
    <>
      <CursorGlow />
      <Header />
      <main>

        {/* ══ HERO ══════════════════════════════════════════════════════════ */}
        <section className="pt-28 lg:pt-36 pb-10 lg:pb-20 bg-gradient-to-b from-rose-blush via-rose-blush/40 to-white">
          <div className="max-w-2xl mx-auto px-5 lg:px-6 text-center">
            <ScrollReveal>
              <p className="text-[10px] lg:text-xs font-semibold tracking-[0.3em] uppercase text-rose-primary mb-3">
                Our Services
              </p>
              <h1 className="font-serif font-light text-[2.25rem] sm:text-5xl lg:text-6xl text-clinic-dark leading-tight">
                Treatments{" "}
                <em className="not-italic text-rose-primary">Designed Around You</em>
              </h1>
              <p className="mt-3 lg:mt-5 text-[13px] lg:text-base text-clinic-muted leading-relaxed max-w-md mx-auto">
                <span className="lg:hidden">Consultation-based and personalised — never one-size-fits-all.</span>
                <span className="hidden lg:inline">Each service is consultation-based, personalised to your goals, and delivered with clinical precision and genuine care.</span>
              </p>
              <div className="mt-5 lg:mt-8 flex items-center justify-center gap-3">
                <Link
                  href="/appointment"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 lg:px-7 lg:py-3.5 bg-rose-primary text-white text-[12px] lg:text-sm font-medium tracking-wider uppercase rounded-full hover:bg-rose-deep transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-rose-primary/25"
                >
                  Book Consultation
                  <ArrowRight size={12} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-5 py-2.5 lg:px-7 lg:py-3.5 border border-clinic-border text-clinic-body text-[12px] lg:text-sm font-medium tracking-wider uppercase rounded-full hover:border-rose-primary hover:text-rose-primary transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ══ SERVICES ══════════════════════════════════════════════════════ */}
        <section className="py-10 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-5 lg:px-8">

            {/* Mobile: horizontal swipe carousel */}
            <div className="lg:hidden flex overflow-x-auto gap-3 pb-3 -mx-5 px-5 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
              {services.map((svc, i) => (
                <div key={i} className="snap-start shrink-0 w-[78%] min-w-[240px] bg-rose-blush/60 border border-rose-light/50 rounded-[1.5rem] p-5 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] font-bold tracking-[0.22em] uppercase text-rose-primary/50">{svc.num}</span>
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-rose-primary shadow-sm">
                      {svc.icon}
                    </div>
                  </div>
                  <h3 className="font-serif text-[1.1rem] text-clinic-dark leading-tight mb-2">{svc.title}</h3>
                  <p className="text-[12px] text-clinic-muted leading-relaxed flex-1">{svc.short}</p>
                  <Link
                    href="/appointment"
                    className="mt-4 pt-3 border-t border-rose-light/60 flex items-center justify-between text-[11px] font-semibold text-rose-primary uppercase tracking-wider"
                  >
                    Book This
                    <ArrowRight size={12} />
                  </Link>
                </div>
              ))}
              <div className="shrink-0 w-2" aria-hidden />
            </div>

            {/* Desktop: numbered service list with detail */}
            <div className="hidden lg:flex flex-col gap-px bg-clinic-border rounded-2xl overflow-hidden border border-clinic-border">
              {services.map((svc, i) => (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <div className="bg-white px-8 py-7 flex items-start gap-8 group hover:bg-rose-blush/20 transition-colors duration-200">
                    {/* Number + icon */}
                    <div className="shrink-0 flex flex-col items-center gap-2 pt-1">
                      <span className="text-[11px] font-bold tracking-widest text-rose-primary/40">{svc.num}</span>
                      <div className="w-10 h-10 rounded-xl bg-rose-blush group-hover:bg-rose-primary group-hover:text-white flex items-center justify-center text-rose-primary transition-all duration-300">
                        {svc.icon}
                      </div>
                    </div>
                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-xl text-clinic-dark mb-2">{svc.title}</h3>
                      <p className="text-sm text-clinic-muted leading-relaxed mb-3 max-w-xl">{svc.desc}</p>
                      <div className="flex flex-wrap gap-x-6 gap-y-1">
                        {svc.detail.map((d, j) => (
                          <span key={j} className="flex items-center gap-1.5 text-xs text-clinic-body">
                            <span className="w-1 h-1 rounded-full bg-rose-primary shrink-0" />
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Arrow */}
                    <Link
                      href="/appointment"
                      className="shrink-0 self-center text-xs font-semibold text-rose-primary uppercase tracking-wider flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      Book <ArrowRight size={12} />
                    </Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══ PROCESS ═══════════════════════════════════════════════════════ */}
        <section className="py-10 lg:py-20 bg-rose-blush/30">
          <div className="max-w-4xl mx-auto px-5 lg:px-8">
            <ScrollReveal>
              <p className="text-[10px] lg:text-xs font-semibold tracking-[0.28em] uppercase text-rose-primary mb-2 text-center">How It Works</p>
              <h2 className="font-serif font-light text-[1.625rem] lg:text-3xl text-clinic-dark text-center mb-8 lg:mb-12">
                Your Journey With Us
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-3 gap-3 lg:gap-8">
              {steps.map((s, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="bg-white border border-rose-light/50 rounded-2xl p-4 lg:p-7 text-center flex flex-col items-center gap-2 lg:gap-4">
                    <span className="font-serif text-[1.875rem] lg:text-5xl text-rose-light font-light leading-none">{s.num}</span>
                    <h3 className="font-serif text-[0.9rem] lg:text-xl text-clinic-dark leading-tight">{s.title}</h3>
                    <p className="hidden lg:block text-sm text-clinic-muted leading-relaxed">{s.desc}</p>
                    <p className="lg:hidden text-[11px] text-clinic-muted leading-snug">{s.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══ WHY CHOOSE US ═════════════════════════════════════════════════ */}
        <section className="py-10 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-5 lg:px-8">
            <ScrollReveal>
              <p className="text-[10px] lg:text-xs font-semibold tracking-[0.28em] uppercase text-rose-primary mb-2 text-center">Why Dr. Pazit Clinic</p>
              <h2 className="font-serif font-light text-[1.625rem] lg:text-3xl text-clinic-dark text-center mb-8 lg:mb-12">
                What Sets Us Apart
              </h2>
            </ScrollReveal>

            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-3 lg:gap-6">
              {whyUs.map((w, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  {/* Mobile: horizontal row */}
                  <div className="flex lg:flex-col items-start lg:items-center gap-4 lg:gap-4 bg-rose-blush/40 lg:bg-rose-blush/50 border border-rose-light/50 rounded-2xl p-4 lg:p-7 lg:text-center">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white flex items-center justify-center text-rose-primary shrink-0 shadow-sm lg:mx-auto">
                      {w.icon}
                    </div>
                    <div>
                      <h3 className="font-serif text-[1rem] lg:text-xl text-clinic-dark mb-1 lg:mb-3">{w.title}</h3>
                      <p className="text-[12px] lg:text-sm text-clinic-muted leading-relaxed">{w.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══ DISCLAIMER ════════════════════════════════════════════════════ */}
        <div className="bg-rose-blush/20 border-y border-rose-light/30">
          <div className="max-w-3xl mx-auto px-5 lg:px-8 py-4 lg:py-6 text-center">
            <p className="text-[11px] lg:text-xs text-clinic-muted/70 leading-relaxed italic">
              All services are consultation-based. Treatments are designed to support your goals and
              are not a guarantee of specific outcomes. Individual results vary.
            </p>
          </div>
        </div>

        {/* ══ CTA ═══════════════════════════════════════════════════════════ */}
        <section className="py-10 lg:py-20 bg-white">
          <div className="max-w-2xl mx-auto px-5 lg:px-8">
            <ScrollReveal>
              <div className="bg-gradient-to-br from-rose-blush via-white to-gold-pale border border-rose-light/60 rounded-[1.5rem] p-6 lg:p-12 text-center">
                <p className="text-[10px] font-semibold tracking-[0.28em] uppercase text-rose-primary mb-2">
                  Start Today
                </p>
                <h2 className="font-serif font-light text-[1.5rem] lg:text-3xl text-clinic-dark mb-2">
                  Not Sure Which Service Is Right for You?
                </h2>
                <p className="text-[13px] lg:text-sm text-clinic-muted mb-6 max-w-xs mx-auto">
                  Book a consultation and we will guide you to the right treatment.
                </p>
                <Link
                  href="/appointment"
                  className="inline-flex items-center gap-2 px-7 py-3 lg:px-8 lg:py-3.5 bg-rose-primary text-white text-[12px] lg:text-sm font-medium tracking-wider uppercase rounded-full hover:bg-rose-deep transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-rose-primary/25"
                >
                  Book Appointment
                  <ArrowRight size={13} />
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
