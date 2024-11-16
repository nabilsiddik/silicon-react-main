import React, { useContext } from 'react'
import './workSection.css'
import iphone12pro from '../../assets/iPhone 12 Pro.png'
import iphone12pro1 from '../../assets/iPhone 12 Pro (1).png'
import iphone12pro2 from '../../assets/iPhone 12 Pro (2).png'
import { darkModeContext } from '../../provider/DarkModeProvider'

const WorkSection = () => {

  const {isDarkModeOn} = useContext(darkModeContext)

  return (
    <section id="work" className={`${isDarkModeOn && 'deep_dark'}`}>
      <div className="container flex direction-column items-center">
        <h2 className="text-center mb-30">How Does It Work?</h2>
        <div className="work_images flex gap-30 mt-20">
          <img className="" src={iphone12pro} alt="" />
          <img src={iphone12pro2} alt="" />
          <img src={iphone12pro1} alt="" />
        </div>
        <div className="mobile_image">
          <img src={iphone12pro1} alt="" />
        </div>
        <div className="section_heading mb-30 text-center mt-30">
          <h2>Latest transaction history</h2>
          <p className="mt-10">
            Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed.
            Arcu sociis tristique quisque hac in consectetur condimentum.{" "}
          </p>
        </div>
      </div>
    </section>
  )
}

export default WorkSection
