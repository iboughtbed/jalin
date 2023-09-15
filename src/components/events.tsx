"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Events() {
  const items = [
    { title: "Football match for 10-12th grade", day: "18/09/23" },
    { title: "Meet-up with Jaiq Hub for 7-9th grade", day: "18/09/23" },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-12 bg-background pt-8 max-md:gap-24">
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
        className="h-[200px] w-[320px] rounded-2xl text-white md:h-[375px] md:w-[600px] lg:h-[500px] lg:w-[800px]"
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="relative flex flex-col items-center rounded-2xl bg-[#25077D]">
              {/* <div className="flex h-[200px] w-[320px] flex-col items-center justify-start gap-2 pt-16 lg:h-[500px] lg:w-[800px]">
                <div className="h-[75px] w-[200px] rounded-2xl bg-[#350DA9]" />
                <p className="flex w-[200px] justify-between text-base font-semibold">
                  <span>{item}</span>
                  <span className="text-sm font-normal">9/11/23</span>
                </p>
              </div> */}
              <div className="h-[200px] w-[320px] rounded-2xl bg-[#350DA9] md:h-[375px] md:w-[600px] lg:h-[500px] lg:w-[800px]"></div>
              <div className="absolute bottom-6 flex w-full flex-col px-10 md:bottom-14 md:flex-row md:items-center md:justify-between">
                <p className="text-xs font-bold md:text-xl lg:text-3xl">
                  {item.title}
                </p>
                <p className="text-xs md:text-base lg:text-xl">{item.day}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
