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
export const defaultElementPopupTexts: {
  title: string;
  description: string;
  image?: string;
} = {
  title: "Element Info",
  description: "You clicked on a .cls element. Add your custom content here!",
};

// Mapping of file names and class names to their specific text content
// Structure: fileName -> className -> { title, description, image? }
// This allows the same class name (e.g., "cls-2") to have different text in different SVG files
// The image field is optional - if provided, it will be displayed in the popup
export const elementPopupTextsMap: Record<
  string,
  Record<string, { title: string; description: string; image?: string }>
> = {
  // E1 (Første etasje)
  "E1.svg": {
    "cls-11": {
      title: "Atrium",
      description:
        "For å slippe inn mer lys, samt for å tenke langsiktig med den mulige utviklingen av nabotomta, er det tenkt å ha et atrium i bygget.",
      image: "/images/atrium.png",
    },
    "cls-12": {
      title: "Intern heis / Vareheis",
      description:
        "Vi planlegger å ha en intern vareheis for de ansatte midt i bygget. Denne vil være lett tilgjengelig for verkstedene til OT i de øvrige etajene.",
    },
    "cls-2": {
      title: "Næringslokale",
      description:
        "Vi har flere lokaler i 1. etasje som er tiltekt andre leietakere.",
    },
    "cls-13": {
      title: "Ansatt-café",
      description:
        "Vi ser for oss en felles sosial spisesone for ansatte i første etasje. Dette rommet vil være tilpasset arrangementer og foredrag samt ha matservering til lunsj.",
    },
    "cls-15": {
      title: "Kafé",
      description:
        "Kaféen vil bli det varme og sosiale møtet med bygget, både for ansatte og besøkende. Den er plassert svært synlig i hjørnet der Enebakkveien og Vårveien møtes.",
    },
    "cls-1": {
      title: "Trappeoppgang",
      description:
        "Vi ønsker at alle som kan ta trappen, gjør det. Det vil naturligvis være positivt for egen helse, men også for flyten av mennesker gjennom bygget. Designet av trappeoppgangen vil derfor være spesielt inviterende.",
    },
    "cls-7": {
      title: "Felles inngang",
      description:
        "Vi ser for oss ett felles inngangsparti for hele bygget, med en husvert og innsjekk for besøkende. Her vil de besøkende kunne bli vist rett til etasjen eller tjenesten de skal til, eller få muligheten til å vente i kaféen.",
      image: "/images/fellesinngang.jpg",
    },
  },
  // E2 (Andre etasje)
  "E2.svg": {
    "cls-15": {
      title: "Atrium",
      description:
        "For å slippe inn mer lys, samt for å tenke langsiktig med den mulige utviklingen av nabotomta, er det tenkt å ha et atrium i bygget.",
    },
    "cls-18": {
      title: "Intern Heis / Vareheis",
      description:
        "Vi planlegger å ha en intern vareheis for de ansatte midt i bygget. Denne vil være lett tilgjengelig for verkstedene til OT i de øvrige etajene.",
    },
    "cls-16": {
      title: "JAM Skobutikk",
      description:
        "Vi tror det vil være hensiktsmessig å plasere JAM skobutikk i 2. etasje sammen med OT, og på den måten videreføre dagens svært positive synergier med denne butikken.",
    },
    "cls-22": {
      title: "Administrasjon/Kontor",
      description:
        "Vi ser for oss at det bør være noenplasser til enkelte administrasjonsansatte i tilknytting til den mindre resepsjonen i 2. etsje. Denne plassen er tenkt å tjenestegjøre både OT og JAM.",
    },
    "cls-17": {
      title: "Ventesone for pasienter",
      description:
        "I 2. etajse er den planlagt for en mindre ventesone for pasienter. Resepsjonen og kaféen i 1. etasje er ment å fungere som primær ventesone.",
      image: "/images/ventesone.jpg",
    },
    "cls-19": {
      title: "Fysiorom",
      description:
        "Vi øsnker å få inn fysioterapeuter i 2. etasje og gjerne i nærheten av gangbanen.",
    },
    "cls-12": {
      title: "Prøverom",
      description:
        "Prøverommene er strategisk plassert i nærheten til både fysio, gangbane, ventesone og til sliperommet.",
    },
    "cls-14": {
      title: "Gangbane",
      description:
        "Vi ønsker å lage en dedikert gangbane for pasienter som har behov for dette. Her kan man tenke kreativt og dele opp gangen ved hjelp av hyller og skap som kan fungere som en skillevegg.",
      image: "/images/gang.png",
    },
    "cls-21": {
      title: "Intern trapp",
      description:
        "I tillegg til vareheisen, er det tenkt å ha en enkelt intern trapp som knytter sammen verkstedene i etasje to og tre.",
    },
    "cls-1": {
      title: "Trappeoppgang",
      description:
        "Vi ønsker at alle som kan ta trappen, gjør det. Det vil naturligvis være positivt for egen helse, men også for flyten av mennesker gjennom bygget. Designet av trappeoppgangen vil derfor være spesielt inviterende.",
    },
    "cls-13": {
      title: "Plastrom",
      description:
        "Plastrommet er et spesialisert rom for arbeid med plastmaterialer og gipsarbeid. Dette rommet er viktig for produksjonen av ortopediske hjelpemidler.",
      image: "/images/verksted.png",
    },
  },
  // E3 (Tredje etasje)
  "E3.svg": {
    "cls-1": {
      title: "Trappeoppgang",
      description:
        "Vi ønsker at alle som kan ta trappen, gjør det. Det vil naturligvis være positivt for egen helse, men også for flyten av mennesker gjennom bygget. Designet av trappeoppgangen vil derfor være spesielt inviterende.",
    },
    "cls-19": {
      title: "Sosial sone",
      description:
        "Vi ønsker å plassere en dedikert møteplass/sosial sone med te-kjøkken i 3. etasje. Her kan ansatte ha en plass å ta pauser og spise medbrakt lunsj.",
    },
    "cls-21": {
      title: "Kontor Leder",
      description:
        "her finner vi kontorene til lederne på Ryen. HK har ikke noen kontorer her.",
    },
    "cls-15": {
      title: "Stillerom",
      description:
        "Vi ønsker å utforske muligheten for at vi jobber mer i åpne landskap når vi kan og i dedikerte stillerom når vi har behov for dette.",
    },
    "cls-17": {
      title: "Åpent landskap",
      description:
        "Det er i det åpne landskapet de fleste ingeniørene vil ha sine faste arbeidsplasser. De vil sitte sammen med administrativt ansatte og teknikerne.",
    },
    "cls-10": {
      title: "Atrium",
      description:
        "For å slippe inn mer lys, samt for å tenke langsiktig med den mulige utviklingen av nabotomta, er det tenkt å ha et atrium i bygget.",
    },
    "cls-20": {
      title: "Intern trapp",
      description:
        "I tillegg til vareheisen, er det tenkt å ha en enkelt intern trapp som knytter sammen verkstedene i etasje to og tre.",
    },
    "cls-16": {
      title: "Verksted",
      description:
        "Vi ser for oss at verkstedet blir et sted der man kun oppholder seg når man skal jobbe med verktøyene som er der, mens alle andre oppgaver utføres enten i arbeidsrommene eller det åpne landskapet.",
      image: "/images/arbeidsplass.png",
    },
    "cls-9": {
      title: "Intern heis",
      description:
        "Vi planlegger å ha en intern heis for de ansatte i 3. etasje. Denne vil være lett tilgjengelig for verkstedene til OT i de øvrige etajene.",
    },
  },
  // U1 (Underetasje)
  "U1.svg": {
    "cls-12": {
      title: "Lager OT",
      description: "I kjellerlokalet finner vi laget for både OT og JAM",
    },
    "cls-15": {
      title: "Lager JAM",
      description: "I kjellerlokalet finner vi laget for både OT og JAM",
    },
    "cls-11": {
      title: "Produksjonsrom",
      description:
        "De fleste produksjonrommene er plassert i U1. Dette er en etasje som ligger delvis under bakken, men har vinduer f.o.m. Prepreg.rommet.",
    },
    "cls-14": {
      title: "Parkeringskjeller-rampe",
      description: "Her går rampen ned til parkeringskjelleren i U2",
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

// Card 4: Underetasje (U1)
export const underetasjeCard = {
  title: "Underetasje",
  description: "U1",
  content: () => (
    <div>
      <p>Underetasje (U1) plan.</p>
    </div>
  ),
};
