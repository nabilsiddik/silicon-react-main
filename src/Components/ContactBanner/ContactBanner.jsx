import React from 'react'
import BreadCumb from '../Breadcumb/BreadCumb'
import ContactBox from '../ContactBox/ContactBox'
import { FaRegEnvelope } from "react-icons/fa";
import { LuUsers2 } from "react-icons/lu";
import './contactBanner.css'
import ConsultationForm from '../ConsultationForm/ConsultationForm';

const ContactBanner = () => {
  return (
    <section id='contact_banner'>
        <div className="container">
        <div>
            <BreadCumb/>
        </div>
        <div className='flex gap-30'>
            <div className='banner_left'>
                <h2>Contact page</h2>
                <ContactBox icon = {<FaRegEnvelope />} title="Email Us" description='Please feel free to drop us a line. We will respond as soon as possible.' actionText = 'Leave a message' />

                <ContactBox icon = {<LuUsers2 />} title="Careers" description='Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.' actionText='Send an application' />
            </div>

            <div className='banner_right'>
                <ConsultationForm/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ContactBanner
