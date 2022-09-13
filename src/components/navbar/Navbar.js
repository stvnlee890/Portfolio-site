import './navbar.css'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="nav-bar-container">
      <ul className="nav-bar">
        <li>
          <span className="nav-nums">001.</span>
          <NavLink className="nav-titles about hover-underline-animation" to={'/'}>Home</NavLink>
        </li>
        {/* <li>
          <span className="nav-nums">001.</span>
          <NavLink className='nav-titles about hover-underline-animation' to={'/about'}>About</NavLink>
        </li> */}
        <li>
          <span className="nav-nums">002.</span>
          <NavLink className='nav-titles work hover-underline-animation' to={'/works'}>Works</NavLink>
        </li>
        <li>
          <span className="nav-nums">003.</span>
          <NavLink className="nav-titles experience hover-underline-animation" to={'/skills'}>Skills</NavLink>
        </li>
        <li>
          <span className="nav-nums">004.</span>
          <NavLink className='nav-titles experience hover-underline-animation' to={'/resume'}>Resume</NavLink>
        </li>
      </ul>
    </div>
  )
}