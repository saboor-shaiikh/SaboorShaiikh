import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import BootLoader from '../components/home/BootLoader';
import HeroScene from '../components/home/HeroScene';
import SystemIdentity from '../components/home/SystemIdentity';
import MetricsGrid from '../components/home/MetricsGrid';
import MicroLogs from '../components/home/MicroLogs';
// StickyNotes removed from 2D overlay, now in 3D scene
import ModeToggle from '../components/home/ModeToggle';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [mode, setMode] = useState('idle'); // 'idle' or 'hyper'

    const handleBootComplete = () => {
        setIsLoading(false); // Should be false
    };

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', background: '#000' }}>
            <AnimatePresence>
                {isLoading && <BootLoader onComplete={handleBootComplete} />}
            </AnimatePresence>

            {!isLoading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    style={{ width: '100%', height: '100%' }}
                >
                    <Navbar />

                    <HeroScene mode={mode} />

                    <SystemIdentity />
                    <MetricsGrid />
                    <MicroLogs />
                    <ModeToggle mode={mode} setMode={setMode} />

                    <Footer />
                </motion.div>
            )}
        </div>
    );
};

export default Home;
