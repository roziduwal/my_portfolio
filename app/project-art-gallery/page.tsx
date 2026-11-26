import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CaseStudyFooter from "@/components/CaseStudyFooter";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Phenomenal Art Gallery | QA Case Study | Rojina Duwal",
  description:
    "An art gallery application for which I performed API testing to verify endpoint functionality, response accuracy, data handling, and API behavior.",
};

export default function ProjectArtGalleryPage() {
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
                  E-COMMERCE WEBSITE
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
                Phenomenal Art Gallery
              </h1>

              <p className="body-1 case-study-lead-text">
                An art gallery application for which I performed API testing to
                verify endpoint functionality, response accuracy, data handling,
                and API behavior.
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
                  <p className="title-3 text-wine">API Testing</p>
                </div>
                <div className="quick-meta-card">
                  <span className="caption-3 text-burgundy">TOOLS</span>
                  <p className="title-3 text-wine">Postman, Swagger</p>
                </div>
              </div>
            </div>

            {/* Hero Diagram Visual Showcase */}
            <div className="case-study-visual-frame">
              <img
                src="/assets/images/phenomenal-art-gallery.jpg"
                alt="Phenomenal Art Gallery"
                className="case-study-diagram"
                width={1024}
                height={558}
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
                    <h3 className="title-1 text-wine">Endpoints &amp; HTTP Methods</h3>
                    <p className="body-3 text-secondary">
                      Verified endpoint functionality across GET, POST, PUT, PATCH, and DELETE operations.
                    </p>
                  </div>

                  <div className="module-card">
                    <h3 className="title-1 text-wine">Request &amp; Input Validations</h3>
                    <p className="body-3 text-secondary">
                      Tested valid and invalid payloads, parameter boundaries, required fields, and error states.
                    </p>
                  </div>

                  <div className="module-card">
                    <h3 className="title-1 text-wine">Response &amp; Schema Verification</h3>
                    <p className="body-3 text-secondary">
                      Verified HTTP status codes, response headers, JSON bodies, and structure consistency.
                    </p>
                  </div>

                  <div className="module-card">
                    <h3 className="title-1 text-wine">Data Handling &amp; Negative Testing</h3>
                    <p className="body-3 text-secondary">
                      Validated CRUD data flow, edge cases, missing parameters, and error handling resilience.
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
                      Executed API test cases using Postman and Swagger.
                    </li>
                    <li>
                      Validated API responses, status codes, and data accuracy.
                    </li>
                    <li>
                      Tested positive and negative scenarios.
                    </li>
                    <li>
                      Identified and documented API defects.
                    </li>
                    <li>
                      Verified request and response behavior across endpoints.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Navigation Footer */}
        <section className="section case-study-next-nav bg-secondary">
          <div className="container">
            <div className="next-nav-wrapper">
              <div className="next-nav-info">
                <span className="caption-3 text-burgundy">
                  PORTFOLIO SHOWCASE
                </span>
                <h2 className="heading-3 text-wine">
                  All Case Studies Explored
                </h2>
                <p className="body-3 text-secondary">
                  You have reached the end of the featured QA project case studies.
                  Return to the main portfolio to explore more skills and experience.
                </p>
              </div>
              <div className="next-nav-actions">
                <Link
                  href="/#projects"
                  className="btn btn-primary button-md"
                >
                  <svg
                    width="15"
                    height="15"
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
