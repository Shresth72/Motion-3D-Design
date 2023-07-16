import { Canvas } from "@react-three/fiber";
import { SceneMesh } from "./MachineMesh";
import { FC, Ref } from "react";
import { Mesh } from "three";

interface SceneProps {
  machineRef: Ref<Mesh>;
}

const Scene: FC<SceneProps> = ({ machineRef }) => {
  return (
    <div className="machine">
      <Canvas>
        <SceneMesh machineRef={machineRef} />
        {/* <OrbitControls enableZoom={false} /> */}
      </Canvas>
    </div>
  );
};

export default Scene;
