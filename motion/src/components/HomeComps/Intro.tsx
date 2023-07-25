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
            start: "clamp(bottom-=300 bottom)",
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
          Your Gateway to Fun{" "}
          <span>
            Mathematics<span className="line"></span>
          </span>{" "}
          and the World of Numbers!
        </h1>
        <h1 className="series">
        Exciting journey where {" "}
          <span>
          numbers<span className="line"></span>
          </span>{" "} come alive.
        </h1>
        <div className="machine"><Spline scene="https://prod.spline.design/LgzlHFhdPkBFudR5/scene.splinecode" /></div>
        <h1>Dive in and unlock the magic of mathematics together!</h1>
      </div>
    </div>
  );
};

export default Intro;
