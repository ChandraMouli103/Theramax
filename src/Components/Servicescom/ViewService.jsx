import './ViewService.css'
import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { serviceData, serviceOrder } from './ServiceCatalog'

export default function ViewService() {
  const { slug } = useParams()
  const service = serviceData.find((item) => item.slug === slug) || serviceData[0]
  const [activeFaq, setActiveFaq] = useState(0)
  const activeServiceLinkRef = useRef(null)

  useEffect(() => {
    activeServiceLinkRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }, [service.slug])

  const benefitColors = ['#1f8f63', '#0f5baf', '#f4a000', '#7c5ce7']
  const benefitIcons = {
    'Manual Therapy': '✋',
    'Therapeutic Exercise': '🏃',
    'Dry Needling': '💉',
    'Pain Education': '📘',
    'Specialized Balance Rehabilitation': '⚖️',
    'Experienced Therapy Professionals': '🩺',
    'Personalized Treatment Plans': '🧭',
    'Supportive and Compassionate Care': '🤝',
    'Safe and Controlled Treatment': '🛡️',
    'Experienced Physical Therapy Team': '👩‍⚕️',
    'Comprehensive Spine Care': '🦴',
    'Personalized Patient Support': '💙',
    'Child-Focused Therapy Programs': '🧒',
    'Experienced Pediatric Therapists': '🌟',
    'Support for Development and Mobility': '🚶',
    'Family-Centered Care': '🏡',
    'Customized Recovery Programs': '✅',
    'Professional Rehabilitation Support': '🤍',
    'Pain Management and Mobility Improvement': '🧘',
    'Compassionate Patient Care': '💚',
    'Personalized Treatment Plans': '🧭',
    'Experienced and Skilled Therapists': '🧑‍🏫',
    'Comprehensive Rehabilitation Services': '📈',
    'Patient-Centered Care and Support': '💬',
    'Personalized Rehabilitation Programs': '📋',
    'Experienced Physical Therapy Specialists': '🧠',
    'Non-Surgical and Drug-Free Treatment': '🌿',
    'Long-Term Prevention and Care': '🛠️',
    'Comprehensive Evaluation': '📊',
    'Personalized Treatment Plan': '🧩',
    'Progressive Rehabilitation': '📈',
    'Return to Function': '🔁',
    'Specialized Neurological Rehabilitation': '🧠',
    'Experienced Therapy Professionals': '🩺',
    'Comprehensive Functional Training': '🏋️‍♂️',
    'Compassionate and Supportive Care': '🤝',
    'Non-Invasive Pain Relief': '🌤️',
    'Advanced Therapy Technology': '⚙️',
    'Customized Treatment Programs': '🎯',
    'Comprehensive Recovery Support': '🔧',
    'Private, Comfortable Setting': '🛋️',
    'Expert Guidance and Education': '📚'
  }

  return (
    <section className='view-service-page'>

      <div className='service-hero-banner'>
        <div className='service-hero-copy'>
          <p className='detail-kicker'>Service Focus</p>
          <h2>{service.title}</h2>
          <p>{service.tag}</p>
        </div>
      </div>
    <header className='view-service-header'>
        <h2>our services</h2>
        <div className='service-header-links'>
          {serviceOrder.map((slug) => {
            const item = serviceData.find((serviceItem) => serviceItem.slug === slug)
            const isActive = service.slug === item.slug

            return (
              <Link
                key={item.slug}
                to={`/services/${item.slug}`}
                ref={isActive ? activeServiceLinkRef : undefined}
                className={`service-pill-link ${isActive ? 'active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.title}
              </Link>
            )
          })}
        </div>
      </header>
      {/* <article className='service-detail-card'> */}
        <div className='service-detail-top'>

          <div className='detail-copy'>
            <p className='detail-kicker'>{service.category}</p>
            <h2>{service.heading}</h2>
            <p>{service.overview}</p>
          </div>
           <img
            src={service.image}
            alt={service.title}
            className='service-detail-image'
          />
        </div>

        <div className='article-section what-is-app'>
          <h3>{service.approachTitle}</h3>
          <span></span>
          <p>{service.approachText}</p>
          <p>{service.approachText2}</p>
        </div>

        <div className='article-section con-dit-sec'>
          <h3>Conditions We Treat</h3>
          <span></span>
          {/* <p> We provide personalized care and rehabilitation for a wide range of
            conditions, helping patients manage pain, improve mobility, restore
            strength, and get back to their daily activities with confidence.</p> */}
          <div className='condition-list'>
            {service.conditions.map((item) => (
              <div key={item} className='condition-item'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#1ae05f" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="why-choose-benefits">
            <h1>why choose Us for {service.title} ?</h1>
            <span></span>
        <div className='benefits-row'>
          {service.methods.map((method, index) => {
            const accent = benefitColors[index % benefitColors.length]
            const icon = benefitIcons[method.title] || '✓'

            return (
              <div key={method.title} className='benefit-box' style={{ '--benefit-accent': accent }}>
                <span className='benefit-icon-span' aria-hidden='true'>{icon}</span>
                <h4>{method.title}</h4>
                <p>{method.text}</p>
              </div>
            )
          })}
        </div>
        </div>

        <div className='article-section faq-accordion-wrap'>
          <h3>Frequently Asked Questions !</h3>
          <div className='faq-accordion'>
            {service.faq.map((answer, index) => {
              const isOpen = activeFaq === index
              const question = `How can ${service.title} help?`

              return (
                <div key={`${service.slug}-faq-${index}`} className={`faq-item ${isOpen ? 'active' : ''}`}>
                  <button
                    type='button'
                    className='faq-question'
                    onClick={() => setActiveFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span className='faq-question-text'>{question}</span>
                    <span className='faq-toggle'>{isOpen ? '-' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className='faq-answer'>
                      <p>{answer}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className='final-cta'>
          <h3>{service.ctaTitle}</h3>
          <p>{service.ctaText}</p>

          <div className='final-actions'>
            <Link to='/contact#appointment-wrapper' className='book-button'>Book Appointment</Link>
            <a href={`tel:${service.phone.replace(/[^\d]/g, '')}`} className='call-button' aria-label={`Call ${service.phone}`}>Call: {service.phone}</a>
          </div>
        </div>
      {/* </article> */}
    </section>
  )
}
