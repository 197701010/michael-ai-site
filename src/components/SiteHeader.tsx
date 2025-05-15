// src/components/SiteHeader.tsx
"use client"; // Nodig voor useState en event handlers

import Link from 'next/link';
import React, { useState, useEffect } from 'react'; // useState en useEffect toegevoegd
import { Menu, X } from 'lucide-react'; // Iconen voor hamburger en sluiten

const SiteHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Effect om de body scroll te blokkeren als het mobiele menu open is
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup functie om de body scroll te herstellen als de component unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);


  const navLinks = [
    { href: "#about", label: "Over mij" },
    { href: "#topics", label: "Lezingen" },
    { href: "#workshops", label: "Workshops" },
    { href: "#trajecten", label: "Transformatie" },
    // Blog link is hier verwijderd
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-4 md:px-6"> {/* justify-between toegevoegd */}
        <Link href="/" className="font-bold text-xl text-blue-800">
          Michael Salmagne
        </Link>

        {/* Desktop Navigatie */}
        <nav className="hidden md:flex items-center gap-4 pt-2 text-sm sm:pt-0 sm:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium hover:underline underline-offset-4 text-blue-800"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#booking"
            className="bg-blue-800 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-900 transition" // sm:ml-4 verwijderd voor consistentie in md:flex
          >
            Contact
          </Link>
        </nav>

        {/* Hamburger Menu Knop (alleen zichtbaar op mobiel) */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Navigatiemenu openen/sluiten"
            className="p-2 rounded-md text-blue-800 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobiel Menu (wordt getoond/verborgen op basis van state) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 z-40 bg-white shadow-lg h-[calc(100vh-4rem)] overflow-y-auto"> {/* Full screen height minus header */}
          <nav className="flex flex-col items-center space-y-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-blue-800 hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)} // Menu sluiten na klik
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#booking"
              className="bg-blue-800 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-900 transition"
              onClick={() => setIsMobileMenuOpen(false)} // Menu sluiten na klik
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;