import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Stars } from '@react-three/drei';
import NeuralReactor from './NeuralReactor';
import StickyNotes3D from './StickyNotes3D';
import '../../assets/styles/HeroScene.css';

const HeroScene = ({ mode }) => {
    return (
        <div className="hero-scene-container">
            <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <NeuralReactor mode={mode} />
                    <StickyNotes3D mode={mode} />
                    <Environment preset="city" />
                    {mode === 'hyper' && (
                        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                    )}
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate={mode === 'idle'} autoRotateSpeed={0.5} />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default HeroScene;
