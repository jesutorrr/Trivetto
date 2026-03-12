import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import SectionHeading from './ui/SectionHeading'
import MenuCard from './ui/MenuCard'
import Lightbox from './ui/Lightbox'

import img02 from '../assets/menu/02.JPG'
import img06 from '../assets/menu/06.JPG'
import imgCanapes from '../assets/menu/canapes.JPG'
import imgPaella from '../assets/menu/paella.JPG'
import imgAntojitos from '../assets/menu/antojitos.JPG'
import imgCaprese from '../assets/menu/caprese.JPG'
import imgPescado from '../assets/menu/pescado.JPG'
import imgVerduras from '../assets/menu/verduras.JPG'
import imgTiramisu from '../assets/menu/tiramisu.JPG'
import imgPhiladelphia from '../assets/menu/philadelphia-higo.jpg'
import imgMejillones from '../assets/menu/mejillones.jpg'
import imgEsparragos from '../assets/menu/esparragos-jamon.jpg'
import imgLasana from '../assets/menu/lasana.jpg'
import imgPasta from '../assets/menu/pasta-crudaiola.jpg'
import imgSalmon from '../assets/menu/salmon.jpg'
import imgFilete from '../assets/menu/filete-toscana.jpg'
import imgFabada from '../assets/menu/fabada.jpg'
import imgBrownie from '../assets/menu/brownie.jpg'

const menuItems = [
  {
    image: img02,
    title: 'Tabla de Embutidos',
    description: 'Jamones, quesos artesanales, aceitunas, frutos secos y pan rústico.',
  },
  {
    image: imgCanapes,
    title: 'Canapés & Vol-au-vents',
    description: 'Philadelphia con pera, mejillones Roquefeller, espárragos con jamón serrano.',
  },
  {
    image: img06,
    title: 'Tortilla Española',
    description: 'Tapas clásicas en porciones individuales, perfectas para recepción y coctel.',
  },
  {
    image: imgCaprese,
    title: 'Ensalada Caprese',
    description: 'Tomate, mozzarella fresca, albahaca y reducción de balsámico.',
  },
  {
    image: imgAntojitos,
    title: 'Antojitos Mexicanos',
    description: 'Tacos dorados, gorditas, sopes y flautas — sabor tradicional gourmet.',
  },
  {
    image: imgPaella,
    title: 'Paella de Mariscos',
    description: 'Camarones, mejillones y arroz especiado — nuestro plato estrella.',
  },
  {
    image: imgPescado,
    title: 'Pescado Gourmet',
    description: 'Filete emplatado con vegetales de temporada y salsa artesanal.',
  },
  {
    image: imgVerduras,
    title: 'Guarniciones Frescas',
    description: 'Atado de espárragos y zanahoria baby envueltos en tocino crujiente.',
  },
  {
    image: imgTiramisu,
    title: 'Tiramisú',
    description: 'Clásico italiano con mascarpone, café espresso y cacao — el cierre perfecto.',
  },
]

const moreItems = [
  { image: imgPhiladelphia, name: 'Philadelphia con higo', tag: 'Aperitivo' },
  { image: imgMejillones, name: 'Mejillones Roquefeller', tag: 'Aperitivo' },
  { image: imgEsparragos, name: 'Espárragos con jamón', tag: 'Aperitivo' },
  { image: imgLasana, name: 'Lasaña de espinaca', tag: 'Entrada' },
  { image: imgPasta, name: 'Pasta Crudaiola', tag: 'Entrada' },
  { image: imgSalmon, name: 'Salmón con costra de nuez', tag: 'Plato Fuerte' },
  { image: imgFilete, name: 'Filete a la toscana', tag: 'Plato Fuerte' },
  { image: imgFabada, name: 'Fabada asturiana', tag: 'Plato Fuerte' },
  { image: imgBrownie, name: 'Brownie con helado', tag: 'Postre' },
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
          <div className="grid grid-cols-3 gap-5 mb-5">
            {menuItems.slice(3, 6).map((item, i) => (
              <MenuCard
                key={i + 3}
                image={item.image}
                title={item.title}
                description={item.description}
                onClick={() => openLightbox(item)}
              />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-5">
            {menuItems.slice(6).map((item, i) => (
              <MenuCard
                key={i + 6}
                image={item.image}
                title={item.title}
                description={item.description}
                onClick={() => openLightbox(item)}
              />
            ))}
          </div>
        </div>

        {/* "Y más..." section with thumbnail dishes */}
        <div className="mt-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-brand-gold/10" />
            <span className="font-serif text-lg text-brand-gold/60 italic">Y más...</span>
            <div className="flex-1 h-px bg-brand-gold/10" />
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
            {moreItems.map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-brand-gold/15 group-hover:border-brand-gold/40 transition-colors duration-300">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover photo-warm group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="text-center">
                  <span className="font-sans text-[8px] tracking-[0.2em] uppercase text-brand-gold/30 block">
                    {item.tag}
                  </span>
                  <span className="font-sans text-[10px] text-brand-gold-light/40 leading-tight group-hover:text-brand-gold/70 transition-colors duration-300">
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personaliza tu menú */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-gold/10">
          {[
            { icon: '✦', title: 'Elige tus tiempos', desc: 'Arma tu menú de 1, 2 o 3 tiempos según el estilo de tu evento.' },
            { icon: '✪', title: 'Variedad sin costo extra', desc: 'Selecciona varias opciones por tiempo para sorprender a todos.' },
            { icon: '✶', title: 'Preparación fresca', desc: 'Ingredientes del día, cocinados el mismo día de tu evento.' },
            { icon: '✷', title: 'Servicio completo', desc: '5 horas de servicio con montaje, personal uniformado y limpieza.' },
          ].map((item, i) => (
            <div key={i} className="bg-brand-dark p-6 sm:p-8 text-center">
              <span className="text-brand-gold/40 text-2xl block mb-3">{item.icon}</span>
              <h4 className="font-serif text-lg text-brand-gold mb-2">{item.title}</h4>
              <p className="font-sans text-xs text-brand-gold-light/40 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Secondary CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/525554563302?text=Hola%20Trivetto,%20me%20interesa%20conocer%20el%20men%C3%BA%20completo%20y%20cotizaci%C3%B3n."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-sans text-xs uppercase tracking-[0.25em] text-brand-gold/70 border border-brand-gold/20 px-8 py-3.5 hover:text-brand-gold hover:border-brand-gold/40 hover:bg-brand-gold/5 transition-all duration-500"
          >
            Solicitar Cotización Personalizada
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
