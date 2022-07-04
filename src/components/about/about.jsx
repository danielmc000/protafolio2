import React from 'react'
import './about.css'
import ME from '../../assets/me-about.svg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Llegar a saber</h5>
      <h2>sobre mí</h2>

      <div className='container about_container'>
        <div className='about_me'>
          
        
        <div className='about_me-image'>
          <img src={ME} alt="About Image" />
        </div>
      </div>
      
      <div className="about_content">
        <div className="about_cards">

          <article className='about_card'>
            <FaAward className='about_icon' />
            <h5>Experiencia</h5>
            <small>3+ años trabajo</small>
          </article>
        

      
          <article className='about_card'>
            <VscFolderLibrary className='about_icon' />
            <h5>Projectos</h5>
            <small>20+ completados</small>
          </article>

          <article className='about_card'>
            <VscFolderLibrary className='about_icon' />
            <h5>Projectos</h5>
            <small>20+ completados</small>
          </article>               

        </div>
        <br />
        <p>Soy Daniel Montoya titulado como analista programador, en la universidad inacap. Especializado en distintas 
          tecnologias en desarrollo web, tales como php, javaScript,framework como React, Angular. tambien especializado en las tecnologias de desarrollo de aplicaciones moviles como 
          java android, kotlin,flutter y en el hambito de de base de datos son sql server, mysql y sqlite.</p>
        <br />
        <a href="#contact" className='btn btn-primary'>Hablemos</a>
      </div>   
      </div>
      </section>
  )
}

export default about