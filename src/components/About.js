import React from 'react'
import './About.css'

function About()
{
    return(
        <section className='about'> 
        {/*Section Title */}
        <h2 className='about-title'>About Me</h2>
        <div className='about-divider'></div>
        {/*BIO */}
        <p className='about-bio'>
            I'm Riya, a 3rd year Engineering student at Dr. D.Y. Patil Institute of 
            Engineering, Management & Research, deeply passionate about the intersection 
            of AI and human experience. I build intelligent, memory-aware systems — from 
            RAG pipelines to conversational AI tutors — that make learning feel personal 
            and human. My goal is to create AI that doesn't just answer questions, but 
            truly understands people.
        </p>
        {/* Fun Facts */}

        <div className="about-facts">
            <h3 className="facts-title">A little more about me ✨</h3>
            <div className="facts-grid">

                <div className="fact-card">
                    <span className="fact-emoji">☕</span>
                    <p>I do my best coding late at night with a warm cup of coffee</p>
                </div>
                <div className="fact-card">
                    <span className="fact-emoji">📚</span>
                    <p>I love reading self-help books in my free time</p>
                </div>
                <div className="fact-card">
                    <span className="fact-emoji">🧶</span>
                    <p>I crochet to unwind — there's something oddly satisfying about creating things with your hands</p>
                </div>
            </div>
        </div>

        </section>
    )
}
export default About