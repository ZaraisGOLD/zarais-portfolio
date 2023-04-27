import React from 'react'
import './styles/main.css'

const Main = () => {
    return (
        <>
            <section className='main__home' id="Home">
                <div></div>
                <h1>Hi!, I'm Zarais</h1>
                <h2>Home</h2>
                <p></p>
            </section>
            <section className='main__portfolio' id="Portfolio">
                <h2>Projects</h2>
                <div></div>
            </section>
            <section className='main__about' id="About">
                <div></div>
                <h2>About</h2>
            </section>
            <section className='main__contact' id="Contact">
                <h2>Contact</h2>
                <div></div>
            </section>
        </>
    )
}

export default Main