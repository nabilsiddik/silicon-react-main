import React, { useContext, useEffect, useState } from 'react'
import './testimonial.css'
import Testimonial from './../Testimonial/Testimonial';
import { darkModeContext } from '../../provider/DarkModeProvider';

const TestimonialSection = () => {

  const [testimonial, setTestimonial] = useState([])
  const {isDarkModeOn} = useContext(darkModeContext)

  useEffect(()=>{
    fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
    .then(res => res.json())
    .then(data => setTestimonial(data))
  }, [])

  return (
    <section id="testimonial" className={`${isDarkModeOn && 'deep_dark'}`}>
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
