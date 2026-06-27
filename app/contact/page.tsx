import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/effects/CursorGlow";
import ScrollReveal from "@/components/effects/ScrollReveal";
import ContactForm from "@/components/forms/ContactForm";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Dr. Pazit Clinic. Contact us by phone, email, WhatsApp, or visit us at our Dubai clinic.",
};

/* ── REPLACE: Update all contact information below ── */
const WHATSAPP_URL =
  "https://wa.me/972500000000?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment";

const contactDetails = [
  {
    icon: <Phone size={18} />,
    label: "Phone",
    value: "+972 50 000 0000",
    href: "tel:+972500000000",
    desc: "Mon–Sat: 9:00 AM – 7:00 PM",
  },
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "hello@drpazitclinic.com",
    href: "mailto:hello@drpazitclinic.com",
    desc: "We reply within 24 hours",
  },
  {
    icon: <MapPin size={18} />,
    label: "Address",
    value: "Dubai Healthcare City",
    href: "#map",
    desc: "Dubai, United Arab Emirates",
  },
  {
    icon: <Clock size={18} />,
    label: "Opening Hours",
    value: "Mon – Sat: 9 AM – 7 PM",
    href: undefined,
    desc: "Sunday: By appointment only",
  },
];

export default function ContactPage() {
  return (
    <>
      <CursorGlow />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-28 lg:pt-36 pb-10 lg:pb-16 bg-gradient-to-b from-rose-blush via-rose-blush/40 to-white">
          <div className="max-w-3xl mx-auto px-5 lg:px-6 text-center">
            <ScrollReveal>
              <p className="text-[10px] lg:text-xs font-semibold tracking-[0.3em] uppercase text-rose-primary mb-3 lg:mb-4">
                Get in Touch
              </p>
              <h1 className="font-serif font-light text-[2.25rem] sm:text-5xl lg:text-6xl text-clinic-dark leading-tight">
                We Would Love to{" "}
                <em className="not-italic text-rose-primary">Hear from You</em>
              </h1>
              <p className="mt-3 lg:mt-5 text-[13px] lg:text-base text-clinic-muted leading-relaxed max-w-md mx-auto">
                Whether you have a question or are ready to book — we are here.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact cards */}
        <section className="py-10 lg:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
              {contactDetails.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="bg-clinic-bg border border-clinic-border rounded-2xl p-4 lg:p-6 hover:border-rose-mid hover:shadow-lg hover:shadow-rose-primary/6 transition-all duration-300 h-full">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-rose-blush flex items-center justify-center text-rose-primary mb-3 lg:mb-5">
                      {item.icon}
                    </div>
                    <p className="text-[9px] lg:text-xs font-semibold tracking-widest uppercase text-clinic-muted mb-1 lg:mb-2">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="block text-[12px] lg:text-sm font-medium text-clinic-dark hover:text-rose-primary transition-colors mb-0.5 lg:mb-1 leading-snug"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[12px] lg:text-sm font-medium text-clinic-dark mb-0.5 lg:mb-1 leading-snug">{item.value}</p>
                    )}
                    <p className="text-[10px] lg:text-xs text-clinic-muted leading-snug">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Form + info */}
        <section className="py-10 lg:py-20 bg-rose-blush">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact form */}
              <ScrollReveal direction="left">
                <div className="bg-white border border-clinic-border rounded-2xl p-5 md:p-10">
                  <h2 className="font-serif text-xl lg:text-2xl text-clinic-dark mb-1 lg:mb-2">Send a Message</h2>
                  <p className="text-[13px] lg:text-sm text-clinic-muted mb-6 lg:mb-8">
                    We reply to all enquiries within 24 hours.
                  </p>
                  <ContactForm />
                </div>
              </ScrollReveal>

              {/* WhatsApp + Socials + Hours */}
              <ScrollReveal direction="right">
                <div className="flex flex-col gap-6">
                  {/* WhatsApp CTA */}
                  <div className="bg-white border border-clinic-border rounded-2xl p-7">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                        <MessageCircle size={18} />
                      </div>
                      <h3 className="font-serif text-xl text-clinic-dark">WhatsApp</h3>
                    </div>
                    <p className="text-sm text-clinic-muted leading-relaxed mb-5">
                      For the fastest response, message us directly on WhatsApp. Our team is available
                      during clinic hours.
                    </p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] text-white text-sm font-medium tracking-wider uppercase rounded-full hover:bg-[#20B955] transition-all duration-300"
                    >
                      <MessageCircle size={15} />
                      {/* REPLACE: Update phone in WHATSAPP_URL above */}
                      Message Us on WhatsApp
                    </a>
                  </div>

                  {/* Social links */}
                  <div className="bg-white border border-clinic-border rounded-2xl p-7">
                    <h3 className="font-serif text-xl text-clinic-dark mb-4">Follow Us</h3>
                    <div className="flex flex-col gap-3">
                      {/* REPLACE: Update social media links below */}
                      <a
                        href="#"
                        className="flex items-center gap-3 text-sm text-clinic-muted hover:text-rose-primary transition-colors"
                      >
                        <InstagramIcon />
                        @drpazitclinic
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-3 text-sm text-clinic-muted hover:text-rose-primary transition-colors"
                      >
                        <FacebookIcon />
                        Dr. Pazit Clinic
                      </a>
                    </div>
                  </div>

                  {/* Map placeholder */}
                  <div id="map" className="bg-white border border-clinic-border rounded-2xl overflow-hidden">
                    {/* REPLACE: Add your Google Maps embed iframe below */}
                    {/*
                    <iframe
                      src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                    */}
                    <div className="h-52 flex flex-col items-center justify-center gap-3 text-clinic-muted/40">
                      <MapPin size={24} />
                      <p className="text-xs tracking-widest uppercase text-center px-4">
                        Replace with Google Maps embed
                        <br />
                        (see code comment above)
                      </p>
                    </div>
                    <div className="p-5 border-t border-clinic-border">
                      <p className="text-sm font-medium text-clinic-dark">
                        {/* REPLACE: Update address */}
                        Dubai Healthcare City, Dubai, UAE
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
