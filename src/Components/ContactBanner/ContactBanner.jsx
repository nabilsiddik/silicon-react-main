import React, { useContext } from 'react'
import BreadCumb from '../Breadcumb/BreadCumb'
import ContactBox from '../ContactBox/ContactBox'
import { FaRegEnvelope } from "react-icons/fa";
import { LuUsers2 } from "react-icons/lu";
import './contactBanner.css'
import ConsultationForm from '../ConsultationForm/ConsultationForm';
import { darkModeContext } from '../../provider/DarkModeProvider';

const ContactBanner = () => {

  const {isDarkModeOn} = useContext(darkModeContext)


  return (
    <div id='contact_banner' className={`${isDarkModeOn && 'deep_dark'}`}>
        <div className="container">
        <div>
            <BreadCumb/>
        </div>
        <div className='flex gap-30 banner_container'>
            <div className='banner_left'>
                <h2>Contact page</h2>
                <div className="mb-30">
                  <ContactBox icon = {<FaRegEnvelope />} title="Email Us" description='Please feel free to drop us a line. We will respond as soon as possible.' actionText = 'Leave a message' />
                </div>

                <ContactBox icon = {<LuUsers2 />} title="Careers" description='Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.' actionText='Send an application' />
            </div>

            <div className='banner_right'>
                <ConsultationForm/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactBanner
