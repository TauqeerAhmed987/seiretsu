import heroEsim from '../assets/images/hero-esim.webp'
import heroFiber from '../assets/images/hero-fiber.webp'
import heroWireless from '../assets/images/hero-wireless.webp'

export const navLinks = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'eSIM',
    path: '/esim',
  },
  {
    label: 'Products',
    path: '#',
    children: [
      {
        label: 'Fiber Optic',
        path: '/fiber-optic',
      },
      {
        label: 'DIRECTV Satellite & Stream',
        path: '/directv',
      },
      {
        label: 'Wireless',
        path: '/wireless-network',
      },
    ],
  },
  {
    label: 'Plans & Pricing',
    path: '/pricing',
  },
  {
    label: 'Business',
    path: '/business',
  },
  {
    label: 'Contact Us',
    path: '/contact',
  },
]

export const footerLinks = [
  {
    label: 'ESim',
    path: '/esim',
  },
  {
    label: 'Fiber Optic',
    path: '/fiber-optic',
  },
  {
    label: 'DIRECTV Satellite & Stream',
    path: '/directv',
  },
  {
    label: 'Wireless Network',
    path: '/wireless-network',
  },
  {
    label: 'Plans & Pricing',
    path: '/pricing',
  },
  {
    label: 'Support',
    path: '/contact',
  },
]

export const contactInfo = {
  email: 'Info@seiretsu.io',
  phone: '+1 (689) 374-2500',
  address: '3065 Daniels Road #1113 Winter Garden, FL 34787 United States',
  whatsapp: 'https://wa.me/16893742500',
}

export const socialLinks = [
  {
    icon: 'facebook',
    url: 'https://www.facebook.com/people/Seiretsu/61564823080662/',
  },
  {
    icon: 'instagram',
    url: 'https://www.instagram.com/seiretsu.22/',
  },
]

export const heroSlides = [
  {
    title: 'Cellular without boundaries.',
    desc: 'Instantly activate global eSIMs and manage your connection seamlessly, anywhere on Earth.',
    image: heroEsim,
    buttons: [
      {
        label: 'Buy eSIM',
        to: '/pricing',
      },
      {
        label: 'Get Broadband',
        to: '/pricing',
      },
      {
        label: 'Pay Bill',
        to: '/contact',
      },
    ],
  },
  {
    title: 'Ultra-Fast Fiber For Home & Office',
    desc: 'Experience unthrottled gigabit broadband with zero lag. Tailored for hybrid work, 4K streaming, and multi-device households.',
    image: heroFiber,
    buttons: [
      {
        label: 'Buy eSIM',
        to: '/pricing',
      },
      {
        label: 'Get Broadband',
        to: '/pricing',
      },
      {
        label: 'Pay Bill',
        to: '/contact',
      },
    ],
  },
  {
    title: 'Reliable Wireless Internet Anywhere.',
    desc: 'Stay connected with flexible wireless internet designed for seamless browsing, streaming, and productivity wherever coverage reaches.',
    image: heroWireless,
    buttons: [
      {
        label: 'Buy eSIM',
        to: '/esim',
      },
      {
        label: 'Get Broadband',
        to: '/wireless-network',
      },
      {
        label: 'Pay Bill',
        to: '/contact',
      },
    ],
  },
]

export const howItWorks = [
  {
    icon: 'clipboard',
    title: 'Choose A Plan',
    desc: 'Select an eSIM or broadband plan that fits your personal or business needs.',
    highlight: false,
  },
  {
    icon: 'card',
    title: 'Make Payment',
    desc: 'Pay securely using multiple payment methods with instant confirmation.',
    highlight: true,
  },
  {
    icon: 'qrcode',
    title: 'Get Activated',
    desc: 'Receive your eSIM QR instantly or schedule broadband setup.',
    highlight: false,
  },
  {
    icon: 'wifi',
    title: 'Stay Connected',
    desc: 'Enjoy uninterrupted internet with fast support and smart management tools.',
    highlight: false,
  },
]

export const tvFeatures = [
  {
    icon: 'tv',
    title: 'Watch However You Want',
    desc: 'Connect with a Seiretsu-supplied streaming device, your own Apple TV, Roku, or smart TV, or a traditional satellite dish — whatever suits your home.',
    highlight: true,
  },
  {
    icon: 'cloud',
    title: 'Unlimited Cloud DVR',
    desc: 'Record live TV without limits and keep it for months, with no separate DVR box required for streaming customers.',
    highlight: false,
  },
  {
    icon: 'search',
    title: 'Universal Search',
    desc: "Find a show once and see every place it's available — live TV, on demand, and your favorite streaming apps.",
    highlight: false,
  },
  {
    icon: 'mic',
    title: 'Voice Remote',
    desc: 'Change channels, launch an app, or find something new to watch just by asking — no typing required.',
    highlight: false,
  },
  {
    icon: 'devices',
    title: 'All Your Apps In One Place',
    desc: 'Access Netflix, Prime Video, and the rest of your favorite streaming apps right alongside your live channel guide.',
    highlight: false,
  },
  {
    icon: 'signal',
    title: 'Reliable In Any Weather',
    desc: "No home internet? Satellite delivery keeps your programming running even when the weather doesn't cooperate.",
    highlight: false,
  },
]

