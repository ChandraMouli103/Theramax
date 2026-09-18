import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import './Contact.css'
import image1 from '../../assets/contact1.jpg'

const locations = [
  {
    id: 'east',
    city: 'East Frisco, TX',
    label: 'East Frisco Location',
    address: '7101 S Custer Rd #840, Frisco, TX 75035',
    phone: '(469) 665-6237',
    mapQuery:
      'Theramax Physical Therapy, 7101 S Custer Rd #840, Frisco, TX 75035',
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
    icon: '☎',
  },
  {
    type: 'email',
    label: 'Email Us',
    value: 'Tanya.theramax@gmail.com',
    icon: '✉',
  },
]

const serviceOptions = [
  'Physical Therapy',
  'Sports Recovery',
  'Pain Management',
  'Free Telehealth Consultation',
]

const initialFormData = {
  fullName: '',
  phone: '',
  email: '',
  service: '',
  preferredDate: '',
  preferredTime: '',
  notes: '',
}

const LIMITS = {
  fullName: 100,
  phone: 25,
  email: 254,
  notes: 2000,
}

const SUBMIT_COOLDOWN_MS = 30 * 1000

const normalizeText = (value) =>
  value.replace(/\s+/g, ' ').trim()

const getDayName = (dateString) => {
  if (!dateString) return ''

  const date = new Date(`${dateString}T12:00:00`)

  if (Number.isNaN(date.getTime())) return ''

  return date.toLocaleDateString('en-US', {
    weekday: 'long',
  })
}

const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const isValidPhone = (phone) => {
  if (!phone) return true

  const digits = phone.replace(/\D/g, '')

  return digits.length >= 7 && digits.length <= 15
}

const isValidDate = (dateString) => {
  if (!dateString) return true

  const date = new Date(`${dateString}T12:00:00`)

  if (Number.isNaN(date.getTime())) return false

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return date >= today
}

