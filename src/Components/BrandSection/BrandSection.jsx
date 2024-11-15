import React from 'react'
import brandLogo1 from '../../assets/brand-1.png'
import brandLogo2 from '../../assets/brand-2.png'
import brandLogo3 from '../../assets/brand-3.png'
import brandLogo4 from '../../assets/brand-4.png'
import brandLogo5 from '../../assets/brand-5.png'
import brandLogo6 from '../../assets/brand-6.png'

const BrandSection = () => {
  return (
    <section id="brand_section">
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
        <div className="brand_logo res_hide">
          <img src={brandLogo6} alt="brand logo" />
        </div>
      </div>
    </section>
  )
}

export default BrandSection
