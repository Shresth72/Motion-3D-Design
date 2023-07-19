import Banner from "@/components/HomeComps/Banner";
import BubbleGrid from "@/components/HomeComps/BubbleGrid";
import Info from "@/components/HomeComps/Info";
import Intro from "@/components/HomeComps/Intro";

import "../styles/Home.scss";
import InfoAnimation from "@/components/HomeComps/InfoAnimation";
import HomeWrapper from "@/components/HomeComps/HomeWrapper";

export default function Home() {
  return (
    <div className="home-container">
      <HomeWrapper />
      <Intro />
      <Info />
      <Banner />
      <BubbleGrid />
      <InfoAnimation />
    </div>
  );
}
