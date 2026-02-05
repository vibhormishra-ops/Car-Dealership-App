"use client";
import React, { useState, useCallback, useEffect, useRef } from "react";

const cards = [
  {
    id: 1,
    imageURL:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    imageURL:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    imageURL:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    imageURL:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    imageURL:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const CARD_WIDTH = 1580;
const CARD_GAP = 16;

const FlowbiteCarousel = () => {
  const [index, setIndex] = useState(1);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const extendedCards = [
    cards[cards.length - 1], // Clone of last item at start
    ...cards,
    cards[0], // Clone of first item at end
  ];

  const handleNext = useCallback(() => {
    setShouldAnimate(true);
    setIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setShouldAnimate(true);
    setIndex((prev) => prev - 1);
  }, []);

  // Handle the infinite loop logic
  useEffect(() => {
    // If we've reached the clone at the end
    if (index === extendedCards.length - 1) {
      const timer = setTimeout(() => {
        setShouldAnimate(false);
        setIndex(1); // Jump to real first slide without animation
      }, 500); // Wait for transition to complete
      return () => clearTimeout(timer);
    }
    // If we've reached the clone at the start
    else if (index === 0) {
      const timer = setTimeout(() => {
        setShouldAnimate(false);
        setIndex(cards.length); // Jump to real last slide without animation
      }, 500); // Wait for transition to complete
      return () => clearTimeout(timer);
    }
  }, [index, extendedCards.length, cards.length]);

  // Auto-play functionality (optional)
  useEffect(() => {
    const autoPlay = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(autoPlay);
  }, [handleNext]);

  return (
    <div className="w-full mx-auto px-4">
      <div className="overflow-hidden" ref={containerRef}>
        <div
          className={`flex ${shouldAnimate ? "transition-transform duration-500 ease-in-out" : ""}`}
          style={{
            transform: `translateX(-${index * (CARD_WIDTH + CARD_GAP)}px)`,
          }}
        >
          {extendedCards.map((card, idx) => (
            <div
              key={`${card.id}-${idx}`}
              className="shrink-0 p-3 m-2 rounded-lg flex items-center justify-center"
              style={{ width: `${CARD_WIDTH}px`, height: "480px" }}
            >
              <img
                src={card.imageURL}
                alt={`Slide ${card.id}`}
                className="w-full h-full object-cover rounded-2xl"
              />
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
        {cards.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setShouldAnimate(true);
              setIndex(idx + 1);
            }}
            className={`w-3 h-3 rounded-full transition-colors ${
              (index === idx + 1) || 
              (index === 0 && idx === cards.length - 1) ||
              (index === extendedCards.length - 1 && idx === 0)
                ? "bg-blue-600"
                : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};


export default FlowbiteCarousel;