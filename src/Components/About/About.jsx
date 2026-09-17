import { useState } from 'react'
import { Link } from 'react-router-dom'
import './About.css'
import tanyaPortrait from '../../assets/home/tanya.png'
import ourStoryImage from '../../assets/about/ourstory.png'

const storyFeatures = [
  {
    id: 1,
    icon: '💙',
    title: 'Treated with Genuine Care',
    text: 'Every patient is met with attention, understanding, and respect.'
  },
  {
    id: 2,
    icon: '✅',
    title: 'Support Beyond Treatment',
    text: 'Encouragement and confidence-building at every stage of recovery.'
  },
  {
    id: 3,
    icon: '🏡',
    title: 'A Welcoming Environment',
    text: 'A comfortable space where patients feel heard and cared for.'
  },
  {
    id: 4,
    icon: '→',
    title: 'From Pain Relief To Full Recovery',
    text: 'Expert guidance through every step of the rehabilitation process.'
  }
]

const promises = [
  {
    icon: '♥',
    title: 'One-to-One care',
    text: 'Thoughtful sessions built around your comfort, pace, and goals.'
  },
  {
    icon: '✦',
    title: 'Evidence-based treatment',
    text: 'Modern techniques and clear progression plans for lasting results.'
  },
  {
    icon: '↗',
    title: 'Real support',
    text: 'We celebrate your wins and help guide you through every challenge.'
  },
  {
    icon: '◉',
    title: 'Whole-person focus',
    text: 'Recovery planning that considers movement, lifestyle, and confidence.'
  }
]

const faqs = [
  {
    id: 1,
    question: 'How Long Does Physical Therapy Take?',
    answer:
      'In many cases, you can start physical therapy without a referral, depending on local regulations and insurance requirements.'
  },
  {
    id: 2,
    question: 'Do I Need A Doctor’s Referral For Physical Therapy?',
    answer:
      'Usually not. Most plans allow direct access to physical therapy, but coverage can vary by insurance provider and state policy.'
  },
  {
    id: 3,
    question: 'What Should I Wear To My Therapy Session?',
    answer:
      'Comfortable, loose-fitting clothing that allows easy movement is ideal. Athletic wear or gym clothes generally work best.'
  },
  {
    id: 4,
    question: 'Can Physical Therapy Help Avoid Surgery?',
    answer:
      'In many situations, physical therapy can reduce pain, improve mobility, and help patients avoid or delay surgery when appropriate.'
  }
]

const locations = [
  {
    id: 'east-frisco',
    city: 'East Frisco, TX',
    label: 'East Frisco Location',
    address: 'Oaks 7101 Custer Rd Suite 840, Frisco, TX 75035.',
    phone: '(469) 665-6237',
    mapQuery: 'Theramax Physical Therapy, Oaks 7101 Custer Rd Suite 840, Frisco, TX 75035'
  },
  {
    id: 'west-frisco',
    city: 'West Frisco, TX',
    label: 'West Frisco Location',
    address: '8680 Main St # 3W Frisco ,TX, 75033.',
    phone: '(469) 665-6237',
    mapQuery: '8680 Main St # 3W, Frisco, TX 75033'
  }
]

