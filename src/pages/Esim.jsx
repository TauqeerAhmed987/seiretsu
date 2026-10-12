import heroEsim from '../assets/images/hero-esim.webp'
import esimCouple from '../assets/images/esim-couple.jpg'
import esimSpeed from '../assets/images/esim-speed.jpg'
import PageTransition from '../components/layout/PageTransition'
import FeatureGrid from '../components/sections/FeatureGrid'
import FeatureIntro from '../components/sections/FeatureIntro'
import PageHero from '../components/sections/PageHero'
import PlanTabs from '../components/sections/PlanTabs'
import { esimPlanTabs } from '../data/plans'
import { connectivityFeatures } from '../data/site'

export default function Esim() {
  return (
    <PageTransition>
      <PageHero
        title="Next-Gen eSIM. Global Freedom."
        desc="Instantly activate global cellular profiles. Stay connected in over 150+ countries with no roaming fees and no physical cards."
        image={heroEsim}
      />
      <FeatureIntro
        tag="5M+ Trusted Global Customers"
        title="We Provide Seamless, Next-Gen Connectivity Solutions"
        desc="Seiretsu brings your whole family together with fast mobile plans, reliable home internet, and dedicated family support built right in. Whether you need unlimited talk & text for the kids, a high-speed connection at home, or a single bill that covers everyone — we have a plan designed for you."
        stats={[
          { value: '100%', label: 'Global Network Coverage' },
          { value: '100%', label: 'Digital ESIM Experience' },
        ]}
        checklist={[
          'Instant Global Connectivity',
          'Digital eSIM Activation',
          'Flexible Plans, Full Control',
        ]}
        mainImage={esimCouple}
        overlayImage={esimSpeed}
      />
      <PlanTabs tabs={esimPlanTabs} tag="Popular eSIM Plans" title="Choose Your Perfect ESim Plan" />
      <FeatureGrid
        title="Next-Generation Connectivity, Tailored For You."
        items={connectivityFeatures}
      />
    </PageTransition>
  )
}
