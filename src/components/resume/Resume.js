import './resume.css'
import { ResumePage } from './resumePage/ResumePage'
import { Modal } from './modal/Modal'
import { useState } from 'react'

export const Resume = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleClick = () => {
    setOpenModal(true)
  }

  return (
    <div id='resume'>
      <h1 className='title-tag active reveal fade-bottom'>Resume</h1>
      <div className='resume-page-container'>
        <div className='resume-title'>
          <span className='resume-title fade-bottom'>Click to view resume</span>
        </div>
        <ResumePage handleClick={handleClick}/>
      </div>
      {openModal && <Modal closeModal={setOpenModal} />}
        
    </div>
  )
}