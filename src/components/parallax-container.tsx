"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";

import firstImage from "public/01.png";
import secondImage from "public/02.png";
import thirdImage from "public/03.png";
import fourthImage from "public/04.png";
import fifthImage from "public/05.png";
import sixthImage from "public/06.png";
import seventhImage from "public/07.png";
import eighthImage from "public/08.png";
import ninthImage from "public/09.png";

import Program from "~/components/program";
import TeamLeaders from "~/components/team-leaders";

export default function ParallaxContainer() {
  return (
    <Parallax
      pages={4}
      style={{ top: "0", left: "0" }}
      className="parallax_container z-[1] pt-48"
    >
      <ParallaxLayer offset={0} speed={0.2}>
        <Image src={firstImage} alt="" priority />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.6}>
        <Image src={secondImage} alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.4}>
        <Image src={thirdImage} alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5}>
        <Image src={fourthImage} alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.6}>
        <Image src={fifthImage} alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.4}>
        <Image src={sixthImage} alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.4}>
        <Image src={seventhImage} alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3}>
        <Image src={eighthImage} alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.3}>
        <Image src={ninthImage} alt="" />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0}>
        <TeamLeaders />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0}>
        <Program />
      </ParallaxLayer>
    </Parallax>
  );
}
