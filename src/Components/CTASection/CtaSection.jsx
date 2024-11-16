import React, { useContext } from 'react'
import './CtaSection.css'
import ctaImgRight from '../../assets/image (2).png'
import ctaImgLeft from '../../assets/image (1).png'
import { FaRegCheckCircle } from "react-icons/fa";
import vectorIcon from '../../assets/Vectorr.png'
import vectorIcon4 from '../../assets/Vector (4).png'
import { darkModeContext } from '../../provider/DarkModeProvider';

const CtaSection = () => {
  const {isDarkModeOn} = useContext(darkModeContext)
  return (
    <section id="cta" className={`${isDarkModeOn && 'deep_dark'}`}>
      <div className="container">
        {/* CTA Rwo 1 */}
        <div className="cta_row_1 flex items-center justify-between gap-30">
          <div className="row_1_left">
            <h2 className="mb-20">
              Make your money <br /> transfer simple and clear
            </h2>
            <ul className="flex direction-column gap-20">
              <li className="flex items-center gap-10">
                <span className="icon">
                <FaRegCheckCircle />
                </span>
                <span>Banking transactions are free for you</span>
              </li>
              <li className="flex items-center gap-10">
                <span className="icon">
                <FaRegCheckCircle />
                </span>
                <span>No monthly cash commission</span>
              </li>
              <li className="flex items-center gap-10">
                <span className="icon">
                    <FaRegCheckCircle />
                </span>
                <span>Manage payments and transactions online</span>
              </li>
            </ul>
            <button className="mt-20">
              <span>
                <i className="fa-solid fa-arrow-right" />
              </span>
              <span>Learn More</span>
            </button>
          </div>
          <div className="row_1_right">
            <img src={ctaImgRight} alt="" />
          </div>
        </div>
        {/* CTA Row 2 */}
        <div className="cta_row_2 flex items-center justify-between gap-30">
          <div className="row_2_left">
            <img src={ctaImgLeft} alt="" />
          </div>
          <div className="row_2_right">
            <h2 className="mb-20">
              Receive payment from international bank details
            </h2>
            <div className="cta_icon_boxes flex gap-30">
              <div className="icon_box">
                <div className="image_icon mt-5 mb-10">
                  <img src={vectorIcon} alt="" />
                </div>
                <div className="texts">
                  <p className="mt-10">
                    A elementur and imperdiet enim, pretium etiam facilisi
                    aenean quam mauris..
                  </p>
                </div>
              </div>
              <div className="icon_box">
                <div className="image_icon mt-5 mb-10">
                  <img src={vectorIcon4} alt="" />
                </div>
                <div className="texts">
                  <p className="mt-10">
                    Manage your payments online. Mollis congue egestas egestas
                    fermentum fames.
                  </p>
                </div>
              </div>
            </div>
            <button className="mt-20">
              <span>
                <i className="fa-solid fa-arrow-right" />
              </span>
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
