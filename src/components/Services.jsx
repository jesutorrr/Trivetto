import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'

const services = [
  {
    number: '01',
    title: 'Bodas & Celebraciones',
    description: 'Menús de 1 a 3 tiempos personalizados para bodas, bautizos, cumpleaños y aniversarios.',
  },
  {
    number: '02',
    title: 'Eventos Corporativos',
    description: 'Catering ejecutivo con montaje, personal uniformado y coordinación completa del servicio.',
  },
  {
    number: '03',
    title: 'Cocteles & Recepciones',
    description: 'Tapas, canapés y vol-au-vents gourmet para recibir a tus invitados con estilo.',
  },
  {
    number: '04',
    title: 'Servicio Personalizado',
    description: 'Ingredientes frescos preparados el mismo día. Incluye montaje, desmontaje y limpieza.',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export default function Services() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <SectionHeading
            label="Servicios"
            title="Para Cada Ocasión"
            subtitle="Adaptamos cada menú y servicio al carácter único de tu evento."
            align="center"
          />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-gold/10"
        >
          {services.map((service) => (
            <motion.div
              key={service.number}
              variants={fadeUp}
              className="bg-brand-dark p-8 sm:p-10 group hover:bg-brand-surface/50 transition-colors duration-500"
            >
              <span className="font-sans text-[10px] tracking-[0.3em] text-brand-gold/30 block mb-6">
                {service.number}
              </span>
              <h3 className="font-serif text-xl text-brand-gold mb-3 group-hover:text-brand-gold-light transition-colors duration-300">
                {service.title}
              </h3>
              <div className="w-0 group-hover:w-8 h-px bg-brand-gold/40 mb-3 transition-all duration-500" />
              <p className="font-sans text-sm text-brand-gold-light/50 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
