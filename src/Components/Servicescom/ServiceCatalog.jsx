import './Service.css'
import { Link } from 'react-router-dom'
import postsurgical from '../../assets/Serviceimg/postsurgical.jpg'
import pain from '../../assets/Serviceimg/advancepain.jpg'
import physical from '../../assets/Serviceimg/physicaltheropy.jpg'
import mechanical from '../../assets/Serviceimg/mechanical.jpg'
import gaitImage from '../../assets/Serviceimg/Mechanical.webp'
import carpal from '../../assets/Serviceimg/Carpal.webp'
import vestibular from '../../assets/Serviceimg/visible.webp'
import pediatrics from '../../assets/Serviceimg/Children.webp'
import neurological from '../../assets/Serviceimg/neurorehab.jpg'
import laser from '../../assets/Serviceimg/laser.webp'
import dryNeedling from '../../assets/Serviceimg/Needling.jpg'
import cupping from '../../assets/Serviceimg/Cupling.jpg'
import pelvic from '../../assets/home/Pelvic-floor.jpg'

const methods = [
  { title: 'Personalized Treatment Plans', text: 'Every plan is designed around your condition, goals, and progress.' },
  { title: 'Experienced Therapy Professionals', text: 'Evidence-based techniques help you move with greater comfort and confidence.' },
  { title: 'Comprehensive Recovery Support', text: 'We combine hands-on care, exercise, education, and progress tracking.' },
  { title: 'Compassionate Patient Care', text: 'You receive clear guidance and supportive care throughout recovery.' }
]

const makeService = (service) => ({
  category: 'Specialized Physical Therapy',
  methods,
  phone: '(469)-269-8520',
  ctaTitle: 'Take the First Step Toward Recovery',
  ctaText: 'Start a personalized recovery plan with the Theramax team.',
  approachText2: '',
  faq: [`${service.title} can help improve comfort, movement, strength, and daily function through personalized physical therapy.`],
  ...service
})

