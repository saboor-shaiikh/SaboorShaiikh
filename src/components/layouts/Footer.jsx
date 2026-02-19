import React from 'react';
import { Github, Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import '../../assets/styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a href="https://github.com/saboor-shaiikh" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/abdul-saboor6940" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin size={20} />
                </a>
                <a href="https://www.instagram.com/saboorshaiikh/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram size={20} />
                </a>
                <a href="mailto:saboorsheikh201@gmail.com" aria-label="Email">
                    <Mail size={20} />
                </a>
                <a href="tel:+923071199969" aria-label="Phone">
                    <Phone size={20} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
