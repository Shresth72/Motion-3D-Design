"use client"

import { useFrame } from "@react-three/fiber";
import { FC, useRef } from "react";
import { Mesh } from "three";

interface SpheresProps {
  args: [radius: number, widthSegments: number, heightSegments: number];
  color: string;
  wireframe?: boolean;
  roughness?: number;
  metalness?: number;
  name: string;
}

const SphereGeomentry: FC<SpheresProps> = ({
  args,
  color,
  wireframe,
  roughness,
  metalness,
  name,
}) => {
  const sphereRef = useRef<Mesh>(null!);

  useFrame((_state, delta) => {
    if (name === "wireFrame") {
      sphereRef.current.rotation.y += delta;
      sphereRef.current.rotation.x = 0.65;
    }
  });

  return (
    <mesh scale={1} ref={sphereRef}>
      <sphereGeometry args={args} />
      <meshPhysicalMaterial
        color={color}
        wireframe={wireframe}
        roughness={roughness}
        metalness={metalness}
      />
    </mesh>
  );
};

export default SphereGeomentry;
