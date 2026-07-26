import { motion } from 'framer-motion';

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function MailIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

interface ContactPerson {
  role: string;
  name: string;
  phone: string;
  email: string;
  whatsapp: string;
  colorTheme: { top: string; right: string; front: string };
}

const CONTACTS: ContactPerson[] = [
  {
    role: 'Chairperson, Computer Society, IEEE UVCE',
    name: 'Yashaswini C Rao',
    phone: '+91 63606 75258',
    email: 'yashaswinirao12@gmail.com',
    whatsapp: 'https://wa.me/916360675258',
    colorTheme: { top: '#3b82f6', right: '#1d4ed8', front: '#eff6ff' },
  },
  {
    role: 'Vice Chairperson, Computer Society, IEEE UVCE',
    name: 'Nikhil Hegde',
    phone: '+91 84319 27108',
    email: 'nikhilhegde303@gmail.com',
    whatsapp: 'https://wa.me/918431927108',
    colorTheme: { top: '#8b5cf6', right: '#6d28d9', front: '#f5f3ff' },
  },
];

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/ieee.uvce.cs/',
    icon: <InstagramIcon size={18} />,
    color: '#e1306c',
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/Ieee.uvce.cs',
    icon: <FacebookIcon size={18} />,
    color: '#1877f2',
  },
  {
    label: 'Email Us',
    url: 'mailto:cs.uvce.ieee@gmail.com',
    icon: <MailIcon size={18} />,
    color: '#10b981',
  },
];

export function Contact() {
  return (
    <section id="contact" className="contact-outer-wrap-new">
      <div className="section-container">
        <motion.div
          className="section-header-block"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="section-heading">
            Get In <span className="contact-heading-accent">Touch</span>
          </h2>
          <div className="heading-underline" />
          <p className="contact-subtitle">Have questions? Reach out to our team!</p>
        </motion.div>

        {/* Contact Person Cards */}
        <div className="contact-persons-grid">
          {CONTACTS.map((person, i) => (
            <motion.div
              key={person.name}
              className="card-3d contact-card-wrap"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            >
              <div className="card-3d-top" style={{ backgroundColor: person.colorTheme.top }} />
              <div className="card-3d-right" style={{ backgroundColor: person.colorTheme.right }} />
              <div className="card-3d-front contact-card-front" style={{ backgroundColor: person.colorTheme.front }}>
                {/* Role badge */}
                <div
                  className="contact-role-badge"
                  style={{ borderColor: person.colorTheme.top, color: person.colorTheme.right }}
                >
                  {person.role}
                </div>

                {/* Name */}
                <h3 className="contact-person-name">{person.name}</h3>

                {/* Detail rows */}
                <div className="contact-detail-list">
                  <a href={`tel:${person.phone.replace(/\s/g, '')}`} className="contact-detail-row">
                    <span className="contact-detail-icon"><PhoneIcon size={16} /></span>
                    <span className="contact-detail-value">{person.phone}</span>
                  </a>
                  <a href={`mailto:${person.email}`} className="contact-detail-row">
                    <span className="contact-detail-icon"><MailIcon size={16} /></span>
                    <span className="contact-detail-value">{person.email}</span>
                  </a>
                  <a
                    href={person.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-detail-row contact-whatsapp"
                    style={{ borderColor: person.colorTheme.top }}
                  >
                    <span className="contact-detail-icon"><WhatsAppIcon size={16} /></span>
                    <span className="contact-detail-value">WhatsApp Direct</span>
                    <span className="contact-whatsapp-arrow">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social links */}
        <motion.div
          className="contact-social-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="contact-social-heading">Follow &amp; connect with us</p>
          <div className="contact-social-row">
            {SOCIAL_LINKS.map(link => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-pill"
                style={{ '--pill-color': link.color } as React.CSSProperties}
              >
                <span className="contact-social-icon">{link.icon}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;

