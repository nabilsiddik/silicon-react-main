import React, { useEffect, useState } from 'react'
import './testimonial.css'
import Testimonial from './../Testimonial/Testimonial';

const TestimonialSection = () => {

  const [testimonial, setTestimonial] = useState([])

  useEffect(()=>{
    fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
    .then(res => res.json())
    .then(data => setTestimonial(data))
  }, [])

  return (
    <section id="testimonial">
    <div className="container flex justify-between gap-30">
      <div className="heading_text">
        <h2>
          Clients are <br /> Loving Our App
        </h2>
      </div>
      <div className="testimonials flex justify-between gap-30">
          {testimonial.length > 0 && testimonial.map((testimonialItem) => {
            return <Testimonial key={testimonialItem.id} testimonial={testimonialItem}/>
          })}
      </div>
    </div>
  </section>
  )
}

export default TestimonialSection
