"use client";

import React from "react";
import Link from "next/link";
import { handleResumeDownload } from "@/lib/resume-data";

export default function CaseStudyHeader() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to primary content
      </a>

      <header className="site-header" role="banner">
        <nav className="nav-bar" aria-label="Case Study Navigation">
          <Link
            href="/#projects"
            className="case-study-back-link"
            aria-label="Return to portfolio projects"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back to Projects</span>
          </Link>

          <div className="nav-actions">
            <a
              href="/assets/resume/Rojina_Duwal_Resume.pdf"
              className="btn btn-secondary button-sm"
              id="download-resume-btn"
              download="Rojina_Duwal_Resume.pdf"
              onClick={handleResumeDownload}
            >
              <svg
                className="btn-icon-down"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Download Resume</span>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
