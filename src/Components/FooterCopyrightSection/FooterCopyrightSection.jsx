import React, { useContext } from 'react'
import './footerCopyright.css'
import { darkModeContext } from '../../provider/DarkModeProvider'

const FooterCopyrightSection = () => {

  const {isDarkModeOn} = useContext(darkModeContext)


  return (
    <section id="footer_copyright" className={`${isDarkModeOn && 'deep_dark'}`}>
            <div className="container">
            <p className="text-center">
                © 2024 Silicon. All rights reserved. Credit MadrasThemes
            </p>
            </div>
    </section>
  )
}

export default FooterCopyrightSection
