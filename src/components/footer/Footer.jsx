import React from 'react'
import './footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'


const footer = ()  => {

  return(
    <footer>
      <a href= "#" className='footer__logo'>WillAmb-Corp</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__social">
        <a href="https://facebook.com"><FaFacebookSquare/></a>
        <a href="https://instagram.con"><AiFillInstagram/></a>
        <a href="https://twitter.com"><AiFillTwitterSquare/></a>
      </div>

      <div className="footer__copyright">
        <small>
         &copy; WillAmb-Corp. All rights reserved 
        </small>
      </div>
    </footer>
  )

  
}

export default footer