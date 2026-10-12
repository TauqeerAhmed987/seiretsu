import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import avatar1 from '../../assets/images/avatar-1.png'
import avatar2 from '../../assets/images/avatar-2.png'
import avatar3 from '../../assets/images/avatar-3.png'
import funimation from '../../assets/images/clients/funimation.png'
import hbomax from '../../assets/images/clients/hbomax.png'
import hulu from '../../assets/images/clients/hulu.png'
import netflix from '../../assets/images/clients/netflix.png'
import stan from '../../assets/images/clients/stan.png'
import ytpremium from '../../assets/images/clients/ytpremium.png'
import { streamingClients, testimonials } from '../../data/site'
import { QuoteIcon, RatingStarIcon } from '../icons'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'

const avatars = { 'avatar-1': avatar1, 'avatar-2': avatar2, 'avatar-3': avatar3 }
const clientLogos = {
  'client-netflix': netflix,
  'client-hbomax': hbomax,
  'client-hulu': hulu,
  'client-ytpremium': ytpremium,
  'client-funimation': funimation,
  'client-stan': stan,
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#F7F7FA]">
      <div className="container mx-auto px-4">
        <SectionTitle tag="Testimonials" title="What our clients say" className="mb-14" />

        <Reveal index={0}>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ el: '.testimonial-pagination', clickable: true }}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="testimonial-swiper"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.name} className="h-auto">
                <div className="relative pt-10 h-full">
                  <img
                    src={avatars[item.avatar]}
                    alt={item.name}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full object-cover border-4 border-white shadow-card z-10"
                  />
                  <div className="bg-white rounded-2xl shadow-card p-8 pt-14 h-full flex flex-col items-center text-center border border-black/5">
                    <QuoteIcon className="text-primary/20 text-2xl mb-3" />
                    <div className="flex items-center gap-0.5 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <RatingStarIcon
                          key={i}
                          size={14}
                          className={i < item.rating ? 'text-amber-400' : 'text-gray-200'}
                        />
                      ))}
                    </div>
                    <p className="text-body leading-relaxed flex-1">“{item.quote}”</p>
                    <div className="mt-6">
                      <h6 className="font-heading font-semibold text-heading">{item.name}</h6>
                      <span className="text-xs text-body">{item.role}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="testimonial-pagination !static flex items-center justify-center gap-2 mt-10" />
        </Reveal>

        <Reveal
          index={1}
          className="bg-white rounded-2xl shadow-card px-8 sm:px-12 py-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 mt-8"
        >
          {streamingClients.map((client) => (
            <img
              key={client.name}
              src={clientLogos[client.file]}
              alt={client.name}
              className="h-5 sm:h-6 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
