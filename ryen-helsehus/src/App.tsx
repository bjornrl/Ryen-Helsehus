import { useState } from "react";
import HomepagePage from "./components/homepage-page";
import OverviewPage from "./components/overview-page";
import AboutPage from "./components/about-page";

type PageKey = "fortelling" | "medvirkning" | "about";

function App() {
  const [page, setPage] = useState<PageKey>("fortelling");

  return (
    <div className="h-screen bg-slate-300 text-white flex flex-col overflow-hidden py-2 px-4 sm:px-2 gap-2">
      <header className="flex-shrink-0 relative z-50 ">
        <div className="mx-auto rounded-2xl  flex items-center justify-between px-6 py-3 h-16">
          <div className="flex items-center gap-3">
            <p
              className="text-xl sm:text-2xl font-bold text-white"
              style={{
                fontFamily: "Greve, sans-serif",
                mixBlendMode: "difference",
              }}
            >
              RYEN HELSEHUS
            </p>
          </div>

          <nav className="flex items-center gap-6">
            <button
              onClick={() => setPage("fortelling")}
              className="px-4 py-2 text-indigo-950 rounded-full transition-colors font-medium text-md whitespace-nowrap"
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
              Hjem
            </button>
            <button
              onClick={() => setPage("medvirkning")}
              className="px-4 py-2 text-indigo-950 rounded-full transition-colors font-medium text-md whitespace-nowrap"
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
              Medvirknings-planer
            </button>
            <button
              onClick={() => setPage("about")}
              className="px-4 py-2 text-indigo-950 rounded-full transition-colors font-medium text-md whitespace-nowrap"
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
              Rendere og bilder fra prosessen
            </button>
            {/* <button
              type="button"
              onClick={() => setPage("fortelling")}
              className={`px-4 py-2 text-sm font-medium transition uppercase tracking-wide ${
                page === "fortelling"
                  ? "text-neutral-900 font-semibold"
                  : "text-neutral-500 hover:text-neutral-700"
              }`}
            >
              Hjem
            </button>
            <button
              type="button"
              onClick={() => setPage("medvirkning")}
              className={`px-4 py-2 text-sm font-medium transition uppercase tracking-wide ${
                page === "medvirkning"
                  ? "text-neutral-900 font-semibold"
                  : "text-neutral-500 hover:text-neutral-700"
              }`}
            >
              Medvirknings-planer
            </button>
            <button
              type="button"
              onClick={() => setPage("about")}
              className={`px-4 py-2 text-sm font-medium transition uppercase tracking-wide ${
                page === "about"
                  ? "text-neutral-900 font-semibold"
                  : "text-neutral-500 hover:text-neutral-700"
              }`}
            >
              Rendere og bilder fra prosessen
            </button> */}
          </nav>
        </div>
      </header>

      <main
        className={`flex-1 rounded-2xl ${
          page === "about" ? "overflow-auto" : "overflow-hidden"
        }`}
      >
        {page === "fortelling" && (
          <HomepagePage onNavigateToOverview={() => setPage("medvirkning")} />
        )}
        {page === "medvirkning" && <OverviewPage />}
        {page === "about" && <AboutPage />}
      </main>
    </div>
  );
}

export default App;
