export const outageTimeline = [
  {
    icon: 'credit-card',
    tick: 'T + 0 MIN',
    title: 'Payments stop',
    desc: 'Card terminals and cloud point-of-sale go offline. Cash only, or nothing at all. The line at the counter starts forming immediately.',
  },
  {
    icon: 'team',
    tick: 'T + 2 MIN',
    title: 'Your team stops',
    desc: 'Scheduling, inventory, EHR, CRM, project tools — almost every system a modern business runs on lives somewhere else. Staff stand around getting paid.',
  },
  {
    icon: 'call-drop',
    tick: 'T + 5 MIN',
    title: 'Calls and meetings drop',
    desc: 'VoIP phones die with the connection. Customers hear ringing with no answer, and whatever was on the calendar gets rescheduled.',
  },
  {
    icon: 'camera',
    tick: 'T + 15 MIN',
    title: 'Cameras go blind',
    desc: 'Cloud security recording, alarm monitoring, and remote site visibility all stop writing. You find out what you missed later.',
  },
]

export const fiberBenefits = [
  {
    title: 'Symmetrical speed',
    desc: "Upload matches download. This is the single biggest difference between a business fiber line and a consumer plan, and it's the one your team feels every hour: calls that hold, backups that finish, and large files that move without becoming an event.",
  },
  {
    title: 'Performance that holds at peak',
    desc: "Fiber isn't a shared-node technology, so your 5pm doesn't look different from your 10am. For businesses that are busiest exactly when the neighborhood is busiest, this matters more than the headline speed number.",
  },
  {
    title: 'Static IPs and business networking',
    desc: "If you're running a VPN, on-site servers, remote desktop access, or camera systems reachable from outside the building, you need addressing that doesn't change. We'll scope how many you need instead of guessing.",
  },
  {
    title: 'Business-grade support terms',
    desc: "Service level agreements, priority repair, and defined response commitments — the parts of the contract that only matter on the worst day of your year. We'll walk you through what's actually guaranteed in writing before you sign.",
  },
]

export const bundleBenefits = [
  'Field and mobile staff on the same account as the building',
  'Tablets, mobile POS, and connected equipment on business lines',
  'One invoice instead of separate wireless and internet billing',
  'One partner to call, whichever part of it is misbehaving',
  'Line counts that scale as you hire, without renegotiating everything',
]

export const industries = [
  {
    icon: 'building',
    title: 'Retail & Restaurant',
    desc: "Payments, kitchen systems, online ordering, and guest Wi-Fi. Failover isn't optional here — it's the difference between a slow hour and sending customers away.",
  },
  {
    icon: 'shield',
    title: 'Medical & Professional',
    desc: 'EHR platforms, telehealth, imaging transfers, and scheduling. Upload capacity and uptime commitments carry real weight, and so does documented reliability.',
  },
  {
    icon: 'wifi',
    title: 'Offices & Studios',
    desc: 'Teams that push work up as fast as they pull it down. Symmetrical fiber is the whole reason this category outgrows consumer plans.',
  },
  {
    icon: 'globe',
    title: 'Multi-Site Operations',
    desc: 'Same build, same support path, same billing at every address — instead of a different provider relationship per store. We coordinate the whole footprint.',
  },
  {
    icon: 'camera',
    title: 'Warehouse & Light Industrial',
    desc: 'Inventory systems, connected equipment, and camera arrays across large footprints. Coverage planning matters as much as the circuit itself.',
  },
  {
    icon: 'clock',
    title: 'New Construction & Relocation',
    desc: 'Business fiber installs run on lead times, not same-day scheduling. Bring us in early and the connection is working before you move in, not three weeks after.',
  },
]

export const processSteps = [
  {
    icon: 'checklist',
    title: 'Address Check',
    desc: 'We verify AT&T Business Fiber availability at your exact location — suite number included, since serviceability can differ within one building.',
  },
  {
    icon: 'support',
    title: 'Scope The Operation',
    desc: 'A short call about device counts, upload load, static IP needs, uptime tolerance, and what an hour of downtime actually costs you.',
  },
  {
    icon: 'price-tag',
    title: 'Build The Quote',
    desc: "Fiber tier, failover, wireless lines, and terms — written out so you can read what's guaranteed and what changes after the promotional period.",
  },
  {
    icon: 'bolt',
    title: 'Install & Stay Reachable',
    desc: 'AT&T performs installation and activation. We coordinate scheduling, confirm the build is right, and remain your contact afterward.',
  },
]

