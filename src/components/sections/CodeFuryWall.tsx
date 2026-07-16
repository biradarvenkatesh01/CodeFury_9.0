import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';
import img6 from '../../assets/img6.png';
import img7 from '../../assets/img7.png';
import img8 from '../../assets/img8.png';

const GALLERY_IMAGES = [img1, img2, img3, img4, img5, img6, img7, img8];

export function CodeFuryWall() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const autoRotateRef = useRef<NodeJS.Timeout | null>(null);

  // Sync mobile layout flag
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Sync auto rotate (unconditional, infinite)
  useEffect(() => {
    autoRotateRef.current = setInterval(() => {
      setRotation(prev => prev - 45);
    }, 3000);

    return () => {
      if (autoRotateRef.current) clearInterval(autoRotateRef.current);
    };
  }, []);

  // Escape key close & keyboard arrows listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImg(null);
      } else if (e.key === 'ArrowLeft') {
        setRotation(prev => prev + 45);
      } else if (e.key === 'ArrowRight') {
        setRotation(prev => prev - 45);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const radius = isMobile ? 280 : 420;

  const handlePrev = () => {
    setRotation(prev => prev + 45);
  };

  const handleNext = () => {
    setRotation(prev => prev - 45);
  };

  return (
    <section id="wall" className="wall-outer-wrap">
      <div className="section-container">
        <motion.div
          className="section-header-block"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="section-heading">
            CodeFury <span className="wall-heading-accent">Wall</span>
          </h2>
          <div className="heading-underline" />
          <p className="wall-subtitle">Highlights & memories from previous editions</p>
        </motion.div>
      </div>

      {/* 3D Carousel Stage */}
      <div className="wall-3d-stage">
        <motion.div
          className="wall-3d-track"
          animate={{ rotateY: rotation }}
          transition={{ type: 'spring', damping: 26, stiffness: 100 }}
        >
          {GALLERY_IMAGES.map((img, i) => {
            const angle = i * 45;
            return (
              <div
                key={`photo3d-${i}`}
                className="wall-3d-photo-card"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                }}
                onClick={() => setSelectedImg(img)}
              >
                <img src={img} alt={`CodeFury memory ${i + 1}`} loading="lazy" />
                <div className="wall-3d-photo-glow" />
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Controls */}
      <div className="wall-3d-controls">
        <button className="wall-3d-ctrl-btn" onClick={handlePrev} aria-label="Previous photo">
          ◀
        </button>
        <span className="wall-3d-counter">SWEEP MEMORIES</span>
        <button className="wall-3d-ctrl-btn" onClick={handleNext} aria-label="Next photo">
          ▶
        </button>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="wall-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <button className="wall-lightbox-close" onClick={() => setSelectedImg(null)} aria-label="Close photo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <motion.div
              className="wall-lightbox-content"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImg} alt="CodeFury memory full viewport" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default CodeFuryWall;
