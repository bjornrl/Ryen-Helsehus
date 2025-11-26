"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import {
  defaultElementPopupTexts,
  elementPopupTextsMap,
  backgroundPopupTexts,
  firstFloorCard,
  secondFloorCard,
  thirdFloorCard,
} from "./medvirkning-texts";

// Feature flag: Enable/disable background click (white space) functionality
// Set to false to completely remove this feature
const ENABLE_BACKGROUND_CLICK = false;

// Whitelist of clickable class names per SVG file
// Only elements with these classes will be clickable
const clickableClassesByFile: Record<string, string[]> = {
  "plan_01_alt.svg": [
    "cls-14", // skosalg (dark brown)
    "cls-13", // felles inngang (blue)
    "cls-17", // kafe (light gray)
    "cls-16", // møtesenter/samhandling (yellow)
    "cls-15", // Kantine (light green)
    "cls-1", // Kantine (light gray)
    "cls-20", // Red element
    "cls-4", // Red stroke element
    "cls-21", // Mauve/pink element
    "cls-18", // Light blue/gray element
  ],
  "plan_02_alt.svg": [
    "cls-3", // gåsone
    "cls-21", // vareheis
    "cls-16", // Back Office
    "cls-14", // ventesone
    "cls-13", // verksted
  ],
  "plan_03_alt.svg": [
    "cls-12", // stillerom
    "cls-15", // åpent landskap
    "cls-6", // kontor/pasientfri sone
    "cls-13", // verksted
    "cls-22", // ansatt-kjøkken
  ],
};

