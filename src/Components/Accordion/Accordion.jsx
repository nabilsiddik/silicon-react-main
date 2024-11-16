import React, { useContext, useState } from 'react'
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { darkModeContext } from '../../provider/DarkModeProvider';


const Accordion = ({faq, isOpen, onToggle}) => {

    const {isDarkModeOn} = useContext(darkModeContext)

    return (
        <li className={`${isDarkModeOn && 'light_dark'} ${isOpen ? 'open' : ''}`}>
            <div onClick={onToggle} className="accordion_header flex items-center justify-between">
                <p style={{fontWeight: 'bold'}}>{faq.title}</p>
                <div className={`${isDarkModeOn && 'light_dark_dark'} icon`}>
                    <span>
                        {isOpen ? <MdOutlineKeyboardArrowUp /> : <MdKeyboardArrowDown />}
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
