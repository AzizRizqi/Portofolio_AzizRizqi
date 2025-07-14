//src/App.tsx
import { useEffect, useState } from "react";
import { Github, ExternalLink, Play, Palette, Code, Smartphone, Mail, Linkedin, Instagram, Download, Star, GitFork, Eye, Users } from "lucide-react";
import "./App.css";
import ProfilePhoto from './assets/FotoProfile.jpeg';

const GITHUB_USERNAME = "AzizRizqi";


const FEATURED_REPOSITORIES = [
  "movie-app", 
  "Elearning-API",
  "E-learning-ziz",
  "WEB_PENDAFTARAN_AZIZ_PPKDJP",
  "pos-laravel",
  "card",
];

const FIGMA_PROJECTS = [
  "https://www.figma.com/design/YryEWR9Mrz8wpok7SPXzcJ/Untitled?node-id=0-1&t=RbuG4UpG8d7Qv1cq-1",
  "https://www.figma.com/design/QOCuKRHEm4BauWiLrf6YPY/Aziz-Rizqi_Mi23_UI-Ux_B?t=uHyUuy4q2ORevD5s-0",
  "https://www.figma.com/design/NQl87iJuFh0Z3BWGC6ldwx/Untitled?t=uHyUuy4q2ORevD5s-0",
  "https://www.figma.com/design/l14uapCvejURsXcWl7XBpw/AzizRizqi-FigmaDesain?t=uHyUuy4q2ORevD5s-0",
  "https://www.figma.com/design/MpHuza97dLrZA5sZ2reiBO/Untitled?t=uHyUuy4q2ORevD5s-0"
];

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  updated_at: string;
}

