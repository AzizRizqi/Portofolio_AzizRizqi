// src/components/sections/HeroSection.tsx
import React from 'react';
import { FaGithub, FaLinkedin, FaChevronRight, FaDownload } from 'react-icons/fa';
import GooeyNav from '../GooeyNav/GooeyNav.tsx';

interface HeroSectionProps {
    profileImage: string;
}

const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

const HeroSection: React.FC<HeroSectionProps> = ({ profileImage }) => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center text-white overflow-hidden">
            {/* ✅ NavBar: fixed, transparan, selalu di atas */}
            <header className="fixed top-0 left-0 right-0 z-30 flex justify-center pt-8">
                <GooeyNav items={navItems} />
            </header>

            {/* Background Gradient Shapes */}
            <div className="absolute top-0 -left-1/4 w-full h-full bg-gradient-to-r from-violet-600/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 -right-1/4 w-full h-full bg-gradient-to-l from-pink-500/30 to-transparent rounded-full blur-3xl animate-pulse [animation-delay:-4s]"></div>

            <div className="container mx-auto px-4 z-10 mt-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column */}
                    <div className="text-center md:text-left">
                        <h1
                            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
                            data-aos="fade-right"
                        >
                            Hi, I'm <span className="gradient-text">Aziz Rizqi</span>
                        </h1>
                        <p
                            className="text-xl sm:text-2xl text-white/90 mb-4 font-light"
                            data-aos="fade-right"
                            data-aos-delay="200"
                        >
                            A Passionate <span className="font-semibold text-purple-400">Web Developer & IT Support</span>
                        </p>
                        <p
                            className="text-base sm:text-lg text-white/70 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed"
                            data-aos="fade-right"
                            data-aos-delay="400"
                        >
                            As a final-year student, I combine modern development tools with creative design to build amazing digital experiences and manage robust network infrastructures.
                        </p>

                        {/* Buttons */}
                        <div
                            className="flex flex-wrap justify-center md:justify-start gap-4 mb-8"
                            data-aos="fade-up"
                            data-aos-delay="600"
                        >
                            <a
                                href="#contact"
                                className="inline-flex items-center px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-violet-600 to-pink-500 shadow-lg hover:scale-105 transition-transform duration-300"
                            >
                                Contact Me <FaChevronRight className="ml-2 w-4 h-4" />
                            </a>
                            <a
                                href="/CV_AzizRizqi.pdf"
                                download="CV_AzizRizqi.pdf"
                                className="inline-flex items-center px-8 py-3 rounded-full font-semibold text-white border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
                            >
                                Download CV <FaDownload className="ml-2 w-4 h-4" />
                            </a>
                        </div>

                        {/* Social Links */}
                        <div
                            className="flex justify-center md:justify-start gap-6"
                            data-aos="fade-up"
                            data-aos-delay="800"
                        >
                            <a
                                href="https://github.com/AzizRizqi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/10 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 hover:bg-white/20"
                            >
                                <FaGithub className="w-6 h-6 text-white" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/aziz-rizqi-1b1b3a1b0/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/10 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 hover:bg-white/20"
                            >
                                <FaLinkedin className="w-6 h-6 text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="relative flex justify-center items-center" data-aos="fade-left">
                        <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
                            <div className="absolute inset-0 border-2 border-white/10 rounded-full animate-spin [animation-duration:10s]"></div>
                            <div className="w-full h-full rounded-full p-1 bg-gradient-to-br from-violet-600 to-pink-500 shadow-lg shadow-pink-500/20 hover:shadow-violet-500/40 transition-shadow duration-500">
                                <div className="w-full h-full bg-slate-800 rounded-full overflow-hidden">
                                    <img
                                        src={profileImage}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="absolute top-4 right-4 w-10 h-10 bg-sky-600 rounded-full border-4 border-slate-900 flex items-center justify-center">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
