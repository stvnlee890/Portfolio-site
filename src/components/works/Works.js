import './works.css'
import { WorksDisplay } from './worksDisplay/WorksDisplay'

export const Works = () => {
  return (
    <div id='works'>
      <h1 className="title-tag active reveal fade-bottom">Works</h1>
      <div id='works-display'>
        <WorksDisplay />
      </div>
    </div>
  )
}