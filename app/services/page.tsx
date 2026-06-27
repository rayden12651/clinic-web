import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/effects/CursorGlow";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import CTASection from "@/components/ui/CTASection";
import ScrollReveal from "@/components/effects/ScrollReveal";
import MediaBlock from "@/components/ui/MediaBlock";
import { Sparkles, Leaf, Clock, Sun, Star, RefreshCcw } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore the personalised aesthetic and wellness services offered at Dr. Pazit Clinic, including skin health, anti-aging care, and facial rejuvenation.",
};

const services = [
  {
    icon: <Sparkles size={22} />,
    title: "Aesthetic Consultation",
    description:
      "Your journey begins here. A comprehensive, private consultation where Dr. Pazit takes the time to understand your health history, aesthetic goals, and concerns — with no pressure and full transparency.",
    detail: [
      "In-depth skin and health assessment",
      "Goal-setting and expectation alignment",
      "Personalised treatment roadmap",
      "No obligation or upselling",
    ],
  },
  {
    icon: <Leaf size={22} />,
    title: "Skin Health Treatments",
    description:
      "Clinically designed protocols to support skin clarity, texture, tone, and vitality. Each programme is adapted to your unique skin profile, lifestyle, and long-term goals.",
    detail: [
      "Personalised skin analysis",
      "Professional-grade treatment protocols",
      "Homecare guidance and routine building",
      "Progress monitoring and adaptation",
    ],
  },
  {
    icon: <Clock size={22} />,
    title: "Anti-Aging Care",
    description:
      "A thoughtful, non-invasive approach to supporting a refreshed, naturally youthful appearance. Designed to work with your skin — not against it — over time.",
    detail: [
      "Non-invasive treatment options",
      "Collagen-supporting protocols",
      "Tailored to your age and skin type",
      "Long-term maintenance planning",
    ],
  },
  {
    icon: <Sun size={22} />,
    title: "Facial Rejuvenation",
    description:
      "Advanced, consultation-based facial treatments designed to restore luminosity, firmness, and radiance. Precise, elegant, and always tailored to your natural features.",
    detail: [
      "Advanced non-surgical techniques",
      "Natural-looking, subtle results",
      "Designed to enhance, not alter",
      "Ongoing follow-up included",
    ],
  },
  {
    icon: <Star size={22} />,
    title: "Personalized Wellness Plans",
    description:
      "A holistic approach to your health and appearance — combining medical insight, nutritional awareness, and lifestyle guidance for results that go beyond the surface.",
    detail: [
      "Full wellness assessment",
      "Integrated nutrition and lifestyle guidance",
      "Stress and wellbeing support",
      "Long-term health monitoring",
    ],
  },
  {
    icon: <RefreshCcw size={22} />,
    title: "Follow-Up Care",
    description:
      "Our commitment to your wellbeing does not end after treatment. Dedicated follow-up appointments ensure you are supported, informed, and delighted with your progress.",
    detail: [
      "Post-treatment progress reviews",
      "Open-access support between sessions",
      "Treatment plan refinement",
      "Priority rebooking for existing patients",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <CursorGlow />
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-36 pb-20 bg-gradient-to-b from-rose-blush to-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <ScrollReveal>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-rose-primary mb-4">
                What We Offer
              </p>
              <h1 className="font-serif font-light text-5xl md:text-6xl lg:text-7xl text-clinic-dark leading-tight">
                Our <em className="not-italic text-rose-primary">Services</em>
              </h1>
              <p className="mt-6 text-clinic-muted text-lg leading-relaxed max-w-2xl mx-auto">
                Each treatment is consultation-based, personalised to your goals,
                and delivered with clinical precision and genuine care.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Services detail */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col gap-20">
              {services.map((svc, i) => (
                <ScrollReveal key={i} delay={0.05}>
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                    {/* Image placeholder */}
                    <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                      {/* REPLACE: Add a real image for each service */}
                      <MediaBlock
                        label={svc.title}
                        aspectRatio="landscape"
                        rounded="2xl"
                      />
                    </div>
                    {/* Text */}
                    <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                      <div className="w-12 h-12 rounded-xl bg-rose-blush flex items-center justify-center text-rose-primary mb-6">
                        {svc.icon}
                      </div>
                      <h2 className="font-serif text-3xl text-clinic-dark mb-4">{svc.title}</h2>
                      <p className="text-clinic-muted leading-relaxed mb-6">{svc.description}</p>
                      <ul className="space-y-3">
                        {svc.detail.map((d, j) => (
                          <li key={j} className="flex items-center gap-3 text-sm text-clinic-body">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-primary shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Service card grid (summary) */}
        <section className="py-20 bg-rose-blush">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionTitle
              eyebrow="At a Glance"
              title="All Services"
            />
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((svc, i) => (
                <ServiceCard
                  key={i}
                  icon={svc.icon}
                  title={svc.title}
                  description={svc.description}
                  delay={i * 0.06}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-10 bg-white border-t border-clinic-border">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-xs text-clinic-muted/70 leading-relaxed italic">
              All services at Dr. Pazit Clinic are consultation-based. Treatments are designed to support
              your goals and are not a guarantee of specific outcomes. Individual results vary. Medical
              information on this website is for informational purposes only and does not constitute
              medical advice.
            </p>
          </div>
        </section>

        <CTASection
          eyebrow="Start Today"
          title="Ready to Begin Your Treatment Journey?"
          subtitle="Book a consultation and let us create a plan designed exclusively for you."
          primaryBtn={{ label: "Book a Consultation", href: "/appointment" }}
          secondaryBtn={{ label: "Contact Us", href: "/contact" }}
          variant="dark"
        />
      </main>
      <Footer />
    </>
  );
}
