"use client";

import SphereCanvas from "../Canvas/SphereCanvas";
import { FC, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

interface HomeWrapperProps {}

const HomeWrapper: FC<HomeWrapperProps> = ({}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.create({
        trigger: ".intro-wrapper",
        start: "center+=200 bottom",
        onEnter: () => {
          setIsVisible(false);
        },
        onLeaveBack: () => {
          setIsVisible(true);
        },
      });
    });
    return () => ctx.revert();
  });

  return (
    <div className="home-wrapper">
      <div className="header">Research</div>
      {isVisible && <SphereCanvas className={"canvas"} id="canvas" />}
    </div>
  );
};

export default HomeWrapper;