export const businessFaqs = [
  {
    q: 'Does going through Seiretsu cost more than going to AT&T directly?',
    a: "No. You get AT&T's authorized business rates and current promotions. We're compensated through the AT&T channel, not by you. What you gain is a scoping conversation and a contact who stays reachable afterward.",
  },
  {
    q: "Whose customer am I — yours or AT&T's?",
    a: "AT&T's. Your service, account access, and billing relationship are with AT&T. Seiretsu handles the sale, coordinates the install, and advocates for you afterward.",
  },
  {
    q: 'How long does a business fiber install take?',
    a: "It depends on whether fiber is already built to the building. Existing infrastructure can be days to a couple of weeks. New construction to the premises takes longer, sometimes considerably. We'll give you a realistic timeline after the address check rather than an optimistic one up front.",
  },
  {
    q: 'Can I keep my current provider during the transition?',
    a: "Yes, and for most businesses that's the right call. Run both briefly, confirm the new circuit performs, then cancel. Overlapping a few weeks is far cheaper than a gap.",
  },
  {
    q: 'What does 5G failover actually cover?',
    a: "It's a separate wireless path that carries your traffic when the fiber drops. Wireless capacity differs from fiber, so we size it to your critical systems — payments, phones, and core applications — rather than promising an identical experience.",
  },
  {
    q: 'Do you handle multiple locations?',
    a: "Yes. Multi-site is where we're most useful: one relationship covering every address, consistent builds where the infrastructure allows it, and a single contact instead of a separate provider conversation per site.",
  },
  {
    q: 'Who fixes it when something breaks?',
    a: "AT&T owns the network and performs repair under your service agreement. You can open the ticket yourself, or call us and we'll drive it and keep you updated. Most clients prefer the second option.",
  },
]

export const providers = [
  {
    id: 'att',
    name: 'AT&T',
    fiberLabel: 'AT&T Fiber',
    resBlurb: 'Symmetrical fiber plus 5G wireless on one account.',
    bizBlurb: 'Business Fiber with static IPs and 5G wireless failover.',
  },
  {
    id: 'alta',
    name: 'Altafiber',
    fiberLabel: 'Altafiber',
    resBlurb: 'Symmetrical fiber built for streaming, gaming, and hybrid work.',
    bizBlurb: 'Business fiber for offices, clinics, and multi-tenant sites.',
  },
  {
    id: 'bspd',
    name: 'Brightspeed',
    fiberLabel: 'Brightspeed Fiber',
    resBlurb: 'Fiber expanding into communities that ran on copper for years.',
    bizBlurb: 'Business fiber reaching markets larger carriers skipped.',
  },
  {
    id: 'wow',
    name: 'WOW!',
    fiberLabel: 'WOW! Fiber',
    resBlurb: 'High-speed broadband, no annual contract on most plans.',
    bizBlurb: 'Business internet with straightforward month-to-month terms.',
  },
]

export const sampleZips = {
  27601: {
    label: 'Raleigh, NC',
    att: 'fiber',
    alta: 'none',
    bspd: 'fiber',
    wow: 'none',
  },
  28202: {
    label: 'Charlotte, NC',
    att: 'fiber',
    alta: 'none',
    bspd: 'fiber',
    wow: 'none',
  },
  30303: {
    label: 'Atlanta, GA',
    att: 'fiber',
    alta: 'none',
    bspd: 'build',
    wow: 'alt',
  },
  35203: {
    label: 'Birmingham, AL',
    att: 'fiber',
    alta: 'none',
    bspd: 'none',
    wow: 'fiber',
  },
  43215: {
    label: 'Columbus, OH',
    att: 'none',
    alta: 'build',
    bspd: 'alt',
    wow: 'fiber',
  },
  45202: {
    label: 'Cincinnati, OH',
    att: 'alt',
    alta: 'fiber',
    bspd: 'none',
    wow: 'fiber',
  },
  45219: {
    label: 'Cincinnati, OH',
    att: 'alt',
    alta: 'fiber',
    bspd: 'none',
    wow: 'alt',
  },
  45459: {
    label: 'Dayton, OH',
    att: 'none',
    alta: 'fiber',
    bspd: 'build',
    wow: 'fiber',
  },
  48226: {
    label: 'Detroit, MI',
    att: 'alt',
    alta: 'none',
    bspd: 'none',
    wow: 'fiber',
  },
  63101: {
    label: 'St. Louis, MO',
    att: 'fiber',
    alta: 'none',
    bspd: 'build',
    wow: 'none',
  },
  75201: {
    label: 'Dallas, TX',
    att: 'fiber',
    alta: 'none',
    bspd: 'none',
    wow: 'none',
  },
  96813: {
    label: 'Honolulu, HI',
    att: 'none',
    alta: 'fiber',
    bspd: 'none',
    wow: 'none',
  },
}

export const availabilityStatus = {
  fiber: {
    badge: 'bg-emerald-50 text-emerald-700',
    dot: 'bg-emerald-500',
    text: 'Fiber available',
    cta: 'See plans',
    rank: 0,
  },
  build: {
    badge: 'bg-amber-50 text-amber-700',
    dot: 'bg-amber-500',
    text: 'Building now',
    cta: 'Get notified',
    rank: 1,
  },
  alt: {
    badge: 'bg-slate-100 text-slate-600',
    dot: 'bg-slate-400',
    text: 'Service, not fiber',
    cta: 'See options',
    rank: 2,
  },
  check: {
    badge: 'bg-slate-100 text-slate-600',
    dot: 'bg-slate-400',
    text: 'Needs confirming',
    cta: 'Request a check',
    rank: 3,
  },
  none: {
    badge: 'bg-red-50 text-red-600',
    dot: 'bg-red-500',
    text: 'Not in this area',
    cta: '',
    rank: 4,
  },
}

export const availabilityNotes = {
  fiber: 'Live and serviceable at this location.',
  build: 'Construction is active in this area but the line is not live yet.',
  alt: "Available here, though not over fiber. We'll explain the trade-offs.",
  check: "We couldn't confirm automatically. We'll check this one by hand.",
  none: 'This carrier does not currently serve this area.',
}
