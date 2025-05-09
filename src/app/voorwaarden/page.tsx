export default function VoorwaardenPage() {
    return (
      <main className="container px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">Algemene Voorwaarden</h1>
  
        <p className="mb-6 text-gray-700 text-lg">
          Deze algemene voorwaarden zijn van toepassing op alle diensten die worden aangeboden via deze website door Michael Salmagne. Door gebruik te maken van deze website en onze diensten, stemt u in met deze voorwaarden.
        </p>
  
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">1. Diensten</h2>
            <p className="text-gray-700">
              Onze diensten omvatten lezingen, workshops, transformatietrajecten en advies op maat. De inhoud en vorm worden in overleg afgestemd op de opdrachtgever.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">2. Offertes en betalingen</h2>
            <p className="text-gray-700">
              Offertes zijn vrijblijvend. Betaling dient te geschieden binnen 14 dagen na factuurdatum, tenzij anders overeengekomen.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">3. Annulering</h2>
            <p className="text-gray-700">
              Bij annulering tot 7 dagen vóór de geplande dienst is geen vergoeding verschuldigd. Binnen 7 dagen voor aanvang wordt 50% van het bedrag in rekening gebracht.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">4. Aansprakelijkheid</h2>
            <p className="text-gray-700">
              Michael Salmagne is niet aansprakelijk voor directe of indirecte schade als gevolg van het gebruik van de verstrekte informatie of diensten, tenzij sprake is van opzet of grove nalatigheid.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">5. Intellectueel eigendom</h2>
            <p className="text-gray-700">
              Alle content, waaronder presentaties, modellen en materialen, blijft intellectueel eigendom van Michael Salmagne, tenzij expliciet anders overeengekomen.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">6. Wijzigingen</h2>
            <p className="text-gray-700">
              Deze voorwaarden kunnen op elk moment worden gewijzigd. De meest recente versie is steeds beschikbaar via deze pagina.
            </p>
          </section>
        </div>
  
        <p className="text-sm text-gray-500 mt-12">Laatste update: {new Date().toLocaleDateString("nl-NL")}</p>
      </main>
    );
  }
  