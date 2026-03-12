import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import AnimatedCounter from './ui/AnimatedCounter'
import aboutImg from '../assets/menu/07.JPG'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export default function About() {
  return (
    <section id="nosotros" className="py-28 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            <motion.div variants={fadeUp}>
              <SectionHeading
                label="Sobre Nosotros"
                title="La Experiencia Trivetto"
                subtitle="Más de una década creando momentos inolvidables a través de la alta cocina."
                animate={false}
              />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="font-sans text-brand-gold-light/70 text-base sm:text-lg leading-relaxed mt-6 text-justify"
            >
              En Trivetto Banquetes nos enfocamos en ofrecer alimentos de excelente calidad, 
              servicio profesional y atención cálida para que tu evento sea una experiencia 
              memorable. Nuestro equipo de chefs combina técnicas de cocina internacional con 
              los sabores más auténticos de la gastronomía mexicana.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="font-sans text-brand-gold-light/70 text-base sm:text-lg leading-relaxed mt-4 text-justify"
            >
              Trabajamos con ingredientes frescos y preparación el mismo día del evento. 
              Cuidamos presentación, tiempos de servicio y experiencia del invitado — 
              desde el montaje hasta la limpieza — para que tú solo te preocupes 
              por disfrutar.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-8 sm:gap-12 pt-8 border-t border-brand-gold/10">
              <div>
                <p className="font-serif text-3xl sm:text-4xl text-brand-gold">
                  <AnimatedCounter target={200} suffix="+" />
                </p>
                <p className="font-sans text-sm text-brand-gold-light/60 mt-1">Eventos realizados</p>
              </div>
              <div>
                <p className="font-serif text-3xl sm:text-4xl text-brand-gold">
                  <AnimatedCounter target={10} suffix="+" duration={1500} />
                </p>
                <p className="font-sans text-sm text-brand-gold-light/60 mt-1">Años de experiencia</p>
              </div>
              <div>
                <p className="font-serif text-3xl sm:text-4xl text-brand-gold">
                  <AnimatedCounter target={100} suffix="%" duration={1800} />
                </p>
                <p className="font-sans text-sm text-brand-gold-light/60 mt-1">Satisfacción</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Image with parallax */}
          <ParallaxImage />
        </div>
      </div>
    </section>
  )
}

function ParallaxImage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative"
    >
      <div className="aspect-[3/4] overflow-hidden lg:translate-y-4 photo-frame photo-glow">
        <motion.img
          style={{ y }}
          src={aboutImg}
          alt="Chef de Trivetto Banquetes emplatando"
          loading="lazy"
          decoding="async"
          className="w-full h-[115%] object-cover photo-warm"
        />
      </div>
    </motion.div>
  )
}
