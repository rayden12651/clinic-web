"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

const services = [
  "Aesthetic Consultation",
  "Skin Health Treatments",
  "Anti-Aging Care",
  "Facial Rejuvenation",
  "Personalized Wellness Plans",
  "Follow-Up Care",
  "Other",
];

/*
  HOW TO CONNECT THIS FORM:
  ─────────────────────────
  Option A — Formspree:
    1. Create account at formspree.io
    2. Replace FORM_ENDPOINT with your Formspree URL: "https://formspree.io/f/YOUR_ID"
    3. Change the fetch call below to use that URL

  Option B — EmailJS:
    Install: npm install @emailjs/browser
    Call emailjs.sendForm(...) with your Service ID, Template ID, and Public Key

  Option C — Backend API:
    POST to your own API route: "/api/booking"
    Create app/api/booking/route.ts to handle the request
*/
const FORM_ENDPOINT = "#"; // ← REPLACE with your Formspree URL or API route

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  message: string;
};

export default function BookingForm() {
  const [form, setForm] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    preferredDate: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok || FORM_ENDPOINT === "#") {
        setStatus("success");
        setForm({ fullName: "", phone: "", email: "", service: "", preferredDate: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-20 gap-5 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-rose-light flex items-center justify-center">
          <CheckCircle size={28} className="text-rose-primary" />
        </div>
        <h3 className="font-serif text-2xl text-clinic-dark">Request Received</h3>
        <p className="text-clinic-muted text-sm max-w-xs leading-relaxed">
          Thank you. Our team will review your request and confirm your appointment within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm text-rose-primary underline underline-offset-4 hover:text-rose-deep transition-colors"
        >
          Submit another request
        </button>
      </motion.div>
    );
  }

  const inputClass =
    "w-full px-4 py-2.5 lg:py-3 rounded-xl border border-clinic-border bg-white text-clinic-dark placeholder:text-clinic-muted/50 text-[13px] lg:text-sm focus:outline-none focus:ring-2 focus:ring-rose-primary/20 focus:border-rose-primary transition-all duration-300";
  const labelClass = "block text-[10px] lg:text-xs font-semibold tracking-wider uppercase text-clinic-muted mb-1.5 lg:mb-2";

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
      {/* Full Name */}
      <div className="md:col-span-2">
        <label className={labelClass}>Full Name *</label>
        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          required
          placeholder="Your full name"
          className={inputClass}
        />
      </div>

      {/* Phone */}
      <div>
        <label className={labelClass}>Phone Number *</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          placeholder="+971 00 000 0000"
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div>
        <label className={labelClass}>Email Address *</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>

      {/* Service */}
      <div>
        <label className={labelClass}>Preferred Service</label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select a service…</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Date */}
      <div>
        <label className={labelClass}>Preferred Date</label>
        <input
          type="date"
          name="preferredDate"
          value={form.preferredDate}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      {/* Message */}
      <div className="md:col-span-2">
        <label className={labelClass}>Message (optional)</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us about your goals or any questions you have…"
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Notice */}
      <div className="md:col-span-2">
        <p className="text-xs text-clinic-muted/70 leading-relaxed">
          ✦ &nbsp;Appointment requests are reviewed by our team and confirmed within 24 hours.
          Your information is handled with strict confidentiality.
        </p>
      </div>

      {/* Submit */}
      <div className="md:col-span-2">
        {status === "error" && (
          <p className="text-sm text-red-500 mb-3">Something went wrong. Please try again or contact us directly.</p>
        )}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full flex items-center justify-center gap-2.5 py-4 bg-rose-primary text-white text-sm font-medium tracking-widest uppercase rounded-full hover:bg-rose-deep transition-all duration-300 disabled:opacity-60 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-rose-primary/25"
        >
          {status === "loading" ? "Sending…" : (
            <>
              Submit Request <Send size={14} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
