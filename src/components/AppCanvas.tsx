import { chakra } from "@chakra-ui/system";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Suspense } from "react";

import { CameraControls } from "./CameraControls";
import { FlexCompass } from "./FlexCompass";

export const AppCanvas = () => {
  return (
    <>
      <Canvas gl={{ antialias: false }}>
        <axesHelper />
        <CameraControls />
        <ambientLight />
        <Suspense fallback={null}>
          <mesh>
            <boxGeometry />
            <meshStandardMaterial attach="material" color="blue" />
            <FlexCompass />
          </mesh>
        </Suspense>
      </Canvas>
      <chakra.div pos="absolute" top="0" right="0">
        <Leva fill hideCopyButton />
      </chakra.div>
    </>
  );
};
