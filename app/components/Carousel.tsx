'use client'

import { useState } from 'react'

const cards = [
  { id: 1, title: 'Card 1' },
  { id: 2, title: 'Card 2' },
  { id: 3, title: 'Card 3' },
  { id: 4, title: 'Card 4' },
  { id: 5, title: 'Card 5' },
  { id: 6, title: 'Card 6' },
]

const CARD_WIDTH = 552

export default function SlidingCarousel() {
  const [index, setIndex] = useState(0)

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % cards.length)
  }

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + cards.length) % cards.length)
  }

  return (
    <div className="w-full mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * CARD_WIDTH}px)`,
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="w-134 shrink-0 p-3 m-2
                       rounded-lg shadow
                         flex items-center justify-center
                         text-center wrap-break-word text-black bg-white hover:shadow-2xl"
            >
              {card.title}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button className='text-black bg-gray-200 px-4 py-2 rounded-lg hover: shadow-2xl hover:bg-gray-400' onClick={handlePrev}>Prev</button>
        <button className='text-black bg-gray-200 px-4 py-2 rounded-lg hover: shadow-2xl hover:bg-gray-400' onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}
