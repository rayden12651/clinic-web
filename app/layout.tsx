import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

/* ── REPLACE: Update clinic name, description, and URL below ── */
const CLINIC_NAME = "Dr. Amara Clinic";
const CLINIC_TAGLINE = "Premium Medical Care With a Personal Touch";
const CLINIC_URL = "https://www.dramaraclinic.com"; // Replace with your actual URL

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${CLINIC_NAME} | ${CLINIC_TAGLINE}`,
    template: `%s | ${CLINIC_NAME}`,
  },
  description:
    "Dr. Amara Clinic offers advanced aesthetic consultations, skin health treatments, anti-aging care, and personalized wellness plans in a luxury environment.",
  keywords: [
    "luxury clinic",
    "aesthetic clinic",
    "skin treatment",
    "anti-aging",
    "Dubai clinic",
    "medical spa",
    "Dr Amara",
  ],
  openGraph: {
    type: "website",
    url: CLINIC_URL,
    title: `${CLINIC_NAME} | ${CLINIC_TAGLINE}`,
    description:
      "Advanced aesthetic and wellness care delivered with precision, elegance, and a deeply personal touch.",
    siteName: CLINIC_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${CLINIC_NAME} | ${CLINIC_TAGLINE}`,
    description:
      "Advanced aesthetic and wellness care delivered with precision, elegance, and a deeply personal touch.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-clinic-bg text-clinic-body font-sans">
        {children}
      </body>
    </html>
  );
}
