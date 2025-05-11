import Link from "next/link";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageSquare, Users, Clock, CheckCircle } from "lucide-react";
import BookingForm from "@/components/booking-form-new";

// Data arrays (lezingenData, workshopsData, transformatieData) blijven hetzelfde...
// ... (data arrays hier weggelaten voor beknoptheid, zorg dat ze in je code staan)
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
        {/* Header blijft hetzelfde */}
        <div className="container flex h-16 items-center px-4 sm:px-4 md:px-6">
          <Link href="/" className="font-bold text-xl text-blue-800">
            Michael Salmagne
          </Link>
          <nav className="ml-auto flex flex-wrap justify-center gap-4 pt-2 text-sm sm:pt-0 sm:w-auto sm:flex-row sm:gap-6">
            <Link href="#about" className="font-medium hover:underline underline-offset-4 text-blue-800">
              Over mij
            </Link>
            <Link href="#topics" className="font-medium hover:underline underline-offset-4 text-blue-800">
              Lezingen
            </Link>
            <Link href="#workshops" className="font-medium hover:underline underline-offset-4 text-blue-800">
              Workshops
            </Link>
            <Link href="#trajecten" className="font-medium hover:underline underline-offset-4 text-blue-800">
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

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
          {/* De container zorgt al voor padding en een responsive max-width. */}
          {/* Het content blok hierbinnen heeft al max-w-3xl mx-auto, wat goed is voor centrering. */}
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  AI-expert met een menselijke kijk op de toekomst
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Als bruggebouwer tussen business, instituties, mens en technologie bied ik een uniek perspectief op de
                  toekomst van AI.
                </p>
                <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center sm:gap-4">
                  <Button asChild size="lg" className="bg-blue-800 hover:bg-blue-900 text-white">
                    <Link href="#booking">
                      Boek een lezing <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="border-blue-800 text-blue-800 hover:bg-blue-50 hover:text-blue-900">
                    <Link href="#topics">Bekijk mijn onderwerpen</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            {/* Veranderd van max-w-5xl naar max-w-4xl voor een iets compacter gevoel */}
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center max-w-4xl mx-auto">
              <div className="relative mx-auto w-full aspect-square max-w-sm overflow-hidden rounded-full lg:ml-0">
                <Image
                  alt="Michael Salmagne portret"
                  src="/images/michael-portrait.jpg"
                  fill
                  sizes="(max-width: 640px) 100vw, 24rem"
                  className="object-cover object-top"
                />
              </div>
              <div className="space-y-4 text-center lg:text-left">
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
            {/* max-w-2xl behouden, was al redelijk smal */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-2xl mx-auto mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">Mijn Lezingen</h2>
                <p className="mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ontdek de verschillende lezingen die ik aanbied over AI en de toekomst van technologie.
                </p>
              </div>
            </div>
            {/* De grid van kaarten, max-w-5xl is vaak goed voor 3 kolommen. Je kunt dit verkleinen naar max-w-4xl als je de kaarten ook compacter wilt. */}
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {lezingenData.map((topic, index) => (
                <div key={index} className="flex flex-col rounded-lg border bg-white shadow-sm overflow-hidden">
                  {topic.imageSrc && (
                    <div className="relative w-full aspect-video">
                      <Image
                        src={topic.imageSrc}
                        alt={`Afbeelding voor ${topic.title}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <div>
                      <h3 className="text-xl font-bold text-blue-800 text-center sm:text-left">{topic.title}</h3>
                      <p className="mt-2 text-gray-500 text-center sm:text-left flex-grow min-h-[6rem]">{topic.description}</p>
                    </div>
                    <div className="mt-auto pt-4 flex items-center text-sm text-gray-500 justify-center sm:justify-start">
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
            {/* max-w-2xl behouden voor intro */}
            <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-blue-800">
                Inspiratie Workshops
              </h2>
              <p className="mx-auto text-gray-500 text-base md:text-xl">
                Naast lezingen verzorg ik ook interactieve workshops om teams te inspireren en AI toe te passen in de praktijk.
              </p>
            </div>
            {/* Kaarten grid, max-w-5xl is vaak goed voor 2 kolommen. Kan naar max-w-4xl. */}
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
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <div>
                      <h3 className="text-xl font-bold text-blue-800 text-center sm:text-left">{workshop.title}</h3>
                      <p className="mt-2 text-gray-500 text-center sm:text-left flex-grow min-h-[4rem]">{workshop.description}</p>
                    </div>
                    <ul className="mt-auto pt-4 text-sm text-gray-500 space-y-2">
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
            {/* max-w-2xl behouden voor intro */}
            <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-blue-800">
                Transformatie Trajecten
              </h2>
              <p className="mx-auto text-gray-500 text-base md:text-xl">
                Klaar om je organisatie klaar te stomen voor het AI-tijdperk? Kies uit twee krachtige vormen van samenwerking.
              </p>
            </div>
            {/* Kaarten grid, max-w-5xl is vaak goed voor 2 kolommen. Kan naar max-w-4xl. */}
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
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <div>
                      <h3 className="text-xl font-bold text-blue-800">{traject.title}</h3>
                      <p className="mt-2 text-gray-600 flex-grow min-h-[5rem]">{traject.description}</p>
                    </div>
                    <ul className="mt-auto pt-4 text-sm text-gray-800 space-y-2">
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
            {/* Veranderd van max-w-5xl naar max-w-4xl voor een iets compacter gevoel */}
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 max-w-4xl mx-auto">
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
                        <CheckCircle className="mr-2 h-5 w-5 text-blue-800" />
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
            <Link href="#booking" className="text-sm font-medium text-blue-800 hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}