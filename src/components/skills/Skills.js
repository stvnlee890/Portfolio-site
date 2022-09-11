import './skills.css'
import { Skillset } from './skillset/Skillset'

export const Skills = () => {
  return (
    <div id='skills-container'>
    <div id='skills'>
      <h1 className="title-tag active reveal fade-bottom">Skills</h1>
    </div>
    <div id='skillset-container'>
      <Skillset />
    </div>
    </div>
  )
}