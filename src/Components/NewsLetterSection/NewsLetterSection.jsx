import React, { useState } from 'react'
import './newsletterSection.css'
import notificationIcon from '../../assets/notification.png'
import { FaRegEnvelope } from "react-icons/fa6";


const NewsLetterSection = () => {

  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    setError('')
    if(!email){
      setError('Please enter a Valid email')
      alert(error)
    }
  }

  return (
    <section id="newsletter">
        <div className="container flex items-center">
        <div className="heading flex items-center gap-20">
            <img src={notificationIcon} alt="" />
            <h3>
            Subscribe to our newsletter to stay informed about latest updates
            </h3>
            <h3 className="newsletter_mobile_text">Subscribe to our newsletter </h3>
        </div>
        <div className="form">
            <form onSubmit={handleNewsletterSubmit} className="flex items-center">
            <div className="input_group">
                <div className="icon">
                  <FaRegEnvelope />
                </div>
                <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Your Email" />
            </div>
            <input type="submit" defaultValue="Subscribe" />
            </form>
        </div>
        </div>
    </section>
  )
}

export default NewsLetterSection
