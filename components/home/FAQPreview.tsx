import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import FAQ from "@/components/ui/FAQ";
import ScrollReveal from "@/components/effects/ScrollReveal";

const faqItems = [
  {
    question: "How do I book my first consultation?",
    answer:
      "You can request an appointment directly through our booking page, by WhatsApp, or by submitting our contact form. Our team will confirm your appointment within 24 hours and walk you through what to expect.",
  },
  {
    question: "What should I expect at my first visit?",
    answer:
      "Your initial consultation is a private, in-depth conversation with Dr. Amara. We will discuss your health history, aesthetic goals, and any concerns. There is no obligation — we believe in full transparency before any treatment begins.",
  },
  {
    question: "Are treatments guaranteed to produce specific results?",
    answer:
      "We believe in honesty above all. Treatments are designed to support your goals, but individual outcomes vary based on many factors including skin type, health history, and lifestyle. We will always give you a realistic picture during consultation.",
  },
  {
    question: "How is my personal information kept private?",
    answer:
      "Confidentiality is paramount at Dr. Amara Clinic. All personal and medical data is handled in strict accordance with healthcare privacy standards. We never share your information without your explicit consent.",
  },
];

export default function FAQPreview() {
  return (
    <section className="py-14 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <SectionTitle
          eyebrow="Questions Answered"
          title="Frequently Asked Questions"
          subtitle="We believe informed patients make empowered decisions. Here are some of the questions we hear most often."
        />

        <div className="mt-8 lg:mt-14">
          <FAQ items={faqItems} />
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 text-center">
            <p className="text-sm text-clinic-muted mb-4">
              Still have questions? We are always happy to help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-clinic-border text-clinic-body text-sm font-medium tracking-wider uppercase rounded-full hover:border-rose-primary hover:text-rose-primary transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
