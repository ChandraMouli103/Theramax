import './Service.css'
import { Link } from 'react-router-dom'
import postsurgicalimg from '../../assets/Serviceimg/ps1.webp'
import pain from '../../assets/Serviceimg/Pain-manage.webp'
import mechanical from '../../assets/Serviceimg/mechanical.webp'
import Carpalimg  from '../../assets/Serviceimg/Carpal.webp'
import vestibular from '../../assets/Serviceimg/visible.webp'
import Pediatrics from '../../assets/Serviceimg/Children.webp'
import physical from '../../assets/Serviceimg/physicaltheropy.jpg'
import rehab from '../../assets/Serviceimg/rehab.webp'
import neurological from '../../assets/Serviceimg/neurological.webp'
import laser from '../../assets/Serviceimg/laser.webp'
import pelvic from '../../assets/Serviceimg/pelvic.webp'
export const serviceData = [
    // Pain Management
  {
    slug: 'pain-management',
    category: 'Orthopedic & Musculoskeletal',
    title: 'Pain Management',
    heading: 'Pain Management Physical Therapy in McKinney, TX',
    tag: 'Break free from chronic pain with personalized treatment plans that address the root cause—not just the symptoms.',
    description: 'Comprehensive pain relief through evidence-based therapeutic techniques.',
    image: pain,
    overview: 'Break free from chronic pain with personalized treatment plans that address the root cause—not just the symptoms. Get back to doing what you love.',
    approachTitle: 'Our Approach to Pain Management',
    approachText: 'At Theramax Physical Therapy, we believe that lasting pain relief comes from understanding and treating the underlying cause of your discomfort—not just masking symptoms with medication. Our comprehensive evaluation looks at your movement patterns, posture, strength, and flexibility to create a complete picture of what’s contributing to your pain.',
    conditions: ['Chronic back pain', 'Shoulder impingement', 'Headaches and migraines', 'Neuropathic pain', 'Neck pain and stiffness', 'Hip and knee pain', 'TMJ dysfunction', 'Post-surgical pain', 'Sciatica and radiating leg pain', 'Fibromyalgia', 'Arthritis pain', 'Sports-related injuries'],
    methods: [
      { title: 'Manual Therapy', text: 'Hands-on techniques including joint mobilization, soft tissue massage, and myofascial release to reduce pain and restore mobility.' },
      { title: 'Therapeutic Exercise', text: 'Customized exercise programs designed to strengthen weak areas, improve flexibility, and prevent future pain episodes.' },
      { title: 'Dry Needling', text: 'Targeted treatment for trigger points and muscle tension that can provide rapid relief from chronic pain patterns.' },
      { title: 'Pain Education', text: 'Understanding how pain works helps you take control of your recovery and develop long-term strategies for staying pain-free.' }
    ],
    faq: ['Pain management therapy focuses on reducing chronic or acute pain through physical therapy techniques, exercises, manual therapy, and rehabilitation programs.'],
    phone: '(972) 983-3840',
    ctaTitle: 'Take the First Step Toward Recovery',
    ctaText: 'Don’t let pain control your life. Our compassionate team is here to help you regain confidence and comfort — schedule your consultation today.'
  },
//   Vestibular Therapy
  {
    slug: 'vestibular-therapy',
    category: 'Specialized Therapy',
    title: 'Vestibular Therapy',
    heading: 'Improve Balance, Reduce Dizziness, and Restore Stability with Vestibular Therapy',
    tag: 'Specialized balance and dizziness rehabilitation.',
    description: 'Balance and dizziness treatment for vertigo and vestibular disorders.',
    image: vestibular,
    overview: 'We help patients manage dizziness, vertigo, balance disorders, and inner ear conditions through specialized vestibular rehabilitation programs designed to improve stability and confidence in daily activities.',
    approachTitle: 'What is Vestibular Therapy?',
    approachText: 'Vestibular therapy is a specialized form of physical therapy focused on treating balance problems, dizziness, vertigo, and inner ear disorders. It helps improve coordination between the brain, eyes, and body to restore balance and reduce symptoms that affect daily life.',
    conditions: ['Vertigo', 'Dizziness', 'Balance disorders', 'Inner ear conditions', 'Motion sensitivity'],
    methods: [
      { title: 'Specialized Balance Rehabilitation', text: 'We provide customized therapy programs designed specifically for dizziness and balance-related conditions.' },
      { title: 'Experienced Therapy Professionals', text: 'Our therapists use evidence-based vestibular rehabilitation techniques to address inner ear and balance disorders.' },
      { title: 'Personalized Treatment Plans', text: 'Every patient experiences balance problems differently, so we tailor therapy to the specific symptoms and goals.' },
      { title: 'Supportive and Compassionate Care', text: 'We provide training, guidance, and encouragement to help patients regain confidence in daily movement.' }
    ],
    faq: ['Vestibular therapy can help manage vertigo, dizziness, balance disorders, inner ear conditions, and motion sensitivity.'],
    phone: '(469)-269-8520',
    ctaTitle: 'Take the First Step Toward Recovery',
    ctaText: 'Improve your balance and confidence with expert vestibular care designed around your needs.'
  },
//   Mechanical Traction
  {
    slug: 'mechanical-traction',
    category: 'Orthopedic & Musculoskeletal',
    title: 'Mechanical Traction',
    heading: 'Relieve Spine Pressure, Reduce Pain, and Improve Mobility with Mechanical Traction Therapy',
    tag: 'Safe spinal decompression and pain relief.',
    description: 'Spinal decompression therapy for disc-related conditions.',
    image: mechanical,
    overview: 'We help patients manage neck pain, back pain, and spinal discomfort through safe and effective mechanical traction therapy designed to reduce pressure on the spine and improve movement.',
    approachTitle: 'What is Mechanical Traction Therapy?',
    approachText: 'Mechanical traction therapy is a nonsurgical treatment used to gently stretch the spine and reduce pressure on spinal discs, nerves, and joints. It is commonly used to help relieve neck pain, lower back pain, nerve compression, herniated discs, sciatica, and spinal stiffness.',
    conditions: ['Neck pain', 'Lower back pain', 'Sciatica', 'Herniated discs', 'Nerve compression', 'Spinal stiffness'],
    methods: [
      { title: 'Safe and Controlled Treatment', text: 'Traction sessions are carefully monitored and adjusted according to condition and comfort level.' },
      { title: 'Experienced Physical Therapy Team', text: 'Our therapists use evidence-based treatment methods to manage spinal pain and improve mobility.' },
      { title: 'Comprehensive Spine Care', text: 'We combine traction therapy with exercises and posture work for better long-term results.' },
      { title: 'Personalized Patient Support', text: 'We guide each patient through a supportive, patient-centered recovery process.' }
    ],
    faq: ['Mechanical traction may help with neck pain, lower back pain, sciatica, herniated discs, nerve compression, and spinal stiffness.'],
    phone: '(469)-269-8520',
    ctaTitle: 'Take the First Step Toward Recovery',
    ctaText: 'Relieve your spinal pressure and reclaim a more comfortable, mobile lifestyle.'
  },
//   Pediatrics
  {
    slug: 'pediatrics',
    category: 'Pediatric Care',
    title: 'Pediatrics',
    heading: 'Supporting Healthy Growth, Movement, and Development for Children of All Ages',
    tag: 'Therapy designed for children’s development and mobility.',
    description: 'Specialized care for children developmental and orthopedic needs.',
    image: Pediatrics,
    overview: 'We help children improve strength, mobility, coordination, balance, and physical development through compassionate and personalized pediatric therapy programs.',
    approachTitle: 'What is Pediatric Physical Therapy?',
    approachText: 'Pediatric physical therapy focuses on helping infants, children, and adolescents improve physical movement, strength, coordination, posture, and developmental skills. Our goal is to help children improve independence, confidence, and participation in daily activities.',
    conditions: ['Developmental delays', 'Cerebral palsy', 'Muscle weakness', 'Coordination issues', 'Mobility challenges', 'Balance disorders'],
    methods: [
      { title: 'Child-Focused Therapy Programs', text: 'We create personalized treatment plans based on each child’s developmental stage and physical needs.' },
      { title: 'Experienced Pediatric Therapists', text: 'Our therapists use specialized therapy techniques to support healthy growth and movement development.' },
      { title: 'Support for Development and Mobility', text: 'We focus on improving balance, coordination, strength, posture, and motor skills.' },
      { title: 'Family-Centered Care', text: 'We work closely with parents and caregivers to create positive progress at home and in therapy.' }
    ],
    faq: ['Pediatric therapy can help children with developmental delays, cerebral palsy, muscle weakness, coordination issues, injuries, and mobility challenges.'],
    phone: '(469)-269-8520',
    ctaTitle: 'Take the First Step Toward Recovery',
    ctaText: 'Support your child’s movement, confidence, and everyday success with compassionate pediatric therapy.'
  },
//   Post-Surgical Care
  {
    slug: 'post-surgical-care',
    category: 'Rehabilitation & Recovery',
    title: 'Post-Surgical Care',
    heading: 'Recover Safely and Restore Strength with Professional Post-Surgical Rehabilitation Care',
    tag: 'Guided rehab for a safer, stronger recovery.',
    description: 'Rehabilitation programs for optimal surgical recovery.',
    image: postsurgicalimg,
    overview: 'We help patients recover after surgery through personalized therapy programs focused on pain management, mobility restoration, strength improvement, and safe healing.',
    approachTitle: 'What is Post-Surgical Care Therapy?',
    approachText: 'Postsurgical care therapy focuses on helping patients recover physically after surgical procedures. Physical therapy plays an important role in reducing pain, restoring movement, improving strength, preventing complications, and helping patients safely return to daily activities.',
    approachText2:'At our physical therapy center, we provide customized rehabilitation programs for orthopedic surgeries, joint replacements, spinal surgeries, sports injury surgeries, and other procedures requiring physical recovery support. Our treatments include mobility exercises, strengthening programs, pain management therapy, flexibility training, gait training, and functional rehabilitation. Our goal is to support safe healing and faster recovery.',
    conditions: ['Orthopedic surgeries', 'Joint replacements', 'Spinal surgeries', 'Sports injury surgeries', 'Recovery support'],
    methods: [
      { title: 'Customized Recovery Programs', text: 'Every surgery and recovery process is different. We create plans based on your procedure and goals.' },
      { title: 'Professional Rehabilitation Support', text: 'Our therapists monitor progress and adjust treatment to improve mobility, strength, and function.' },
      { title: 'Pain Management and Mobility Improvement', text: 'Our therapy reduces stiffness, restores flexibility, and helps patients regain independence.' },
      { title: 'Compassionate Patient Care', text: 'We provide guidance and support throughout treatment to build confidence and comfort.' }
    ],
    faq: ['Physical therapy helps reduce pain, improve movement, restore strength, and prevent complications during recovery.'],
    phone: '(469)-269-8520',
    ctaTitle: 'Take the First Step Toward Recovery',
    ctaText: 'Move forward with a recovery plan built to restore function and confidence after surgery.'
  },
//   General Physical Therapy
  {
    slug: 'general-physical-therapy',
    category: 'Orthopedic & Musculoskeletal',
    title: 'General Physical Therapy',
    heading: 'Restore Movement, Reduce Pain, and Improve Your Quality of Life with Expert General Physical Therapy Care',
    tag: 'Comprehensive recovery for pain, strength, and mobility.',
    description: 'Personalized physical therapy focused on relieving pain, improving movement, and helping you feel stronger every day.',
    image: physical,
    overview: 'We help individuals of all ages recover from pain, injuries, mobility issues, and physical discomfort through personalized therapy programs designed to improve strength, flexibility, and overall wellbeing.',
    approachTitle: 'What is General Physical Therapy?',
    approachText: 'General physical therapy focuses on improving movement, reducing pain, restoring physical function, and enhancing overall quality of life. It helps individuals recovering from injuries, surgeries, muscle stiffness, joint pain, sports injuries, and chronic pain conditions.',
    conditions: ['Joint pain', 'Muscle injuries', 'Back and neck pain', 'Sports injuries', 'Post-surgical recovery', 'Mobility problems', 'Neurological conditions'],
    methods: [
      { title: 'Personalized Treatment Plans', text: 'We assess your condition and create a custom program built around your goals and needs.' },
      { title: 'Experienced and Skilled Therapists', text: 'Our clinicians use evidence-based strategies to improve recovery outcomes and physical performance.' },
      { title: 'Comprehensive Rehabilitation Services', text: 'We focus on restoring function while preventing further complications and future injuries.' },
      { title: 'Patient-Centered Care and Support', text: 'We educate and motivate patients to stay active and confident during treatment.' }
    ],
    faq: ['General physical therapy can help treat joint pain, muscle injuries, back and neck pain, sports injuries, post-surgical recovery, mobility problems, and neurological conditions.'],
    phone: '(469)-269-8520',
    ctaTitle: 'Take the First Step Toward Recovery',
    ctaText: 'Start feeling stronger and more mobile with a therapy plan designed just for you.'
  },
//   Carpal Tunnel Syndrome
  {
    slug: 'carpal-tunnel-syndrome',
    category: 'Orthopedic & Musculoskeletal',
    title: 'Carpal Tunnel Syndrome',
    heading: 'Regain Comfort and Hand Strength with Expert Care for Carpal Tunnel Syndrome',
    tag: 'Relief for tingling, numbness, and hand pain.',
    description: 'Targeted treatment to ease wrist pain, numbness, and tingling caused by carpal tunnel syndrome.',
    image: Carpalimg,
    overview: 'We help individuals overcome wrist pain, numbness, and hand weakness through personalized physical therapy treatments designed to restore comfort, mobility, and daily function.',
    approachTitle: 'About Carpal Tunnel Syndrome',
    approachText: 'Carpal tunnel syndrome occurs when the median nerve in the wrist becomes compressed or irritated. It can lead to tingling, numbness, burning sensations, weakness in the hand, and difficulty with typing, writing, or gripping objects.',
    conditions: ['Tingling', 'Numbness', 'Weak grip', 'Wrist pain', 'Hand fatigue', 'Repetitive strain'],
    methods: [
      { title: 'Personalized Rehabilitation Programs', text: 'We create custom treatment plans based on your symptoms, lifestyle, and activity level.' },
      { title: 'Experienced Physical Therapy Specialists', text: 'Our therapists address the root cause of discomfort and improve hand strength and flexibility.' },
      { title: 'Non-Surgical and Drug-Free Treatment', text: 'We help relieve nerve pressure, reduce inflammation, and improve movement naturally.' },
      { title: 'Long-Term Prevention and Care', text: 'We educate patients on posture, ergonomics, and home exercises to prevent recurrence.' }
    ],
    faq: ['Carpal tunnel syndrome is usually caused by repetitive wrist movements, poor hand posture, overuse injuries, or medical conditions that place pressure on the median nerve.'],
    phone: '(469)-269-8520',
    ctaTitle: 'Take the First Step Toward Recovery',
    ctaText: 'Reduce hand pain and improve daily function with expert carpal tunnel care.'
  },
//   Rehab Services
  {
    slug: 'rehab-services',
    category: 'Rehabilitation & Recovery',
    title: 'Rehab Services',
    heading: 'Rehabilitation Services in McKinney, TX',
    tag: 'Recovery plans that guide you back to strength and independence.',
    description: 'Complete rehab care to help you recover faster after injury, surgery, or physical discomfort.',
    image: rehab,
    overview: 'Whether you’re recovering from surgery, an injury, or a health condition, our rehabilitation specialists will guide you back to full function and independence.',
    approachTitle: 'Comprehensive Rehabilitation Care',
    approachText: 'At Theramax Physical Therapy, we understand that recovery is a journey. Our rehabilitation programs are designed to meet you where you are and guide you step-by-step toward your recovery goals.',
    conditions: ['Post-surgical rehabilitation', 'Balance and fall prevention', 'Fracture rehabilitation', 'Vestibular rehabilitation', 'Sports injury recovery', 'Stroke recovery', 'Ligament and tendon repair', 'Neurological rehabilitation', 'Orthopedic rehabilitation', 'Work injury rehabilitation', 'Geriatric rehabilitation'],
    methods: [
      { title: 'Comprehensive Evaluation', text: 'We assess function, mobility, strength, and goals to create a strong recovery baseline.' },
      { title: 'Personalized Treatment Plan', text: 'Your therapist designs a custom plan around your surgery, injury, or health condition.' },
      { title: 'Progressive Rehabilitation', text: 'We guide you through exercised treatments that progress as your strength and capacity improve.' },
      { title: 'Return to Function', text: 'We help you return to work, sports, and daily activities with confidence and reduced re-injury risk.' }
    ],
    faq: ['Rehabilitation services can help individuals recovering from injuries, surgeries, neurological conditions, sports injuries, chronic pain, and mobility limitations.'],
    phone: '(469)-269-8520',
    ctaTitle: 'Take the First Step Toward Recovery',
    ctaText: 'Let our rehabilitation team help you recover with confidence, function, and independence.'
  },
//   Neurological Care
  {
    slug: 'neurological-care',
    category: 'Neurological Care',
    title: 'Neurological Care',
    heading: 'Improve Mobility, Restore Function, and Enhance Quality of Life with Specialized Neurological Care',
    tag: 'Targeted rehabilitation for balance, movement, and independence.',
    description: 'Treatment for neurological conditions and movement disorders.',
    image: neurological,
    overview: 'We help patients with neurological conditions improve movement, balance, coordination, and independence through personalized therapy programs focused on long-term recovery and functional improvement.',
    approachTitle: 'What is Neurological Care?',
    approachText: 'Neurological care focuses on treating physical challenges caused by conditions affecting the brain, spinal cord, and nervous system. Physical therapy improves mobility, muscle control, balance, coordination, and overall physical function for individuals with neurological disorders.',
    conditions: ['Stroke', 'Parkinson’s disease', 'Multiple sclerosis', 'Spinal cord injuries', 'Neuropathy', 'Balance disorders'],
    methods: [
      { title: 'Specialized Neurological Rehabilitation', text: 'Targeted therapy programs designed specifically for neurological conditions and mobility challenges.' },
      { title: 'Experienced Therapy Professionals', text: 'Our therapists use evidence-based techniques to maximize patient progress and confidence.' },
      { title: 'Comprehensive Functional Training', text: 'We focus on balance, walking ability, strength, posture, and daily activity performance.' },
      { title: 'Compassionate and Supportive Care', text: 'We provide continued guidance and motivation for patients and families throughout recovery.' }
    ],
    faq: ['Neurological therapy can help patients with stroke, Parkinson’s disease, spinal cord injuries, neuropathy, multiple sclerosis, and balance disorders.'],
    phone: '(469)-269-8520',
    ctaTitle: 'Take the First Step Toward Recovery',
    ctaText: 'Build mobility, confidence, and function with a neurological care plan designed around you.'
  },
//   Laser Therapy
  {
    slug: 'laser-therapy',
    category: 'Orthopedic & Musculoskeletal',
    title: 'Laser Therapy',
    heading: 'Reduce Pain, Promote Healing, and Improve Recovery with Advanced Laser Therapy',
    tag: 'Non-invasive support for pain and tissue healing.',
    description: 'Safe and effective laser therapy to reduce pain, speed up healing, and improve mobility without surgery or medication.',
    image: laser,
    overview: 'We help patients manage pain, inflammation, and soft tissue injuries through safe and noninvasive laser therapy designed to support faster healing and physical recovery.',
    approachTitle: 'What is Laser Therapy?',
    approachText: 'Laser therapy uses focused light energy to stimulate tissue healing, reduce inflammation, improve circulation, and relieve pain. It is commonly used for muscle injuries, joint pain, tendonitis, arthritis, sports injuries, and soft tissue conditions.',
    conditions: ['Joint pain', 'Muscle injuries', 'Arthritis', 'Tendonitis', 'Sports injuries', 'Soft tissue inflammation'],
    methods: [
      { title: 'Non-Invasive Pain Relief', text: 'Laser therapy is a gentle and nonsurgical treatment option designed to reduce inflammation and support healing.' },
      { title: 'Advanced Therapy Technology', text: 'We use modern laser techniques to support tissue recovery and improve rehabilitation outcomes.' },
      { title: 'Customized Treatment Programs', text: 'Every patient receives personalized therapy based on symptoms and recovery goals.' },
      { title: 'Comprehensive Recovery Support', text: 'We combine laser therapy with rehabilitation exercises for long-term recovery and wellness.' }
    ],
    faq: ['Laser therapy may help treat joint pain, muscle injuries, arthritis, tendonitis, sports injuries, and soft tissue inflammation.'],
    phone: '(469)-269-8520',
    ctaTitle: 'Take the First Step Toward Recovery',
    ctaText: 'Accelerate healing and feel better faster with targeted laser therapy support.'
  },
//   Pelvic Floor PT
  {
    slug: 'pelvic-floor-pt',
    category: 'Specialized Therapy',
    title: 'Pelvic Floor PT',
    heading: 'Pelvic Floor Physical Therapy in McKinney, TX',
    tag: 'Restore confidence, control, and comfort with expert pelvic floor care.',
    description: 'Specialized treatment restoring strength, coordination, and comfort in pelvic muscles.',
    image: pelvic,
    overview: 'Restore your confidence and quality of life with compassionate, expert care for pelvic floor dysfunction. We help both women and men overcome sensitive health challenges.',
    approachTitle: 'What is Pelvic Floor Physical Therapy?',
    approachText: 'Pelvic floor physical therapy addresses dysfunction in the muscles, ligaments, and connective tissues that support your pelvic organs. These muscles are involved in bladder and bowel control, sexual function, and core stability.',
    conditions: ['Urinary incontinence', 'Chronic pelvic pain', 'Diastasis recti', 'Endometriosis-related pain', 'Fecal incontinence', 'Painful intercourse', 'Prenatal pelvic preparation', 'Post-prostatectomy incontinence', 'Pelvic organ prolapse', 'Postpartum recovery', 'Interstitial cystitis', 'Constipation and bowel dysfunction'],
    methods: [
      { title: 'Private, Comfortable Setting', text: 'We provide a respectful, supportive environment for sensitive care and recovery.' },
      { title: 'Specialized Expertise', text: 'Our therapists have advanced training in pelvic floor dysfunction and evidence-based techniques.' },
      { title: 'Holistic Approach', text: 'We address the whole person, including breathing, posture, and total-body movement patterns.' },
      { title: 'Proven Results', text: 'Many patients experience significant improvement within 6 to 8 sessions of consistent treatment.' }
    ],
    faq: ['Pelvic floor physical therapy focuses on strengthening and improving the function of pelvic floor muscles that support the bladder, bowel, and reproductive organs.'],
    phone: '(469)-269-8520',
    ctaTitle: 'Take the First Step Toward Recovery',
    ctaText: 'Don’t let pelvic floor dysfunction control your life. Our compassionate team is here to help you regain confidence and comfort.'
  }
]

