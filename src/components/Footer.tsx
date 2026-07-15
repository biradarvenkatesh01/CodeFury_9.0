export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer" id="footer">
      <div className="footer-container">
        {/* Left: Brand info */}
        <div className="footer-left">
          <div className="footer-title">CodeFury 9.0</div>
          <p className="footer-association">
            Annual National-Level Hackathon<br />
            Organized by <strong>IEEE UVCE Computer Society</strong><br />
            University of Visvesvaraya College of Engineering, Bengaluru
          </p>
          <div className="footer-developer-card">
            <p className="footer-credits">
              Developed by the <strong className="footer-sig-highlight">Software Development SIG, IEEE UVCE</strong>
            </p>
            <div className="footer-dev-links">
              <a
                href="https://www.linkedin.com/in/shravya-hegde-732ba7311"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-dev-link"
              >
                <svg className="footer-linkedin-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Shravya Hegde
              </a>
              <span className="footer-dev-separator">&amp;</span>
              <a
                href="https://www.linkedin.com/in/venkateshbiradar/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-dev-link"
              >
                <svg className="footer-linkedin-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Venkatesh Biradar
              </a>
            </div>
          </div>
        </div>

        {/* Right: Quick links */}
        <div className="footer-right">
          <div className="footer-links-group">
            <h4>Navigate</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#tracks">Tracks</a></li>
              <li><a href="#prizes">Prize Pool</a></li>
              <li><a href="#timeline">Timeline</a></li>
              {/* <li><a href="#sponsors">Sponsors</a></li> */}
            </ul>
          </div>
          <div className="footer-links-group">
            <h4>Community</h4>
            <ul>
              <li>
                <a href="https://www.instagram.com/ieee.uvce.cs/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/Ieee.uvce.cs" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href="mailto:cs.uvce.ieee@gmail.com">
                  Email Us
                </a>
              </li>
              <li><a href="#faq">FAQs</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom-bar">
        <span>© {currentYear} IEEE UVCE Computer Society. All rights reserved.</span>
        <span className="footer-bottom-sep">·</span>
        <span>CodeFury 9.0</span>
      </div>
    </footer>
  );
}

export default Footer;
