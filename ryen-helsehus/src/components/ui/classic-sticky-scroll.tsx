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
              <div className="max-w-md rounded-md border border-black/20 p-6 shadow-2xl backdrop-blur-md sm:p-8">
                <div className="mb-4 flex items-center gap-3">
                  {/* <div id="section-number" className="flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-sm font-bold text-black backdrop-blur-sm">
                    {index + 1}
                  </div> */}
                  <div className="h-px flex-1 bg-gradient-to-r from-black/40 to-transparent" />
                </div>

                <h2 className="mb-4 text-2xl font-extrabold leading-tight text-black drop-shadow-2xl sm:text-3xl">
                  {item.title}
                </h2>

                <p className="text-sm leading-relaxed text-black/95 drop-shadow-lg sm:text-base">
                  {item.description}
                </p>

                <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-black/60 to-transparent" />
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
                  className="absolute bottom-8 left-1/2 rounded-full border border-black/30 bg-black/10 px-6 py-3 text-sm font-semibold text-black backdrop-blur-md transition-all hover:bg-black/20 hover:border-black/50 sm:bottom-12"
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
