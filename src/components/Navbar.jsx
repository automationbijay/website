import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="logo">Portfolio</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About me</a>
          <a href="#testimonials">Testimonials</a>
          <button className="primary-button">Contact Us</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
