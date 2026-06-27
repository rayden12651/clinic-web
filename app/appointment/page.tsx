import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/effects/CursorGlow";
import ScrollReveal from "@/components/effects/ScrollReveal";
import BookingForm from "@/components/forms/BookingForm";
import { MessageCircle, Calendar, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Request an appointment at Dr. Amara Clinic. Book online, via WhatsApp, or use our Calendly scheduler.",
};

/* ── REPLACE: Update WhatsApp URL and Calendly link ── */
const WHATSAPP_URL =
  "https://wa.me/972500000000?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment";
const CALENDLY_URL = "https://calendly.com/clinic/consultation"; // ← Replace with your Calendly link

const bookingSteps = [
  {
    step: "01",
    title: "Choose How to Book",
    desc: "Use our online form, WhatsApp, or Calendly — whichever is most convenient for you.",
  },
  {
    step: "02",
    title: "We Confirm Within 24h",
    desc: "Our team reviews every request personally and confirms your appointment by phone or email.",
  },
  {
    step: "03",
    title: "Attend Your Consultation",
    desc: "Arrive, relax, and enjoy a private consultation designed entirely around your needs.",
  },
];

export default function AppointmentPage() {
  return (
    <>
      <CursorGlow />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-36 pb-16 bg-gradient-to-b from-rose-blush to-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <ScrollReveal>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-rose-primary mb-4">
                Begin Your Journey
              </p>
              <h1 className="font-serif font-light text-5xl md:text-6xl text-clinic-dark leading-tight">
                Book an <em className="not-italic text-rose-primary">Appointment</em>
              </h1>
              <p className="mt-5 text-clinic-muted text-lg leading-relaxed">
                We look forward to meeting you. Select your preferred booking method below.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 bg-white border-b border-clinic-border">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {bookingSteps.map((s, i) => (
                <ScrollReveal key={i} delay={i * 0.12}>
                  <div className="flex flex-col gap-4">
                    <span className="font-serif text-5xl text-rose-light font-light">{s.step}</span>
                    <h3 className="font-serif text-xl text-clinic-dark">{s.title}</h3>
                    <p className="text-sm text-clinic-muted leading-relaxed">{s.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Booking options */}
        <section className="py-20 bg-rose-blush">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10">

              {/* Calendly embed */}
              <ScrollReveal direction="left">
                <div className="bg-white border border-clinic-border rounded-2xl overflow-hidden">
                  <div className="p-6 border-b border-clinic-border flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-rose-blush flex items-center justify-center text-rose-primary">
                      <Calendar size={17} />
                    </div>
                    <div>
                      <h2 className="font-serif text-lg text-clinic-dark">Schedule Online</h2>
                      <p className="text-xs text-clinic-muted">Powered by Calendly</p>
                    </div>
                  </div>

                  {/* REPLACE: Uncomment and use your real Calendly link below */}
                  {/*
                  <iframe
                    src={CALENDLY_URL}
                    width="100%"
                    height="630"
                    frameBorder="0"
                    title="Schedule a consultation"
                  />
                  */}

                  {/* Placeholder shown until Calendly is connected */}
                  <div className="h-80 flex flex-col items-center justify-center gap-4 p-8 text-center">
                    <Clock size={28} className="text-rose-primary/40" />
                    <p className="text-sm text-clinic-muted leading-relaxed max-w-xs">
                      Calendly scheduler will appear here once connected.
                    </p>
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-rose-primary text-white text-sm font-medium tracking-wider uppercase rounded-full hover:bg-rose-deep transition-all duration-300"
                    >
                      Open Calendly
                    </a>
                    <p className="text-xs text-clinic-muted/60">
                      Replace CALENDLY_URL in app/appointment/page.tsx
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* WhatsApp option */}
              <ScrollReveal direction="right">
                <div className="flex flex-col gap-6">
                  <div className="bg-white border border-clinic-border rounded-2xl p-7">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-9 h-9 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                        <MessageCircle size={17} />
                      </div>
                      <div>
                        <h2 className="font-serif text-lg text-clinic-dark">WhatsApp Booking</h2>
                        <p className="text-xs text-clinic-muted">Fastest response</p>
                      </div>
                    </div>
                    <p className="text-sm text-clinic-muted leading-relaxed mb-6">
                      Prefer to chat? Message us directly on WhatsApp and our team will
                      guide you through the booking process personally.
                    </p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-[#25D366] text-white text-sm font-medium tracking-wider uppercase rounded-full hover:bg-[#20B955] transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <MessageCircle size={15} />
                      {/* REPLACE: Update WhatsApp number in WHATSAPP_URL at top of this file */}
                      Chat on WhatsApp
                    </a>
                  </div>

                  {/* Info */}
                  <div className="bg-white border border-clinic-border rounded-2xl p-7">
                    <h3 className="font-serif text-lg text-clinic-dark mb-5">Good to Know</h3>
                    <ul className="space-y-3.5">
                      {[
                        "All consultations are strictly private and confidential",
                        "Appointment requests are confirmed within 24 hours",
                        "First consultations typically last 45–60 minutes",
                        "A treatment plan is only discussed after your consultation",
                        "No commitment required after your initial visit",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-clinic-muted">
                          <CheckCircle size={14} className="text-rose-primary mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Appointment request form */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <p className="text-xs font-semibold tracking-[0.3em] uppercase text-rose-primary mb-3">
                  Appointment Request
                </p>
                <h2 className="font-serif font-light text-4xl text-clinic-dark">
                  Send Us a Request
                </h2>
                <p className="mt-4 text-clinic-muted text-sm leading-relaxed">
                  Prefer to submit a form? Fill in your details below and we will be in touch
                  within 24 hours to confirm your appointment.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="bg-clinic-bg border border-clinic-border rounded-2xl p-8 md:p-10">
                <BookingForm />
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
