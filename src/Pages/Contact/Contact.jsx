import React, { useContext } from 'react'
import ContactBanner from '../../Components/ContactBanner/ContactBanner'
import ContactLocationSection from '../../Components/ContactLocationSection/ContactLocationSection'
import { darkModeContext } from '../../provider/DarkModeProvider'

const Contact = () => {

  const {isDarkModeOn} = useContext(darkModeContext)

  return (
    <div id='contact_page' className={`${isDarkModeOn && 'deep_dark'}`}>
      <ContactBanner/>
      <ContactLocationSection/>
    </div> 
  )
}

export default Contact
