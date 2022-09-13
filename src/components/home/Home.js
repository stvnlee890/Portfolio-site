import './home.css'
import { AboutIntro } from '../about/aboutIntro/AboutIntro'
import { useState, useEffect } from 'react'

export const Home = () => {
  const [showComponent, setShowComponent] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(!showComponent)
    },800)
  }, [])
  
  return (
    <div id='name'>
      <h1 className="title-tag active reveal fade-bottom">SEUNG KI LEE</h1>
      {showComponent && <AboutIntro />}
    </div>
  )
}