export const serviceOrder = [
  'pelvic-floor-pt',
  'pain-management',
  'carpal-tunnel-syndrome',
  'general-physical-therapy',
  'rehab-services',
  'neurological-care',
  'post-surgical-care',
  'pediatrics',
  'mechanical-traction',
  'vestibular-therapy',
  'laser-therapy',
]

const serviceGroups = [
  {
    title: 'All Services',
    items: serviceOrder
      .map((slug) => serviceData.find((service) => service.slug === slug))
      .filter(Boolean)
  }
]

export default function Service() {
  return (
    <section className='service-page'>
      <div className='service-hero'>
        <div className='hero-copy'>
          <p className='section-eyebrow'>Theramax Physical Therapy</p>
          <h1>Our Services</h1>
          <p className='intro-text'>
            Explore all of our physical therapy services designed around your recovery goals.
          </p>
        </div>

        <div className='hero-stats' aria-label='Theramax service highlights'>
          <div className='stat-box'>
            <strong>500+</strong>
            <span>Patients helped</span>
          </div>
          <div className='stat-box'>
            <strong>95%</strong>
            <span>Recovery focus</span>
          </div>
          <div className='stat-box'>
            <strong>1:1</strong>
            <span>Personalized care</span>
          </div>
        </div>
      </div>

      <div className='service-section-list'>
        {serviceGroups.map((group) => (
          <div className='service-section-block' key={group.title}>
            <div className='service-group-header'>
              <span className='group-tag'>Care focus</span>
              <h2>{group.title}</h2>
            </div>

            <div className='service-grid'>
              {group.items.map((service) => (
                <article key={service.slug} className='service-card'>
                  <div className='service-icon-wrap'>
                    <img src={service.image} alt={service.title} className='service-icon' />
                  </div>

                  <div className='service-content'>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <Link to={`/services/${service.slug}`} className='service-link'>
                      Read more <span aria-hidden='true'>→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className='service-cta'>
        <div className='cta-badge'>Your next step starts here</div>
        <h2>Ready to Start Your Recovery?</h2>
        <p>
          Don’t wait to begin your rehabilitation journey. The sooner you start, the faster you can return to the activities and independence you value most.
        </p>
        <Link to='/contact#appointment-wrapper' className='book-button'>
          Book Appointment
        </Link>
      </div>
    </section>
  )
}
