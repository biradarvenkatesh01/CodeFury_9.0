import { motion } from 'framer-motion';
import artparkLogo from '../../assets/ARTPARK primary logo.png';
import unstopLogo from '../../assets/unstop.png';
import bngLogo from '../../assets/bng.png';
import wieLogoPng from '../../assets/wielogonew.png';

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
      </div>
    </section>
  );
}

export default Sponsors;
