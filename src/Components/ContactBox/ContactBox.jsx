import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import './contactBox.css'
import { darkModeContext } from '../../provider/DarkModeProvider';

const ContactBox = ({icon, title, description, actionText}) => {

  const {isDarkModeOn} = useContext(darkModeContext)

  return (
    <div id='contact_box' className='flex gap-20 mb-20'>
      <div className={`${isDarkModeOn && 'light_dark'} icon`}>
        {icon}
      </div>
      <div className='flex direction-column gap-10'>
        <h3>{title}</h3>
        <p className='desc'>{description}</p>
        <Link>
            <span>{actionText}</span>
            <span><FaArrowRight className='arrowIcon' /></span>
        </Link>
      </div>
    </div>
  )
}

export default ContactBox
