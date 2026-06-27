import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/effects/CursorGlow";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/effects/ScrollReveal";
import CTASection from "@/components/ui/CTASection";
import MediaBlock from "@/components/ui/MediaBlock";
import { Award, Shield, Heart, Star, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Dr. Pazit Khalil and learn about the philosophy, values, and story behind Dr. Pazit Clinic.",
};

const values = [
  {
    icon: <Heart size={20} />,
    title: "Genuine Care",
    desc: "Every patient is a person, not a procedure. We invest the time to truly understand your needs.",
  },
  {
    icon: <Award size={20} />,
    title: "Clinical Excellence",
    desc: "Our protocols are grounded in the latest evidence-based practices and continuing medical education.",
  },
  {
    icon: <Shield size={20} />,
    title: "Absolute Confidentiality",
    desc: "Your privacy is non-negotiable. All information is handled with the highest level of discretion.",
  },
  {
    icon: <Star size={20} />,
    title: "Luxury Experience",
    desc: "From the moment you arrive, every detail is curated to make you feel calm, comfortable, and valued.",
  },
];

const credentials = [
  "Board Certified — Aesthetic Medicine",
  "Fellowship — Advanced Dermatology & Aesthetics",
  "Member — International Society of Aesthetic Medicine",
  "10+ Years Clinical Practice",
  "Advanced Training — Non-invasive Facial Rejuvenation",
  "Wellness & Integrative Medicine Certification",
];

/* REPLACE: Add your real gallery images below */
const galleryImages = [
  { label: "Clinic Reception" },
  { label: "Treatment Suite" },
  { label: "Consultation Room" },
  { label: "Relaxation Lounge" },
  { label: "Clinic Exterior" },
  { label: "Treatment Detail" },
];

export default function AboutPage() {
  return (
    <>
      <CursorGlow />
      <Header />
      <main>
        {/* Page hero */}
        <section className="pt-36 pb-20 bg-gradient-to-b from-rose-blush to-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <ScrollReveal>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-rose-primary mb-4">
                Our Story
              </p>
              <h1 className="font-serif font-light text-5xl md:text-6xl lg:text-7xl text-clinic-dark leading-tight">
                About <em className="not-italic text-rose-primary">Dr. Pazit Clinic</em>
              </h1>
              <p className="mt-6 text-clinic-muted text-lg leading-relaxed max-w-2xl mx-auto">
                A sanctuary of advanced care, thoughtfully designed around you.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Doctor intro */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Doctor image */}
              <ScrollReveal direction="left">
                {/* REPLACE: Add <Image> of Dr. Pazit here */}
                <MediaBlock
                  label="Dr. Pazit Khalil — Principal Physician"
                  aspectRatio="portrait"
                  rounded="2xl"
                />
              </ScrollReveal>

              <div>
                <ScrollReveal>
                  <p className="text-xs font-semibold tracking-[0.3em] uppercase text-rose-primary mb-4">
                    Meet the Doctor
                  </p>
                  <h2 className="font-serif font-light text-4xl md:text-5xl text-clinic-dark leading-tight mb-6">
                    Dr. Pazit Khalil
                  </h2>
                  {/* REPLACE: Update with real doctor bio */}
                  <p className="text-clinic-muted leading-relaxed mb-4">
                    Dr. Pazit Khalil is a board-certified aesthetic physician with over a decade
                    of experience helping patients feel confident, healthy, and beautifully
                    themselves. Trained across leading institutions in Europe and the Middle East,
                    she brings a rare combination of scientific precision and an artist's eye to
                    every consultation.
                  </p>
                  <p className="text-clinic-muted leading-relaxed mb-4">
                    Her philosophy is simple: every face tells a story, and every treatment
                    should honour that story — not erase it. She approaches each patient
                    with curiosity, compassion, and a deep respect for the individuality
                    that makes you uniquely you.
                  </p>
                  <p className="text-clinic-muted leading-relaxed mb-8">
                    Dr. Pazit founded this clinic with a vision to create a space where
                    excellence, elegance, and emotional care are not in conflict — but
                    are one and the same.
                  </p>
                </ScrollReveal>

                {/* Credentials */}
                <ScrollReveal delay={0.2}>
                  <div className="space-y-3">
                    {credentials.map((c, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle size={14} className="text-rose-primary shrink-0" />
                        <span className="text-sm text-clinic-body">{c}</span>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-rose-blush">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionTitle
              eyebrow="Our Values"
              title="What We Believe In"
              subtitle="Every decision at Dr. Pazit Clinic is guided by these core principles."
            />

            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="bg-white border border-clinic-border rounded-2xl p-7 hover:border-rose-mid hover:shadow-lg hover:shadow-rose-primary/6 transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl bg-rose-blush flex items-center justify-center text-rose-primary mb-5">
                      {v.icon}
                    </div>
                    <h3 className="font-serif text-lg text-clinic-dark mb-3">{v.title}</h3>
                    <p className="text-sm text-clinic-muted leading-relaxed">{v.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Clinic gallery */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionTitle
              eyebrow="The Clinic"
              title="Our Space"
              subtitle="Designed to feel like a retreat — calm, beautiful, and entirely yours during your visit."
            />

            {/* REPLACE: Replace placeholder MediaBlock components with real clinic images */}
            <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5">
              {galleryImages.map((img, i) => (
                <ScrollReveal key={i} delay={i * 0.07}>
                  <MediaBlock
                    label={img.label}
                    aspectRatio={i === 0 || i === 3 ? "landscape" : "square"}
                    rounded="xl"
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Your Journey Starts Here"
          title="Ready to Meet Dr. Pazit?"
          subtitle="Book a confidential consultation and experience care that is truly personal."
          primaryBtn={{ label: "Book a Consultation", href: "/appointment" }}
          secondaryBtn={{ label: "View Services", href: "/services" }}
          variant="rose"
        />
      </main>
      <Footer />
    </>
  );
}
