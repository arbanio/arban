'use client'

import ReviewCard from "@/components/ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Reviews = () => {
  const reviewData = [
    {
      name: "Eshika Rawat",
      img: "/assets/review3.jpeg",
      description:
        "I like how this scent blends warmth and sweetness without the sweetness becoming too much or the almond dominating.",
    },

    {
      name: "Mukesh Sahu",
      img: "/assets/review2.jpg",
      description:
        "I like how this scent blends warmth and sweetness without the sweetness becoming too much or the almond dominating.",
    },

    {
      name: "Priyanshu",
      img: "/assets/review1.jpg",
      description:
        "I like how this scent blends warmth and sweetness without the sweetness becoming too much or the almond dominating.",
    },

    {
        name: "Priyanshu",
        img: "/assets/review1.jpg",
        description:
          "I like how this scent blends warmth and sweetness without the sweetness becoming too much or the almond dominating.",
    },
  ];

  return (
    <main className="w-full h-[600px] md:h-screen bg-transparent relative z-40">
      <div className="w-full flex flex-col justify-center">
        <h1
          className="text-xl md:text-4xl font-semibold mt-20 xl:mt-40 flex justify-center"
          style={{ fontFamily: "Amarante" }}
        >
          REVIEWS
        </h1>

        <div className="mt-10 md:mt-12 xl:mt-20 flex sm:w-[90vw] sm:m-auto h-[400px] sm:h-[450px]">
          <Swiper
            slidesPerView={3}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {reviewData.map((data) => (
            <SwiperSlide className='m-1 sm:m-1 md:m-1 xl:m-4' key={data.name}>
              <ReviewCard
                name={data.name}
                img={data.img}
                description={data.description}
              />
            </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </main>
  );
};

export default Reviews;
