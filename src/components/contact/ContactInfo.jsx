import contactPhoto from '../../assets/images/contact-photo.jpg'
import { contactInfo, socialLinks } from '../../data/site'
import { fadeLeft } from '../../utils/animations'
import { MailIcon, MapPinIcon, PhoneIcon, ShareIcon } from '../icons'
import Reveal from '../ui/Reveal'
import SocialIcon from '../ui/SocialIcon'

function InfoItem({ icon: Icon, children }) {
  return (
    <div className="flex items-start gap-3">
      <span className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <Icon />
      </span>
      <div>{children}</div>
    </div>
  )
}

export default function ContactInfo() {
  return (
    <Reveal variants={fadeLeft}>
      <span className="text-primary font-semibold uppercase tracking-[2px] text-sm mb-3 block">
        Get In Touch
      </span>
      <h2 className="text-3xl md:text-[42px] font-heading font-semibold text-heading leading-tight mb-4">
        Contact Us
      </h2>
      <p className="text-body leading-relaxed mb-8 max-w-md">
        Have a question about eSIM activation, fiber installation, or your bill? Send us a message
        and our support team will get back to you shortly.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        <InfoItem icon={MapPinIcon}>
          <h6 className="font-heading font-semibold text-heading">Location</h6>
          <span className="text-sm text-body">{contactInfo.address}</span>
        </InfoItem>
        <InfoItem icon={PhoneIcon}>
          <h6 className="font-heading font-semibold text-heading">Phone</h6>
          <a href={`tel:${contactInfo.phone}`} className="text-sm text-body hover:text-primary">
            {contactInfo.phone}
          </a>
        </InfoItem>
        <InfoItem icon={MailIcon}>
          <h6 className="font-heading font-semibold text-heading">Email</h6>
          <a href={`mailto:${contactInfo.email}`} className="text-sm text-body hover:text-primary">
            {contactInfo.email}
          </a>
        </InfoItem>
        <InfoItem icon={ShareIcon}>
          <h6 className="font-heading font-semibold text-heading mb-1">Social</h6>
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.icon}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              >
                <SocialIcon name={social.icon} size={12} />
              </a>
            ))}
          </div>
        </InfoItem>
      </div>

      <div className="rounded-xl overflow-hidden aspect-[550/195]">
        <img
          src={contactPhoto}
          alt="Our support team in a meeting"
          className="w-full h-full object-cover"
        />
      </div>
    </Reveal>
  )
}
