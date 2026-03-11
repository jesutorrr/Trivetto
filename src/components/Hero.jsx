import { motion } from 'framer-motion'
import heroBg from '../assets/menu/01.JPG'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover animate-slow-zoom"
        />
      </div>

      {/* Dark overlay — stronger for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/85 via-brand-dark/75 to-brand-dark" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto"
      >
        {/* Decorative top flourish */}
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-8">
          <span className="block w-12 sm:w-16 h-px bg-brand-gold/40" />
          <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.3em] text-brand-gold/60">
            Trivetto Banquetes
          </span>
          <span className="block w-12 sm:w-16 h-px bg-brand-gold/40" />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-serif text-4xl sm:text-6xl lg:text-8xl text-brand-gold leading-[1.1] mb-6"
        >
          Alta Cocina para
          <br />
          <span className="italic bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold bg-[length:200%_auto] bg-clip-text text-transparent animate-[text-shimmer_4s_ease-in-out_infinite]">tus Momentos</span>
        </motion.h1>

        {/* Decorative underline */}
        <motion.div variants={fadeUp} className="w-16 h-px bg-brand-gold/50 mx-auto mb-8" />

        <motion.p
          variants={fadeUp}
          className="font-sans text-brand-gold-light/70 text-sm sm:text-base lg:text-lg max-w-lg mx-auto mb-12 leading-relaxed tracking-wide"
        >
          Servicio exclusivo de banquetes y catering en Ciudad de México. 
          Cada evento es una experiencia gastronómica única.
        </motion.p>

        <motion.div variants={fadeUp}>
          <a
            href="https://wa.me/525554563302?text=Hola%20Trivetto%20Banquetes,%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-sans text-xs sm:text-sm uppercase tracking-[0.25em] text-brand-gold border border-brand-gold/40 px-10 py-4 hover:bg-brand-gold/10 hover:border-brand-gold hover:shadow-[0_0_30px_rgba(197,168,128,0.15)] transition-all duration-500 btn-shimmer"
          >
            Solicitar Cotización
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-sans text-[8px] uppercase tracking-[0.4em] text-brand-gold/25">
          Scroll
        </span>
        <div className="relative w-[1px] h-10 bg-brand-gold/10 overflow-hidden">
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-full h-4 bg-gradient-to-b from-transparent via-brand-gold/50 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  )
}
