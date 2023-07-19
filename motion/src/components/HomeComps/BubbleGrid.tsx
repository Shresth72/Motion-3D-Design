"use client";

import { FC, useEffect } from "react";
import { gsap } from "gsap";
import "../../styles/Home.scss";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import BubbleArray from "./BubbleArray";
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
        .from(".bubble-text", {
          opacity: 0,
          y: 20,
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
        translateY: 700,
        opacity: 0,
        scrollTrigger: {
          trigger: ".bubble-container",
          start: "center-=200 bottom",
          end: "center-=200 center-=100",
          scrub: 2,
        },
      });
    });

    return () => ctx.revert();
  });

  return (
    <div className="bubble-container">
      <BubbleArray />
      <div className="bubble-text">A New Standard in operation simplicity</div>
    </div>
  );
};

export default BubbleGrid;
