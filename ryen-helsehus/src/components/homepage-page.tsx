interface HomepagePageProps {
  onNavigateToOverview: () => void;
}

export default function HomepagePage({
  onNavigateToOverview,
}: HomepagePageProps) {
  return (
    <div className="h-full overflow-y-auto">
      {/* Full-screen image section with headline overlay */}
      <div
        className="h-[80vh] w-full flex items-start justify-center p-8 relative"
        style={{
          backgroundImage: "url('/images/volum.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="">
          <h1 className="text-8xl font-bold mb-4 text-stone-800">
            Ryen Helsehus
          </h1>
        </div>
      </div>

      {/* Scrollable content section */}
      <div className="w-full px-16 sm:px-12 py-12 bg-white">
        <div className="flex gap-8 items-start">
          <div className="w-full">
            <p className="text-xl text-neutral-800 mb-4">
              Det planlegges i dag for å flytte til et nytt helsebygg på Ryen.
              Ambisjonene våre for å flytte til dette bygget - utover at vi nye
              og kule lokaler - er at det skal legge til rette for faglig
              utvikling, både intern for oss i OT, og i samarbeid med de andre
              leietakerne der.
            </p>
            <p className="text-xl text-neutral-800 mt-4">
              Vi ønsker derfor å invitere alle ansatte på ortopediteknikk Ryen
              til å være med å påvirke denne prosessen. Utgangspunktet for det
              du ser på denne nettsiden kommer fra workshoper gjort med ansatte
              og ledelsen her på OT det siste året, og et tett samarbeid med
              arkitektene og utbyggerne av det nye helsebygget. Under siden
              "Medvirkning" kan du klikke deg rundt i skissene av det nye
              helsebygget, og avgi dine tanker og ønsker i spørreskjemaet der,
              så vil ledelsen ta disse opp med utbyggerne og arkitektene. Om du
              ønsker å lese mer om prosjektet, og se flere inspirasjonsbilder
              fra prosessen, så inviterer vi deg til å ta en titt på denne
              siden: "Om prosjektet" Nedenfor finner du de ulike
              konseptforslagene, og deretter et spørreskjema.
            </p>
          </div>
          <div className="w-full flex justify-end">
            <button
              onClick={onNavigateToOverview}
              className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg transition-colors font-medium text-lg whitespace-nowrap"
            >
              Se planene
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
