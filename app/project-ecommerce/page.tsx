import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CaseStudyFooter from "@/components/CaseStudyFooter";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "The Khwopa | QA Case Study | Rojina Duwal",
  description:
    "An e-commerce website I tested across customer-facing and admin functionalities, focusing on shopping workflows, validations, data integrity, and end-to-end functionality.",
};

export default function ProjectEcommercePage() {
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
                The Khwopa
              </h1>

              <p className="body-1 case-study-lead-text">
                An e-commerce website I tested across customer-facing and admin
                functionalities, focusing on shopping workflows, validations,
                data integrity, and end-to-end functionality.
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
                src="/assets/images/the-khwopa.jpg"
                alt="The Khwopa: E-Commerce Storefront"
                className="case-study-diagram"
                width={1024}
                height={530}
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Section: Customer Side Testing */}
        <section className="section case-study-section bg-secondary">
          <div className="container">
            <div className="case-study-content-grid">
              <div className="case-study-col-sidebar">
                <span className="editorial-kicker">CUSTOMER PORTAL</span>
                <h2 className="heading-3">Customer Side Testing</h2>
              </div>

              <div className="case-study-col-main">
                <div className="case-study-modules-list">
                  <div className="module-card">
                    <h3 className="title-1 text-wine">User Authentication &amp; Profile</h3>
                    <p className="body-3 text-secondary">
                      Sign-up, login, password recovery, session handling, profile updates, and form validations.
                    </p>
                  </div>

                  <div className="module-card">
                    <h3 className="title-1 text-wine">Product Catalog &amp; Wishlist</h3>
                    <p className="body-3 text-secondary">
                      Product listings, category navigation, detailed specifications, and wishlist operations.
                    </p>
                  </div>

                  <div className="module-card">
                    <h3 className="title-1 text-wine">Cart &amp; Checkout Workflows</h3>
                    <p className="body-3 text-secondary">
                      Cart operations, quantity updates, dynamic calculations, address validation, and payment processing.
                    </p>
                  </div>

                  <div className="module-card">
                    <h3 className="title-1 text-wine">Order History &amp; Support</h3>
                    <p className="body-3 text-secondary">
                      Order placement, tracking, historical records, and contact inquiry submissions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Admin Side Testing */}
        <section className="section case-study-section bg-cream">
          <div className="container">
            <div className="case-study-content-grid">
              <div className="case-study-col-sidebar">
                <span className="editorial-kicker">ADMIN PORTAL</span>
                <h2 className="heading-3">Admin Side Testing</h2>
              </div>

              <div className="case-study-col-main">
                <div className="case-study-modules-list">
                  <div className="module-card">
                    <h3 className="title-1 text-wine">Admin Authentication &amp; User Roles</h3>
                    <p className="body-3 text-secondary">
                      Admin login, user management, role assignments, and granular permission controls.
                    </p>
                  </div>

                  <div className="module-card">
                    <h3 className="title-1 text-wine">Catalog &amp; Variant Management</h3>
                    <p className="body-3 text-secondary">
                      Product CRUD operations, category structures, and variant configuration workflows.
                    </p>
                  </div>

                  <div className="module-card">
                    <h3 className="title-1 text-wine">Inventory &amp; Stock Tracking</h3>
                    <p className="body-3 text-secondary">
                      Stock level updates, inventory tracking, restock thresholds, and quantity validation.
                    </p>
                  </div>

                  <div className="module-card">
                    <h3 className="title-1 text-wine">Order &amp; Shipment Fulfillment</h3>
                    <p className="body-3 text-secondary">
                      Order processing, status updates, shipment dispatching, and tracking workflows.
                    </p>
                  </div>

                  <div className="module-card">
                    <h3 className="title-1 text-wine">Discounts &amp; Promotion Rules</h3>
                    <p className="body-3 text-secondary">
                      Discount code creation, coupon validation rules, price reductions, and scheduling.
                    </p>
                  </div>

                  <div className="module-card">
                    <h3 className="title-1 text-wine">Payments, Returns &amp; Feedback</h3>
                    <p className="body-3 text-secondary">
                      Payment records, return request processing, status updates, and customer testimonial management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: My Contributions */}
        <section className="section case-study-section bg-secondary">
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
                      Designed and executed test cases for customer and admin workflows.
                    </li>
                    <li>
                      Performed functional, regression, UI, and end-to-end testing.
                    </li>
                    <li>
                      Tested positive, negative, boundary, and edge-case scenarios.
                    </li>
                    <li>
                      Identified, documented, tracked, and retested defects.
                    </li>
                    <li>
                      Verified data consistency between customer and admin sides.
                    </li>
                    <li>
                      Tested form validations, calculations, and business rules.
                    </li>
                    <li>
                      Conducted cross-browser and responsive testing.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Case Study Navigation Footer */}
        <section className="section case-study-next-nav bg-cream">
          <div className="container">
            <div className="next-nav-wrapper">
              <div className="next-nav-info">
                <span className="caption-3 text-burgundy">
                  NEXT QA CASE STUDY
                </span>
                <h2 className="heading-3 text-wine">
                  Trackora
                </h2>
                <p className="body-3 text-secondary">
                  An attendance management system I tested, focusing on
                  attendance tracking, shift scheduling, leave management,
                  validations, and workflow accuracy.
                </p>
              </div>
              <div className="next-nav-actions">
                <Link
                  href="/project-ams"
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
