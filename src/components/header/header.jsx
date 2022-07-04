import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.svg'
import HeaderSocial from './HeaderSocial'

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hola Yo soy</h5>
        <h1>Daniel Montoya</h1>
        <h5 className="text-ligth">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />

      <div className='me'>
        <img src={ME} alt='me' />
      </div>

      <a href="#contact" className='scroll_down'> Scroll Down</a>
      </div>
    </header>
  )
}

export default header