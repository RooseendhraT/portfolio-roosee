import { useEffect, useState } from "react";
import cvFile from "./rooseendhra_cv.pdf";

const tabs = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const skills = [
  
  ["Frontend", "HTML5, CSS3, JavaScript (ES6+), React.js."],
  ["Backend", "Node.js, Express.js, Python, FastAPI."],
  ["Python", "Back-end development with Python and building APIs."],
  ["Databases", "PostgreSQL, MongoDB, MySQL."],
  ["Tools & Platforms", "Git, GitHub, Vercel, Netlify, Render, pgAdmin, Apache, Uvicorn."],
  ["GitHub", "Version control and collaboration on projects using Git."],
  ["Full-Stack Development", "Integrating front-end and back-end technologies for complete web applications"],
  ["Database Management", "Working with SQL and NoSQL databases"],
  ["API Integration", "Connecting with external APIs and handling data requests"],
  ["Core Competencies", "Problem Solving & Debugging, Testing & QA, Documentation, Reporting Visualization."],
];

function SocialLinks({ contact = false }) {
  return (
    <div className={contact ? "social-icons d-flex gap-3 mt-3" : "home-sm d-flex gap-3"}>
      <a href="https://www.linkedin.com/in/rooseendhra" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <i className="bx bxl-linkedin" />
      </a>
      <a href="https://wa.me/917603849450" target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <i className="bx bxl-whatsapp" />
      </a>
      {!contact && (
        <a href="https://github.com/rooseendhrat" target="_blank" rel="noreferrer" aria-label="GitHub">
          <i className="bx bxl-github" />
        </a>
      )}
    </div>
  );
}

function Home({ onNavigate }) {
  const [profession, setProfession] = useState(0);
  const professions = ["Developer"];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProfession((current) => (current + 1) % professions.length);
    }, 2500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div id="home" className="tab-content active">
      <div className="home-hero row align-items-center">
        <div className="home-copy col-lg-6">
          <p className="home-kicker">WELCOME TO MY PORTFOLIO</p>
          <h1>Hello, I&apos;m <span>Rooseendhra</span></h1>
          <h2 className="text">{professions[profession]}</h2>
          <p className="home-description">A curious developer creating thoughtful, responsive websites and digital experiences that are made to be useful.</p>
          <div className="home-actions">
            <button type="button" className="btn btn-dark" onClick={() => onNavigate("projects")}>View my work <i className="bx bx-right-arrow-alt" /></button>
            <a href={cvFile} download="rooseendhra_cv.pdf" className="btn btn-outline-dark">Download CV <i className="bx bx-download" /></a>
          </div>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div id="skills" className="tab-content active">
      <h2>Skills</h2>
      <p>Here are my skills:</p>
      {skills.map(([title, description, status]) => (
        <div className="skills-item" key={title}>
          <h3>{title}</h3>
          <p>{description}{status && <> <span className="learning">({status})</span></>}</p>
        </div>
      ))}
    </div>
  );
}

function Projects() {
  return (
    <div id="projects" className="tab-content active">
      <h2>Projects</h2>
      <p>Here are some of the projects I have worked on:</p>
      <a href="https://github.com/rooseendhrat" target="_blank" rel="noreferrer" className="btn btn-outline-dark mb-4">
        Visit my GitHub <i className="bx bxl-github" />
      </a>
      <ul className="list-unstyled">
        <li className="project-item">
          <h3>AI Browser Automation System <span className="project-type">Academic Project - I</span></h3>
          <p>Nov 2025 - Feb 2026</p>
          <p>Built an AI-powered system that understands natural language tasks and autonomously browses websites to complete them, simulating human browsing behavior using a REST API backend.</p>
          <p className="project-stack"><strong>Tech Stack:</strong> Python, FastAPI, Uvicorn</p>
        </li>
        <li className="project-item">
          <h3>Food Wastage and Donation Management System <span className="project-type">Academic Project - II</span></h3>
          <p>Jan 2025 - Feb 2025</p>
          <p>Developed a full-stack web application that reduces food waste by connecting food donors with individuals and organizations in need. Implemented features for donor registration, donation tracking, and recipient matching.</p>
          <p className="project-stack"><strong>Tech Stack:</strong> HTML, CSS, JavaScript, PHP, MySQL, Apache</p>
        </li>
        <li className="project-item">
          <h3>To-Do Application</h3>
          <p>Mini Project</p>
          <p className="project-stack"><strong>Tech Stack:</strong> React.js, Node.js, MongoDB</p>
        </li>
        <li className="project-item">
          <h3>Personal Portfolio Website</h3>
          <p>Mini Project</p>
          <p className="project-stack"><strong>Tech Stack:</strong> React.js</p>
        </li>
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <div id="contact" className="tab-content active">
      <h2 className="mb-4">Contact Me</h2>
      <p>Here is my contact information:</p>
      <ul className="list-unstyled contact-info">
        <li><strong>Email:</strong> <a href="mailto:rooseendhrat@gmail.com">rooseendhrat@gmail.com</a></li>
        <li><strong>Phone:</strong> <a href="tel:+917603849450">+91 76038 49450</a></li>
        <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/rooseendhrat" target="_blank" rel="noreferrer">linkedin.com/in/rooseendhrat</a></li>
        <li><strong>GitHub:</strong> <a href="https://github.com/rooseendhrat" target="_blank" rel="noreferrer">github.com/rooseendhrat</a></li>
      </ul>
      <SocialLinks contact />
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (tab) => {
    setActiveTab(tab);
    setMenuOpen(false);
    window.history.replaceState(null, "", `#${tab}`);
  };

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (tabs.some((tab) => tab.id === hash)) setActiveTab(hash);
  }, []);

  return (
    <>
      <header className="bg-dark text-white p-3">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <h2 className="m-0">ROOSEENDHRA</h2>
            <nav className="navbar navbar-expand-lg navbar-dark">
              <button type="button" className="navbar-toggler" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="navbarNav" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className={`collapse navbar-collapse${menuOpen ? " show" : ""}`} id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  {tabs.map((tab) => (
                    <li className={`nav-item${activeTab === tab.id ? " active" : ""}`} key={tab.id}>
                      <a className={`nav-link${activeTab === tab.id ? " active" : ""}`} href={`#${tab.id}`} onClick={(event) => { event.preventDefault(); navigate(tab.id); }}>{tab.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main className="content container mt-4">
        <div className="tab-contents">
          {activeTab === "home" && <Home onNavigate={navigate} />}
          {activeTab === "skills" && <Skills />}
          {activeTab === "projects" && <Projects />}
          {activeTab === "contact" && <Contact />}
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>Connect with me: <a href="https://www.linkedin.com/in/rooseendhra" target="_blank" rel="noreferrer">LinkedIn</a> | <a href="https://github.com/rooseendhrat" target="_blank" rel="noreferrer">GitHub</a> | <a href="mailto:rooseendhrat@gmail.com">Email me</a> | <a href="tel:+917603849450">Call me</a></p>
        </div>
      </footer>
    </>
  );
}

export default App;
