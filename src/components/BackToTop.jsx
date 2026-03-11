import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setVisible(latest > 600)
  })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          aria-label="Volver arriba"
          className="fixed bottom-6 left-6 z-50 w-11 h-11 flex items-center justify-center border border-brand-gold/30 text-brand-gold/50 hover:text-brand-gold hover:border-brand-gold hover:bg-brand-gold/5 transition-all duration-300"
        >
          <ChevronUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
