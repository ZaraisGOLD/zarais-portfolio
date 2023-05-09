import React, { useState } from 'react'
import './styles/header.css'

const Header = () => {

  const [menu, setMenu] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const handleMenu = () => {
    setMenu(!menu)
  }

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <header>
      <nav className="navbar">
        <a className="navbar__logo" href="home">
          <img src="/logo.svg" alt="logo" />
        </a>
        <ul className={`navbar__menu ${menu ? 'open' : ''}`} >
          <li className='navbar__menu--list'><a href="home">Home</a></li>
          <li className='navbar__menu--list'><a href="projects">Projects</a></li>
          <li className='navbar__menu--list'><a href="about">About</a></li>
          <li className='navbar__menu--list'><a href="contact">Contact</a></li>
        </ul>
        <div className='navbar__icons'>
          <div className='icons__moonSun'>
            <img onClick={handleDarkMode} className={`menu__icon--luna ${darkMode ? 'night' : ''}`} src="/luna.svg" alt="" />
            <img onClick={handleDarkMode} className={`menu__icon--sol ${darkMode ? 'day' : ''}`} src="/sol.svg" alt="" />
          </div>
          <i onClick={handleMenu} className='bx bx-menu'></i>
        </div>
      </nav>
    </header>
  )
}

export default Header