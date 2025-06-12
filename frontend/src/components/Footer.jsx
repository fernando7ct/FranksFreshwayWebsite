import React from "react";

const Footer = () => {
  return (
   <footer className="footer">
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/weekly-circular">Weekly Circular</a>
        <a href="/about">About Us</a>
        <a href="/departments">Departments</a>
        <a href="/location">Location</a>
      </div>
      <div className="footer-contact">
        <a href="/contact">Contact</a>
      </div>
      <div className="footer-social">
        <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <svg height="24" width="24" fill="none" stroke="#a66b6b" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H6v4h4v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
        <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
          <svg height="24" width="24" fill="none" stroke="#a66b6b" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 16 3c-2.5 0-4.5 2.01-4.5 4.5 0 .35.03.69.09 1A12.94 12.94 0 0 1 3 4.07s-4 9 5 13c-1.4 1-2.88 1.42-4 1.41C5.1 22 7.11 22 9 21.54A12.94 12.94 0 0 0 21 6.56c.03-.23.05-.46.05-.69A8.32 8.32 0 0 0 23 3z"/>
          </svg>
        </a>
        <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <svg height="24" width="24" fill="none" stroke="#a66b6b" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>
          </svg>
        </a>
      </div>
      <div className="footer-copyright">
        © 2024 Fresh Foods Market. All rights reserved.
      </div>
    </footer>
  )
}
export default Footer