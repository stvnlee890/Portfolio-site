import './skillset.css'
import {
  faJs,
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Skillset = () => {
  return (
    <div>
      <ul id='skill-sets'>
        <li className='skill-set-li'>
          <span className='skill-num'>001.</span>
          <span className='skill-titles'>HTML</span>
          <FontAwesomeIcon className='icons'icon={faHtml5} color="#F06529" />
        </li>
        <li className='skill-set-li'>
          <span className='skill-num'>002.</span>
          <span className='skill-titles'>CSS</span>
          <FontAwesomeIcon className='icons'icon={faCss3} color="#28A4D9" />
        </li>
        <li className='skill-set-li'> 
          <span className='skill-num'>003.</span>
          <span className='skill-titles'>JavaScript</span>
          <FontAwesomeIcon className='icons'icon={faJs} color="##F0DB4F" />
        </li>
      </ul>
    </div>
  )
}