import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'


const Footer = () => {
  return (
    <footer>
    <a href="#" className="footer__logo">SAHISNU</a>
    
    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    
    <div className="footer__socials">
      <a href="https://www.instagram.com/sahisnu.s/" target="_blank"><FiInstagram/></a>
      <a href="https://twitter.com/sahisnu25" target="_blank"><IoLogoTwitter/></a>
    </div>
    
    <div className="footer__copyright">
      <small>&copy; Sahisnu. All rights reserved.</small>
    </div>
    
    </footer>
  )
}

export default Footer