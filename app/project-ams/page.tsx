import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CaseStudyFooter from "@/components/CaseStudyFooter";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Trackora | QA Case Study | Rojina Duwal",
  description:
    "An attendance management system I tested, focusing on attendance tracking, shift scheduling, leave management, validations, and workflow accuracy.",
};

export default function ProjectAmsPage() {
  return (
    <div className="case-study-body">
      <Navbar isCaseStudy={true} />

      <main id="main-content">
        {/* Hero / Title Header Section */}
        <section className="section case-study-hero bg-cream">
          <div className="container">
            <div className="case-study-header-block">
              {/* Top row: Category tag on left, Back to Projects on right */}
              <div className="case-study-top-bar">
                <span className="project-category-badge">
                  ATTENDANCE MANAGEMENT SYSTEM
                </span>

                <Link
                  href="/#projects"
                  className="case-study-back-pill"
                  aria-label="Return to portfolio projects"
                >
                  <svg
                    width="14"
                    height="14"
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
                  <span className="back-text-full">Back to Projects</span>
                  <span className="back-text-short">Back</span>
                </Link>
              </div>

              <h1 className="heading-1 case-study-main-title">
                Trackora
              </h1>

              <p className="body-1 case-study-lead-text">
                An attendance management system I tested, focusing on attendance
                tracking, shift scheduling, leave management, validations, and
                workflow accuracy.
              </p>

              {/* Key Metrics Grid */}
              <div
                className="case-study-quick-meta-grid"
                style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
              >
                <div className="quick-meta-card">
                  <span className="caption-3 text-burgundy">ROLE</span>
                  <p className="title-3 text-wine">QA Engineer</p>
                </div>
                <div className="quick-meta-card">
                  <span className="caption-3 text-burgundy">TESTING</span>
                  <p className="title-3 text-wine">
                    Manual, Functional, Regression &amp; UI Testing
                  </p>
                </div>
                <div className="quick-meta-card">
                  <span className="caption-3 text-burgundy">TOOLS</span>
                  <p className="title-3 text-wine">
                    Jira, DevTools
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Diagram Visual Showcase */}
            <div className="case-study-visual-frame">
              <img
                src="/assets/images/trackora.png"
                alt="Trackora: Attendance Management System"
                className="case-study-diagram"
                width={825}
                height={395}
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Section: What I Tested */}
        <section className="section case-study-section bg-secondary">
          <div className="container">
            <div className="case-study-content-grid">
              <div className="case-study-col-sidebar">
                <span className="editorial-kicker">TESTING SCOPE</span>
                <h2 className="heading-3">What I Tested</h2>
              </div>

              <div className="case-study-col-main">
                <div className="case-study-modules-list">
                  <div className="module-card">
                    <h3 className="title-1 text-wine">Attendance &amp; Shift Management</h3>
                    <p className="body-3 text-secondary">
                      Clock-in/clock-out workflows, timestamp accuracy, shift scheduling, and assignment validations.
                    </p>
                  </div>

                  <div className="module-card">
                    <h3 className="title-1 text-wine">Leave Management</h3>
                    <p className="body-3 text-secondary">
                      Leave applications, multi-tier approvals, rejection workflows, and real-time status updates.
                    </p>
                  </div>

                  <div className="module-card">
                    <h3 className="title-1 text-wine">Form Validations</h3>
                    <p className="body-3 text-secondary">
                      Required fields, invalid inputs, boundary case verification, and duplicate submission prevention.
                    </p>
                  </div>

                  <div className="module-card">
                    <h3 className="title-1 text-wine">Data Accuracy &amp; Integrity</h3>
                    <p className="body-3 text-secondary">
                      Attendance records, date/time calculations, audit logs, and cross-workflow synchronization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: My Contributions */}
        <section className="section case-study-section bg-cream">
          <div className="container">
            <div className="case-study-content-grid">
              <div className="case-study-col-sidebar">
                <span className="editorial-kicker">QA EXECUTION</span>
                <h2 className="heading-3">My Contributions</h2>
              </div>

              <div className="case-study-col-main">
                <div className="case-study-highlight-card" style={{ marginTop: 0 }}>
                  <ul className="case-study-bullets" role="list">
                    <li>
                      Designed and executed test cases for attendance and employee workflows.
                    </li>
                    <li>
                      Tested positive, negative, boundary, and edge-case scenarios.
                    </li>
                    <li>
                      Identified, documented, and retested defects.
                    </li>
                    <li>
                      Performed functional and regression testing.
                    </li>
                    <li>
                      Verified data accuracy and workflow consistency.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Case Study Navigation Footer */}
        <section className="section case-study-next-nav bg-secondary">
          <div className="container">
            <div className="next-nav-wrapper">
              <div className="next-nav-info">
                <span className="caption-3 text-burgundy">
                  NEXT QA CASE STUDY
                </span>
                <h2 className="heading-3 text-wine">
                  Phenomenal Art Gallery
                </h2>
                <p className="body-3 text-secondary">
                  An art gallery application for which I performed API testing to
                  verify endpoint functionality, response accuracy, data
                  handling, and API behavior.
                </p>
              </div>
              <div className="next-nav-actions">
                <Link
                  href="/project-art-gallery"
                  className="btn btn-primary button-md"
                >
                  <span>View Next Case Study</span>
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
              </div>
            </div>
          </div>
        </section>
      </main>

      <CaseStudyFooter />
      <ScrollReveal />
    </div>
  );
}
