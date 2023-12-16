import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";

export const Experience = () => {
    const boxRef = useRef();

    useFrame((state, delta) => {
        boxRef.current.rotation.y += 0.01;
    });

    return (
        <>
            <Box ref={boxRef} args={[1, 1, 1]} rotation={[0.5, 0, 0]}>
                <meshNormalMaterial />
            </Box>
            <ambientLight />
        </>
    );
};