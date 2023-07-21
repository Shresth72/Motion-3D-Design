"use client";

import SphereCanvas from "../CanvasComps/sphere-canvas";
import { FC, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Spline from '@splinetool/react-spline';


interface HomeWrapperProps {}

const HomeWrapper: FC<HomeWrapperProps> = ({}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.create({
        trigger: ".intro-wrapper",
        start: "top+=150 bottom",
        // markers: true,
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
      {/* <div className="header">Research</div> */}
      <Spline className="hero-scene" style={{display: `${isVisible === true ? "": "none"}`}} scene="https://prod.spline.design/xjmD3Hcj756E3i5r/scene.splinecode" />
     
    </div>
  );
};

export default HomeWrapper;
