import React from 'react'
import './styles/footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__socialMedia'>
                <i className='bx bxl-instagram'></i>
                <i className='bx bxl-facebook'></i>
                <i className='bx bxl-linkedin'></i>
                <i className='bx bxl-twitter'></i>
            </div>
            {/* <div className='footer__copyrigth'>
                <h2>Zarais Díaz</h2>
            </div> */}
        </footer>
    )
}

export default Footer