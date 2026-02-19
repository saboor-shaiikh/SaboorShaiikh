import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Torus, MeshDistortMaterial } from '@react-three/drei';

const NeuralReactor = ({ mode }) => {
    const coreRef = useRef();
    const ringRef = useRef();

    useFrame((state, delta) => {
        if (coreRef.current) {
            coreRef.current.rotation.y += delta * (mode === 'hyper' ? 0.5 : 0.2);
            coreRef.current.rotation.x += delta * (mode === 'hyper' ? 0.2 : 0.05);
        }
        if (ringRef.current) {
            ringRef.current.rotation.z -= delta * (mode === 'hyper' ? 0.4 : 0.1);
            ringRef.current.rotation.x += delta * (mode === 'hyper' ? 0.1 : 0.02);
        }
    });

    return (
        <group scale={1.0}> {/* Scaled back up a bit */}
            {/* Core Neural Sphere */}
            <Sphere ref={coreRef} args={[1, 64, 64]}>
                <MeshDistortMaterial
                    color={mode === 'hyper' ? "#ff0000" : "#b8ffc9"} // Greenish tint in focus
                    emissive={mode === 'hyper' ? "#bd0000" : "#001a05"} // Subtle green glow
                    distort={0.45} // Locked distortion to prevent size jump
                    speed={mode === 'hyper' ? 10 : 2} // Intense speed in hyper
                    roughness={0.2}
                    metalness={0.8}
                    wireframe={true}
                />
            </Sphere>

            <Sphere args={[0.8, 32, 32]}>
                <meshBasicMaterial color={mode === 'hyper' ? "#ff0000" : "#13d641ff"} transparent opacity={0.1} />
            </Sphere>

            {/* Orbiting Ring */}
            <Torus ref={ringRef} args={[1.5, 0.02, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
                <meshStandardMaterial
                    color="#ffffff"
                    emissive="#ffffff"
                    emissiveIntensity={2}
                    roughness={0}
                    metalness={1}
                />
            </Torus>
        </group>
    );
};

export default NeuralReactor;
