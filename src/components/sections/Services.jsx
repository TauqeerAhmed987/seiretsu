import { ReceiptIcon, RouterIcon, SimCardIcon, SlidersIcon } from '../icons'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'

const services = [
  {
    icon: SimCardIcon,
    title: 'Buy ESIM',
    desc: 'Purchase and activate digital SIM packages instantly for travel and everyday use.',
    featured: false,
  },
  {
    icon: RouterIcon,
    title: 'Get Broadband',
    desc: 'Ultra-fast internet solutions for home, office, and remote work.',
    featured: true,
  },
  {
    icon: ReceiptIcon,
    title: 'Pay Bills',
    desc: 'Securely pay bills and manage subscriptions with ease.',
    featured: false,
  },
  {
    icon: SlidersIcon,
    title: 'Manage Plans',
    desc: 'Upgrade, downgrade, renew, or track your plan anytime.',
    featured: false,
  },
]

export default function Services() {
  return (
    <section className="relative py-20 md:py-28 bg-[#FAFAFB] overflow-hidden">
      <div
        className="absolute -top-6 -left-6 w-64 h-64 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #d1d5db 1.5px, transparent 1.5px)',
          backgroundSize: '14px 14px',
          maskImage: 'radial-gradient(circle at top left, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at top left, black 0%, transparent 70%)',
        }}
      />
      <div className="absolute top-10 left-8 sm:left-16 w-8 h-8 rounded-full border border-primary/40 pointer-events-none" />
      <span className="absolute top-[52px] left-[52px] sm:left-[100px] w-1.5 h-1.5 rounded-full bg-primary pointer-events-none" />
      <svg
        className="absolute inset-x-0 top-1/3 w-full h-40 opacity-[0.06] pointer-events-none"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        fill="none"
      >
        {[0, 30, 60, 90].map((offset) => (
          <path
            key={offset}
            d={`M0 ${80 + offset} C 240 ${20 + offset}, 480 ${140 + offset}, 720 ${80 + offset} S 1200 ${20 + offset}, 1440 ${80 + offset}`}
            stroke="#181633"
            strokeWidth="1"
          />
        ))}
      </svg>

      <div className="container relative mx-auto px-4">
        <SectionTitle tag="Our Services" title="Everything You Need, In One Place" className="mb-14" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc, featured }, i) => (
            <Reveal
              key={title}
              index={i}
              className={`bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${featured ? 'border-2 border-primary shadow-card-hover' : 'border border-black/5 shadow-card hover:shadow-card-hover'}`}
            >
              <Icon className="text-primary mb-6" size={40} strokeWidth={1.5} />
              <h4 className="font-heading font-semibold text-xl text-heading mb-3">{title}</h4>
              <p className="text-sm text-body leading-relaxed">{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
