import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ieeeLogo from '../../assets/ieee-logo.png';
import csLogo from '../../assets/cs-logo.png';

interface HeroProps {
  onExplore?: (href: string) => void;
  isReveal?: boolean;
}

export function Hero({ isReveal = false }: HeroProps) {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 700);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  function calculateTimeLeft() {
    const target = new Date('2026-08-21T00:00:00+05:30').getTime();
    const now = new Date().getTime();
    const difference = target - now;

    let times = {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
      isLive: false,
    };

    if (difference > 0) {
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      times = {
        days: d < 10 ? `0${d}` : `${d}`,
        hours: h < 10 ? `0${h}` : `${h}`,
        minutes: m < 10 ? `0${m}` : `${m}`,
        seconds: s < 10 ? `0${s}` : `${s}`,
        isLive: false,
      };
    } else {
      times.isLive = true;
    }

    return times;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const inset = isMobile ? 16 : 24;
  const size = 18; // Size of bracket mark

  const bracketTransition = {
    duration: 1.25,
    ease: [0.16, 1, 0.3, 1], // easeOutExpo
  };

  const topLeftVariants = {
    hidden: { left: 'calc(50% - 21px)', top: 'calc(50% - 21px)', opacity: 0 },
    visible: { left: `${inset}px`, top: `${inset}px`, opacity: 1 }
  };

  const topRightVariants = {
    hidden: { left: 'calc(50% + 3px)', top: 'calc(50% - 21px)', opacity: 0 },
    visible: { left: `calc(100% - ${inset}px - ${size}px)`, top: `${inset}px`, opacity: 1 }
  };

  const bottomLeftVariants = {
    hidden: { left: 'calc(50% - 21px)', top: 'calc(50% + 3px)', opacity: 0 },
    visible: { left: `${inset}px`, top: `calc(100% - ${inset}px - ${size}px)`, opacity: 1 }
  };

  const bottomRightVariants = {
    hidden: { left: 'calc(50% + 3px)', top: 'calc(50% + 3px)', opacity: 0 },
    visible: { left: `calc(100% - ${inset}px - ${size}px)`, top: `calc(100% - ${inset}px - ${size}px)`, opacity: 1 }
  };

  const contentMaskVariants = {
    hidden: {
      clipPath: 'inset(calc(50% - 21px) calc(50% - 21px) calc(50% - 21px) calc(50% - 21px) rounded 4px)',
      opacity: 0
    },
    visible: {
      clipPath: 'inset(0% 0% 0% 0% rounded 0px)',
      opacity: 1,
      transition: {
        duration: 1.25,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.08,
        delayChildren: 0.55
      }
    }
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.65, ease: "easeOut" }
    }
  };

  return (
    <section
      id="hero"
      className="section-hero"
    >
      {/* First Fold Container (White Hero + Marquee Bar) */}
      <div className="hero-first-fold">
        {/* Top Part: White Textured Background */}
        <div className={`hero-top-section ${isReveal ? 'revealed' : ''}`}>
          {/* Corner brackets */}
          <motion.div
            className="hero-corner-mark top-left"
            style={{ borderRight: 'none', borderBottom: 'none' }}
            variants={topLeftVariants}
            initial="hidden"
            animate={isReveal ? "visible" : "hidden"}
            transition={bracketTransition}
            aria-hidden="true"
          />
          <motion.div
            className="hero-corner-mark top-right"
            style={{ borderLeft: 'none', borderBottom: 'none' }}
            variants={topRightVariants}
            initial="hidden"
            animate={isReveal ? "visible" : "hidden"}
            transition={bracketTransition}
            aria-hidden="true"
          />
          <motion.div
            className="hero-corner-mark bottom-left"
            style={{ borderRight: 'none', borderTop: 'none' }}
            variants={bottomLeftVariants}
            initial="hidden"
            animate={isReveal ? "visible" : "hidden"}
            transition={bracketTransition}
            aria-hidden="true"
          />
          <motion.div
            className="hero-corner-mark bottom-right"
            style={{ borderLeft: 'none', borderTop: 'none' }}
            variants={bottomRightVariants}
            initial="hidden"
            animate={isReveal ? "visible" : "hidden"}
            transition={bracketTransition}
            aria-hidden="true"
          />

          <motion.div
            className="hero-content"
            variants={contentMaskVariants}
            initial="hidden"
            animate={isReveal ? "visible" : "hidden"}
          >
            {/* Presenting Org */}
            <motion.div className="hero-org" variants={textItemVariants}>IEEE UVCE Computer Society Presents</motion.div>

            {/* Event Title */}
            <motion.h1 className="hero-title" variants={textItemVariants}>CodeFury 9.0</motion.h1>

            {/* Tagline */}
            <motion.div className="hero-tagline" variants={textItemVariants}>Esc + the + Ordinary</motion.div>

            {/* Category */}
            <motion.div className="hero-category" variants={textItemVariants}>Annual National - Level Hackathon</motion.div>

            {/* Event Dates */}
            <motion.div className="hero-dates" variants={textItemVariants}>
              <span>21st, 22nd &amp; 23rd August 2026</span>
            </motion.div>

            {/* Countdown Timer */}
            <motion.div className="countdown-container" variants={textItemVariants}>
              <div className="countdown-timer-grid">
                <div className="countdown-card">
                  <span className="countdown-val">{timeLeft.days}</span>
                  <span className="countdown-label">Days</span>
                </div>
                <div className="countdown-card">
                  <span className="countdown-val">{timeLeft.hours}</span>
                  <span className="countdown-label">Hours</span>
                </div>
                <div className="countdown-card">
                  <span className="countdown-val">{timeLeft.minutes}</span>
                  <span className="countdown-label">Mins</span>
                </div>
                <div className="countdown-card">
                  <span className="countdown-val">{timeLeft.seconds}</span>
                  <span className="countdown-label">Secs</span>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div className="hero-actions" variants={textItemVariants}>
              <a href="#register" className="btn-register-3d" aria-label="Register Now">
                <div className="btn-register-3d-wrapper">
                  <svg
                    width="160"
                    height="54"
                    viewBox="0 0 160 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Top Face (Light Blue) */}
                    <polygon
                      points="2,12 14,2 158,2 146,12"
                      fill="#3b82f6"
                      stroke="#000000"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                    />
                    
                    {/* Right Face (Medium Blue) */}
                    <polygon
                      points="146,12 158,2 158,42 146,52"
                      fill="#1d4ed8"
                      stroke="#000000"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                    />
                    
                    {/* Front Face (White) */}
                    <polygon
                      points="2,12 146,12 146,52 2,52"
                      fill="#ffffff"
                      stroke="#000000"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                    />

                    {/* Text centered on the front face */}
                    <text
                      x="74"
                      y="32"
                      fill="#000000"
                      fontSize="13"
                      fontWeight="bold"
                      textAnchor="middle"
                      fontFamily="var(--font-mono)"
                      dominantBaseline="central"
                    >
                      REGISTER NOW
                    </text>
                  </svg>
                </div>
              </a>
            </motion.div>
          </motion.div>
      </div>

      {/* Infinite Marquee Bar located exactly at the boundary */}
      <div className="marquee-bar-container">
        <div className="marquee-bar">
          <div className="marquee-track">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={`a-${i}`}>REGISTRATIONS OPEN! &nbsp;✦&nbsp; </span>
            ))}
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={`b-${i}`}>REGISTRATIONS OPEN! &nbsp;✦&nbsp; </span>
            ))}
          </div>
        </div>
      </div>
      </div>

      {/* Bottom Part: Dark Starry Background */}
      <div className="hero-bottom-section">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={isReveal ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        >
          {/* Co-Presenters Logo Row */}
          <div className="presenters-block">
            {/* Mobile-only title (hidden on PC) */}
            <div className="presenters-title mobile-only">Presented By</div>

            <div className="presenters-row">
              <a
                href="https://www.instagram.com/ieeeuvce"
                target="_blank"
                rel="noopener noreferrer"
                className="presenter-logo-link"
                title="IEEE UVCE Instagram"
              >
                <img src={ieeeLogo} alt="IEEE UVCE Logo" className="presenter-logo-img" />
              </a>

              {/* Center column on PC (hidden on Mobile) */}
              <div className="presenters-center-col pc-only">
                <div className="presenters-title">Presented By</div>
                <span className="presenters-separator"></span>
              </div>

              {/* Mobile-only separator (hidden on PC) */}
              <span className="presenters-separator mobile-only"></span>

              <a
                href="https://www.instagram.com/ieee.uvce.cs"
                target="_blank"
                rel="noopener noreferrer"
                className="presenter-logo-link"
                title="IEEE UVCE Computer Society Instagram"
              >
                <img src={csLogo} alt="IEEE UVCE CS Logo" className="presenter-logo-img" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
