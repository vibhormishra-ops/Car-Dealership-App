"use client";
import React, { useState, useCallback, useEffect, useRef } from "react";

const cards = [
  { id: 1, title: "Card 1" },
  { id: 2, title: "Card 2" },
  { id: 3, title: "Card 3" },
  { id: 4, title: "Card 4" },
  { id: 5, title: "Card 5" },
  { id: 6, title: "Card 6" },
];

const CARD_WIDTH = 540;
const CARD_GAP = 16;
const VISIBLE_CARDS = 3;

const InfiniteCarousel = () => {
  const [index, setIndex] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const extendedCards = [
    ...cards.slice(-VISIBLE_CARDS),
    ...cards,
    ...cards.slice(0, VISIBLE_CARDS),
  ];

  const handleNext = useCallback(() => {
    setShouldAnimate(true);
    setIndex((prev) => (prev + 1));
  }, []);

  const handlePrev = useCallback(() => {
    setShouldAnimate(true);
    setIndex((prev) => (prev - 1));
  }, []);
  useEffect(() => {
    if (index >= cards.length) {
      const timer = setTimeout(() => {
        setShouldAnimate(false);
        setIndex(index - cards.length);
      }, 500);
      return () => clearTimeout(timer);
    }
    else if (index < 0) {
      const timer = setTimeout(() => {
        setShouldAnimate(false);
        setIndex(index + cards.length);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [index]);

  useEffect(() => {
    const autoPlay = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(autoPlay);
  }, [handleNext]);

  const displayIndex = index + VISIBLE_CARDS;

  return (
    <div className="w-full mx-auto px-4">
      <div className="overflow-hidden" ref={containerRef}>
        <div
          className={`flex ${shouldAnimate ? "transition-transform duration-500 ease-in-out" : ""}`}
          style={{
            transform: `translateX(-${displayIndex * (CARD_WIDTH + CARD_GAP)}px)`,
          }}
        >
          {extendedCards.map((card, idx) => (
            <div
              key={`${card.id}-${idx}`}
              className="w-120 shrink-0 p-3 m-2 rounded-lg shadow flex items-center justify-center text-center break-words text-black bg-white hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold">{card.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button
          className="text-black bg-gray-200 px-4 py-2 rounded-lg hover:shadow-2xl hover:bg-gray-400"
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className="text-black bg-gray-200 px-4 py-2 rounded-lg hover:shadow-2xl hover:bg-gray-400"
          onClick={handleNext}
        >
          Next
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {cards.map((_, idx) => {
          const normalizedIndex = ((index % cards.length) + cards.length) % cards.length;
          return (
            <button
              key={idx}
              onClick={() => {
                setShouldAnimate(true);
                setIndex(idx);
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                normalizedIndex === idx ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default InfiniteCarousel;