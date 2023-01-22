import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaBlackTie} from 'react-icons/fa'
import {TbUsers} from 'react-icons/tb'
import {TbFileCertificate} from 'react-icons/tb'
import {FiCheckCircle} from 'react-icons/fi'
import {AiFillAmazonCircle} from 'react-icons/ai'


const About = () => {
  return (
    <section id='about'>
      <h5> Get to know</h5>
      <h2>About me</h2>
      
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about-me"/>
          </div>
        </div>
      
      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaBlackTie className='about__icon'/>
            <h5>Experience</h5>
            <small>2+ years</small>
          </article>
          <article className='about__card'>
            <TbUsers className='about__icon'/>
            <h5>Employers</h5>
            <small><AiFillAmazonCircle fontSize='20px'/> <FiCheckCircle fontSize='19px'/></small>
          </article>
          <article className='about__card'>
            <TbFileCertificate className='about__icon'/>
            <h5>Education</h5>
            <small>Undergrad CSE</small>
          </article>
        </div>
        
        <p className='about__content'>
          Result oriented, CS graduate based out of India.
          I've professional experience in working with Critical and High Volume Proprietary Web and Mobile applications, Distributed systems and System softwares.
          My skills include Design and Developement of Multithreaded Distributed Systems Engineering,
          Compliance Engineering, iOS app Development, Cloud Computing, Web and Mobile Automation, DevOps and Embedded Middleware/Framework development.
          Recognised and rewarded by former employer for Great team work and Collaboration within and across teams and stakeholders.
        </p>
        
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        
      </div>
      </div>
      
    </section>
  )
}

export default About