import Link from "next/link";
import { Sparkles, Leaf, Clock, Sun, Star, RefreshCcw } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import ScrollReveal from "@/components/effects/ScrollReveal";

const services = [
  {
    icon: <Sparkles size={20} />,
    title: "Aesthetic Consultation",
    description:
      "A thorough one-on-one consultation designed to understand your goals, skin health, and the treatments best suited to support your journey.",
  },
  {
    icon: <Leaf size={20} />,
    title: "Skin Health Treatments",
    description:
      "Personalised protocols designed to support skin clarity, texture, and vitality — adapted to your unique skin profile and lifestyle.",
  },
  {
    icon: <Clock size={20} />,
    title: "Anti-Aging Care",
    description:
      "Thoughtfully selected, non-invasive approaches designed to support a refreshed, naturally youthful appearance over time.",
  },
  {
    icon: <Sun size={20} />,
    title: "Facial Rejuvenation",
    description:
      "Advanced, consultation-based facial treatments designed to restore luminosity, firmness, and radiance with precision and care.",
  },
  {
    icon: <Star size={20} />,
    title: "Personalized Wellness Plans",
    description:
      "Holistic wellness strategies created exclusively for you — combining medical insight with lifestyle guidance for lasting results.",
  },
  {
    icon: <RefreshCcw size={20} />,
    title: "Follow-Up Care",
    description:
      "Dedicated post-treatment support to monitor your progress, answer your questions, and refine your care plan as needed.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-14 lg:py-24 bg-rose-blush">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          eyebrow="Our Services"
          title="Treatments Designed Around You"
          subtitle="Each service at Dr. Pazit Clinic is consultation-based and personalised — never one-size-fits-all."
        />

        {/* Mobile: horizontal scroll carousel */}
        <div className="lg:hidden mt-8 flex overflow-x-auto gap-3.5 pb-3 -mx-5 px-5 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
          {services.map((svc, i) => (
            <div key={i} className="snap-start shrink-0 w-[72vw] max-w-[250px]">
              <ServiceCard
                icon={svc.icon}
                title={svc.title}
                description={svc.description}
                delay={0}
              />
            </div>
          ))}
          {/* Trailing spacer so last card doesn't sit at screen edge */}
          <div className="shrink-0 w-1" aria-hidden />
        </div>

        {/* Desktop: three-column grid */}
        <div className="hidden lg:grid mt-16 grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <ServiceCard
              key={i}
              icon={svc.icon}
              title={svc.title}
              description={svc.description}
              delay={i * 0.08}
            />
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-rose-primary text-rose-primary text-sm font-medium tracking-wider uppercase rounded-full hover:bg-rose-primary hover:text-white transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
