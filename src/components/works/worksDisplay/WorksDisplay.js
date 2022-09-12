import  Shopkeep from '../../../assets/images/shopkeep.png'
import './worksDisplay.css'

export const WorksDisplay = () => {
  return (
    <div id='works-display-container'>
      <img id='final-project-img' 
        src={Shopkeep} 
        loading='lazy'
        alt='final project'/>
    </div>
  )
}