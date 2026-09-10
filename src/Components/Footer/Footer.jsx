import './Footer.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.webp'

const facebookIcon = <svg xmlns="http://www.w3.org/2000/svg" height="42" width="42" viewBox="0 0 640 640"><path fill="rgb(12, 136, 233)" d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z"/></svg>
const instagramIcon=<svg xmlns="http://www.w3.org/2000/svg" height="42" width="42" viewBox="0 0 640 640">
                    <path fill="rgb(231, 60, 78)" d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/></svg>
const linkedinIcon = <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden='true'><path d='M6.5 8.5A1.5 1.5 0 1 0 6.5 5.5a1.5 1.5 0 0 0 0 3ZM5 10h3v9H5v-9Zm5 0h3v1.3c.5-.9 1.5-1.6 3-1.6 3 0 3.5 2 3.5 4.7V19h-3v-4.1c0-1 0-2.3-1.5-2.3s-1.7 1.1-1.7 2.2V19h-3v-9Z' /></svg>
const youtubeIcon = <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden='true'><path d='M21.58 7.19a2.98 2.98 0 0 0-2.1-2.11C17.63 4.57 12 4.57 12 4.57s-5.63 0-7.48.51a2.98 2.98 0 0 0-2.1 2.11A31.2 31.2 0 0 0 1.91 12a31.2 31.2 0 0 0 .51 4.81 2.98 2.98 0 0 0 2.1 2.11c1.85.51 7.48.51 7.48.51s5.63 0 7.48-.51a2.98 2.98 0 0 0 2.1-2.11A31.2 31.2 0 0 0 22.09 12a31.2 31.2 0 0 0-.51-4.81ZM10.09 15.43V8.57L16.09 12l-6 3.43Z' /></svg>

export default function Footer() {
  return (
    <>
        <footer className='site-footer'>
          <div className='footer-main'>
            <section className='footer-brand-section'>
              <img className='footer-logo' src={logo} alt='Theramax Physical Therapy' />
              <p className='footer-tagline'>Expert physical therapy for stronger movement, less pain, and a more active life.</p>
              <div className='footer-socials' aria-label='Social media links'>
                <a className='footer-social-link' href='https://www.facebook.com/theramaxrehabs/' target='_blank' rel='noreferrer' aria-label='Facebook'>{facebookIcon}</a>
                <a className='footer-social-link' href='https://www.instagram.com/theramaxrehabs/' target='_blank' rel='noreferrer' aria-label='Instagram'>{instagramIcon}</a>
                <a className='footer-social-link' href='https://www.linkedin.com/company/theramaxrehabs' target='_blank' rel='noreferrer' aria-label='LinkedIn'>{linkedinIcon}</a>
                <a className='footer-social-link' href='https://www.youtube.com/@theramaxrehabs' target='_blank' rel='noreferrer' aria-label='YouTube'>{youtubeIcon}</a>
              </div>
            </section>
            <section className='footer-column'>
              <h2>Our Locations</h2>
              <address><a href='#east-frisco'>East Frisco, TX</a><a href='#west-frisco'>West Frisco, TX</a></address>
            </section>
            <nav className='footer-column' aria-label='Quick links'>
              <h2>Quick Links</h2>
              <Link to='/'>Home</Link>
              <Link to='/about'>About Us</Link>
              <Link to='/services'>Services</Link>
              <Link to='/contact'>Contact Us</Link>
            </nav>
            <nav className='footer-column footer-hours' aria-label='Office hours'>
              <h2>Working Hours</h2>
              <div className='hours-list'>
                <p><span>Monday - Friday</span><strong>9:00 AM - 6:00 PM</strong></p>
                <p><span>Saturday</span><strong>9:00 AM - 2:00 PM</strong></p>
                <p><span>Sunday</span><strong>Closed</strong></p>
              </div>
            </nav>
            <nav className='footer-column footer-services' aria-label='Our services'>
              <h2>Our Services</h2>
              <Link to='/services/pelvic-floor-pt'>Pelvic Floor PT</Link>
              <Link to='/services/pain-management'>Pain Management</Link>
              <Link to='/services/mechanical-traction'>Mechanical Traction</Link>
              <Link to='/services/pediatrics'>Pediatric Care</Link>
              <Link to='/services/post-surgical-care'>Post-Surgical Care</Link>
            </nav>
          </div>
          <div className='footer-bottom'><p>&copy; {new Date().getFullYear()} Theramax Physical Therapy. All rights reserved.</p>
          {/* <p>Move better. Live stronger.</p> */}
          </div>
        </footer>
    </>
  )
}