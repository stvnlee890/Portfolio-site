import './about.css'
import { AboutIntro } from './aboutIntro/AboutIntro'

export const About = () => {
  return (
    <div id='about-container'>
      <div id='about'>
        <h1 className="title-tag active reveal fade">About</h1>
      </div>
      <div id='about-content-container' className='fade-bottom'>
        <div id='about-intro-container'>
          <AboutIntro />
        </div>
        {/* <div id='profile-image-container'>
          <ProfileImage />
        </div> */}
      </div>
    </div>
  )
}