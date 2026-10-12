import { AntennaIcon, SimCardIcon, SlidersIcon } from '../icons'
import Reveal from '../ui/Reveal'

const features = [
  { icon: SimCardIcon, title: 'ESIM Solutions', featured: false },
  { icon: SlidersIcon, title: 'Fiber Internet', featured: true },
  { icon: AntennaIcon, title: 'Wireless Connectivity', featured: false },
]

export default function PricingFeatures() {
  return (
    <section className="relative bg-white pt-16 pb-8 md:pt-24 md:pb-12 overflow-hidden">
      <div
        className="absolute -top-10 -left-10 w-80 h-80 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #181633 0, #181633 1px, transparent 1px, transparent 26px), repeating-linear-gradient(-45deg, #181633 0, #181633 1px, transparent 1px, transparent 26px)',
          maskImage: 'radial-gradient(circle at top left, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at top left, black 0%, transparent 70%)',
        }}
      />
      <span className="absolute top-0 right-8 sm:right-16 w-1 h-10 bg-primary pointer-events-none" />
      <div className="container relative mx-auto px-4">
        <div className="grid sm:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, featured }, i) => (
            <Reveal
              key={title}
              index={i}
              className="relative bg-[#F4F4F3] pl-8 pr-14 py-10 overflow-visible"
            >
              {featured && (
                <div className="absolute inset-y-0 right-0 w-[45%] bg-primary" aria-hidden="true" />
              )}
              <span className="relative z-10 block text-primary text-xs font-bold uppercase tracking-widest mb-2">
                Features
              </span>
              <h4 className="relative z-10 font-heading font-semibold text-xl text-heading leading-snug max-w-[70%]">
                {title}
              </h4>
              <span className="absolute top-1/2 -translate-y-1/2 -right-7 z-20 w-20 h-20 rounded-full bg-white shadow-card-hover flex items-center justify-center text-primary text-3xl">
                <Icon size={30} strokeWidth={1.5} />
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
