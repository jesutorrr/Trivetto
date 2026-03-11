import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo/logo.JPG'

export default function Preloader({ onComplete }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
      setTimeout(onComplete, 600)
    }, 2200)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[200] bg-brand-dark flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-6">
            {/* Logo reveal */}
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              src={logo}
              alt="Trivetto Banquetes"
              className="h-20 sm:h-28 w-auto mix-blend-lighten"
            />

            {/* Line expand */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="h-px bg-brand-gold/50"
            />

            {/* Tagline fade in */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.4em] text-brand-gold/50"
            >
              Alta Cocina & Catering
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
