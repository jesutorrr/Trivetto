import { lazy, Suspense, useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Preloader from './components/Preloader'
import Divider from './components/ui/Divider'
import PullQuote from './components/PullQuote'
import WhatsAppButton from './components/WhatsAppButton'
import BackToTop from './components/BackToTop'

const About = lazy(() => import('./components/About'))
const Services = lazy(() => import('./components/Services'))
const MenuGallery = lazy(() => import('./components/MenuGallery'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Team = lazy(() => import('./components/Team'))
const Location = lazy(() => import('./components/Location'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  const [loaded, setLoaded] = useState(false)
  const handlePreloaderComplete = useCallback(() => setLoaded(true), [])

  return (
    <>
      <Preloader onComplete={handlePreloaderComplete} />
      <div className={`bg-brand-dark grain transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <Hero />
        <Suspense fallback={null}>
          <Divider />
          <About />
          <PullQuote
            text="La cocina es el arte de transformar ingredientes en emociones"
            author="Chef Alejandra"
          />
          <Services />
          <Divider />
          <MenuGallery />
          <Divider />
          <Team />
          <Divider />
          <Testimonials />
          <Divider />
          <Location />
          <Footer />
        </Suspense>
        <WhatsAppButton />
        <BackToTop />
      </div>
    </>
  )
}

export default App
