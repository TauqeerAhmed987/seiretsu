import { Link } from 'react-router-dom'
import AvailabilityChecker from '../components/business/AvailabilityChecker'
import DowntimeCalculator from '../components/business/DowntimeCalculator'
import { CheckIcon } from '../components/icons'
import PageTransition from '../components/layout/PageTransition'
import FaqAccordion from '../components/ui/FaqAccordion'
import FeatureCard from '../components/ui/FeatureCard'
import Reveal from '../components/ui/Reveal'
import SectionTitle from '../components/ui/SectionTitle'
import {
  bundleBenefits,
  businessFaqs,
  fiberBenefits,
  industries,
  outageTimeline,
  processSteps,
} from '../data/business'
import { fadeLeft, fadeRight } from '../utils/animations'

// Left-aligned, full-width section heading used throughout this page.
const wideTitle = {
  align: 'left',
  maxW: 'max-w-none',
  descMaxW: 'max-w-none',
  className: 'mb-14 mx-0',
}

function StepCard({ label, title, desc, index }) {
  return (
    <Reveal index={index} className="p-6 rounded-xl bg-white border border-black/5 shadow-card">
      <span className="text-[11px] font-semibold uppercase tracking-widest text-primary">{label}</span>
      <h3 className="font-heading font-semibold text-lg text-heading mt-3 mb-2">{title}</h3>
      <p className="text-sm text-body leading-relaxed">{desc}</p>
    </Reveal>
  )
}

