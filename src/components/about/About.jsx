import React from 'react'
import './about.css'
import Coat from '../../assets/Coat.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to  Know</h5>
      <h2>About Me</h2>

      <div className= "container about__container">
        <div className= "about__me">
          <div className="about__me image image">
            <img src ={Coat} alt="About image"/>
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <articles className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ years of work</small>
            </articles>
            <p></p>

            <articles className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ WorldWide</small>
            </articles>
            <p></p>
            <articles className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>88+ complete</small>
            </articles>
          </div>


          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Pariatur, vel dignissimos dolore blanditiis laudantium dolores eius ut ipsa omnis.
             Nobis vitae dicta delectus laudantium aut cum cupiditate dolorum autem neque.
          </p>
          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About