import heroFiber from '../assets/images/hero-fiber.webp'
import esimCouple from '../assets/images/esim-couple.jpg'
import esimSpeed from '../assets/images/esim-speed.jpg'
import PageTransition from '../components/layout/PageTransition'
import FeatureGrid from '../components/sections/FeatureGrid'
import FeatureIntro from '../components/sections/FeatureIntro'
import PageHero from '../components/sections/PageHero'
import PlanTabs from '../components/sections/PlanTabs'
import Button from '../components/ui/Button'
import { fiberPlanTabs } from '../data/plans'
import { connectivityFeatures } from '../data/site'

export default function FiberOptic() {
  return (
    <PageTransition>
      <PageHero
        title="Lightning-Fast Fiber Internet"
        desc="Experience ultra-fast fiber optic connectivity with stable speeds for streaming, gaming, remote work, and smart home living without interruptions."
        image={heroFiber}
      />
      <FeatureIntro
        tag="Pure Fiber Optic Connection"
        title="Unleash Gigabit Speeds With Next-Gen Fiber Internet"
        desc="Seiretsu delivers ultra-fast, dedicated fiber optic internet straight to your home or workspace. Built on an advanced, pure-fiber infrastructure, our service guarantees symmetrical download and upload speeds, ultra-low latency, and unlimited data access."
        stats={[
          { value: '100%', label: 'Symmetrical Gigabit Speeds' },
          { value: '100%', label: 'High-Quality Network Uptime' },
        ]}
        checklist={[
          'Ultra-Low Latency & Zero Lag',
          'Unlimited Data, No Caps or Throttling',
          'Smart Wi-Fi 6 Router Included',
        ]}
        mainImage={esimCouple}
        overlayImage={esimSpeed}
      />
      <section className="py-10 md:py-14 text-center bg-[#F7F7FA]">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-semibold text-xl md:text-2xl text-heading mb-4">
            Not Sure What&apos;s Available At Your Address?
          </h2>
          <Button to="/business#check-address" icon={false}>
            Check Fiber Availability
          </Button>
        </div>
      </section>
      <PlanTabs tabs={fiberPlanTabs} title="Choose Your Perfect Plan" />
      <FeatureGrid
        title="Next-Generation Connectivity, Tailored For You."
        items={connectivityFeatures}
      />
    </PageTransition>
  )
}
