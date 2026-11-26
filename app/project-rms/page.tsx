import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CaseStudyFooter from "@/components/CaseStudyFooter";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title:
    "RestroSphere: Restaurant Management System | QA Case Study | Rojina Duwal",
  description:
    "A restaurant management system I tested across multiple modules and user roles, focusing on functionality, validations, data accuracy, and workflow consistency.",
};

export default function ProjectRmsPage() {
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
                  RESTAURANT MANAGEMENT SYSTEM
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
                RestroSphere
              </h1>

              <p className="body-1 case-study-lead-text">
                A restaurant management system I tested across multiple modules
                and user roles, focusing on functionality, validations, data
                accuracy, and workflow consistency.
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
                    Manual, Functional, Regression &amp; Integration Testing
                  </p>
                </div>
                <div className="quick-meta-card">
                  <span className="caption-3 text-burgundy">TOOLS</span>
                  <p className="title-3 text-wine">
                    Trello, Postman, DevTools
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Diagram Visual Showcase */}
            <div className="case-study-visual-frame">
              <img
                src="/assets/images/restrosphere.jpg"
                alt="RestroSphere: Restaurant Management System"
                className="case-study-diagram"
                width={1024}
                height={528}
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
                    <h3 className="title-1 text-wine">Table &amp; Order Management</h3>
                    <p className="body-3 text-secondary">
                      Order workflows, checkout, table operations, order transfers, merging, and status consistency.
                    </p>
                  </div>

                  <div className="module-card">
                    <h3 className="title-1 text-wine">Billing, Payments &amp; Accounts</h3>
                    <p className="body-3 text-secondary">
                      Payment calculations, partial settlements, discounts, invoice accuracy, and credit transactions.
                    </p>
                  </div>

                  <div className="module-card">
                    <h3 className="title-1 text-wine">Inventory &amp; Stock Tracking</h3>
                    <p className="body-3 text-secondary">
                      Stock updates, ingredient deductions, inventory calculations, item tracking, and data consistency.
                    </p>
                  </div>

                  <div className="module-card">
                    <h3 className="title-1 text-wine">Finance &amp; Sales Reports</h3>
                    <p className="body-3 text-secondary">
                      Revenue calculations, date range filters, sales reconciliation, and financial transaction accuracy.
                    </p>
                  </div>

                  <div className="module-card">
                    <h3 className="title-1 text-wine">Staff &amp; Permission Controls</h3>
                    <p className="body-3 text-secondary">
                      Staff records, user management, role assignments, granular access control, and permissions.
                    </p>
                  </div>

                  <div className="module-card">
                    <h3 className="title-1 text-wine">Shop Setup &amp; Admin Portals</h3>
                    <p className="body-3 text-secondary">
                      Store onboarding configurations, owner dashboard analytics, super admin workflows, and customer records.
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
                      Designed and executed test cases across multiple modules and user roles.
                    </li>
                    <li>
                      Performed functional, regression, integration, and UI testing.
                    </li>
                    <li>
                      Tested positive, negative, boundary, and edge-case scenarios.
                    </li>
                    <li>
                      Identified, documented, and retested defects.
                    </li>
                    <li>
                      Conducted API testing using Postman.
                    </li>
                    <li>
                      Verified data consistency across interconnected modules.
                    </li>
                    <li>
                      Tested responsive layouts and cross-browser compatibility.
                    </li>
                    <li>
                      Prepared feature documentation for Finance and Inventory modules.
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
                  The Khwopa
                </h2>
                <p className="body-3 text-secondary">
                  An e-commerce website I tested across customer-facing and admin
                  functionalities, focusing on shopping workflows, validations,
                  data integrity, and end-to-end functionality.
                </p>
              </div>
              <div className="next-nav-actions">
                <Link
                  href="/project-ecommerce"
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
