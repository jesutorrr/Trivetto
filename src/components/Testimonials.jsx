import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import SectionHeading from './ui/SectionHeading'

const testimonials = [
  {
    quote: 'Trivetto transformó nuestra boda en una experiencia gastronómica que nuestros invitados siguen recordando. Cada platillo fue una obra de arte.',
    name: 'María & Daniel',
    event: 'Boda — Hacienda San Ángel',
  },
  {
    quote: 'El nivel de profesionalismo y atención al detalle fue impresionante. La degustación previa nos dio total confianza para nuestro evento corporativo.',
    name: 'Roberto Méndez',
    event: 'Evento Corporativo — 150 personas',
  },
  {
    quote: 'Los mariscos estaban increíbles. Chef Alejandra entendió exactamente lo que buscábamos y lo superó con creces.',
    name: 'Ana Lucía Torres',
    event: 'Celebración privada — Coyoacán',
  },
  {
    quote: 'Contratamos a Trivetto para el bautizo de nuestra hija y fue perfecto. El servicio, la presentación, los sabores... todo de primer nivel.',
    name: 'Familia Gutiérrez',
    event: 'Bautizo — Jardín del Pedregal',
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

function TestimonialCard({ testimonial }) {
  return (
    <div className="flex flex-col items-center text-center px-4 sm:px-8 py-2">
      {/* Quote mark */}
      <span className="font-serif text-5xl sm:text-6xl text-brand-gold/20 leading-none mb-4 select-none">
        &ldquo;
      </span>

      <blockquote className="font-serif text-lg sm:text-xl lg:text-2xl text-brand-gold-light/80 leading-relaxed max-w-2xl italic">
        {testimonial.quote}
      </blockquote>

      <div className="mt-8 flex flex-col items-center gap-1">
        <div className="w-8 h-px bg-brand-gold/30 mb-3" />
        <p className="font-sans text-sm text-brand-gold tracking-wide">
          {testimonial.name}
        </p>
        <p className="font-sans text-xs text-brand-gold-light/40 tracking-wider">
          {testimonial.event}
        </p>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-16 bg-brand-surface/40">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-14 text-center">
          <SectionHeading
            label="Testimonios"
            title="Lo Que Dicen Nuestros Clientes"
            align="center"
          />
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          className="!overflow-visible"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <TestimonialCard testimonial={t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  )
}
