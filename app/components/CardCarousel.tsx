"use client";

import { useState } from "react";

const cards = [
  {
    id: 1,
    title: "Card 1",
    content:
      "We had amazing experience at the car dealership app. These were some of the best car collection we have ever seen. It helped us find our dream car.",
  },
  {
    id: 2,
    title: "Card 2",
    content:
      "We had amazing experience at the car dealership app. These were some of the best car collection we have ever seen. It helped us find our dream car.",
  },
  {
    id: 3,
    title: "Card 3",
    content:
      "We had amazing experience at the car dealership app. These were some of the best car collection we have ever seen. It helped us find our dream car.",
  },
  {
    id: 4,
    title: "Card 4",
    content:
      "We had amazing experience at the car dealership app. These were some of the best car collection we have ever seen. It helped us find our dream car.",
  },
  {
    id: 5,
    title: "Card 5",
    content:
      "We had amazing experience at the car dealership app. These were some of the best car collection we have ever seen. It helped us find our dream car.",
  },
  {
    id: 6,
    title: "Card 6",
    content:
      "We had amazing experience at the car dealership app. These were some of the best car collection we have ever seen. It helped us find our dream car.",
  },
];

export default function CardCarousel() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCards = [
    cards[startIndex],
    cards[(startIndex + 1) % cards.length],
    cards[(startIndex + 2) % cards.length],
  ];

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="w-full flex flex-col items-center gap-4 p-4">
      <h1 className="text-black text-4xl">
        Hear from our trusted Customers...
      </h1>
      <div className="flex gap-4">
        {visibleCards.map((card) => (
          <div
            key={card.id}
            className="w-100 h-100 flex flex-col items-center rounded-lg border shadow wrap-break-word whitespace-normal gap-5 p-5 bg-white hover:shadow-2xl"
          >
            <p className="text-black font-bold wrap-break-word">{card.title}</p>
            <h1 className="text-black wrap-break-word">{card.content}</h1>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 rounded bg-gray-200 text-black hover: shadow-2xl hover:bg-gray-400"
        >
          Prev
        </button>

        <button
          onClick={handleNext}
          className="px-4 py-2 rounded bg-gray-200 text-black hover: shadow-2xl hover:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
}
