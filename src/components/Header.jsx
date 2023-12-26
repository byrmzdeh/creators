import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../sass/header.scss'

const Header = () => {
  
    return (
        <div className='navbar'>
            <div className="header-img">
                <img width={60} src="https://shtheme.com/demosd/upcreatorswp/wp-content/themes/upcreators/assets/svg/logo--black.svg" alt="err" />
                <span>Creators</span>
            </div>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to={'/about'}>About Us</NavLink></li>
                <li> <NavLink to={'/pages'}>Pages</NavLink></li>
                <li><NavLink to={'/events'}>Events</NavLink></li>
                <li><NavLink to={'/work'}>Our Works</NavLink></li>
                <li><NavLink to={'/news'}>News</NavLink></li>
                <li><NavLink to={'/shop'}>Shop</NavLink></li>
            </ul>

            <button><a href='#'>Get In Touch</a><i className="fa-solid fa-arrow-right"></i></button>


        </div>
    )
}

export default Header
