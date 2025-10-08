// src/components/sections/ProjectsSection/ProjectsSection.tsx
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        title: 'E-commerce Platform - toko Distro Gatot',
        description: 'A full-stack e-commerce solution with user authentication, product catalog, shopping cart',
        image: 'TokoDistro.png',
        technologies: ['Codeigniter3', 'PHP', 'SQL','CSS'],
        githubLink: 'https://github.com/AzizRizqi/TokoDistroGatot',
        
    },
    {
        id: 2,
        title: 'Movie App',
        description: 'A real-time chat application featuring direct messaging, group chats, and user presence indicators.',
        image: 'movie-app.jpeg',
        technologies: ['Next.js', 'vercel', 'expo', 'TailwindCSS'],
        githubLink: 'https://github.com/AzizRizqi/movie-app',
        liveLink: 'https://drive.google.com/drive/folders/1Zr2TcJB4Ee_dJmp_mh01ia2wmYuGaVQB?usp=sharing',
    },
    {
        id: 3,
        title: 'pos-laravel',
        description: 'An intuitive task management system with drag-and-drop functionality, due dates, and collaboration features.',
        image: 'pos-laravel.png',
        technologies: ['laravel', 'php', 'SQL','JavaScript','CSS'],
        githubLink: 'https://github.com/AzizRizqi/pos-laravel',
    },
];

const ProjectsSection: React.FC = () => {
    return (
        <section id="projects" className="py-20 px-4 container mx-auto text-center">
            <h2
                className="text-4xl font-bold mb-12 gradient-text"
                data-aos="fade-up"
            >
                My Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-slate-800 rounded-lg shadow-xl overflow-hidden border border-slate-700 transform transition-transform duration-300 hover:scale-105"
                        data-aos="fade-up"
                        data-aos-delay={project.id * 100}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-50 object-cover object-center"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                            <p className="text-white/70 text-base mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-6 justify-center">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-slate-700 text-white text-xs px-3 py-1 rounded-full font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-center gap-4">
                                {project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition-colors duration-300"
                                    >
                                        <FaGithub className="mr-2" /> GitHub
                                    </a>
                                )}
                                {project.liveLink && (
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-colors duration-300"
                                    >
                                        <FaExternalLinkAlt className="mr-2" /> Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;