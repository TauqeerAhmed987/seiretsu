import { motion } from 'framer-motion'
import Button from '../ui/Button'

export default function PageHero({ title, desc, image }) {
  return (
    <section className="relative bg-[#F4F4F7] overflow-hidden">
      <div className="relative min-h-[480px] md:min-h-[600px] flex items-center">
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="hidden sm:block absolute inset-0 w-full h-full object-cover object-right"
        />
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#F4F4F7] via-[#F4F4F7]/95 sm:via-[#F4F4F7]/80 to-transparent" />
        <div className="container relative mx-auto px-4 py-20 md:py-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-heading leading-tight mb-6">
              {title}
            </h1>
            <p className="text-body text-base md:text-lg leading-relaxed mb-8 max-w-lg">{desc}</p>
            <Button to="/pricing" icon={false}>
              Get A Plan
            </Button>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sm:hidden rounded-xl overflow-hidden shadow-card mt-8"
            >
              <img src={image} alt="" className="w-full h-44 object-cover object-right" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
