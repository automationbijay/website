import React from 'react'
import './Testimonials.css'

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Russell",
      role: "Designer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    },
    {
      name: "Kevin Wilson",
      role: "Lead Developer",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    },
    {
      name: "Diana Moore",
      role: "Marketing",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    }
  ]

  return (
    <section className="testimonials section">
      <div className="container">
        <h2>Customer testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>{testimonial.text}</p>
              <div className="testimonial-author">
                <div className="avatar"></div>
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
