import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ieeeLogo from '../../assets/ieee-logo.png';
import csLogo from '../../assets/cs-logo.png';

interface HeroProps {
  onExplore?: (href: string) => void;
  isReveal?: boolean;
}

export function Hero({ isReveal = false, onExplore }: HeroProps) {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 700);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(containerRef.current);

    window.addEventListener('resize', updateDimensions);
    window.addEventListener('orientationchange', updateDimensions);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('orientationchange', updateDimensions);
    };
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

  const [startAnimation, setStartAnimation] = useState(false);
  const W = dimensions.width;
  const H = dimensions.height;

  useEffect(() => {
    if (W > 0 && H > 0) {
      const timer = setTimeout(() => {
        setStartAnimation(true);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [W, H]);

  const inset = isMobile ? 16 : 24;

  const dx_topLeft = W ? (W / 2 - 18) - inset : 0;
  const dy_topLeft = H ? (H / 2 - 18) - inset : 0;

  const dx_topRight = W ? -W / 2 + inset + 18 : 0;
  const dy_topRight = H ? (H / 2 - 18) - inset : 0;

  const dx_bottomLeft = W ? (W / 2 - 18) - inset : 0;
  const dy_bottomLeft = H ? -H / 2 + inset + 18 : 0;

  const dx_bottomRight = W ? -W / 2 + inset + 18 : 0;
  const dy_bottomRight = H ? -H / 2 + inset + 18 : 0;

  const bracketTransition = {
    duration: 1.25,
    ease: [0.16, 1, 0.3, 1] as const, // easeOutExpo
  };

  const topLeftVariants = {
    hidden: { x: dx_topLeft, y: dy_topLeft, opacity: 0 },
    visible: { x: 0, y: 0, opacity: 1 }
  };

  const topRightVariants = {
    hidden: { x: dx_topRight, y: dy_topRight, opacity: 0 },
    visible: { x: 0, y: 0, opacity: 1 }
  };

  const bottomLeftVariants = {
    hidden: { x: dx_bottomLeft, y: dy_bottomLeft, opacity: 0 },
    visible: { x: 0, y: 0, opacity: 1 }
  };

  const bottomRightVariants = {
    hidden: { x: dx_bottomRight, y: dy_bottomRight, opacity: 0 },
    visible: { x: 0, y: 0, opacity: 1 }
  };

  const contentMaskVariants = {
    hidden: {
      clipPath: 'inset(calc(50% - 18px) calc(50% - 18px) calc(50% - 18px) calc(50% - 18px) rounded 4px)',
      opacity: 0
    },
    visible: {
      clipPath: 'inset(0% 0% 0% 0% rounded 0px)',
      opacity: 1,
      transition: {
        duration: 1.25,
        ease: [0.16, 1, 0.3, 1] as const,
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
      transition: { duration: 0.65, ease: "easeOut" as const }
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
        <div className={`hero-top-section ${startAnimation ? 'revealed' : ''}`} ref={containerRef}>
          {/* Corner brackets */}
          <motion.div
            className="hero-corner-mark top-left"
            style={{ borderRight: 'none', borderBottom: 'none' }}
            variants={topLeftVariants}
            initial="hidden"
            animate={startAnimation ? "visible" : "hidden"}
            transition={bracketTransition}
            aria-hidden="true"
          />
          <motion.div
            className="hero-corner-mark top-right"
            style={{ borderLeft: 'none', borderBottom: 'none' }}
            variants={topRightVariants}
            initial="hidden"
            animate={startAnimation ? "visible" : "hidden"}
            transition={bracketTransition}
            aria-hidden="true"
          />
          <motion.div
            className="hero-corner-mark bottom-left"
            style={{ borderRight: 'none', borderTop: 'none' }}
            variants={bottomLeftVariants}
            initial="hidden"
            animate={startAnimation ? "visible" : "hidden"}
            transition={bracketTransition}
            aria-hidden="true"
          />
          <motion.div
            className="hero-corner-mark bottom-right"
            style={{ borderLeft: 'none', borderTop: 'none' }}
            variants={bottomRightVariants}
            initial="hidden"
            animate={startAnimation ? "visible" : "hidden"}
            transition={bracketTransition}
            aria-hidden="true"
          />

          <motion.div
            className="hero-content"
            variants={contentMaskVariants}
            initial="hidden"
            animate={startAnimation ? "visible" : "hidden"}
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
            <motion.div className="hero-actions" variants={textItemVariants} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '18px', marginTop: '12px' }}>
              {/* Registrations Closed Box */}
              <div className="registrations-closed-box">
                <div className="registrations-closed-title">
                  <span>REGISTRATIONS CLOSED</span>
                </div>
                <div className="registrations-closed-subtitle">
                  See you at CodeFury 10.0!
                </div>
              </div>

              {/* Explore/Scroll Arrow Button */}
              <button 
                className="btn-explore-scroll" 
                onClick={() => onExplore?.('#about')} 
                aria-label="Explore More"
                style={{ marginTop: '8px' }}
              >
                <span className="explore-text">EXPLORE CODEFURY</span>
                <svg className="explore-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
      </div>

      {/* Infinite Marquee Bar located exactly at the boundary */}
      <div className="marquee-bar-container">
        <div className="marquee-bar">
          <div className="marquee-track marquee-track-rtl">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={`a-${i}`}>REGISTRATIONS CLOSED! &nbsp;✦&nbsp; </span>
            ))}
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={`b-${i}`}>REGISTRATIONS CLOSED! &nbsp;✦&nbsp; </span>
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
