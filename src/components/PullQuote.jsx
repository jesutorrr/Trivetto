import { motion } from 'framer-motion'

export default function PullQuote({ text, author }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      className="py-20 sm:py-28 px-6 text-center"
    >
      <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-gold/70 leading-relaxed max-w-3xl mx-auto italic">
        &ldquo;{text}&rdquo;
      </p>
      {author && (
        <p className="font-sans text-xs uppercase tracking-[0.3em] text-brand-gold/30 mt-8">
          — {author}
        </p>
      )}
    </motion.div>
  )
}
