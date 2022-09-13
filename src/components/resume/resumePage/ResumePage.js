import '../resume.css'
export const ResumePage = ({ handleClick }) => {
  return (
    <div> 
      <div onClick={handleClick} className='resume-page'></div>
    </div>
  )
}