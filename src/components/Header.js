import React from 'react'
import Logo from '../assets/logo.jpeg'

const Header = () => {
  return (
    <div className='header'>
        <img className='logo' src={Logo} alt="Logo" />
        <ul className='header-list'>
            <li>Home</li>
            <li>Books</li>
            <li>Contact us</li>
            <li>Login</li>
        </ul>
      
    </div>
  )
}

export default Header
