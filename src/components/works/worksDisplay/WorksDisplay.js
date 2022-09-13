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
        <img id='final-project-img' 
          src={Discography} 
          loading='lazy'
          alt='final project'/>
      </div>
      <div className='works'>
        <div className='works-title'>
          <span className='works-num fade-bottom'> 002.</span>
          <span className='work-title fade-bottom'>SHOPKEEP</span>
        </div>
        <img id='final-project-img' 
          src={Shopkeep} 
          loading='lazy'
          alt='final project'/>
      </div>
    </div>
  )
}