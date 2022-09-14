import './footer.css'

export const Footer = () => {
  return (
    <div id='footer'>
      <div className='footer-container'>
        <ul className="nav-bar">
          <li>
            <a href='https://www.linkedin.com/in/seung-ki-lee/'>
              <span className='footer-titles hover-underline-animation'>LinkedIn</span>
            </a>
          </li>
          <li>
            <a href='https://github.com/stvnlee890'>
              <span className='footer-titles hover-underline-animation'>GitHub</span>
            </a>
          </li>
          <li>
            <a href='mailto: seungkilee700@gmail.com'>
              <span className='footer-titles hover-underline-animation'>Email</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}