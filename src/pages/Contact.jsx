import breadcrumbImage from '../assets/images/breadcrumb.webp'
import ContactForm from '../components/contact/ContactForm'
import ContactInfo from '../components/contact/ContactInfo'
import PageTransition from '../components/layout/PageTransition'
import PageBanner from '../components/sections/PageBanner'

export default function Contact() {
  return (
    <PageTransition>
      <PageBanner title="Contact Us" breadcrumb="Contact Us" image={breadcrumbImage} />
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
      <section className="h-[350px] md:h-[450px] bg-[#E5E5E5]">
        <iframe
          title="Seiretsu Location"
          src="https://maps.google.com/maps?q=Groveland%2C%20FL%2034736&t=&z=12&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </PageTransition>
  )
}
