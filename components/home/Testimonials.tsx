import SectionTitle from "@/components/ui/SectionTitle";
import TestimonialCard from "@/components/ui/TestimonialCard";
import ScrollReveal from "@/components/effects/ScrollReveal";

/* ── REPLACE: Add your real patient testimonials below ── */
const testimonials = [
  {
    name: "Sarah M.",
    role: "Wellness Programme Client",
    review:
      "From my very first consultation, I felt genuinely heard. Dr. Pazit took the time to understand my skin concerns and created a plan that has made a visible difference. The clinic feels like a sanctuary.",
    rating: 5,
  },
  {
    name: "Layla K.",
    role: "Aesthetic Consultation Client",
    review:
      "I was nervous coming in, but the team made me feel at ease immediately. The results of my treatment have exceeded what I hoped for, and the follow-up care has been exceptional.",
    rating: 5,
  },
  {
    name: "Nadia R.",
    role: "Skin Health Client",
    review:
      "The level of detail and personalisation is unlike any clinic I have visited before. Every appointment feels like it was designed specifically for me. Highly recommended.",
    rating: 5,
  },
  {
    name: "Amira T.",
    role: "Facial Rejuvenation Client",
    review:
      "A truly premium experience from start to finish. The environment is beautiful, the team is professional, and the results speak for themselves. I cannot imagine going anywhere else.",
    rating: 5,
  },
  {
    name: "Hana F.",
    role: "Anti-Aging Care Client",
    review:
      "Dr. Pazit has a rare ability to combine scientific expertise with genuine warmth. I always leave feeling confident and cared for. This clinic truly sets a new standard.",
    rating: 5,
  },
  {
    name: "Rania J.",
    role: "Personalised Wellness Client",
    review:
      "The attention to detail at every stage of my wellness plan has been remarkable. I feel healthier, more confident, and more like myself than I have in years. Thank you, Dr. Pazit.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-14 lg:py-24 bg-rose-blush">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          eyebrow="Patient Reviews"
          title="Trusted by Those Who Matter Most"
          subtitle="Our patients' experiences are the true measure of everything we do."
        />

        {/* Mobile: horizontal scroll carousel */}
        <div className="lg:hidden mt-8 flex overflow-x-auto gap-3.5 pb-3 -mx-5 px-5 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
          {testimonials.map((t, i) => (
            <div key={i} className="snap-start shrink-0 w-[80vw] max-w-[290px]">
              <TestimonialCard
                name={t.name}
                role={t.role}
                review={t.review}
                rating={t.rating}
                delay={0}
              />
            </div>
          ))}
          <div className="shrink-0 w-1" aria-hidden />
        </div>

        {/* Desktop: three-column grid */}
        <div className="hidden lg:grid mt-16 grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={i}
              name={t.name}
              role={t.role}
              review={t.review}
              rating={t.rating}
              delay={i * 0.08}
            />
          ))}
        </div>

        {/* Trust note */}
        <ScrollReveal delay={0.3}>
          <p className="mt-12 text-center text-xs text-clinic-muted/60 tracking-wide">
            All reviews are from real patients. Names are anonymised to protect privacy.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
