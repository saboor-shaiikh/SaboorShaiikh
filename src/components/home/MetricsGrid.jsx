import React from 'react';
import { motion } from 'framer-motion';
import '../../assets/styles/MetricsGrid.css';

const metrics = [
    { label: "Frontend Architecture", value: 92 },
    { label: "3D Interaction Systems", value: 88 },
    { label: "Automation Curiosity", value: 85 },
    { label: "Backend Logic", value: 78 },
    { label: "Business Strategy Layer", value: 83 },
    { label: "Creative Obsession", value: 96 }
];

const MetricsGrid = () => {
    return (
        <motion.div
            className="metrics-grid"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
        >
            {metrics.map((metric, index) => (
                <div key={index} className="metric-item">
                    <div className="metric-label">
                        <span>{metric.label}</span>
                        <span>{metric.value}%</span>
                    </div>
                    <div className="metric-bar-bg">
                        <motion.div
                            className="metric-bar-fill"
                            initial={{ width: 0 }}
                            animate={{ width: `${metric.value}%` }}
                            transition={{ delay: 1.5 + index * 0.1, duration: 1, ease: "easeOut" }}
                        />
                    </div>
                </div>
            ))}
            <div className="metrics-caption">
                “Metrics are self-evaluated. Performance validated in production.”
            </div>
        </motion.div>
    );
};

export default MetricsGrid;
