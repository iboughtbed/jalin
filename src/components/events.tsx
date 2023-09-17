"use client";

import Image from "next/image";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Events() {
  const items = [
    "https://github.com/iboughtbed/jalin-assets/blob/main/assets/nis-footbal-22-09.png?raw=true",
    "https://github.com/iboughtbed/jalin-assets/blob/main/assets/jaiq-hub-18-09.png?raw=true",
    "https://github.com/iboughtbed/jalin-assets/blob/main/assets/fifa-18-09.png?raw=true",
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
        className="h-[300px] w-[300px] rounded-2xl text-white md:h-[500px] md:w-[500px] xl:h-[550px] xl:w-[550px]"
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="relative flex flex-col items-center rounded-2xl bg-[#25077D]">
              <div className="relative h-[300px] w-[300px] rounded-2xl bg-[#350DA9] md:h-[500px] md:w-[500px] xl:h-[550px] xl:w-[550px]">
                <Image
                  src={item}
                  alt="EVENT"
                  sizes="(max-width: 768px) 300px, (max-width: 1280px) 500px, 550px"
                  className="rounded-2xl object-contain"
                  fill
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
