import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../assets/styles/MicroLogs.css';

const logMessages = [
    "[INFO] Parallel thread execution active",
    "[DEBUG] Refactor thought initiated",
    "[WARN] Overthinking detected",
    "[INFO] Curiosity spike recorded",
    "[DEBUG] New idea buffering...",
    "[INFO] System stable under pressure",
    "[SYS] Rendering neural pathway...",
    "[NET] Connection established: 127.0.0.1",
    "[MEM] Garbage collection paused for creativity",
    "[GPU] Shader compilation successful"
];

const MicroLogs = () => {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomLog = logMessages[Math.floor(Math.random() * logMessages.length)];
            const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
            const newLog = `${timestamp} ${randomLog}`;

            setLogs(prev => {
                const updated = [...prev, newLog];
                if (updated.length > 8) return updated.slice(1);
                return updated;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="micro-logs">
            <AnimatePresence>
                {logs.map((log, index) => (
                    <motion.div
                        key={index} // Using index as key is acceptable here for simple rolling list
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 0.5, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="log-line"
                    >
                        {log}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default MicroLogs;
