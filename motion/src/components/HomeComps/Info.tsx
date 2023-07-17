"use client"

import { useEffect } from "react";
import { data } from "../../constants/info";
import { gsap } from "gsap";
import "../../styles/Home.scss";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Info = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.defaults({ duration: 2 });

      // gsap.to(".info-container", {
      //   y: -900,
      //   scrollTrigger: {
      //     trigger: ".intro-container",
      //     start: "clamp(bottom-=300 bottom)",
      //     scrub: 1,
      //   },
      // });
    });

    return () => ctx.revert();
  });

  return (
    <div className="info-container">
      <div className="wrapper">
        <h1>Cicada XI Series</h1>
        <div className="list">
          {data.map((info) => (
            <div key={info.id}>
              <p>{info.title}</p>
              <h2>{info.storage}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
