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
          <div className="about__me-image">
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
            

            <articles className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ WorldWide</small>
            </articles>
           
            <articles className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>88+ complete</small>
            </articles>
          </div>


          <p>
           I am a young hard working network engineer studying at the prestigeous Faculty of Engineering and Technology (FET) of the University of Buea.
           By God's grace I will be graduating in the year 2025 with a first class honor GPA. Iam also taking some online training
           on cybersecurity with the aim of being the best cybersecurity analyst ever. I had my A-Level certificate in the year 2021 
           in the city of Douala where I grew up and got my perfection in the french speaking skills hence I can express myself both
           in english and french fluently
          </p>
          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About