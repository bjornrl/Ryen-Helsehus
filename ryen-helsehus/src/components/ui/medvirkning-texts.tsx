/**
 * Text content for the Medvirkning page popups and cards
 *
 * This file contains all editable text content for the expandable card demo.
 * Each section is clearly marked with comments indicating which popup/component it belongs to.
 */

// ============================================================================
// ELEMENT CLICK POPUP
// This popup appears when clicking on a .cls element in the SVG
// Each element can have its own unique text based on its class name
// ============================================================================

// Default text for elements that don't have specific text defined
export const defaultElementPopupTexts = {
  title: "Element Info",
  description: "You clicked on a .cls element. Add your custom content here!",
};

// Mapping of file names and class names to their specific text content
// Structure: fileName -> className -> { title, description }
// This allows the same class name (e.g., "cls-2") to have different text in different SVG files
export const elementPopupTextsMap: Record<
  string,
  Record<string, { title: string; description: string }>
> = {
  // Plan 01 Alt (Første etasje)
  "plan_01_alt.svg": {
    "cls-14": {
      // skosalg
      title: "Skosalg",
      description: "Legg til beskrivelse for skosalg her.",
    },
    "cls-13": {
      // felles inngang
      title: "Felles inngang",
      description: "Legg til beskrivelse for felles inngang her.",
    },
    "cls-17": {
      // kafe
      title: "Kafé",
      description: "Legg til beskrivelse for kafé her.",
    },
    "cls-16": {
      // møtesenter/samhandling
      title: "Møtesenter/Samhandling",
      description: "Legg til beskrivelse for møtesenter/samhandling her.",
    },
    "cls-15": {
      // Kantine
      title: "Kantine",
      description: "Legg til beskrivelse for kantine her.",
    },
    "cls-1": {
      // Kantine (light gray)
      title: "Kantine",
      description: "Legg til beskrivelse for kantine her.",
    },
    "cls-20": {
      // Red element
      title: "Rødt område",
      description: "Legg til beskrivelse for rødt område her.",
    },
    "cls-4": {
      // Red stroke element
      title: "Rødt område",
      description: "Legg til beskrivelse for rødt område her.",
    },
  },
  // Plan 02 (Andre etasje)
  "plan_02.svg": {
    "cls-2": {
      title: "Verksted",
      description: "Verkstedet på 150 m² har plass til 16 teknikere.",
    },
    // Add more entries for plan_02.svg here
  },
  // Plan 03 (Tredje etasje)
  "plan_03.svg": {
    "cls-2": {
      title: "Produksjon",
      description: "Produksjonsrommet på 150 m² med plastrom.",
    },
    // Add more entries for plan_03.svg here
  },
};

// ============================================================================
// BACKGROUND CLICK POPUP (White Space)
// This popup appears when clicking on white space/background in the SVG
// Only shown if ENABLE_BACKGROUND_CLICK is true
// ============================================================================
export const backgroundPopupTexts = {
  title: "Område Info",
  description: "Du klikket på et område. Legg til din tilpassede innhold her!",
};

// ============================================================================
// CARD CONTENT
// Content for each floor plan card in the sidebar and info popup
// ============================================================================

// Card 1: First Floor (Første etasje)
export const firstFloorCard = {
  title: "Første etasje",
  description: "Kantine og handel",
  content: () => (
    <div>
      <p className="mb-4">
        Plan 01 viser første etasje med kantineområdet og handelsområder. Her
        finner du kantine på 270 m², matesenter for samhandling, og
        handelsområder med skosalg.
      </p>
      <p className="mb-4">
        Hovedinngangen og resepsjonen på 50 m² gir velkommen til besøkende, mens
        kaféen på 120 m² tilbyr et hyggelig møtested.
      </p>
      <p>
        Dette er etasjen som binder sammen byggets ulike funksjoner og skaper et
        levende og inkluderende miljø.
      </p>
    </div>
  ),
};

// Card 2: Second Floor (Andre etasje)
export const secondFloorCard = {
  title: "Andre etasje",
  description: "Verksted og kontor",
  content: () => (
    <div>
      <p className="mb-4">
        Plan 02 fokuserer på verksteds- og kontorområder. Verkstedet på 150 m²
        har plass til 16 teknikere med arbeidsplasser, mens sliperommet på 30 m²
        huser store hjelpemidler.
      </p>
      <p className="mb-4">
        Åpne landskap med 22 og 10 plasser gir fleksible arbeidsmiljøer, og
        stillerom gir mulighet for konsentrert arbeid. 10 prøverom og ventesone
        for pasienter på ca. 40 m² sikrer gode pasientforløp.
      </p>
      <p>
        Sosial sone på 60 m² og kontor med sentralbord skaper gode
        arbeidsforhold for ansatte.
      </p>
    </div>
  ),
};

// Card 3: Third Floor (Tredje etasje)
export const thirdFloorCard = {
  title: "Tredje etasje",
  description: "Produksjon og behandling",
  content: () => (
    <div>
      <p className="mb-4">
        Plan 03 inneholder produksjonsrommet på 150 m² med plastrom, samt
        sliperom for store hjelpemidler. Kontorområdet har 6 lederkontorer og
        åpne landskap med 10 plasser på 60 m².
      </p>
      <p className="mb-4">
        Behandlingsområdet inkluderer legerom på 15 m², fysiorom på 30 og 40 m²,
        samt 10 prøverom. Ventesone for pasienter på ca. 40 m² gir en rolig
        mottak.
      </p>
      <p>
        Atriet utendørs skaper et naturlig møtepunkt og gir lys og luft til
        bygget.
      </p>
    </div>
  ),
};
