import ScrollReveal from "@/components/effects/ScrollReveal";
import TestimonialCard from "@/components/ui/TestimonialCard";

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
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <ScrollReveal>
          <div className="mb-14 lg:mb-20">
            <p className="text-[9px] tracking-[0.38em] uppercase text-rose-primary mb-4">Patient Reviews</p>
            <div className="flex items-end justify-between">
              <h2 className="font-serif font-light text-[1.875rem] lg:text-[3rem] text-clinic-dark leading-[1.0]">
                Trusted by Those
                <br /><em className="not-italic text-rose-primary">Who Matter Most</em>
              </h2>
              <div className="hidden lg:block h-px flex-1 max-w-[160px] ml-10 mb-2 bg-clinic-border" />
            </div>
          </div>
        </ScrollReveal>

        {/* Mobile: horizontal carousel */}
        <div className="lg:hidden flex overflow-x-auto gap-3.5 pb-4 -mx-6 px-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
          {testimonials.map((t, i) => (
            <div key={i} className="snap-start shrink-0 w-[82vw] max-w-[300px]">
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

        {/* Desktop: 3-column grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
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

        <ScrollReveal delay={0.3}>
          <p className="hidden lg:block mt-12 text-center text-xs text-clinic-muted/50 tracking-wide">
            All reviews are from real patients. Names are anonymised to protect privacy.
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
}
