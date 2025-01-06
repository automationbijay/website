import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-left">
          <div className="logo">Portfolio</div>
          <p>Made with ❤️ by designer</p>
        </div>
        <div className="footer-links">
          <div className="footer-nav">
            <a href="#home">Home</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#about">About me</a>
            <a href="#contact">Contact</a>
            <a href="#testimonials">Testimonials</a>
          </div>
          <div className="footer-social">
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
