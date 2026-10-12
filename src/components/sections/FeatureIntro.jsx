import dotPattern from '../../assets/images/dot-pattern.png'
import { fadeLeft, fadeRight } from '../../utils/animations'
import { CheckIcon } from '../icons'
import ProgressRing from '../ui/ProgressRing'
import Reveal from '../ui/Reveal'

export default function FeatureIntro({ tag, title, desc, stats, checklist, mainImage, overlayImage }) {
  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal variants={fadeLeft} className="relative mx-auto max-w-[420px] w-full">
          <span className="absolute -top-8 -left-8 w-9 h-9 rounded-full border border-primary/40 pointer-events-none hidden sm:block" />
          <span className="absolute -top-2 -left-2 w-1.5 h-1.5 rounded-full bg-primary pointer-events-none hidden sm:block" />
          <span className="absolute top-[22%] -left-6 h-28 w-[3px] bg-primary rounded-full hidden sm:block" />
          <div className="relative">
            <img
              src={dotPattern}
              alt=""
              aria-hidden="true"
              className="absolute top-6 left-6 w-full h-full object-contain -z-10 select-none pointer-events-none"
            />
            <img src={mainImage} alt={title} className="relative w-full aspect-[437/530] object-cover" />
            {overlayImage && (
              <img
                src={overlayImage}
                alt=""
                aria-hidden="true"
                className="absolute -bottom-8 -right-8 sm:-right-10 w-[58%] z-20 drop-shadow-2xl select-none pointer-events-none"
              />
            )}
          </div>
        </Reveal>

        <Reveal variants={fadeRight}>
          <span className="text-primary font-semibold uppercase tracking-[2px] text-sm mb-3 block underline underline-offset-4 decoration-2">
            {tag}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-[38px] font-heading font-semibold text-heading leading-tight mb-5">
            {title}
          </h2>
          <p className="text-body leading-relaxed mb-8">{desc}</p>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {stats.map((stat, i) => (
              <ProgressRing key={stat.label} value={stat.value} label={stat.label} index={i} />
            ))}
          </div>
          <ul className="space-y-3">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-3 text-heading font-medium">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <CheckIcon size={14} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
