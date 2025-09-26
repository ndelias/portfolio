import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TranslationProvider } from "../contexts/TranslationContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amend Therapy - Angela Mendez, LPC",
  description: "Angela Mendez is a bilingual therapist specializing in calm and grounding therapeutic support for overwhelmed adults who are constantly juggling chronic stress and responsibility.",
  keywords: "therapy, therapist, mental health, bilingual therapy, stress management, anxiety, depression, counseling, Marietta GA, Georgia",
  authors: [{ name: "Angela Mendez, LPC" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Amend Therapy - Angela Mendez, LPC",
    description: "Bilingual therapist specializing in calm and grounding therapeutic support for overwhelmed adults managing chronic stress and responsibility.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Amend Therapy",
    "description": "Bilingual therapist specializing in calm and grounding therapeutic support for overwhelmed adults managing chronic stress and responsibility.",
    "url": "https://www.amendlpctherapy.com",
    "telephone": "+1-XXX-XXX-XXXX",
    "email": "angela@amendlpc.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "840 Kennesaw Ave NW Ste 8",
      "addressLocality": "Marietta",
      "addressRegion": "GA",
      "postalCode": "30060",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.9526",
      "longitude": "-84.5499"
    },
    "openingHours": "Mo-Fr 09:00-17:00",
    "priceRange": "$$",
    "medicalSpecialty": "Mental Health",
    "founder": {
      "@type": "Person",
      "name": "Angela Mendez",
      "jobTitle": "Licensed Professional Counselor",
      "description": "Bilingual therapist specializing in women's mental health and stress management"
    },
    "sameAs": [
      "https://www.amendlpctherapy.com"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TranslationProvider>
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}
