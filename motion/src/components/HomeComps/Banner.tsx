"use client";

import { useEffect } from "react";
import Button from "../ui/buttonPurple";
import { gsap } from "gsap";
import "../../styles/Home.scss";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Banner = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.defaults({ duration: 2 });

      const tl = gsap.timeline();

      tl.from(".crown", {
        scaleY: 1.5,
        y: -480,
        // transform: "translate(-10px, -418px) rotate3d(0,0,0,0)",
        scrollTrigger: {
          // markers: true,
          trigger: ".crown",
          start: "clamp(center bottom)",
          end: "clamp(bottom center)",
          scrub: 2,
        }
      });

    });

    return () => ctx.revert();
  });

  return (
    <div className="banner-container">
      <div className="wrapper">
        {/* <svg className="crown" width="1294" height="163" viewBox="0 0 1294 163">
          <path d="M572.27 155C330.796 -2.24278 93.221 -8.04313 5 18.8495V158H1289V18.8495C1083.51 -36.3278 827.799 86.6259 725.629 155C718.041 139.708 704.549 91.7233 648.897 87.8212C604.376 84.6995 579.262 131.306 572.27 155Z" />
        </svg> */}
        <svg className="crown" width="1284" height="268" viewBox="0 0 1284 268">
          <path d="M567.27 267.179C325.796 109.936 88.221 -18.0429 0 8.84968V267.179H1284V8.84968C1078.51 -46.3276 822.799 198.805 720.629 267.179C713.041 251.887 699.549 203.902 643.897 200C599.376 196.878 574.262 243.485 567.27 267.179Z" />
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
