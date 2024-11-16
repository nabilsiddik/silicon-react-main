import React, { useContext, useState } from 'react'
import './faq.css'
import { FaAngleDown } from "react-icons/fa";
import Accordion from '../Accordion/Accordion';
import { FaArrowRight } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { darkModeContext } from '../../provider/DarkModeProvider';

const FaqSection = () => {

    const {isDarkModeOn} = useContext(darkModeContext)

    const [faq, setFaq] = useState([])
    const [openIndex, setOpenIndex] = useState(null)

    const handleAccordionToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    useState(()=>{
        fetch('https://win24-assignment.azurewebsites.net/api/faq')
        .then(res => res.json())
        .then(data => setFaq(data))
    }, [])


  return (
    <section id="faq" className={`${isDarkModeOn && 'deep_dark'}`}>
            <div className="container flex justify-between gap-30">
            <div className="section_heading_mobile mb-30">
                <h2>
                Any questions? <br /> Check out the FAQs
                </h2>
                <p className="mt-10">
                Still have unanswered questions and need to&nbsp;get in&nbsp;touch?
                </p>
            </div>
            <div className="faq_left">
                <div className="section_heading desktop mb-30">
                <h2>
                    Any questions? <br /> Check out the FAQs
                </h2>
                <p className="mt-10">
                    Still have unanswered questions and need to&nbsp;get in&nbsp;touch?
                </p>
                </div>
                <div className="contact flex gap-20">
                <div className="contact_box box_1 flex direction-column gap-10">
                    <span className="icon">
                     <FaPhone />
                    </span>
                    <p>Still have questions?</p>
                    <a href="#" className='flex items-center gap-5'>
                    <span> contact us</span>
                    <span className="icon">
                        <FaArrowRight />
                    </span>
                    </a>
                </div>
                <div className="contact_box box_2 flex direction-column gap-10">
                    <span className="icon">
                        <IoChatbubbleEllipses />
                    </span>
                    <p>Still have questions?</p>
                    <a href="#" className='flex items-center gap-5'>
                    <span>contact us</span>
                    <span className="icon">
                        <FaArrowRight />
                    </span>
                    </a>
                </div>
                </div>
            </div>
            <div className="faq_right">
                <div className="accordion">
                <ul className="flex direction-column gap-10">
                    {faq.length > 0 && faq.map((faqItem, index) => {
                        return <Accordion key={faqItem.id} faq = {faqItem} isOpen={openIndex === index} onToggle={() => handleAccordionToggle(index)}/>
                    })}
                </ul>
                </div>
            </div>
            </div>
    </section>
  )
}

export default FaqSection
