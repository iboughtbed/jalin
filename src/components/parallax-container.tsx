"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Events from "~/components/events";
import Program from "~/components/program";
import TeamLeaders from "~/components/team-leaders";
import { Icons } from "./icons";

export default function ParallaxContainer() {
  return (
    <Parallax
      pages={5}
      style={{ top: "0", left: "0" }}
      className="parallax_container z-[1] pt-48"
    >
      <ParallaxLayer offset={0} speed={0.2}>
        <div className="parallax_layer first__image"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.6}>
        <div className="parallax_layer second__image"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.4}>
        <div className="parallax_layer third__image"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5}>
        <div className="parallax_layer fourth__image"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.6}>
        <div className="parallax_layer fifth__image"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.4}>
        <div className="parallax_layer sixth__image"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.4}>
        <div className="parallax_layer seventh__image"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3}>
        <div className="parallax_layer eighth__image"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3}>
        <div className="parallax_layer ninth__image"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0}>
        <TeamLeaders />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0}>
        <Program />
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={0}>
        <Events />
      </ParallaxLayer>
      <ParallaxLayer offset={4} speed={0}>
        <div className="flex h-40 items-center justify-between px-36 text-white">
          <div>© 2023 Jalin</div>
          <div className="flex flex-col gap-2">
            <span className="font-medium">Contact us</span>
            <span className="flex items-center gap-1">
              <Icons.phone className="h-4 w-4" /> +7 777 777 77-77
            </span>
            <span className="flex items-center gap-1">
              <Icons.mail className="h-4 w-4" /> example@example.com
            </span>
            <span className="flex items-center gap-1">
              <Icons.instagram className="h-4 w-4" /> instagram.example
            </span>
          </div>
          <div>All pictures are made by the authors.</div>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}
