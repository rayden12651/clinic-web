import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

/* Simple brand icon SVGs since lucide-react v12 removed them */
const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const TwitterIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l16 16M4 20L20 4"/>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" strokeOpacity="0"/>
    <path d="M22 4L2 20M2 4l20 16" strokeOpacity="0"/>
    <text x="4" y="18" fontSize="14" fill="currentColor" stroke="none" fontWeight="bold">𝕏</text>
  </svg>
);

/* ── REPLACE: Update all clinic info below ── */
const CLINIC_NAME = "Dr. Pazit Clinic";
const CLINIC_DESC =
  "A sanctuary of advanced aesthetic and wellness care, where precision meets elegance.";
const CLINIC_PHONE = "+972 50 000 0000"; // Replace with real phone
const CLINIC_EMAIL = "hello@drpazitclinic.com"; // Replace with real email
const CLINIC_ADDRESS = "Dubai Healthcare City, Dubai, UAE"; // Replace with real address
const WHATSAPP_URL =
  "https://wa.me/972500000000?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/appointment", label: "Book Appointment" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
];

const services = [
  "Aesthetic Consultation",
  "Skin Health Treatments",
  "Anti-Aging Care",
  "Facial Rejuvenation",
  "Personalized Wellness",
  "Follow-Up Care",
];

export default function Footer() {
  return (
    <footer className="bg-clinic-dark text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="block mb-4">
              <span className="font-serif text-xl font-light tracking-widest uppercase text-white">
                {CLINIC_NAME}
              </span>
            </Link>
            <div className="divider-gold mb-5" />
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {CLINIC_DESC}
            </p>
            {/* Socials */}
            <div className="flex items-center gap-4">
              {/* REPLACE: Update social links below */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-rose-primary transition-all duration-300"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-rose-primary transition-all duration-300"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-rose-primary transition-all duration-300"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-white/60 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-rose-mid transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-white/60 mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm text-white/60 hover:text-rose-mid transition-colors duration-300"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-white/60 mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${CLINIC_PHONE.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-rose-mid transition-colors"
                >
                  <Phone size={14} className="mt-0.5 shrink-0 text-rose-primary" />
                  {CLINIC_PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CLINIC_EMAIL}`}
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-rose-mid transition-colors"
                >
                  <Mail size={14} className="mt-0.5 shrink-0 text-rose-primary" />
                  {CLINIC_EMAIL}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-sm text-white/60">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-rose-primary" />
                  {CLINIC_ADDRESS}
                </span>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 border border-rose-primary/50 text-rose-mid text-xs tracking-widest uppercase rounded-full hover:bg-rose-primary hover:text-white hover:border-rose-primary transition-all duration-300"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/55">
            © {new Date().getFullYear()} {CLINIC_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-white/55 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-xs text-white/55">|</span>
            <span className="text-xs text-white/55">
              Medical content is for informational purposes only.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
