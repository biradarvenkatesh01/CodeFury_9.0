import { useEffect, useState, useRef } from 'react';

interface TerminalIntroProps {
  onComplete: () => void;
}

const ASCII_LOGO = [
  '  ██████╗ ██████╗ ██████╗ ███████╗███████╗██╗   ██╗██████╗ ██╗   ██╗            ██████╗      ██████╗ ',
  ' ██╔════╝██╔═══██╗██╔══██╗██╔════╝██╔════╝██║   ██║██╔══██╗╚██╗ ██╔╝           ██╔═══██╗    ██╔═══██╗',
  ' ██║     ██║   ██║██║  ██║█████╗  █████╗  ██║   ██║██████╔╝ ╚████╔╝            ╚██████╔╝    ██║   ██║',
  ' ██║     ██║   ██║██║  ██║██╔══╝  ██╔══╝  ██║   ██║██╔══██╗  ╚██╔╝              ╚═══██║     ██║   ██║',
  ' ╚██████╗╚██████╔╝██████╔╝███████╗██║     ╚██████╔╝██║  ██║   ██║   █████████╗ ██████╔╝ ██╗ ╚██████╔╝',
  '  ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚════════╝ ╚═════╝  ╚═╝  ╚═════╝ ',
];

const BOOT_LINES = [
  { text: 'loading codefury_9.0 ... OK', delay: 150 },
  { text: 'registration_status: OPEN', delay: 180, highlight: true },
  { text: 'boot_sequence: SUCCESS ✓', delay: 180, success: true },
];



export function TerminalIntro({ onComplete }: TerminalIntroProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [visibleLines, setVisibleLines] = useState<number>(-1);
  const [typedLines, setTypedLines] = useState<string[]>(Array(BOOT_LINES.length).fill(''));
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [logoLines, setLogoLines] = useState(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 700);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);



  const handleSkip = () => {
    setIsFading(true);
    setTimeout(onComplete, 350);
  };

  useEffect(() => {
    let active = true;
    const delay = (ms: number) =>
      new Promise<void>((res) => setTimeout(() => { if (active) res(); }, ms));

    const run = async () => {
      // Show ASCII logo line by line
      await delay(200);
      setShowLogo(true);
      const logoArr = ASCII_LOGO;
      for (let i = 1; i <= logoArr.length; i++) {
        if (!active) return;
        setLogoLines(i);
        await delay(60);
      }
      await delay(300);

      // Type each boot line
      for (let li = 0; li < BOOT_LINES.length; li++) {
        if (!active) return;
        const { text, delay: d } = BOOT_LINES[li];
        setVisibleLines(li);
        await delay(d);
        // Type character by character
        for (let ci = 1; ci <= text.length; ci++) {
          if (!active) return;
          setTypedLines((prev) => {
            const next = [...prev];
            next[li] = text.slice(0, ci);
            return next;
          });
          await delay(28);
        }
        // Tick progress bar
        setProgress(Math.round(((li + 1) / BOOT_LINES.length) * 100));
        await delay(80);
      }

      await delay(900);
      if (!active) return;
      setIsFading(true);
      await delay(500);
      if (active) onComplete();
    };

    run();
    return () => { active = false; };
  }, [onComplete, isMobile]);

  const logoArr = ASCII_LOGO;
  const prompt = isMobile ? '[Codefury_9.0]$' : '[visitor@Codefury_9.0 ~]$';
  const barFilled = Math.round(progress / 5); // out of 20 chars

  return (
    <div className={`ti-overlay${isFading ? ' ti-fade-out' : ''}`}>
      {/* Scanline overlay */}
      <div className="ti-scanlines" aria-hidden="true" />

      {/* 3D Cyber Terminal Window Box */}
      <div className="ti-box-window">
        {/* macOS-style header */}
        <div className="ti-header">
          <div className="ti-dots">
            <span className="ti-dot ti-dot--red" onClick={handleSkip} title="Close / Skip" />
            <span className="ti-dot ti-dot--yellow" />
            <span className="ti-dot ti-dot--green" />
          </div>
          <div className="ti-header-title">📁 CodeFury_9.0 — bash</div>
          <button className="ti-skip-btn" onClick={handleSkip}>[ SKIP ]</button>
        </div>

        {/* Terminal body */}
        <div className="ti-body">
          {/* ASCII logo */}
          {showLogo && (
            <div className="ti-logo-block">
              {logoArr.slice(0, logoLines).map((row, i) => (
                <div key={i} className="ti-logo-row">{row}</div>
              ))}
            </div>
          )}

          {/* Boot lines */}
          <div className="ti-lines-block">
            {BOOT_LINES.map((bl, i) =>
              i <= visibleLines ? (
                <div
                  key={i}
                  className={`ti-line${bl.highlight ? ' ti-line--highlight' : ''}${bl.success ? ' ti-line--success' : ''}`}
                >
                  <span className="ti-prompt">{prompt}</span>
                  <span className="ti-line-text">&nbsp;{typedLines[i]}</span>
                  {/* blinking cursor on the last active line */}
                  {i === visibleLines && typedLines[i].length < bl.text.length && (
                    <span className="ti-cursor" />
                  )}
                </div>
              ) : null
            )}
          </div>

          {/* Progress bar */}
          {progress > 0 && (
            <div className="ti-progress-wrap">
              <span className="ti-progress-label">LOADING</span>
              <span className="ti-progress-bar">
                {'['}
                <span className="ti-bar-fill">{'█'.repeat(barFilled)}</span>
                <span className="ti-bar-empty">{'░'.repeat(20 - barFilled)}</span>
                {']'}
              </span>
              <span className="ti-progress-pct">{progress}%</span>
            </div>
          )}


        </div>
      </div>
    </div>
  );
}

export default TerminalIntro;
