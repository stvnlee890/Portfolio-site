import './skillset.css'

export const Skillset = () => {

  return (
    <div>
      <ul id='skill-sets'>
        <li className='skill-set-li'>
          <span className='skill-num hover-underline-animation'>001.</span>
          <span className='skill-titles'>HTML5</span>
          {/* <FontAwesomeIcon className='icons hide'icon={faHtml5} color="#F06529" /> */}
        </li>
        <li className='skill-set-li'>
          <span className='skill-num hover-underline-animation'>002.</span>
          <span className='skill-titles'>CSS3</span>
          {/* <FontAwesomeIcon className='icons'icon={faCss3} color="#28A4D9" /> */}
        </li>
        <li className='skill-set-li'> 
          <span className='skill-num hover-underline-animation'>003.</span>
          <span className='skill-titles'>JavaScript</span>
          {/* <FontAwesomeIcon className='icons'icon={faJs} color="#F0DB4F" /> */}
        </li>
        <li className='skill-set-li'> 
          <span className='skill-num hover-underline-animation'>004.</span>
          <span className='skill-titles'>React</span>
        </li>
        <li className='skill-set-li'> 
          <span className='skill-num hover-underline-animation'>005.</span>
          <span className='skill-titles'>Python</span>
        </li>
        <li className='skill-set-li'> 
          <span className='skill-num hover-underline-animation'>006.</span>
          <span className='skill-titles'>Node.js</span>
        </li>
        <li className='skill-set-li'> 
          <span className='skill-num hover-underline-animation'>007.</span>
          <span className='skill-titles'>Express</span>
        </li>
      </ul>
    </div>
  )
}