// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Jouw lettertypes
import "./globals.css";
import SiteHeader from '@/components/SiteHeader'; // BELANGRIJKE IMPORT

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michael Salmagne - AI Expert, Spreker & Inspirator",
  description: "Michael Salmagne, AI-expert met een menselijke kijk op de toekomst. Boek lezingen, workshops en transformatietrajecten voor AI-gedreven succes.",
  openGraph: {
    title: "Michael Salmagne - AI Expert, Spreker & Inspirator",
    description: "Ontdek hoe Michael Salmagne organisaties en professionals helpt AI te omarmen met een menselijke focus en strategisch inzicht.",
    url: "https://www.michaelsalmagne.nl",
    siteName: "Michael Salmagne",
    images: [
      {
        url: "https://www.michaelsalmagne.nl/images/michael-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Michael Salmagne - AI Expert & Spreker",
      },
    ],
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Salmagne - AI Expert, Spreker & Inspirator",
    description: "Ontdek hoe Michael Salmagne organisaties en professionals helpt AI te omarmen met een menselijke focus en strategisch inzicht.",
    images: ["https://www.michaelsalmagne.nl/images/michael-og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Contactbalk */}
        <div className="bg-blue-900 text-white py-2 text-sm">
          <div className="container mx-auto flex flex-wrap justify-center items-center text-center px-4 gap-x-4 gap-y-1">
            <p>
              Vragen? Bel{" "}
              <a href="tel:0615015858" className="font-semibold hover:underline">
                0615015858
              </a>{" "}
              of email{" "}
              <a
                href="mailto:info@michaelsalmagne.nl"
                className="font-semibold hover:underline"
              >
                info@michaelsalmagne.nl
              </a>
            </p>
          </div>
        </div>

        {/* SiteHeader (met hamburgermenu logica) */}
        <SiteHeader /> 

        {/* Hoofdinhoud van de pagina */}
        {children}
        
      </body>
    </html>
  );
}