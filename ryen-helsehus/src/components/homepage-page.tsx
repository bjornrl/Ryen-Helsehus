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
        className="h-[80vh] w-full flex rounded-xl items-start justify-center p-8 relative"
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

          <button
            onClick={onNavigateToOverview}
            className="px-6 py-3 text-black rounded-full transition-colors font-medium text-lg whitespace-nowrap"
            style={{
              boxShadow:
                "0 4px 32px 0 rgba(30,41,59,0.20), 0 1.5px 8px 0 rgba(255,255,255,0.14) inset",
              border: "1.5px solid rgba(224,231,255,0.27)",
              background:
                "linear-gradient(133deg, rgba(255,255,255,0.36) 0%, rgba(203,213,225,0.18) 100%)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              transition: "background 0.3s, color 0.3s",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(133deg, rgba(100,116,139,0.10) 0%, rgba(203,213,225,0.25) 100%)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(133deg, rgba(255,255,255,0.36) 0%, rgba(203,213,225,0.18) 100%)";
              e.currentTarget.style.color = "#312e81";
            }}
          >
            Se planene
          </button>
        </div>
      </div>

      {/* Scrollable content section */}
      <div className="w-full flex flex-row gap-8 px-16 sm:px-12 py-12 bg-stone-100 rounded-xl">
        <div className="w-1/2">
          <p className="text-xl text-neutral-800 mb-4">
            Det planlegges i dag for å flytte til et nytt helsebygg på Ryen.
            Ambisjonene våre for å flytte til dette bygget - utover at vi nye og
            kule lokaler - er at det skal legge til rette for faglig utvikling,
            både intern for oss i OT, og i samarbeid med de andre leietakerne
            der.
          </p>
          <p className="text-xl text-neutral-800 mt-4">
            Vi ønsker derfor å invitere alle ansatte på ortopediteknikk Ryen til
            å være med å påvirke denne prosessen. Utgangspunktet for det du ser
            på denne nettsiden kommer fra workshoper gjort med ansatte og
            ledelsen her på OT det siste året, og et tett samarbeid med
            arkitektene og utbyggerne av det nye helsebygget. Under siden
            "Medvirkning" kan du klikke deg rundt i skissene av det nye
            helsebygget, og avgi dine tanker og ønsker i spørreskjemaet der, så
            vil ledelsen ta disse opp med utbyggerne og arkitektene. Om du
            ønsker å lese mer om prosjektet, og se flere inspirasjonsbilder fra
            prosessen, så inviterer vi deg til å ta en titt på denne siden: "Om
            prosjektet" Nedenfor finner du de ulike konseptforslagene, og
            deretter et spørreskjema.
          </p>
        </div>
        <div className="w-1/2 flex flex-col items-end">
          <img
            src="/images/plan_01.png"
            alt="Plan 01"
            className="w-full h-full rounded-xl object-cover"
          />
          <span className="mt-2 text-sm text-neutral-500">
            Interiør-render, Grape Arkitekter
          </span>
        </div>
      </div>
    </div>
  );
}
