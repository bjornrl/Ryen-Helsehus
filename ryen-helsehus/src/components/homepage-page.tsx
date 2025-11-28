interface HomepagePageProps {
  onNavigateToOverview: () => void;
}

export default function HomepagePage({}: HomepagePageProps) {
  return (
    <div className="h-full overflow-y-auto">
      {/* Full-screen image section with headline overlay */}
      <div
        className="h-full w-full flex rounded-xl items-start justify-center p-8 relative"
        style={{
          backgroundImage: "url('/images/volum.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="h-full flex flex-col justify-between">
          <h1
            className="text-9xl font-bold mb-4 text-indigo-950"
            style={{ fontFamily: "Greve, sans-serif" }}
          >
            RYEN HELSEHUS
          </h1>

          <div
            className="w-full text-md text-black/90 rounded-2xl p-2 sm:px-8 sm:py-4"
            style={{
              boxShadow:
                "0 4px 32px 0 rgba(30,41,59,0.20), 0 1.5px 8px 0 rgba(255,255,255,0.14) inset",
              border: "1.5px solid rgba(224,231,255,0.27)",
              background:
                "linear-gradient(133deg, rgba(255,255,255,0.36) 0%, rgba(203,213,225,0.18) 100%)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            <p className="mb-4">
              Det planlegges i dag for å flytte til et nytt helsebygg på Ryen.
              Ambisjonene våre for å flytte til dette bygget - utover at vi nye
              og kule lokaler - er at det skal legge til rette for faglig
              utvikling, både intern for oss i OT, og i samarbeid med de andre
              leietakerne der.
            </p>
            <p className="mt-4">
              Vi ønsker derfor å invitere alle ansatte på ortopediteknikk Ryen
              til å være med å påvirke denne prosessen. Utgangspunktet for det
              du ser på denne nettsiden kommer fra workshoper gjort med ansatte
              og ledelsen her på OT det siste året, og et tett samarbeid med
              arkitektene og utbyggerne av det nye helsebygget. Under siden
              "Medvirknings-planer" kan du klikke deg rundt i skissene av det
              nye helsebygget, og avgi dine tanker og ønsker i spørreskjemaet
              der, så vil ledelsen ta disse opp med utbyggerne og arkitektene.
              På siden "Rendere og bilder fra prosessen" kan du se flere
              inspirasjonsbilder fra Grape.
            </p>
          </div>
        </div>
      </div>

      {/* Scrollable content section */}
    </div>
  );
}
