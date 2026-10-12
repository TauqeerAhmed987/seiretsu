import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import altafiberLogo from '../../assets/images/altafiber.png'
import attLogo from '../../assets/images/att.png'
import brightspeedLogo from '../../assets/images/brightspeed.png'
import wowLogo from '../../assets/images/wow.png'
import {
  availabilityNotes,
  availabilityStatus,
  providers,
  sampleZips,
} from '../../data/business'
import { ErrorIcon } from '../icons'
import Reveal from '../ui/Reveal'
import SectionTitle from '../ui/SectionTitle'

const providerLogos = { att: attLogo, alta: altafiberLogo, bspd: brightspeedLogo, wow: wowLogo }
const sampleZipCodes = Object.keys(sampleZips).slice(0, 8)
const STATUS_CYCLE = ['fiber', 'build', 'alt', 'none', 'fiber', 'alt']
const ZIP_PATTERN = /\b\d{5}\b/

// Deterministic placeholder result for ZIPs outside the sample list.
function estimateForZip(zip) {
  let hash = 0
  for (let i = 0; i < zip.length; i++) hash = (hash * 31 + zip.charCodeAt(i)) >>> 0
  const statusAt = (slot) => STATUS_CYCLE[(hash >> (slot * 3)) % 6]
  return { label: 'ZIP ' + zip, att: statusAt(0), alta: statusAt(1), bspd: statusAt(2), wow: statusAt(3) }
}

// Simulated lookup; there is no carrier API behind this yet.
async function lookupAvailability(query) {
  await new Promise((resolve) => setTimeout(resolve, 900))
  const zip = (query.match(ZIP_PATTERN) || [])[0] || ''
  if (sampleZips[zip]) return { ...sampleZips[zip], zip }
  if (zip) return { ...estimateForZip(zip), zip }
  return { label: '', zip, att: 'check', alta: 'check', bspd: 'check', wow: 'check' }
}

function validateQuery(query) {
  if (!query) return 'Enter a ZIP code or street address.'
  return ZIP_PATTERN.test(query) ? '' : 'Include a 5-digit ZIP code so we can locate you.'
}

const pillClass = (active) =>
  `text-[11px] font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full border transition-colors ${active ? 'bg-dark text-white border-dark' : 'bg-[#F7F7FA] text-body border-black/10 hover:border-dark/30'}`

const segmentClass = (active) =>
  `px-4 py-2 text-[11px] font-semibold uppercase tracking-widest transition-colors ${active ? 'bg-dark text-white' : 'bg-[#F7F7FA] text-body hover:bg-black/5'}`

