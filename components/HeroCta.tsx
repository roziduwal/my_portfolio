"use client";

import React from "react";
import Link from "next/link";
import { handleResumeDownload } from "@/lib/resume-data";

export default function HeroCta() {
  return (
    <div className="hero-cta-group">
      <Link href="/#projects" className="btn btn-primary button-md">
        <span>Explore My Work</span>
        <svg
          className="btn-icon"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M 3,8 L 13,8 M 9,4 L 13,8 L 9,12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <a
        href="/assets/resume/Rojina_Duwal_QA_CV.pdf"
        className="btn btn-secondary button-md"
        id="download-resume-btn"
        download="Rojina_Duwal_QA_CV.pdf"
        aria-label="Download Rojina Duwal's Resume"
        onClick={handleResumeDownload}
      >
        <svg
          className="btn-icon-down"
          width="16"
          height="16"
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
  );
}
