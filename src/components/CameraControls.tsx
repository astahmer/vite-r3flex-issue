import { extend, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

export const CameraControls = () => {
    const {
        camera,
        gl: { domElement },
    } = useThree();

    const controls = useRef(null);
    useFrame(() => {
        controls.current.update();
    });

    return (
        //@ts-ignore
        <orbitControls
            ref={controls}
            args={[camera, domElement]}
            enableZoom={true}
            maxPolarAngle={Math.PI}
            minPolarAngle={0}
        />
    );
};
