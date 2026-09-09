import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import './Home.css'
import physicalTherapyImg from '../../assets/Serviceimg/physicaltheropy.jpg'
import tanyaimg from '../../assets/home/tanya.png'
import pelvicfloor from '../../assets/home/PELVIC-FLOOR-PT.webp' 
import painmangement from '../../assets/Serviceimg/advancepain.jpg'
import Mechanical from '../../assets/Serviceimg/mechanical.jpg'
import pediatrics from '../../assets/home/pediatrics.webp'
import vestibular from '../../assets/home/Vestibular-Therapy.webp'
import neurologicalImage from '../../assets/Serviceimg/Neurological.webp'
import contactImage from '../../assets/contact1.jpg'
import rehabImage from '../../assets/Serviceimg/rehab.webp'
const patientStories = [
  {
    id: 1,
    name: 'Anjan Babu',
    review: 'Great results in just a month — drastic improvement in shoulder movement and pain. The clinic is clean and the care is focused.',
    rating: 5,
  },
  {
    id: 2,
    name: 'J Carlos Manotas',
    review: 'They are helping me get stronger after my Achilles tendon surgery. I feel they care about my progress and give me excellent advice.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Srinivas Reddy',
    review: 'Tanya treated me for my fractured leg with great therapy. I\'m back to normal — great location with all the facilities I needed.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Maria Lopez',
    review: 'The team took time to understand my goals before building a plan — I felt heard from the first visit.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Robert Johnson',
    review: 'Excellent physical therapy experience. The therapists are knowledgeable and caring. Highly recommended!',
    rating: 5,
  },
  {
    id: 6,
    name: 'Sarah Williams',
    review: 'Amazing recovery journey with the best therapists. They made me feel comfortable and confident in my healing process.',
    rating: 5,
  },
]

const googleReviewUrl = 'https://www.google.com/search?q=Theramax+Physical+Therapy+Frisco+TX+reviews'

const services = [
  {
    id: 1,
     title: 'Pelvic Floor PT',
    description: 'Specialized treatment restoring strength, coordination, and comfort in pelvic muscles.',
    icon: '✨',
    img: pelvicfloor,
    slug: 'pelvic-floor-pt',
    badge: 'Most Requested'
  },
  {
    id: 2,
    title: 'Pain Management',
    description: 'Evidence-based techniques to reduce and manage pain.',
    icon: '✨',
    img: painmangement,
    slug: 'pain-management',
    badge: 'Most Requested'
  },
  {
    id: 3,
    title: 'Gait Training',
    description: 'Spinal decompression therapy for disc-related conditions.',
    icon: '⚽',
    img: Mechanical,
    slug: 'mechanical-traction',
    badge: 'New'
  },
  {
    id: 4,
   title: 'Physical Therapy',
    description: 'Personalized treatment plans to restore mobility and strength.',
    icon: '🏥',
    img: physicalTherapyImg,
    slug: 'general-physical-therapy',
    badge: 'Most Requested'
  },
]

const benefits = [
  {
    id: 1,
    title: 'Expert Therapists',
    description: 'Licensed professionals with years of experience and proven results.',
    image: physicalTherapyImg,
  },
  {
    id: 2,
    title: 'Personalized Care',
    description: 'Treatment plans customized to your unique needs and goals.',
    image: rehabImage,
  },
  {
    id: 3,
    title: 'Modern Equipment',
    description: 'State-of-the-art facilities for optimal recovery and results.',
    image: neurologicalImage,
  },
  {
    id: 4,
    title: 'Flexible Scheduling',
    description: 'Convenient appointment times at two accessible Frisco locations.',
    image: contactImage,
  },
]

const faqs = [
  {
    id: 1,
    question: 'What should I expect on my first visit?',
    answer: 'On your first visit, we\'ll conduct a comprehensive evaluation to understand your condition, medical history, and goals. This typically takes 45-60 minutes. We\'ll then create a personalized treatment plan tailored to your specific needs and recovery objectives.'
  },
  {
    id: 2,
    question: 'How long does physical therapy typically take?',
    answer: 'The duration varies depending on your condition and goals. Most patients see significant improvement within 4-8 weeks of consistent therapy. We\'ll provide you with a timeline based on your individual assessment and progress.'
  },
  {
    id: 3,
    question: 'Do I need a doctor\'s referral to start therapy?',
    answer: 'While some insurance plans require a referral, many don\'t. We can accept self-referred patients. It\'s best to check with your insurance provider or contact us directly to clarify your specific requirements.'
  },
  {
    id: 4,
    question: 'What payment options do you accept?',
    answer: 'We accept most major insurance plans, cash, credit/debit cards, and flexible payment plans. Our team will work with you to maximize your insurance benefits and discuss affordable options for your therapy.'
  }
]

