import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Esim from './pages/Esim'
import FiberOptic from './pages/FiberOptic'
import Directv from './pages/Directv'
import WirelessNetwork from './pages/WirelessNetwork'
import Pricing from './pages/Pricing'
import Business from './pages/Business'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/esim" element={<Esim />} />
          <Route path="/fiber-optic" element={<FiberOptic />} />
          <Route path="/directv" element={<Directv />} />
          <Route path="/wireless-network" element={<WirelessNetwork />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/business" element={<Business />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
