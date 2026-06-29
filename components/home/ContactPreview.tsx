"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/effects/ScrollReveal";

/* ── REPLACE: Update all clinic contact info below ── */
const WHATSAPP_URL =
  "https://wa.me/972500000000?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment";

const contactItems = [
  {
    icon: <Phone size={18} />,
    label: "Phone",
    value: "+972 50 000 0000",
    href: "tel:+972500000000",
  },
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "hello@drpazitclinic.com",
    href: "mailto:hello@drpazitclinic.com",
  },
  {
    icon: <MapPin size={18} />,
    label: "Address",
    value: "Dubai Healthcare City, Dubai, UAE",
    href: "#map",
  },
  {
    icon: <Clock size={18} />,
    label: "Hours",
    value: "Mon–Sat: 9:00 AM – 7:00 PM",
    href: undefined,
  },
];

export default function ContactPreview() {
  return (
    <section className="py-12 lg:py-24 bg-clinic-dark">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionTitle
          eyebrow="Find Us"
          title="Get in Touch"
          subtitle="We would love to hear from you. Reach out through any of the channels below or visit us in clinic."
          light
          hideSubtitleMobile
        />

        {/* ── MOBILE: luxury app-style contact list ── */}
        <div className="lg:hidden mt-7 flex flex-col gap-3">
          {/* WhatsApp — featured card */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-[#25D366]/12 border border-[#25D366]/25 rounded-2xl px-4 py-4 active:opacity-80 transition-opacity"
          >
            <div className="w-11 h-11 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] shrink-0">
              <MessageCircle size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-white/65 uppercase tracking-wider mb-0.5">WhatsApp</p>
              <p className="text-[14px] text-white font-medium">Chat With Us Now</p>
            </div>
            <ArrowRight size={15} className="text-[#25D366]/60 shrink-0" />
          </a>

          {/* Phone */}
          <a
            href="tel:+972500000000"
            className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-4 py-4 active:opacity-80 transition-opacity"
          >
            <div className="w-11 h-11 rounded-full bg-rose-primary/15 flex items-center justify-center text-rose-mid shrink-0">
              <Phone size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] text-white/65 uppercase tracking-wider mb-0.5">Phone</p>
              <p className="text-[14px] text-white/85">+972 50 000 0000</p>
            </div>
            <ArrowRight size={15} className="text-white/45 shrink-0" />
          </a>

          {/* Location + Hours — side by side */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href="#map"
              className="flex flex-col gap-2 bg-white/5 border border-white/10 rounded-2xl p-4"
            >
              <div className="w-9 h-9 rounded-full bg-rose-primary/15 flex items-center justify-center text-rose-mid">
                <MapPin size={16} />
              </div>
              <div>
                <p className="text-[10px] text-white/65 uppercase tracking-wider mb-0.5">Location</p>
                <p className="text-[12px] text-white/80 leading-snug">Dubai Healthcare City</p>
              </div>
            </a>
            <div className="flex flex-col gap-2 bg-white/5 border border-white/10 rounded-2xl p-4">
              <div className="w-9 h-9 rounded-full bg-rose-primary/15 flex items-center justify-center text-rose-mid">
                <Clock size={16} />
              </div>
              <div>
                <p className="text-[10px] text-white/65 uppercase tracking-wider mb-0.5">Hours</p>
                <p className="text-[12px] text-white/80 leading-snug">Mon–Sat<br/>9 AM – 7 PM</p>
              </div>
            </div>
          </div>

          {/* Full contact page link */}
          <Link
            href="/contact"
            className="mt-1 flex items-center justify-center gap-2 py-3 border border-rose-primary/40 text-rose-mid text-[12px] font-medium tracking-wider uppercase rounded-2xl hover:bg-rose-primary/10 transition-all"
          >
            Full Contact Page
            <ArrowRight size={12} />
          </Link>
        </div>

        {/* ── DESKTOP: original grid layout (unchanged) ── */}
        <div className="hidden lg:block">
          <div className="mt-16 grid lg:grid-cols-4 gap-6">
            {contactItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-rose-primary/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-rose-primary/20 flex items-center justify-center text-rose-mid mb-5">
                    {item.icon}
                  </div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-white/65 mb-2">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-white/75 hover:text-white transition-colors leading-snug"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-white/75 leading-snug">{item.value}</p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Map placeholder */}
          <ScrollReveal delay={0.3}>
            <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 h-56 bg-white/5 flex items-center justify-center">
              <div className="text-center text-white/55">
                <MapPin size={28} className="mx-auto mb-2" />
                <p className="text-xs tracking-widest uppercase">
                  Replace with Google Maps embed
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-rose-primary text-white text-sm font-medium tracking-wider uppercase rounded-full hover:bg-rose-deep transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-rose-primary/30"
              >
                Full Contact Page
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
