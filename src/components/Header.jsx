import React from 'react'

function Header() {
  return (
    <header>
      <nav>
        <a className="logo" href="#home">Open Road Diesel Repair</a>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