export const serviceData = [
  makeService({ slug: 'pelvic-floor-pt', title: 'Pelvic Floor PT', heading: 'Pelvic Floor Physical Therapy in McKinney, TX', tag: 'Restore confidence, control, and comfort with expert pelvic floor care.', description: 'Specialized treatment restoring strength, coordination, and comfort in pelvic muscles.', image: pelvic, overview: 'Compassionate care for pelvic floor dysfunction and related movement challenges.', approachTitle: 'What is Pelvic Floor Physical Therapy?', approachText: 'Pelvic floor physical therapy addresses dysfunction in the muscles and tissues that support pelvic function.', conditions: ['Urinary incontinence', 'Chronic pelvic pain', 'Postpartum recovery', 'Pelvic organ prolapse'] }),
  makeService({ slug: 'pain-management', title: 'Pain Management', heading: 'Pain Management Physical Therapy', tag: 'Break free from chronic pain with personalized treatment plans.', description: 'Comprehensive pain relief through evidence-based therapeutic techniques.', image: pain, overview: 'Personalized physical therapy to reduce pain and return to the activities you value.', approachTitle: 'Our Approach to Pain Management', approachText: 'We evaluate movement, posture, strength, and flexibility to address the source of discomfort.', conditions: ['Chronic back pain', 'Neck pain', 'Headaches', 'Hip and knee pain', 'Sciatica', 'Arthritis pain'] }),
  makeService({ slug: 'manual-therapy', title: 'Manual Therapy', heading: 'Restore Movement and Reduce Pain with Manual Therapy', tag: 'Hands-on treatment to improve mobility and comfort.', description: 'Hands-on techniques to reduce pain, release stiffness, and restore movement.', image: physical, overview: 'Manual therapy uses skilled hands-on techniques to improve joint and soft-tissue mobility while supporting your recovery plan.', approachTitle: 'What is Manual Therapy?', approachText: 'Manual therapy may include joint mobilization, soft-tissue work, massage, and stretching selected according to your condition and goals.', conditions: ['Joint stiffness', 'Muscle tightness', 'Neck and back pain', 'Reduced mobility', 'Sports injuries'] }),
  makeService({ slug: 'gait-training', title: 'Gait Traction', heading: 'Improve Walking, Balance, and Confidence with Gait Traction', tag: 'Personalized support for safer, stronger walking.', description: 'Walking and balance rehabilitation for improved independence.', image: gaitImage, overview: 'Gait traction helps improve walking patterns, balance, coordination, and confidence after injury, surgery, or neurological changes.', approachTitle: 'What is Gait Traction?', approachText: 'Gait traction uses targeted exercises and functional practice to improve posture, stepping, balance, and safe movement.', conditions: ['Walking difficulty', 'Balance problems', 'Fall risk', 'Post-surgical weakness', 'Neurological conditions'] }),
  makeService({ slug: 'carpal-tunnel-syndrome', title: 'Carpal Tunnel Syndrome', heading: 'Regain Comfort and Hand Strength with Expert Care', tag: 'Relief for tingling, numbness, and hand pain.', description: 'Targeted treatment for wrist pain, numbness, and tingling.', image: carpal, overview: 'Care to restore hand comfort, strength, mobility, and daily function.', approachTitle: 'About Carpal Tunnel Syndrome', approachText: 'Treatment focuses on reducing nerve irritation and improving wrist movement.', conditions: ['Tingling', 'Numbness', 'Weak grip', 'Wrist pain'] }),
  makeService({ slug: 'neurological-care', title: 'Neurological Care', heading: 'Improve Mobility, Restore Function, and Enhance Quality of Life', tag: 'Targeted rehabilitation for balance, movement, and independence.', description: 'Treatment for neurological conditions and movement disorders.', image: neurological, overview: 'Therapy to improve movement, balance, coordination, and independence.', approachTitle: 'What is Neurological Care?', approachText: 'Neurological rehabilitation addresses challenges affecting the brain, spinal cord, and nervous system.', conditions: ['Stroke', 'Parkinson’s disease', 'Multiple sclerosis', 'Neuropathy'] }),
  makeService({ slug: 'post-surgical-care', title: 'Post-Surgical Care', heading: 'Recover Safely and Restore Strength', tag: 'Guided rehab for a safer, stronger recovery.', description: 'Rehabilitation programs for surgical recovery.', image: postsurgical, overview: 'Therapy for pain management, mobility restoration, strength, and safe healing.', approachTitle: 'What is Post-Surgical Care Therapy?', approachText: 'Physical therapy supports recovery by restoring movement, strength, and flexibility.', conditions: ['Orthopedic surgeries', 'Joint replacements', 'Spinal surgeries'] }),
  makeService({ slug: 'pediatrics', title: 'Pediatrics', heading: 'Supporting Healthy Growth, Movement, and Development', tag: 'Therapy designed for children’s development and mobility.', description: 'Specialized care for children’s developmental needs.', image: pediatrics, overview: 'Compassionate therapy to improve strength, mobility, coordination, and development.', approachTitle: 'What is Pediatric Physical Therapy?', approachText: 'Pediatric therapy helps children improve movement, strength, coordination, and posture.', conditions: ['Developmental delays', 'Cerebral palsy', 'Muscle weakness', 'Mobility challenges'] }),
  makeService({ slug: 'mechanical-traction', title: 'Mechanical Traction', heading: 'Relieve Spine Pressure, Reduce Pain, and Improve Mobility', tag: 'Safe spinal decompression and pain relief.', description: 'Spinal decompression therapy for disc-related conditions.', image: mechanical, overview: 'Traction therapy to reduce spinal pressure and improve movement.', approachTitle: 'What is Mechanical Traction Therapy?', approachText: 'Mechanical traction gently stretches the spine to reduce pressure on discs, nerves, and joints.', conditions: ['Neck pain', 'Lower back pain', 'Sciatica', 'Herniated discs'] }),
  makeService({ slug: 'vestibular-therapy', title: 'Vestibular Therapy', heading: 'Improve Balance, Reduce Dizziness, and Restore Stability', tag: 'Specialized balance and dizziness rehabilitation.', description: 'Balance and dizziness treatment for vestibular disorders.', image: vestibular, overview: 'Rehabilitation for dizziness, vertigo, and balance disorders.', approachTitle: 'What is Vestibular Therapy?', approachText: 'Vestibular therapy improves coordination between the brain, eyes, and body.', conditions: ['Vertigo', 'Dizziness', 'Balance disorders', 'Inner ear conditions'] }),
  makeService({ slug: 'laser-therapy', title: 'Laser Therapy', heading: 'Reduce Pain, Promote Healing, and Improve Recovery', tag: 'Non-invasive support for pain and tissue healing.', description: 'Laser therapy to reduce pain and support healing.', image: laser, overview: 'Noninvasive therapy for pain, inflammation, and soft tissue recovery.', approachTitle: 'What is Laser Therapy?', approachText: 'Laser therapy supports tissue healing, reduces inflammation, and relieves pain.', conditions: ['Joint pain', 'Muscle injuries', 'Arthritis', 'Tendonitis'] }),
  makeService({ slug: 'dry-needling', title: 'Dry Needling', heading: 'Relieve Pain and Improve Function with Targeted Treatment', tag: 'Precision treatment for muscle tension and pain relief.', description: 'Treatment using thin needles to target trigger points.', image: dryNeedling, overview: 'Dry needling targets trigger points to reduce tension and improve mobility.', approachTitle: 'What is Dry Needling?', approachText: 'Thin needles target areas of muscle tension as part of an individualized therapy plan.', conditions: ['Muscle tension', 'Myofascial pain', 'Trigger points', 'Sports injuries'] }),
  makeService({ slug: 'cupping', title: 'Dry Cupping', heading: 'Relieve Muscle Tension and Improve Recovery', tag: 'Gentle therapy for tight muscles and circulation support.', description: 'Therapy to reduce stiffness and improve tissue mobility.', image: cupping, overview: 'Cupping supports circulation, reduces tightness, and complements rehabilitation.', approachTitle: 'What is Dry Cupping?', approachText: 'Controlled suction stimulates circulation, relieves tension, and supports recovery.', conditions: ['Muscle tightness', 'Back pain', 'Shoulder stiffness', 'Recovery support'] })
]

