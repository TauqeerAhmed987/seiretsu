import { motion } from 'framer-motion'

const RADIUS = 42
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export default function ProgressRing({ value = '100%', label, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="flex items-center gap-4"
    >
      <div className="relative w-20 h-20 shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <circle cx="50" cy="50" r={RADIUS} stroke="#f1e3e2" strokeWidth="7" fill="none" />
          <motion.circle
            cx="50"
            cy="50"
            r={RADIUS}
            stroke="#E42313"
            strokeWidth="7"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            initial={{ strokeDashoffset: CIRCUMFERENCE }}
            whileInView={{ strokeDashoffset: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: index * 0.15, ease: 'easeOut' }}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-heading font-bold text-heading text-sm">
          {value}
        </span>
      </div>
      <span className="font-heading font-semibold text-heading leading-snug">{label}</span>
    </motion.div>
  )
}
