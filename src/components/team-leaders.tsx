import Image from "next/image";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import abikActive from "public/abik-active.png";
import arystanActive from "public/arystan-active.png";
import orazActive from "public/oraz-active.png";
import { cn } from "~/lib/utils";

export default function TeamLeaders() {
  const leaders = [
    { img: orazActive, name: "Mr. Oraz", role: "Vice President" },
    { img: arystanActive, name: "Umarov Arystan", role: "Candidate" },
    { img: abikActive, name: "Mr. Abik", role: "Vice President" },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-12 border-white bg-background xl:gap-20">
      <h1 className="pt-4 text-6xl font-semibold text-white sm:text-[84px] sm:font-bold">
        Team leaders
      </h1>
      <div className="hidden gap-16 xl:flex">
        {leaders.map((item, i) => (
          <div key={i} className="group flex h-[510px] w-[330px] flex-col">
            <div
              className={cn(
                item.role != "Candidate"
                  ? "transition-all group-hover:-translate-y-4 group-hover:rounded-b-none group-hover:border-b"
                  : "-translate-y-8",
                "z-[1] h-[410px] rounded-b-3xl rounded-t-3xl border-black bg-[#25077D]"
              )}
            >
              <Image
                src={item.img}
                alt={item.name}
                className={cn(
                  item.role != "Candidate" &&
                    "grayscale group-hover:grayscale-0"
                )}
              />
            </div>
            <div
              className={cn(
                item.role != "Candidate"
                  ? "-translate-y-[100px] transition-all group-hover:-translate-y-4"
                  : "-translate-y-8",
                "flex flex-col items-center gap-2 rounded-b-3xl bg-[#25077D] px-7 py-3"
              )}
            >
              <h2 className="text-3xl/10 font-bold text-white">{item.name}</h2>
              <h5 className="text-2xl/7 font-bold text-[#825EEB]">
                {item.role}
              </h5>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-16 xl:hidden">
        <Swiper
          spaceBetween={0}
          initialSlide={1}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="h-[510px] w-[430px]"
        >
          {leaders.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="group flex h-[510px] w-[430px] flex-col items-center">
                <div className="z-[1] h-[360px] rounded-t-3xl border-black bg-[#25077D]">
                  <Image src={item.img} alt={item.name} width={290} />
                </div>
                <div className="flex flex-col items-center gap-2 rounded-b-3xl bg-[#25077D] px-7 py-3 max-xl:w-[290px]">
                  <h2 className="text-3xl/10 font-bold text-white">
                    {item.name}
                  </h2>
                  <h5 className="text-2xl/7 font-bold text-[#825EEB]">
                    {item.role}
                  </h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
