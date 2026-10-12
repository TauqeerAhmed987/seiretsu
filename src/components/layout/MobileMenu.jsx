import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo.webp'
import { contactInfo, navLinks } from '../../data/site'
import { slideInRight } from '../../utils/animations'
import { ChevronDownIcon, CloseIcon, MailIcon, PhoneIcon } from '../icons'

export default function MobileMenu({ onClose }) {
  const [openGroup, setOpenGroup] = useState(null)
  const { pathname } = useLocation()

  // Keep the page behind the open menu from scrolling.
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-dark/60 z-[60]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.aside
        className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[70] shadow-2xl flex flex-col"
        variants={slideInRight}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-black/5">
          <img src={logo} alt="Seiretsu" className="h-8 w-auto" />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="w-10 h-10 flex items-center justify-center rounded-md bg-dark text-white text-lg"
          >
            <CloseIcon />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-4">
          {navLinks.map((link) => {
            const isOpen = openGroup === link.label
            return (
              <div key={link.label} className="border-b border-black/5 py-1">
                {link.children ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between py-3 font-medium text-heading"
                      onClick={() => setOpenGroup(isOpen ? null : link.label)}
                    >
                      {link.label}
                      <ChevronDownIcon
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`}
                      />
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden pl-4"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={onClose}
                          className={`block py-2.5 text-sm font-medium ${pathname === child.path ? 'text-primary' : 'text-body'}`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    onClick={onClose}
                    className={`block py-3 font-medium ${pathname === link.path ? 'text-primary' : 'text-heading'}`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            )
          })}
        </nav>

        <div className="px-6 py-5 border-t border-black/5 space-y-3">
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-2 text-sm text-body"
          >
            <MailIcon className="text-primary" /> {contactInfo.email}
          </a>
          <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 text-sm text-body">
            <PhoneIcon className="text-primary" /> {contactInfo.phone}
          </a>
          <Link
            to="/contact"
            onClick={onClose}
            className="block text-center bg-primary text-white font-semibold py-3.5 rounded-md mt-2"
          >
            My Account
          </Link>
        </div>
      </motion.aside>
    </>
  )
}
