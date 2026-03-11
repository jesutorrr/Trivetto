import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function MenuCard({ image, title, description, onClick }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    cardRef.current.style.setProperty('--cursor-x', `${x}px`)
    cardRef.current.style.setProperty('--cursor-y', `${y}px`)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden aspect-[4/5] cursor-pointer photo-glow photo-frame cursor-view"
    >
      {/* Image with hover zoom + warm color grading */}
      <motion.img
        src={image}
        alt={title}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover photo-warm"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />

      {/* Overlay gradient — opacity increases on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

      {/* Text content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
        <h3 className="font-serif text-lg sm:text-xl text-brand-gold mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          {title}
        </h3>
        <p className="font-sans text-sm text-brand-gold-light/70 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
