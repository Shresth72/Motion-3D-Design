"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import "../../styles/Home.scss";
import Link from "next/link";

const Intro = () => {
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
            start: "clamp(bottom-=600 bottom)",
            scrub: 2,
          },
        });

      gsap.from(".line", {
        width: 0,
        scrollTrigger: {
          trigger: ".line",
        },
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".intro-bg",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.utils.toArray<HTMLElement>(".parallax").forEach((layer) => {
        const speed = layer.dataset.speed;
        const movement = -(layer.offsetHeight * Number(speed)); // Convert speed to a number
        tl.to(layer, { y: movement, ease: "none" }, 0);
      });
    });

    return () => ctx.revert();
  });

  return (
    <div className="intro-container">
      <div className="intro-wrapper">
        <div className="intro-bg"></div>
        <h1 className="top " data-speed={2}>
          Where art and motion converge to create a{" "}
          <span>
            symphony<span className="line"></span>
          </span>{" "}
          of visual marvels!
        </h1>
        <h1 className="series  parallax" data-speed={3}>
          Explore the artistry of motion, and{" "}
          <span>
            unleash<span className="line"></span>
          </span>{" "}
          your creativity
        </h1>
        <div className="machine  parallax">
          {/* <Spline scene="https://prod.spline.design/LgzlHFhdPkBFudR5/scene.splinecode" /> */}
        </div>
        <h1 data-speed={3} className=" third parallax">
          Explore successful ad campaigns that leverage the magic of motion
          design to stand out in a crowded market.
        </h1>
      </div>
      <div className="parallax-group">
        <Link href="/" className="projects"></Link>
        <Link href="/" className="projects"></Link>
        <Link href="/" className="projects"></Link>
        <Link href="/" className="projects"></Link>
      </div>
    </div>
  );
};

export default Intro;
