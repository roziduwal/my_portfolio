"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [currentYear] = useState(() => new Date().getFullYear());

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div>
            <h2 className="footer-brand-title">Rojina Duwal</h2>
            <div className="footer-brand-subtitle">QA Engineer</div>
            <p className="footer-desc">
              Curious about how software works, focused on finding issues, and committed to delivering better user experiences through quality testing.
            </p>
          </div>

          {/* Explore Navigation */}
          <div>
            <h3 className="footer-heading">Explore</h3>
            <ul className="footer-links-list" role="list">
              <li><Link href="/#about" className="footer-link">About Me</Link></li>
              <li><Link href="/#projects" className="footer-link">Projects</Link></li>
              <li><Link href="/#expertise" className="footer-link">Skills &amp; Tools</Link></li>
              <li><Link href="/#experience" className="footer-link">Experience</Link></li>
              <li><Link href="/#education" className="footer-link">Education</Link></li>
              <li><Link href="/#contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* QA Focus */}
          <div>
            <h3 className="footer-heading">QA Focus</h3>
            <ul className="footer-links-list" role="list">
              <li><Link href="/#expertise" className="footer-link">Manual &amp; Functional Testing</Link></li>
              <li><Link href="/#expertise" className="footer-link">Test Case Design</Link></li>
              <li><Link href="/#expertise" className="footer-link">Defect Reporting</Link></li>
              <li><Link href="/#expertise" className="footer-link">Regression Testing</Link></li>
              <li><Link href="/#expertise" className="footer-link">API Testing</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Dynamic Year */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            &copy; <span id="current-year">{currentYear}</span> Rojina Duwal. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
