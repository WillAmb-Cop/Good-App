import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
const Experience = () =>
{
  return (
    <section id= 'experience'> 
    <h5>What skills I have</h5>
    <h2>My experience</h2>

    <div className=" container experience__container">
      <div className="experience__frontend">
        <h3>Network Device Connection</h3>
        <div className="experience__content">
          <article className="experience__details">
             <BsFillPatchCheckFill className='experience__detail-icons'/>
             <div>
              <h4>Huawei</h4>
             <small className='text-light'>Experienced</small>
             </div>
          </article>
          <article className="experience__details">
             <BsFillPatchCheckFill className='experience__detail-icons'/>
             <div>
             <h4>Cisco</h4>
             <small className='text-light'>Experienced</small>
             </div>
          </article>
          <article className="experience__details">
             <BsFillPatchCheckFill className='experience__detail-icons'/>
             <div>
             <h4>Dell Technologies</h4>
             <small className='text-light'>Intermediate</small>
             </div>
          </article>
          <article className="experience__details">
             <BsFillPatchCheckFill className='experience__detail-icons'/>
             <div>
             <h4>Extreme Network</h4>
             <small className='text-light'>Intermediate</small>
             </div>
          </article>
          <article className="experience__details">
             <BsFillPatchCheckFill className='experience__detail-icons'/>
             <div>
             <h4>Cumulus Network</h4>
             <small className='text-light'>Intermediate</small>
             </div>
          </article>

        </div>
      </div>
      <div className="Experience__Frontend">
      <h3>Front End</h3>
        <div className="experience__content">
          <article className="experience__details">
             <BsFillPatchCheckFill className='experience__detail-icons'/>
            <div>
            <h4>HTML</h4>
             <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className="experience__details">
             <BsFillPatchCheckFill className='experience__detail-icons'/>
             <div>
             <h4>CSS</h4>
             <small className='text-light'>Experienced</small>
             </div>
          </article>
          <article className="experience__details">
             <BsFillPatchCheckFill className='experience__detail-icons'/>
             <div>
             <h4>JavaScript</h4>
             <small className='text-light'>Intermediate</small>
             </div>
          </article>
          <article className="experience__details">
             <BsFillPatchCheckFill className='experience__detail-icons'/>
             <div>
             <h4>React</h4>
             <small className='text-light'>Intermediate</small>
             </div>
          </article>
          <article className="experience__details">
             <BsFillPatchCheckFill className='experience__detail-icons'/>
             <div>
             <h4>Bootstrap</h4>
             <small className='text-light'>Intermediate</small>
             </div>
          </article>
          <article className="experience__details">
             <BsFillPatchCheckFill className='experience__detail-icons'/>
             <div>
             <h4>Tailwind</h4>
             <small className='text-light'>Intermediate</small>
             </div>
          </article>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Experience