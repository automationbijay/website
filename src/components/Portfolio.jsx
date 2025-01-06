import React from 'react'
import './Portfolio.css'

function Portfolio() {
  const projects = [
    {
      title: 'Abous',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/project1.jpg'
    },
    {
      title: 'App Dashboard',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/project2.jpg'
    },
    {
      title: 'Easy Rent',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: '/project3.jpg'
    }
  ]

  return (
    <section className="portfolio section">
      <div className="container">
        <h2>My Portfolio</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href="#" className="view-project">View in Detail →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
