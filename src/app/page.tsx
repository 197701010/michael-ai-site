import Link from "next/link";
import Image from 'next/image'; // Import is al correct aanwezig
import { ArrowRight, Calendar, MessageSquare, Users, Clock, CheckCircle } from "lucide-react";
import BookingForm from "@/components/booking-form-new";

// Data voor Lezingen
const lezingenData = [
  {
    title: "AI voor Besluitvormers",
    description: "Een praktische lezing over hoe bestuurders en managers AI kunnen inzetten voor betere besluitvorming.",
    duration: "60 minuten",
    imageSrc: "/images/lezingen/lezing-1.jpg",
  },
  {
    title: "De Menselijke Kant van AI",
    description: "Hoe we menselijke waarden kunnen behouden in een steeds meer door AI gedreven wereld.",
    duration: "45 minuten",
    imageSrc: "/images/lezingen/lezing-2.jpg",
  },
  {
    title: "AI Trends en Toekomstvisie",
    description: "Een overzicht van de nieuwste ontwikkelingen in AI en wat we kunnen verwachten in de komende jaren.",
    duration: "75 minuten",
    imageSrc: "/images/lezingen/lezing-3.jpg",
  },
  {
    title: "AI in de Dagelijkse Praktijk",
    description: "Praktische voorbeelden van hoe AI nu al wordt toegepast in verschillende sectoren.",
    duration: "60 minuten",
    imageSrc: "/images/lezingen/lezing-4.jpg",
  },
  {
    title: "Ethiek en AI",
    description: "Een diepgaande discussie over de ethische vraagstukken rondom kunstmatige intelligentie.",
    duration: "90 minuten",
    imageSrc: "/images/lezingen/lezing-5.jpg",
  },
  {
    title: "AI voor Niet-Techneuten",
    description: "Een toegankelijke introductie tot AI voor mensen zonder technische achtergrond.",
    duration: "45 minuten",
    imageSrc: "/images/lezingen/lezing-6.jpg",
  }
];

// Data voor Workshops
const workshopsData = [
  {
    title: "AI Innovatie Workshop",
    description: "Praktische workshop waarin teams leren hoe ze AI kunnen inzetten voor innovatie. Met oefeningen en brainstorms.",
    details: [
      "Duur: Halve dag (4 uur)",
      "Voor teams van 5–20 personen",
      "Inclusief werkmateriaal"
    ],
    imageSrc: "/images/workshops/workshop-1.jpg",
  },
  {
    title: "Toekomstgericht Denken",
    description: "Help je team voorbij de waan van de dag kijken en een AI-visie ontwikkelen voor de komende jaren.",
    details: [
      "Duur: Volledige dag (7 uur)",
      "Voor teams van 5–15 personen",
      "Inclusief lunch & werkmateriaal"
    ],
    imageSrc: "/images/workshops/workshop-2.jpg",
  },
  {
    title: "AI for Executives",
    description: "Exclusieve workshop voor leidinggevenden om strategische besluitvorming rondom AI-implementatie te versterken.",
    details: [
      "Duur: 3 uur",
      "Voor executives en beslissers",
      "Inclusief strategisch canvas"
    ],
    imageSrc: "/images/workshops/workshop-3.jpg",
  },
  {
    title: "Storytelling with AI",
    description: "Leer hoe AI kan worden ingezet voor het creëren van krachtige verhalen en overtuigende communicatie.",
    details: [
      "Duur: 4 uur",
      "Voor marketing en communicatieprofessionals",
      "Hands-on met AI schrijftools"
    ],
    imageSrc: "/images/workshops/workshop-4.jpg",
  }
];

