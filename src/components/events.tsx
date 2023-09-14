"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Events() {
  const items = ["News", "News #1", "News #2", "News #3", "News #4"];

  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-12 bg-background">
      <h1 className="pt-8 text-6xl font-semibold text-white sm:text-[84px] sm:font-bold">
        Events
      </h1>
      <Swiper
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-[500px] w-[800px] rounded-2xl text-white"
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col items-center rounded-2xl bg-[#25077D]">
              <div className="flex h-[500px] w-[800px] flex-col items-center justify-start gap-2 pt-16">
                <div className="h-[300px] w-[600px] rounded-2xl bg-[#350DA9]" />
                <p className="flex w-[600px] justify-between text-base font-semibold">
                  <span>{item}</span>
                  <span className="text-sm font-normal">9/11/23</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
