import React from 'react'
import './Hero.css'

function Hero(){
    return(
        <section className='hero'>
            {/*Photo */}
            <div className='hero-photo'>
                <img src = "photo.png" alt ="Riya"/>
            </div>
            {/*Name */}
            <h1 className='hero-name'>Riya Chavan</h1>
            {/*Title*/}
            <p className="hero-title">GenAI Engineer · AIDS Student · Builder</p>
            {/* Bio */}
            <p className="hero-bio">
                I build intelligent systems that learn, adapt, and feel human.
                Passionate about AI, good design, and late night coding sessions
                with a warm cup of coffee. ☕️
            </p>

            {/* Social Links */}
            <div className="hero-links">
                <a href="https://github.com/Riya-git257" target="_blank" rel="noreferrer">
                GitHub
                </a>
                <a href="https://www.linkedin.com/in/riya-chavan-699069325/" target="_blank" rel="noreferrer">
                LinkedIn
                </a>
            </div>
        </section>
    )
}

export default Hero