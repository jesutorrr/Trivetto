import { FaInstagram, FaWhatsapp, FaFacebookF } from 'react-icons/fa'
import logo from '../assets/logo/logo.JPG'

const footerLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Menú', href: '#menu' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Ubicación', href: '#ubicacion' },
]

const socialLinks = [
  {
    icon: FaInstagram,
    href: 'https://www.instagram.com/trivettobanquetes',
    label: 'Instagram',
  },
  {
    icon: FaWhatsapp,
    href: 'https://wa.me/525554563302',
    label: 'WhatsApp',
  },
  {
    icon: FaFacebookF,
    href: '#',
    label: 'Facebook',
  },
]

export default function Footer() {
  return (
    <footer id="contacto" className="bg-brand-dark border-t border-brand-gold/10">
      {/* CTA Section */}
      <div className="py-20 sm:py-28 px-4 text-center">
        <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.4em] text-brand-gold/40 mb-6">
          El siguiente paso
        </p>
        <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-gold mb-4 leading-tight">
          Creemos algo
        </h3>
        <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-gold/60 mb-10 italic leading-tight">
          extraordinario juntos
        </h3>
        <a
          href="https://wa.me/525554563302?text=Hola%20Trivetto%20Banquetes,%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-sans text-xs uppercase tracking-[0.25em] text-brand-gold border border-brand-gold/30 px-10 py-4 hover:bg-brand-gold hover:text-brand-dark hover:shadow-[0_0_40px_rgba(197,168,128,0.2)] transition-all duration-500 tap-target btn-shimmer"
        >
          Solicitar Cotización
        </a>
      </div>

      {/* Main footer — compact horizontal layout */}
      <div className="border-t border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Top row: Logo + Nav + Social */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <img
              src={logo}
              alt="Trivetto Banquetes"
              className="h-10 w-auto object-contain mix-blend-lighten"
            />

            {/* Nav — horizontal */}
            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-sans text-[11px] uppercase tracking-[0.15em] text-brand-gold-light/40 hover:text-brand-gold transition-colors duration-300 tap-target"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Social — bigger icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 flex items-center justify-center border border-brand-gold/15 text-brand-gold/40 hover:text-brand-gold hover:border-brand-gold/40 hover:bg-brand-gold/5 transition-all duration-300"
                  >
                    <Icon className="text-base" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-gold/15 to-transparent my-8" />

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-sans text-[10px] text-brand-gold-light/20 tracking-wider">
              &copy; {new Date().getFullYear()} Trivetto Banquetes
            </p>
            <p className="font-serif text-[11px] italic text-brand-gold/25 tracking-wide">
              Donde la cocina se convierte en arte
            </p>
            <p className="font-sans text-[10px] text-brand-gold-light/20 tracking-wider">
              Coyoacán, Ciudad de México
            </p>
          </div>
        </div>
      </div>

      {/* Credit */}
      <div className="border-t border-brand-gold/[0.04] py-4 text-center">
        <p className="font-sans text-[9px] tracking-wider text-brand-gold-light/15">
          Designed with <span className="text-brand-gold/30">♥</span> by Uri
        </p>
      </div>
    </footer>
  )
}
