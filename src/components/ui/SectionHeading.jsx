import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

export default function SectionHeading({ title, subtitle, label, align = 'left', className, animate = true }) {
  const Wrapper = animate ? motion.div : 'div'
  const wrapperProps = animate
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
      }
    : {}

  return (
    <Wrapper
      {...wrapperProps}
      className={cn(align === 'center' && 'text-center', className)}
    >
      {label && (
        <p className={cn(
          'font-sans text-[10px] sm:text-xs uppercase tracking-[0.3em] text-brand-gold/50 mb-4',
          align === 'center' && 'mx-auto'
        )}>
          {label}
        </p>
      )}

      <h2
        className={cn(
          'font-serif text-brand-gold',
          'text-3xl sm:text-4xl lg:text-5xl',
          'leading-tight'
        )}
      >
        {title}
      </h2>

      <div
        className={cn(
          'w-12 h-px bg-gradient-to-r from-brand-gold/60 to-brand-gold/20 mt-5 mb-6',
          align === 'center' && 'mx-auto'
        )}
      />

      {subtitle && (
        <p className={cn(
          'font-sans text-brand-gold-light/60 text-sm sm:text-base max-w-xl leading-relaxed tracking-wide',
          align === 'center' && 'mx-auto'
        )}>
          {subtitle}
        </p>
      )}
    </Wrapper>
  )
}
