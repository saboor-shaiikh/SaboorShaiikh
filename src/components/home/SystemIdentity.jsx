import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../../assets/styles/SystemIdentity.css';

const SystemIdentity = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        // Only toggle on mobile (check width or just CSS pointer events?)
        // easier to just toggle state and let CSS handle the visual change via media query
        if (window.innerWidth < 900) {
            setIsExpanded(!isExpanded);
        }
    };

    return (
        <motion.div
            className={`system-identity ${isExpanded ? 'expanded' : ''}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            onClick={toggleExpand}
        >
            <div className="identity-header">
                SYSTEM PROFILE
                <div className="mobile-hint">[TAP]</div>
            </div>

            <div className="identity-content">
                <div className="identity-row">
                    <span className="label">Name:</span>
                    <span className="value"><b>Abdul Saboor</b></span>
                </div>
                <div className="identity-row">
                    <span className="label">Classification:</span>
                    <span className="value"><span className="status-alert">Final Year</span> CS Engineer</span>
                </div>
                <div className="identity-row">
                    <span className="label">Current State:</span>
                    <span className="value">Building systems, breaking patterns</span>
                </div>
                <div className="identity-row">
                    <span className="label">Primary Stack:</span>
                    <span className="value">React / Three.js / Node</span>
                </div>
                <div className="identity-row">
                    <span className="label">Secondary Stack:</span>
                    <span className="value">C++ / Databases / Automation</span>
                </div>
                <div className="identity-row">
                    <span className="label">Interest Layer:</span>
                    <span className="value">AI Workflows & Intelligent Interfaces</span>
                </div>
                <div className="identity-row">
                    <span className="label">Operational Mode:</span>
                    <span className="value">Creative Systems Architect</span>
                </div>
            </div>

            <div className="identity-footer">
                "I don't build pages. I design interactive systems that behave, evolve, and perform."
            </div>

            {isExpanded && <div className="close-hint">[TAP TO CLOSE]</div>}
        </motion.div>
    );
};

export default SystemIdentity;
