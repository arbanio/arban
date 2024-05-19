"use client"

import Footer from "@/components/Footer";
import NewsLetter from "@/components/NewsLetter";
import { Swiper, SwiperSlide } from "swiper/react";


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';        

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { slides } from "@/constants";


const Aboutpage = () => {

  return (
    <main className="h-full xl:h-screen w-full bg-black-2 ">
      <div className="w-full h-[50px] md:h-[100px] flex justify-center items-center aboutBanner">
        <h1
          className="text-xl sm:text-5xl text-black-2"
          style={{ fontFamily: "Amarante" }}
        >
          ABOUT US
        </h1>
      </div>

      <div className="mt-10 xl:mt-20 flex justify-between">
        <div className="w-2/5 md:w-3/5 xl:w-1/2 h-full flex flex-col gap-1 md:gap-7 md:items-end ml-2 md:ml-0">
          <p className="w-[11rem] sm:w-[20rem] md:w-[32rem] text-[11px] xs:text-xs md:text-base xl:text-xl" style={{ fontFamily: "Amarante" }}>
            Welcome to ARBAN, where fragrance meets elegance and sophistication.
            At ARBAN, we believe that scent is more than just a fragrance its
            an expression of individuality, a reflection of style, and a journey
            of discovery.
          </p>
          <p className="w-[10rem] sm:w-[20rem] md:w-[32rem] text-[11px] xs:text-xs md:text-base xl:text-xl" style={{ fontFamily: "Amarante" }}>
            Our name, ARBAN, embodies our commitment to creating perfumes that
            are as unique and enchanting as the cities they are named after.
            Drawing inspiration from the vibrancy and diversity of urban life,
            each of our fragrances is a captivating blend of creativity,
            passion, and ingenuity.
          </p>
          <p className="w-[10rem] sm:w-[20rem] md:w-[32rem] text-[11px] xs:text-xs md:text-base xl:text-xl" style={{ fontFamily: "Amarante" }}>
            With a meticulous attention to detail and a dedication to using only
            the finest ingredients, we craft scents that evoke emotions, awaken
            memories, and transport you to a world of luxury and indulgence.
          </p>
          <p className="w-[10rem]  sm:w-[20rem] md:w-[32rem] text-[11px] xs:text-xs md:text-base xl:text-xl hidden sm:flex" style={{ fontFamily: "Amarante" }}>
            From the moment you experience an ARBAN fragrance, you will embark on
            a sensory adventure unlike any other. Whether you are drawn to the
            timeless allure of floral bouquets, the exotic richness of oriental
            spices, or the refreshing crispness of citrus notes, there is an
            ARBAN scent waiting to captivate your senses and elevate your
            experience.
          </p>
          <p className="w-[10rem] sm:w-[20rem] md:w-[32rem] text-[11px] xs:text-xs md:text-base xl:text-xl hidden sm:flex" style={{ fontFamily: "Amarante" }}>
            Join us as we redefine the art of fragrance and invite you to
            discover the essence of luxury with ARBAN.
          </p>
        </div>
        <div className="w-1/2 flex sm:items-center md:justify-center">
          <img
            src={"/assets/seahorse.svg"}
            alt="sea-horse"
            className="cursor-pointer w-[350px] h-[400px] sm:h-[350px] md:w-[450px] md:h-[750px]"
          />
        </div>
      </div>

      <div className="w-[95vw] pl-2 mt-2 sm:hidden">
        <p className="text-[11px] xs:text-xs md:text-base xl:text-xl" style={{ fontFamily: "Amarante" }}>
            From the moment you experience an ARBAN fragrance, you will embark on
            a sensory adventure unlike any other. Whether you are drawn to the
            timeless allure of floral bouquets, the exotic richness of oriental
            spices, or the refreshing crispness of citrus notes, there is an
            ARBAN scent waiting to captivate your senses and elevate your
            experience.Join us as we redefine the art of fragrance and invite you to
            discover the essence of luxury with ARBAN.
          </p>
        </div>

      <div className="mt-20 md:mt-40 w-[80vw] m-auto">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides= { true }
          slidesPerView= {true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination= {{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[ Pagination, EffectCoverflow, Autoplay ]}
          className="mySwiper"
        >
          { slides.map((data) => (
            <SwiperSlide key={data.id}><img src={data.imgUrl} alt={data.id} /></SwiperSlide>
          ))}
        </Swiper>
      </div>

      <NewsLetter />
      <Footer />
    </main>
  );
};

export default Aboutpage;
