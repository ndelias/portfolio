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
  return (
    <html lang="en">
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
