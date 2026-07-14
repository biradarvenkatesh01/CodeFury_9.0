import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';
import img6 from '../../assets/img6.png';
import img7 from '../../assets/img7.png';
import img8 from '../../assets/img8.png';

const GALLERY_IMAGES = [img1, img2, img3, img4, img5, img6, img7, img8];
const AUTO_INTERVAL = 4000;

export function CodeFuryWall() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goNext = useCallback(() => {
    setCurrent(prev => (prev + 1) % GALLERY_IMAGES.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrent(prev => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(goNext, AUTO_INTERVAL);
    return () => clearInterval(id);
  }, [goNext, isPaused]);

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

        <motion.div
          className="wall-gallery-wrap wall-card-2d"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main slider viewport */}
          <div className="wall-slider-viewport">
            <div className="wall-slider-single-container">
              <motion.img
                key={current}
                src={GALLERY_IMAGES[current]}
                alt={`CodeFury event photo ${current + 1}`}
                className="wall-slider-img"
                initial={{ opacity: 0.7 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
              />
            </div>

            {/* Counter badge */}
            <div className="wall-counter-badge">
              {current + 1} / {GALLERY_IMAGES.length}
            </div>
          </div>

          {/* Bottom navigation controls */}
          <div className="wall-bottom-controls">
            <button className="wall-ctrl-btn" onClick={goPrev} aria-label="Previous photo">
              ◀
            </button>
            <button className="wall-ctrl-btn" onClick={goNext} aria-label="Next photo">
              ▶
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CodeFuryWall;
