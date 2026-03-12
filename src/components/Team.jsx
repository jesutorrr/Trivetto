import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import SectionHeading from './ui/SectionHeading'

import img10 from '../assets/team/10.JPG'
import img11 from '../assets/team/11.JPG'
import img12 from '../assets/team/12.JPG'
import img13 from '../assets/team/13.JPG'

const team = [
  {
    image: img11,
    name: 'Chef Alejandra Zarrabe',
    role: 'Chef Ejecutiva & Fundadora',
  },
  {
    image: img10,
    name: 'Chef Carlos',
    role: 'Chef de Partida — Especialista en Mariscos',
  },
  {
    image: img12,
    name: 'Chef Oscar Mondragón',
    role: 'Especialista en Alta Cocina',
  },
  {
    image: img13,
    name: 'Nuestro Equipo',
    role: 'Brigada completa de cocina y servicio',
  },
]

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

function TeamCard({ member }) {
  return (
    <div className="group text-center">
      <div className="aspect-[3/4] overflow-hidden mb-5 photo-frame photo-glow">
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover photo-warm group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>
      <h3 className="font-serif text-lg text-brand-gold">
        {member.name}
      </h3>
      <div className="w-5 h-px bg-brand-gold/20 mx-auto mt-2 mb-2" />
      <p className="font-sans text-[11px] uppercase tracking-[0.12em] text-brand-gold-light/40">
        {member.role}
      </p>
    </div>
  )
}

export default function Team() {
  return (
    <section id="equipo" className="py-28 px-4 sm:px-6 lg:px-16 bg-brand-surface/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <SectionHeading
            label="El Equipo"
            title="Nuestro Equipo"
            subtitle="Profesionales apasionados por la gastronomía y el servicio impecable."
            align="center"
          />
        </div>

        {/* Mobile: Swiper carousel */}
        <div className="sm:hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1.2}
            centeredSlides
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="!overflow-visible"
          >
            {team.map((member) => (
              <SwiperSlide key={member.name}>
                <TeamCard member={member} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {team.map((member) => (
            <motion.div key={member.name} variants={fadeUp}>
              <TeamCard member={member} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
