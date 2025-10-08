// src/components/sections/SkillsSection/SkillsSection.tsx
import React from 'react';
import { SiReact, SiTypescript, SiNodedotjs, SiMongodb, SiNextdotjs, SiFigma, SiHtml5, SiCss3, SiJavascript, SiMysql, SiPhp, SiLaravel, SiCodeigniter } from 'react-icons/si';
import { FaNetworkWired } from 'react-icons/fa';
import LogoLoop from '../LogoLoop/logo-loop';

// Daftar ikon untuk ditampilkan di LogoLoop
const skillIcons = [
    SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTypescript,
    SiNodedotjs, SiPhp, SiLaravel, SiCodeigniter, SiMysql, SiMongodb,
    SiFigma, FaNetworkWired
];

const SkillsSection: React.FC = () => {
    return (
        <section id="skills" className="py-20 px-4 container mx-auto" data-aos="fade-up">
            <h2
                className="text-4xl font-bold mb-12 text-center gradient-text"
            >
                My Skills
            </h2>
            <div className="relative">
                <LogoLoop icons={skillIcons} />
            </div>
        </section>
    );
};

export default SkillsSection;