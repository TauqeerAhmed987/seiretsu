import backgroundImage from '../../assets/images/video_bg.jpg'
import { fadeRight } from '../../utils/animations'
import { PaymentIcon, SmileIcon, ZapIcon } from '../icons'
import Reveal from '../ui/Reveal'

const features = [
  {
    icon: PaymentIcon,
    title: 'Multiple Payment Methods',
    desc: 'Pay using cards, UPI, wallets, or bank transfer.',
  },
  { icon: ZapIcon, title: 'Fast & Easy Activation', desc: 'Get connected instantly with minimal setup.' },
  {
    icon: SmileIcon,
    title: 'Smooth Experience',
    desc: 'User-friendly dashboard and smart account controls.',
  },
]

const stats = [
  { value: '190+', label: 'Countries eSIM Coverage' },
  { value: '1Gbps', label: 'Pure Fiber Speed' },
  { value: '99%', label: 'Network Uptime SLA' },
]

// Full-width photo banner with copy on the right half. The home page shows
// feature cards; the pricing page (variant="stats") shows headline numbers.
export default function FeaturesMagic({ variant = 'features' }) {
  const isStats = variant === 'stats'

  return (
    <section className="relative bg-white overflow-hidden">
      <div
        className={`relative flex items-center ${isStats ? 'min-h-[420px] md:min-h-[480px]' : 'min-h-[520px] md:min-h-[620px]'}`}
      >
        <img
          src={backgroundImage}
          alt=""
          aria-hidden="true"
          className="hidden sm:block absolute inset-0 w-full h-full object-cover"
        />
        {isStats && (
          <>
            <span className="absolute top-6 left-6 sm:left-10 w-1.5 h-1.5 rounded-full bg-primary pointer-events-none" />
            <span className="absolute top-3 left-10 sm:left-14 w-7 h-7 rounded-full border border-primary/40 pointer-events-none" />
          </>
        )}
        <div className="container relative mx-auto px-4 py-16 sm:py-0">
          <div className="sm:hidden rounded-xl overflow-hidden shadow-card mb-8">
            <img
              src={backgroundImage}
              alt="Couple relaxing at home using a tablet"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="hidden lg:block" aria-hidden="true" />
            <Reveal variants={fadeRight}>
              <h2
                className={`text-2xl sm:text-3xl md:text-[40px] font-heading font-semibold text-heading leading-tight ${isStats ? 'mb-5' : 'mb-8'}`}
              >
                Experience The Features Magic Of Seiretsu
              </h2>
              {isStats ? (
                <>
                  <p className="text-body leading-relaxed mb-10 max-w-lg">
                    Seiretsu provides next-generation connectivity options designed for modern
                    lifestyles. Enjoy seamless cellular data transitions, blazing-fast home fiber
                    broadband, and secure digital payments under a single, unified experience.
                  </p>
                  <div className="flex flex-wrap gap-x-10 gap-y-6">
                    {stats.map((stat) => (
                      <div key={stat.label}>
                        <span className="block font-heading font-bold text-3xl sm:text-4xl text-primary leading-none mb-2">
                          {stat.value}
                        </span>
                        <span className="text-sm font-semibold text-heading">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="grid sm:grid-cols-3 gap-5">
                  {features.map(({ icon: Icon, title, desc }) => (
                    <div
                      key={title}
                      className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 text-center sm:text-left"
                    >
                      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 mx-auto sm:mx-0">
                        <Icon size={20} strokeWidth={1.75} />
                      </span>
                      <h6 className="font-heading font-semibold text-heading mb-1.5 leading-snug">
                        {title}
                      </h6>
                      <p className="text-sm text-body leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
