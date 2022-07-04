import React from 'react'
import './services.css' 
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>Mis Servicios</h5>
      <h2>Servicios</h2>

      <div className='container service_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>UI/UX Desnig</h3>
          </div>

          <ul className='service_list'>
            <li> 
              <BiCheck className='service_list-icon'/>
              <p>Análisis de mapas de navegación.</p>
            </li>
            <li> 
              <BiCheck className='service_list-icon'/>
              <p>Diseño de wireframes.</p>
            </li>
            <li> 
              <BiCheck className='service_list-icon'/>
              <p>Creación de prototipod de interfaz de usuario.</p>
            </li>
            <li> 
              <BiCheck className='service_list-icon'/>
              <p>Diseño adaptativo.</p>
            </li>
            <li> 
              <BiCheck className='service_list-icon'/>
              <p>Adobe XD.</p>
            </li>
            <li> 
              <BiCheck className='service_list-icon'/>
              <p>figma.</p>
            </li>
          </ul>
        </article>



        <article className='service'>
          <div className='service_head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service_list'>
            <li> 
              <BiCheck className='service_list-icon'/>
              <p> Adaptación y rediseño de paginas web para cumplir con estándares
HTML, CSS, etc
- Maquetación, d</p>
            </li>
            <li> 
              <BiCheck className='service_list-icon'/>
              <p>Frameworks Angular, React.</p>
            </li>
            <li> 
              <BiCheck className='service_list-icon'/>
              <p>Control de verciones GitHub.</p>
            </li>
            <li> 
              <BiCheck className='service_list-icon'/>
              <p> Maquetación, desarrollo y programación de páginas web en
HTML,CSS,JavaScript, PHP.etc adaptadas a todo tipo de dispositivos.</p>
            </li>
            <li> 
              <BiCheck className='service_list-icon'/>
              <p>Lenguaje de Backend.</p>
            </li>
            <li> 
              <BiCheck className='service_list-icon'/>
              <p> Experiencia en desarrollo de aplicaciones Windows y Web</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service_head'>
            <h3>App Development</h3>
          </div>

          <ul className='service_list'>
            <li> 
              <BiCheck className='service_list-icon'/>
              <p>Diseño, mantenimiento y desarrollo de nuevas
                 funcionalidades para aplicaciones de android</p>
            </li>
            <li> 
              <BiCheck className='service_list-icon'/>
              <p>Desarrollo de aplicaciones nativas para android
.</p>
            </li>
            <li> 
              <BiCheck className='service_list-icon'/>
              <p>Utilizó lenguajes de programación de flutter, java,
kotlin, React native
</p>
            </li>
            <li> 
              <BiCheck className='service_list-icon'/>
              <p>Diseño de aplicaciones con Material Design
.</p>
            </li>
            <li> 
              <BiCheck className='service_list-icon'/>
              <p>Realización de tareas cumpliendo con la
normativa y la legislacion vigente en el lugar de
trabajo.</p>
            </li>
            <li> 
              <BiCheck className='service_list-icon'/>
              <p>Publicación de aplicaciones en Google play.</p>
            </li>
          </ul>
        </article>
        
      </div>
    </section>
  )
}

export default services