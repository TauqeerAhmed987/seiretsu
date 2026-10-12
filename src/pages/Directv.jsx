import aboutImage from '../assets/images/about-3.jpg'
import heroFiber from '../assets/images/hero-fiber.webp'
import tvImage from '../assets/images/tv.png'
import PageTransition from '../components/layout/PageTransition'
import FeatureGrid from '../components/sections/FeatureGrid'
import FeatureIntro from '../components/sections/FeatureIntro'
import PageHero from '../components/sections/PageHero'
import PlanTabs from '../components/sections/PlanTabs'
import { directvPlanTabs } from '../data/plans'
import { tvFeatures } from '../data/site'

export default function Directv() {
  return (
    <PageTransition>
      <PageHero
        title="DIRECTV Satellite & Stream"
        desc="Bring home live TV, sports, and every streaming app you love — delivered by satellite where you need it, or streamed straight over the internet."
        image={heroFiber}
      />
      <FeatureIntro
        tag="Satellite Or Streaming, Your Choice"
        title="One Entertainment Plan, Delivered However You Watch"
        desc="Seiretsu partners with DIRECTV to bring you live channels, on-demand movies, and your favorite streaming apps in one guide. Choose a traditional satellite dish for rock-solid reliability in any weather, or stream everything over your existing home internet — either way, the experience stays the same."
        stats={[
          { value: '160+', label: 'Channels Available At Launch' },
          { value: '100%', label: 'Uptime, Even Without Internet' },
        ]}
        checklist={[
          '4K Ultra HD On Compatible Devices',
          'Unlimited Cloud DVR For Streaming Plans',
          'Netflix, Prime Video & More In One Guide',
        ]}
        mainImage={aboutImage}
        overlayImage={tvImage}
      />
      <PlanTabs
        tabs={directvPlanTabs}
        title="Choose Your DIRECTV Package"
        tag="Live TV & Streaming"
      />
      <FeatureGrid
        title="Smarter Tech, Built For Better TV."
        items={tvFeatures}
        gridClassName="sm:grid-cols-2 lg:grid-cols-3"
      />
    </PageTransition>
  )
}
