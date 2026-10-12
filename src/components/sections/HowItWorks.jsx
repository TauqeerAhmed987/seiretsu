import { motion } from 'framer-motion'
import { howItWorks } from '../../data/site'
import { fadeUp, inViewProps } from '../../utils/animations'
import { CardIcon, ClipboardIcon, QrCodeIcon, WifiIcon } from '../icons'
import SectionTitle from '../ui/SectionTitle'

const stepIcons = { clipboard: ClipboardIcon, card: CardIcon, qrcode: QrCodeIcon, wifi: WifiIcon }

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <SectionTitle
          tag="How It Works"
          title="How Do We Work To Help. You Stay Connected"
          className="mb-14"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorks.map((step, i) => {
            const Icon = stepIcons[step.icon]
            return (
              <motion.div
                key={step.title}
                custom={i}
                variants={fadeUp}
                {...inViewProps}
                whileHover={{ y: -8 }}
                className={`relative overflow-hidden rounded-2xl p-8 transition-shadow duration-300 ${step.highlight ? 'bg-primary shadow-card-hover' : 'bg-white border border-black/5 shadow-card hover:shadow-card-hover'}`}
              >
                {step.highlight && (
                  <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(115deg,rgba(255,255,255,0.6)_0px,rgba(255,255,255,0.6)_1px,transparent_1px,transparent_14px)]" />
                )}
                <div className="relative">
                  <span
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-full mb-6 text-3xl ${step.highlight ? 'bg-white/15 text-white' : 'bg-primary/10 text-primary'}`}
                  >
                    <Icon />
                  </span>
                  <h4
                    className={`font-heading font-semibold text-xl mb-3 ${step.highlight ? 'text-white' : 'text-heading'}`}
                  >
                    {step.title}
                  </h4>
                  <p
                    className={`text-sm leading-relaxed ${step.highlight ? 'text-white/85' : 'text-body'}`}
                  >
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
