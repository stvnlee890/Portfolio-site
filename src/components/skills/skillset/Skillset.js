import './skillset.css'

export const Skillset = () => {
  return (
    <div>
      <ul id='skill-sets'>
        <li className='skill-set-li'>
          <span className='skill-num'>001.</span>
          <span className='skill-titles'>HTML</span>
        </li>
        <li className='skill-set-li'>
          <span className='skill-num'>002.</span>
          <span className='skill-titles'>CSS</span>
        </li>
        <li className='skill-set-li'> 
          <span className='skill-num'>003.</span>
          <span className='skill-titles'>JavaScript</span>
        </li>
      </ul>
    </div>
  )
}