export default function Business() {
  return (
    <PageTransition>
      <DowntimeCalculator />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionTitle
            {...wideTitle}
            tag="The Real Cost"
            title="When The Connection Drops, This Is The Order Things Fail In."
            desc="Most businesses discover their dependency list during the outage. Here's what typically goes first."
            titleSize="text-[24px] sm:text-[28px] lg:text-[32px]"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outageTimeline.map((item, i) => (
              <StepCard key={item.title} label={item.tick} title={item.title} desc={item.desc} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#F7F7FA]" id="fiber">
        <div className="container mx-auto px-4">
          <SectionTitle
            {...wideTitle}
            tag="AT&T Business Fiber"
            title="Built For The Direction Business Traffic Actually Moves."
            desc="Consumer connections are built for downloading. Business connections carry uploads — backups, video calls, security footage, file transfers, and everything syncing to the cloud all day."
            titleSize="text-[26px] sm:text-[30px] lg:text-[34px]"
          />
          <div className="border-t border-black/10">
            {fiberBenefits.map((item, i) => (
              <Reveal
                key={item.title}
                index={i}
                className="grid md:grid-cols-[280px_1fr] gap-2 md:gap-10 py-7 border-b border-black/10"
              >
                <h3 className="font-heading font-semibold text-lg text-heading md:whitespace-nowrap">
                  {item.title}
                </h3>
                <p className="text-body leading-relaxed max-w-2xl">{item.desc}</p>
              </Reveal>
            ))}
          </div>
          <a href="#check-address" className="btn-primary mt-10">
            Check Fiber At My Address
          </a>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-dark" id="failover">
        <div className="container mx-auto px-4">
          <SectionTitle
            {...wideTitle}
            light
            tag="Fiber + 5G"
            title="One Line Is A Plan. Two Paths Is A Plan That Survives A Backhoe."
            desc="Fiber carries the work. AT&T 5G wireless sits behind it as a second path on a completely separate network. When the fiber is cut, the connection moves over — usually before anyone at the counter notices."
            titleSize="text-[24px] sm:text-[28px] lg:text-[32px]"
          />
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal variants={fadeLeft} className="rounded-xl border border-primary bg-dark-soft p-7">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-primary">
                Path 01 · Primary
              </span>
              <h3 className="font-heading font-semibold text-xl text-white mt-3 mb-2">Business Fiber</h3>
              <p className="text-white/60 leading-relaxed">
                Symmetrical, high-capacity, and carrying everything by default: payments, phones,
                cloud apps, backups, and cameras.
              </p>
            </Reveal>
            <Reveal variants={fadeRight} className="rounded-xl border border-white/10 bg-dark-soft p-7">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-white/50">
                Path 02 · Automatic Failover
              </span>
              <h3 className="font-heading font-semibold text-xl text-white mt-3 mb-2">5G Wireless</h3>
              <p className="text-white/60 leading-relaxed">
                An independent wireless path that takes over when the primary drops. Registers keep
                running, phones keep ringing, and the day keeps going.
              </p>
            </Reveal>
          </div>
          <p className="text-white/60 mt-8 max-w-none leading-relaxed">
            Fiber cuts are almost never your fault. Construction crews, storms, and traffic
            accidents take out lines that were working perfectly a minute earlier. Failover is the
            difference between a bad hour and a closed day.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionTitle
            {...wideTitle}
            maxW="max-w-4xl"
            tag="One Account"
            title="Put The Building And The Phones On The Same Bill."
            titleSize="text-[26px] sm:text-[30px] lg:text-[36px]"
          />
          <div className="grid lg:grid-cols-2 gap-10 items-center bg-white border border-black/5 shadow-card rounded-2xl p-8 md:p-12">
            <Reveal variants={fadeLeft}>
              <h3 className="font-heading font-semibold text-2xl md:text-3xl text-heading mb-4">
                Fiber + 5G Wireless Lines, One Relationship
              </h3>
              <p className="text-body leading-relaxed mb-6">
                Business Fiber at the location, AT&amp;T wireless lines for the team, and failover
                connecting the two — consolidated onto one account with one point of contact.
                Multi-line business pricing improves as lines are added.
              </p>
              <Link to="/contact" className="btn-primary">
                Ask About Bundle Pricing
              </Link>
            </Reveal>
            <Reveal variants={fadeRight}>
              <ul className="space-y-1">
                {bundleBenefits.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 py-3 border-b border-black/10 last:border-b-0 text-heading font-medium"
                  >
                    <span className="w-6 h-6 mt-0.5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <CheckIcon size={14} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#F7F7FA]" id="who">
        <div className="container mx-auto px-4">
          <SectionTitle
            {...wideTitle}
            tag="Who We Serve"
            title="The Right Build Depends On What Breaks First."
            desc="A three-chair barbershop and a twelve-person design studio need different things. We scope to the operation, not to a tier chart."
            titleSize="text-[26px] sm:text-[30px] lg:text-[36px]"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((item, i) => (
              <FeatureCard key={item.title} icon={item.icon} title={item.title} desc={item.desc} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionTitle
            {...wideTitle}
            maxW="max-w-5xl"
            tag="How It Runs"
            title="Four Steps, And We Handle The Parts You'd Rather Not."
            titleSize="text-[24px] sm:text-[28px] lg:text-[32px]"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, i) => (
              <StepCard
                key={item.title}
                label={`Step ${String(i + 1).padStart(2, '0')}`}
                title={item.title}
                desc={item.desc}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#F7F7FA]" id="faq">
        <div className="container mx-auto px-4">
          <SectionTitle
            tag="Questions"
            title="The Ones Businesses Actually Ask."
            titleSize="text-[26px] sm:text-[30px] lg:text-[36px]"
            className="mb-14"
          />
          <div className="max-w-3xl mx-auto">
            <FaqAccordion faqs={businessFaqs} />
          </div>
        </div>
      </section>

      <AvailabilityChecker />

      <div className="container mx-auto px-4 pb-16 pt-2 text-center">
        <p className="text-xs text-body/70 leading-relaxed max-w-4xl mx-auto">
          AT&amp;T, the AT&amp;T logo, and all AT&amp;T marks are the property of AT&amp;T
          Intellectual Property and are used with permission. Seiretsu is an independent authorized
          partner and is not AT&amp;T. Service availability, speeds, pricing, and terms vary by
          address and are subject to change. Installation, provisioning, activation, and repair are
          performed by AT&amp;T under the applicable customer agreement. Downtime figures shown on
          this page are illustrative estimates, not projections of actual loss.
        </p>
      </div>
    </PageTransition>
  )
}
