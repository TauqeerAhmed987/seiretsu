import { motion } from 'framer-motion'
import { fadeUp, inViewProps } from '../../utils/animations'
import {
  ArrowUpRightIcon,
  BoltIcon,
  BuildingIcon,
  CallDropIcon,
  CameraIcon,
  CardIcon,
  ChecklistIcon,
  ClockIcon,
  CloudIcon,
  DevicesIcon,
  GlobeIcon,
  MicIcon,
  MobileIcon,
  PriceTagIcon,
  SearchIcon,
  ShieldIcon,
  SignalIcon,
  SupportIcon,
  TeamIcon,
  TvIcon,
  WifiIcon,
} from '../icons'

const icons = {
  phone: MobileIcon,
  wifi: WifiIcon,
  devices: DevicesIcon,
  signal: SignalIcon,
  support: SupportIcon,
  'price-tag': PriceTagIcon,
  globe: GlobeIcon,
  wallet: CardIcon,
  tv: TvIcon,
  cloud: CloudIcon,
  search: SearchIcon,
  mic: MicIcon,
  'credit-card': CardIcon,
  team: TeamIcon,
  'call-drop': CallDropIcon,
  camera: CameraIcon,
  bolt: BoltIcon,
  shield: ShieldIcon,
  building: BuildingIcon,
  checklist: ChecklistIcon,
  clock: ClockIcon,
}

export default function FeatureCard({ icon, title, desc, highlight, index = 0 }) {
  const Icon = icons[icon] || WifiIcon

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      {...inViewProps}
      whileHover={{ y: -8 }}
      className={`group relative p-7 rounded-xl transition-colors duration-300 ${highlight ? 'bg-primary text-white' : 'bg-white text-heading border border-black/5 shadow-card hover:border-primary/30'}`}
    >
      <div
        className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-5 ${highlight ? 'bg-white/15 text-white' : 'bg-primary/10 text-primary'}`}
      >
        <Icon />
      </div>
      <h4
        className={`font-heading font-semibold text-lg mb-2 ${highlight ? 'text-white' : 'text-heading'}`}
      >
        {title}
      </h4>
      <p className={`text-sm leading-relaxed ${highlight ? 'text-white/80' : 'text-body'}`}>
        {desc}
      </p>
      <ArrowUpRightIcon
        className={`absolute bottom-6 right-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${highlight ? 'text-white' : 'text-primary'}`}
      />
    </motion.div>
  )
}
