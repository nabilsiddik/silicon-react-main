import React from 'react'
import quotesIcon from '../../assets/quotes.png'
import { FaStar } from "react-icons/fa";

const Testimonial = ({testimonial}) => {
    return (
        <div className="testimonial flex direction-column gap-10">
            <span className="quote_icon">
                <img src={quotesIcon} alt="" />
            </span>
            <ul className="rating flex items-center gap-5">
                <li>
                    <FaStar />
                </li>
                <li>
                    <FaStar />
                </li>
                <li>
                    <FaStar />
                </li>
                <li>
                    <FaStar />
                </li>
                <li>
                    <FaStar />
                </li>
            </ul>
            <p>
                {testimonial.comment}
            </p>
            <div className="client_profil flex items-center gap-10">
                <div className="profil_pic">
                    <img src={testimonial.avatarUrl} alt="" />
                </div>
                <div>
                    <h3>{testimonial.author}</h3>
                    <p>{testimonial.jobRole}</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
