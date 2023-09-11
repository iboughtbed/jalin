"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function ParallaxContainer() {
  return (
    <Parallax
      pages={2}
      style={{ top: "0", left: "0" }}
      className="parallax_container z-[1] pt-48 "
    >
      <ParallaxLayer offset={0} speed={0.2}>
        <div className="parallax_layer first__image "></div>
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
      <ParallaxLayer offset={1} speed={0.52}>
        <div className="z-1 z-3 h-[120vh] bg-purple-900 text-xl text-purple-100">
          text
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}
