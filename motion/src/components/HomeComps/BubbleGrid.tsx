"use client";

import { FC, useEffect } from "react";
import { gsap } from "gsap";
import "../../styles/Home.scss";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import BubbleLayout from "./BubbleLayout";

interface BubbleGridProps {}

const BubbleGrid: FC<BubbleGridProps> = ({}) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.defaults({ duration: 1 });

      const tl = gsap.timeline();

      gsap.from(".bubble-container", {
        translateY: 0,
        scrollTrigger: {
          trigger: ".bubble-container",
        scrub: 2,
        start: "top-=900 bottom",
        end: "center center",
        }
      })

      tl.to(".black", {
        scale: 8,
      }).to(".diamond", {
        scale: 0.2
      }).to(".normal", {
        translateY: 500
      });


      ScrollTrigger.create({
        animation: tl,
        trigger: ".bubble-container",
        scrub: 2,
        start: "top+=100 bottom",
        end: "top+=100 center-=100",
        markers: true,
      });
    });

    return () => ctx.revert();
  });

  return (
    <div className="bubble-container">
      
      <BubbleLayout />
    </div>
  );
};

export default BubbleGrid;
