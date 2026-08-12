import { useState } from 'react';
import './App.css';
import { personalInfo, skillCategories, experience, projects, featuredProject } from './data';

// --- Lightweight Native SVG Icons ---
// Github
const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
// LinkedIn
const LinkedinIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeJob, setActiveJob] = useState(experience[0]);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    window.location.href = `mailto:${personalInfo.email}`;
    alert("Email copied to clipboard!");
  };

  const getTechTags = (techString) => {
    return techString.split(' • ').map(tag => tag.trim());
  };

  return (
    <div className="app">

      {/* --- Navigation Backdrop Overlay --- */}
      <div
        className={`nav-overlay ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* --- Navigation --- */}
      <nav>
        <button
          className={`mobile-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>01. ABOUT</a></li>
          <li><a href="#experience" onClick={() => setIsMenuOpen(false)}>02. EXPERIENCE</a></li>
          <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>03. PROJECTS</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>04. CONTACT</a></li>
        </ul>
      </nav>

      {/* --- Hero Section --- */}
      <section className="hero-section">
        <span className="hero-hi">SOFTWARE ENGINEER</span>
        <h1 className="hero-name">{personalInfo.name}</h1>
        <h2 className="hero-tagline">{personalInfo.tagline}</h2>
        <div className="hero-line"></div>
        <a href="#projects" className="welcome-btn">VIEW PROJECTS</a>
      </section>

      {/* --- About Section --- */}
      <section id="about">
        <div className="about-content">
          <span className="section-number">01.</span>
          <h2 className="section-heading">About Me</h2>
          <p className="about-lead">{personalInfo.bioTitle}</p>
          <p className="about-text">{personalInfo.bioP1}</p>
          <p className="about-text">{personalInfo.bioP2}</p>

          <div className="skills-section">
            <h3 className="about-skills-title">Technical Competencies</h3>
            <div className="skills-categories-list">
              {skillCategories.map((group, idx) => (
                <div className="skill-category-row" key={idx}>
                  <h4 className="skill-category-title">{group.category}</h4>
                  <div className="skills-grid">
                    {group.skills.map(skill => (
                      <span className="skill-tag" key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Experience Section --- */}
      <section id="experience">
        <div className="about-content">
          <span className="section-number">02.</span>
          <h2 className="section-heading">Experience</h2>
        </div>
        <div className="exp-container">
          <ul className="exp-tabs">
            {experience.map(job => (
              <li key={job.id}>
                <button
                  className={`exp-btn ${activeJob.id === job.id ? 'selected' : ''}`}
                  onClick={() => setActiveJob(job)}
                >
                  {job.id}
                </button>
              </li>
            ))}
          </ul>
          <div className="exp-details">
            <h3>{activeJob.title}</h3>
            <a href={activeJob.link} target="_blank" rel="noreferrer" className="exp-company">
              @ {activeJob.company}
            </a>
            <span className="exp-dates">{activeJob.dates}</span>
            <ul className="exp-bullets">
              {activeJob.bullets.map((bullet, i) => (
                <li key={i}><span className="accent">—</span> {bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- Projects Section --- */}
      <section id="projects">
        <div className="projects-header">
          <span className="section-number">03.</span>
          <h2 className="section-heading">Projects</h2>
          <p className="section-subtitle">Open-source software and personal tooling</p>
        </div>

        <a href={featuredProject.link} target="_blank" rel="noreferrer" className="featured-project" style={{ textDecoration: 'none' }}>
          <div className="featured-content">
            <p className="featured-label">Featured Work</p>
            <h3 className="featured-title">{featuredProject.title}</h3>
            <p className="featured-desc">{featuredProject.description}</p>
            <div className="skills-grid" style={{ marginTop: 'auto' }}>
              {getTechTags(featuredProject.tech).map(tag => (
                <span className="skill-tag" key={tag} style={{ fontSize: '11px', padding: '4px 10px' }}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="featured-img-container">
            <img src={featuredProject.image} alt={featuredProject.title} className="featured-img" />
          </div>
        </a>

        <div className="projects-grid">
          {projects.map((proj, i) => (
            <a href={proj.link} key={i} target="_blank" rel="noreferrer" className="project-card">
              <div className="card-img-container">
                <img src={proj.image} alt={proj.title} className="card-img" loading="lazy" decoding="async" />
              </div>
              <div className="card-content">
                <div className="card-title">
                  {proj.title}
                  {proj.icon === 'github' && <GithubIcon size={18} />}
                </div>
                <p>{proj.description}</p>
                <div className="project-tags-wrapper">
                  {getTechTags(proj.tech).map(tag => (
                    <span className="skill-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact">
        <div className="contact-content">
          <span className="section-number">04.</span>
          <h2 className="section-heading">Contact</h2>
          <p className="contact-lead">Let's get in touch.</p>
          <div className="email-container">
            <p className="email-label">EMAIL ADDRESS</p>
            <button onClick={copyEmail} className="email-btn">
              {personalInfo.email}
            </button>
          </div>

          <div className="contact-platforms">
            <p className="label">PLATFORMS</p>
            <div className="contact-icons">
              <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon size={28} />
              </a>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedinIcon size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-text">
        Designed & Built by Cole Swinford
      </footer>

    </div>
  );
}

export default App;