import React from 'react'
import './styles/main.css'

const Main = () => {
  return (
    <>
      <section className='main__home' id="Home">
        <div className='home__container'>
          <div className='home'>
            <h1 className='home__title'>Hi!, I'm Zarais</h1>
            <p className='home__paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam rem deleniti, quae reiciendis quasi quia necessitatibus blanditiis sit perferendis aut eveniet libero, quidem voluptas. Soluta natus voluptate illo velit omnis.</p>
          </div>
        </div>
      </section>
      <section className='main__projects' id="Projects">
        <div className='projects__container'>
          <div className='projects'>
            <h1 className='projects__title'>Projects</h1>
            <p className='projects__paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam rem deleniti, quae reiciendis quasi quia necessitatibus blanditiis sit perferendis aut eveniet libero, quidem voluptas. Soluta natus voluptate illo velit omnis.</p>
          </div>
        </div>
      </section>
      <section className='main__about' id="About">
        <div className='about__container'>
          <div className='about'>
            <h1 className='about__title'>About</h1>
            <p className='about__paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam rem deleniti, quae reiciendis quasi quia necessitatibus blanditiis sit perferendis aut eveniet libero, quidem voluptas. Soluta natus voluptate illo velit omnis.</p>
          </div>
        </div>
      </section>
      <section className='main__contact' id="Contact">
        <div className='contact__container'>
          <div className="contact">
            <h1 className='contact__title'>Contact</h1>
            <p className='contact__paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam rem deleniti, quae reiciendis quasi quia necessitatibus blanditiis sit perferendis aut eveniet libero, quidem voluptas. Soluta natus voluptate illo velit omnis.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Main