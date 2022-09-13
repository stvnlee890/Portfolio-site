import './modal.css'
import Discography from '../../../assets/images/discography.png'
export const Modal = ({ closeModal }) => {
  
  return (
    <div className="modal-background">
      <div className="modal-container">
        <button className='close-button' onClick={() => closeModal(false)}> X </button>
          <img className="body" id='img' src='https://resumegenius.com/wp-content/uploads/Retail-Manager-Resume-Example-v5-800x1035.png' />
          <img className="body" id='img' src='https://resumegenius.com/wp-content/uploads/Retail-Manager-Resume-Example-v5-800x1035.png' />
      </div>
    </div>
  )
}

