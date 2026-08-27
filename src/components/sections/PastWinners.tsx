import { motion } from 'framer-motion';

interface Winner {
  award: string;
  medal: string;
  project: string;
  team: string;
  college: string;
  tech: string[];
  links: { label: string; url: string }[];
  colorTheme: 'gold' | 'silver' | 'bronze' | 'consolation';
}

const WINNERS: Winner[] = [
  {
    award: 'Winner',
    medal: '🏆',
    project: 'CyberSafe',
    team: 'Crazy XYZ',
    college: 'UVCE',
    tech: ['React', 'Node.js', 'MongoDB', 'CSS'],
    links: [
      { label: 'GitHub', url: 'https://github.com/ADARSH07SH/hackathon_cyberQuest.git' },
      { label: 'Live Demo', url: 'https://hackathon-cyberquest.onrender.com' },
    ],
    colorTheme: 'gold',
  },
  {
    award: 'First Runner Up',
    medal: '🥈',
    project: 'Arise',
    team: 'Arise',
    college: 'UVCE',
    tech: ['React', 'Tailwind', 'Vercel'],
    links: [
      { label: 'GitHub', url: 'https://github.com/akashr206/Arise-Codefury' },
      { label: 'Live Demo', url: 'https://arise-codefury.vercel.app/' },
    ],
    colorTheme: 'silver',
  },
  {
    award: 'Second Runner Up',
    medal: '🥉',
    project: 'Krishi',
    team: 'Byte Busters',
    college: 'PES University',
    tech: ['React', 'Next.js', 'Tailwind', 'Vercel'],
    links: [
      { label: 'GitHub', url: 'https://github.com/chandann23/Codefury' },
      { label: 'Live Demo', url: 'https://codefury-nu.vercel.app/' },
    ],
    colorTheme: 'bronze',
  },
  {
    award: 'Consolation Prize',
    medal: '🏅',
    project: 'Folkify',
    team: 'Vibe Coders',
    college: 'BMSCE',
    tech: ['React', 'Framer Motion', 'Tailwind', 'Vercel'],
    links: [
      { label: 'GitHub', url: 'https://github.com/GShreekar/Folkify' },
      { label: 'Live Demo', url: 'https://folkify-seven.vercel.app' },
    ],
    colorTheme: 'consolation',
  },
  {
    award: 'Consolation Prize',
    medal: '🏅',
    project: 'AgriGuru',
    team: 'CosmicSentinal',
    college: 'VidyaVardhaka College of Engineering',
    tech: ['React', 'Tailwind', 'Node.js', 'Render'],
    links: [
     
      { label: 'Live Demo', url: 'https://agriguru-frontend.onrender.com' },
    ],
    colorTheme: 'consolation',
  },
  {
    award: 'Consolation Prize',
    medal: '🏅',
    project: 'AgriConnect',
    team: 'A.I.M',
    college: 'KLS Gogte Institute Of Technology',
    tech: ['Next.js', 'React', 'Tailwind', 'Vercel'],
     links: [
        { label: 'GitHub', url: 'https://github.com/Victowolf/AgriConnect' },
     ],
    colorTheme: 'consolation',
  },
  {
    award: 'Consolation Prize',
    medal: '🏅',
    project: 'Folk Flame Digital',
    team: 'TechAura',
    college: 'Dayananda Sagar College Of Engineering',
    tech: ['HTML', 'CSS', 'JavaScript', 'Git'],
    links: [
      { label: 'GitHub', url: 'https://github.com/vanishajr/folk-flame-digital.git' },
    ],
    colorTheme: 'consolation',
  },
  {
    award: 'Consolation Prize',
    medal: '🏅',
    project: 'Cyber Atlas',
    team: 'Nirvana',
    college: 'Dr. Ambedkar Institute of Technology',
    tech: ['React', 'Tailwind', 'Vercel'],
    links: [
      { label: 'GitHub', url: 'https://github.com/TrigonometricCook/cyber-atlas' },
      { label: 'Live Demo', url: 'https://cyber-atlas.vercel.app/' },
    ],
    colorTheme: 'consolation',
  },
];

