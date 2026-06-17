import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";

const CAROUSEL_IMAGES = [
  "futureskills/0001.png",
  "futureskills/0004.png",
  "futureskills/0005.png",
  "futureskills/0003.png",
  "futureskills/0006.png",
  "futureskills/0002.png",
  "futureskills/0007.png",
  "futureskills/0008.png",
  "futureskills/0009.png",
  "futureskills/0010.png",
  "futureskills/0011.png",
];

const FutureSkills = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoSlideTimer = useRef(null);

  const resetTimer = () => {
    if (autoSlideTimer.current) {
      clearInterval(autoSlideTimer.current);
    }
  };

  useEffect(() => {
    resetTimer();

    autoSlideTimer.current = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === CAROUSEL_IMAGES.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => resetTimer();
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? CAROUSEL_IMAGES.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === CAROUSEL_IMAGES.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="bg-transparent min-h-screen pb-20">
      <Header
        title="Future Skills Prime"
        subtitle="Professional Credentials, Certificates & Skill Tracks"
        image="/aiide_banner.webp"
      />

      <main className="max-w-5xl mx-auto px-4 py-12 bg-transparent">
        <div className="relative w-full overflow-hidden rounded-[15px] group shadow-2xl bg-slate-950">
          <div
            className="flex transition-transform duration-700 ease-in-out will-change-transform"
            style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}
          >
            {CAROUSEL_IMAGES.map((imgSrc, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 h-[250px] sm:h-[400px] md:h-[500px] lg:h-[550px] bg-slate-900"
              >
                <img
                  src={imgSrc}
                  className="w-full h-full object-contain pointer-events-none select-none"
                  alt={`Future Skill Exhibit Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>

        
          <button
            type="button"
            onClick={handlePrev}
            className="absolute top-1/2 left-4 -translate-y-1/2 z-30 flex items-center justify-center w-12 h-12 rounded-full bg-black/30 text-white opacity-70 hover:opacity-100 hover:bg-black/60 transition-all duration-200"
            aria-label="Previous Slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          
          <button
            type="button"
            onClick={handleNext}
            className="absolute top-1/2 right-4 -translate-y-1/2 z-30 flex items-center justify-center w-12 h-12 rounded-full bg-black/30 text-white opacity-70 hover:opacity-100 hover:bg-black/60 transition-all duration-200"
            aria-label="Next Slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center gap-2 px-4 py-2 bg-black/20 rounded-full backdrop-blur-sm max-w-[90%]">
            {CAROUSEL_IMAGES.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? "bg-white w-6"
                    : "bg-white/40 hover:bg-white/70 w-1.5"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

     
        <div className="text-center pt-12">
          <a
            href="https://learn.futureskillsprime.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            Future Skill Portal
          </a>
        </div>
      </main>
    </div>
  );
};

export default FutureSkills;