export default function About() {
  const [openFaq, setOpenFaq] = useState(1)

  const handleMeetTanya = (event) => {
    event.preventDefault()
    document.getElementById('meet-tanya')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className='about-page'>
      <section className='about-hero'>
        <div className='about-label'>ABOUT THERAMAX</div>

        <div className='about-hero-row'>
          <div className='about-title-block'>
            <h1>
              Care That Put <span>You</span> First
            </h1>
          </div>

          <p className='about-intro'>
            We are passionate about helping people feel better, move freely, and get back to doing what they love — with expert,
            compassionate care at every step of the journey.
          </p>
        </div>
      </section>

      <section id='meet-tanya' className='tanya-profile-section'>
        <div className='tanya-profile-visual'>
          <img src={tanyaPortrait} alt='Dr. Tanya Krishna Mudireddy' className='tanya-profile-image' />
        </div>

        <div className='tanya-profile-copy'>
          <p className='section-kicker'>Know Your Therapist</p>

          <div className='tanya-name-row'>
            {/* <div className='tanya-avatar'>
              <img src={tanyaPortrait} alt='Dr. Tanya Krishna Mudireddy' />
            </div> */}
            <h2>
              <span className='tanya-name'>Dr. Tanya Krishna Mudireddy</span>
              <span className='tanya-credentials'>PT, DPT</span>
            </h2>
          </div>

          <p className='tanya-intro'>
            Passionate physical therapist with vast experience, customizing individual treatment plans with goal-oriented care to get you back to your life.
          </p>

          <p className='tanya-story'>
            With specialized training in pelvic floor therapy, pain management, and vestibular rehabilitation, Dr. Tanya brings a comprehensive approach that addresses the root cause of your condition.
          </p>

          <div className='tanya-stats-grid'>
            <div className='tanya-stat-card'>
              <strong>20+</strong>
              <span>Years Experience</span>
            </div>
            <div className='tanya-stat-card highlight'>
              <strong>2.5K+</strong>
              <span>Patients Helped</span>
            </div>
            <div className='tanya-stat-card'>
              <strong>8</strong>
              <span>Specializations</span>
            </div>
            <div className='tanya-stat-card highlight'>
              <strong>100%</strong>
              <span>Personalized Care</span>
            </div>
          </div>
        </div>
      </section>

      <section className='about-story'>
               <div className='story-copy'>
          <p className='section-kicker'>OUR STORY</p>
          <h2>Compassionate Care, Personalized To You</h2>

          <p className='story-text'>
            Recovery is more than just treatment — it’s about support, encouragement, and building confidence throughout the healing
            journey. Here’s what that looks like for every patient who walks through our doors.
          </p>

          <div className='story-feature-list'>
            {storyFeatures.map((item) => (
              <div className='story-feature' key={item.id}>
                <div className='feature-icon'>{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <Link to='/about#meet-tanya' className='doctor-card' onClick={handleMeetTanya}>
            <div className='doctor-avatar'>
              <img src={tanyaPortrait} alt='Dr. Tanya Krishna Mudireddy' />
            </div>
            <div className='doctor-copy'>
              <div className='doctor-name-row'>
                <h3>Dr. Tanya Krishna Mudireddy, PT, DPT</h3>
                <span>Meet Dr. Tanya</span>
              </div>
              <p>
                Founder &amp; treating therapist — customizing goal-oriented plans that address the root cause of your condition.
              </p>
            </div>
          </Link>
        </div>
         <div className='story-visual-wrap'>
          <div className='story-card'>
            <div className='story-badge'>
              <strong>20+</strong>
              <span>Years of trusted care</span>
            </div>
            <img
              src={ourStoryImage}
              alt='Physical therapy treatment session'
            />
          </div>
        </div>
      </section>

      <section className='promise-section'>
        <div className='section-heading center'>
          <p className='section-kicker'>WHY PATIENTS CHOOSE US</p>
          <h2>Thoughtful care designed around your life.</h2>
        </div>

        <div className='promise-grid'>
          {promises.map((item) => (
            <div className='promise-card' key={item.title}>
              <div className='promise-index' aria-hidden='true'>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='about-locations-section' aria-labelledby='about-locations-title'>
        <div className='section-heading center'>
          <p className='section-kicker'>OUR LOCATIONS</p>
          <h2 id='about-locations-title'>Two Convenient Frisco Offices</h2>
          <p className='locations-intro'>Choose the Theramax location that works best for your schedule.</p>
        </div>

        <div className='about-locations-grid'>
          {locations.map((location) => (
            <article className='about-location-card' id={location.id} key={location.id}>
              <div className='location-card-copy'>
                <span className='location-marker' aria-hidden='true'>
                  <svg viewBox='0 0 24 24' role='presentation'>
                    <path d='M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z' />
                    <circle cx='12' cy='10' r='2.5' />
                  </svg>
                </span>
                
                <h3>{location.label}</h3>
                <p className='location-city'>{location.city}</p>
                <address>{location.address}</address>
                <a className='location-phone' href={`tel:${location.phone.replace(/[^\d]/g, '')}`}>
                  Call: {location.phone}
                </a>
              </div>
              <div className='location-map'>
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
      </section>

      <section className='faq-section'>
        <div className='faq-copy'>
          <p className='section-kicker'>FREQUENTLY ASKED QUESTIONS</p>
          <h2>The Most Questions We Get So Far</h2>

          <div className='faq-rating'>
            <span className='stars'>★★★★★</span>
            <span>4.9 / 5</span>
          </div>

          <p className='faq-note'>Got a question? We are here to answer. If you don’t find your question here, drop us a question on our contact page.</p>

          <Link to='/contact#appointment-wrapper' className='contact-cta'>Go to Contact Page</Link>
        </div>

        <div className='faq-list'>
          {faqs.map((faq) => (
            <div className={`faq-item ${openFaq === faq.id ? 'open' : ''}`} key={faq.id}>
              <button type='button' onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}>
                <span className='faq-number'>0{faq.id}</span>
                <span className='faq-question-about'>{faq.question}</span>
                <span className='faq-toggle'>{openFaq === faq.id ? '−' : '+'}</span>
              </button>

              {openFaq === faq.id && <div className='faq-answer'>{faq.answer}</div>}
            </div>
          ))}
        </div>
      </section>

      <section className='about-cta'>
        <h2>Ready to Start Feeling Better?</h2>
        <p>
          Take the First Step toward recovery. Schedule your appointment today
          <span> — we’ll get back to you within 24 hours.</span>
        </p>

        <div className='about-cta-actions'>
          <Link to='/contact#appointment-wrapper' className='primary-button'>Book Appointment</Link>
          <a href='tel:+14692698520' className='secondary-button'>Call (469)-269-8520</a>
        </div>
      </section>
    </div>
  )
}
