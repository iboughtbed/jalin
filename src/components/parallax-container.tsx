"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Events from "~/components/events";
import SiteFooter from "~/components/layouts/site-footer";
import Program from "~/components/program";
import Slogan from "~/components/slogan";
import TeamLeaders from "~/components/team-leaders";

export default function ParallaxContainer() {
  return (
    <Parallax
      pages={5}
      style={{ top: "0", left: "0" }}
      className="parallax_container z-[1] pt-48"
    >
      <ParallaxLayer offset={0} speed={-0.2}>
        <Slogan />
      </ParallaxLayer>
      <ParallaxLayer
        className="md:mt-[10rem] lg:mt-[8rem]"
        offset={0}
        speed={0.2}
      >
        <div className="parallax_layer first__image"></div>
      </ParallaxLayer>
      <ParallaxLayer
        className="md:mt-[10rem] lg:mt-[8rem]"
        offset={0}
        speed={0.6}
      >
        <div className="parallax_layer second__image"></div>
      </ParallaxLayer>
      <ParallaxLayer
        className="md:mt-[10rem] lg:mt-[8rem]"
        offset={0}
        speed={0.4}
      >
        <div className="parallax_layer third__image"></div>
      </ParallaxLayer>
      <ParallaxLayer
        className="md:mt-[10rem] lg:mt-[8rem]"
        offset={0}
        speed={0.5}
      >
        <div className="parallax_layer fourth__image"></div>
      </ParallaxLayer>
      <ParallaxLayer
        className="md:mt-[10rem] lg:mt-[8rem]"
        offset={0}
        speed={0.6}
      >
        <div className="parallax_layer fifth__image"></div>
      </ParallaxLayer>
      <ParallaxLayer
        className="md:mt-[10rem] lg:mt-[8rem]"
        offset={0}
        speed={0.4}
      >
        <div className="parallax_layer sixth__image"></div>
      </ParallaxLayer>
      <ParallaxLayer
        className="md:mt-[10rem] lg:mt-[8rem]"
        offset={0}
        speed={0.4}
      >
        <div className="parallax_layer seventh__image"></div>
      </ParallaxLayer>
      <ParallaxLayer
        className="md:mt-[10rem] lg:mt-[8rem]"
        offset={0}
        speed={0.3}
      >
        <div className="parallax_layer eighth__image"></div>
      </ParallaxLayer>
      <ParallaxLayer
        className="md:mt-[10rem] lg:mt-[8rem]"
        offset={0}
        speed={0.3}
      >
        <div className="parallax_layer ninth__image"></div>
      </ParallaxLayer>

      <ParallaxLayer className="lg:mt-[25rem]" offset={1} speed={0}>
        <TeamLeaders />
      </ParallaxLayer>

      <ParallaxLayer className="lg:mt-[30rem]" offset={2} speed={0}>
        <Program />
      </ParallaxLayer>

      <ParallaxLayer
        className="mt-[10rem] lg:mt-[60rem] xl:mt-[50rem]"
        offset={3}
        speed={0}
      >
        <Events />
      </ParallaxLayer>

      <ParallaxLayer
        className="lg:mt-[70rem] xl:mt-[60rem]"
        offset={4}
        speed={0}
      >
        <SiteFooter />
      </ParallaxLayer>
    </Parallax>
  );
}
