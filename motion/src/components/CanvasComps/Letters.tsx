import { FC } from "react";
import { RGBELoader } from "three-stdlib";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  Center,
  Text3D,
  Instance,
  Instances,
  Environment,
  Lightformer,
  OrbitControls,
  RandomizedLight,
  AccumulativeShadows,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import { useControls, button } from "leva";

import Text from "./Text";

interface LettersProps {
//   letter: string;
}

const LetterModel: FC<LettersProps> = ({  }) => {
    const { autoRotate, text, shadow, ...config } = useControls({
        text: 'G',
        backside: true,
        backsideThickness: { value: 0.3, min: 0, max: 2 },
        samples: { value: 16, min: 1, max: 32, step: 1 },
        resolution: { value: 1024, min: 64, max: 2048, step: 64 },
        transmission: { value: 1, min: 0, max: 1 },
        clearcoat: { value: 0, min: 0.1, max: 1 },
        clearcoatRoughness: { value: 0.0, min: 0, max: 1 },
        thickness: { value: 0.3, min: 0, max: 5 },
        chromaticAberration: { value: 5, min: 0, max: 5 },
        anisotropy: { value: 0.3, min: 0, max: 1, step: 0.01 },
        roughness: { value: 0, min: 0, max: 1, step: 0.01 },
        distortion: { value: 0.5, min: 0, max: 4, step: 0.01 },
        distortionScale: { value: 0.1, min: 0.01, max: 1, step: 0.01 },
        temporalDistortion: { value: 0, min: 0, max: 1, step: 0.01 },
        ior: { value: 1.5, min: 0, max: 2, step: 0.01 },
        color: '#ff9cf5',
        gColor: '#ff7eb3',
        shadow: '#750d57',
        autoRotate: false,
      })
      return (
        <Canvas shadows orthographic camera={{ position: [10, 20, 20], zoom: 80 }} gl={{ preserveDrawingBuffer: true }}>
          <color attach="background" args={['#f2f2f5']} />
          {/** The text and the grid */}
          <Text config={config} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 2.25]}>
            {text}
          </Text>
          {/** Controls */}
          <OrbitControls
            autoRotate={autoRotate}
            autoRotateSpeed={-0.1}
            zoomSpeed={0.25}
            minZoom={40}
            maxZoom={140}
            enablePan={false}
            dampingFactor={0.05}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 3}
          />
          
        </Canvas>
      )
};

export default LetterModel;
