import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../assets/styles/BootLoader.css';

const bootSequence = [
    "> Initializing SABOOR.OS",
    "> Allocating neural memory blocks...",
    "> Loading creative instability module...",
    "> Compiling system architecture...",
    "> Syncing frontend engines...",
    "> Calibrating 3D environment...",
    "> Stabilizing chaos engine...",
    "> Boot sequence complete."
];

const BootLoader = ({ onComplete }) => {
    const [lines, setLines] = useState([]);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let lineIndex = 0;
        const interval = setInterval(() => {
            if (lineIndex < bootSequence.length) {
                setLines(prev => [...prev, bootSequence[lineIndex]]);
                lineIndex++;
                setProgress(prev => Math.min(prev + 12, 100));
            } else {
                setProgress(100);
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 800);
            }
        }, 120); // Slightly faster typing speed

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            className="boot-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="terminal-window">
                {lines.map((line, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="terminal-line"
                    >
                        {line}
                    </motion.div>
                ))}
                <motion.div
                    className="cursor"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                >
                    _
                </motion.div>
            </div>

            <div className="progress-container">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                <div className="progress-text">SYSTEM LOAD: {Math.min(progress, 100)}%</div>
            </div>
        </motion.div>
    );
};

export default BootLoader;