const insuranceProviders = [
  { id: 1, name: 'United Healthcare', logo: '🏥' },
  { id: 2, name: 'Blue Cross Blue Shield', logo: '🔵' },
  { id: 3, name: 'Aetna', logo: '🛡️' },
  { id: 4, name: 'Cigna', logo: '💚' },
  { id: 5, name: 'Medicare', logo: '📋' },
  { id: 6, name: 'Humana', logo: '💙' },
  { id: 7, name: 'Tricare', logo: '⭐' },
  { id: 8, name: 'UnitedHealthcare Medicaid', logo: '✓' },
]

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button
        className='faq-question'
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`answer-${faq.id}`}
      >
        <span className='faq-number'>{faq.id}</span>
        <span className='faq-text'>{faq.question}</span>
        <span className='faq-toggle'>+</span>
      </button>
      <div
        id={`answer-${faq.id}`}
        className='faq-answer'
      >
        <div className='faq-answer-content'>
          {faq.answer}
        </div>
      </div>
    </div>
  )
}

function CountUpStat({ value, suffix = '', decimals = 0 }) {
  const [count, setCount] = useState(0)
  const statRef = useRef(null)

  useEffect(() => {
    if (!statRef.current) {
      return undefined
    }

    let animationFrame
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const startTime = performance.now()
        const duration = 1200

        cancelAnimationFrame(animationFrame)

        const animate = (currentTime) => {
          const progress = Math.min((currentTime - startTime) / duration, 1)
          const easedProgress = 1 - Math.pow(1 - progress, 3)
          setCount(value * easedProgress)

          if (progress < 1) {
            animationFrame = requestAnimationFrame(animate)
          }
        }

        animationFrame = requestAnimationFrame(animate)
        return
      }

      cancelAnimationFrame(animationFrame)
      setCount(0)
    }, { threshold: 0.5 })

    observer.observe(statRef.current)
    return () => {
      cancelAnimationFrame(animationFrame)
      observer.disconnect()
    }
  }, [value])

  const formattedCount = count.toFixed(decimals)
  return <span ref={statRef}>{formattedCount}{suffix}</span>
}

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState(1)
  const [expandedCard, setExpandedCard] = useState(null)
  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  const toggleCardDescription = (id) => {
    setExpandedCard((current) => (current === id ? null : id))
  }

  return (
    <div className='home-page'>
      {/* Hero Section */}
      <section className='hero-section'>
        <div className='hero-content'>
          <div className='hero-text'>
            <h1>Restore Your Motion, Reclaim Your Life</h1>
            <p>Expert physical therapy designed to help you move pain-free and live fully. We're dedicated to your recovery journey.</p>
            <div className='hero-cta'>
              <Link to='/contact#appointment-wrapper' className='btn-primary'>Book Appointment</Link>
              <Link to='/services' className='btn-secondary'>Explore Services</Link>
            </div>
          </div>
          <div className='hero-visual'>
            <div className='hero-shape'>
              <div className='hero-tag'>Trusted Care</div>

              <img src={tanyaimg} alt='Dr. Tanya Krishna Mudireddy' className='hero-image' />

              <div className='hero-floating-card hero-floating-card-top'>
                <strong>20K+</strong>
                <span>Patients Helped</span>
              </div>

              <div className='hero-floating-card hero-floating-card-bottom'>
                <strong>4.9/5</strong>
                <span>Patient Rating</span>
              </div>

              <Link to='/about#meet-tanya' className='hero-visual-link'>Meet Tanya →</Link>
            </div>
          </div>
        </div>
      </section>
     {/* Stats Section */}
      <section className='stats-section'>
        <div className='stats-grid'>
          <div className='stat-item'>
            <div className='stat-number'><CountUpStat value={20} suffix='K+' /></div>
            <p className='stat-label'>Happy Patients</p>
            <p className='stat-description'>People supported on their recovery journey.</p>
          </div>
          <div className='stat-item'>
            <div className='stat-number'><CountUpStat value={99.5} suffix='%' decimals={1} /></div>
            <p className='stat-label'>Success Rate</p>
            <p className='stat-description'>Personalized care built around real progress.</p>
          </div>
          <div className='stat-item'>
            <div className='stat-number'><CountUpStat value={2} suffix='+' /></div>
            <p className='stat-label'>Convenient Locations</p>
            <p className='stat-description'>Accessible clinics serving the Frisco community.</p>
          </div>
          <div className='stat-item'>
            <div className='stat-number'><CountUpStat value={20} suffix='+' /></div>
            <p className='stat-label'>Years Experience</p>
            <p className='stat-description'>Trusted expertise guiding every treatment plan.</p>
          </div>
        </div>
      </section>
      {/* Services Overview Section */}
      <section className='services-overview-section'>
        <div className='section-header'>
          <p className='section-eyebrow'>What We Offer</p>
          <h2>Our Core Services</h2>
          <p className='section-subtitle'>Comprehensive care tailored to your specific needs and recovery goals.</p>
        </div>

        <div className='services-grid'>
          {services.map((service) => (
            <div key={service.id} className='service-card-home'>
              {service.badge && <span className='service-card-badge'>{service.badge}</span>}

              <div className='service-icon-wrap servie-icon-wrap-home'>
                {service.img ? (
                  <img src={service.img} alt={service.title} className='service-icon' />
                ) : (
                  <div className='service-empty-visual' aria-hidden='true'>Therapy</div>
                )}
              </div>

              <div className='service-card-body'>
                <h3>{service.title}</h3>
                <p className='service-card-description'>
                  {service.description}
                </p>
              </div>

              <Link to={`/services/${service.slug}`} className='service-link'>Read More →</Link>
            </div>
          ))}
        </div>

        <div className='services-footer'>
          <Link to='/services' className='btn-primary'>View All Services</Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className='benefits-section'>
        <div className='benefits-inner'>
          <div className='benefits-header'>
            <p className='section-eyebrow alt'>Why Choose Theramax</p>
            <h2>Your Health, Our Priority</h2>
            <p>We combine clinical expertise with compassionate care to deliver results you can feel.</p>
          </div>

          <div className='benefits-grid'>
            {benefits.map((benefit) => (
              <div key={benefit.id} className='benefit-item'>
                <div className='benefit-image-wrap'>
                  <img src={benefit.image} alt='' className='benefit-image' aria-hidden='true' />
                </div>
                <div className='benefit-content'>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Stories Section */}
      <section className='patient-stories-section'>
        <div className='section-header'>
          <p className='section-eyebrow'>Patient Stories</p>
          <h2>Helping You Heal, Move, And Feel Better</h2>
        </div>
        <div className='stories-scroll-wrapper'>
          <div className='stories-scroll-container'>
            {[...patientStories, ...patientStories].map((story, index) => (
              <div key={`${story.id}-${index}`} className='patient-story-card'>
                <div className='story-header'>
                  <div className='story-stars'>
                    {[...Array(story.rating)].map((_, i) => (
                      <span key={i} className='star'>★</span>
                    ))}
                  </div>
                </div>
                <p className='story-review'>"{story.review}"</p>
                <p className='story-name'>- - {story.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='google-review-action'>
          <a
            className='google-review-button'
            href={googleReviewUrl}
            target='_blank'
            rel='noreferrer'
          >
            Leave a Google Review <span aria-hidden='true'>↗</span>
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='faq-section'>
        <div className='faq-wrapper'>
          <div className='faq-header'>
            <p className='section-eyebrow'>Got Questions?</p>
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about our services and your recovery journey.</p>
          </div>

          <div className='faq-container'>
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openFAQ === faq.id}
                onToggle={() => toggleFAQ(faq.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className='insurance-section'>
        <div className='insurance-wrapper'>
          <div className='insurance-header'>
            <p className='section-eyebrow alt'>We Accept Insurance</p>
            <h2>Your Insurance Plan Accepted</h2>
            <p>We work with most major insurance providers. Check if your plan is covered below.</p>
          </div>

          <div className='insurance-grid'>
            {insuranceProviders.map((provider) => (
              <div key={provider.id} className='insurance-card'>
                <div className='insurance-logo'>{provider.logo}</div>
                <p className='insurance-name'>{provider.name}</p>
              </div>
            ))}
          </div>

          {/* <div className='insurance-footer'>
            <p>Not seeing your insurance? <strong>Contact us at (469) 262-5630</strong> — we may still accept your plan!</p>
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className='cta-section'>
        <div className='cta-content'>
          <h2>Ready to Start Your Recovery?</h2>
          <p>Take the first step toward a pain-free, active life. Book your appointment today.</p>
          <Link to='/contact#appointment-wrapper' className='btn-primary large'>
            Schedule Your Visit
          </Link>
        </div>
      </section>
    </div>
  )
}