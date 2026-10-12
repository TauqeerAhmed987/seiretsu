import esimCouple from '../assets/images/esim-couple.jpg'
import esimSpeed from '../assets/images/esim-speed.jpg'
import heroWireless from '../assets/images/hero-wireless.webp'
import PageTransition from '../components/layout/PageTransition'
import FeatureGrid from '../components/sections/FeatureGrid'
import FeatureIntro from '../components/sections/FeatureIntro'
import PageHero from '../components/sections/PageHero'
import PlanTabs from '../components/sections/PlanTabs'
import { wirelessPlanTabs } from '../data/plans'
import { connectivityFeatures } from '../data/site'

export default function WirelessNetwork() {
  return (
    <PageTransition>
      <PageHero
        title="Reliable Wireless Internet Anywhere"
        desc="Stay connected with flexible wireless internet solutions designed for seamless browsing, streaming, and productivity wherever coverage reaches."
        image={heroWireless}
      />
      <FeatureIntro
        tag="Next-Gen Wireless Connection"
        title="High-Speed, Flexible Wireless Internet Anywhere"
        desc="Seiretsu delivers fast, dependable wireless broadband designed to keep you connected where traditional wired hookups can't go. Powered by our advanced LTE and 5G network infrastructure, our wireless service offers hassle-free setup, exceptional coverage, and the bandwidth you need for streaming, gaming, and working from home."
        stats={[
          { value: '100%', label: 'Broad LTE & 5G Network Coverage' },
          { value: '100%', label: 'Plug-And-Play Self-Installation' },
        ]}
        checklist={[
          'No Trenching or Phone Lines Required',
          'Easy Setup & Activation in Minutes',
          'Reliable LTE & 5G Wireless Network',
        ]}
        mainImage={esimCouple}
        overlayImage={esimSpeed}
      />
      <PlanTabs tabs={wirelessPlanTabs} title="Choose Your Perfect Plan" />
      <FeatureGrid
        title="Next-Generation Connectivity, Tailored For You."
        items={connectivityFeatures}
      />
    </PageTransition>
  )
}
