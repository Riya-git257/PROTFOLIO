import React from 'react'
import './Skills.css'

const skills = [
  {
    category: "Languages",
    emoji: "💻",
    items: ["Python", "C", "C++", "HTML", "CSS"]
  },
  {
    category: "AI/ML & GenAI",
    emoji: "🤖",
    items: ["LangChain", "Hugging Face", "Scikit-Learn", "RAG Pipelines", "Mistral-7B", "Sentence Transformers", "Langsmith"]
  },
  {
    category: "Frameworks & Libraries",
    emoji: "🧩",
    items: ["React", "Streamlit", "TensorFlow", "Pandas", "NumPy"]
  },
  {
    category: "Tools & Platforms",
    emoji: "🛠️",
    items: ["Git", "GitHub", "VS Code", "MySQL", "Arduino", "Jupyter Notebook"]
  }
]

function Skills() {
  return (
    <section className="skills">

      {/* Section Title */}
      <h2 className="skills-title">Skills</h2>
      <div className="skills-divider"></div>
      <p className="skills-subtitle">Technologies & tools I work with</p>

      {/* Skills Grid */}
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-card" key={group.category}>
            <span className="skill-emoji">{group.emoji}</span>
            <h3 className="skill-category">{group.category}</h3>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span className="skill-tag" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Skills