function App() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userStats, setUserStats] = useState({
    public_repos: 0,
    followers: 0,
    following: 0
  });

  useEffect(() => {
    const fetchRepositories = async () => {
      setIsLoading(true);
      try {
        const fetchedRepos: Repository[] = [];
        for (const repoName of FEATURED_REPOSITORIES) {
          const res = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}`);
          if (res.ok) {
            const data = await res.json();
            fetchedRepos.push(data);
          } else {
            console.error(`Failed to fetch repository: ${repoName}`);
          }
        }
        setRepos(fetchedRepos);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // Fetch user stats
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then(res => res.json())
      .then(data => {
        setUserStats({
          public_repos: data.public_repos,
          followers: data.followers,
          following: data.following
        });
      })
      .catch(() => { });

    fetchRepositories();
  }, []);

  const videoIds = [
    "cRWncsPndhs",
    "nhr02XQbcHg",
    "jg-mcSSg7uo",
    "_At32jeECHs"
  ];

  const skills = [
    { name: "React Native", level: 70, color: "from-blue-500 to-cyan-500" },
    { name: "React.js", level: 70, color: "from-purple-500 to-pink-500" },
    { name: "TypeScript", level: 50, color: "from-green-500 to-emerald-500" },
    { name: "UI/UX Design", level: 90, color: "from-pink-500 to-red-500" },
    { name: "Figma", level: 90, color: "from-indigo-500 to-purple-500" },
    // Menambahkan skill baru
    { name: "PHP", level: 80, color: "from-indigo-400 to-blue-400" },
    { name: "CodeIgniter", level: 75, color: "from-red-500 to-orange-500" },
    { name: "Mikrotik (Networking)", level: 85, color: "from-teal-500 to-green-500" },
    { name: "Database Admin", level: 75, color: "from-brown-500 to-gray-500" }
  ];

  const techStack = [
    { name: "React", icon: "⚛️", color: "from-blue-500 to-cyan-500" },
    { name: "TypeScript", icon: "📘", color: "from-blue-600 to-blue-800" },
    { name: "React Native", icon: "📱", color: "from-green-500 to-emerald-500" },
    { name: "Figma", icon: "🎨", color: "from-pink-500 to-red-500" },
    // Menambahkan tech stack baru
    { name: "PHP", icon: "🐘", color: "from-indigo-400 to-blue-400" },
    { name: "CodeIgniter", icon: "🔥", color: "from-red-500 to-orange-500" },
    { name: "Mikrotik", icon: "📡", color: "from-teal-500 to-green-500" }, // Ikon ini bisa disesuaikan
    { name: "MySQL", icon: "🗄️", color: "from-blue-700 to-blue-900" } // Contoh database, bisa diganti
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo">
              {GITHUB_USERNAME}
            </div>
            <div className="nav-links">
              <a href="#about" className="nav-link">About</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#videos" className="nav-link">videos</a>
              <a href="#designs" className="nav-link">Designs</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        {/* Animated Background */}
        <div className="hero-bg">
          <div className="bg-orb bg-orb-1"></div>
          <div className="bg-orb bg-orb-2"></div>
          <div className="bg-orb bg-orb-3"></div>
          <div className="bg-orb bg-orb-4"></div>
        </div>

        <div className="hero-content">
          {/* Profile Image */}
          <div className="profile-section">
            <div className="profile-ring">
              <div className="profile-inner">
                <img src={ProfilePhoto} alt="Foto Profil Anda" className="profile-image" />
              </div>
            </div>
            <div className="status-indicator">
              <div className="status-ping"></div>
            </div>
          </div>

          <h1 className="hero-title">
            <span className="gradient-text">
              Hi, I'm Aziz Rizqi
            </span>
          </h1>

          <p className="hero-subtitle">
            Programmer, UI Designer, IT Support
          </p>

          <div className="hero-description">
            Creating beautiful mobile experiences with React Native and designing intuitive interfaces with Figma. Supported by modern tools like Expo, Typescript & experience with networking using Mikrotik and Cisco.
          </div>

          {/* GitHub Stats */}
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number stat-purple">{userStats.public_repos}</div>
              <div className="stat-label">Repositories</div>
            </div>
            <div className="stat-item">
              <div className="stat-number stat-pink">{userStats.followers}</div>
              <div className="stat-label">Followers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number stat-blue">{userStats.following}</div>
              <div className="stat-label">Following</div>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
              <ExternalLink className="btn-icon" />
            </a>
            <a href="/AzizRizqi_Portofolio.github.io/CV_AzizRizqi.pdf" download="CV_AzizRizqi.pdf" className="btn btn-secondary">
              Download CV
              <svg className="btn-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3V2.25"></path>
              </svg>
            </a>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <a href="https://github.com/AzizRizqi" className="contact-link">
              <Github className="contact-icon" />
            </a>
            <a href="https://www.linkedin.com/in/aziz-rizqi/" className="contact-link">
              <Linkedin className="contact-icon" />
            </a>
            <a href="https://www.instagram.com/azizrisqi2005?igsh=enpqdXQzdzAyamox" className="contact-link">
              <Instagram className="contact-icon" />
            </a>
            <a href="mailto:azizrizqi2005@gmail.com" className="contact-link">
              <Mail className="contact-icon" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-description">
              I am a passionate developer who combines modern development tools with creative design to build amazing digital experiences & is interested in network management..
            </p>
          </div>

          {/* Tech Stack */}
          <div className="tech-stack-section">
            <h3 className="tech-stack-title">Tech Stack</h3>
            <div className="tech-stack-grid">
              {techStack.map((tech, index) => (
                <div key={tech.name} className="tech-card">
                  <div className="tech-content">
                    <div className="tech-icon">{tech.icon}</div>
                    <div className="tech-name">{tech.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-grid">
            <div className="skills-section">
              <h3 className="skills-title">Skills & Expertise</h3>
              {skills.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className={`skill-progress skill-${skill.color.split(' ')[0].replace('from-', '')}`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="expertise-section">
              <div className="expertise-card">
                <div className="expertise-header">
                  <div className="expertise-icon expertise-mobile">
                    <Smartphone className="icon" />
                  </div>
                  <div>
                    <h4 className="expertise-title">Mobile Development</h4>
                    <p className="expertise-subtitle">React Native & Cross-platform</p>
                  </div>
                </div>
                <p className="expertise-description">
                  Building native mobile applications with React Native, focusing on performance and user experience.
                </p>
              </div>

              {/* Tambahkan kartu expertise untuk Networking */}
              <div className="expertise-card">
                <div className="expertise-header">
                  <div className="expertise-icon expertise-network"> {/* Kelas baru untuk icon */}
                    <Users className="icon" /> {/* Menggunakan ikon Users untuk jaringan */}
                  </div>
                  <div>
                    <h4 className="expertise-title">Network Administration</h4>
                    <p className="expertise-subtitle">Mikrotik & Cisco</p>
                  </div>
                </div>
                <p className="expertise-description">
                  Experienced in managing and configuring network devices, focusing on Mikrotik and Cisco for robust network infrastructure.
                </p>
              </div>

              <div className="expertise-card">
                <div className="expertise-header">
                  <div className="expertise-icon expertise-design">
                    <Palette className="icon" />
                  </div>
                  <div>
                    <h4 className="expertise-title">UI/UX Design</h4>
                    <p className="expertise-subtitle">Figma & Design Systems</p>
                  </div>
                </div>
                <p className="expertise-description">
                  Creating intuitive user interfaces and design systems that enhance user experience and brand identity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">My Projects</h2>
            <p className="section-description">
              Recent projects and repositories from my GitHub
            </p>
          </div>

          {isLoading ? (
            <div className="projects-grid">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="project-card project-loading">
                  <div className="loading-bar loading-title"></div>
                  <div className="loading-bar loading-text"></div>
                  <div className="loading-bar loading-text"></div>
                  <div className="loading-bar loading-button"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="projects-grid">
              {repos.map((repo, index) => (
                <div key={repo.id} className="project-card">
                  <div className="project-header">
                    <div className="project-icon">
                      <Github className="icon" />
                    </div>
                    <div className="project-meta">
                      {repo.language && (
                        <span className="project-language">
                          {repo.language}
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="project-title">
                    {repo.name}
                  </h3>

                  <p className="project-description">
                    {repo.description || 'No description available'}
                  </p>

                  <div className="project-stats">
                    <div className="stat-group">
                      <div className="stat">
                        <Star className="stat-icon" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="stat">
                        <GitFork className="stat-icon" />
                        <span>{repo.forks_count}</span>
                      </div>
                      <div className="stat">
                        <Eye className="stat-icon" />
                        <span>{repo.watchers_count}</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                    <ExternalLink className="link-icon" />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">My Youtube Videos</h2>
            <p className="section-description">
              Watch my Youtube Video tutorials and learn from me.
            </p>
          </div>

          <div className="videos-grid">
            {videoIds.map((id, index) => (
              <div key={id} className="video-card">
                <div className="video-container">
                  <iframe
                    className="video-iframe"
                    src={`https://www.youtube.com/embed/${id}`}
                    title={`Demo Video ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="video-badge">
                    <Play className="play-icon" />
                  </div>
                </div>
                <h3 className="video-title">
                  Video {index + 1}
                </h3>
                <p className="video-description">
                  Contains videos of my experiences starting from Mikrotik configuration, virus introduction, website security
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Section */}
      <section id="designs" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">UI/UX Designs</h2>
            <p className="section-description">
              Design work and prototypes created in Figma
            </p>
          </div>

          <div className="designs-grid">
            {FIGMA_PROJECTS.map((url, index) => (
              <div key={index} className="design-showcase">
                <div className="design-icon-container">
                  <div className="design-icon">
                    <Palette className="icon" />
                  </div>
                </div>

                <div className="figma-container">
                  <iframe
                    className="figma-iframe"
                    src={`https://www.figma.com/embed?embed_host=share&url=${url}`}
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="design-cta">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View Full Design
                    <ExternalLink className="btn-icon" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="contact-container">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="contact-description">
            Have a project in mind? I'd love to hear from you and discuss how we can bring your ideas to life.
          </p>

          <div className="contact-social">
            <a href="https://github.com/AzizRizqi" className="contact-link">
              <Github className="contact-icon" />
            </a>
            <a href="https://www.linkedin.com/in/aziz-rizqi/" className="contact-link">
              <Linkedin className="contact-icon" />
            </a>
            <a href="https://www.instagram.com/azizrisqi2005?igsh=enpqdXQzdzAyamox" className="contact-link">
              <Instagram className="contact-icon" />
            </a>
            <a href="mailto:azizrizqi2005@gmail.com" className="contact-link">
              <Mail className="contact-icon" />
            </a>
          </div>

          <div className="footer">
            © {new Date().getFullYear()} {GITHUB_USERNAME}. Built with React + Vite + TypeScript. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;