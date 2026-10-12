import PageTransition from '../components/layout/PageTransition'
import FaqSection from '../components/sections/FaqSection'
import FeaturesMagic from '../components/sections/FeaturesMagic'
import HeroSlider from '../components/sections/HeroSlider'
import HomeWhyChooseUs from '../components/sections/HomeWhyChooseUs'
import HowItWorks from '../components/sections/HowItWorks'
import PlanTabs from '../components/sections/PlanTabs'
import PocketFiCta from '../components/sections/PocketFiCta'
import Services from '../components/sections/Services'
import Testimonials from '../components/sections/Testimonials'
import { homePlanTabs } from '../data/plans'

export default function Home() {
  return (
    <PageTransition>
      <HeroSlider />
      <HowItWorks />
      <HomeWhyChooseUs />
      <Services />
      <FeaturesMagic />
      <PlanTabs tabs={homePlanTabs} />
      <PocketFiCta />
      <FaqSection />
      <Testimonials />
    </PageTransition>
  )
}
