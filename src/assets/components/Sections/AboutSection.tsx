// src/components/sections/AboutSection/AboutSection.tsx
import React from 'react';
import { FaUser, FaLaptopCode, FaGlobe } from 'react-icons/fa';


const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-20 px-4 container mx-auto text-center">
            <h2
                className="text-4xl font-bold mb-12 gradient-text"
                data-aos="fade-up"
            >
                About Me
            </h2>

            <div className="max-w-5xl mx-auto">
                <p
                    className="text-lg md:text-xl text-center leading-relaxed text-white/80 mb-16 max-w-4xl mx-auto"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Hello! I'm Aziz Rizqi, a Developer with a strong interest in website and mobile application development. My journey began with a curiosity about how the web works, which soon evolved into a deep drive to build responsive and dynamic digital experiences, manage robust network infrastructures, and explore the frontiers of AI and Web3.
                </p>

                <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    {/* Card 1: Who I Am */}
                    <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/10 text-center transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="inline-block bg-purple-500/20 p-4 rounded-full mb-4">
                            <FaUser className="text-purple-400 text-4xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Who I Am</h3>
                        <p className="text-white/70 text-base">
                            A dedicated developer with a strong focus on user experience and practical, elegant solutions.
                        </p>
                    </div>

                    {/* Card 2: What I Do */}
                    <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/10 text-center transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="inline-block bg-sky-500/20 p-4 rounded-full mb-4">
                            <FaLaptopCode className="text-sky-400 text-4xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">What I Do</h3>
                        <p className="text-white/70 text-base">
                            I build full-stack applications, from responsive UIs to robust APIs, and manage network infrastructures.
                        </p>
                    </div>

                    {/* Card 3: My Philosophy */}
                    <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/10 text-center transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="inline-block bg-pink-500/20 p-4 rounded-full mb-4">
                            <FaGlobe className="text-pink-400 text-4xl" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">My Philosophy</h3>
                        <p className="text-white/70 text-base">
                            To build digital solutions with purpose, combining technology, creativity, and a relentless passion for learning.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;