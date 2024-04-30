"use client"

import React, { useEffect, useState } from 'react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

const Carousel = ({ children: slides, autoSlide  = false, autoSlideInterval = 3000 }) => {
  const [curr, setCurr] = useState(0);
  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if(!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval);
  }, [])
  return (
    <div className='overflow-hidden relative'>
        <div className='flex transition-transform ease-out duration-500' style={{ transform: `translate(-${curr * 100}%)`}}>{slides}</div>
        <div className='absolute inset-0 flex items-center justify-between p-4'>
            <button className='text-white' onClick={prev}>
                <FaRegArrowAltCircleLeft className='bg-gold-1 rounded-3xl'  size={40} />
            </button>
            <button className='text-white' onClick={next}>
                <FaRegArrowAltCircleRight className='bg-gold-1 rounded-3xl'  size={40} />
            </button>
        </div>

        <div className='absolute bottom-4 right-0 left-0'>
            <div className='flex items-center justify-center gap-2'>
                {slides.map((_, i) => (
                    <div className={`transition-all w-3 h-3 bg-gold-1 rounded-full ${curr === i ? "p-2" : "bg-opacity-50"}`} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Carousel