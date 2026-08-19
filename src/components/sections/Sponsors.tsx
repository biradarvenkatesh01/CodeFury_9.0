import { motion } from 'framer-motion';
import unstopLogo from '../../assets/unstop.png';

export function Sponsors() {
  return (
    <section id="sponsors" className="sponsors-outer-wrap-new">
      {/* Marquee bar at top */}
      <div className="marquee-bar-container">
        <div className="marquee-bar sponsors-marquee-bar">
          <div className="marquee-track">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={`a-${i}`}>OUR SPONSORS &amp; PARTNERS &nbsp;✦&nbsp; </span>
            ))}
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={`b-${i}`}>OUR SPONSORS &amp; PARTNERS &nbsp;✦&nbsp; </span>
            ))}
          </div>
        </div>
      </div>

      <div className="section-container">
        <motion.div
          className="section-header-block"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="section-heading sponsors-heading-dark">
            Our <span className="sponsors-heading-accent">Sponsors</span>
          </h2>
          <div className="heading-underline" />
        </motion.div>

        {/* ── Platform Partner ── */}
        <motion.div
          className="sponsor-tier-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="sponsor-tier-label platform-tier-label">
            PLATFORM PARTNER
          </div>
          <div className="platform-sponsor-row">
            <div className="card-3d platform-card-wrap">
              <div className="card-3d-top" style={{ backgroundColor: '#3b82f6' }} />
              <div className="card-3d-right" style={{ backgroundColor: '#1d4ed8' }} />
              <div className="card-3d-front platform-card-front">
                <a
                  href="https://unstop.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="platform-logo-link"
                >
                  <img
                    src={unstopLogo}
                    alt="Unstop Logo"
                    className="platform-logo-img"
                  />
                </a>
                <span className="platform-sponsor-name">UNSTOP</span>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="sponsor-tier-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="sponsor-tier-label platform-tier-label">
            DOMAIN PARTNER
          </div>
          <div className="platform-sponsor-row">
            <div className="card-3d platform-card-wrap">
              <div className="card-3d-top" style={{ backgroundColor: '#b57fe8ff' }} />
              <div className="card-3d-right" style={{ backgroundColor: '#b57fe8ff' }} />
              <div className="card-3d-front platform-card-front">
                <a
                  href="https://gen.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="platform-logo-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 85 49.5"
                    className="platform-logo-svg"
                    style={{ height: '60px', width: 'auto', fill: '#3e5793ff' }}
                  >
                    <path d="M84.7 12.1C84.7 5.6 79.5 0 73 0h-1H61.2 21.1c-3.2 0-6.2 1.3-8.5 3.5C10.3 5.8 9.1 8.8 9.1 12c0 1.3 0.2 2.6 0.6 3.8 -2.3 0.5-4.4 1.6-6 3.2C1.3 21.3 0 24.6 0 28.1c0 3.6 1.3 6.8 3.7 9.2 1.6 1.5 4.5 3.4 8.8 3.4h8.3c2.2 0 4.4-0.6 6.2-1.7 0.3 2.8 1.6 5.4 3.6 7.3 2.2 2.1 5.2 3.3 8.3 3.3 4.5 0 8.6-1.6 12-4.6 1.8-1.6 3.3-3.5 4.6-5.8 1.5 0.7 3.2 1.1 5 1.1h1.2 11.5c6.4 0 11.7-5.2 11.7-11.7L84.7 12.1zM12.6 31.3c-1.9 0-3-1-3-3 0-2.1 1.1-3.1 3-3.1 1.9 0 3 1 3 3.1C15.6 30.3 14.5 31.3 12.6 31.3zM33.9 31.3c-0.7 0-1.5-0.3-2-1 -1.4-2-4.5-6.3-4.5-6.3s-3.1 4.4-4.5 6.3c-0.5 0.6-1.3 1-2 1 -1.4 0-2.5-1.1-2.5-2.5 0-0.7 0.2-1.1 0.5-1.5l5.5-7 -5.4-6.6c-0.4-0.5-0.5-1-0.5-1.5 0-1.4 1.1-2.5 2.5-2.5 0.8 0 1.5 0.4 2 1l4.3 5.9 4.3-5.9c0.5-0.6 1.2-1 2-1 1.4 0 2.5 1.1 2.5 2.5 0 0.6-0.1 1-0.5 1.5l-5.4 6.6 5.5 7c0.3 0.4 0.5 0.8 0.5 1.5C36.3 30.2 35.2 31.3 33.9 31.3zM57.1 13.1l-8.5 19.3c-2 4.5-4.9 7.7-9.5 7.7 -1.3 0-2.4-1-2.4-2.3 0-1.3 1.1-2.3 2.4-2.3 2.9 0 4.3-2.3 5.8-6.1l-7.1-16.3c-0.1-0.2-0.2-0.6-0.2-1 0-1.4 1.1-2.5 2.5-2.5 1.4 0 2.1 1 2.3 1.6l5 12.7 5-12.7c0.2-0.6 0.9-1.6 2.3-1.6 1.4 0 2.5 1.1 2.5 2.5C57.2 12.6 57.2 12.9 57.1 13.1zM73.3 30.9H61.8h-1.2c-1.1 0-2.1-1-2.1-2.1 0-0.6 0.2-1 0.5-1.4l5.5-7.3 0 0 3.5-4.6 0.9-1.2h0 -7.7c-1.1 0-2.1-0.9-2.1-2.1 0-1.1 0.9-2.1 2.1-2.1H72h1c1.2 0 2.2 1 2.2 2.2 0 0.6-0.2 1.1-0.5 1.4l-9.7 13h0 8.3c1.1 0 2.1 1 2.1 2.1C75.4 29.9 74.5 30.9 73.3 30.9z" />
                  </svg>
                </a>
                <span className="platform-sponsor-name">.XYZ</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Community Partner ── */}
        <motion.div
          className="sponsor-tier-block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="sponsor-tier-label platform-tier-label">
            COMMUNITY PARTNER
          </div>
          <div className="platform-sponsor-row">
            <div className="card-3d platform-card-wrap">
              <div className="card-3d-top" style={{ backgroundColor: '#534df8' }} />
              <div className="card-3d-right" style={{ backgroundColor: '#3b34d9' }} />
              <div className="card-3d-front platform-card-front">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="platform-logo-link"
                >
                  <svg
                    width="438"
                    height="512"
                    viewBox="0 0 438 512"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="platform-logo-svg"
                    style={{ height: '60px', width: 'auto' }}
                  >
                    <path
                      d="M437.714 204.8C437.714 91.6921 346.021 0 232.914 0V307.2C232.914 420.308 324.606 512 437.714 512V204.8Z"
                      fill="#534df8"
                    />
                    <path
                      d="M0.689448 250.517C-5.4058 168.841 26.2894 5.12295 201.832 3.66009C214.023 82.2887 190.861 241.74 0.689448 250.517Z"
                      fill="#534df8"
                    />
                  </svg>
                </a>
                <span className="platform-sponsor-name">NAVAN.AI</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Sponsors;
