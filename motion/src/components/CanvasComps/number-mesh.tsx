import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera } from "@react-three/drei";
import { Mesh } from "three";
import { FC, Ref } from "react";

interface MachineProps {
  machineRef: Ref<Mesh>;
}

export const SceneMesh: FC<MachineProps> = ({ machineRef, ...props }) => {

  const { nodes, materials } = useSpline(
    "https://prod.spline.design/LgzlHFhdPkBFudR5/scene.splinecode"
  );
  return (
    <>
      <color attach="background" args={["#140416"]} />
      <group {...props} dispose={null}>
        <mesh
          ref={machineRef}
          name="Plane"
          geometry={nodes.Plane.geometry}
          material={materials["Plane Material"]}
          castShadow
          receiveShadow
          position={[-1.49, -5.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.5}
        />
        <OrthographicCamera
          name="1"
          makeDefault={true}
          zoom={0.81}
          far={100000}
          near={-100000}
          position={[493.3, 524.63, 693.84]}
          rotation={[-0.65, 0.52, 0.36]}
          scale={1}
        />
        <hemisphereLight
          name="Default Ambient Light"
          intensity={0.75}
          color="rgb(68, 40, 72)"
        />
      </group>
    </>
  );
};
