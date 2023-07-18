"use client";

import { FC, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

interface FirstAnimeProps {}

const FirstAnime: FC<FirstAnimeProps> = ({}) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline();

      tl.from(".animation-circle-first", {
        scale: 0,
      })
        .from(".animation-line", {
          attr: { y2: -1 },
        })
        

      ScrollTrigger.create({
        animation: tl,
        trigger: ".animation-container",
        end: "center top+=400",
        start: "top bottom",
        markers: true,
        scrub: 3,
      });
    });

    return () => ctx.revert();
  });

  return (
    <div className="first-anime">
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className="animation-circle-first"
      >
        <circle cx="50" cy="50" r="48.5" />
      </svg>

      <svg width="3" height="595" viewBox="0 0 3 595" className="line">
        <line
          x1="1.5"
          y1="0"
          x2="1.49997"
          y2="595"
          className="animation-line"
        />
      </svg>

      <svg
        id="Layer_1"
        className="animation-layout"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 712.89"
      >
        <path
          className="cls-1"
          d="M1600,1127.88c-236.08,0-229-128.84-229-128.84V625.5c0-131-134.59-137.15-134.59-137.15H1129c-52.88,0-49.23,48.69-49.23,48.69V829.5c0,84-82.91,82-82.91,82H481.26c-90,0-119.81,51-119.81,118.5s-18.2,118-118.8,117.51c-108.68-.54-107.18-106-107.18-106v-255c0-47,43.22-42.75,43.22-42.75l111-.74s119.3-2,118.8-117.5c-.59-135-109.2-129-109.2-129H0"
          transform="translate(0 -435.62)"
        />
        <path
          className="cls-2"
          d="M135.48,791.92c-3-8.15-12.49-19.42-20.8-27.63S95,746.75,86.79,743.73c8.23-3,19.6-12.35,27.89-20.55s17.76-19.49,20.8-27.64c3.05,8.15,12.5,19.42,20.8,27.64s19.66,17.53,27.9,20.55c-8.24,3-19.61,12.36-27.9,20.56S138.53,783.77,135.48,791.92Z"
          transform="translate(0 -435.62)"
        />
        <path
          d="M135.48,698.11c3.74,8,12.12,17.89,20.1,25.78s18,16.14,26,19.84c-8,3.71-18,12-26,19.85s-16.36,17.81-20.1,25.77c-3.73-8-12.12-17.89-20.09-25.77s-18-16.14-26-19.85c8-3.7,18-12,26-19.84s16.36-17.82,20.09-25.78m0-7.26c0,13.8-39.51,52.88-53.46,52.88,14,0,53.46,39.08,53.46,52.88,0-13.8,39.52-52.88,53.46-52.88-13.94,0-53.46-39.08-53.46-52.88Z"
          transform="translate(0 -435.62)"
        />
        <path
          className="cls-2"
          d="M1079.81,536.69c-3-8.15-12.5-19.42-20.8-27.63s-19.66-17.54-27.89-20.56c8.23-3,19.6-12.36,27.89-20.56s17.76-19.48,20.8-27.63c3,8.15,12.5,19.42,20.8,27.63s19.66,17.54,27.9,20.56c-8.24,3-19.61,12.36-27.9,20.56S1082.85,528.54,1079.81,536.69Z"
          transform="translate(0 -435.62)"
        />
        <path
          d="M1079.81,442.88c3.74,8,12.12,17.89,20.1,25.78s18,16.14,26,19.84c-8,3.7-18,12-26,19.84s-16.36,17.82-20.1,25.78c-3.74-8-12.12-17.89-20.09-25.78s-18-16.14-26-19.84c8-3.7,18-12,26-19.84s16.35-17.82,20.09-25.78m0-7.26c0,13.8-39.52,52.88-53.46,52.88,13.94,0,53.46,39.08,53.46,52.88,0-13.8,39.52-52.88,53.46-52.88-13.94,0-53.46-39.08-53.46-52.88Z"
          transform="translate(0 -435.62)"
        />
        <ellipse className="cls-2" cx="1371" cy="347.88" rx="38.94" ry="38.5" />
        <path
          d="M1371,746c20.91,0,37.93,16.82,37.93,37.5s-17,37.5-37.93,37.5-37.94-16.82-37.94-37.5,17-37.5,37.94-37.5m0-2a39.5,39.5,0,1,0,39.93,39.5A39.72,39.72,0,0,0,1371,744Z"
          transform="translate(0 -435.62)"
        />
        <ellipse className="cls-2" cx="800" cy="474.88" rx="38.94" ry="38.5" />
        <path
          d="M800,873c20.92,0,37.94,16.82,37.94,37.5S820.92,948,800,948s-37.94-16.82-37.94-37.5S779.08,873,800,873m0-2a39.5,39.5,0,1,0,39.94,39.5A39.72,39.72,0,0,0,800,871Z"
          transform="translate(0 -435.62)"
        />
      </svg>
      <div className="animation-text">
        <h1>Manage Workflow</h1>
        <p>Track samples and manage your runs with manual or automated LIMS</p>
      </div>
    </div>
  );
};

export default FirstAnime;
