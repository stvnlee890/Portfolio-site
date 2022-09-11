import './navbar.css'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="nav-bar-container">
      <ul className="nav-bar">
        <li>
          <span className="nav-nums">000.</span>
          <NavLink className="nav-titles about animate" to={'/'}>Home</NavLink>
        </li>
        <li>
          <span className="nav-nums">001.</span>
          <span className="nav-titles about animate">About</span>
        </li>
        <li>
          <span className="nav-nums">002.</span>
          <span className="nav-titles work animate">Works</span>
        </li>
        <li>
          <span className="nav-nums">003.</span>
          <NavLink className="nav-titles experience animate" to={'/skills'}>Skills</NavLink>
        </li>
        <li>
          <span className="nav-nums">004.</span>
          <span className="nav-titles resume animate">Resume</span>
        </li>
      </ul>
    </div>
  )
}