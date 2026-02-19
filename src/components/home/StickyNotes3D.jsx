import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import '../../assets/styles/StickyNotes.css';

const focusThoughts = [
    "Did I lock the front door?",
    "Need more caffeine. Send help.",
    "Did I actually reply, or did I just type it in my head?",
    "Life is Good.",
    "Stop staring at the ....., Captain.",
    "Is it hot in here or is it just the CPU?",
    "what if?",
    "Simplicity is the ultimate flex."
];

const hyperThoughts = [
    "I am a genius. Wait, nevermind.",
    "where is logo.png, ahhhhhh",
    "Sleep is for people without internet.",
    "I can taste the electricity.",
    "What if I just... moved to the mountains?",
    "My brain has too many extensions installed.",
    "Wait, what day is it?",
    "47 tabs open. No regrets, just pure, unadulterated adrenaline.",
    "Living life at 2x speed.",
    "Deadline,Deadline, Deadline"
];

const StickyNoteItem = ({ text, position, mode, delay }) => {
    return (
        <Html position={position} center transform={false} distanceFactor={10}>
            <motion.div
                className="sticky-note-3d"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -5, 0] // Subtle movement
                }}
                transition={{
                    opacity: { duration: 0.5, delay },
                    scale: { duration: 0.5, delay },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay }
                }}
            >
                {text}
            </motion.div>
        </Html>
    );
};

const StickyNotes3D = ({ mode }) => {
    const groupRef = useRef();

    const notes = useMemo(() => {
        const thoughts = mode === 'hyper' ? hyperThoughts : focusThoughts;
        const radius = 1.3; // Fixed radius for stability

        return thoughts.map((text, i) => {
            // Golden Angle for even distribution on a sphere surface approximation
            // This prevents bunching/overlap better than random
            const phi = Math.acos(-1 + (2 * i) / thoughts.length);
            const theta = Math.sqrt(thoughts.length * Math.PI) * phi;

            const x = radius * Math.cos(theta) * Math.sin(phi);
            const y = radius * Math.cos(phi);
            const z = radius * Math.sin(theta) * Math.sin(phi);

            return { text, position: [x, y, z] };
        });
    }, [mode]);

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Very slow idle rotation for the whole group
            groupRef.current.rotation.y += delta * 0.05;
        }
    });

    return (
        <group ref={groupRef}>
            {notes.map((note, i) => (
                <StickyNoteItem
                    key={`${mode}-${i}`} // Re-mount on mode change
                    text={note.text}
                    position={note.position}
                    mode={mode}
                    delay={i * 0.2}
                />
            ))}
        </group>
    );
};

export default StickyNotes3D;
