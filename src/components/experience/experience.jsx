import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>que habilidades tengo</h5>
      <h2>Mis Habilidades</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experimentado</small>
              </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
              <div>              
              <h4>CSS</h4>
              <small className='text-light'>intermedio</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
             <div>
             <h4>Angular</h4>
              <small className='text-light'>Basico</small>
             </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Sass css</h4>
              <small className='text-light'>Intermedio</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience_backend'>
        <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Node JS</h4>
              <small className='text-light'>Experimentado</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>intermedio</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>MySql</h4>
              <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Basico</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Sql</h4>
              <small className='text-light'>Intermedio</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience