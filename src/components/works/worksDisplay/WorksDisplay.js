import  Shopkeep from '../../../assets/images/shopkeep.png'
import Discography from '../../../assets/images/discography.png'
import './worksDisplay.css'

export const WorksDisplay = () => {
  return (
    <div id='works-display-container'>
      <div className='works'>
        <div className='works-title'>
          <span className='works-num fade-bottom'> 001.</span>
          <span className='work-title fade-bottom'>DISCOGRAPHY</span>
        </div>
        {/* <a href='https://music-discography.netlify.app/'>
        <img className='final-project-img' id='discog'
          src={Discography} 
          alt='final project'/>
        </a> */}
        <a href='https://music-discography.netlify.app/'>
        <div className='discog'></div>
        </a>
      </div>
      <div className='works'>
        <div className='works-title'>
          <span className='works-num fade-bottom'> 002.</span>
          <span className='work-title fade-bottom'>SHOPKEEP</span>
        </div>
        <a href='https://shopkepp.netlify.app/'>
        {/* <img className='final-project-img' id='shopkeep'
          src={Shopkeep}
          alt='final project'/> */}
          <div className='shopkeep'></div>
        </a>
      </div>
    </div>
  )
}

