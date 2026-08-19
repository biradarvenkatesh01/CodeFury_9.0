import { motion } from 'framer-motion';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  link?: {
    text: string;
    url: string;
  };
  note?: string;
  badge?: string;
  colorTheme: string;
}

const TIMELINE_EVENTS: TimelineEvent[] = [
  
  {
    date: 'July 28th, 2026',
    title: 'Registration Opens',
    description: 'Kickstart your CodeFury journey, form your dream team and register!',
    colorTheme: 'green',
  },
 {
    date: '12th August 2026',
    title: 'Pre-CodeFury Workshop',
    description: 'Offline hands-on workshop to get you hackathon-ready.',
    link: {
      text: 'Register for Workshop',
      url: 'https://bit.ly/Pre_CodeFuryWorkshop',
    },
    colorTheme: 'yellow',
  },
  {
    date: 'Surprise Event',
    title: 'Mini Game and Mini Challenge',
    description: 'Participate in our surprise mini game & challenge to win exciting discounts on registration fees!',
    colorTheme: 'cyan',
  },
  {
    date: 'August 19, 2026',
    title: 'Registration Closes',
    description: 'Final call! Register before the portal closes.',
    note: '* Registrations extended to August 20th, 2026, 4:00 PM',
    colorTheme: 'rose',
  },
  {
    date: 'August 21-22, 2026',
    title: 'CodeFury Round 1',
    description: 'The 24\u2011hour coding showdown begins.',
    badge: '[21st 6pm to 22nd 6pm]',
    colorTheme: 'violet',
  },
  {
    date: 'August 23, 2026',
    title: 'CodeFury Round 2',
    description: 'Top teams present their innovations to the jury.',
    badge: '[23rd 10am onwards]',
    colorTheme: 'orange',
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="timeline-section-wrap">
      <div className="section-container">
        <motion.div
          className="section-header-block"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="section-heading">Event <span className="timeline-heading-accent">Timeline</span></h2>
          <div className="heading-underline" />
        </motion.div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          {TIMELINE_EVENTS.map((event, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={event.title}
                className={`timeline-item ${isLeft ? 'left' : 'right'} theme-${event.colorTheme}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.05 }}
              >
                <div className="timeline-dot"></div>
                <div className="card-3d timeline-card-3d">
                  <div className="card-3d-top"></div>
                  <div className="card-3d-right"></div>
                  <div className="card-3d-front">
                    <span className="timeline-time">{event.date}</span>
                    <h3 className="timeline-title" style={{ fontFamily: 'var(--font-heading)' }}>
                      {event.title}
                    </h3>
                    <p className="timeline-desc">
                      {event.description}
                    </p>
                    
                    {event.link && (
                      <div style={{ marginTop: '16px' }}>
                        <a
                          href={event.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-register-now"
                          aria-label={event.link.text}
                        >
                          {event.link.text}
                        </a>
                      </div>
                    )}

                    {event.note && (
                      <span style={{ fontSize: '11px', color: 'var(--color-accent)', display: 'block', marginTop: '8px', fontWeight: 'bold', fontFamily: 'var(--font-mono)' }}>
                        {event.note}
                      </span>
                    )}

                    {event.badge && (
                      <code style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-secondary)', display: 'block', marginTop: '6px', fontWeight: 'bold' }}>
                        {event.badge}
                      </code>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
