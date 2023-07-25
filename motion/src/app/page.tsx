import Banner from "@/components/HomeComps/Banner";
import BubbleGrid from "@/components/HomeComps/BubbleGrid";
import Info from "@/components/HomeComps/Info";
import Intro from "@/components/HomeComps/Intro";
import "../styles/Home.scss";
import InfoAnimation from "@/components/HomeComps/InfoAnimation";
import HomeWrapper from "@/components/HomeComps/HomeWrapper";

import { currentUser } from "@clerk/nextjs";
import Navbar from "@/components/HomeComps/Navbar";

export default async function Home() {
  const user = await currentUser();

  return (
    <>
      <Navbar user={user} />
      <div className="home-container">
        <HomeWrapper />
        <Intro />
        <Info />
        <Banner />
        <BubbleGrid />
        <InfoAnimation />
      </div>
    </>
  );
}
