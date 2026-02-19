import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../assets/styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    SABOOR.OS
                </div>
                <div className="navbar-links-desktop">
                    <a href="/">HOME</a>
                    <a href="/about">ABOUT</a>
                    <a href="/projects">PROJECTS</a>
                    <a href="/contact">CONTACT</a>
                </div>
                <div className="navbar-toggle" onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="navbar-mobile-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                    >
                        <a href="/" onClick={toggleMenu}>HOME</a>
                        <a href="/about" onClick={toggleMenu}>ABOUT</a>
                        <a href="/projects" onClick={toggleMenu}>PROJECTS</a>
                        <a href="/contact" onClick={toggleMenu}>CONTACT</a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