export default function Contact() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState(initialFormData)

  const [loading, setLoading] = useState(false)

  const [message, setMessage] = useState({
    type: '',
    text: '',
  })

  // Honeypot protection
  const [website, setWebsite] = useState('')

  // Checkbox verification
  const [isVerified, setIsVerified] = useState(false)

  // Submission cooldown
  const [lastSubmitTime, setLastSubmitTime] = useState(0)

  useEffect(() => {
    if (window.location.hash === '#appointment-wrapper') {
      const element = document.getElementById('appointment-wrapper')

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }, 100)
      }
    }
  }, [])

  const handleInputChange = (e) => {
    const { id, value } = e.target

    const maxLength = LIMITS[id]

    if (maxLength && value.length > maxLength) {
      return
    }

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))

    if (id === 'preferredDate') {
      setFormData((prev) => ({
        ...prev,
        preferredDate: value,
        preferredTime: '',
      }))
    }

    if (message.type === 'error') {
      setMessage({
        type: '',
        text: '',
      })
    }
  }

  const selectedDay = getDayName(formData.preferredDate)

  const isSunday = selectedDay === 'Sunday'

  const isSaturday = selectedDay === 'Saturday'

  const isWeekday = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
  ].includes(selectedDay)

  const validateForm = () => {
    const fullName = normalizeText(formData.fullName)
    const phone = normalizeText(formData.phone)
    const email = normalizeText(formData.email).toLowerCase()
    const notes = normalizeText(formData.notes)

    if (!fullName || !phone || !email) {
      return 'Please fill in all required fields.'
    }

    if (
      fullName.length < 2 ||
      fullName.length > LIMITS.fullName
    ) {
      return 'Please enter a valid full name.'
    }

    if (!isValidEmail(email)) {
      return 'Please enter a valid email address.'
    }

    if (!isValidPhone(phone)) {
      return 'Please enter a valid phone number.'
    }

    if (
      formData.service &&
      !serviceOptions.includes(formData.service)
    ) {
      return 'Please select a valid service.'
    }

    if (!isValidDate(formData.preferredDate)) {
      return 'Please select a valid future date.'
    }

    if (isSunday) {
      return 'Sunday is a closed day. Please select Monday through Saturday.'
    }

    if (
      formData.preferredDate &&
      !formData.preferredTime
    ) {
      return 'Please select a preferred time.'
    }

    if (
      isSaturday &&
      formData.preferredTime.includes('Evening')
    ) {
      return 'Evening appointments are not available on Saturday.'
    }

    if (notes.length > LIMITS.notes) {
      return 'Additional notes must be 2000 characters or less.'
    }

    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (loading) return

    // Checkbox verification
    if (!isVerified) {
      setMessage({
        type: 'error',
        text: 'Please check the verification box before requesting an appointment.',
      })
      return
    }

    // Honeypot protection
    if (website.trim() !== '') {
      setMessage({
        type: 'error',
        text: 'Unable to submit this request. Please try again.',
      })
      return
    }

    // Submission cooldown
    const now = Date.now()

    if (now - lastSubmitTime < SUBMIT_COOLDOWN_MS) {
      const remainingSeconds = Math.ceil(
        (SUBMIT_COOLDOWN_MS -
          (now - lastSubmitTime)) /
          1000
      )

      setMessage({
        type: 'error',
        text: `Please wait ${remainingSeconds} seconds before submitting again.`,
      })

      return
    }

    const validationError = validateForm()

    if (validationError) {
      setMessage({
        type: 'error',
        text: validationError,
      })

      return
    }

    setLoading(true)

    setMessage({
      type: '',
      text: '',
    })

    const templateParams = {
      fullName: normalizeText(formData.fullName),
      phone: normalizeText(formData.phone),
      email: normalizeText(formData.email).toLowerCase(),
      service: formData.service,
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime,
      notes: normalizeText(formData.notes),
    }

    try {
      await emailjs.send(
        'service_6vfpfza',
        'template_tnu0qzi',
        templateParams,
        {
          publicKey: 'srOc6NI1Npv_efRHu',
        }
      )

      setLastSubmitTime(Date.now())

      setMessage({
        type: 'success',
        text: 'Appointment request submitted successfully! We will contact you soon.',
      })

      setFormData(initialFormData)

      setWebsite('')

      // Reset verification
      setIsVerified(false)

      navigate('/thank-you')
    } catch (error) {
      console.error('EmailJS Error:', error)

      setMessage({
        type: 'error',
        text: 'Failed to submit. Please try again or contact us directly.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="contact-page">

      {/* HEADER */}

      <header className="contact-page-header">
        <div className="contact-page-header-inner">

          <div className="header-badge">
            Contact Us
          </div>

          <h1>
            Get Started On Your Recovery
          </h1>

          <p>
            Ready to take the first step toward feeling better?
            Schedule your appointment today or reach out with any questions.
          </p>

        </div>
      </header>


      {/* LOCATIONS */}

      <section className="contact-locations-wrapper">

        <div className="contact-header">

          <p className="eyebrow">
            Need any help ? Get in touch with us
          </p>

          <h2>
            Two Convenient Locations
          </h2>

          <p className="subtitle">
            Visit us at whichever location works best for you —
            our team is ready to welcome you.
          </p>

        </div>


        <div className="location-grid">

          {locations.map((location) => (

            <article
              key={location.id}
              className="location-card"
            >

              <div className="location-card-copy">

                <span
                  className="marker-badge"
                  aria-hidden="true"
                >

                  <svg
                    viewBox="0 0 24 24"
                    role="presentation"
                  >

                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />

                    <circle
                      cx="12"
                      cy="10"
                      r="2.5"
                    />

                  </svg>

                </span>


                <p className="location-city">
                  {location.city}
                </p>


                <h3 className="location-name">
                  {location.label}
                </h3>


                <address className="location-address">
                  {location.address}
                </address>


                <a
                  href={`tel:${location.phone.replace(
                    /[^\d]/g,
                    ''
                  )}`}
                  className="location-phone"
                >
                  Call: {location.phone}
                </a>

              </div>


              <div className="location-map-cont">

                <iframe
                  title={`${location.label} map`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    location.mapQuery
                  )}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

              </div>

            </article>

          ))}

        </div>


        {/* SUPPORT */}

        <div className="support-strip">

          {contactMethods.map((method) => (

            <div
              key={method.type}
              className="support-item"
            >

              <div className="support-icon">
                {method.icon}
              </div>


              <div className="support-text">

                <span>
                  {method.label}
                </span>


                {method.type === 'phone' ? (

                  <a
                    href={`tel:${method.value
                      .split(',')[0]
                      .replace(/[^\d]/g, '')}`}
                    className="support-phone-link"
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
        id="appointment-wrapper"
        className="appointment-wrapper"
      >

        <div className="section-heading">

          <p className="eyebrow dark">
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


        <div className="appointment-box">

          <div className="appointment-form-panel">

            <h3>
              Book An Appointment
            </h3>


            {/* MESSAGE */}

            {message.text && (

              <div
                className={`form-message ${message.type}`}
                role="alert"
                aria-live="polite"
              >

                {message.type === 'success'
                  ? '✓'
                  : '⚠'}{' '}

                {message.text}

              </div>

            )}


            <form
              className="appointment-form"
              onSubmit={handleSubmit}
              noValidate
            >


              {/* HONEYPOT */}

              <div
                style={{
                  position: 'absolute',
                  left: '-9999px',
                  width: '1px',
                  height: '1px',
                  overflow: 'hidden',
                }}
                aria-hidden="true"
              >

                <label htmlFor="website">
                  Leave this field empty
                </label>

                <input
                  id="website"
                  name="website"
                  type="text"
                  value={website}
                  onChange={(e) =>
                    setWebsite(e.target.value)
                  }
                  tabIndex="-1"
                  autoComplete="off"
                />

              </div>


              <div className="form-grid">


                {/* FULL NAME */}

                <div className="field-group">

                  <label htmlFor="fullName">
                    Full Name <span className="required-mark" aria-hidden="true">*</span>
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Your name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    maxLength={LIMITS.fullName}
                    autoComplete="name"
                    required
                  />

                </div>


                {/* PHONE */}

                <div className="field-group">

                  <label htmlFor="phone">
                    Phone <span className="required-mark" aria-hidden="true">*</span>
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(520) 555-5555"
                    value={formData.phone}
                    onChange={handleInputChange}
                    maxLength={LIMITS.phone}
                    autoComplete="tel"
                    required
                  />

                </div>


                {/* EMAIL */}

                <div className="field-group full-width">

                  <label htmlFor="email">
                    Email <span className="required-mark" aria-hidden="true">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    maxLength={LIMITS.email}
                    autoComplete="email"
                    required
                  />

                </div>


                {/* SERVICE */}

                <div className="field-group">

                  <label htmlFor="service">
                    Service
                  </label>

                  <div className="select-wrap">

                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                    >

                      <option value="">
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

                <div className="field-group">

                  <label htmlFor="preferredDate">
                    Preferred Date
                  </label>

                  <input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    min={
                      new Date()
                        .toISOString()
                        .split('T')[0]
                    }
                  />

                </div>


                {/* PREFERRED TIME */}

                <div className="field-group">

                  <label htmlFor="preferredTime">
                    Preferred Time
                  </label>

                  <div className="select-wrap">

                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      disabled={
                        !formData.preferredDate ||
                        isSunday
                      }
                    >

                      {!formData.preferredDate && (

                        <option value="">
                          Select Preferred Date First
                        </option>

                      )}


                      {isSunday && (

                        <option value="">
                          Sunday - Closed
                        </option>

                      )}


                      {isWeekday && (

                        <>

                          <option value="">
                            Select Preferred Time
                          </option>

                          <option value="Morning (9 AM - 12 PM)">
                            Morning (9 AM - 12 PM)
                          </option>

                          <option value="Afternoon (12 PM - 2 PM)">
                            Afternoon (12 PM - 2 PM)
                          </option>

                          <option value="Evening (3 PM - 6 PM)">
                            Evening (3 PM - 6 PM)
                          </option>

                        </>

                      )}


                      {isSaturday && (

                        <>

                          <option value="">
                            Select Preferred Time
                          </option>

                          <option value="Morning (9 AM - 12 PM)">
                            Morning (9 AM - 12 PM)
                          </option>

                          <option value="Afternoon (12 PM - 2 PM)">
                            Afternoon (12 PM - 2 PM)
                          </option>

                        </>

                      )}

                    </select>

                  </div>

                </div>

              </div>


              {/* NOTES */}

              <div className="field-group">

                <label htmlFor="notes">
                  Additional Notes
                </label>

                <textarea
                  id="notes"
                  name="notes"
                  rows="4"
                  placeholder="Tell us about your condition or any special concerns..."
                  value={formData.notes}
                  onChange={handleInputChange}
                  maxLength={LIMITS.notes}
                />

              </div>


              {/* CHECKBOX VERIFICATION */}

              <div
                className="verification-box"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  margin: '15px 0',
                  padding: '12px 14px',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  background: '#fafafa',
                }}
              >

                <input
                  id="verification"
                  name="verification"
                  type="checkbox"
                  checked={isVerified}
                  onChange={(e) => {
                    setIsVerified(e.target.checked)

                    if (message.type === 'error') {
                      setMessage({
                        type: '',
                        text: '',
                      })
                    }
                  }}
                  style={{
                    width: '18px',
                    height: '18px',
                    cursor: 'pointer',
                  }}
                />

                <label
                  htmlFor="verification"
                  style={{
                    cursor: 'pointer',
                    margin: 0,
                    fontSize: '14px',
                  }}
                >
                  I confirm that the information provided
                  is correct.
                </label>

              </div>


              {/* SUBMIT */}

              <button
                type="submit"
                className="submit-btn"
                disabled={loading || !isVerified}
                style={{
                  opacity:
                    !isVerified || loading
                      ? 0.6
                      : 1,
                  cursor:
                    !isVerified || loading
                      ? 'not-allowed'
                      : 'pointer',
                }}
              >

                {loading
                  ? 'Submitting...'
                  : 'Request Appointment'}

              </button>

            </form>

          </div>


          {/* IMAGE */}

          <div className="appointment-visual-panel">

            <img
              src={image1}
              alt="Therapy consultation"
            />

          </div>

        </div>

      </section>

    </div>
  )
}


export function ThankYou() {
  const navigate = useNavigate()

  return (

    <main className="thank-you-page">

      <section
        className="thank-you-card"
        aria-live="polite"
      >

        <div
          className="thank-you-icon"
          aria-hidden="true"
        >
          ✓
        </div>


        <p className="contact-eyebrow">
          Appointment Request Received
        </p>


        <h1>
          Thank You!
        </h1>


        <p className="thank-you-message">
          Your appointment request has been submitted
          successfully. Our team will contact you soon
          to confirm the details.
        </p>


        <button
          type="button"
          className="thank-you-back-button"
          onClick={() =>
            navigate(
              '/contact#appointment-wrapper'
            )
          }
        >
          Submit Another Request
        </button>

      </section>

    </main>

  )
}