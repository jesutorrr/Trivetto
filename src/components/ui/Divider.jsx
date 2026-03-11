import { motion } from 'framer-motion'

export default function Divider({ className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`flex items-center justify-center gap-4 py-6 ${className}`}
    >
      <span className="block w-16 sm:w-28 h-px bg-gradient-to-r from-transparent to-brand-gold/30" />
      <span className="block w-2 h-2 rotate-45 border border-brand-gold/40 bg-brand-gold/5" />
      <span className="block w-16 sm:w-28 h-px bg-gradient-to-l from-transparent to-brand-gold/30" />
    </motion.div>
  )
}
