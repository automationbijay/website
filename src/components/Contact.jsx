import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <section className="contact section">
      <div className="container">
        <h2>Contact me</h2>
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <input type="text" placeholder="First name" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Last name" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Phone number" />
            </div>
          </div>
          <div className="form-group">
            <select>
              <option value="">Choose a topic</option>
              <option value="project">Project</option>
              <option value="consultation">Consultation</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <textarea placeholder="Type your message..."></textarea>
          </div>
          <button type="submit" className="primary-button">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
