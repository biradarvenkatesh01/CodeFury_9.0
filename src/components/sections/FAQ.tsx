import { useState } from 'react';
import { motion } from 'framer-motion';

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: 'Who can participate in CodeFury 9.0?',
    a: 'Any student from any college or university can participate. Both undergraduate and postgraduate students are welcome. Professionals and working individuals are not eligible.',
  },
  {
    q: 'What is the team size limit?',
    a: 'Teams can have 1–4 members. You can participate individually or form a team of up to 4 people. All team members must be students.',
  },
  {
    q: 'Is there any registration fee?',
    a: 'Yes, the registration fee for CodeFury 9.0 is ₹120 per head.',
  },
  {
    q: 'What are the available tracks?',
    a: 'Participants will choose from three themes, each with its own problem statement. Participants may opt to build a web or mobile application depending on their area of expertise and preference.',
  },
  {
    q: 'Are first-year students allowed to participate?',
    a: 'Yes! First-year students are absolutely welcome. CodeFury is open to students from all years and all branches of engineering.',
  },
  {
    q: 'How do I submit my project?',
    a: "Project submission details will be shared with qualified participants after the preliminary round. Typically, you'll need to submit your code repository, demo video, and project documentation.",
  },
  {
    q: 'Is this completely an online hackathon?',
    a: 'Yes, CodeFury 9.0 is a fully online hackathon. You can participate from anywhere in the world. All interactions, presentations, and judging will happen virtually.',
  },
  {
    q: 'What happens after the 24-hour coding period?',
    a: 'After the coding period ends, teams will present their projects to our panel of judges. Winners will be announced within 24 hours of submission deadline, followed by prize distribution.',
  },
];

const THEMES = ['cyan', 'violet', 'orange', 'rose', 'green', 'yellow'];

function FaqItemComponent({ item, index }: { item: FaqItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const theme = THEMES[index % THEMES.length];

  return (
    <motion.div
      className={`cf-faq-item theme-${theme} ${isOpen ? 'open' : ''} ${isHover ? 'hover' : ''}`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: 'easeOut' }}
    >
      <div className="cf-faq-relative-container">
        {/* Cyber Folder Tabs */}
        <div className="cf-faq-tab" />
        <div className="cf-faq-tab-connector" />

        {/* Main Question Panel */}
        <div
          className="cf-faq-question-panel"
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <span className="cf-faq-question-text">{item.q}</span>
          <div className="cf-faq-toggle-icon">
            <svg
              className="cf-faq-icon-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </div>
        </div>

        {/* Slide Down Answer Panel */}
        <div className="cf-faq-answer-panel">
          <div className="cf-faq-answer-inner">
            <p className="cf-faq-answer-text">{item.a}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="faq-outer-wrap-new" style={{ minHeight: '60vh' }}>
      <div className="section-container">
        <motion.div
          className="section-header-block"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="section-heading">
            Frequently <span className="faq-heading-accent">Asked</span>
          </h2>
          <div className="heading-underline" />
        </motion.div>

        <div className="faq-list">
          {FAQS.map((item, i) => (
            <FaqItemComponent key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
