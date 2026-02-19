import React from 'react';
import { motion } from 'framer-motion';
import '../../assets/styles/StickyNotes.css';

const notes = [
    { text: "What if this was 3D?", x: "10%", y: "15%" },
    { text: "Automate this.", x: "80%", y: "25%" },
    { text: "Optimize again.", x: "15%", y: "60%" },
    { text: "Ship it.", x: "75%", y: "70%" },
    { text: "Refactor later?", x: "5%", y: "85%" },
    { text: "There’s always a better architecture.", x: "60%", y: "10%" }
];

const StickyNotes = ({ mode }) => {
    return (
        <div className="sticky-notes-container">
            {notes.map((note, index) => (
                <motion.div
                    key={index}
                    className="sticky-note"
                    style={{ left: note.x, top: note.y }}
                    animate={
                        mode === 'hyper'
                            ? {
                                x: [0, Math.random() * 10 - 5, 0],
                                y: [0, Math.random() * 10 - 5, 0],
                            }
                            : { x: 0, y: 0 }
                    }
                    transition={{
                        repeat: mode === 'hyper' ? Infinity : 0,
                        duration: 2 + Math.random(),
                        ease: "easeInOut"
                    }}
                >
                    {note.text}
                </motion.div>
            ))}
        </div>
    );
};

export default StickyNotes;
