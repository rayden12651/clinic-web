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

export const metadata: Metadata = {
  title: "Dr. Amara Clinic | Premium Medical Care With a Personal Touch",
  description:
    "Dr. Amara Clinic offers luxury aesthetic consultations, skin health, anti-aging care, and personalised wellness plans in an elegant, confidential environment.",
};

export default function HomePage() {
  return (
    <>
      <CursorGlow />
      <Header />
      <main>
        <Hero />
        <AboutPreview />
        <ServicesPreview />
        <ResultsSection />
        <AppointmentCTA />
        <Testimonials />
        <FAQPreview />
        <ContactPreview />
      </main>
      <Footer />
    </>
  );
}
