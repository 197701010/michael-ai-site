export default function PrivacyPage() {
    return (
      <main className="container px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">Privacyverklaring</h1>
  
        <p className="mb-6 text-gray-700 text-lg">
          In deze privacyverklaring lees je hoe Michael Salmagne omgaat met jouw persoonsgegevens wanneer je deze website gebruikt of contact opneemt.
        </p>
  
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">1. Gegevens die worden verzameld</h2>
            <p className="text-gray-700">
              Wanneer je een formulier invult op deze site, worden je naam, e-mailadres en eventueel bericht opgeslagen. Deze informatie wordt alleen gebruikt om contact met je op te nemen.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">2. Doeleinden</h2>
            <p className="text-gray-700">
              Jouw gegevens worden uitsluitend gebruikt om: <br />
              - Te reageren op jouw aanvraag<br />
              - Diensten te leveren<br />
              - Administratieve doeleinden af te handelen
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">3. Delen van gegevens</h2>
            <p className="text-gray-700">
              Jouw gegevens worden niet gedeeld met derden, tenzij dit nodig is voor de uitvoering van de dienst of om te voldoen aan wettelijke verplichtingen.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">4. Bewaartermijn</h2>
            <p className="text-gray-700">
              Gegevens worden niet langer bewaard dan strikt noodzakelijk is voor het doel waarvoor ze zijn verzameld.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">5. Rechten</h2>
            <p className="text-gray-700">
              Je hebt recht op inzage, correctie of verwijdering van je gegevens. Neem hiervoor contact op via het contactformulier.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">6. Beveiliging</h2>
            <p className="text-gray-700">
              Er wordt passende beveiliging toegepast om jouw gegevens te beschermen tegen misbruik of onbevoegde toegang.
            </p>
          </section>
        </div>
  
        <p className="text-sm text-gray-500 mt-12">Laatste update: {new Date().toLocaleDateString("nl-NL")}</p>
      </main>
    );
  }
  