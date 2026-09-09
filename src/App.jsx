
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import FloatingBookButton from './Components/FloatingBookButton/FloatingBookButton'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact, { ThankYou } from './Components/Contact/Contact'
import Service from './Components/Servicescom/ServiceCatalog'
import ViewService from './Components/Servicescom/ViewService'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

function PageSection({ title, text }) {
  return (
    <section className='page-section'>
      <p className='page-eyebrow'>Theramax Physical Therapy</p>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  )
}

function App() {
  const { pathname } = useLocation()
  const isThankYouPage = pathname === '/thank-you'

  return (
    <div className='app-shell'>
      <ScrollToTop />
      <header className='site-header'><Header /></header>
      <main className='page-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Service />} />
          <Route path='/services/:slug' element={<ViewService />} />
          <Route path='/view-service' element={<ViewService />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/thank-you' element={<ThankYou />} />
        </Routes>
      </main>
      {!isThankYouPage && <footer className='site-footer-wrap'><Footer /></footer>}
      {!isThankYouPage && <FloatingBookButton />}
    </div>
  )
}

export default App
