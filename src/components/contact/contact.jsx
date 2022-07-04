import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const contact = () => {


  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kml05la', 'template_yg2pobl', form.current, 'qRDRT4MGCOQoodjA6')
    

      e.target.reset();
  };



  return (
    <section id='contact'>
      <h5>Ponerse en contacto</h5>
      <h2>contáctame</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>dm757623@gmail.com</h5>
            <a href="mailto:dm757623@gmail.com" target='_blank'>enviar mensage</a>
          </article>

          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>daniel montoya</h5>
            <a href="https://m.me/montoyacarrasco"  target='_blank'>enviar mensage</a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+56978464837</h5>
            <a href="https://wa.me/56978464837"  target='_blank'>enviar mensage</a>
          </article>
        </div>
        <form ref={form} onSubmit ={sendEmail}>
          <input type="text" name='name' placeholder='nombre' required />
          <input type="email" name='email' placeholder='email' required />
          <textarea name='message' rows='7' placeholder='mensage' required></textarea>
          <button type='submit' className='btn btn-primary'>enviar</button>
        </form>
      </div>
    </section>
  )
}

export default contact