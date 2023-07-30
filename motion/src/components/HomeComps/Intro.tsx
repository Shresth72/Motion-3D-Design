"use client";
import Scene from "../CanvasComps/number-canvas";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { Mesh } from "three";
import "../../styles/Home.scss";
import Spline from "@splinetool/react-spline";

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
            start: "clamp(bottom-=400 bottom)",
            scrub: 2,
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
          Where art and motion converge to create a{" "}
          <span>
            symphony<span className="line"></span>
          </span>{" "}
          of visual marvels!
        </h1>
        <h1 className="series">
        Our talented team brings{" "}
          <span>
          ideas<span className="line"></span>
          </span>{" "}
          to life.
        </h1>
        <div className="machine">
          {/* <Spline scene="https://prod.spline.design/LgzlHFhdPkBFudR5/scene.splinecode" /> */}
        </div>
        <h1>Explore successful ad campaigns that leverage the magic of motion design to stand out in a crowded market.</h1>
        
      </div>
    </div>
  );
};

export default Intro;
