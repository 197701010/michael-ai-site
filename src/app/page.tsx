// src/app/page.tsx
"use client";

import Link from "next/link";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageSquare, Users, Clock, CheckCircle } from "lucide-react";
import BookingForm from "@/components/booking-form-new";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import ReactMarkdown from 'react-markdown';

// --- DATA INTERFACE ---
interface DataItem {
  id: string;
  title: string;
  description: string;
  imageSrc?: string;
  altText?: string;
  duration?: string;
  keyPoints?: string[];
  features?: string[];
  modalDetails?: string[];
}

// --- DATA ARRAYS ---
const lezingenData: DataItem[] = [
  {
    id: "lezing-1",
    title: "AI voor Besluitvormers",
    description: "Ontdek hoe u als leider AI kunt inzetten voor scherpere inzichten en betere strategische beslissingen, zonder technisch expert te hoeven zijn. Leer de principes van AI-gedreven besluitvorming en identificeer concrete kansen.",
    duration: "60-90 minuten (aanpasbaar)",
    imageSrc: "/images/lezingen/lezing-1.jpg",
    altText: "Conceptuele afbeelding over data-analyse en AI voor zakelijke beslissingen",
    modalDetails: [
      "**Doelgroep:** Bestuurders, managers, en directieleden die de potentie van AI voor hun organisatie willen ontsluiten.",
      "**Kernboodschap:** Leer de principes van AI-gedreven besluitvorming, identificeer concrete AI-kansen, en krijg handvatten om AI-projecten te sturen en te evalueren.",
      "**Resultaat:** U verlaat de lezing met direct toepasbare inzichten en een helder beeld van hoe AI uw besluitvormingsprocessen kan versterken, met behoud van menselijk overzicht en ethische verantwoordelijkheid.",
      "**Mijn Unieke Aanpak:** Ik combineer strategisch inzicht met een gave om complexe technologie toegankelijk te maken, specifiek gericht op de vragen en uitdagingen van leiders."
    ]
  },
  {
    id: "lezing-2",
    title: "De Menselijke Kant van AI",
    description: "Verken de ethische en sociale impact van AI. Ontdek strategieën voor transparantie, eerlijkheid en menselijke controle in AI-systemen voor een verantwoorde implementatie.",
    duration: "90 minuten",
    imageSrc: "/images/lezingen/lezing-2.jpg",
    altText: "Symbolische weergave van menselijke en kunstmatige intelligentie die samenwerken",
    modalDetails: [
        "**Focus:** De ethische, sociale en culturele impact van AI op individu, organisatie en maatschappij.",
        "**Inhoud:** Strategieën voor het waarborgen van transparantie, eerlijkheid, privacy en menselijke controle in AI-systemen.",
        "**Resultaat:** Concrete handvatten en een ethisch kompas om AI op een verantwoorde, mensgerichte manier te implementeren en te gebruiken.",
        "**Mijn Unieke Aanpak:** Een gebalanceerd perspectief dat zowel de technologische mogelijkheden als de cruciale menselijke en maatschappelijke waarden belicht."
    ]
  },
  {
    id: "lezing-3",
    title: "AI Trends en Toekomstvisie",
    description: "Een helder overzicht van cutting-edge AI-trends zoals Generative AI en XAI, en een inspirerende blik op hoe u strategisch kunt anticiperen op de volgende innovatiegolf.",
    duration: "75 minuten",
    imageSrc: "/images/lezingen/lezing-3.jpg",
    altText: "Futuristische visualisatie van AI-trends en technologische vooruitgang",
    modalDetails: ["**Inhoud:** Verkenning van cutting-edge AI-trends zoals Generative AI, Explainable AI (XAI), en de impact op diverse sectoren.\n**Perspectief:** Realistische toekomstscenario's, kansen en uitdagingen, en hoe proactief te anticiperen op de volgende golf van AI-innovatie.\n**Resultaat:** Een geïnformeerde en geïnspireerde kijk op de toekomst, stelt u in staat strategisch vooruit te denken en uw organisatie voor te bereiden."]
  },
  {
    id: "lezing-4",
    title: "AI in de Dagelijkse Praktijk",
    description: "Ontdek met tastbare use-cases en succesverhalen hoe AI processen optimaliseert en nieuwe mogelijkheden creëert. Krijg inspiratie voor uw eigen werkveld.",
    duration: "75 minuten",
    imageSrc: "/images/lezingen/lezing-4.jpg",
    altText: "Moderne iconen van diverse sectoren verbonden door een AI-netwerk",
    modalDetails: ["**Focus:** Tastbare use-cases en succesverhalen van AI-implementaties in o.a. marketing, klantenservice, operations en HR.\n**Inzichten:** Leer van best practices, valkuilen en de praktische stappen om AI succesvol in uw eigen werkveld toe te passen.\n**Resultaat:** Een schat aan direct toepasbare ideeën en inspiratie om AI-projecten in uw eigen organisatie te starten of te verbeteren."]
  },
  {
    id: "lezing-5",
    title: "Ethiek en AI",
    description: "Een essentiële discussie over ethische dilemma's en verantwoordelijkheden in AI, met handvatten voor het ontwikkelen van ethische richtlijnen.",
    duration: "90 minuten",
    imageSrc: "/images/lezingen/lezing-5.jpg",
    altText: "Abstracte weegschaal die de balans tussen AI en ethiek symboliseert",
    modalDetails: ["**Kernvragen:** Hoe zorgen we voor eerlijke, transparante en non-discriminatoire AI? Wie is verantwoordelijk? Hoe borgen we privacy en autonomie?\n**Aanpak:** Analyse van ethische frameworks, casestudies en interactieve discussie om bewustzijn en kritisch denken te bevorderen.\n**Resultaat:** Een dieper begrip van de ethische dimensies van AI en handvatten om ethische richtlijnen binnen uw organisatie te ontwikkelen en te implementeren."]
  },
  {
    id: "lezing-6",
    title: "AI voor Niet-Techneuten",
    description: "Een heldere introductie tot AI zonder technisch jargon. Krijg een solide basiskennis om met vertrouwen mee te praten over AI-ontwikkelingen.",
    duration: "60 minuten",
    imageSrc: "/images/lezingen/lezing-6.jpg",
    altText: "Heldere, verlichte weg die complexe AI-concepten toegankelijk maakt",
    modalDetails: ["**Doel:** Demystificeren van AI-jargon en complexe concepten uitleggen in begrijpelijke taal.\n**Inhoud:** Wat is AI (niet)? Wat zijn de belangrijkste toepassingen? Hoe beïnvloedt AI uw werk en leven?\n**Resultaat:** Een solide basiskennis van AI, waardoor u met meer vertrouwen kunt meepraten over en anticiperen op AI-ontwikkelingen."]
  }
];

