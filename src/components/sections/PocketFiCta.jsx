import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import slideHero from '../../assets/images/slide-1-hero.webp'
import slideSpecs from '../../assets/images/slide-2-specs.webp'
import slideLifestyle from '../../assets/images/slide-3-lifestyle.webp'
import slideTouchscreen from '../../assets/images/slide-4-touchscreen.webp'
import slideSetup from '../../assets/images/slide-5-setup.webp'
import { fadeLeft, fadeUp } from '../../utils/animations'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'

const slides = [
  { src: slideHero, alt: 'NomadsFi PocketFi 5G mobile hotspot' },
  {
    src: slideSpecs,
    alt: 'PocketFi 5G specs: 200+ countries, 2.5Gbps, 16 devices, 5,400mAh battery',
  },
  { src: slideLifestyle, alt: 'PocketFi 5G CloudSIM connectivity while traveling' },
  { src: slideTouchscreen, alt: 'PocketFi 5G 2.4-inch touchscreen' },
  { src: slideSetup, alt: 'PocketFi 5G setup: choose a plan, turn it on, connect and go' },
]

export default function PocketFiCta() {
  return (
    <section className="relative bg-dark py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,#E42313_0%,transparent_45%)]" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_85%_80%,#E42313_0%,transparent_40%)]" />
      <div className="container relative mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        <Reveal variants={fadeLeft}>
          <h2 className="text-3xl md:text-[42px] font-heading font-semibold text-white leading-tight mb-6">
            Stay Connected Anywhere With The PocketFi 5G
          </h2>
          <p className="text-white/70 leading-relaxed mb-8">
            NomadsFi&apos;s PocketFi 5G is a pocket-sized mobile hotspot built for travelers,
            remote professionals, and power users. CloudSIM connectivity delivers fast,
            reliable 5G internet across multiple regions without a physical SIM card, backed by
            flexible data plans you can switch anytime.
          </p>
          <Button to="/pricing" variant="primary">
            Get A Plan
          </Button>
        </Reveal>
        <Reveal index={1} variants={fadeUp} className="relative flex items-center justify-center">
          <div className="absolute w-3/4 aspect-square bg-primary/20 rounded-full blur-3xl animate-float" />
          <Swiper
            modules={[Autoplay, Pagination]}
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="cta-swiper relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.src}>
                <img src={slide.src} alt={slide.alt} className="w-full aspect-square object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  )
}
