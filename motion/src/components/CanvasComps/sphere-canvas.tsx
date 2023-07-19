"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FC } from "react";

import SphereGeomentry from "./sphere-geometry";

interface SphereProps {
  className: string;
}

const SphereCanvas: FC<SphereProps> = ({ className }) => {
  return (
    <Canvas className={className} camera={{ fov: 25 }}>
      <ambientLight />
      <pointLight position={[40, 40, 40]} intensity={8} />
      <SphereGeomentry
        name="wireFrame"
        args={[1, 12, 12]}
        wireframe
        color="#0b050c"
      />
      {/* <SphereGeomentry
        name="ball"
        args={[0.4, 40, 40]}
        roughness={0.03}
        color="#8a7596"
        metalness={0.7}
      /> */}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default SphereCanvas;
