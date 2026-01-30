"use client"
import React from 'react'
import { useState } from 'react'
const cards=[
    {id: 1, imageURL:"https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id: 2, imageURL:"https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id: 3, imageURL:"https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id: 4, imageURL:"https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {id: 5, imageURL:"https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

]
const CARD_WIDTH=580;
const FlowbiteCarousel = () => {
 const [index,setIndex]=useState(0);
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
            transform: `translateX(-${index * CARD_WIDTH*4}px)`,
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="w-560 h-120 shrink-0 p-3 m-2
                       rounded-lg
                         flex items-center justify-center
                         text-center wrap-break-word text-black"
            >
              <img src={card.imageURL} alt="" className='object-contain rounded-2xl' />
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

export default FlowbiteCarousel;