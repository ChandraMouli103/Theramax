import React, { useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/Logo.webp'

export default function Header() {
  
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeNav, setActiveNav] = useState('Home')
    const navigate = useNavigate()
    const servicesDetailsRef = useRef(null)

    const closeServiceMenu = () => {
      if (servicesDetailsRef.current) {
        servicesDetailsRef.current.removeAttribute('open')
      }
    }

    const handleServiceMouseLeave = () => {
      if (window.matchMedia('(min-width: 769px)').matches) {
        closeServiceMenu()
      }
    }

    const handleServiceClick = (event, slug) => {
      event.preventDefault()
      closeServiceMenu()
      setMenuOpen(false)
      navigate(`/services/${slug}`)
    }

    const handleServicesToggle = () => {
      setActiveNav('Services')
    }
// pelvic floor, Pain management, Manual Therapy, Mechanical Traction, Gait Training, Post Surgical Care, pediatrics, vestibular Therapy, Laser Therapy, dry Needling, Cupping
    const services = [
      { label: 'Pelvic Floor PT', slug: 'pelvic-floor-pt' },
        { label: 'Pain Management', slug: 'pain-management' },
        {label: 'Manual Therapy', slug: 'manual-therapy'},
        {label: 'Mechanical Traction', slug: 'mechanical-traction'},
        { label: 'Gait Training', slug: 'gait-training' },
        { label: 'Post-Surgical Care', slug: 'post-surgical-care' },
        { label: 'Pediatric', slug: 'pediatrics' },
      { label: 'Vestibular Therapy', slug: 'vestibular-therapy' },
        { label: 'Laser Therapy', slug: 'laser-therapy' },
        {label:'Dry Needling', slug:'dry-needling'},
        {label:'Dry Cupping', slug:'cupping'},
    ]
      const bookapp=<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M8 17h.01"/><path d="M12 17h.01"/><path d="M16 17h.01"/></svg>
      const callicon=<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 6h8"/><path d="m18 2 4 4-4 4"/><path d="M13.832 16.568a1 1 0 0 1 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
  return (
    <>
    <header className='site-header'>
    <div className='hours-ticker' role='status' aria-label='Saturday working hours'>
      <div className='hours-ticker-track'>
        <span><svg className='hours-ticker-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'><path d='M8 2v4M16 2v4M3 10h18' /><rect x='3' y='4' width='18' height='18' rx='2' /></svg>Saturday appointments available - 9:00 AM to 2:00 PM</span>
        <span aria-hidden='true'><svg className='hours-ticker-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M8 2v4M16 2v4M3 10h18' /><rect x='3' y='4' width='18' height='18' rx='2' /></svg>Saturday appointments available - 9:00 AM to 2:00 PM</span>
        <span aria-hidden='true'><svg className='hours-ticker-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path d='M8 2v4M16 2v4M3 10h18' /><rect x='3' y='4' width='18' height='18' rx='2' /></svg>Saturday appointments available - 9:00 AM to 2:00 PM</span>
      </div>
    </div>
    <div className={`header-main-section ${menuOpen ? 'menu-open-active' : ''}`}>
      <img src={logo} alt="Logo" className='head-logo-img' />
      <div className='mobile-header-controls'>
        <a className='mobile-call-button' href='tel:+14692698520' aria-label='Call Theramax'>
          {callicon}
        </a>
        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          type='button'
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`header-nav ${menuOpen ? 'menu-open' : ''}`}>
        <NavLink to='/' className={`nav-item ${activeNav === 'Home' ? 'active' : ''}`} onClick={() => {
          setActiveNav('Home')
          setMenuOpen(false)
        }}>
          Home
        </NavLink>
        <NavLink to='/about' className={`nav-item ${activeNav === 'About' ? 'active' : ''}`} onClick={() => {
          setActiveNav('About')
          setMenuOpen(false)
        }}>
          About
        </NavLink>
        <details
          ref={servicesDetailsRef}
          className={`nav-item services-nav ${activeNav === 'Services' ? 'active' : ''}`}
          onToggle={(event) => event.currentTarget.open && setActiveNav('Services')}
        >
          <summary className='services-trigger' onClick={handleServicesToggle}>
            <span className='nav-item'>Services</span>
            <span className='services-chevron' aria-hidden='true' />
          </summary>
          <div
            className='services-dropdown'
            onMouseLeave={handleServiceMouseLeave}
          >
            <div className='service-items'>
              {services.map((service) => (
                <NavLink
                  className='service-item'
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  onClick={(event) => handleServiceClick(event, service.slug)}
                >
                  {service.label}
                </NavLink>
              ))}
            </div>
          </div>
        </details>
        <NavLink to='/contact' className={`nav-item ${activeNav === 'Contact' ? 'active' : ''}`} onClick={() => {
          setActiveNav('Contact')
          setMenuOpen(false)
        }}>
          Contact
        </NavLink>
        <div className='mobile-header-actions'>
          <a href='tel:+14692698520' className='btn-call'>{callicon} (469)-269-8520</a>
          <NavLink to='/contact#appointment-wrapper' className='btn-book-appointment' onClick={() => setMenuOpen(false)}>{bookapp} Book Appointment</NavLink>
        </div>
      </div>
      <div className='header-btn-section'>
        <a href='tel:+14692698520' className='btn-call'>{callicon} (469)-269-8520</a>
        <NavLink to='/contact#appointment-wrapper' className='btn-book-appointment'>{bookapp} Book Appointment</NavLink>
      </div>
    </div>
  </header>
    </>
  )
}