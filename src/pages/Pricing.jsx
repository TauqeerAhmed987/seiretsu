import PageTransition from '../components/layout/PageTransition'
import FeaturesMagic from '../components/sections/FeaturesMagic'
import PlanTabs from '../components/sections/PlanTabs'
import PricingFeatures from '../components/sections/PricingFeatures'
import { pricingPlanTabs } from '../data/plans'

export default function Pricing() {
  return (
    <PageTransition>
      <PricingFeatures />
      <PlanTabs tabs={pricingPlanTabs} />
      <FeaturesMagic variant="stats" />
    </PageTransition>
  )
}
