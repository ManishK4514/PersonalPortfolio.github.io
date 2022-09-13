import React from 'react'
import './skills.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Skills = () => {
  return (
    <section id='skills'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container skill__container">
        <div className="skill__interest">
          <h3>Skills</h3>
          <div className="skill__content">
            <article className="skill__details">
              <BsPatchCheckFill className = 'skill__details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className = 'skill__details-icon' />
              <div>
                <h4>Data Structures</h4>
                <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className = 'skill__details-icon' />
              <div>
                <h4>Algorithms</h4>
                <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className = 'skill__details-icon' />
              <div>
                <h4>C</h4>
                <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className = 'skill__details-icon' />
              <div>
                <h4>C++</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>

        {/* END OF SKILLS */}

        <div className="skill__frontend">
          <h3>Frontend Development</h3>
          <div className="skill__content">
            <article className="skill__details">
              <BsPatchCheckFill className = 'skill__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className = 'skill__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className = 'skill__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className = 'skill__details-icon' />
              <div>
                <h4>React Js</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills