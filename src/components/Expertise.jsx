import React from 'react'
import './Expertise.css'

function Expertise() {
  const skills = [
    {
      title: 'Strategy & Direction',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
    },
    {
      title: 'Branding & Logo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
    },
    {
      title: 'UI & UX Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
    },
    {
      title: 'Webflow Development',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
    }
  ]

  return (
    <section className="expertise section">
      <div className="container">
        <h2>My Expertise</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expertise
