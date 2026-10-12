import { useMemo, useState } from 'react'
import { fadeLeft, fadeRight } from '../../utils/animations'
import Reveal from '../ui/Reveal'

const OUTAGE_HOURS = 4
const HOURLY_PAYROLL = 28
const OUTAGES_PER_YEAR = 2
const FAILOVER_EXPOSURE = 0.1

const formatUsd = (value) => '$' + Math.round(value).toLocaleString('en-US')

const inputClass =
  'w-full text-sm px-3 py-3 rounded-md bg-dark-soft border border-white/10 text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30'
const labelClass = 'block text-[10.5px] font-semibold uppercase tracking-widest text-white/50 mb-2'

export default function DowntimeCalculator() {
  const [revenue, setRevenue] = useState(900)
  const [staff, setStaff] = useState(8)

  const { total, lostRevenue, idlePayroll, yearly, withFailover } = useMemo(() => {
    const lost = Math.max(0, Number(revenue) || 0) * OUTAGE_HOURS
    const idle = Math.max(0, Number(staff) || 0) * HOURLY_PAYROLL * OUTAGE_HOURS
    const sum = lost + idle
    return {
      total: sum,
      lostRevenue: lost,
      idlePayroll: idle,
      yearly: sum * OUTAGES_PER_YEAR,
      withFailover: sum * FAILOVER_EXPOSURE,
    }
  }, [revenue, staff])

  const breakdown = [
    ['Lost revenue, 4 hrs', lostRevenue, false],
    ['Idle payroll, 4 hrs', idlePayroll, false],
    ['Two outages a year', yearly, false],
    ['With 5G failover', withFailover, true],
  ]

  return (
    <section className="relative bg-[#F4F4F7] overflow-hidden py-16 md:py-24">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal variants={fadeLeft}>
          <span className="inline-block text-primary font-semibold uppercase tracking-[2px] text-sm mb-4 underline underline-offset-4 decoration-2">
            AT&amp;T Business Fiber &amp; 5G Wireless
          </span>
          <h1 className="text-[28px] sm:text-4xl md:text-[48px] font-heading font-semibold text-heading leading-[1.3] mb-6">
            Your business doesn&apos;t have an internet plan.
            <span className="text-primary block mt-1">It has a dependency.</span>
          </h1>
          <p className="text-body text-base md:text-lg leading-relaxed mb-8 max-w-lg">
            Seiretsu sells and supports AT&amp;T Business Fiber and 5G wireless for single-site and
            multi-site operations. Symmetrical fiber for the work, wireless failover for the days
            the work can&apos;t stop, and one number to call when something needs fixing.
          </p>
          <div className="pt-6 border-t border-black/10">
            <span className="block text-xs font-semibold uppercase tracking-widest text-body mb-3">
              Authorized AT&amp;T Business Partner
            </span>
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="#check-address"
                className="inline-flex items-center justify-center gap-2 font-semibold text-sm md:text-[15px] px-7 py-3.5 md:px-8 md:py-4 rounded-md transition-all duration-300 ease-out hover:-translate-y-1 whitespace-nowrap bg-transparent text-heading border border-heading/20 hover:bg-dark hover:text-white hover:border-dark"
              >
                Check My Address
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal variants={fadeRight} className="bg-dark rounded-2xl overflow-hidden shadow-card-hover">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-white/50">
              Downtime Exposure — Estimate
            </span>
            <span className="inline-flex items-center gap-2 text-white text-[11px] font-semibold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_0_4px_rgba(228,35,19,0.25)]" />
              Unprotected
            </span>
          </div>

          <div className="px-6 pt-6 pb-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="rev" className={labelClass}>
                  Revenue Per Open Hour
                </label>
                <input
                  id="rev"
                  type="number"
                  inputMode="numeric"
                  min="0"
                  value={revenue}
                  onChange={(e) => setRevenue(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="staff" className={labelClass}>
                  Staff Who Stop Working
                </label>
                <input
                  id="staff"
                  type="number"
                  inputMode="numeric"
                  min="0"
                  value={staff}
                  onChange={(e) => setStaff(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10">
              <span className="text-[10.5px] font-semibold uppercase tracking-widest text-white/50">
                One Four-Hour Outage Costs You
              </span>
              <div className="font-heading font-bold text-4xl sm:text-5xl text-primary leading-none mt-2 mb-1 tabular-nums">
                {formatUsd(total)}
              </div>
              <p className="text-sm text-white/50">
                {total > 0
                  ? 'Lost revenue plus idle payroll, before anyone counts the goodwill.'
                  : 'Enter your numbers to see the exposure.'}
              </p>
            </div>

            <ul className="mt-5 pt-1 border-t border-white/10">
              {breakdown.map(([label, value, highlight]) => (
                <li
                  key={label}
                  className="flex items-center justify-between gap-4 py-3 border-b border-white/10 text-sm text-white/70 last:border-b-0"
                >
                  <span>{label}</span>
                  <b className={`font-semibold tabular-nums ${highlight ? 'text-primary' : 'text-white'}`}>
                    {formatUsd(value)}
                  </b>
                </li>
              ))}
            </ul>
          </div>

          <div className="px-6 py-4 bg-dark-soft text-[11.5px] text-white/50 leading-relaxed">
            Estimate only. Idle payroll assumed at $28/hr fully loaded. Adjust the inputs to match
            your operation — we&apos;ll build a real number with you on the call.
          </div>
        </Reveal>
      </div>
    </section>
  )
}
