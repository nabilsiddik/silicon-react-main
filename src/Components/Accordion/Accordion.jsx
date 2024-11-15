import React, { useState } from 'react'
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";


const Accordion = ({faq}) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <li className={`${isOpen ? 'open' : ''}`}>
            <div onClick={()=> setIsOpen(!isOpen)} className="accordion_header flex items-center justify-between">
                <p>{faq.title}</p>
                <div className="icon">
                    <span>
                        {isOpen ? <MdOutlineKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                        <i className="fa-solid fa-angle-up" />
                    </span>
                </div>
            </div>
            <div className={`accordion_content pt-20 ${!isOpen && 'hidden'}`}>
                <p>
                   {faq.content}
                </p>
            </div>
        </li>
    )
}

export default Accordion
