import React, { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = formData
    const mailtoLink = `mailto:riyachavan2507@gmail.com?subject=Hello from ${name}&body=${message}%0A%0AFrom: ${email}`
    window.open(mailtoLink)
    setSent(true)
  }

  return (
    <section className="contact">

      {/* Section Title */}
      <h2 className="contact-title">Get In Touch</h2>
      <div className="contact-divider"></div>
      <p className="contact-subtitle">
        Have an idea, opportunity, or just want to say hi? I'd love to hear from you ✨
      </p>

      <div className="contact-wrapper">

        {/* Email Card */}
        <div className="contact-card">
          <span className="contact-emoji">📮</span>
          <h3 className="contact-card-title">Email Me</h3>
          <p className="contact-card-text">riyachavan2507@gmail.com</p>
          <a
            href="mailto:riyachavan2507@gmail.com"
            className="contact-card-btn"
          >
            ✦ Say Hello
          </a>
        </div>

        {/* Contact Form */}
        <div className="contact-form-card">
          <span className="contact-emoji">🖊️</span>
          <h3 className="contact-card-title">Send a Message</h3>

          {sent ? (
            <p className="contact-success">
              ✦ Message sent! I'll get back to you soon 🤎
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="contact-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="contact-input"
              />
              <textarea
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="contact-input contact-textarea"
              />
              <button type="submit" className="contact-submit">
                ✦ Send Message
              </button>
            </form>
          )}
        </div>

      </div>

    </section>
  )
}

export default Contact