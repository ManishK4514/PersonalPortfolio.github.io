import React from 'react'
import './about.css'
import ME from '../../assests/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FaUserGraduate} from 'react-icons/fa'
import {BsFillFileEarmarkCodeFill} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="About Image" id='myPhoto'/>
        </div>

        <div className="about__content">
          <div className="about__cards">
          <article className="about__card">
            <FaAward className = "about__icon"/>
            <h5>Student</h5>
            <small>MCR Ranchi</small>
          </article>
          
          <article className="about__card">
            <FaUserGraduate className = "about__icon"/>
            <h5>course</h5>
            <small>BCA</small>
          </article>

          <article className="about__card">
            <BsFillFileEarmarkCodeFill className = "about__icon"/>
            <h5>Projects</h5>
            <small>2 Completed</small>
          </article>
        </div>
          

          
        <p id='para'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, omnis. Amet, ab nulla quia accusantium dicta autem voluptatibus in officia possimus laboriosam harum nihil pariatur, odit excepturi dolor corrupti eveniet.
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About