// src/components/Navbar/Navbar.tsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import GradientText from '../GradientText/GradientText';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-slate-900 bg-opacity-80 backdrop-blur-md z-50 shadow-lg">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold">
                    
                    <GradientText
                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="custom-class"
                    >
                        Aziz Rizqi
                    </GradientText>
                </a>

                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-white hover:text-purple-500 transition-colors duration-300 relative group"
                        >
                            {link.name}
                            <span className="absolute left-0 bottom-0 h-0.5 bg-purple-500 w-0 group-hover:w-full transition-all duration-300"></span>
                        </a>
                    ))}
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            <div
                className={`md:hidden bg-slate-800 bg-opacity-95 backdrop-blur-md transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
            >
                <div className="flex flex-col items-center space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-white text-lg hover:text-purple-500 transition-colors duration-300 py-2 w-full text-center"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;