"use client";

import { FC, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import FirstAnime from "./svgFiles/FirstAnime";
import SecondAnime from "./svgFiles/SecondAnime";

interface InfoAnimationProps {}

const InfoAnimation: FC<InfoAnimationProps> = ({}) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline();

      
    });

    return () => ctx.revert();
  });

  return (
    <div className="animation-container">
      <div className="animation-wrapper">
        <FirstAnime />
        <SecondAnime />
      </div>
    </div>
  );
};

export default InfoAnimation;
