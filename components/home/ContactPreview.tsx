import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/effects/ScrollReveal";

/* ── REPLACE: Update all clinic contact info below ── */
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
    value: "hello@dramaraclinic.com",
    href: "mailto:hello@dramaraclinic.com",
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
    <section className="py-24 lg:py-32 bg-clinic-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          eyebrow="Find Us"
          title="Get in Touch"
          subtitle="We would love to hear from you. Reach out through any of the channels below or visit us in clinic."
          light
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-rose-primary/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-rose-primary/20 flex items-center justify-center text-rose-mid mb-5">
                  {item.icon}
                </div>
                <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-2">
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
            {/* REPLACE: Add Google Maps embed iframe here */}
            <div className="text-center text-white/30">
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
    </section>
  );
}
