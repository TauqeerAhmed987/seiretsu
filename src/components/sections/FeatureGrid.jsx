import FeatureCard from '../ui/FeatureCard'
import SectionTitle from '../ui/SectionTitle'

export default function FeatureGrid({ title, items, gridClassName = 'sm:grid-cols-2 lg:grid-cols-4' }) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title={title} className="mb-14" />
        <div className={`grid gap-6 ${gridClassName}`}>
          {items.map((item, i) => (
            <FeatureCard key={item.title} {...item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
