// src/components/Footer/Footer.tsx
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 py-10 px-4 text-center text-white/70">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:justify-between md:space-y-0">
                    <p className="text-sm">
                        &copy; {currentYear} Aziz Rizqi. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a
                            href="https://github.com/AzizRizqi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-white transition-colors duration-300"
                        >
                            <FaGithub className="w-6 h-6" />
                        </a>
                        <a
                            href="https://linkedin.com/in/AzizRizqi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-white transition-colors duration-300"
                        >
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="https://twitter.com/AzizRizqi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-white transition-colors duration-300"
                        >
                            <FaTwitter className="w-6 h-6" />
                        </a>
                    </div>
                </div>
                <p className="mt-6 text-xs text-white/50">
                    Made with <span className="text-red-500">&hearts;</span> and{' '}
                    <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-400">React</a>,{' '}
                    <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-cyan-400">Tailwind CSS</a>, and{' '}
                    <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer" className="hover:underline text-purple-400">Vite</a>.
                </p>
            </div>
        </footer>
    );
};

export default Footer;