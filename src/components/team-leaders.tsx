import Image from "next/image";
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
    <div className="flex min-h-screen w-full flex-col items-center gap-12 border-y border-white bg-background">
      <h1 className="text-[84px] font-bold text-white">Team leaders</h1>
      <div className="flex gap-16">
        {leaders.map((item, i) => (
          <div key={i} className="group flex h-[510px] w-[330px] flex-col">
            <div
              className={cn(
                item.role != "Candidate" ?
                  "transition-all group-hover:-translate-y-4 group-hover:rounded-b-none group-hover:border-b" : "-translate-y-4",
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
                item.role != "Candidate" ?
                  "-translate-y-[100px] transition-all group-hover:-translate-y-4" : "-translate-y-4",
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
    </div>
  );
}
