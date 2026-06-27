import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/effects/CursorGlow";
import ScrollReveal from "@/components/effects/ScrollReveal";
import BookingForm from "@/components/forms/BookingForm";
import { MessageCircle, Calendar, FileText, Clock, ArrowRight, Shield, Lock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Request an appointment at Dr. Pazit Clinic. Book online, via WhatsApp, or submit a request form.",
};

/* ── REPLACE: Update these URLs ── */
const WHATSAPP_URL =
  "https://wa.me/972500000000?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment";
const CALENDLY_URL = "https://calendly.com/clinic/consultation";

const bookingMethods = [
  {
    num: "01",
    icon: <Calendar size={19} />,
    title: "Book Online",
    desc: "Choose a time through our booking calendar.",
    cta: "Open Calendar",
    href: CALENDLY_URL,
    external: true,
    color: "bg-rose-blush text-rose-primary border-rose-light/60",
    iconBg: "bg-rose-primary text-white",
  },
  {
    num: "02",
    icon: <MessageCircle size={19} />,
    title: "WhatsApp",
    desc: "Message us and our team will arrange your visit.",
    cta: "Chat Now",
    href: WHATSAPP_URL,
    external: true,
    color: "bg-[#25D366]/8 text-clinic-dark border-[#25D366]/20",
    iconBg: "bg-[#25D366] text-white",
  },
  {
    num: "03",
    icon: <FileText size={19} />,
    title: "Request Form",
    desc: "Leave your details and we will contact you.",
    cta: "Fill the Form",
    href: "#form",
    external: false,
    color: "bg-white text-clinic-dark border-clinic-border",
    iconBg: "bg-rose-blush text-rose-primary",
  },
];

const trustItems = [
  { icon: <Lock size={14} />, label: "Private Consultation" },
  { icon: <Shield size={14} />, label: "Discreet Care" },
  { icon: <User size={14} />, label: "Personal Confirmation" },
];

