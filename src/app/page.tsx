import Link from "next/link";
import { ArrowRight, Calendar, MessageSquare, Users } from "lucide-react";
import BookingForm from "@/components/booking-form-new";

function CheckCircle(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function Clock(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <div className="container flex flex-wrap items-center justify-between h-16 px-4 sm:px-4 md:px-6">
    <Link href="/" className="font-bold text-xl text-blue-700">
      Michael Salmagne
    </Link>

    <nav className="flex w-full flex-wrap justify-center gap-4 pt-2 sm:pt-0 sm:w-auto sm:ml-auto sm:flex-row sm:gap-6 text-sm">
      <Link href="#about" className="hover:underline underline-offset-4 text-blue-600">
        Over mij
      </Link>
      <Link href="#topics" className="hover:underline underline-offset-4 text-blue-600">
        Lezingen
      </Link>
      <Link href="#workshops" className="hover:underline underline-offset-4 text-blue-600">
        Workshops
      </Link>
      <Link href="#trajecten" className="hover:underline underline-offset-4 text-blue-600">
        Transformatie
      </Link>
      <Link
        href="#booking"
        className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700 transition sm:ml-4"
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
                  className="bg-blue-600 text-white px-6 py-3 rounded text-lg font-semibold inline-flex items-center hover:bg-blue-700 transition"
                >
                  Boek een lezing <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="#topics"
                  className="border border-blue-600 text-blue-600 px-6 py-3 rounded text-lg font-semibold hover:bg-blue-50 transition"
                >
                  Bekijk mijn onderwerpen
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:mr-0 aspect-video w-full overflow-hidden rounded-xl">
              <img
                alt="Michael Salmagne tijdens een presentatie"
                className="object-cover w-full h-full"
                src="/images/michael-speaking.jpg"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="mx-auto aspect-square max-w-sm overflow-hidden rounded-full">
                <img
                  alt="Michael Salmagne portret"
                  className="w-full h-full object-cover object-top"
                  src="/images/michael-portrait.jpg"
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
                <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center lg:justify-start gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">100+ lezingen gegeven</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Expert in AI communicatie</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Inspirerende workshops</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

       {/* Topics Section */}
       <section id="topics" className="py-16 md:py-24 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-700">Mijn Lezingen</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ontdek de verschillende lezingen die ik aanbied over AI en de toekomst van technologie.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {[
                {
                  title: "AI voor Besluitvormers",
                  description: "Een praktische lezing over hoe bestuurders en managers AI kunnen inzetten voor betere besluitvorming.",
                  duration: "60 minuten",
                },
                {
                  title: "De Menselijke Kant van AI",
                  description: "Hoe we menselijke waarden kunnen behouden in een steeds meer door AI gedreven wereld.",
                  duration: "45 minuten",
                },
                {
                  title: "AI Trends en Toekomstvisie",
                  description: "Een overzicht van de nieuwste ontwikkelingen in AI en wat we kunnen verwachten in de komende jaren.",
                  duration: "75 minuten",
                },
                {
                  title: "AI in de Dagelijkse Praktijk",
                  description: "Praktische voorbeelden van hoe AI nu al wordt toegepast in verschillende sectoren.",
                  duration: "60 minuten",
                },
                {
                  title: "Ethiek en AI",
                  description: "Een diepgaande discussie over de ethische vraagstukken rondom kunstmatige intelligentie.",
                  duration: "90 minuten",
                },
                {
                  title: "AI voor Niet-Techneuten",
                  description: "Een toegankelijke introductie tot AI voor mensen zonder technische achtergrond.",
                  duration: "45 minuten",
                }
              ].map((topic, index) => (
                <div key={index} className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm">
                  <div>
                  <h3 className="text-xl font-bold text-blue-800">{topic.title}</h3>
                    <p className="mt-2 text-gray-500">{topic.description}</p>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <Clock className="mr-1 h-4 w-4" />
                    {topic.duration}
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-blue-700">
                Inspiratie Workshops
              </h2>
              <p className="max-w-3xl mx-auto text-gray-500 text-base md:text-xl">
                Naast lezingen verzorg ik ook interactieve workshops om teams te inspireren en AI toe te passen in de praktijk.
              </p>
            </div>
            <div className="mt-12 grid max-w-5xl mx-auto grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border rounded-lg bg-white shadow-sm">
              <h3 className="text-xl font-bold text-blue-800">AI Innovatie Workshop</h3>
                <p className="mt-2 text-gray-500">
                  Praktische workshop waarin teams leren hoe ze AI kunnen inzetten voor innovatie. Met oefeningen en brainstorms.
                </p>
                <ul className="mt-4 text-sm text-gray-500 space-y-2">
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-blue-600" /> Duur: Halve dag (4 uur)</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-blue-600" /> Voor teams van 5–20 personen</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-blue-600" /> Inclusief werkmateriaal</li>
                </ul>
              </div>
              <div className="p-6 border rounded-lg bg-white shadow-sm">
              <h3 className="text-xl font-bold text-blue-800">Toekomstgericht Denken</h3>
                <p className="mt-2 text-gray-500">
                  Help je team voorbij de waan van de dag kijken en een AI-visie ontwikkelen voor de komende jaren.
                </p>
                <ul className="mt-4 text-sm text-gray-500 space-y-2">
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-blue-600" /> Duur: Volledige dag (7 uur)</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-blue-600" /> Voor teams van 5–15 personen</li>
                  <li className="flex items-center"><CheckCircle className="mr-2 h-4 w-4 text-blue-600" /> Inclusief lunch & werkmateriaal</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

{/* Transformatie Trajecten Section */}
<section id="transformatie" className="py-16 md:py-24 bg-slate-50">
  <div className="container px-4 sm:px-4 md:px-6">
    <div className="text-center space-y-4">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-blue-700">
        Transformatie Trajecten
      </h2>
      <p className="max-w-3xl mx-auto text-gray-500 text-base md:text-xl">
        Klaar om je organisatie klaar te stomen voor het AI-tijdperk? Kies uit twee krachtige vormen van samenwerking.
      </p>
    </div>
    <div className="mt-12 grid max-w-5xl mx-auto grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-6 border border-blue-100 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-xl font-bold text-blue-800">AI Ready Traject</h3>
        <p className="mt-2 text-gray-600">
          Een begeleid traject waarin ik jouw team en organisatie help om AI-kansen te herkennen, strategie te bepalen en stap voor stap AI te integreren.
        </p>
        <ul className="mt-4 text-sm text-gray-800 space-y-2">
          <li className="flex items-center">
            <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
            Van strategie tot implementatie
          </li>
          <li className="flex items-center">
            <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
            Inclusief workshops, scans en roadmap
          </li>
          <li className="flex items-center">
            <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
            Op maat voor jouw organisatie
          </li>
        </ul>
      </div>
      <div className="p-6 border border-blue-100 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
        <h3 className="text-xl font-bold text-blue-800">Interim AI Leadership</h3>
        <p className="mt-2 text-gray-600">
          Tijdelijk versterking nodig? Als interim manager breng ik leiderschap, focus en executiekracht in AI-transformatie.
        </p>
        <ul className="mt-4 text-sm text-gray-800 space-y-2">
          <li className="flex items-center">
            <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
            Leiderschap in digitale en AI-transities
          </li>
          <li className="flex items-center">
            <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
            Hands-on aanpak met visie
          </li>
          <li className="flex items-center">
            <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
            Snel inzetbaar op strategisch niveau
          </li>
        </ul>
      </div>
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
          <Link href="/privacy" className="text-sm font-medium text-blue-700 hover:underline underline-offset-4">
  Privacy
</Link>

            <Link href="/voorwaarden" className="text-sm font-medium text-blue-700 hover:underline underline-offset-4">
  Voorwaarden
</Link>

            <Link href="#" className="text-sm font-medium text-blue-700 hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
