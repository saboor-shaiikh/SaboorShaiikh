import React from 'react';
import '../../assets/styles/ModeToggle.css';

const ModeToggle = ({ mode, setMode }) => {
    return (
        <div className="mode-toggle-container">
            <div className="mode-label">SYSTEM MODE</div>
            <div className="mode-buttons">
                <button
                    className={`mode-btn ${mode === 'idle' ? 'active' : ''}`}
                    onClick={() => setMode('idle')}
                >
                    [ FOCUS ]
                </button>
                <button
                    className={`mode-btn ${mode === 'hyper' ? 'active' : ''}`}
                    onClick={() => setMode('hyper')}
                >
                    [ HYPER ]
                </button>
            </div>
            <div className="mode-desc">
                {mode === 'idle' ? "Reduced motion. Stable architecture." : "Increased interaction density."}
            </div>
        </div>
    );
};

export default ModeToggle;
