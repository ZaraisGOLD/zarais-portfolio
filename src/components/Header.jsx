import React from 'react'
import './styles/header.css'

const handleMenu = () => {
	const menu = document.querySelector(".navbar__menu");
    const iconMenu = document.querySelector(".bx-menu");

    iconMenu.addEventListener('click', function () {
        menu.classList.toggle('navbar__menu--show');
    });
}

const Header = () => {
	return (
		<header>
			<nav className="navbar">
				<a className="navbar__logo" href="home">
					<img src="/luna.svg" alt="logo" />
				</a>
				<ul className="navbar__menu" >
					<li className='navbar__menu--list'><a href="home">Home</a></li>
					<li className='navbar__menu--list'><a href="projects">Projects</a></li>
					<li className='navbar__menu--list'><a href="about">About</a></li>
					<li className='navbar__menu--list'><a href="contact">Contact</a></li>
				</ul>
				<i onClick={handleMenu} className='bx bx-menu'></i>
				{/* <img className='menu__icon--luna' src="/luna.svg" alt="" />
				<img className='menu__icon--sol' src="/sol.svg" alt="" /> */}
			</nav>
		</header>
	)
}

export default Header