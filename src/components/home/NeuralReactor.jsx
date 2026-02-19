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
        <group scale={0.8}>
            {/* Core Neural Sphere */}
            <Sphere ref={coreRef} args={[1, 64, 64]}>
                <MeshDistortMaterial
                    color={mode === 'hyper' ? "#ff0000" : "#ffffff"} // Reacts to mode
                    emissive={mode === 'hyper' ? "#bd0000" : "#000000"}
                    distort={0.4}
                    speed={mode === 'hyper' ? 4 : 1.5}
                    roughness={0.2}
                    metalness={0.8}
                    wireframe={true}
                />
            </Sphere>

            {/* Inner Glow Sphere */}
            <Sphere args={[0.8, 32, 32]}>
                <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
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
