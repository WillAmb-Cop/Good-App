import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {MdContacts} from 'react-icons/md'
import {useState} from 'react'
const Navbar = () => {
  const [activeNavbar, setActiveNavbar] = useState('#')
  return (
    <navbar>
      <a href="#" oneClick={() => setActiveNavbar ('#')}
      className= {activeNavbar === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" oneClick={() => setActiveNavbar ('#about')} 
      className= {activeNavbar === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" oneClick={() => setActiveNavbar ('#')}
      className= {activeNavbar === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#services" oneClick={() => setActiveNavbar ('#')}
      className= {activeNavbar === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact"oneClick={() => setActiveNavbar ('#')}
      className= {activeNavbar === '#contact' ? 'active' : ''}><MdContacts/></a>
    </navbar>
  )
}

export default Navbar
