// src/app/bedankt/page.tsx
import Link from 'next/link';
// Je kunt hier ook je CheckCircle icoon van lucide-react importeren als je dat consistent wilt houden:
// import { CheckCircle } from 'lucide-react';

export default function BedanktPagina() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 py-12 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-lg w-full space-y-8 bg-white p-8 sm:p-10 md:p-12 rounded-xl shadow-2xl">
        <div>
          {/* Gebruik je favoriete icoon. Hier een SVG als voorbeeld, maar lucide-react is ook prima */}
          <svg className="mx-auto h-16 w-16 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {/* <CheckCircle className="mx-auto h-16 w-16 text-green-500" /> */}

          <h1 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Hartelijk dank!
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Uw bericht is succesvol verzonden. Ik neem zo spoedig mogelijk contact met u op om de mogelijkheden te bespreken.
          </p>
        </div>
        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 transition ease-in-out duration-150"
          >
            Terug naar de homepage
          </Link>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Mocht u dringende vragen hebben, dan kunt u mij ook direct bereiken via 0615015858.
        </p>
      </div>
    </div>
  );
}