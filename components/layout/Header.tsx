"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

/* ── REPLACE: Update clinic name and WhatsApp number ── */
const CLINIC_NAME = "Dr. Amara Clinic";
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

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-clinic-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group">
              <span
                className={`font-serif text-xl font-light tracking-widest uppercase transition-colors duration-300 ${
                  scrolled || menuOpen
                    ? "text-clinic-dark"
                    : "text-clinic-dark"
                }`}
              >
                {CLINIC_NAME}
              </span>
              <span className="divider-gold mt-1 group-hover:w-full transition-all duration-500" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
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
            <div className="hidden md:flex items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-clinic-muted hover:text-rose-primary transition-colors duration-300"
              >
                <Phone size={14} />
                <span className="tracking-wider">WhatsApp</span>
              </a>
              <Link
                href="/appointment"
                className="relative overflow-hidden px-6 py-2.5 bg-rose-primary text-white text-sm font-medium tracking-wider uppercase rounded-full hover:bg-rose-deep transition-all duration-300 hover:shadow-lg hover:shadow-rose-primary/20 hover:-translate-y-0.5"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden p-2 text-clinic-dark hover:text-rose-primary transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-white pt-20 px-6 flex flex-col md:hidden"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={`font-serif text-3xl font-light tracking-wide ${
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
              transition={{ delay: 0.35 }}
              className="mt-auto mb-12 flex flex-col gap-4"
            >
              <Link
                href="/appointment"
                className="w-full py-4 bg-rose-primary text-white text-center font-medium tracking-widest uppercase rounded-full hover:bg-rose-deep transition-colors"
              >
                Book Appointment
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 border border-clinic-border text-clinic-body text-center text-sm tracking-widest uppercase rounded-full hover:border-rose-primary hover:text-rose-primary transition-colors"
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
