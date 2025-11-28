import { useEffect, useRef, useState } from "react";

interface ClassicStickyScrollProps {
  items: {
    title: string;
    description: string;
    image: string;
  }[];
}

export function ClassicStickyScroll({ items }: ClassicStickyScrollProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.indexOf(
            entry.target as HTMLDivElement
          );
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [items.length]);

  return (
    <div className="relative scroll-smooth h-full overflow-auto">
      <div className="fixed inset-0 h-screen w-full overflow-hidden z-0">
        {items.map((item, index) => (
          <div
            key={`image-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0" />
          </div>
        ))}
      </div>

      <div className="relative z-20">
        <div className="w-full px-4 sm:px-6">
          {items.map((item, index) => (
            <div
              key={`content-${index}`}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className="relative flex h-[calc(100vh-4rem)] snap-start flex-col justify-end pb-8 sm:pb-12"
            >
              <div className="flex flex-col gap-4">
                {/* First text box - only show in first frame */}
                {index === 0 && (
                  <div
                    className="max-w-md rounded-2xl p-6 sm:p-8"
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
                    <p className="text-sm leading-relaxed text-indigo-950/90 drop-shadow-lg sm:text-base">
                      <strong>
                        Dette er kun et tidlig innblikk i det nye helsebygget.
                      </strong>
                    </p>
                    <p className="text-sm leading-relaxed text-indigo-950/90 drop-shadow-lg sm:text-base">
                      Skissene du ser her er foreløpige ideer fra arkitektene og
                      ment som inspirasjon. De representerer ikke endelige valg
                      eller beslutninger om interiør eller design. Det endelige
                      uttrykket vil utvikle seg videre i prosessen.
                    </p>
                  </div>
                )}

                {/* Main text box - always shown */}
                <div
                  className="max-w-md rounded-2xl p-6 sm:p-8"
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
                  <div className="mb-4 flex items-center gap-3">
                    {/* <div id="section-number" className="flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-sm font-bold text-black backdrop-blur-sm">
                      {index + 1}
                    </div> */}
                    <div className="h-px flex-1 bg-gradient-to-r from-black/40 to-transparent" />
                  </div>

                  <h2 className="mb-4 text-2xl font-extrabold leading-tight text-indigo-950 drop-shadow-2xl sm:text-3xl">
                    {item.title}
                  </h2>

                  <p className="text-sm leading-relaxed text-indigo-950/90 drop-shadow-lg sm:text-base">
                    {item.description}
                  </p>

                  <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-black/60 to-transparent" />
                </div>
              </div>

              {/* Scroll down button - only in first section */}
              {index === 0 && (
                <button
                  onClick={() => {
                    if (sectionRefs.current[1]) {
                      sectionRefs.current[1].scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 text-sm font-medium text-indigo-950 rounded-full transition-colors whitespace-nowrap sm:bottom-12"
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
                  Scroll nedover
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