// Data voor Transformatie Trajecten
const transformatieData = [
  {
    title: "AI Ready Traject",
    description: "Een begeleid traject waarin ik jouw team en organisatie help om AI-kansen te herkennen, strategie te bepalen en stap voor stap AI te integreren.",
    features: [
      "Van strategie tot implementatie",
      "Inclusief workshops, scans en roadmap",
      "Op maat voor jouw organisatie"
    ],
    imageSrc: "/images/transformatie/transformatie-1.jpg",
  },
  {
    title: "Interim AI Leadership",
    description: "Tijdelijk versterking nodig? Als interim manager breng ik leiderschap, focus en executiekracht in AI-transformatie.",
    features: [
      "Leiderschap in digitale en AI-transities",
      "Hands-on aanpak met visie",
      "Snel inzetbaar op strategisch niveau"
    ],
    imageSrc: "/images/transformatie/transformatie-2.jpg",
  }
];


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex flex-wrap items-center justify-between h-16 px-4 sm:px-4 md:px-6">
          <Link href="/" className="font-bold text-xl text-blue-800">
            Michael Salmagne
          </Link>
          <nav className="flex w-full flex-wrap justify-center gap-4 pt-2 sm:pt-0 sm:w-auto sm:ml-auto sm:flex-row sm:gap-6 text-sm">
            <Link href="#about" className="hover:underline underline-offset-4 text-blue-800">
              Over mij
            </Link>
            <Link href="#topics" className="hover:underline underline-offset-4 text-blue-800">
              Lezingen
            </Link>
            <Link href="#workshops" className="hover:underline underline-offset-4 text-blue-800">
              Workshops
            </Link>
            <Link href="#trajecten" className="hover:underline underline-offset-4 text-blue-800">
              Transformatie
            </Link>
            <Link
              href="#booking"
              className="bg-blue-800 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-900 transition sm:ml-4"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 px-4 sm:px-2 md:px-6">
        {/* Hero Section */}
        <section className="py-16 md:py-28 bg-gradient-to-b from-slate-50 to-white">
          <div className="container grid items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
            <div className="space-y-4 text-center lg:text-left">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                AI-expert met een menselijke kijk op de toekomst
              </h1>
              <p className="max-w-[600px] mx-auto lg:mx-0 text-gray-500 text-base sm:text-lg">
                Als bruggebouwer tussen business, mens en technologie bied ik een uniek perspectief op de toekomst van AI.
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  href="#booking"
                  className="bg-blue-800 text-white px-6 py-3 rounded text-lg font-semibold inline-flex items-center hover:bg-blue-900 transition"
                >
                  Boek een lezing <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="#topics"
                  className="border border-blue-800 text-blue-800 px-6 py-3 rounded text-lg font-semibold hover:bg-blue-50 transition"
                >
                  Bekijk mijn onderwerpen
                </Link>
              </div>
            </div>
            {/* Afbeelding in Hero Section bijgewerkt */}
            <div className="relative mx-auto lg:mr-0 aspect-video w-full overflow-hidden rounded-xl">
              <Image
                alt="Michael Salmagne tijdens een presentatie"
                src="/images/michael-speaking.jpg"
                fill // Gebruik de boolean 'fill' prop
                sizes="(max-width: 1024px) 100vw, 50vw" // Pas deze 'sizes' aan je layout aan!
                className="object-cover" // Tailwind class voor object-fit
                priority // Voor LCP optimalisatie
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Afbeelding in About Section bijgewerkt. Belangrijk: zorg dat de parent div (deze hieronder) daadwerkelijk afmetingen krijgt. We hadden hier 'w-full' aan toegevoegd. */}
              <div className="relative mx-auto w-full aspect-square max-w-sm overflow-hidden rounded-full">
                <Image
                  alt="Michael Salmagne portret"
                  src="/images/michael-portrait.jpg"
                  fill // Gebruik de boolean 'fill' prop
                  sizes="(max-width: 640px) 100vw, 24rem" // Afgestemd op max-w-sm (24rem)
                  className="object-cover object-top" // Tailwind classes voor object-fit en object-position
                />
              </div>
              <div className="text-center lg:text-left space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Over Michael Salmagne</h2>
                <p className="text-base md:text-lg text-gray-500">
                  Als spreker over AI focus ik niet op de technische details, maar op de menselijke kant en de praktische toepassingen.
                </p>
                <p className="text-base md:text-lg text-gray-500">
                  Met mijn unieke benadering help ik bedrijven, instellingen en professionals om AI te omarmen zonder menselijke waarden te verliezen.
                </p>
                <div className="flex flex-col items-center lg:items-start sm:flex-row sm:flex-wrap justify-center lg:justify-start gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-800" />
                    <span className="text-sm font-medium">100+ lezingen gegeven</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-blue-800" />
                    <span className="text-sm font-medium">Expert in AI communicatie</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-800" />
                    <span className="text-sm font-medium">Inspirerende workshops</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Topics Section (Lezingen) */}
        <section id="topics" className="py-16 md:py-24 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">Mijn Lezingen</h2>
                <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ontdek de verschillende lezingen die ik aanbied over AI en de toekomst van technologie.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {lezingenData.map((topic, index) => (
                <div key={index} className="flex flex-col rounded-lg border bg-white shadow-sm overflow-hidden">
                  {topic.imageSrc && (
                    <div className="relative w-full aspect-video">
                      <Image
                        src={topic.imageSrc}
                        alt={`Afbeelding voor ${topic.title}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" // Voorbeeld, pas aan!
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <div>
                      <h3 className="text-xl font-bold text-blue-800 text-center sm:text-left">{topic.title}</h3>
                      <p className="mt-2 text-gray-500 text-center sm:text-left flex-grow">{topic.description}</p>
                    </div>
                    <div className="mt-4 flex items-center text-sm text-gray-500 justify-center sm:justify-start">
                      <Clock className="mr-1 h-4 w-4" />
                      {topic.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workshops Section */}
        <section id="workshops" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-blue-800">
                Inspiratie Workshops
              </h2>
              <p className="max-w-3xl mx-auto text-gray-500 text-base md:text-xl">
                Naast lezingen verzorg ik ook interactieve workshops om teams te inspireren en AI toe te passen in de praktijk.
              </p>
            </div>
            <div className="mt-12 grid max-w-5xl mx-auto grid-cols-1 md:grid-cols-2 gap-8">
              {workshopsData.map((workshop, index) => (
                <div key={index} className="flex flex-col rounded-lg border bg-white shadow-sm overflow-hidden">
                  {workshop.imageSrc && (
                    <div className="relative w-full aspect-[4/3]">
                      <Image
                        src={workshop.imageSrc}
                        alt={`Afbeelding voor ${workshop.title}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw" // Voorbeeld, pas aan!
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <div>
                      <h3 className="text-xl font-bold text-blue-800 text-center sm:text-left">{workshop.title}</h3>
                      <p className="mt-2 text-gray-500 text-center sm:text-left flex-grow">{workshop.description}</p>
                    </div>
                    <ul className="mt-4 text-sm text-gray-500 space-y-2">
                      {workshop.details.map((detail, i) => (
                        <li key={i} className="flex items-center justify-center sm:justify-start">
                          <CheckCircle className="mr-2 h-4 w-4 text-blue-800" /> {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transformatie Trajecten Section */}
        <section id="trajecten" className="py-16 md:py-24 bg-slate-50">
          <div className="container px-4 sm:px-4 md:px-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-blue-800">
                Transformatie Trajecten
              </h2>
              <p className="max-w-3xl mx-auto text-gray-500 text-base md:text-xl">
                Klaar om je organisatie klaar te stomen voor het AI-tijdperk? Kies uit twee krachtige vormen van samenwerking.
              </p>
            </div>
            <div className="mt-12 grid max-w-5xl mx-auto grid-cols-1 md:grid-cols-2 gap-8">
              {transformatieData.map((traject, index) => (
                <div key={index} className="flex flex-col rounded-lg border bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  {traject.imageSrc && (
                    <div className="relative w-full aspect-[3/2]">
                      <Image
                        src={traject.imageSrc}
                        alt={`Afbeelding voor ${traject.title}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw" // Voorbeeld, pas aan!
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <div>
                      <h3 className="text-xl font-bold text-blue-800">{traject.title}</h3>
                      <p className="mt-2 text-gray-600 flex-grow">{traject.description}</p>
                    </div>
                    <ul className="mt-4 text-sm text-gray-800 space-y-2">
                      {traject.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-blue-800" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking" className="py-16 md:py-24 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Boek Michael als Spreker</h2>
                <p className="text-gray-500 md:text-lg">
                  Interesse in een lezing of workshop? Vul het formulier in en ik neem contact met u op.
                </p>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Wat u kunt verwachten:</h3>
                  <ul className="space-y-2">
                    {[
                      "Persoonlijk gesprek om uw wensen te bespreken",
                      "Lezing of workshop op maat voor uw publiek",
                      "Professionele presentatie met praktische inzichten",
                      "Nazorg en aanvullende materialen indien gewenst"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <BookingForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8 bg-blue-50">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:gap-8 px-4 md:px-6">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Michael Salmagne. Alle rechten voorbehouden.
          </p>
          <nav className="flex gap-4 sm:gap-6 ml-auto">
            <Link href="/privacy" className="text-sm font-medium text-blue-800 hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/voorwaarden" className="text-sm font-medium text-blue-800 hover:underline underline-offset-4">
              Voorwaarden
            </Link>
            <Link href="#" className="text-sm font-medium text-blue-800 hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}