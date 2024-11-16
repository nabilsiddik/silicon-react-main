import React, { useContext } from 'react'
import './featuresSection.css'
import featuresImage from '../../assets/image.png'
import vectorIcon from '../../assets/Vectorr.png'
import vectorIcon1 from '../../assets/Vector (1).png'
import vectorIcon2 from '../../assets/Vector (2).png'
import vectorIcon3 from '../../assets/Vector (3).png'
import vectorIcon4 from '../../assets/Vector (4).png'
import vectorIcon5 from '../../assets/Vector (5).png'
import { darkModeContext } from '../../provider/DarkModeProvider'

const FeaturesSection = () => {

  const {isDarkModeOn} = useContext(darkModeContext)

  console.log(isDarkModeOn)

  return (
    <section id="features" className={`${isDarkModeOn && 'deep_dark'}`}>
    <div className="container flex items-center justify-between gap-30">
      <div className="features_left">
        <img src={featuresImage} alt="" />
      </div>
      <div className="features_right">
        <div className="section_heading mb-30">
          <h2>App Features</h2>
          <p className="mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            volutpat mollis egestas. Nam luctus facilisis ultrices.
            Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
          </p>
        </div>
        {/* All Features */}
        <div className="all_features flex gap-30">
          {/* features col 1 */}
          <div className="features_col_1">
            <div className="icon_box flex gap-20 mb-30">
              <div className="image_icon mt-5">
                <img src={vectorIcon} alt="" />
              </div>
              <div className="texts">
                <h3>Easy Payments</h3>
                <p className="mt-10">
                  Id mollis consectetur congue egestas egestas suspendisse
                  blandit justo.
                </p>
              </div>
            </div>
            <div className="icon_box flex gap-20 mb-30">
              <div className="image_icon mt-5">
                <img src={vectorIcon2} alt="" />
              </div>
              <div className="texts">
                <h3>Cost Statistics</h3>
                <p className="mt-10">
                  Mattis urna ultricies non amet, purus in auctor non. Odio
                  vulputate ac nibh.
                </p>
              </div>
            </div>
            <div className="icon_box flex gap-20">
              <div className="image_icon mt-5">
                <img src={vectorIcon4} alt="" />
              </div>
              <div className="texts">
                <h3>Regular Cashback</h3>
                <p className="mt-10">
                  Sit facilisis dolor arcu, fermentum vestibulum arcu
                  elementum imperdiet eleifend.
                </p>
              </div>
            </div>
          </div>
          {/* features col 2 */}
          <div className="features_col_2">
            <div className="icon_box flex gap-20 mb-30">
              <div className="image_icon mt-5">
                <img src={vectorIcon1} alt="" />
              </div>
              <div className="texts">
                <h3>Data Security</h3>
                <p className="mt-10">
                  Augue pulvinar justo, fermentum fames aliquam accumsan
                  vestibulum non.{" "}
                </p>
              </div>
            </div>
            <div className="icon_box flex gap-20 mb-30">
              <div className="image_icon mt-5">
                <img src={vectorIcon3} alt="" />
              </div>
              <div className="texts">
                <h3>Support 24/7</h3>
                <p className="mt-10">
                  A elementum, imperdiet enim, pretium etiam facilisi in
                  aenean quam mauris.
                </p>
              </div>
            </div>
            <div className="icon_box flex gap-20">
              <div className="image_icon mt-5">
                <img src={vectorIcon5} alt="" />
              </div>
              <div className="texts">
                <h3>Top Standards</h3>
                <p className="mt-10">
                  Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus
                  id. Sit facilisis dolor arcu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default FeaturesSection
