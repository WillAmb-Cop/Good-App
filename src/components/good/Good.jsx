import './good.css'
import img1 from './../../assets/photo_4.1.jpg'
import img2 from './../../assets/photo_6.jpg'
import img3 from './../../assets/photo_3.1.jpg'
import img4 from './../../assets/photo_5.1.jpg'
import img5 from './../../assets/photo_1.jpg'
import img6 from './../../assets/photo_6.11.webp'
const Good = () => {
  return (
    <section id='good'>
      <h5>My React Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img1} alt=''/>
          </div>
          <h3>This Is A Portfolio Item title</h3>
          <a href="https://github.com/WillAmb-Cop/Good-App.git" className='btn'>Github</a>
          <a href="https://dribbble.com/shots/21518875-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img2} alt=''/>
          </div>
          <h3>This Is A Portfolio Item title</h3>
          <a href="https://github.com/WillAmb-Cop/Good-App.git" className='btn'>Github</a>
          <a href="https://dribbble.com/shots/21518875-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img3} alt=''/>
          </div>
          <h3>This Is A Portfolio Item title</h3>
          <a href="https://github.com/WillAmb-Cop/Good-App.git" className='btn'>Github</a>
          <a href="https://dribbble.com/shots/21518875-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img4} alt=''/>
          </div>
          <h3>This Is A Portfolio Item title</h3>
          <a href="https://github.com/WillAmb-Cop/Good-App.git" className='btn'>Github</a>
          <a href="https://dribbble.com/shots/21518875-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img5} alt=''/>
          </div>
          <h3>This Is A Portfolio Item title</h3>
          <a href="https://github.com/WillAmb-Cop/Good-App.git" className='btn'>Github</a>
          <a href="https://dribbble.com/shots/21518875-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img6} alt=''/>
          </div>
          <h3>This Is A Portfolio Item title</h3>
          <a href="https://github.com/WillAmb-Cop/Good-App.git" className='btn'>Github</a>
          <a href="https://dribbble.com/shots/21518875-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>

      </div>
    </section>
  )
}

export default Good