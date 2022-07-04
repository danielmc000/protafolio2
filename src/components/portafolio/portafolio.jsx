import React from 'react'
import './portafolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Tienda E-commerce',
    github: 'https://github.com/danielmc000/e-commerce',
    demo: 'https://e-commerse3.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Muebleria',
    github: 'https://github.com/danielmc000/Muebleriajs',
    demo: 'https://muebleria007.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Vidreria Vellavista',
    github: 'https://github.com/danielmc000/vidreria',
    demo: 'https://vellavista.netlify.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'App cartelera peliculas',
    github: 'https://github.com/danielmc000/peliculas',
    demo: 'https://github.com/danielmc000/peliculas'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Escaner Qr',
    github: 'https://github.com/danielmc000/QRScaner/tree/master',
    demo: 'https://play.google.com/store/apps/details?id=com.dckn.codelab.qr'
  },
  {
    id: 6,
    image: IMG6,
    title: 'delirevy flutter',
    github: 'https://github.com/danielmc000/delirevy_flutter',
    demo: 'https://github.com/danielmc000/delirevy_flutter'
  }

]



const portafolio = () => {
  return (
    <section id='portafolio'>
      <h5>Mis trabajos resientes</h5>
      <h2>Portafolio</h2>

      <div className='container portfolio_container'>
       {
         data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio_item'>
              <div className='portfolio_item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>this is a portfolio item title</h3>
              <div className='portfolio_item-cta'>
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
              
            </article>
            )
         })
        }
      </div>

    </section>
  )
}

export default portafolio