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

      
    });

    return () => ctx.revert();
  });

  return (
    <div className="info-container">
      <div className="wrapper">
        <h1>Visual Storytelling</h1>
        <div className="list">
          {data.map((info) => (
            <div key={info.id}>
              <p>{info.storage}</p>
              <h2>{info.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
