import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Jouw lettertypes
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- BEGIN AANGEPASTE METADATA ---
export const metadata: Metadata = {
  // Basis metadata
  title: "Michael Salmagne - AI Expert, Spreker & Inspirator",
  description: "Michael Salmagne, AI-expert met een menselijke kijk op de toekomst. Boek lezingen, workshops en transformatietrajecten voor AI-gedreven succes.",

  // Open Graph (voor Facebook, LinkedIn, WhatsApp, etc.)
  openGraph: {
    title: "Michael Salmagne - AI Expert, Spreker & Inspirator",
    description: "Ontdek hoe Michael Salmagne organisaties en professionals helpt AI te omarmen met een menselijke focus en strategisch inzicht.",
    url: "https://www.michaelsalmagne.nl", // BELANGRIJK: Vervang dit met JE ECHTE LIVE DOMEINNAAM!
    siteName: "Michael Salmagne",
    images: [
      {
        url: "https://www.michaelsalmagne.nl/images/michael-og-image.jpg", // Zorg dat dit pad klopt!
                                                                        // Maak een afbeelding genaamd 'michael-og-image.jpg' (1200x630px aanbevolen)
                                                                        // en plaats deze in je `public/images/` map.
        width: 1200,
        height: 630,
        alt: "Michael Salmagne - AI Expert & Spreker",
      },
    ],
    locale: "nl_NL", // Nederlands - Nederland
    type: "website",
  },

  // Twitter Card (voor Twitter/X)
  twitter: {
    card: "summary_large_image",
    title: "Michael Salmagne - AI Expert, Spreker & Inspirator",
    description: "Ontdek hoe Michael Salmagne organisaties en professionals helpt AI te omarmen met een menselijke focus en strategisch inzicht.",
    images: ["https://www.michaelsalmagne.nl/images/michael-og-image.jpg"],
    // site: "@jouwTwitterHandle", 
    // creator: "@jouwTwitterHandle",
  },
};
// --- EINDE AANGEPASTE METADATA ---

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // HET COMMENTAAR IS HIER VERWIJDERD
    <html lang="nl"> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}