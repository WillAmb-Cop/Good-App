import React from 'react'
import './header.css'
import './CTA'
import CTA from './CTA' //here, we import the call to action component inside our header
import me from '../../assets/me.jpg'
import HeaderSocial from './HeaderSocial' //This lines imports the headerSocial components

export const Header = () => {
    return(
        <header>
            <div className='container header__container'>
                <h5>Hello I'm</h5>
                <h1>Will Ambe Neba</h1>
                <h5 className='text-light'>Network Engineer</h5>
                <CTA/>
                <HeaderSocial/>
                <div className='me'>
                    <img src={me} alt='W'/>
                </div>
                <a href='#contact' className='scroll__down'>Scroll Down</a>
                
            </div>
        </header>
    )
}

export default Header;