const workshopsData: DataItem[] = [
  {
    id: "workshop-1",
    title: "AI Innovatie Workshop",
    description: "Een hands-on workshop waarin teams via design thinking en co-creatie concrete AI-kansen identificeren en eerste concepten ontwikkelen.",
    keyPoints: [
      "Duur: Halve dag (4 uur)",
      "Voor teams van 5–20 personen",
      "Inclusief werkmateriaal"
    ],
    imageSrc: "/images/workshops/workshop-1.jpg",
    altText: "Team dat samenwerkt aan innovatieve AI-ideeën tijdens een workshop",
    modalDetails: [
        "**Focus:** Identificeren van concrete AI-kansen en ontwikkelen van innovatieve oplossingen specifiek voor uw organisatie.",
        "**Methode:** Een energieke mix van hands-on oefeningen, design thinking methodologieën, en co-creatieve brainstormsessies om direct tot de kern te komen.",
        "**Resultaat:** Een concrete lijst met direct toepasbare, potentiële AI-projecten, vaak inclusief eerste prototypes of uitgewerkte concepten. Uw team verlaat de workshop met nieuwe energie en een innovatieve mindset."
    ]
  },
  {
    id: "workshop-2",
    title: "Toekomstgericht Denken",
    description: "Ontwikkel een langetermijnstrategie voor AI-integratie, anticipeer op trends en bereid uw team voor op de impact van AI op uw sector.",
    keyPoints: [
      "Duur: Volledige dag (7 uur)",
      "Voor teams van 5–15 personen",
      "Inclusief lunch & werkmateriaal"
    ],
    imageSrc: "/images/workshops/workshop-2.jpg",
    altText: "Modern kompas dat de richting wijst naar strategisch toekomstdenken met AI",
    modalDetails: ["**Doel:** Uw team helpen voorbij de waan van de dag te kijken en een robuuste, adaptieve langetermijnstrategie voor AI-integratie te ontwikkelen.\n**Aanpak:** Interactieve sessies gericht op scenarioplanning, impactanalyse van toekomstige AI-trends op uw specifieke sector, en het formuleren van een flexibele strategische roadmap.\n**Resultaat:** Een toekomstbestendige AI-visie, concrete strategische pijlers voor de komende 1-3 jaar, en een team dat beter is uitgerust om proactief in te spelen op technologische veranderingen."]
  },
  {
    id: "workshop-3",
    title: "AI for Executives",
    description: "Een exclusieve sessie voor leiders om AI strategisch te verankeren in bedrijfsdoelstellingen, investeringen te beoordelen en AI-gedreven verandering te leiden.",
    keyPoints: [
      "Duur: 3 uur",
      "Voor executives en beslissers",
      "Inclusief strategisch canvas"
    ],
    imageSrc: "/images/workshops/workshop-3.jpg",
    altText: "Professionele setting die strategische AI-besluitvorming voor leidinggevenden symboliseert",
    modalDetails: ["**Gericht op:** CEO's, directieleden, en senior managers die AI niet als een losse tool zien, maar als een integraal onderdeel van de bedrijfsstrategie.\n**Inhoud:** Identificeren van high-impact AI use cases die direct bijdragen aan bedrijfsdoelen, het opstellen van business cases, het beoordelen van AI-investeringen, het managen van implementatierisico's, en het effectief leiden van AI-gedreven verandering binnen de organisatie.\n**Resultaat:** Een scherper begrip van de strategische implicaties van AI, een praktisch framework voor AI-governance en besluitvorming, en de concrete vaardigheden om AI-initiatieven succesvol te overzien en te sturen."]
  },
  {
    id: "workshop-4",
    title: "Storytelling with AI",
    description: "Leer hoe AI kan helpen bij contentideeën, personalisatie en analyse voor krachtigere communicatie en een dieper begrip van uw doelgroep.",
    keyPoints: [
      "Duur: 4 uur",
      "Voor marketing en communicatieprofessionals",
      "Hands-on met AI schrijftools"
    ],
    imageSrc: "/images/workshops/workshop-4.jpg",
    altText: "Visualisatie van hoe AI helpt bij het creëren van krachtige, digitale verhalen",
    modalDetails: ["**Inhoud:** Ontdek hoe AI-tools kunnen assisteren bij het genereren van creatieve content ideeën, het schrijven en optimaliseren van teksten, het personaliseren van boodschappen voor verschillende segmenten, en het analyseren van de effectiviteit van uw communicatie-uitingen.\n**Tools & Technieken:** Kennismaking en hands-on oefeningen met relevante en toegankelijke AI-gedreven contentcreatie-, analyse- en personalisatietools.\n**Resultaat:** Verbeterde vaardigheden om AI effectief in te zetten voor overtuigende storytelling, het ontwikkelen van datagedreven contentstrategieën, en het verkrijgen van een dieper, genuanceerd begrip van uw doelgroep."]
  }
];

