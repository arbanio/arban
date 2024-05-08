"use client";

import React, { useEffect, useState } from "react";

const ProductCarousel = ({
  children: products,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? products.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === products.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className="overflow-hidden relative" key={products}>
      <div
        className="flex justify-between transition-transform ease-out duration-500"
        style={{ transform: `translate(-${curr * 100}%)` }}
      >
        {products}
      </div>
    </div>
  );
};

export default ProductCarousel;
