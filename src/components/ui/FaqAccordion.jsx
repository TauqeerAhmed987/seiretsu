import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MinusIcon, PlusIcon } from '../icons'
import Reveal from './Reveal'

export default function FaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i
        return (
          <Reveal
            key={faq.q}
            index={i}
            className="border border-black/5 rounded-xl bg-white shadow-card overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
            >
              <span className="font-heading font-semibold text-heading text-base md:text-lg">
                {faq.q}
              </span>
              <span className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center bg-primary text-white transition-transform duration-300">
                {isOpen ? <MinusIcon size={14} /> : <PlusIcon size={14} />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-sm md:text-base text-body leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>
        )
      })}
    </div>
  )
}
