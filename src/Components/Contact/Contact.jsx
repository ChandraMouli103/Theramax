import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'
import image1 from '../../assets/contact1.jpg'
const locations = [
  {
    id: 'east',
    city: 'East Frisco, TX',
    label: 'East Frisco Location',
    address: ' Oaks 7101 Custer Rd St # 840 Frisco TX 75035',
    phone: '(469) 665-6237',
    mapQuery: '7101 Custer Rd, Frisco, TX 75035',
  },
  {
    id: 'west',
    city: 'West Frisco, TX',
    label: 'West Frisco Location',
    address: '8680 Main St # 3W Frisco TX 75033',
    phone: '(469) 665-6237',
    mapQuery: '8680 Main St # 3W, Frisco, TX 75033',
  },
]

const contactMethods = [
  {
    type: 'phone',
    label: 'Need Support?',
    value: '(469) 262-5630, (469) 717-0194',
    icon: '☎'
  },
  {
    type: 'email',
    label: 'Email Us',
    value: 'Tanya.theramax@gmail.com',
    icon: '✉'
  },
]

const serviceOptions = [
  'Physical Therapy',
  'Rehab',
  'Sports Recovery',
  'Pain Management'
]

export default function Contact() {

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    notes: ''
  })

  const [loading, setLoading] = useState(false)

  const [message, setMessage] = useState({
    type: '',
    text: ''
  })

  // Scroll to appointment section
  useEffect(() => {

    if (window.location.hash === '#appointment-wrapper') {

      const element = document.getElementById('appointment-wrapper')

      if (element) {

        setTimeout(() => {

          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })

        }, 100)

      }

    }

  }, [])

  // Handle all inputs
  const handleInputChange = (e) => {

    const { id, value } = e.target

    setFormData(prev => ({
      ...prev,
      [id]: value
    }))

    // If date changes, reset preferred time
    if (id === 'preferredDate') {

      setFormData(prev => ({
        ...prev,
        preferredDate: value,
        preferredTime: ''
      }))

    }

  }

  // Get day name from selected date
  const getDayName = (dateString) => {

    if (!dateString) {
      return ''
    }

    // Add time to avoid timezone problems
    const date = new Date(`${dateString}T12:00:00`)

    return date.toLocaleDateString('en-US', {
      weekday: 'long'
    })

  }

  const selectedDay = getDayName(formData.preferredDate)

  // Sunday = closed
  const isSunday = selectedDay === 'Sunday'

  // Saturday = only morning + afternoon
  const isSaturday = selectedDay === 'Saturday'

  // Monday-Friday
  const isWeekday = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
  ].includes(selectedDay)

  // Submit form
  const handleSubmit = async (e) => {

    e.preventDefault()

    setLoading(true)

    setMessage({
      type: '',
      text: ''
    })

    // Required fields
    if (!formData.fullName || !formData.email) {

      setMessage({
        type: 'error',
        text: 'Please fill in all required fields.'
      })

      setLoading(false)

      return
    }

    // Sunday validation
    if (isSunday) {

      setMessage({
        type: 'error',
        text: 'Sunday is a closed day. Please select Monday through Saturday.'
      })

      setLoading(false)

      return
    }

    try {

      // EmailJS data
      const templateParams = {

        fullName: formData.fullName,

        phone: formData.phone,

        email: formData.email,

        service: formData.service,

        preferredDate: formData.preferredDate,

        preferredTime: formData.preferredTime,

        notes: formData.notes

      }

      // Send email
      await emailjs.send(

        'service_6vfpfza',

        'template_tnu0qzi',

        templateParams,

        {
          publicKey: 'srOc6NI1Npv_efRHu'
        }

      )

      // Success
      setMessage({
        type: 'success',
        text: 'Appointment request submitted successfully! We will contact you soon.'
      })

      // Clear form
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        service: '',
        preferredDate: '',
        preferredTime: '',
        notes: ''
      })

      // Remove message after 5 seconds
      setTimeout(() => {

        setMessage({
          type: '',
          text: ''
        })

      }, 5000)

    } catch (error) {

      console.error('EmailJS Error:', error)

      console.error(
        'EmailJS Status:',
        error?.status
      )

      console.error(
        'EmailJS Text:',
        error?.text
      )

      setMessage({
        type: 'error',
        text: 'Failed to submit. Please try again or contact us directly.'
      })

    } finally {

      setLoading(false)

    }

  }

  return (

    <div className='contact-page'>

      {/* HEADER */}

      <header className='contact-page-header'>

        <div className='contact-page-header-inner'>

          <div className='header-badge'>
            Contact Us
          </div>

          <h1>
            Get Started On Your Recovery
          </h1>

          <p>
            Ready to take the first step toward feeling better? Schedule your appointment today or reach out with any questions.
          </p>

        </div>

      </header>


      {/* LOCATIONS */}

      <section className='contact-locations-wrapper'>

        <div className='contact-header'>

          <p className='eyebrow'>
            Need any help ? Get in touch with us
          </p>

          <h2>
            Two Convenient Locations
          </h2>

          <p className='subtitle'>
            Visit us at whichever location works best for you — our team is
            ready to welcome you.
          </p>

        </div>


        <div className='location-grid'>

          {locations.map((location) => (

            <article key={location.id} className='location-card'>
              <div className='location-card-copy'>
                <span className='marker-badge' aria-hidden='true'>
                  <svg viewBox='0 0 24 24' role='presentation'>
                    <path d='M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z' />
                    <circle cx='12' cy='10' r='2.5' />
                  </svg>
                </span>

                <p className='location-city'>
                  {location.city}
                </p>

                <h3 className='location-name'>
                  {location.label}
                </h3>

                <address className='location-address'>
                  {location.address}
                </address>

                <a
                  href={`tel:${location.phone.replace(/[^\d]/g, '')}`}
                  className='location-phone'
                >
                  Call: {location.phone}
                </a>
              </div>
              <div className='location-map-cont'>
                <iframe
                  title={`${location.label} map`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&output=embed`}
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                />
              </div>
            </article>

          ))}

        </div>


        {/* SUPPORT */}

        <div className='support-strip'>

          {contactMethods.map((method) => (

            <div
              key={method.type}
              className='support-item'
            >

              <div className='support-icon'>
                {method.icon}
              </div>

              <div className='support-text'>

                <span>
                  {method.label}
                </span>

                {method.type === 'phone' ? (

                  <a
                    href={`tel:${method.value
                      .split(',')[0]
                      .replace(/[^\d]/g, '')}`}
                    className='support-phone-link'
                  >
                    {method.value}
                  </a>

                ) : (

                  <strong>
                    {method.value}
                  </strong>

                )}

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* APPOINTMENT */}

      <section
        id='appointment-wrapper'
        className='appointment-wrapper'
      >

        <div className='section-heading'>

          <p className='eyebrow dark'>
            Contact us
          </p>

          <h2>
            Get Started On Your Recovery
          </h2>

          <p>
            Ready to take the first step toward feeling better?
            Schedule your appointment today or reach out with any questions.
          </p>

        </div>


        <div className='appointment-box'>

          <div className='appointment-form-panel'>

            <h3>
              Book An Appointment
            </h3>


            {/* MESSAGE */}

            {message.text && (

              <div
                className={`form-message ${message.type}`}
              >

                {message.type === 'success'
                  ? '✓'
                  : '⚠'}

                {' '}

                {message.text}

              </div>

            )}


            <form
              className='appointment-form'
              onSubmit={handleSubmit}
            >

              <div className='form-grid'>


                {/* FULL NAME */}

                <div className='field-group'>

                  <label htmlFor='fullName'>
                    Full Name *
                  </label>

                  <input
                    id='fullName'
                    type='text'
                    placeholder='Your name'
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />

                </div>


                {/* PHONE */}

                <div className='field-group'>

                  <label htmlFor='phone'>
                    Phone
                  </label>

                  <input
                    id='phone'
                    type='tel'
                    placeholder='(520) 555-5555'
                    value={formData.phone}
                    onChange={handleInputChange}
                  />

                </div>


                {/* EMAIL */}

                <div className='field-group full-width'>

                  <label htmlFor='email'>
                    Email *
                  </label>

                  <input
                    id='email'
                    type='email'
                    placeholder='your@email.com'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />

                </div>


                {/* SERVICE */}

                <div className='field-group'>

                  <label htmlFor='service'>
                    Service
                  </label>

                  <div className='select-wrap'>

                    <select
                      id='service'
                      value={formData.service}
                      onChange={handleInputChange}
                    >

                      <option value=''>
                        Select Service
                      </option>

                      {serviceOptions.map((option) => (

                        <option
                          key={option}
                          value={option}
                        >

                          {option}

                        </option>

                      ))}

                    </select>

                  </div>

                </div>


                {/* PREFERRED DATE */}

                <div className='field-group'>

                  <label htmlFor='preferredDate'>
                    Preferred Date
                  </label>

                  <input
                    id='preferredDate'
                    type='date'
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                  />

                </div>


                {/* PREFERRED TIME */}

                <div className='field-group'>

                  <label htmlFor='preferredTime'>
                    Preferred Time
                  </label>

                  <div className='select-wrap'>

                    <select
                      id='preferredTime'
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      disabled={!formData.preferredDate || isSunday}
                    >

                      {/* No date selected */}

                      {!formData.preferredDate && (

                        <option value=''>
                          Select Preferred Date First
                        </option>

                      )}


                      {/* Sunday */}

                      {isSunday && (

                        <option value=''>
                          Sunday - Closed
                        </option>

                      )}


                      {/* Monday-Friday */}

                      {isWeekday && (

                        <>

                          <option value=''>
                            Select Preferred Time
                          </option>

                          <option value='Morning (9 AM - 12 PM)'>
                            Morning (9 AM - 12 PM)
                          </option>

                          <option value='Afternoon (12 PM - 2 PM)'>
                            Afternoon (12 PM - 2 PM)
                          </option>

                          <option value='Evening (3 PM - 6 PM)'>
                            Evening (3 PM - 6 PM)
                          </option>

                        </>

                      )}


                      {/* Saturday */}

                      {isSaturday && (

                        <>

                          <option value=''>
                            Select Preferred Time
                          </option>

                          <option value='Morning (9 AM - 12 PM)'>
                            Morning (9 AM - 12 PM)
                          </option>

                          <option value='Afternoon (12 PM - 2 PM)'>
                            Afternoon (12 PM - 2 PM)
                          </option>

                        </>

                      )}

                    </select>

                  </div>

                </div>

              </div>


              {/* NOTES */}

              <div className='field-group'>

                <label htmlFor='notes'>
                  Additional Notes
                </label>

                <textarea
                  id='notes'
                  rows='4'
                  placeholder='Tell us about your condition or any special concerns...'
                  value={formData.notes}
                  onChange={handleInputChange}
                />

              </div>


              {/* SUBMIT */}

              <button
                type='submit'
                className='submit-btn'
                disabled={loading}
              >

                {loading
                  ? 'Submitting...'
                  : 'Request Appointment'}

              </button>

            </form>

          </div>


          {/* IMAGE */}

          <div className='appointment-visual-panel'>

            <img
              src={image1}
              alt='Therapy consultation'
            />

          </div>

        </div>

      </section>

    </div>

  )

}