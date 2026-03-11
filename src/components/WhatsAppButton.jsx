import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_URL =
  'https://wa.me/525554563302?text=Hola%20Trivetto%20Banquetes,%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n.'

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 group tap-target"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-brand-gold/30 animate-ping" />

      {/* Button */}
      <span className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-brand-gold text-brand-dark shadow-lg shadow-brand-gold/20 group-hover:scale-110 transition-transform duration-300">
        <FaWhatsapp className="text-2xl sm:text-3xl" />
      </span>
    </a>
  )
}
