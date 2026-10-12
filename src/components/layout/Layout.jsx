import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

// Scroll to the #hash target when present (e.g. /business#check-address), else to the top.
function useScrollOnNavigate() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    const scrollToTarget = () => {
      const target = document.getElementById(hash.slice(1))
      if (!target) return false
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return true
    }
    if (!scrollToTarget()) {
      const timer = setTimeout(scrollToTarget, 300)
      return () => clearTimeout(timer)
    }
  }, [pathname, hash])
}

export default function Layout() {
  useScrollOnNavigate()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
