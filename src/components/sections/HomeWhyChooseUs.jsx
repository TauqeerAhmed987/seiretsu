import aboutImage from '../../assets/images/about-3.jpg'
import dotPattern from '../../assets/images/dot-pattern.png'
import tvImage from '../../assets/images/tv.png'
import { fadeLeft, fadeRight } from '../../utils/animations'
import { BoltCircleIcon, PriceTagIcon, ShieldIcon, StarIcon, SupportIcon } from '../icons'
import Reveal from '../ui/Reveal'

const features = [
  {
    icon: BoltCircleIcon,
    title: 'Fast & Reliable',
    desc: 'Experience stable internet with premium performance.',
  },
  {
    icon: PriceTagIcon,
    title: 'Affordable Plans',
    desc: 'Flexible pricing for every budget and need.',
  },
  { icon: SupportIcon, title: '24/7 Support', desc: 'Dedicated support whenever you need help.' },
  { icon: ShieldIcon, title: 'Secure & Trusted', desc: 'Safe transactions with encrypted payments.' },
]

export default function HomeWhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-[#F7F7FA] overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
        <Reveal variants={fadeLeft} className="relative mx-auto max-w-[420px] w-full">
          <div className="relative">
            <img
              src={dotPattern}
              alt=""
              aria-hidden="true"
              className="absolute top-6 left-6 w-full h-full object-contain -z-10 select-none pointer-events-none"
            />
            <img
              src={aboutImage}
              alt="Friends relaxing together while streaming on their smart TV"
              className="relative w-full aspect-[444/530] object-cover"
            />
            <img
              src={tvImage}
              alt="Smart TV showing a streaming home screen"
              className="absolute -bottom-8 -right-8 sm:-right-12 w-[58%] z-20 drop-shadow-2xl select-none pointer-events-none"
            />
            <div className="absolute top-[9%] -left-[18%] sm:-left-[22%] w-[68%] max-w-[280px] bg-primary text-white rounded-md shadow-card-hover px-6 py-5 z-20">
              <span className="block font-heading font-bold text-3xl sm:text-4xl leading-none">
                25+
              </span>
              <span className="block text-sm sm:text-base font-semibold border-b border-white/30 pb-2 mt-1 mb-2 w-fit">
                Years Of Experience
              </span>
              <div className="flex items-center gap-1 text-white">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} size={13} />
                ))}
                <span className="text-xs ml-1">Trustpoint</span>
              </div>
              <div className="absolute -top-4 -right-4 bg-white text-heading rounded-md shadow-card px-3 py-1.5 flex items-center gap-1">
                <span className="font-heading font-bold text-sm">4.9</span>
                <StarIcon className="text-primary" size={12} />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal variants={fadeRight}>
          <span className="text-primary font-semibold uppercase tracking-[2px] text-sm mb-3 block underline underline-offset-4 decoration-2">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-heading font-semibold text-heading leading-tight mb-5">
            Best Connectivity Solutions For Every Lifestyle
          </h2>
          <p className="text-body leading-relaxed mb-10 max-w-lg">
            From instant eSIM activation to high-speed broadband and smart billing, we
            deliver seamless connectivity designed for modern living.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary text-xl mb-4">
                  <Icon />
                </span>
                <h6 className="font-heading font-semibold text-heading mb-1.5">{title}</h6>
                <p className="text-sm text-body leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
