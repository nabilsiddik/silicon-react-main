import React, { useContext } from 'react'
import './heroSection.css'
import heroImage from '../../assets/hero.svg'
import appStoreLogo from '../../assets/appstore.png'
import googlePlayLogo from '../../assets/googleplay.png'

import appStoreLogoWhite from '../../assets/appstore-white-desk.png'
import googlePayLogoWhite from '../../assets/googleplay-white-desk.png'


import appStoreLogoWhiteMobile from '../../assets/app-white-mobile.png'
import playWhiteMobile from '../../assets/play-white-mobile.png'

import { FaAngleRight } from "react-icons/fa";
import { darkModeContext } from '../../provider/DarkModeProvider'

const HeroSection = () => {
    
    const {isDarkModeOn} = useContext(darkModeContext)

    return (
        <section id="hero" className={`${isDarkModeOn && 'deep_dark'}`}>
            <div className="container">
                <div className="title_for_mobile">
                    <h1>
                        Manage All Your <br /> Money in One App
                    </h1>
                </div>
            </div>
            <div className="container flex justify-between gap-30">
                <div className="hero_left flex direction-column justify-between mt-70">
                    <div>
                        <h1>
                            Manage All Your <br /> Money in One App
                        </h1>
                        <p className="my-20">
                            We offer you a new generation of the mobile banking.Save, <br />{" "}
                            spend &amp; manage money in your pocket.
                        </p>
                        <div className="app_download flex items-center gap-10">
                            <div className="desktop_img flex items-center gap-5">
                                <img id="app_store_desktop" src={isDarkModeOn ? appStoreLogoWhite : appStoreLogo} alt="" />
                                <img id="play_store_desktop" src={isDarkModeOn ? googlePayLogoWhite : googlePlayLogo} alt="" />
                            </div>
                        </div>
                        <div className="mobile_img">
                            <img id="app_store_mobile" src={isDarkModeOn ? appStoreLogoWhiteMobile : appStoreLogo} alt="" />
                            <img id="play_store_mobile" src={isDarkModeOn ? playWhiteMobile : googlePlayLogo} alt="" />
                        </div>
                    </div>
                    <div className="flex items-center gap-10 mb-30 discover_more">
                        <span className={`${isDarkModeOn && 'light_dark'} icon`}>
                            <FaAngleRight />
                        </span>
                        <span className="text">Discover More</span>
                    </div>
                </div>
                <div className="hero_right flex justify-end">
                    <img src={heroImage} alt="Hero Image" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection
