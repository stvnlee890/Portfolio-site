import './worksDisplay.css'

export const WorksDisplay = () => {
  return (
    <div id='works-display-container'>
      <div className='works'>
        <div className='works-title'>
          <span className='works-num fade-bottom'> 001.</span>
          <span className='work-title fade-bottom'>DISCOGRAPHY</span>
        </div>
          <a href='https://music-discography.netlify.app/'>
            <div className='discog'></div>
          </a>
          <span className='bottom fade-bottom'>REACT | CSS</span>
      </div>
      <div className='works'>
        <div className='works-title'>
          <span className='works-num fade-bottom'> 002.</span>
          <span className='work-title fade-bottom'>SHOPKEEP</span>
        </div>
          <a href='https://shopkepp.netlify.app/'>
            <div className='shopkeep'></div>
          </a>
          <span className='bottom fade-bottom'>MERN STACK | AWS</span>
      </div>
      <div className='works'>
        <div className='works-title'>
          <span className='works-num fade-bottom'> 003.</span>
          <span className='work-title fade-bottom'>STORYPOST</span>
        </div>
          <a href='https://storypost.netlify.app/'>
            <div className='storypost'></div>
          </a>
          <span className='bottom fade-bottom'>MERN STACK | AWS | TAILWIND</span>
      </div>
    </div>
  )
}