const transformatieData: DataItem[] = [
  {
    id: "transformatie-1",
    title: "AI Ready Traject",
    description: "Een gefaseerd traject van analyse (AI Readiness Scan) tot strategie en pilot-implementatie, resulterend in een gedragen AI-strategie en succesvolle eerste AI-toepassingen.",
    features: [
      "Van strategie tot implementatie",
      "Inclusief workshops, scans en roadmap",
      "Op maat voor jouw organisatie"
    ],
    imageSrc: "/images/transformatie/transformatie-1.jpg",
    altText: "Symbolische weergave van een organisatie die transformeert naar AI-gereedheid",
    modalDetails: [
        "**Probleem Opgelost:** Helpt organisaties die AI willen implementeren maar niet weten waar te beginnen of hoe een effectieve strategie te ontwikkelen die aansluit bij hun unieke context.",
        "**Mijn Aanpak:** Een gestructureerd en interactief traject, beginnend met een grondige analyse van uw huidige situatie en AI-potentieel (AI Readiness Scan). Gevolgd door co-creatie van een heldere visie en een pragmatische roadmap, begeleiding bij het selecteren en uitvoeren van impactvolle pilot-projecten, en verankering van kennis binnen uw team.",
        "**Concrete Resultaten:** Een breed gedragen en direct uitvoerbare AI-strategie, een portfolio van geïdentificeerde quick wins en lange termijn strategische kansen, succesvol gelanceerde eerste AI-toepassingen met meetbare impact, en een team dat is voorbereid en gemotiveerd voor verdere AI-integratie.",
        "**Doorlooptijd:** De duur is flexibel en afhankelijk van de scope en complexiteit, typisch 2-4 maanden voor de strategische definitie en het opstarten van de eerste pilots."
    ]
  },
  {
    id: "transformatie-2",
    title: "Interim AI Leadership",
    description: "Direct beschikbare, ervaren AI-leiderschap om uw AI-transformatie te sturen. Ik integreer in uw team, leid projecten en coach intern talent voor duurzame AI-verankering.",
    features: [
      "Directe AI-leiderschap en executiekracht",
      "Strategieontwikkeling en implementatiebegeleiding",
      "Opbouw van interne AI-competenties"
    ],
    imageSrc: "/images/transformatie/transformatie-2.jpg",
    altText: "Conceptuele afbeelding van daadkrachtig AI-leiderschap tijdens digitale transities",
    modalDetails: [
      "**Probleem Opgelost:** Overbrugt het cruciale gat van direct beschikbare, senior AI-expertise en leiderschapscapaciteit die nodig is om complexe en strategische AI-transformaties succesvol te navigeren en te borgen binnen uw organisatie.",
      "**Mijn Aanpak:** Een naadloze, tijdelijke integratie in uw management- of projectteam. Ik neem de strategische en operationele leiding op me, manage AI-projecten hands-on, en zorg voor intensieve coaching en kennisoverdracht aan uw interne talent om toekomstige zelfredzaamheid te garanderen.",
      "**Concrete Resultaten:** Een versneld geïmplementeerde AI-strategie, succesvol gelanceerde en gemanagede pilotprojecten met duidelijke ROI, significant verhoogde interne AI-capaciteit en -kennis, en een organisatiecultuur die AI omarmt en klaar is voor continue innovatie.",
      "**Doorlooptijd:** Zichtbare impact en een stevig fundament voor verdere groei worden typisch gerealiseerd binnen een periode van 3-6 maanden, afhankelijk van de specifieke opdracht en doelstellingen.",
      "**Mijn Unieke Waarde:** Ik combineer diepgaande technologische kennis met een scherp oog voor de menselijke en organisatorische dynamiek, waardoor AI niet slechts een project wordt, maar een integraal en breed geaccepteerd onderdeel van uw strategisch succes."
    ]
  }
];