export default function AppointmentPage() {
  return (
    <>
      <CursorGlow />
      <Header />
      <main>

        {/* ══ HERO ══════════════════════════════════════════════════════════ */}
        <section className="pt-28 lg:pt-36 pb-10 lg:pb-16 bg-gradient-to-b from-rose-blush via-rose-blush/40 to-white">
          <div className="max-w-2xl mx-auto px-5 lg:px-6 text-center">
            <ScrollReveal>
              <p className="text-[10px] lg:text-xs font-semibold tracking-[0.3em] uppercase text-rose-primary mb-3 lg:mb-4">
                Book Your Visit
              </p>
              <h1 className="font-serif font-light text-[2.25rem] sm:text-5xl lg:text-6xl text-clinic-dark leading-tight">
                Begin Your Private{" "}
                <em className="not-italic text-rose-primary">Consultation</em>
              </h1>
              <p className="mt-3 lg:mt-5 text-[13px] lg:text-base text-clinic-muted leading-relaxed max-w-md mx-auto">
                <span className="lg:hidden">Choose the easiest way to book. We confirm every appointment personally.</span>
                <span className="hidden lg:inline">Choose the easiest way to request your appointment. Our clinic will confirm your visit personally within 24 hours.</span>
              </p>

              {/* Hero action buttons */}
              <div className="mt-5 lg:mt-8 flex items-center justify-center gap-3">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 lg:px-7 lg:py-3.5 bg-rose-primary text-white text-[12px] lg:text-sm font-medium tracking-wider uppercase rounded-full hover:bg-rose-deep transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-rose-primary/25"
                >
                  Book Online
                  <ArrowRight size={12} />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 lg:px-7 lg:py-3.5 bg-[#25D366] text-white text-[12px] lg:text-sm font-medium tracking-wider uppercase rounded-full hover:bg-[#20B955] transition-all duration-300"
                >
                  <MessageCircle size={13} />
                  WhatsApp
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ══ BOOKING METHOD CARDS ═══════════════════════════════════════════ */}
        <section className="py-10 lg:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-5 lg:px-8">

            {/* Mobile: stacked app-style rows */}
            <div className="lg:hidden flex flex-col gap-3">
              {bookingMethods.map((m, i) => {
                const Wrapper = m.external
                  ? (p: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
                      <a href={m.href} target="_blank" rel="noopener noreferrer" {...p} />
                    )
                  : (p: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
                      <a href={m.href} {...p} />
                    );
                return (
                  <ScrollReveal key={i} delay={i * 0.08}>
                    <Wrapper className={`flex items-center gap-4 rounded-2xl border px-4 py-4 ${m.color} active:scale-[0.98] transition-transform`}>
                      {/* Icon */}
                      <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${m.iconBg}`}>
                        {m.icon}
                      </div>
                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-rose-primary/50">{m.num}</span>
                          <h3 className="font-serif text-[1rem] text-clinic-dark leading-none">{m.title}</h3>
                        </div>
                        <p className="text-[12px] text-clinic-muted leading-snug">{m.desc}</p>
                      </div>
                      {/* Arrow */}
                      <ArrowRight size={15} className="text-clinic-muted/40 shrink-0" />
                    </Wrapper>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Desktop: three-column card grid */}
            <div className="hidden lg:grid grid-cols-3 gap-6">
              {bookingMethods.map((m, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className={`rounded-2xl border p-7 flex flex-col gap-4 h-full ${m.color}`}>
                    <div className="flex items-center justify-between">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${m.iconBg}`}>
                        {m.icon}
                      </div>
                      <span className="font-serif text-3xl font-light text-clinic-border">{m.num}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl text-clinic-dark mb-2">{m.title}</h3>
                      <p className="text-sm text-clinic-muted leading-relaxed">{m.desc}</p>
                    </div>
                    {m.external ? (
                      <a
                        href={m.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-rose-primary hover:text-rose-deep transition-colors group"
                      >
                        {m.cta}
                        <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                      </a>
                    ) : (
                      <a
                        href={m.href}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-rose-primary hover:text-rose-deep transition-colors group"
                      >
                        {m.cta}
                        <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                      </a>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══ TRUST STRIP ═══════════════════════════════════════════════════ */}
        <div className="bg-rose-blush border-y border-rose-light/60">
          <div className="max-w-4xl mx-auto px-5 lg:px-8 py-4 lg:py-5">
            <div className="flex items-center justify-center gap-4 lg:gap-10 flex-wrap">
              {trustItems.map((t, i) => (
                <div key={i} className="flex items-center gap-2 text-rose-primary">
                  {t.icon}
                  <span className="text-[11px] lg:text-xs font-medium tracking-wide text-clinic-body">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ CALENDLY SECTION ══════════════════════════════════════════════ */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-5 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-6 lg:mb-8">
                <p className="text-[10px] font-semibold tracking-[0.28em] uppercase text-rose-primary mb-2">
                  Online Booking
                </p>
                <h2 className="font-serif font-light text-[1.625rem] lg:text-4xl text-clinic-dark">
                  Select a Preferred Time
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-white border border-clinic-border rounded-[1.5rem] overflow-hidden shadow-sm shadow-rose-primary/5">
                {/* Card header */}
                <div className="flex items-center gap-3 px-5 py-4 border-b border-clinic-border bg-rose-blush/40">
                  <div className="w-8 h-8 rounded-full bg-rose-primary flex items-center justify-center text-white">
                    <Calendar size={15} />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-clinic-dark">Booking Calendar</p>
                    <p className="text-[11px] text-clinic-muted">Powered by Calendly</p>
                  </div>
                </div>

                {/* REPLACE: Uncomment when Calendly is connected */}
                {/*
                <iframe
                  src={CALENDLY_URL}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  title="Schedule a consultation"
                />
                */}

                {/* Placeholder until Calendly is connected */}
                <div className="flex flex-col items-center justify-center gap-4 py-14 px-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-rose-blush flex items-center justify-center text-rose-primary/50">
                    <Clock size={26} />
                  </div>
                  <p className="text-[13px] text-clinic-muted max-w-xs leading-relaxed">
                    Calendar will appear here once connected.
                  </p>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-rose-primary text-white text-[12px] font-medium tracking-wider uppercase rounded-full hover:bg-rose-deep transition-all duration-300"
                  >
                    Open Calendly
                    <ArrowRight size={12} />
                  </a>
                </div>

                {/* Card footer note */}
                <div className="px-5 py-3 border-t border-clinic-border bg-rose-blush/30 text-center">
                  <p className="text-[11px] text-clinic-muted/70">
                    Final confirmation is sent personally by the clinic.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ══ REQUEST FORM ═════════════════════════════════════════════════ */}
        <section id="form" className="py-12 lg:py-20 bg-rose-blush/30">
          <div className="max-w-3xl mx-auto px-5 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-6 lg:mb-10">
                <p className="text-[10px] font-semibold tracking-[0.28em] uppercase text-rose-primary mb-2">
                  Appointment Request
                </p>
                <h2 className="font-serif font-light text-[1.625rem] lg:text-4xl text-clinic-dark">
                  Send Us a Request
                </h2>
                <p className="hidden lg:block mt-3 text-sm text-clinic-muted max-w-sm mx-auto leading-relaxed">
                  Fill in your details and we will be in touch within 24 hours to confirm.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <div className="bg-white border border-clinic-border rounded-[1.5rem] p-5 lg:p-10 shadow-sm shadow-rose-primary/5">
                <BookingForm />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ══ WHATSAPP CTA ═════════════════════════════════════════════════ */}
        <section className="py-10 lg:py-16 bg-white">
          <div className="max-w-2xl mx-auto px-5 lg:px-8">
            <ScrollReveal>
              <div className="bg-gradient-to-br from-[#25D366]/10 via-[#25D366]/5 to-white border border-[#25D366]/20 rounded-[1.5rem] p-6 lg:p-10 text-center">
                <div className="w-12 h-12 rounded-full bg-[#25D366]/15 flex items-center justify-center text-[#25D366] mx-auto mb-4">
                  <MessageCircle size={22} />
                </div>
                <h2 className="font-serif font-light text-[1.5rem] lg:text-3xl text-clinic-dark mb-2">
                  Prefer WhatsApp?
                </h2>
                <p className="text-[13px] lg:text-sm text-clinic-muted leading-relaxed mb-5 max-w-xs mx-auto">
                  Message the clinic directly for faster assistance.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#25D366] text-white text-[12px] lg:text-sm font-medium tracking-wider uppercase rounded-full hover:bg-[#20B955] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#25D366]/25"
                >
                  <MessageCircle size={15} />
                  Chat on WhatsApp
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
