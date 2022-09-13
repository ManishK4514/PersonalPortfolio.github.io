import React from 'react'
import './project.css'
import IMG1 from '../../assests/project1.jpg'
import IMG2 from '../../assests/project2.jpg'
const Portfolio = () => {
  return (
    <section id='project'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        <article className="project__item">
          <div className="project__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Personal Portfolio Website</h3>
          <div className="project__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="project__item">
          <div className="project__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Disney + Hotstar Clone</h3>
          <div className="project__item-cta">
            <a href="https://github.com/ManishK4514/DisneyPlusClone.github.io" className='btn' target='_blank'>Github</a>
            <a href="https://2lfhyo.csb.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>

    </section>
  )
}

export default Portfolio