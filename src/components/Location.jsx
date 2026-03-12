import { motion } from 'framer-motion'
import { MapPin, Phone, Mail } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa'
import SectionHeading from './ui/SectionHeading'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Zona de Cobertura',
    value: 'Coyoacán, Ciudad de México y Área Metropolitana',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+52 55 5456 3302',
    href: 'tel:+525554563302',
  },
  {
    icon: Mail,
    label: 'Correo',
    value: 'contacto@trivettobanquetes.com',
    href: 'mailto:contacto@trivettobanquetes.com',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export default function Location() {
  return (
    <section id="ubicacion" className="py-28 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <SectionHeading
            label="Encuéntranos"
            title="Ubicación & Contacto"
            subtitle="Desde Coyoacán, en el corazón de la Ciudad de México, llevamos la experiencia Trivetto a tu evento."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Map — 3 columns */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="lg:col-span-3 aspect-[4/3] sm:aspect-video lg:aspect-auto lg:min-h-[380px] relative group"
          >
            {/* Decorative gold frame */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-brand-gold/40" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-brand-gold/40" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-brand-gold/40" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-brand-gold/40" />
              {/* Subtle border */}
              <div className="absolute inset-[1px] border border-brand-gold/10" />
            </div>

            {/* Gold tint overlay */}
            <div className="absolute inset-0 z-[5] bg-brand-gold/[0.04] mix-blend-overlay pointer-events-none" />

            {/* Map iframe with golden filter */}
            <div className="w-full h-full overflow-hidden" style={{ filter: 'sepia(0.4) saturate(0.6) brightness(0.75) contrast(1.1) hue-rotate(10deg)' }}>
              <iframe
                title="Ubicación Trivetto Banquetes"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15062.905!2d-99.1621!3d19.3503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff5582aadc67%3A0x44600be8123ae3f!2sCentro%20de%20Coyoac%C3%A1n!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '100%' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-scripts allow-same-origin allow-popups"
                className="w-full h-full"
              />
            </div>

            {/* Location label */}
            <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2 bg-brand-dark/85 backdrop-blur-sm px-3 py-2 border border-brand-gold/15">
              <MapPin size={12} className="text-brand-gold" />
              <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-brand-gold/70">Coyoacán, CDMX</span>
            </div>
          </motion.div>

          {/* Contact info — 2 columns */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="lg:col-span-2 flex flex-col items-center lg:items-start justify-center gap-8"
          >
            {contactInfo.map((item) => {
              const Icon = item.icon
              const Wrapper = item.href ? 'a' : 'div'
              const wrapperProps = item.href
                ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
                : {}

              return (
                <motion.div key={item.label} variants={fadeUp}>
                  <Wrapper
                    {...wrapperProps}
                    className="flex items-start gap-4 group tap-target"
                  >
                    <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-brand-gold/30 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-300">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-gold/40 mb-1">
                        {item.label}
                      </p>
                      <p className="font-sans text-brand-gold-light group-hover:text-brand-gold transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </Wrapper>
                </motion.div>
              )
            })}

            {/* Instagram link */}
            <motion.div variants={fadeUp}>
              <a
                href="https://www.instagram.com/trivettobanquetes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group tap-target"
              >
                <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-brand-gold/30 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-300">
                  <FaInstagram size={20} />
                </span>
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-gold/40 mb-1">
                    Instagram
                  </p>
                  <p className="font-sans text-brand-gold-light group-hover:text-brand-gold transition-colors duration-300">
                    @trivettobanquetes
                  </p>
                </div>
              </a>
            </motion.div>

            {/* Schedule note */}
            <motion.div
              variants={fadeUp}
              className="mt-2 p-5 bg-brand-surface border border-brand-gold/10"
            >
              <p className="font-sans text-sm text-brand-gold-light/60 leading-relaxed">
                Atendemos eventos de lunes a domingo. Agenda tu degustación 
                con al menos 2 semanas de anticipación.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
