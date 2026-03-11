import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import SectionHeading from './ui/SectionHeading'
import MenuCard from './ui/MenuCard'
import Lightbox from './ui/Lightbox'

import img02 from '../assets/menu/02.JPG'
import img03 from '../assets/menu/03.JPG'
import img04 from '../assets/menu/04.JPG'
import img05 from '../assets/menu/05.JPG'
import img06 from '../assets/menu/06.JPG'

const menuItems = [
  {
    image: img02,
    title: 'Tabla de Embutidos',
    description: 'Selección artesanal de quesos, jamones, aceitunas y pan rústico.',
  },
  {
    image: img03,
    title: 'Menú Tres Tiempos',
    description: 'Entrada, plato fuerte y ensalada fresca de temporada.',
  },
  {
    image: img04,
    title: 'Plato del Mar',
    description: 'Arroz marinero con mariscos frescos y ensalada del huerto.',
  },
  {
    image: img05,
    title: 'Cazuela Mediterránea',
    description: 'Frutos del mar sobre cama de arroz especiado.',
  },
  {
    image: img06,
    title: 'Canapés Gourmet',
    description: 'Bocados de tortilla española perfectos para recepción y coctel.',
  },
]

export default function MenuGallery() {
  const [lightbox, setLightbox] = useState({ open: false, image: '', title: '' })

  const openLightbox = (item) => {
    setLightbox({ open: true, image: item.image, title: item.title })
  }

  return (
    <section id="menu" className="py-28 px-4 sm:px-6 lg:px-16 bg-brand-surface/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <SectionHeading
            label="Gastronomía"
            title="Nuestro Menú"
            subtitle="Cada platillo es una experiencia diseñada para sorprender. Menús personalizados para cada tipo de evento."
            align="center"
          />
        </div>

        {/* Mobile: Swiper carousel */}
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1.15}
            centeredSlides
            loop
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            className="!overflow-visible"
          >
            {menuItems.map((item, i) => (
              <SwiperSlide key={i}>
                <MenuCard
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  onClick={() => openLightbox(item)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-5 mb-5">
            {menuItems.slice(0, 3).map((item, i) => (
              <MenuCard
                key={i}
                image={item.image}
                title={item.title}
                description={item.description}
                onClick={() => openLightbox(item)}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-5">
            {menuItems.slice(3).map((item, i) => (
              <MenuCard
                key={i + 3}
                image={item.image}
                title={item.title}
                description={item.description}
                onClick={() => openLightbox(item)}
              />
            ))}
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/525554563302?text=Hola%20Trivetto,%20me%20interesa%20conocer%20el%20men%C3%BA%20completo."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-sans text-xs uppercase tracking-[0.25em] text-brand-gold/70 border border-brand-gold/20 px-8 py-3.5 hover:text-brand-gold hover:border-brand-gold/40 hover:bg-brand-gold/5 transition-all duration-500"
          >
            Solicitar Menú Completo
          </a>
        </div>
      </div>

      <Lightbox
        image={lightbox.image}
        title={lightbox.title}
        isOpen={lightbox.open}
        onClose={() => setLightbox({ open: false, image: '', title: '' })}
      />
    </section>
  )
}
