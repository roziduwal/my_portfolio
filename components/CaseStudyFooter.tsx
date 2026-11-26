"use client";

import React, { useState } from "react";

export default function CaseStudyFooter() {
  const [currentYear] = useState(() => new Date().getFullYear());

  return (
    <footer className="site-footer case-study-site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            &copy; <span id="current-year">{currentYear}</span> Rojina Duwal. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
