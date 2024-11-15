import React from 'react'
import './newsletterSection.css'

const NewsLetterSection = () => {
  return (
    <section id="newsletter">
        <div className="container flex items-center">
        <div className="heading flex items-center gap-20">
            <img src="Images/notification.png" alt="" />
            <h3>
            Subscribe to our newsletter to stay informed about latest updates
            </h3>
            <h3 className="newsletter_mobile_text">Subscribe to our newsletter </h3>
        </div>
        <div className="form">
            <form className="flex items-center">
            <div className="input_group">
                <div className="icon">
                <i className="fa-regular fa-envelope" />
                </div>
                <input type="email" placeholder="Your Email" />
            </div>
            <input type="submit" defaultValue="Subscribe" />
            </form>
        </div>
        </div>
    </section>
  )
}

export default NewsLetterSection
