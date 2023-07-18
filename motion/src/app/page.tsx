import SphereCanvas from '@/components/Canvas/SphereCanvas'
import Banner from '@/components/HomeComps/Banner'
import BubbleGrid from '@/components/HomeComps/BubbleGrid'
import Info from '@/components/HomeComps/Info'
import Intro from '@/components/HomeComps/Intro'

import "../styles/Home.scss"
import InfoAnimation from '@/components/HomeComps/InfoAnimation'

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <div className="header">Research</div>
        {/* <SphereCanvas className={"canvas"} /> */}
      </div>
      <Intro />
      <Info />
      <Banner />
      <BubbleGrid />
      <InfoAnimation />
    </div>
  )
}
