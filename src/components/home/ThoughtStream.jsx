import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../assets/styles/ThoughtStream.css';

const focusThoughts = [
    "Life is Good.",
    "Weather is Crazy",
    "We should automate ",
    "Break the pattern."
];

const hyperThoughts = [
    "Deadline Approaching.",
    "F O C U S",
    "Change the rules",
    "Rewrite in Rust?",
    "Add AI layer.",
    "Parallelize the workflow.",
    "Break the pattern."
];

const ThoughtStream = ({ mode }) => {
    const [thoughtsBuffer, setThoughtsBuffer] = useState([]);
    const thoughts = mode === 'hyper' ? hyperThoughts : focusThoughts;

    useEffect(() => {
        // Clear buffer on mode change to avoid context mismatch
        setThoughtsBuffer([]);

        const addThought = () => {
            const random = thoughts[Math.floor(Math.random() * thoughts.length)];
            setThoughtsBuffer(prev => {
                const newBuffer = [random, ...prev];
                return newBuffer.slice(0, 4); // Keep only last 4
            });
        };

        // Initial thought
        addThought();

        const interval = setInterval(addThought, 3000); // Faster updates for stream effect

        return () => clearInterval(interval);
    }, [mode, thoughts]);

    return (
        <div className="thought-stream">
            <div className="stream-label">[THOUGHT STREAM]</div>
            <div className="stream-container">
                <AnimatePresence>
                    {thoughtsBuffer.map((thought, index) => (
                        <motion.div
                            key={`${mode}-${index}-${thought}`}
                            initial={{ opacity: 0, y: -20, height: 0 }}
                            animate={{ opacity: 1 - (index * 0.2), y: 0, height: 'auto' }} // Fade out older thoughts
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            className="stream-content"
                            style={{
                                fontSize: `${1.0 - (index * 0.1)}rem`, // Slightly smaller base size
                                fontWeight: index === 0 ? 'bold' : 'normal',
                                color: index === 0 ? '#fff' : 'rgba(255,255,255,0.6)'
                            }}
                        >
                            &gt; {thought}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ThoughtStream;