export const serviceOrder = [
  'pelvic-floor-pt',
  'pain-management',
  'manual-therapy',
  'mechanical-traction',
  'gait-training',
  'post-surgical-care',
  'pediatrics',
  'vestibular-therapy',
  'laser-therapy',
  'dry-needling',
  'cupping'
]

export default function Service() {
  const orderedServices = serviceOrder
    .map((slug) => serviceData.find((service) => service.slug === slug))
    .filter(Boolean)

  return <section className='service-page'><div className='service-hero'><div className='hero-copy'><p className='section-eyebrow'>Theramax Physical Therapy</p><h1>Our Services</h1><p className='intro-text'>Explore physical therapy services designed around your recovery goals.</p></div></div><div className='service-section-list'><div className='service-section-block'><div className='service-group-header'><span className='group-tag'>Care focus</span><h2>All Services</h2></div><div className='service-grid'>{orderedServices.map((service) => <Link key={service.slug} to={`/services/${service.slug}`} className='service-card'><div className='service-icon-wrap'><img src={service.image} alt={service.title} className='service-icon' /></div><div className='service-content'><h3>{service.title}</h3><p>{service.description}</p><span className='service-link'>Read more <span aria-hidden='true'>→</span></span></div></Link>)}</div></div></div><div className='service-cta'><h2>Ready to Start Your Recovery?</h2><p>Begin your rehabilitation journey with personalized care.</p><Link to='/contact#appointment-wrapper' className='book-button'>Book Appointment</Link></div></section>
}
