import './navbar.css'

export const Navbar = () => {
  return (
    <div className="nav-bar-container">
       <ul className="nav-bar">
    <li>
      <span className="nav-nums">001.</span><span className="nav-titles about animate">About</span>
    </li>
    <li>
        <span className="nav-nums">002.</span><span className="nav-titles work animate">Works</span>
    </li>
    <li>
        <span className="nav-nums">003.</span><span className="nav-titles experience animate">Experience</span>
    </li>
    <li>
        <span className="nav-nums">004.</span><span className="nav-titles resume animate">Resume</span>
    </li>
  </ul>
    </div>
  )
}