export default function Home() {
  const [selectedItem, setSelectedItem] = useState<DataItem | null>(null);

  const openDetailsModal = (item: DataItem) => {
    setSelectedItem(item);
  };

  const closeDetailsModal = () => {
    setSelectedItem(null);
  };
  
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
          <div className="container px-6 md:px-6">
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

        {/* About Section - Met bijgewerkte tekst */}
        <section id="about" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center max-w-4xl mx-auto">
              <div className="relative mx-auto w-full aspect-square max-w-sm overflow-hidden rounded-full lg:ml-0">
                <Image
                  alt="Portretfoto van Michael Salmagne, AI expert en spreker"
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
                <p className="text-base md:text-lg text-gray-500">
                  Mijn kracht ligt in het verbinden van diepgaande technologische kennis met een scherp oog voor de menselijke en organisatorische dynamiek. Ik overbrug de kloof tussen de abstracte belofte van AI en de concrete, dagelijkse realiteit van uw organisatie, en vertaal complexe ontwikkelingen naar begrijpelijke, strategische inzichten die direct toepasbaar zijn.
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-2xl mx-auto mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">Mijn Lezingen</h2>
                <p className="mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ontdek de verschillende lezingen die ik aanbied over AI en de toekomst van technologie.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {lezingenData.map((topic) => (
                <Dialog key={topic.id}>
                  <DialogTrigger asChild>
                    <div 
                      className="flex flex-col rounded-lg border bg-white shadow-sm overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => openDetailsModal(topic)}
                    >
                      {topic.imageSrc && (
                        <div className="relative w-full aspect-video">
                          <Image
                            src={topic.imageSrc}
                            alt={topic.altText || topic.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                      )}
                      <div className="p-6 flex flex-col flex-grow">
                        <div>
                          <h3 className="text-xl font-bold text-blue-800 text-center sm:text-left">{topic.title}</h3>
                          <p className="mt-2 text-gray-500 text-sm text-center sm:text-left flex-grow min-h-[7rem]">{topic.description}</p>
                        </div>
                        <div className="mt-auto pt-4 flex items-center text-sm text-gray-500 justify-center sm:justify-start">
                          <Clock className="mr-1 h-4 w-4" />
                          {topic.duration}
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  {/* DialogContent wordt hieronder geplaatst, buiten de map, om de state te gebruiken */}
                </Dialog>
              ))}
            </div>
          </div>
        </section>

        {/* Workshops Section */}
        <section id="workshops" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-blue-800">
                Inspiratie Workshops
              </h2>
              <p className="mx-auto text-gray-500 text-base md:text-xl">
                Naast lezingen verzorg ik ook interactieve workshops om teams te inspireren en AI toe te passen in de praktijk.
              </p>
            </div>
            <div className="mt-12 grid max-w-4xl mx-auto grid-cols-1 md:grid-cols-2 gap-8">
              {workshopsData.map((workshop) => (
                <Dialog key={workshop.id}>
                  <DialogTrigger asChild>
                    <div 
                      className="flex flex-col rounded-lg border bg-white shadow-sm overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => openDetailsModal(workshop)}
                    >
                      {workshop.imageSrc && (
                        <div className="relative w-full aspect-[4/3]">
                          <Image
                            src={workshop.imageSrc}
                            alt={workshop.altText || workshop.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      )}
                      <div className="p-6 flex flex-col flex-grow">
                        <div>
                          <h3 className="text-xl font-bold text-blue-800 text-center sm:text-left">{workshop.title}</h3>
                          <p className="mt-2 text-gray-500 text-sm text-center sm:text-left flex-grow min-h-[4rem]">{workshop.description}</p>
                        </div>
                        <ul className="mt-auto pt-4 text-sm text-gray-500 space-y-2">
                          {workshop.keyPoints?.map((detail, i) => (
                            <li key={i} className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-blue-800" /> {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </DialogTrigger>
                  {/* DialogContent wordt hieronder geplaatst */}
                </Dialog>
              ))}
            </div>
          </div>
        </section>

        {/* Transformatie Trajecten Section */}
        <section id="trajecten" className="py-16 md:py-24 bg-slate-50">
          <div className="container px-4 sm:px-4 md:px-6">
            <div className="text-center space-y-4 max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-blue-800">
                Transformatie Trajecten
              </h2>
              <p className="mx-auto text-gray-500 text-base md:text-xl">
                Klaar om je organisatie klaar te stomen voor het AI-tijdperk? Kies uit twee krachtige vormen van samenwerking.
              </p>
            </div>
            <div className="mt-12 grid max-w-4xl mx-auto grid-cols-1 md:grid-cols-2 gap-8">
              {transformatieData.map((traject) => (
                <Dialog key={traject.id}>
                  <DialogTrigger asChild>
                    <div 
                      className="flex flex-col rounded-lg border bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer"
                      onClick={() => openDetailsModal(traject)}
                    >
                      {traject.imageSrc && (
                        <div className="relative w-full aspect-[3/2]">
                          <Image
                            src={traject.imageSrc}
                            alt={traject.altText || traject.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      )}
                      <div className="p-6 flex flex-col flex-grow">
                        <div>
                          <h3 className="text-xl font-bold text-blue-800">{traject.title}</h3>
                          <p className="mt-2 text-gray-600 flex-grow min-h-[7rem]">{traject.description}</p>
                        </div>
                        <ul className="mt-auto pt-4 text-sm text-gray-800 space-y-2">
                          {traject.features?.map((feature, i) => (
                            <li key={i} className="flex items-center">
                              <CheckCircle className="mr-2 h-4 w-4 text-blue-800" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </DialogTrigger>
                  {/* DialogContent wordt hieronder geplaatst */}
                </Dialog>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking" className="py-16 md:py-24 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 max-w-3xl mx-auto">
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
            {/* --- BLOG LINK VERWIJDERD/UITGECOMMENTARIEERD ---
             <Link href="/blog" className="text-sm font-medium text-blue-800 hover:underline underline-offset-4">
              Blog
            </Link>
            */}
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

      {/* Gedeelde Dialog Content voor alle items */}
      {selectedItem && (
        <Dialog open={!!selectedItem} onOpenChange={(isOpen) => { if (!isOpen) closeDetailsModal(); }}>
          <DialogContent className="sm:max-w-[650px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl sm:text-3xl text-blue-800">{selectedItem.title}</DialogTitle>
              {selectedItem.imageSrc && (
                <div className="relative w-full aspect-video mt-4 mb-2 rounded overflow-hidden">
                  <Image src={selectedItem.imageSrc} alt={selectedItem.altText || selectedItem.title} fill className="object-cover" />
                </div>
              )}
              <DialogDescription className="sr-only">Uitgebreide details voor {selectedItem.title}</DialogDescription>
            </DialogHeader>
            <div className="prose prose-sm sm:prose-base max-w-none py-4 text-gray-700">
              {selectedItem.modalDetails?.map((paragraph, index) => (
                <ReactMarkdown key={index}>{paragraph}</ReactMarkdown>
              ))}
            </div>
            <DialogFooter className="sm:justify-start flex flex-col sm:flex-row gap-2 items-start pt-4 border-t">
              {selectedItem.duration && (
                <p className="text-sm text-gray-600 flex items-center"><Clock className="inline mr-1.5 h-4 w-4" />Duur: {selectedItem.duration}</p>
              )}
              {selectedItem.keyPoints && (
                  <ul className="text-sm text-gray-600 space-y-1 sm:ml-4">
                    {selectedItem.keyPoints.map((detail, index) => (
                        <li key={index} className="flex items-center"><CheckCircle className="inline mr-1.5 h-4 w-4 text-blue-700" />{detail}</li>
                    ))}
                  </ul>
              )}
              {selectedItem.features && (
                  <ul className="text-sm text-gray-600 space-y-1 sm:ml-4">
                    {selectedItem.features.map((feature, index) => (
                        <li key={index} className="flex items-center"><CheckCircle className="inline mr-1.5 h-4 w-4 text-blue-700" />{feature}</li>
                    ))}
                  </ul>
              )}
            </DialogFooter>
            <DialogClose asChild className="mt-6">
              <Button type="button" variant="outline">
                Sluiten
              </Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}