import React from 'react'
import './contactLocation.css'
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const MediaCenter = ({ title, address, phone, hours1, hours2 }) => {
    return (
        <div className="media-center">
            <h3 className="mb-10">{title}</h3>
            <div className="flex items-center gap-5 mb-10">
                <span role="img" aria-label="location"><IoLocationOutline />
                </span>
                <p>{address}</p>
            </div>
            <div className="flex items-center gap-5 mb-10">
                <span role="img" aria-label="phone"><FaPhoneAlt />
                </span>
                <p>{phone}</p>
            </div>
            <div className="flex gap-5 mb-10">
                <span role="img" aria-label="clock"><IoTimeOutline />
                </span>
                <div>
                    <p>{hours1}</p>
                    <p>{hours2}</p>
                </div>
            </div>
        </div>
    );
};

const ContactLocationSection = () => {
    return (
        <div id='contact_location_section' className='container location_container flex gap-30'>
            <div className="location_left">
                <div className="map-container">
                    <img src="path/to/map-image.png" alt="Map" className="w-full rounded-lg" />
                </div>
            </div>

            <div className="location_right">
                <div className="mb-30">
                    <MediaCenter
                        title="Medical Center 1"
                        address="4517 Washington Ave. Manchester, Kentucky 39495"
                        phone="(406) 555-0120"
                        hours1="Mon - Fri: 9:00 am - 22:00 pm"
                        hours2="Sat - Sun: 9:00 am - 20:00 pm"
                    />
                </div>

                <MediaCenter
                    title="Medical Center 2"
                    address="2464 Royal Ln. Mesa, New Jersey 45463"
                    phone="(406) 544-0123"
                    hours1="Mon - Fri: 9:00 am - 22:00 pm" hours2="Sat - Sun: 9:00 am - 20:00 pm"
                />

                <ul className="social-icons">
                    <li className="icon-item">
                        <a href="#" aria-label="Facebook">
                            <FaFacebookF />
                        </a>
                    </li>
                    <li className="icon-item">
                        <a href="#" aria-label="Twitter">
                            <FaTwitter />
                        </a>
                    </li>
                    <li className="icon-item">
                        <a href="#" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                    </li>
                    <li className="icon-item">
                        <a href="#" aria-label="YouTube">
                            <FaYoutube />
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default ContactLocationSection