// Interactive SVG Component
function InteractiveSVG({
  src,
  onElementClick,
  onBackgroundClick,
}: {
  src: string;
  onElementClick: (
    event: MouseEvent,
    element: SVGElement,
    filePath: string
  ) => void;
  onBackgroundClick?: (event: MouseEvent) => void;
}) {
  const enableBackgroundClick = ENABLE_BACKGROUND_CLICK && !!onBackgroundClick;
  const svgRef = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string>("");

  useEffect(() => {
    fetch(src)
      .then((res) => res.text())
      .then((text) => {
        // Parse SVG and add click handlers to all .cls elements
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(text, "image/svg+xml");
        const svgElement = svgDoc.querySelector("svg");

        if (svgElement) {
          // Ensure SVG has proper attributes for display
          if (!svgElement.hasAttribute("preserveAspectRatio")) {
            svgElement.setAttribute("preserveAspectRatio", "xMidYMid meet");
          }
          // Keep viewBox but set height to 100% via style for responsive sizing
          const currentStyle = svgElement.getAttribute("style") || "";
          svgElement.setAttribute(
            "style",
            `${currentStyle} height: 100%; width: auto; display: block;`.trim()
          );

          // Extract file name from path to get whitelist
          const fileName = src.split("/").pop() || "";
          const clickableClasses = clickableClassesByFile[fileName] || [];

          // Find only elements with whitelisted classes
          const clickableElements = Array.from(
            svgElement.querySelectorAll('[class*="cls-"]')
          ).filter((element) => {
            const classList = Array.from(element.classList);
            // Check if element has any of the whitelisted classes
            return clickableClasses.some((cls) => classList.includes(cls));
          });

          clickableElements.forEach((element) => {
            // Add cursor pointer style
            const currentStyle = element.getAttribute("style") || "";
            element.setAttribute(
              "style",
              `${currentStyle} cursor: pointer;`.trim()
            );
          });

          // Get the modified SVG as string
          const serializer = new XMLSerializer();
          setSvgContent(serializer.serializeToString(svgElement));
        }
      })
      .catch((err) => console.error("Error loading SVG:", err));
  }, [src]);

  // Attach event listeners after SVG is rendered in DOM
  useEffect(() => {
    if (!svgRef.current || !svgContent) return;

    const svgElement = svgRef.current.querySelector("svg");
    if (!svgElement) return;

    // Extract file name from path to get whitelist
    const fileName = src.split("/").pop() || "";
    const clickableClasses = clickableClassesByFile[fileName] || [];

    // Find only elements with whitelisted classes
    const clickableElements = Array.from(
      svgElement.querySelectorAll('[class*="cls-"]')
    ).filter((element) => {
      const classList = Array.from(element.classList);
      // Check if element has any of the whitelisted classes
      return clickableClasses.some((cls) => classList.includes(cls));
    });

    const handleMouseEnter = (e: Event) => {
      const element = e.target as SVGElement;
      // Get the class name(s) from the hovered element
      const classList = Array.from(element.classList);
      const clsClass = classList.find((cls) => cls.startsWith("cls-"));

      if (clsClass) {
        // Find all elements with the same class and apply hover state
        const sameClassElements = Array.from(
          svgElement.querySelectorAll(`.${clsClass}`)
        ).filter((el) => {
          // Only apply to clickable elements
          const elClassList = Array.from(el.classList);
          return clickableClasses.some((cls) => elClassList.includes(cls));
        });

        sameClassElements.forEach((el) => {
          const hoverStyle = el.getAttribute("style") || "";
          el.setAttribute(
            "style",
            `${hoverStyle.replace(
              /filter:\s*[^;]+;?/g,
              ""
            )} cursor: pointer; filter: brightness(0.7);`.trim()
          );
        });
      }
    };

    const handleMouseLeave = (e: Event) => {
      const element = e.target as SVGElement;
      // Get the class name(s) from the hovered element
      const classList = Array.from(element.classList);
      const clsClass = classList.find((cls) => cls.startsWith("cls-"));

      if (clsClass) {
        // Find all elements with the same class and remove hover state
        const sameClassElements = Array.from(
          svgElement.querySelectorAll(`.${clsClass}`)
        ).filter((el) => {
          // Only apply to clickable elements
          const elClassList = Array.from(el.classList);
          return clickableClasses.some((cls) => elClassList.includes(cls));
        });

        sameClassElements.forEach((el) => {
          const leaveStyle = el.getAttribute("style") || "";
          el.setAttribute(
            "style",
            `${leaveStyle.replace(
              /filter:\s*[^;]+;?/g,
              ""
            )} cursor: pointer;`.trim()
          );
        });
      }
    };

    const handleClick = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      mouseEvent.stopPropagation();
      mouseEvent.preventDefault();
      const element = e.target as SVGElement;
      console.log("Clicked .cls element:", element); // Debug log
      onElementClick(mouseEvent, element, src);
    };

    clickableElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
      element.addEventListener("click", handleClick);
    });

    // Handle clicks on SVG background (white space) - FEATURE: Background Click
    let handleBackgroundClick: ((e: MouseEvent) => void) | null = null;
    if (enableBackgroundClick) {
      handleBackgroundClick = (e: MouseEvent) => {
        const target = e.target as SVGElement;

        // Check if we clicked on a clickable cls element (these have their own handlers)
        const isClickableElement = Array.from(clickableElements).some(
          (el) => el === target || el.contains(target)
        );

        // Only handle background clicks if it's not a clickable element
        if (!isClickableElement && onBackgroundClick) {
          // Check if click is on the SVG itself or a non-clickable element
          if (
            target === svgElement ||
            !target.getAttribute("class")?.includes("cls-")
          ) {
            e.stopPropagation();
            onBackgroundClick(e);
          }
        }
      };

      svgElement.addEventListener("click", handleBackgroundClick);
    }

    return () => {
      clickableElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
        element.removeEventListener("click", handleClick);
      });
      if (handleBackgroundClick) {
        svgElement.removeEventListener("click", handleBackgroundClick);
      }
    };
  }, [svgContent, onElementClick, onBackgroundClick, enableBackgroundClick]);

  if (!svgContent) {
    return (
      <div className="h-full w-auto flex items-center justify-center text-neutral-400">
        Loading...
      </div>
    );
  }

  return (
    <div
      ref={svgRef}
      className="h-full w-auto flex items-center justify-center [&>svg]:h-full [&>svg]:w-auto [&>svg]:max-w-full"
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const [clickedElement, setClickedElement] = useState<{
    element: SVGElement;
    position: { x: number; y: number };
    color: string;
    title: string;
    description: string;
  } | null>(null);

  // FEATURE: Background Click - State for white space clicks
  const [backgroundClick, setBackgroundClick] = useState<{
    position: { x: number; y: number };
  } | null>(null);

  const [showInfoPopup, setShowInfoPopup] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const svgContainerRef = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (showInfoPopup) {
          setShowInfoPopup(false);
        } else {
          setActive(false);
        }
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, showInfoPopup]);

  useOutsideClick(ref, () => {
    setActive(null);
    setShowInfoPopup(false);
    // FEATURE: Background Click
    if (ENABLE_BACKGROUND_CLICK) {
      setBackgroundClick(null);
    }
    setClickedElement(null);
  });

  // Reset popups when active card changes
  useEffect(() => {
    setShowInfoPopup(false);
    // FEATURE: Background Click
    if (ENABLE_BACKGROUND_CLICK) {
      setBackgroundClick(null);
    }
    setClickedElement(null);
  }, [active]);

  // Helper function to convert any color format to rgba blended with white at specified opacity
  const colorToRgba = (color: string, opacity: number = 0.7): string => {
    // Create a temporary canvas to parse the color
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    const ctx = canvas.getContext("2d");
    if (!ctx) return `rgba(34, 197, 94, ${opacity})`; // fallback to green

    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 1, 1);
    const imageData = ctx.getImageData(0, 0, 1, 1);
    const r = imageData.data[0];
    const g = imageData.data[1];
    const b = imageData.data[2];

    // Blend with white: color * opacity + white * (1 - opacity)
    const blendedR = Math.round(r * opacity + 255 * (1 - opacity));
    const blendedG = Math.round(g * opacity + 255 * (1 - opacity));
    const blendedB = Math.round(b * opacity + 255 * (1 - opacity));

    return `rgba(${blendedR}, ${blendedG}, ${blendedB}, 1)`;
  };

  // Helper function to extract color from SVG element
  const getElementColor = (element: SVGElement): string => {
    // Try to get color from fill attribute first
    const fill = element.getAttribute("fill");
    if (fill && fill !== "none" && fill !== "transparent") {
      return fill;
    }

    // Try to get color from stroke attribute
    const stroke = element.getAttribute("stroke");
    if (stroke && stroke !== "none" && stroke !== "transparent") {
      return stroke;
    }

    // Try to get color from style attribute
    const style = element.getAttribute("style");
    if (style) {
      const fillMatch = style.match(/fill:\s*([^;]+)/);
      if (
        fillMatch &&
        fillMatch[1] !== "none" &&
        fillMatch[1] !== "transparent"
      ) {
        return fillMatch[1].trim();
      }
      const strokeMatch = style.match(/stroke:\s*([^;]+)/);
      if (
        strokeMatch &&
        strokeMatch[1] !== "none" &&
        strokeMatch[1] !== "transparent"
      ) {
        return strokeMatch[1].trim();
      }
    }

    // Try computed style as fallback
    const computedStyle = window.getComputedStyle(element);
    const computedFill = computedStyle.fill;
    if (
      computedFill &&
      computedFill !== "none" &&
      computedFill !== "transparent" &&
      computedFill !== "rgba(0, 0, 0, 0)"
    ) {
      return computedFill;
    }
    const computedStroke = computedStyle.stroke;
    if (
      computedStroke &&
      computedStroke !== "none" &&
      computedStroke !== "transparent" &&
      computedStroke !== "rgba(0, 0, 0, 0)"
    ) {
      return computedStroke;
    }

    // Default to green if no color found
    return "#22c55e"; // green-500
  };

  const handleSVGElementClick = (
    event: MouseEvent,
    element: SVGElement,
    filePath: string
  ) => {
    console.log("handleSVGElementClick called", {
      event,
      element,
      filePath,
      svgContainerRef: svgContainerRef.current,
    }); // Debug log
    if (svgContainerRef.current) {
      const containerRect = svgContainerRef.current.getBoundingClientRect();
      const position = {
        x: event.clientX - containerRect.left,
        y: event.clientY - containerRect.top,
      };
      const color = getElementColor(element);

      // Extract file name from path (e.g., "/plan_01.svg" -> "plan_01.svg")
      const fileName = filePath.split("/").pop() || "";

      // Get the class name(s) from the element to identify which text to use
      const classList = Array.from(element.classList);
      const clsClass = classList.find((cls) => cls.startsWith("cls-"));

      // Look up text for this specific file and element, or use default
      let elementTexts = defaultElementPopupTexts;
      if (clsClass && fileName && elementPopupTextsMap[fileName]) {
        const fileTexts = elementPopupTextsMap[fileName];
        if (fileTexts[clsClass]) {
          elementTexts = fileTexts[clsClass];
        }
      }

      console.log(
        "Setting clicked element with position:",
        position,
        "color:",
        color,
        "file:",
        fileName,
        "class:",
        clsClass
      ); // Debug log
      setClickedElement({
        element,
        position,
        color,
        title: elementTexts.title,
        description: elementTexts.description,
      });
    } else {
      console.warn("svgContainerRef.current is null");
    }
  };

  // FEATURE: Background Click - Handler for white space clicks
  const handleSVGBackgroundClick = ENABLE_BACKGROUND_CLICK
    ? (event: MouseEvent) => {
        if (svgContainerRef.current) {
          const containerRect = svgContainerRef.current.getBoundingClientRect();
          const position = {
            x: event.clientX - containerRect.left,
            y: event.clientY - containerRect.top,
          };
          setBackgroundClick({ position });
        }
      }
    : undefined;

  // Close textbox when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        svgContainerRef.current &&
        !svgContainerRef.current.contains(e.target as Node)
      ) {
        if (clickedElement) {
          setClickedElement(null);
        }
        // FEATURE: Background Click
        if (ENABLE_BACKGROUND_CLICK && backgroundClick) {
          setBackgroundClick(null);
        }
      }
    };

    const hasOpenPopups =
      clickedElement || (ENABLE_BACKGROUND_CLICK && backgroundClick);
    if (hasOpenPopups) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [clickedElement, backgroundClick]);

  return (
    <div className="flex h-screen bg-white dark:bg-neutral-950 overflow-hidden">
      {/* Left Sidebar - Cards List */}
      <div className="w-80 border-r border-neutral-200 dark:border-neutral-800 overflow-y-auto dark:bg-neutral-900">
        <ul className="w-full gap-2 p-4">
          {cards.map((card) => {
            const isActive =
              active &&
              typeof active === "object" &&
              active.title === card.title;
            return (
              <motion.div
                layoutId={`card-${card.title}-${id}`}
                key={`card-${card.title}-${id}`}
                onClick={() => setActive(card)}
                className={`p-4 flex flex-col md:flex-row justify-between items-center rounded-xl cursor-pointer mb-2 transition-colors ${
                  isActive
                    ? "bg-green-50 dark:bg-green-900/20 border-2 border-green-500"
                    : "hover:bg-neutral-50 dark:hover:bg-neutral-800"
                }`}
              >
                <div className="flex gap-4 flex-col md:flex-row w-full">
                  <motion.div layoutId={`image-${card.title}-${id}`}>
                    <img
                      width={100}
                      height={100}
                      src={card.thumbnail || card.src}
                      alt={card.title}
                      className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top transition-all duration-200 hover:brightness-75 dark:hover:brightness-50"
                      loading="lazy"
                      decoding="async"
                    />
                  </motion.div>
                  <div className="flex-1">
                    <motion.h3
                      layoutId={`title-${card.title}-${id}`}
                      className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-sm"
                    >
                      {card.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${card.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-xs"
                    >
                      {card.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto dark:bg-neutral-950">
        <div className="h-full flex items-center justify-center p-8">
          <p className="text-neutral-400 dark:text-neutral-600">
            Click a card from the left to view details
          </p>
        </div>
      </div>

      {/* Expanded Card Modal - Centered Overlay */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-end z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center  rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[80%] h-screen bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden flex flex-col"
            >
              {/* Header with title and info button */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800">
                <motion.h3
                  layoutId={`title-${active.title}-${id}`}
                  className="font-bold text-neutral-700 dark:text-neutral-200 text-2xl"
                >
                  {active.title}
                </motion.h3>
                <button
                  onClick={() => setShowInfoPopup(true)}
                  className="px-4 py-2 text-sm rounded-full font-semibold bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 transition-colors"
                >
                  Info
                </button>
              </div>

              {/* Image container */}
              <motion.div
                layoutId={`image-${active.title}-${id}`}
                className="flex-1 relative overflow-hidden"
                ref={svgContainerRef}
              >
                {active.src.endsWith(".svg") ? (
                  <InteractiveSVG
                    src={active.src}
                    onElementClick={handleSVGElementClick}
                    onBackgroundClick={handleSVGBackgroundClick}
                  />
                ) : (
                  <img
                    width={320}
                    height={640}
                    src={active.src}
                    alt={active.title}
                    className="h-full w-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                )}

                {/* Textbox overlay for clicked element */}
                <AnimatePresence>
                  {clickedElement && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: 10 }}
                      className="absolute border-2 rounded-lg shadow-xl p-4 max-w-xs z-50 pointer-events-auto"
                      style={{
                        left: `${clickedElement.position.x}px`,
                        top: `${clickedElement.position.y}px`,
                        transform: "translate(-50%, calc(-100% - 10px))",
                        borderColor: clickedElement.color,
                        backgroundColor: colorToRgba(clickedElement.color, 0.7),
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={() => setClickedElement(null)}
                        className="absolute top-2 right-2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 text-xl leading-none w-5 h-5 flex items-center justify-center"
                      >
                        ×
                      </button>
                      <h4 className="font-bold text-neutral-700 dark:text-neutral-200 mb-2 pr-6">
                        {clickedElement.title}
                      </h4>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {clickedElement.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* FEATURE: Background Click - Textbox overlay for background click (white space) */}
                {ENABLE_BACKGROUND_CLICK && (
                  <AnimatePresence>
                    {backgroundClick && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 10 }}
                        className="absolute border-2 rounded-lg shadow-xl p-4 max-w-xs z-50 pointer-events-auto"
                        style={{
                          left: `${backgroundClick.position.x}px`,
                          top: `${backgroundClick.position.y}px`,
                          transform: "translate(-50%, calc(-100% - 10px))",
                          borderColor: "#6b7280", // neutral-500
                          backgroundColor: colorToRgba("#6b7280", 0.7),
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          onClick={() => setBackgroundClick(null)}
                          className="absolute top-2 right-2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 text-xl leading-none w-5 h-5 flex items-center justify-center"
                        >
                          ×
                        </button>
                        <h4 className="font-bold text-neutral-700 dark:text-neutral-200 mb-2 pr-6">
                          {backgroundPopupTexts.title}
                        </h4>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                          {backgroundPopupTexts.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>

              {/* Info popup */}
              <AnimatePresence>
                {showInfoPopup && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 bg-black/50 z-[200]"
                      onClick={() => setShowInfoPopup(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 20 }}
                      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[80vh] bg-white dark:bg-neutral-900 rounded-lg shadow-2xl z-[201] overflow-hidden flex flex-col"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-800">
                        <motion.p
                          layoutId={`description-${active.description}-${id}`}
                          className="text-neutral-600 dark:text-neutral-400 text-lg font-semibold"
                        >
                          {active.description}
                        </motion.p>
                        <button
                          onClick={() => setShowInfoPopup(false)}
                          className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 text-2xl leading-none w-8 h-8 flex items-center justify-center"
                        >
                          ×
                        </button>
                      </div>
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-neutral-600 text-sm md:text-base flex-1 overflow-y-auto p-6 dark:text-neutral-400"
                      >
                        {typeof active.content === "function"
                          ? active.content()
                          : active.content}
                      </motion.div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards: Array<{
  description: string;
  title: string;
  src: string;
  thumbnail: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactNode;
}> = [
  {
    description: firstFloorCard.description,
    title: firstFloorCard.title,
    src: "/plan_01_alt.svg",
    thumbnail: "/plan_01_alt.svg", // Smaller thumbnail for sidebar
    ctaText: "Se mer",
    ctaLink: "#",
    content: firstFloorCard.content,
  },
  {
    description: secondFloorCard.description,
    title: secondFloorCard.title,
    src: "/plan_02_alt.svg",
    thumbnail: "/plan_02_alt.svg", // Smaller thumbnail for sidebar
    ctaText: "Se mer",
    ctaLink: "#",
    content: secondFloorCard.content,
  },
  {
    description: thirdFloorCard.description,
    title: thirdFloorCard.title,
    src: "/plan_03_alt.svg",
    thumbnail: "/plan_03_alt.svg", // Smaller thumbnail for sidebar
    ctaText: "Se mer",
    ctaLink: "#",
    content: thirdFloorCard.content,
  },
];
