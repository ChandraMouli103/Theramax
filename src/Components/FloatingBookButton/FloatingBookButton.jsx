import { useNavigate } from 'react-router-dom'
import './FloatingBookButton.css'

export default function FloatingBookButton() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/contact')
    // Scroll to appointment form
    setTimeout(() => {
      const element = document.getElementById('appointment-wrapper')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  return (
    <button 
      className='floating-book-btn' 
      onClick={handleClick}
      title='Book an Appointment'
    >
      {/* <span className='floating-btn-icon'>📅</span> */}
      <span className='floating-btn-text'>Book Appointment</span>
    </button>
  )
}
