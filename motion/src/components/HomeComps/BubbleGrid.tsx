"use client";

import { FC, useEffect } from "react";
import { gsap } from "gsap";
import "../../styles/Home.scss";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import BubbleLayout from "./BubbleLayout";
import Flip from "gsap/dist/Flip";

interface BubbleGridProps {}

const BubbleGrid: FC<BubbleGridProps> = ({}) => {


  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger, Flip);
      gsap.defaults({ duration: 2 });

      const tl = gsap.timeline();

      gsap.from(".bubble-container", {
        translateY: 0,
        scrollTrigger: {
          trigger: ".bubble-container",
          scrub: 2,
          start: "top-=900 bottom",
          end: "center center",
        },
      });

      tl.to(".black", {
        scale: 8,
      })
        .to(".diamond", {
          scale: 0.2,
        })
        .to(".normal", {
          translateY: 740,
        })
        .to(".black", {
          border: "0px",
        });

      ScrollTrigger.create({
        animation: tl,
        trigger: ".bubble-container",
        scrub: 3,
        start: "top+=100 bottom",
        end: "top+=100 center-=100",
        // markers: true,
        snap: 1,
      });

      const tl2 = gsap.timeline();
      tl2.to(".normal", {
        scrollTrigger: {
          trigger: ".normal",
          start: "bottom+=650 bottom",
          end: "bottom+=650 top",
          // toggleClass: "normal-final",
          onEnter: () => {
            document.querySelector(".bubble-wrapper")?.classList.add("flat-grid");
            
            
          },
          onLeaveBack: () => {
            document.querySelector(".bubble-wrapper")?.classList.remove("flat-grid");
          
          },

        },
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
