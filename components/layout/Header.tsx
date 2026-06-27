"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const CLINIC_NAME = "Dr. Pazit Clinic";
const WHATSAPP_URL =
  "https://wa.me/972500000000?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled || menuOpen
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-clinic-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Mobile: h-14 (56px) | Desktop: h-20 (80px) */}
          <div className="flex items-center justify-between h-[56px] sm:h-16 lg:h-20">

            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group">
              <span className="font-serif text-[15px] sm:text-base lg:text-xl font-light tracking-[0.15em] sm:tracking-[0.2em] lg:tracking-widest uppercase text-clinic-dark">
                {CLINIC_NAME}
              </span>
              <span className="divider-gold mt-0.5 group-hover:w-full transition-all duration-500" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium tracking-wider uppercase transition-colors duration-300 relative group ${
                    pathname === link.href
                      ? "text-rose-primary"
                      : "text-clinic-body hover:text-rose-primary"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-rose-primary transition-all duration-300 ${
                      pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-clinic-muted hover:text-rose-primary transition-colors duration-300 tracking-wide"
              >
                WhatsApp
              </a>
              <Link
                href="/appointment"
                className="px-6 py-2.5 bg-rose-primary text-white text-sm font-medium tracking-wider uppercase rounded-full hover:bg-rose-deep transition-all duration-300 hover:shadow-lg hover:shadow-rose-primary/20 hover:-translate-y-0.5"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile: compact Book + hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="/appointment"
                className="px-3 py-1.5 bg-rose-primary text-white text-[11px] font-medium tracking-wider uppercase rounded-full"
              >
                Book
              </Link>
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="p-1.5 text-clinic-dark hover:text-rose-primary transition-colors"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white flex flex-col lg:hidden"
            style={{ paddingTop: "56px" }}
          >
            <nav className="flex flex-col gap-1 px-6 pt-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className={`font-serif text-[26px] sm:text-3xl font-light tracking-wide block py-2 border-b border-clinic-border/50 ${
                      pathname === link.href
                        ? "text-rose-primary"
                        : "text-clinic-dark hover:text-rose-primary"
                    } transition-colors duration-300`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mt-auto mb-8 px-6 flex flex-col gap-3"
            >
              <Link
                href="/appointment"
                className="w-full py-3 bg-rose-primary text-white text-center text-[13px] font-medium tracking-widest uppercase rounded-full"
              >
                Book Appointment
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 border border-clinic-border text-clinic-body text-center text-[13px] tracking-widest uppercase rounded-full"
              >
                WhatsApp Us
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
