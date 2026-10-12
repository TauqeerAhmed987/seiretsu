import { faqs } from '../../data/site'
import { fadeLeft } from '../../utils/animations'
import { CheckIcon } from '../icons'
import FaqAccordion from '../ui/FaqAccordion'
import ProgressRing from '../ui/ProgressRing'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'

const highlights = ['24/7 Customer Support Assistance', 'Fast & Secure Network Connectivity']
const rings = [
  { value: '100%', label: 'Dedicated Speed' },
  { value: '100%', label: 'Guaranteed Uptime' },
]

export default function FaqSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F7F7FA]">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <SectionTitle
            tag="Asked Questions"
            title="Have Any Questions On Your Mind?"
            desc="Find quick answers to common questions about managing eSIM configurations, setting up fiber broadband subscriptions, and paying telecom utility bills."
            align="left"
            className="mb-8"
          />
          <Reveal variants={fadeLeft} className="space-y-3 mb-10">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <CheckIcon size={14} />
                </span>
                <span className="font-heading font-semibold text-heading">{item}</span>
              </div>
            ))}
          </Reveal>
          <div className="flex flex-wrap gap-8">
            {rings.map((ring, i) => (
              <ProgressRing key={ring.label} value={ring.value} label={ring.label} index={i} />
            ))}
          </div>
        </div>
        <FaqAccordion faqs={faqs} />
      </div>
    </section>
  )
}
