import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/effects/ScrollReveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Dr. Pazit Clinic's privacy policy — how we collect, use, and protect your personal information.",
};

/* ── REPLACE: Update clinic name, email, and effective date ── */
const CLINIC_NAME = "Dr. Pazit Clinic";
const CONTACT_EMAIL = "hello@drpazitclinic.com";
const EFFECTIVE_DATE = "1 January 2025";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-28 lg:pt-36 pb-16 lg:pb-24 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-rose-primary mb-4">
              Legal
            </p>
            <h1 className="font-serif font-light text-[2rem] sm:text-4xl lg:text-5xl text-clinic-dark mb-3">
              Privacy Policy
            </h1>
            <p className="text-clinic-muted text-sm">
              Effective Date: {EFFECTIVE_DATE} &nbsp;·&nbsp; Last Updated: {EFFECTIVE_DATE}
            </p>
          </ScrollReveal>

          <div className="mt-12 prose prose-sm max-w-none text-clinic-body leading-relaxed space-y-10">

            <ScrollReveal>
              <section>
                <h2 className="font-serif text-2xl text-clinic-dark mb-4">1. Introduction</h2>
                <p>
                  {CLINIC_NAME} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting the privacy
                  and confidentiality of all personal information entrusted to us by our patients
                  and website visitors. This Privacy Policy explains how we collect, use, store,
                  and protect your personal data when you interact with our website or services.
                </p>
                <p className="mt-3">
                  By using our website or submitting any form, you agree to the practices described
                  in this policy. If you do not agree, please do not use our services.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="font-serif text-2xl text-clinic-dark mb-4">2. Information We Collect</h2>
                <p>We may collect the following types of personal information:</p>
                <ul className="mt-3 space-y-2 list-disc list-inside text-clinic-muted">
                  <li><strong className="text-clinic-body">Contact Information:</strong> Name, email address, phone number, and message content submitted via our contact or appointment forms.</li>
                  <li><strong className="text-clinic-body">Appointment Data:</strong> Preferred date, service of interest, and any information you voluntarily share when requesting a consultation.</li>
                  <li><strong className="text-clinic-body">Technical Data:</strong> IP address, browser type, and device information collected automatically through website analytics tools.</li>
                  <li><strong className="text-clinic-body">Health-Related Information:</strong> Any health or aesthetic information you choose to share during consultation requests or appointments. This is treated with the highest level of confidentiality.</li>
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="font-serif text-2xl text-clinic-dark mb-4">3. How We Use Your Information</h2>
                <p>We use your personal information only for the following purposes:</p>
                <ul className="mt-3 space-y-2 list-disc list-inside text-clinic-muted">
                  <li>To respond to your enquiries and confirm appointments</li>
                  <li>To provide and personalise our medical and aesthetic services</li>
                  <li>To send appointment reminders and follow-up communications</li>
                  <li>To maintain medical records where required by law</li>
                  <li>To improve our website and service quality</li>
                  <li>To comply with legal and regulatory obligations</li>
                </ul>
                <p className="mt-3">
                  We will never use your information for unsolicited marketing without your
                  explicit consent.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="font-serif text-2xl text-clinic-dark mb-4">4. Data Sharing</h2>
                <p>
                  We do not sell, trade, or rent your personal information to third parties.
                  Your data may only be shared in the following circumstances:
                </p>
                <ul className="mt-3 space-y-2 list-disc list-inside text-clinic-muted">
                  <li>With trusted service providers who assist in operating our website or services (e.g., form processing, scheduling software) — bound by strict confidentiality agreements.</li>
                  <li>When required by law, court order, or regulatory authority.</li>
                  <li>With your explicit written consent.</li>
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="font-serif text-2xl text-clinic-dark mb-4">5. Medical Confidentiality</h2>
                <p>
                  All health-related information shared with {CLINIC_NAME} is treated as
                  strictly confidential medical data. We adhere to applicable healthcare
                  privacy standards and maintain robust internal controls to ensure your
                  medical information is never disclosed without your consent.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="font-serif text-2xl text-clinic-dark mb-4">6. Data Retention</h2>
                <p>
                  We retain personal data only for as long as necessary to fulfil the purposes
                  outlined in this policy, or as required by applicable law. You may request
                  deletion of your data at any time by contacting us (see Section 9).
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="font-serif text-2xl text-clinic-dark mb-4">7. Cookies & Analytics</h2>
                <p>
                  Our website may use cookies and similar tracking technologies to improve
                  your browsing experience and analyse website traffic. You can control cookie
                  preferences through your browser settings. We use analytics data in aggregate
                  form only and do not link it to your personal identity.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="font-serif text-2xl text-clinic-dark mb-4">8. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="mt-3 space-y-2 list-disc list-inside text-clinic-muted">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to or restrict certain uses of your data</li>
                  <li>Withdraw consent at any time (where processing is consent-based)</li>
                  <li>Lodge a complaint with a relevant data protection authority</li>
                </ul>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="font-serif text-2xl text-clinic-dark mb-4">9. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or wish to exercise any
                  of your rights, please contact us:
                </p>
                <div className="mt-4 p-5 bg-rose-blush rounded-xl">
                  <p className="font-medium text-clinic-dark">{CLINIC_NAME}</p>
                  {/* REPLACE: Update with real address and contact */}
                  <p className="text-clinic-muted text-sm mt-1">Dubai Healthcare City, Dubai, UAE</p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-rose-primary text-sm hover:text-rose-deep transition-colors mt-1 block"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <h2 className="font-serif text-2xl text-clinic-dark mb-4">10. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Any changes will be
                  posted on this page with a revised effective date. We encourage you to
                  review this policy periodically.
                </p>
                <p className="mt-3 text-sm italic text-clinic-muted">
                  This Privacy Policy is provided for informational purposes. For legal advice
                  specific to your jurisdiction, please consult a qualified legal professional.
                </p>
              </section>
            </ScrollReveal>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
