import './footer.css'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
  return (
    <div id='footer'>
      <div className='footer-container'>
        <ul className="nav-bar">
          <li>
            {/* <span className="nav-nums">000.</span> */}
            <a href='https://www.linkedin.com/in/seung-ki-lee/'>
              {/* <FontAwesomeIcon className='social-media'icon={faLinkedin} color='#3b3b3b'/> */}
              <span className='footer-titles hover-underline-animation'>LinkedIn</span>
            </a>
          </li>
          <li>
            {/* <span className="nav-nums">001.</span> */}
            <a href='https://github.com/stvnlee890'>
              {/* <FontAwesomeIcon className='social-media'icon={faGithub} color='#3b3b3b'/> */}
              <span className='footer-titles hover-underline-animation'>GitHub</span>
            </a>
          </li>
          <li>
            {/* <span className="nav-nums">002.</span> */}
            <a href='mailto: seungkilee700@gmail.com'>
              {/* <FontAwesomeIcon className='social-media'icon={faEnvelope} color='#3b3b3b'/> */}
              <span className='footer-titles hover-underline-animation'>Email</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}