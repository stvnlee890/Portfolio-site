import Profile from '../../../assets/images/profile.jpg'
import './profileImage.css'

export const ProfileImage = () => {
  return (
    <div id='profile-image-container'>
      <img 
        className='profile-image'
        src={Profile} 
        alt='profile picture'
      />
    </div>
  )
}