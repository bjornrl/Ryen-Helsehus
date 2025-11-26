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
        <div className="mx-auto bg-white rounded-2xl shadow-lg flex items-center justify-between px-6 py-3 h-16">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-400/20 text-sky-600 font-semibold">
              RH
            </div>
            <div className="leading-tight">
              <p className="text-sm sm:text-base font-semibold tracking-wide text-neutral-900">
                Ryen Helsehus
              </p>
            </div>
          </div>

          <nav className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setPage("fortelling")}
              className={`px-4 py-2 text-sm font-medium transition uppercase tracking-wide ${
                page === "fortelling"
                  ? "text-neutral-900 font-semibold"
                  : "text-neutral-500 hover:text-neutral-700"
              }`}
            >
              Homepage
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
              Overview
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
              Inspiration
            </button>
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
