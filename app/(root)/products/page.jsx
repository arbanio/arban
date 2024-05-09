"use client"

import ProductCard from '@/components/ProductCard';
import { ProdcutLinks } from '@/constants';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react'
import React, { useRef, useState } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Productpage = () => {
  return (
    <main className='w-full bg-transparent h-full relative z-40' id='product' >
      <div className='w-full flex flex-col justify-center'>
        <h1 className='text-sm xs:text-xl md:text-3xl xl:text-4xl font-semibold mt-0 xl:mt-10 flex justify-center' style={{ fontFamily: 'Amarante'}}>OUR PRODUCTS</h1>
        
       
        <div className='mt-10 xl:mt-20 w-full h-[250px] sm:h-[350px] xl:w-[90vw] md:h-[500px] xl:h-[600px] m-auto flex'>
          <Swiper
           slidesPerView={3}
           pagination={{clickable: true}}
           modules={[Pagination]}
           className='mySwiper'
          >
            {ProdcutLinks.map((data) => (
              <SwiperSlide className='m-1 sm:m-2 md:m-5 xl:m-7' key={data.img}><ProductCard link={data.link} image={data.img} /></SwiperSlide>
            ))} 
          </Swiper>  
        </div>      

        {/* ======== product details page ============ */}
        <div className='mt-5 xs:mt-10 md:mt-40 h-556 flex'>
          <div className='w-1/2 flex justify-end'> <Image src={"/assets/product.svg"} width={600} height={600} alt='product' /></div>
          <div className='w-1/2 flex flex-col justify-center gap-5 xl:gap-10 xs:ml-10'>
              <h1 className="text-xl md:text-3xl xl:text-5xl font-semibold" style={{ fontFamily: 'Amarante'}}>LIMITED EDITION</h1>
              <p className="text-xs md:text-base xl:text-xl mt-2 xl:mt-5 w-44 md:w-38" style={{ fontFamily: 'Amarante'}}>If you are going to use a you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the on the Internet tend to repeat predefined chunks as necessary, first true generator on the internet</p>
              <button className="w-20 md:w-28 xl:w-40 border-2 border-gold-1 text-gold-1 text-xs md:text-base xl:text-xl rounded-5 p-1 xs:p-2 xl:p-3 mt-5 xl:mt-10" style={{ fontFamily: 'Amarante'}}>Book Now</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Productpage;