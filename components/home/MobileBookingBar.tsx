"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/972500000000?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment";

export default function MobileBookingBar() {
  return (
    /* Visible on mobile only (hidden on md+) */
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <div className="bg-clinic-dark/96 backdrop-blur-lg rounded-2xl border border-white/10 flex items-center gap-2.5 px-3 py-2.5 shadow-2xl shadow-black/30">
        {/* Book button — takes remaining space */}
        <Link
          href="/appointment"
          className="flex-1 flex items-center justify-center py-2.5 bg-rose-primary text-white text-[12px] font-semibold tracking-[0.15em] uppercase rounded-xl hover:bg-rose-deep transition-colors active:scale-[0.97]"
        >
          Book Appointment
        </Link>

        {/* Divider */}
        <div className="w-px h-8 bg-white/10 shrink-0" />

        {/* WhatsApp icon button */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="w-11 h-11 rounded-xl bg-[#25D366]/15 border border-[#25D366]/25 flex items-center justify-center text-[#25D366] shrink-0 hover:bg-[#25D366]/25 transition-colors active:scale-[0.97]"
        >
          <MessageCircle size={18} />
        </a>
      </div>
    </div>
  );
}
