import React, { Suspense, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, Stars } from '@react-three/drei';
import NeuralReactor from './NeuralReactor';
import StickyNotes3D from './StickyNotes3D';
import '../../assets/styles/HeroScene.css';

const ResponsiveCamera = () => {
    const { camera, size } = useThree();
    const width = size.width;

    useEffect(() => {
        const isMobile = width < 768;
        // Move camera back on mobile to fit the object
        const targetZ = isMobile ? 9 : 6;

        camera.position.z = targetZ;
        camera.updateProjectionMatrix();
    }, [camera, width]); // Only depend on width to avoid unnecessary resets on unrelated re-renders

    return null;
};

const HeroScene = ({ mode }) => {
    return (
        <div className="hero-scene-container">
            <div className="neural-heading">Page frames Inside Brain</div>
            <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
                <Suspense fallback={null}>
                    <ResponsiveCamera />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <NeuralReactor mode={mode} />
                    <StickyNotes3D mode={mode} />
                    <Environment preset="city" />
                    {mode === 'hyper' && (
                        <Stars radius={100} depth={50} count={10000} factor={7} saturation={0} fade speed={2} />
                    )}
                    {/* Disable autoRotate to prevent fighting with user input */}
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default HeroScene;
