import type { RefObject } from "react";

interface HomepagePageProps {
  onNavigateToOverview: () => void;
  scrollToFormRef?: RefObject<HTMLDivElement | null>;
}

export default function HomepagePage({
  onNavigateToOverview,
  scrollToFormRef,
}: HomepagePageProps) {
  return (
    <div className="h-full overflow-y-auto bg-slate-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/volum.png')",
          }}
        >
          <div className="absolute inset-0 bg-slate-900/40" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-8">
          <h1
            className="text-6xl sm:text-8xl md:text-9xl font-bold text-white mb-8 tracking-tight"
            style={{
              fontFamily: "Rational, sans-serif",
              textShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            RYEN HELSEHUS
          </h1>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Section 1 */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-8 md:px-16">
        <div className="max-w-4xl mx-auto items-center">
          <div className="mt-20">
            <h2
              className="text-6xl sm:text-5xl font-bold text-center text-slate-900 mb-6"
              style={{ fontFamily: "Rational, sans-serif" }}
            >
              Et nytt helsebygg på Ryen
            </h2>
            <p className="text-2xl text-slate-700 mb-4 text-center leading-relaxed">
              Det planlegges i dag for å flytte til et nytt helsebygg på Ryen.
              Ambisjonene våre for å flytte til dette bygget - utover at vi nye
              og kule lokaler - er at det skal legge til rette for faglig
              utvikling, både intern for oss i OT, og i samarbeid med de andre
              leietakerne der.
            </p>
            <p className="text-2xl text-slate-700 text-center leading-relaxed">
              Vi ønsker derfor å invitere alle ansatte på ortopediteknikk Ryen
              til å være med å påvirke denne prosessen. Utgangspunktet for det
              du ser på denne nettsiden kommer fra workshoper gjort med ansatte
              og ledelsen her på OT det siste året, og et tett samarbeid med
              arkitektene og utbyggerne av det nye helsebygget. Under siden
              "Medvirkning" kan du klikke deg rundt i skissene av det nye
              helsebygget, og avgi dine tanker og ønsker i spørreskjemaet der,
              så vil ledelsen ta disse opp med utbyggerne og arkitektene. På
              siden "Rendere og bilder fra prosessen" kan du se flere
              inspirasjonsbilder fra Grape.
            </p>
            <div className="w-full flex justify-center mt-20">
              <button
                onClick={onNavigateToOverview}
                className="px-8 py-4 text-lg font-semibold text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                style={{
                  background:
                    "linear-gradient(133deg, rgba(30,41,59,0.95) 0%, rgba(51,65,85,0.95) 100%)",
                  boxShadow:
                    "0 4px 32px 0 rgba(30,41,59,0.30), 0 1.5px 8px 0 rgba(255,255,255,0.14) inset",
                }}
              >
                Gå til Medvirkningsiden
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 px-4 sm:px-8 md:px-16 bg-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/hvit_render_1.png"
                  alt="Ryen Helsehus render 1"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/hvit_render_2.png"
                  alt="Ryen Helsehus render 2"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/arbeidsplass.png"
                  alt="Ryen Helsehus arbeidsplass"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Google Form */}
          <div
            ref={scrollToFormRef}
            className="mt-12 flex justify-center mt-20"
          >
            <div className="w-full max-w-4xl">
              <h2
                className="text-7xl sm:text-6xl font-bold text-center text-slate-900 mb-6"
                style={{ fontFamily: "Rational, sans-serif" }}
              >
                Fyll ut spørreskjema
              </h2>
              <p className="text-2xl text-slate-700 text-center leading-relaxed my-6">
                Se gjennom planene i på{" "}
                <a
                  href="/medvirkningsplaner"
                  className="text-indigo-900 underline"
                >
                  Medvirkningsiden
                </a>{" "}
                først
              </p>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdHngfrdmepurh8t84voI8NAaCb4yZcEF3kEpinCHR-lvzHVg/viewform?embedded=true"
                width="100%"
                height="1389"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-xl"
                title="Spørreskjema"
              >
                Laster inn …
              </iframe>
              <h1
                className="text-9xl font-bold text-center text-indigo-900 mb-6"
                style={{ fontFamily: "Rational, sans-serif" }}
              >
                RYEN HELSEHUS
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
