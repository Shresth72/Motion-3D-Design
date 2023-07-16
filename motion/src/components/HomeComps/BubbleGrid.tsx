"use client";

import { FC, useEffect } from "react";
import Bubble from "../ui/Bubble";
import "../../styles/Bubble.scss";
import { gsap } from "gsap";
import "../../styles/Home.scss";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface BubbleGridProps {}

const BubbleGrid: FC<BubbleGridProps> = ({}) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.defaults({ duration: 1 });

      gsap.to(".black", {
        scale: 5,
        border: "",
        scrollTrigger: {
          trigger: ".black",
          // markers: true,
          start: "clamp(center center+=200px)", //400
          scrub: 1,
          end: "clamp(bottom center+=200)",
        },
      });
    });

    return () => ctx.revert();
  });

  const rows = [];
  let leftFlag = false;
  let upFlag = false;
  let upCount = -1;

  for (let i = 0; i < 42; i++) {
    if (i % 7 === 0) {
      leftFlag = true;
      upCount++;
    }
    if (i === 7) upFlag = true;
    rows.push(
      <Bubble
        className={`${i === 17 ? "black" : "normal"}`}
        key={i}
        left={!leftFlag}
        incrementLeft={7 * (i % 7)}
        up={upFlag}
        incrementUp={10.5 * upCount}
      />
    );
    leftFlag = false;
  }

  return (
    <div className="bubble-container">
      <div className="bubble-wrapper">{rows}</div>
    </div>
  );
};

export default BubbleGrid;
