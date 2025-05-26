const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © 2025 Adarsh Kr Tiwari. All rights reserved.
        </p>
        <div className="footer-links">
          <a
            href="https://github.com/adarsh7576061625"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/adarsh-kr-tiwari-381002218/"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/yourusername" // Update this if you want, or remove if no Twitter
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
