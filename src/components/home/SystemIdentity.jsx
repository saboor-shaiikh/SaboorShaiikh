import React from 'react';
import { motion } from 'framer-motion';
import '../../assets/styles/SystemIdentity.css';

const SystemIdentity = () => {
    return (
        <motion.div
            className="system-identity"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
        >
            <div className="identity-header">SYSTEM PROFILE</div>
            <div className="identity-content">
                <div className="identity-row">
                    <span className="label">Name:</span>
                    <span className="value">Abdul-Saboor Ahmad</span>
                </div>
                <div className="identity-row">
                    <span className="label">Classification:</span>
                    <span className="value">Final Year CS Engineer</span>
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
                “I don’t build pages. I design interactive systems that behave, evolve, and perform.”
            </div>
        </motion.div>
    );
};

export default SystemIdentity;
