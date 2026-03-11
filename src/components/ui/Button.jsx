import { cn } from '../../utils/cn'

const variants = {
  primary:
    'border border-brand-gold text-brand-gold bg-transparent hover:bg-brand-gold hover:text-brand-dark',
  secondary:
    'border border-brand-gold-light/30 text-brand-gold-light bg-transparent hover:bg-brand-gold-light/10',
  ghost:
    'border border-transparent text-brand-gold hover:text-brand-gold-light',
}

const sizes = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-7 py-3 text-base',
  lg: 'px-9 py-4 text-lg',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  as: Component = 'button',
  className,
  ...props
}) {
  return (
    <Component
      className={cn(
        'inline-flex items-center justify-center font-sans font-medium tracking-wide',
        'transition-all duration-300 ease-out',
        'focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:ring-offset-2 focus:ring-offset-brand-dark',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
