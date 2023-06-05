import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kkcz7r9', 'template_pyj11je', form.current, 'gCL3ftI6jKFzbzSAT')
    e.target.reset()

  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option" >
          <FiGithub className="contact__option-icon"/>
          <h4>View my repositories</h4>
          <h5>WillAmb-Corp</h5>
          <a href="https://github.com/WillAmb-Cop/Good-App" target="_blank">Check some codes</a>
          </article>
          <article className="contact__option">
          <MdOutlineEmail className="contact__option-icon"/>
          <h4>LinkedIn</h4>
          <h5>Check my proposals</h5>
          <a href="https://www.linkedin.com/feed/" target="_blank">See more</a>
          </article>
          <article className="contact__option">
          <AiOutlineLinkedin className="contact__option-icon"/>
          <h4>LinkedIn</h4>
          <h5>nebaprincewill237@gmail.com</h5>
          <a href="mailto:nebaprincewill237@gmail.com" target="_blank">Send a mail</a>
          </article>
          <article className="contact__option">
          <BsWhatsapp className="contact__option-icon"/>
          <h4>Whatsapp</h4>
          <h5>+237657395579</h5>
          <a href="" target="_blank">Whatsapp Me</a>
          </article>
        </div>
        <form href={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="your_name" required/>
          <input type="email" name="email" placeholder="your_email" required/>
          <textarea name="message" rows="7" placeholder="Message"></textarea>
          <button  type="submit" className='btn btn-primmary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
