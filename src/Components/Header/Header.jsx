import React, { useContext } from 'react'
import './header.css'
import logo from '../../assets/logo.png'
import logoWhite from '../../assets/logo-white.png'
import { NavLink, useLocation } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { darkModeContext } from '../../provider/DarkModeProvider';

const Header = () => {

const {onChecked, isDarkModeOn} = useContext(darkModeContext)

const location = useLocation()

  return (
    <header id="header" className={`${location.pathname === '/contact' && 'bg_primary'} ${isDarkModeOn && 'deep_dark'}`}>
        <div className="header_top">
            <div className="container flex justify-between">
            <div className="header_left flex items-center gap-20">
                <div id="logo" className="logo">
                <img src={isDarkModeOn ? logoWhite : logo} alt="logo" />
                </div>
                <nav className="menu">
                <ul className={`${isDarkModeOn && 'darkMenu'} flex items-center gap-10`}>
                    <NavLink className='nav_link' to='/'>Home</NavLink>
                    <NavLink className='nav_link' to='/contact'>Contact</NavLink>
                </ul>
                </nav>
            </div>
            <div className="header_right">
                <div className="flex items-center gap-20 justify-end">
                <div className="mode flex items-center gap-10">
                    <span className="mode_text">Dark Mode</span>
                    <div className="toggle-container">
                    <label className="switch">
                        <input onClick={onChecked}  type="checkbox" id="darkModeSwitch" />
                        <span className="slider" />
                    </label>
                    </div>
                </div>
                <div className="signup">
                    <button>
                    <span>
                        <i className="fa-regular fa-user" />
                    </span>
                    Sign in / up
                    </button>
                </div>
                <div className="mobile_menu_icon">
                    <span>
                        <FaBars />
                    </span>
                </div>
                </div>
            </div>
            </div>
        </div>
    </header>

  )
}

export default Header