export const connectivityFeatures = [
  {
    icon: 'phone',
    title: 'High-Speed Mobile Connectivity',
    desc: 'Enjoy lightning-fast mobile service with seamless coverage, crystal-clear calling, and uninterrupted browsing for every member of the family.',
    highlight: false,
  },
  {
    icon: 'wifi',
    title: 'Ultra-Fast Home Broadband',
    desc: 'Reliable broadband built for streaming, gaming, remote work, and everyday browsing — keeping everyone connected without interruptions.',
    highlight: true,
  },
  {
    icon: 'devices',
    title: 'Flexible Family Plans',
    desc: 'Connect the whole family with customizable plans and convenient bundles, all managed from one account with simplified billing.',
    highlight: false,
  },
  {
    icon: 'signal',
    title: 'Smart Connectivity Features',
    desc: 'Stay connected anywhere with Wi-Fi calling, hotspot sharing, and seamless multi-device access included in your plan.',
    highlight: false,
  },
  {
    icon: 'support',
    title: 'Dedicated Customer Support',
    desc: 'Get expert help whenever you need it — from activating services to managing plans and resolving connectivity issues.',
    highlight: false,
  },
  {
    icon: 'price-tag',
    title: 'Transparent Pricing, No Surprises',
    desc: 'No hidden charges, no unexpected fees — just simple, affordable plans with complete pricing transparency.',
    highlight: false,
  },
  {
    icon: 'globe',
    title: 'Global Roaming',
    desc: 'Stay connected across 150+ countries without swapping physical cards. Connect to premium local partner networks automatically.',
    highlight: false,
  },
  {
    icon: 'wallet',
    title: 'Unified Bill Pay',
    desc: 'Consolidate telecom invoices and subscription fees into one secure dashboard. Automate payments and monitor monthly expenditures.',
    highlight: false,
  },
]

export const faqs = [
  {
    q: 'How do I activate my eSIM?',
    a: "Activating your eSIM is quick and simple. After purchasing an eSIM plan, you'll receive a QR code via email or in your My Account dashboard. Scan the QR code using your device settings, follow the activation steps, and get connected instantly.",
  },
  {
    q: 'Can I upgrade or downgrade my plan?',
    a: 'Yes. You can easily upgrade or downgrade your eSIM or broadband plan anytime through your My Account section. Changes will be applied based on your billing cycle and selected plan availability.',
  },
  {
    q: 'How can I pay my bill online?',
    a: 'You can securely pay your bills through the My Account dashboard using credit/debit cards, UPI, net banking, wallets, or other supported payment methods. Payments are processed instantly with confirmation notifications.',
  },
  {
    q: 'Where can I manage my subscriptions?',
    a: 'All your subscriptions can be managed in the My Account section. From there, you can view active plans, renew subscriptions, monitor usage, download invoices, manage billing, and update preferences.',
  },
]

export const testimonials = [
  {
    quote:
      'Our company depends on strong connectivity, and Seiretsu delivers exactly that. The speed, uptime, and professional installation exceeded our expectations. We finally have an internet provider we can trust.',
    name: 'Salman Ahmed',
    role: 'CEO, Business Co',
    avatar: 'avatar-1',
    rating: 4,
  },
  {
    quote:
      'Switching to Seiretsu was the best decision for our family. The internet is incredibly reliable, and any questions we had were handled promptly. Outstanding service from start to finish.',
    name: 'Cameron Williamson',
    role: 'CEO, Business Co',
    avatar: 'avatar-2',
    rating: 4,
  },
  {
    quote:
      'Seiretsu has transformed our home internet experience. The connection is fast, stable, and perfect for streaming and remote work. Their customer support is always quick and helpful. Highly recommended!',
    name: 'Jone Deo',
    role: 'Officer, BaperHotel',
    avatar: 'avatar-3',
    rating: 4,
  },
  {
    quote:
      'Seiretsu is very good at what they do and more than happy to challenge and push you to think about your decisions, both from usability and design standpoints.',
    name: 'RS Rahul Das',
    role: 'CTO, Netband Ltd',
    avatar: 'avatar-1',
    rating: 4,
  },
]

export const streamingClients = [
  {
    name: 'Netflix',
    file: 'client-netflix',
  },
  {
    name: 'HBO Max',
    file: 'client-hbomax',
  },
  {
    name: 'Hulu',
    file: 'client-hulu',
  },
  {
    name: 'YouTube Premium',
    file: 'client-ytpremium',
  },
  {
    name: 'Funimation',
    file: 'client-funimation',
  },
  {
    name: 'Stan',
    file: 'client-stan',
  },
]

export const contactServices = [
  'eSIM Plans',
  'Fiber Optic',
  'DIRECTV Satellite & Stream',
  'Wireless Network',
  'Business Solutions',
  'Billing Support',
]
