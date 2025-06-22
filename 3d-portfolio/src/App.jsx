import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Stars } from '@react-three/drei'
import { Suspense, useState } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from './data/portfolioData'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  const [currentSection, setCurrentSection] = useState('hero')

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  const renderSection = () => {
    switch (currentSection) {
      case 'hero':
        return <Hero data={portfolioData.personal} />
      case 'experience':
        return <Experience data={portfolioData.experience} />
      case 'education':
        return <Education data={portfolioData.education} />
      case 'skills':
        return <Skills data={portfolioData.skills} />
      case 'projects':
        return <Projects data={portfolioData.projects} />
      case 'contact':
        return <Contact data={portfolioData.personal} />
      default:
        return <Hero data={portfolioData.personal} />
    }
  }

  const renderContent = () => {
    switch (currentSection) {
      case 'hero':
        return (
          <div className="hero-content">
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {portfolioData.personal.name}
            </motion.h1>
            <motion.h2
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {portfolioData.personal.title}
            </motion.h2>
            <motion.p
              className="hero-summary"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {portfolioData.personal.summary}
            </motion.p>
          </div>
        )
      case 'experience':
        return (
          <div className="section-content">
            <h2 className="section-title">Experience</h2>
            <div className="experience-grid">
              {portfolioData.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="experience-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-title">{exp.position}</h3>
                      <p className="experience-company">{exp.company}</p>
                    </div>
                    <span className="experience-duration">{exp.duration}</span>
                  </div>
                  <ul className="experience-description">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        )
      case 'education':
        return (
          <div className="section-content">
            <h2 className="section-title">Education</h2>
            <div className="experience-grid">
              {portfolioData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="experience-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-title">{edu.degree}</h3>
                      <p className="experience-company">{edu.school}</p>
                    </div>
                    <span className="experience-duration">{edu.duration}</span>
                  </div>
                  <p style={{ marginBottom: '0.5rem', color: '#6b6b6b' }}>
                    GPA: {edu.gpa} | {edu.location}
                  </p>
                  <p style={{ fontSize: '0.9rem', color: '#6b6b6b' }}>
                    <strong>Relevant Courses:</strong> {edu.relevantCourses.join(', ')}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )
      case 'skills':
        return (
          <div className="section-content">
            <h2 className="section-title">Skills</h2>
            <div className="skills-grid">
              {Object.entries(portfolioData.skills).map(([category, skills], index) => (
                <motion.div
                  key={category}
                  className="skill-category"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <h3 className="skill-category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                  <div className="skill-tags">
                    {skills.map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )
      case 'projects':
        return (
          <div className="section-content">
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
              {portfolioData.projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="project-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="project-tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      GitHub
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      Live Demo
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )
      case 'contact':
        return (
          <div className="section-content">
            <h2 className="section-title">Contact</h2>
            <div className="contact-grid">
              <motion.div
                className="contact-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <div className="contact-label">Email</div>
                <div className="contact-value">
                  <a href={`mailto:${portfolioData.personal.email}`} className="contact-link">
                    {portfolioData.personal.email}
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="contact-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="contact-label">Phone</div>
                <div className="contact-value">
                  <a href={`tel:${portfolioData.personal.phone}`} className="contact-link">
                    {portfolioData.personal.phone}
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="contact-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="contact-label">Location</div>
                <div className="contact-value">{portfolioData.personal.location}</div>
              </motion.div>
              <motion.div
                className="contact-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="contact-label">LinkedIn</div>
                <div className="contact-value">
                  <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                    View Profile
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="contact-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="contact-label">GitHub</div>
                <div className="contact-value">
                  <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                    View Profile
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="app">
      <Navigation
        sections={sections}
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
      />

      <div className="canvas-container">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #2c3e50 100%)' }}
        >
          <Suspense fallback={null}>
            <Environment preset="night" />
            <Stars
              radius={100}
              depth={50}
              count={5000}
              factor={4}
              saturation={0}
              fade
              speed={1}
            />
            {renderSection()}
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Suspense>
        </Canvas>
      </div>

      <motion.div
        className="content-overlay"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="content-container">
          {renderContent()}
        </div>
      </motion.div>
    </div>
  )
}

export default App