const WINNERS_9: Winner[] = [
  {
    award: 'Winner',
    medal: '🏆',
    project: 'StormBreakers',
    team: 'StormBreakers',
    college: 'UVCE',
    tech: ['React', 'Vite', 'Node.js', 'Python', 'Supabase'],
    links: [
      { label: 'GitHub', url: 'https://github.com/KARJ-labs/StormBreakers_9.0' },
      { label: 'Live Demo', url: 'https://storm-breakers-six.vercel.app' },
    ],
    colorTheme: 'gold',
  },
  {
    award: 'First Runner Up',
    medal: '🥈',
    project: 'Lord of the Gits',
    team: 'Lord of the Gits',
    college: 'RV University & BMSCE',
    tech: ['React', 'Vite', 'JavaScript', 'CSS'],
    links: [
      { label: 'GitHub', url: 'https://github.com/adidihareesh/codefury' },
      { label: 'Live Demo', url: 'https://codefury1.vercel.app/#/trust-layer' },
    ],
    colorTheme: 'silver',
  },
  {
    award: 'Second Runner Up',
    medal: '🥉',
    project: 'Zenforge',
    team: 'Zenforge',
    college: 'CMR University',
    tech: ['React', 'Vite', 'Tailwind', 'Node.js', 'Netlify'],
    links: [
      { label: 'GitHub', url: 'https://github.com/vikasvkori1290/codefury-9.0' },
      { label: 'Live Demo', url: 'https://forgemodel.netlify.app/' },
    ],
    colorTheme: 'bronze',
  },
];

const WINNERS_9_CONSOLATION: Winner[] = [
  {
    award: 'Consolation Prize',
    medal: '🏅',
    project: 'PRX',
    team: 'PRX',
    college: 'Ramaiah Institute of Technology, BIT',
    tech: ['Python', 'Flask', 'HTML', 'CSS', 'Render'],
    links: [
      { label: 'GitHub', url: 'https://github.com/ArnavAAB/model_checker' },
      { label: 'Live Demo', url: 'https://veritas-ai-f21e.onrender.com' },
    ],
    colorTheme: 'consolation',
  },
  {
    award: 'Consolation Prize',
    medal: '🏅',
    project: 'codeProtons',
    team: 'codeProtons',
    college: 'PES University, VIT',
    tech: ['React', 'Vite', 'TypeScript', 'Supabase', 'Vercel'],
    links: [
      { label: 'GitHub', url: 'https://github.com/geezdock/Arthiq' },
      { label: 'Live Demo', url: 'https://modelmint-xi.vercel.app/' },
    ],
    colorTheme: 'consolation',
  },
  {
    award: 'Consolation Prize',
    medal: '🏅',
    project: 'Parallax',
    team: 'Parallax',
    college: 'KSIT, UVCE',
    tech: ['Next.js', 'React', 'JavaScript', 'CSS', 'Vercel'],
    links: [
      { label: 'GitHub', url: 'https://github.com/akashr206/parallax' },
      { label: 'Live Demo', url: 'https://paralllaxx.vercel.app' },
    ],
    colorTheme: 'consolation',
  },
];

const themeMap = {
  gold: {
    top: '#eab308',
    right: '#ca8a04',
    front: '#eff6ff',
    badge: 'winner-gold-badge',
  },
  silver: {
    top: '#94a3b8',
    right: '#475569',
    front: '#eef2ff',
    badge: 'winner-silver-badge',
  },
  bronze: {
    top: '#ea580c',
    right: '#9a3412',
    front: '#eff6ff',
    badge: 'winner-bronze-badge',
  },
  consolation: {
    top: '#06b6d4',
    right: '#0891b2',
    front: '#eef2ff',
    badge: 'winner-consolation-badge',
  },
};

