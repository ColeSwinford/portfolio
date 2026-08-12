import { useState } from 'react';
import './App.css';
import { personalInfo, skills, experience, projects, featuredProject } from './data';

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

      {/* --- Navigation --- */}
      <nav>
        <div className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </div>
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
          <h3 className="about-skills-title">Technologies & Tools</h3>
          <div className="skills-grid">
            {skills.map(skill => <span className="skill-tag" key={skill}>{skill}</span>)}
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
          <p className="section-subtitle">Open-source software and personal systems</p>
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

        <h3 className="grid-title">Noteworthy Projects</h3>
        <div className="projects-grid">
          {projects.map((proj, i) => (
            <a href={proj.link} key={i} target="_blank" rel="noreferrer" className="project-card">
              <div className="card-img-container">
                <img src={proj.image} alt={proj.title} className="card-img" />
              </div>
              <div className="card-content">
                <div className="card-title">
                  {proj.title}
                  <i className={proj.icon}></i>
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
              <a href={personalInfo.socials.github} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
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