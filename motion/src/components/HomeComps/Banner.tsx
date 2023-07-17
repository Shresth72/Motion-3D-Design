"use client";

import { useEffect } from "react";
import Button from "../ui/Button";
import { gsap } from "gsap";
import "../../styles/Home.scss";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Banner = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.defaults({ duration: 2 });

      // gsap.to(".banner-container", {
      //   y: 1200,
      //   scrollTrigger: {
      //     trigger: ".banner-container",
      //     // markers: true,
      //     start: "clamp(bottom-=300 center+=280)",
      //     scrub: 1,
      //   },
      // });
      // gsap.to(".banner-container", {
      //   scaleY: 0,
      //   scrollTrigger: {
      //     trigger: ".bubble-container",
      //     // markers: true,
      //     start: "clamp(top bottom+=250px)",
      //     scrub: 1,
      //   },
      // });
    });

    return () => ctx.revert();
  });

  return (
    <div className="banner-container">
      <div className="wrapper">
        <svg className="crown" width="1294" height="163" viewBox="0 0 1294 163">
          <path d="M572.27 155C330.796 -2.24278 93.221 -8.04313 5 18.8495V158H1289V18.8495C1083.51 -36.3278 827.799 86.6259 725.629 155C718.041 139.708 704.549 91.7233 648.897 87.8212C604.376 84.6995 579.262 131.306 572.27 155Z" />
        </svg>
        <div className="logo">Ci</div>
        <div className="text">
          <h1>
            Gain access to cutting-edge genome{" "}
            <span>
              sequencing<span className="line"></span>
            </span>{" "}
            technologies
          </h1>
          <Button className={""}>Sign up for testing</Button>
          <p>learn more</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
