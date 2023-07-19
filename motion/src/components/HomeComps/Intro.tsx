"use client";
import Scene from "../CanvasComps/number-canvas";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { Mesh } from "three";
import "../../styles/Home.scss";

const Intro = () => {
  const machineRef = useRef<Mesh>(null!);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.defaults({ duration: 2 });
      const tl2 = gsap.timeline();

      tl2
        .from(".intro-bg", {
          y: 100,
          scrollTrigger: {
            trigger: ".top",
            start: "clamp(top-=300 center)",
            // markers: true,
            scrub: 1,
          },
        })
        .to(".intro-bg", {
          scaleX: 1,
          scrollTrigger: {
            trigger: ".top",
            start: "clamp(center center)",
            // markers: true,
            scrub: 2,
            pin: true,
            end: "clamp(bottom center)",
          },
        })
        .from(".info-container", {
          translateY: 0,
          scrollTrigger: {
            trigger: ".intro-container",
            start: "clamp(bottom-=300 bottom)",
            scrub: 2,
            snap: 1 / 2.4,
          },
        });
    });

    return () => ctx.revert();
  });

  return (
    <div className="intro-container">
      <div className="intro-wrapper">
        <div className="intro-bg"></div>
        <h1 className="top">
          Unleash your ambitions by{" "}
          <span>
            maximizing<span className="line"></span>
          </span>{" "}
          throughput
        </h1>
        <h1 className="series">
          Cicada XI{" "}
          <span>
            series<span className="line"></span>
          </span>{" "}
        </h1>
        {/* <Scene machineRef={machineRef} /> */}
        {/* classname Machine */}
        <h1>Discovery may alter gene function understanding.</h1>
      </div>
    </div>
  );
};

export default Intro;
