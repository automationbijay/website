import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero section">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="subtitle">Hey I am John</p>
          <h1>I create <span className="highlight">product design</span><br />and brand experience</h1>
          <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
          <button className="primary-button">Get in touch</button>
        </div>
        <div className="hero-image">
          <div className="placeholder-image">Hero Image</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