export default function AvailabilityChecker() {
  const [audience, setAudience] = useState('res')
  const [filter, setFilter] = useState('all')
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [notifyEmail, setNotifyEmail] = useState('')
  const [notified, setNotified] = useState(false)

  const runCheck = async (value) => {
    const trimmed = (value ?? query).trim()
    const validationError = validateQuery(trimmed)
    if (validationError) {
      setError(validationError)
      return
    }
    setError('')
    setLoading(true)
    setNotified(false)
    setNotifyEmail('')
    try {
      const data = await lookupAvailability(trimmed)
      setResult({ ...data, isZip: /^\d{5}$/.test(trimmed), query: trimmed })
    } catch {
      setError("That check didn't go through. Try again, or call us and we'll look it up manually.")
    } finally {
      setLoading(false)
    }
  }

  const rows = useMemo(
    () =>
      result
        ? providers
            .map((provider) => ({ provider, status: result[provider.id] || 'check' }))
            .sort((a, b) => availabilityStatus[a.status].rank - availabilityStatus[b.status].rank)
        : [],
    [result],
  )

  const fiberCount = rows.filter((row) => row.status === 'fiber').length
  const serviceCount = rows.filter((row) => row.status === 'fiber' || row.status === 'alt').length
  const visibleRows =
    filter === 'fiber' ? rows.filter((row) => row.status === 'fiber' || row.status === 'build') : rows
  const showNotifyForm = result && fiberCount === 0

  const trySample = (zip) => {
    setQuery(zip)
    runCheck(zip)
  }

  const resultHeading = fiberCount
    ? `${fiberCount} fiber ${fiberCount === 1 ? 'option' : 'options'} here`
    : serviceCount
      ? `${serviceCount} ${serviceCount === 1 ? 'option' : 'options'} here`
      : 'Limited service at this location'

  return (
    <section className="pt-20 md:pt-28 pb-8" id="check-address">
      <div className="container mx-auto px-4">
        <SectionTitle
          tag="Availability Locator"
          title="Check Fiber At Your Address."
          desc="One search across every brand we carry. ZIP gives you a fast read on the area; a full street address gives you the answer that actually counts, because fiber is built block by block."
          className="mb-12"
        />

        <Reveal className="bg-white border border-black/5 rounded-2xl shadow-card overflow-hidden max-w-4xl mx-auto">
          <div className="px-6 py-6">
            <div className="inline-flex border border-black/10 rounded-md overflow-hidden mb-5">
              <button type="button" onClick={() => setAudience('res')} className={segmentClass(audience === 'res')}>
                Residential
              </button>
              <button
                type="button"
                onClick={() => setAudience('biz')}
                className={`${segmentClass(audience === 'biz')} border-l border-black/10`}
              >
                Business
              </button>
            </div>

            <label
              htmlFor="fl-q"
              className="block text-[11px] font-semibold uppercase tracking-widest text-body mb-2"
            >
              ZIP code or full street address
            </label>
            <div className="flex flex-col sm:flex-row gap-2.5">
              <input
                id="fl-q"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && runCheck()}
                placeholder="45202 — or — 1420 Maple Ridge Dr, Cincinnati OH"
                className="flex-1 min-w-0 text-sm px-4 py-3.5 rounded-md border border-black/10 bg-[#F7F7FA] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white font-mono"
              />
              <button
                type="button"
                onClick={() => runCheck()}
                disabled={loading}
                className="btn-primary shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Checking…' : 'Check availability'}
              </button>
            </div>
            <p className="text-xs text-body mt-2.5">
              We use your address to check availability. That&apos;s it.
            </p>
            {error && (
              <p className="flex items-center gap-1.5 text-xs text-red-600 mt-2.5">
                <ErrorIcon /> {error}
              </p>
            )}

            <div className="mt-5 pt-5 border-t border-black/5">
              <span className="text-[10.5px] font-semibold uppercase tracking-widest text-body">
                Try a sample ZIP
              </span>
              <div className="flex flex-wrap gap-2 mt-2.5">
                {sampleZipCodes.map((zip) => (
                  <button
                    key={zip}
                    type="button"
                    onClick={() => trySample(zip)}
                    className="text-xs font-mono px-3 py-1.5 rounded-full border border-black/10 bg-[#F7F7FA] text-body hover:border-primary hover:text-primary transition-colors"
                  >
                    {zip} · {sampleZips[zip].label}
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="border-t border-black/5 mt-6 pt-5"
                >
                  <div className="flex flex-wrap items-baseline gap-2.5 mb-1.5">
                    <h2 className="text-xl font-heading font-semibold text-heading">{resultHeading}</h2>
                    <span className="font-mono text-xs text-body">
                      {(result.label ? result.label + ' · ' : '') + result.query}
                    </span>
                  </div>
                  <p className="text-sm text-body mb-4">
                    {result.isZip
                      ? 'ZIP-level result. Fiber is built block by block, so enter your full street address to confirm your building.'
                      : 'Address-level result. We confirm with the carrier before any order is placed.'}
                  </p>
                  <div className="flex gap-2 mb-2">
                    <button type="button" onClick={() => setFilter('all')} className={pillClass(filter === 'all')}>
                      All brands
                    </button>
                    <button
                      type="button"
                      onClick={() => setFilter('fiber')}
                      className={pillClass(filter === 'fiber')}
                    >
                      Fiber only
                    </button>
                  </div>

                  <ul className="mt-3">
                    {visibleRows.length === 0 ? (
                      <li className="py-5 text-sm text-body">
                        No fiber options at this location yet. Switch to &quot;All brands&quot; to
                        see what else is available.
                      </li>
                    ) : (
                      visibleRows.map(({ provider, status }) => {
                        const style = availabilityStatus[status]
                        const blurb = audience === 'biz' ? provider.bizBlurb : provider.resBlurb
                        const note =
                          status === 'none'
                            ? availabilityNotes.none
                            : `${blurb} ${availabilityNotes[status]}`
                        return (
                          <li
                            key={provider.id}
                            className="grid sm:grid-cols-[120px_1fr_auto] gap-4 sm:gap-5 items-center py-5 border-b border-black/5 last:border-b-0"
                          >
                            <span className="w-[104px] h-[48px] flex items-center justify-center border border-black/5 rounded-lg bg-white p-2.5">
                              <img
                                src={providerLogos[provider.id]}
                                alt={provider.name}
                                className="max-w-full max-h-full object-contain"
                              />
                            </span>
                            <div>
                              <span
                                className={`inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-1.5 ${style.badge}`}
                              >
                                <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                                {style.text}
                              </span>
                              <h3 className="font-heading font-semibold text-heading">
                                {status === 'fiber' ? provider.fiberLabel : provider.name}
                              </h3>
                              <p className="text-sm text-body mt-1 leading-relaxed">{note}</p>
                            </div>
                            <div className="sm:text-right">
                              {style.cta && (
                                <Link
                                  to="/contact"
                                  className={`inline-block text-xs font-semibold px-4 py-2 rounded-md transition-colors ${status === 'fiber' ? 'bg-primary text-white hover:bg-dark' : 'border border-black/15 text-heading hover:bg-black/5'}`}
                                >
                                  {style.cta}
                                </Link>
                              )}
                            </div>
                          </li>
                        )
                      })
                    )}
                  </ul>

                  {showNotifyForm && (
                    <div className="mt-5 p-5 bg-[#F7F7FA] rounded-xl">
                      {notified ? (
                        <>
                          <h3 className="font-heading font-semibold text-heading mb-1.5">
                            You&apos;re on the list.
                          </h3>
                          <p className="text-sm text-body">
                            We&apos;ll email {notifyEmail} the day something new goes live at this
                            address.
                          </p>
                        </>
                      ) : (
                        <>
                          <h3 className="font-heading font-semibold text-heading mb-1.5">
                            {rows.some((row) => row.status === 'build')
                              ? "Fiber is being built near you. Want the heads-up when it's live?"
                              : 'Want a heads-up the day fiber reaches you?'}
                          </h3>
                          <p className="text-sm text-body">
                            Networks expand constantly. We&apos;ll email you the moment something
                            new is live at this address — and nothing else.
                          </p>
                          <form
                            onSubmit={(e) => {
                              e.preventDefault()
                              if (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(notifyEmail)) setNotified(true)
                            }}
                            className="flex flex-col sm:flex-row gap-2.5 mt-3.5"
                          >
                            <label htmlFor="fl-email" className="sr-only">
                              Email address
                            </label>
                            <input
                              id="fl-email"
                              type="email"
                              value={notifyEmail}
                              onChange={(e) => setNotifyEmail(e.target.value)}
                              placeholder="you@example.com"
                              className="flex-1 min-w-0 text-sm px-4 py-3 rounded-md border border-black/10 bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                            />
                            <button type="submit" className="btn-primary shrink-0">
                              Notify Me
                            </button>
                          </form>
                        </>
                      )}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>

        <Reveal className="max-w-4xl mx-auto mt-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-body">
            Authorized Dealer For
          </span>
          <div className="flex flex-wrap justify-center gap-4 mt-5">
            {providers.map((provider) => (
              <span
                key={provider.id}
                className="w-[150px] h-[64px] flex items-center justify-center rounded-xl border border-black/5 bg-white shadow-card p-4"
              >
                <img
                  src={providerLogos[provider.id]}
                  alt={provider.name}
                  className="max-w-full max-h-full object-contain"
                />
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
