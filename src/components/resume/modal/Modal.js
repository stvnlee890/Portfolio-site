import './modal.css'
import Resume1 from '../../../assets/images/resume1.png'
import Resume2 from '../../../assets/images/resume2.png'
export const Modal = ({ closeModal }) => {
  
  return (
    <div className="modal-background">
        <button className='close-button' onClick={() => closeModal(false)}> X </button>
      <div className="modal-container">
          <img className="body" id='img' alt='resume page 1' src={Resume1} />
          <img className="body" id='img' alt='resume page 2' src={Resume2} />
      </div>
    </div>
  )
}

