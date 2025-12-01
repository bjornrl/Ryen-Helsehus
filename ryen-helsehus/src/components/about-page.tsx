import { ClassicStickyScroll } from "./ui/classic-sticky-scroll";

const storyContent = [
  {
    title: "Første etasje",
    description: "Visualisering av innsiden av første etasje.",
    image: "/images/fellesinngang.jpg",
  },
  {
    title: "Illustrasjon Interiør",
    description:
      "Vi ser for oss at verkstedet blir et sted der man bare oppholder seg når man skal jobbe med verktøyene som er der, mens alle andre oppgaver utføres enten i arbeidsrommene eller det åpne landskapet.",
    image: "/images/arbeidsplass.png",
  },
  {
    title: "Gang",
    description:
      "Vi ønsker å lage en dedikert gåsone for pasienter som har behov for dette. Denne kan også plasseres i gangen på motsatt side av bygget, i tilknytning til trappen, men blir den ikke like skjermet fra de andre prøverommene. ",
    image: "/images/gang.png",
  },
  {
    title: "Render av utsiden av bygget",
    description: "Slik vi ser for oss at bygget vil se ut fra busstasjonen.",
    image: "/images/hvit_render_1.png",
  },

  {
    title: "Utsiden av bygget.",
    description:
      "Bygget må ha lett tilgang for både pasienter, ambulanser og varer.",
    image: "/images/hvit_render_2.png",
  },
  {
    title: "Render av utsiden av bygget",
    description: "Slik vi ser for oss at bygget vil se ut fra busstasjonen.",
    image: "/images/utenfor-farget.jpg",
  },
  {
    title: "Kontorer sett fra atriumet",
    description: "Illustrasjon av kontorer sett utenifra.",
    image: "/images/atrium.png",
  },
  {
    title: "Illustrasjon av første etasje.",
    description: "Innsyn i umøblert førsteetasje med sollys.",
    image: "/images/plan_01.png",
  },
  {
    title: "Verksted",
    description: "Åpent landskap med 22 plasser for teknikere og ingeniører.",
    image: "/images/verksted.png",
  },
  {
    title: "Perpektivrender av bygget.",
    description: "Render av bygget sett fra undergangen.",
    image: "/images/volum.png",
  },
];

export default function AboutPage() {
  return (
    <div className="h-full">
      <ClassicStickyScroll items={storyContent} />
    </div>
  );
}
