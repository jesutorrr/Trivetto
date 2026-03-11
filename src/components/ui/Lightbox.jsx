import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function Lightbox({ image, title, isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-brand-dark/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-pointer"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-brand-gold/60 hover:text-brand-gold transition-colors duration-300 tap-target"
            aria-label="Cerrar"
          >
            <X size={24} />
          </button>

          {/* Image */}
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            src={image}
            alt={title}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[85vh] object-contain photo-warm cursor-default"
          />

          {/* Title */}
          {title && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.3 }}
              className="absolute bottom-6 left-0 right-0 text-center font-serif text-lg text-brand-gold/80"
            >
              {title}
            </motion.p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
