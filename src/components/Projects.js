import React from 'react'
import './Projects.css'

const projects = [
  {
    id: 1,
    featured: true,
    title: "Text Summarization(3rd year)",
    description: "A Streamlit-based RAG (Retrieval-Augmented Generation) application built using Python and the LangChain framework, integrated with Hugging Face models. It generates a 300-line summary from any provided webpage URL or YouTube link using LLM components.",
    tech: ["Python", "LangChain", "Hugging Face", "Streamlit"],
    github: "https://github.com/Riya-git257/Text-Summarization",
    demo: null
  },
  {
    id: 2,
    featured: false,
    title: "Hostel Management System(2nd year)",
    description: "Developed a Streamlit-based UI for a hostel management web application using Python and MySQL, reducing data retrieval time by 30% compared to manual methods for staff.",
    tech: ["Python", "MySQL", "Streamlit"],
    github: null,
    demo: null
  }
]

function Projects() {
  return (
    <section className="projects">

      {/* Section Title */}
      <h2 className="projects-title">Projects</h2>
      <div className="projects-divider"></div>
      <p className="projects-subtitle">Things I've built with love & late nights ☕</p>

      {/* Featured Project */}
      {projects.filter(p => p.featured).map(project => (
        <div className="project-featured" key={project.id}>
          <div className="project-featured-tag">✦ Featured Project</div>
          <h3 className="project-featured-title">{project.title}</h3>
          <p className="project-featured-desc">{project.description}</p>
          <div className="project-tech-stack">
            {project.tech.map(t => (
              <span className="project-tag" key={t}>{t}</span>
            ))}
          </div>
          <div className="project-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="project-btn">
                ✦ GitHub
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="project-btn project-btn-demo">
                ✦ Live Demo
              </a>
            )}
          </div>
        </div>
      ))}

      {/* Grid Projects */}
      <div className="projects-grid">
        {projects.filter(p => !p.featured).map(project => (
          <div className="project-card" key={project.id}>
            <h3 className="project-card-title">{project.title}</h3>
            <p className="project-card-desc">{project.description}</p>
            <div className="project-tech-stack">
              {project.tech.map(t => (
                <span className="project-tag" key={t}>{t}</span>
              ))}
            </div>
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="project-btn">
                  ✦ GitHub
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="project-btn project-btn-demo">
                  ✦ Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Projects