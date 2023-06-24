import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {CgTwitter} from 'react-icons/cg'
import {BsInstagram} from 'react-icons/bs'
const HeaderSocial = () => {
    return (
        <div className='header__social'>
            <a href='https://linkedin.com' target='blank'><BsLinkedin/> </a>
            <a href='https://github.com' target='blank'><FaGithub/> </a>
            <a href='https://facebook.com' target='blank'><FaFacebook/> </a>
            <a href='https://twitter.com' target='blank'><CgTwitter/> </a>
            <a href='httlps://instagram.com' target='blank'><BsInstagram/></a>
            </div>
                )
}

export default HeaderSocial