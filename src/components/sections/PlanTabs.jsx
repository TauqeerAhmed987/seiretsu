import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { fadeUp, inViewProps } from '../../utils/animations'
import { CheckIcon } from '../icons'
import Button from '../ui/Button'
import SectionTitle from '../ui/SectionTitle'

function PlanCard({ plan, index = 0, kind = 'esim' }) {
  const { name, data, speed, valid, desc, features, price, featured } = plan
  const needsAddressCheck = price === 'Check Address'

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      {...inViewProps}
      whileHover={{ y: -10 }}
      className={`relative flex flex-col rounded-2xl p-8 bg-white transition-shadow duration-300 border ${featured ? 'border-primary shadow-card-hover' : 'border-black/5 shadow-card hover:shadow-card-hover'}`}
    >
      {featured && (
        <span className="absolute -top-3 right-6 bg-primary text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">
          Featured
        </span>
      )}
      <span className="text-xs font-bold uppercase tracking-widest text-body">{name}</span>
      <div className="flex items-baseline gap-2 mt-2">
        <span className="text-3xl font-heading font-bold text-heading">{data || speed}</span>
      </div>
      {valid && (
        <span className="inline-block w-fit mt-2 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
          {valid}
        </span>
      )}
      {desc && <p className="text-sm mt-4 text-body leading-relaxed">{desc}</p>}
      <ul className="mt-5 space-y-3 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-heading/80">
            <CheckIcon className="text-primary mt-0.5 shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex items-end justify-between">
        <span className="text-2xl font-heading font-bold text-heading">
          {price}
          {kind === 'broadband' && price.startsWith('$') && (
            <span className="text-sm font-normal text-body">/mo</span>
          )}
        </span>
      </div>
      <Button
        to={needsAddressCheck ? '/business#check-address' : '/contact'}
        icon={false}
        variant={featured ? 'primary' : 'dark'}
        className="w-full mt-5 !py-3.5"
      >
        {needsAddressCheck ? 'Check Availability' : 'Contact Us'}
      </Button>
    </motion.div>
  )
}

const firstSubTabKey = (tab) => (tab.subTabs ? tab.subTabs[0].key : null)

export default function PlanTabs({
  tabs,
  title = 'Choose Your Perfect Plan',
  tag = 'Popular Plans',
}) {
  const [activeKey, setActiveKey] = useState(tabs[0].key)
  const activeTab = tabs.find((tab) => tab.key === activeKey)
  const [activeSubKey, setActiveSubKey] = useState(firstSubTabKey(activeTab))

  const selectTab = (key) => {
    setActiveKey(key)
    setActiveSubKey(firstSubTabKey(tabs.find((tab) => tab.key === key)))
  }

  const plans = activeTab.subTabs
    ? activeTab.subTabs.find((sub) => sub.key === activeSubKey)?.plans
    : activeTab.plans

  return (
    <section className="py-20 md:py-28 bg-[#F7F7FA]">
      <div className="container mx-auto px-4">
        <SectionTitle tag={tag} title={title} className="mb-10" />

        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => selectTab(tab.key)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${activeKey === tab.key ? 'bg-primary text-white shadow-button' : 'bg-white text-heading hover:bg-primary/10'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab.subTabs && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {activeTab.subTabs.map((sub) => (
              <button
                key={sub.key}
                onClick={() => setActiveSubKey(sub.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSubKey === sub.key ? 'bg-dark text-white' : 'bg-white text-body hover:bg-dark/10'}`}
              >
                {sub.label}
              </button>
            ))}
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeKey + activeSubKey}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {plans?.map((plan, i) => (
              <PlanCard key={plan.name + i} plan={plan} index={i} kind={activeTab.kind} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
