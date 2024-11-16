import React, { useContext } from 'react'
import brandLogo1 from '../../assets/brands/brand1.png'
import brandLogo2 from '../../assets/brands/brand2.png'
import brandLogo3 from '../../assets/brands/brand3.png'
import brandLogo4 from '../../assets/brands/brand4.png'
import brandLogo5 from '../../assets/brands/brand5.png'
import brandLogo6 from '../../assets/brands/brand6.png'
import './brandSection.css'
import { darkModeContext } from '../../provider/DarkModeProvider'

const BrandSection = () => {

  const {isDarkModeOn} = useContext(darkModeContext)

  return (
    <section id="brand_section" className={`${isDarkModeOn && 'deep_dark'}`}>
      <div className="container flex items-center justify-between gap-20">
        <div className="brand_logo">
          <img src={brandLogo1} alt="brand logo" />
        </div>
        <div className="brand_logo">
          <img src={brandLogo2} alt="brand logo" />
        </div>
        <div className="brand_logo">
          <img src={brandLogo3} alt="brand logo" />
        </div>
        <div className="brand_logo">
          <img src={brandLogo4} alt="brand logo" />
        </div>
        <div className="brand_logo res_hide">
          <img src={brandLogo5} alt="brand logo" />
        </div>
        <div className="brand_logo res_hide logo_last">
          <img src={brandLogo6} alt="brand logo" />
        </div>
      </div>
    </section>
  )
}

export default BrandSection
