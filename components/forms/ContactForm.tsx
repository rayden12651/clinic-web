"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

/*
  HOW TO CONNECT THIS FORM:
  ─────────────────────────
  Replace FORM_ENDPOINT with your form handler URL.
  Options: Formspree, EmailJS, or your own API route.
  See BookingForm.tsx for more details.
*/
const FORM_ENDPOINT = "#"; // ← REPLACE with your Formspree URL or API route

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
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
        setForm({ name: "", email: "", phone: "", message: "" });
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
        className="flex flex-col items-center justify-center py-16 gap-5 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-rose-light flex items-center justify-center">
          <CheckCircle size={28} className="text-rose-primary" />
        </div>
        <h3 className="font-serif text-2xl text-clinic-dark">Message Sent</h3>
        <p className="text-clinic-muted text-sm max-w-xs leading-relaxed">
          Thank you for reaching out. We will be in touch within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm text-rose-primary underline underline-offset-4 hover:text-rose-deep transition-colors"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-clinic-border bg-white text-clinic-dark placeholder:text-clinic-muted/60 text-sm focus:outline-none focus:ring-2 focus:ring-rose-primary/20 focus:border-rose-primary transition-all duration-300";
  const labelClass = "block text-xs font-semibold tracking-wider uppercase text-clinic-muted mb-2";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <div>
        <label className={labelClass}>Full Name *</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={onChange}
          required
          placeholder="Your full name"
          className={inputClass}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Email *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            required
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Phone</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={onChange}
            placeholder="+971 00 000 0000"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label className={labelClass}>Message *</label>
        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          required
          rows={5}
          placeholder="How can we help you?"
          className={`${inputClass} resize-none`}
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="flex items-center justify-center gap-2.5 py-4 bg-rose-primary text-white text-sm font-medium tracking-widest uppercase rounded-full hover:bg-rose-deep transition-all duration-300 disabled:opacity-60 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-rose-primary/25"
      >
        {status === "loading" ? "Sending…" : <><Send size={14} /> Send Message</>}
      </button>
    </form>
  );
}
