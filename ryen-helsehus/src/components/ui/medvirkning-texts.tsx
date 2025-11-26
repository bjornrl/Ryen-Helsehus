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
    // "cls-14": {
    //   // skosalg
    //   title: "Skosalg",
    //   description:
    //     "Vi ønsker at J. A. Magnussen og deres skobutikk blir med inn i det nye bygget. Det kan være disse skal få egen inngang til bygget. Arealet er tilsvarende det de har i dag i Ryensvingen 6",
    // },
    "cls-13": {
      // Trapp
      title: "Trappeoppgang",
      description:
        "Vi ønsker at de besøkende som kan ta trappen, gjør dette for både egen helse og flyten til bygget. Designet av trappeoppgangen vil derfor være spesielt inviterende",
    },
    "cls-17": {
      // Kantine (stor)
      title: "Kantine",
      description:
        "Vi ser for oss en felles sosial sone for de ansatte i 1.etg. Dette rommet vil være tilpasset arrangementer og foredrag, og vil kunne ha matservering til lunsj.",
    },
    "cls-16": {
      // Skosalg
      title: "Skosalg",
      description:
        "Vi ønsker at J. A. Magnussen og deres skobutikk blir med inn i det nye bygget. Det kan være disse skal få egen inngang til bygget. Arealet er tilsvarende det de har i dag i Ryensvingen 6",
    },
    "cls-15": {
      // Felles inngang
      title: "Felles inngang",
      description:
        "Vi ser for oss et felles inngangsparti for hele bygget, med en husvert og innsjekk av besøkende. Her vil de besøkende kunne bli vist rett til etasjen/tjenesten de skal til, eller få muligheten til å vente i Kafeen. ",
    },
    "cls-1": {
      // Kantine (Kjøkken/Oppvask)
      title: "Kantine",
      description:
        "Vi ser for oss en felles sosial sone for de ansatte i 1.etg. Dette rommet vil være tilpasset arrangementer og foredrag, og vil kunne ha matservering til lunsj.",
    },
    "cls-20": {
      // Heis
      title: "Intern heis",
      description:
        "Vi planlegger rundt å ha en intern heis / vareheis for de ansatte midt i bygget. Denne vil være lett tilgjengelig for verkstedene til OT i de øvre etasjene.",
    },
    // "cls-4": {
    //   // Trapp
    //   title: "Trappeoppgang",
    //   description:
    //     "Vi ønsker at de besøkende som kan ta trappen, gjør dette for både egen helse og flyten til bygget. Designet av trappeoppgangen vil derfor være spesielt inviterende",
    // },
    "cls-21": {
      // Kafé
      title: "Kafé",
      description:
        "Kafeen vil bli det varme og sosiale møtet med bygget, for både ansatte og besøkende. Den er plassert svært synlig i hjørnet der Enebakkveien og Vårveien møtes.",
    },
    "cls-18": {
      //Møtesenter/Samhandling
      title: "Møtesenter/Samhandling",
      description:
        "Vi ser for oss at det kan være rom dedikert til samarbeid eller møter i 1.etg. Utformingen og den spesifikke funksjonen til disse gjenstår å bestemme. ",
    },
  },
  // Plan 02 Alt (Andre etasje)
  "plan_02_alt.svg": {
    "cls-3": {
      // gåsone
      title: "Gåsone",
      description:
        "Vi ønsker å lage en dedikert gåsone for pasienter som har behov for dette. Denne kan også plasseres i gangen på motsatt side av bygget, i tilknytning til trappen, men blir den ikke like skjermet fra de andre prøverommene. ",
    },
    "cls-21": {
      // vareheis
      title: "Intern trapp",
      description:
        "I tillegg til vareheisen, er det tenkt å ha en enkelt intern trapp som knytter verkstedene i etasje 2 og 3.",
    },
    "cls-16": {
      // Back Office
      title: "Back Office",
      description:
        "Vi ser for oss at det bør være noen plasser til enkelte administrativt ansatte i tilknytning til resepsjonen. Behovet for denne sonen blir mindre om man flytter flere resepsjonsfunksjoner til 1.etg.",
    },
    "cls-14": {
      // ventesone
      title: "Ventesone",
      description:
        "I denne etasjen vil OT ha sin egen ventesone og resepsjon for å ta imot besøkende. Størrelsen på denne er rundt 75% av dagens resepsjon på Ryen. Denne sonen kan bli enda mindre om man organiserer seg for det, blant annet om flere besøkende venter i kafeen i 1.etg. Man kan få 2-3 flere prøverom med en slik løsning.",
    },
    "cls-13": {
      // verksted
      title: "Verksted",
      description:
        "Vi ønsker at så mye av verkstedet som er relevant for pasientene plasseres i denne etasjen. Eksempelvis kort vei til sliperom for fotsenger vil være hensiktsmessig.",
    },
  },
  // Plan 03 Alt (Tredje etasje)
  "plan_03_alt.svg": {
    "cls-12": {
      // stillerom
      title: "Stillerom",
      description:
        "Vi ønsker å utforske muligheten for at vi jobber mer i åpne landskap når vi kan, og i dedikerte stillerom når vi har behov for dette.",
    },
    "cls-15": {
      // åpent landskap
      title: "Åpent landskap",
      description:
        "Det er i det åpne landskapet at de fleste teknikerne og ingeniørene vil ha sine faste plasser.",
    },
    "cls-6": {
      // kontor/pasientfri sone
      title: "Kontor/Pasientfri sone",
      description:
        "Denne etasjen er definert av at den skal være pasientfri, med fokus på produksjon, møterom og arbeidsplasser.",
    },
    "cls-13": {
      // verksted
      title: "Verksted",
      description:
        "Vi ser for oss at verkstedet blir et sted der man bare oppholder seg når man skal jobbe med verktøyene som er der, mens alle andre oppgaver utføres enten i arbeidsrommene eller det åpne landskapet.",
    },
    "cls-22": {
      // ansatt-kjøkken
      title: "Te-kjøkken / Ansatt-kjøkken",
      description:
        "Vi ønsker å plassere en dedikert sosial sone med te-kjøkken i 3.etg for de ansatte.",
    },
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