export function PastWinners() {
  return (
    <section id="past" className="past-winners-outer-wrap">
      <div className="section-container">
        <motion.div
          className="section-header-block"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="section-heading">
            Past <span className="winners-heading-accent">Winners</span>
          </h2>
          <div className="heading-underline" />
          <p className="winners-subtitle">Celebrating brilliance from CodeFury 8.0</p>
        </motion.div>

        {/* Top 3 Winners */}
        <div className="top-winners-grid">
          {WINNERS.filter(w => w.colorTheme !== 'consolation').map((w, i) => {
            const t = themeMap[w.colorTheme];
            return (
              <motion.div
                key={w.project}
                className="card-3d winners-card-3d"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
              >
                <div className="card-3d-top" style={{ backgroundColor: t.top }} />
                <div className="card-3d-right" style={{ backgroundColor: t.right }} />
                <div className="card-3d-front" style={{ backgroundColor: t.front }}>
                  {/* Award badge row */}
                  <div className="winner-award-row">
                    <span className="winner-medal">{w.medal}</span>
                    <span className={`winner-award-badge ${t.badge}`}>{w.award}</span>
                  </div>

                  {/* Project name */}
                  <h3 className="winner-project-title">{w.project}</h3>

                  {/* Team & College */}
                  <div className="winner-meta">
                    <div className="winner-meta-row">
                      <span className="winner-meta-icon">👥</span>
                      <span className="winner-meta-text"><strong>{w.team}</strong></span>
                    </div>
                    <div className="winner-meta-row">
                      <span className="winner-meta-icon">🏛️</span>
                      <span className="winner-meta-text">{w.college}</span>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="winner-tech-row">
                    {w.tech.map(techName => (
                      <span key={techName} className="winner-tech-chip">{techName}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="winner-links-row">
                    {w.links.map(link => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="winner-link-btn"
                      >
                        {link.label === 'GitHub' ? '⌥ ' : '🔗 '}
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Consolation Section Header */}
        <div className="consolation-header-block">
          <h3 className="consolation-section-title">Consolation Prizes</h3>
          <div className="consolation-title-underline" />
        </div>

        {/* Consolation Winners */}
        <div className="consolation-winners-grid">
          {WINNERS.filter(w => w.colorTheme === 'consolation').map((w, i) => {
            const t = themeMap[w.colorTheme];
            return (
              <motion.div
                key={w.project}
                className="card-3d winners-card-3d consolation-card-3d"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.06 }}
              >
                <div className="card-3d-top" style={{ backgroundColor: t.top }} />
                <div className="card-3d-right" style={{ backgroundColor: t.right }} />
                <div className="card-3d-front" style={{ backgroundColor: t.front }}>
                  {/* Award badge row */}
                  <div className="winner-award-row">
                    <span className="winner-medal">{w.medal}</span>
                    <span className={`winner-award-badge ${t.badge}`}>{w.award}</span>
                  </div>

                  {/* Project name */}
                  <h3 className="winner-project-title">{w.project}</h3>

                  {/* Team & College */}
                  <div className="winner-meta">
                    <div className="winner-meta-row">
                      <span className="winner-meta-icon">👥</span>
                      <span className="winner-meta-text"><strong>{w.team}</strong></span>
                    </div>
                    <div className="winner-meta-row">
                      <span className="winner-meta-icon">🏛️</span>
                      <span className="winner-meta-text">{w.college}</span>
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="winner-tech-row">
                    {w.tech.map(techName => (
                      <span key={techName} className="winner-tech-chip">{techName}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="winner-links-row">
                    {w.links.map(link => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="winner-link-btn"
                      >
                        {link.label === 'GitHub' ? '⌥ ' : '🔗 '}
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CodeFury 9.0 Section Header */}
        <motion.div
          id="winners-9"
          className="section-header-block"
          style={{ marginTop: '72px' }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h2 className="section-heading">
            CodeFury <span className="winners-heading-accent">9.0 Winners</span>
          </h2>
          <div className="heading-underline" />
          <p className="winners-subtitle">Celebrating excellence from CodeFury 9.0</p>
        </motion.div>

        {/* CodeFury 9.0 Top 3 Winners */}
        <div className="top-winners-grid winners-grid-9">
          {WINNERS_9.map((w, i) => {
            const t = themeMap[w.colorTheme];
            return (
              <motion.div
                key={w.project}
                className="card-3d winners-card-3d"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
              >
                <div className="card-3d-top" style={{ backgroundColor: t.top }} />
                <div className="card-3d-right" style={{ backgroundColor: t.right }} />
                <div className="card-3d-front" style={{ backgroundColor: t.front }}>
                  {/* Award badge row */}
                  <div className="winner-award-row">
                    <span className="winner-medal">{w.medal}</span>
                    <span className={`winner-award-badge ${t.badge}`}>{w.award}</span>
                  </div>

                  {/* Project name */}
                  <h3 className="winner-project-title">{w.project}</h3>

                  {/* Team & College */}
                  <div className="winner-meta">
                    <div className="winner-meta-row">
                      <span className="winner-meta-icon">👥</span>
                      <span className="winner-meta-text"><strong>{w.team}</strong></span>
                    </div>
                    <div className="winner-meta-row">
                      <span className="winner-meta-icon">🏛️</span>
                      <span className="winner-meta-text">{w.college}</span>
                    </div>
                  </div>

                  {/* Tech stack (only render if non-empty) */}
                  {w.tech.length > 0 && (
                    <div className="winner-tech-row">
                      {w.tech.map(techName => (
                        <span key={techName} className="winner-tech-chip">{techName}</span>
                      ))}
                    </div>
                  )}

                  {/* Links */}
                  <div className="winner-links-row">
                    {w.links.map(link => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="winner-link-btn"
                      >
                        {link.label === 'GitHub' ? '⌥ ' : '🔗 '}
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CodeFury 9.0 Consolation Section Header */}
        <div className="consolation-header-block">
          <h3 className="consolation-section-title">Consolation Prizes</h3>
          <div className="consolation-title-underline" />
        </div>

        {/* CodeFury 9.0 Consolation Winners */}
        <div className="consolation-winners-grid">
          {WINNERS_9_CONSOLATION.map((w, i) => {
            const t = themeMap[w.colorTheme];
            return (
              <motion.div
                key={w.project}
                className="card-3d winners-card-3d consolation-card-3d"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.06 }}
              >
                <div className="card-3d-top" style={{ backgroundColor: t.top }} />
                <div className="card-3d-right" style={{ backgroundColor: t.right }} />
                <div className="card-3d-front" style={{ backgroundColor: t.front }}>
                  {/* Award badge row */}
                  <div className="winner-award-row">
                    <span className="winner-medal">{w.medal}</span>
                    <span className={`winner-award-badge ${t.badge}`}>{w.award}</span>
                  </div>

                  {/* Project name */}
                  <h3 className="winner-project-title">{w.project}</h3>

                  {/* Team & College */}
                  <div className="winner-meta">
                    <div className="winner-meta-row">
                      <span className="winner-meta-icon">👥</span>
                      <span className="winner-meta-text"><strong>{w.team}</strong></span>
                    </div>
                    <div className="winner-meta-row">
                      <span className="winner-meta-icon">🏛️</span>
                      <span className="winner-meta-text">{w.college}</span>
                    </div>
                  </div>

                  {/* Tech stack */}
                  {w.tech.length > 0 && (
                    <div className="winner-tech-row">
                      {w.tech.map(techName => (
                        <span key={techName} className="winner-tech-chip">{techName}</span>
                      ))}
                    </div>
                  )}

                  {/* Links */}
                  <div className="winner-links-row">
                    {w.links.map(link => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="winner-link-btn"
                      >
                        {link.label === 'GitHub' ? '⌥ ' : '🔗 '}
                        {link.label}
                      </a>
                    ))}
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

export default PastWinners;
