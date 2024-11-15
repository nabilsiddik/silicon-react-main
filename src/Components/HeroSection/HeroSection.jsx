import React from 'react'
import './heroSection.css'
import heroImage from '../../assets/hero.svg'
import appStoreLogo from '../../assets/appstore.png'
import googlePlayLogo from '../../assets/googleplay.png'
import { FaAngleRight } from "react-icons/fa";


const HeroSection = () => {
    return (
        <section id="hero">
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
                                <img id="app_store_desktop" src={appStoreLogo} alt="" />
                                <img id="play_store_desktop" src={googlePlayLogo} alt="" />
                            </div>
                        </div>
                        <div className="mobile_img">
                            <img id="app_store_mobile" src={appStoreLogo} alt="" />
                            <img id="play_store_mobile" src={googlePlayLogo} alt="" />
                        </div>
                    </div>
                    <div className="flex items-center gap-10 mb-30 discover_more">
                        <span className="icon">
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
