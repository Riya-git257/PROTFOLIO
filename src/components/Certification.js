import React from 'react'
import './Certification.css'

const certifications = [
  {
    name: "Complete GenAI Course With Langchain and HuggingFace",
    issuer: "Udemy",
    year: "2025",
    emoji: "🤖",
    image: "/Certification/genai-langchain.jpeg"
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    year: "2025",
    emoji: "☁️",
    image: "/Certification/oracle-genai-pro.jpeg"
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    year: "2025",
    emoji: "☁️",
    image: "/Certification/oracle-ai-foundation.jpeg"
  },
  {
    name: "The Complete Python Bootcamp From Zero to Hero in Python",
    issuer: "Udemy",
    year: "2024",
    emoji: "🐍",
    image: "/Certification/python-bootcamp.jpeg"
  },
  {
    name: "C Programming",
    issuer: "Udemy",
    year: "2023",
    emoji: "💻",
    image: "/Certification/c-programming.jpeg"
  }
]
function Certifications() {
  return (
    <section className="certifications">

      {/* Section Title */}
      <h2 className="cert-title">Certifications</h2>
      <div className="cert-divider"></div>
      <p className="cert-subtitle">Courses & credentials I've earned</p>

      {/* Badges Grid */}
      <div className="cert-grid">
        {certifications.map((cert) => (
          <div className="cert-badge" key={cert.name}>
            <span className="cert-emoji">{cert.emoji}</span>
            <div className="cert-info">
              <h3 className="cert-name">{cert.name}</h3>
              <div className="cert-meta">
                <span className="cert-issuer">{cert.issuer}</span>
                <span className="cert-dot">·</span>
                <span className="cert-year">{cert.year}</span>
              </div>
            </div>

            <a href={cert.image}
                target="_blank"
                rel="noreferrer"
                className="cert-view-btn"
            >
            ✦ View
            </a>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Certifications