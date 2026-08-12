import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/effects/CursorGlow";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import ResultsSection from "@/components/home/ResultsSection";
import AppointmentCTA from "@/components/home/AppointmentCTA";
import Testimonials from "@/components/home/Testimonials";
import FAQPreview from "@/components/home/FAQPreview";
import ContactPreview from "@/components/home/ContactPreview";
import MobileImageStrip from "@/components/home/MobileImageStrip";

export const metadata: Metadata = {
  title: "Dr. Pazit Clinic | Premium Medical Care With a Personal Touch",
  description:
    "Dr. Pazit Clinic offers luxury aesthetic consultations, skin health, anti-aging care, and personalised wellness plans in an elegant, confidential environment.",
};

export default function HomePage() {
  return (
    <>
      <CursorGlow />
      <Header />
      <main>
        <Hero />
        <div className="mobile-section-divider" />
        <AboutPreview />
        <div className="mobile-section-divider" />
        <ServicesPreview />
        <MobileImageStrip
          bg="bg-white"
          images={[
            { src: "/images/clinic-interior.png",         label: "Our Clinic" },
            { src: "/images/doctor-portrait.png",          label: "Dr. Pazit" },
            { src: "/images/clinic-treatment-suite.png",   label: "Treatment Suite" },
            { src: "/images/clinic-consultation-room.png", label: "Consultation Room" },
          ]}
        />
        <div className="mobile-section-divider" />
        <ResultsSection />
        <AppointmentCTA />
        <div className="mobile-section-divider" />
        <Testimonials />
        <MobileImageStrip
          bg="bg-white"
          images={[
            { src: "/images/result-skin-health.png",         label: "Skin Health" },
            { src: "/images/result-facial-rejuvenation.png", label: "Rejuvenation" },
            { src: "/images/result-wellness-glow.png",       label: "Wellness & Glow" },
            { src: "/images/clinic-interior.png",            label: "The Clinic" },
          ]}
        />
        <div className="mobile-section-divider" />
        <FAQPreview />
        <ContactPreview />
      </main>
      <Footer />
    </>
  );
}
