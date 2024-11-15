import React from 'react'
import './header.css'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header id="header">
        <div className="header_top mb-60">
            <div className="container flex justify-between">
            <div className="header_left flex items-center gap-20">
                <div id="logo" className="logo">
                <img src={logo} alt="logo" />
                </div>
                <nav className="menu">
                <ul className='flex items-center gap-10'>
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
                        <input type="checkbox" id="darkModeSwitch" />
                        <span className="slider" />
                    </label>
                    </div>
                </div>
                <div className="signup">
                    <button>
                    <span>
                        <i className="fa-regular fa-user" />
                    </span>
                    Sign inuUp
                    </button>
                </div>
                <div className="mobile_menu_icon">
                    <span>
                    <i className="fa-solid fa-bars" />
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
