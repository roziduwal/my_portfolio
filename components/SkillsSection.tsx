"use client";

import React, { useState } from "react";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<"competencies" | "toolset">(
    "competencies"
  );

  return (
    <section
      id="expertise"
      className="section expertise-section bg-secondary reveal-on-scroll"
      aria-labelledby="expertise-heading"
    >
      <div className="container">
        <div className="section-header text-center">
          <span className="editorial-kicker">Skills &amp; Toolset</span>
          <h2 id="expertise-heading" className="heading-2">
            Skills &amp; Testing Toolset
          </h2>
          <p
            className="section-intro-text body-2"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            Quality assurance competencies, testing methodologies, and tools
            aligned with my practical testing experience.
          </p>
        </div>

        {/* Segmented Tab Navigation */}
        <div className="skills-tab-control-wrap">
          <div
            className="skills-tab-control"
            role="tablist"
            aria-label="Skills & Toolset Navigation"
          >
            <button
              type="button"
              className={`skills-tab-btn ${
                activeTab === "competencies" ? "is-active" : ""
              }`}
              id="tab-btn-competencies"
              role="tab"
              aria-selected={activeTab === "competencies"}
              aria-controls="card-competencies"
              onClick={() => setActiveTab("competencies")}
            >
              <svg
                className="skills-tab-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
              <span>Core Competencies</span>
            </button>
            <button
              type="button"
              className={`skills-tab-btn ${
                activeTab === "toolset" ? "is-active" : ""
              }`}
              id="tab-btn-toolset"
              role="tab"
              aria-selected={activeTab === "toolset"}
              aria-controls="card-toolset"
              onClick={() => setActiveTab("toolset")}
            >
              <svg
                className="skills-tab-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
              <span>Tools &amp; Technologies</span>
            </button>
          </div>
        </div>

        {/* Master Dual Cards Container */}
        <div className="skills-mockup-grid">
          {/* Card 1: Core Competencies */}
          <div
            className={`skills-mockup-card competencies-mockup-card ${
              activeTab === "competencies" ? "is-active" : ""
            }`}
            id="card-competencies"
          >
            <div className="mockup-card-header">
              <div className="mockup-header-icon-box code-box">
                <span>&lt;/&gt;</span>
              </div>
              <h3 className="mockup-card-title">Core Competencies</h3>
            </div>

            <div className="competencies-columns-grid">
              {/* Column 1: Testing Methodologies */}
              <div className="competencies-col">
                <h4 className="col-heading">Testing Methodologies</h4>
                <ul className="col-list">
                  <li className="col-list-item">
                    <span className="item-icon-wrap">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path>
                        <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"></path>
                        <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"></path>
                        <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path>
                      </svg>
                    </span>
                    <span className="item-text">Manual Testing</span>
                  </li>
                  <li className="col-list-item">
                    <span className="item-icon-wrap">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path>
                      </svg>
                    </span>
                    <span className="item-text">
                      Functional &amp; Regression Testing
                    </span>
                  </li>
                  <li className="col-list-item">
                    <span className="item-icon-wrap">
                      <svg viewBox="0 0 16 16" fill="currentColor">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                      </svg>
                    </span>
                    <span className="item-text">Smoke &amp; Sanity Testing</span>
                  </li>
                  <li className="col-list-item">
                    <span className="item-icon-wrap">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M19.439 7.85c0-1.571-.944-2.85-2.109-2.85s-2.11 1.279-2.11 2.85c0 .351.047.689.134 1.003L12 8.853v-2c0-1.571-.944-2.85-2.109-2.85s-2.11 1.279-2.11 2.85c0 .351.047.689.134 1.003L4.558 7.85C3.7 7.85 3 8.55 3 9.408v4.739c1.571 0 2.85.944 2.85 2.109s-1.279 2.11-2.85 2.11v2.226c0 .858.7 1.558 1.558 1.558h4.74c0-1.571.944-2.85 2.109-2.85s2.11 1.279 2.11 2.85h2.226c.858 0 1.558-.7 1.558-1.558v-4.74c1.571 0 2.85-.944 2.85-2.109s-1.279-2.11-2.85-2.11v-2.226c0-.858-.7-1.558-1.558-1.558H15.32c.087-.314.134-.652.134-1.003z"></path>
                      </svg>
                    </span>
                    <span className="item-text">Integration Testing</span>
                  </li>
                  <li className="col-list-item">
                    <span className="item-icon-wrap">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect
                          x="2"
                          y="3"
                          width="20"
                          height="14"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                    </span>
                    <span className="item-text">UI/UX Testing</span>
                  </li>
                  <li className="col-list-item">
                    <span className="item-icon-wrap">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                    </span>
                    <span className="item-text">
                      Cross-Browser &amp; Responsive Testing
                    </span>
                  </li>
                </ul>
              </div>

              {/* Column 2: QA Process & Verification */}
              <div className="competencies-col">
                <h4 className="col-heading">QA Process &amp; Verification</h4>
                <ul className="col-list">
                  <li className="col-list-item">
                    <span className="item-icon-wrap">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                        <path d="M9 12h6M9 16h6"></path>
                      </svg>
                    </span>
                    <span className="item-text">
                      Test Case Design &amp; Execution
                    </span>
                  </li>
                  <li className="col-list-item">
                    <span className="item-icon-wrap">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect width="8" height="14" x="8" y="6" rx="4"></rect>
                        <path d="m19 7-3 2M5 7l3 2M19 19l-3-2M5 19l3 2M20 13h-4M4 13h4M10 4l1 2M14 4l-1 2"></path>
                      </svg>
                    </span>
                    <div className="item-text-group">
                      <span className="item-text">Bug Reporting &amp; Tracking</span>
                      <span className="item-subtext">(Jira, Trello)</span>
                    </div>
                  </li>
                  <li className="col-list-item">
                    <span className="item-icon-wrap">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                      </svg>
                    </span>
                    <div className="item-text-group">
                      <span className="item-text">Basic API Testing</span>
                      <span className="item-subtext">(Postman, Swagger)</span>
                    </div>
                  </li>
                  <li className="col-list-item">
                    <span className="item-icon-wrap">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                      </svg>
                    </span>
                    <span className="item-text">Test Documentation</span>
                  </li>
                  <li className="col-list-item">
                    <span className="item-icon-wrap">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polyline points="23 4 23 10 17 10"></polyline>
                        <polyline points="1 20 1 14 7 14"></polyline>
                        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                      </svg>
                    </span>
                    <span className="item-text">SDLC &amp; STLC</span>
                  </li>
                </ul>
              </div>

              {/* Column 3: Technical Knowledge */}
              <div className="competencies-col">
                <h4 className="col-heading">Technical Knowledge</h4>
                <ul className="col-list">
                  <li className="col-list-item">
                    <span className="item-icon-wrap">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                      </svg>
                    </span>
                    <span className="item-text">Basic SQL</span>
                  </li>
                  <li className="col-list-item">
                    <span className="item-icon-wrap">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                    </span>
                    <span className="item-text">Basic JavaScript</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: Practical Toolset */}
          <div
            className={`skills-mockup-card toolset-mockup-card ${
              activeTab === "toolset" ? "is-active" : ""
            }`}
            id="card-toolset"
          >
            <div className="mockup-card-header">
              <div className="mockup-header-icon-box wrench-box">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <h3 className="mockup-card-title">Practical Toolset</h3>
            </div>

            <div className="toolset-grid-layout">
              {/* Cell 1: Bug Tracking */}
              <div className="toolset-cell cell-border-right cell-border-bottom">
                <h4 className="toolset-cell-heading">Bug Tracking</h4>
                <div className="tool-entry">
                  <span className="tool-brand-icon jira-icon">
                    <svg viewBox="0 0 24 24" fill="#0052CC">
                      <path d="M11.53 2c0 2.4 1.97 4.35 4.35 4.35h1.78v1.7c0 2.4 1.94 4.34 4.34 4.35V2.84A.84.84 0 0 0 21.16 2H11.53zm-5.77 5.76c0 2.4 1.96 4.35 4.35 4.35h1.78v1.7c0 2.4 1.94 4.35 4.34 4.35V8.6a.84.84 0 0 0-.84-.84H5.76zm-5.76 5.77c0 2.4 1.97 4.35 4.35 4.35h1.78v1.7c0 2.4 1.94 4.35 4.34 4.35v-9.56a.84.84 0 0 0-.84-.84H0z" />
                    </svg>
                  </span>
                  <span className="tool-name">Jira</span>
                </div>
                <div className="tool-entry">
                  <span className="tool-brand-icon trello-icon">
                    <svg viewBox="0 0 24 24" fill="#0079BF">
                      <path d="M19.5 2h-15A2.5 2.5 0 0 0 2 4.5v15A2.5 2.5 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 19.5 2zm-9 14.5a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 5.5 16.5v-10A1.5 1.5 0 0 1 7 5h2a1.5 1.5 0 0 1 1.5 1.5v10zm8-5a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5v-5A1.5 1.5 0 0 1 15 5h2a1.5 1.5 0 0 1 1.5 1.5v5z" />
                    </svg>
                  </span>
                  <span className="tool-name">Trello</span>
                </div>
              </div>

              {/* Cell 2: API Testing */}
              <div className="toolset-cell cell-border-bottom">
                <h4 className="toolset-cell-heading">API Testing</h4>
                <div className="tool-entry">
                  <span className="tool-brand-icon postman-icon">
                    <svg viewBox="0 0 24 24" fill="#FF6C37">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path
                        d="M14.5 9.5l-5 5M9.5 9.5l5 5"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                  <span className="tool-name">Postman</span>
                </div>
                <div className="tool-entry">
                  <span className="tool-brand-icon swagger-icon">
                    <svg viewBox="0 0 24 24" fill="#85EA2D">
                      <circle cx="12" cy="12" r="10"></circle>
                      <text
                        x="12"
                        y="16"
                        fontSize="11"
                        fontWeight="bold"
                        fill="#000000"
                        textAnchor="middle"
                      >
                        &#123;..&#125;
                      </text>
                    </svg>
                  </span>
                  <span className="tool-name">Swagger</span>
                </div>
              </div>

              {/* Cell 3: Documentation */}
              <div className="toolset-cell cell-border-right cell-border-bottom">
                <h4 className="toolset-cell-heading">Documentation</h4>
                <div className="tool-entry">
                  <span className="tool-brand-icon sheets-icon">
                    <svg viewBox="0 0 24 24" fill="#0F9D58">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 14H6v-2h7v2zm0-4H6v-2h7v2zm0-4H6V7h7v2zm5 8h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V7h4v2z" />
                    </svg>
                  </span>
                  <span className="tool-name">Google Sheets</span>
                </div>
                <div className="tool-entry">
                  <span className="tool-brand-icon excel-icon">
                    <svg viewBox="0 0 24 24" fill="#107C41">
                      <path d="M21.17 3.25Q21.5 3.25 21.75 3.5 22 3.75 22 4.08V19.92Q22 20.25 21.75 20.5 21.5 20.75 21.17 20.75H7.83Q7.5 20.75 7.25 20.5 7 20.25 7 19.92V17H2.83Q2.5 17 2.25 16.75 2 16.5 2 16.17V7.83Q2 7.5 2.25 7.25 2.5 7 2.83 7H7V4.08Q7 3.75 7.25 3.5 7.5 3.25 7.83 3.25M7 15V9H3.5V15M9.5 15.5H11.5L13 12.5 14.5 15.5H16.5L14 11 16.5 6.5H14.5L13 9.5 11.5 6.5H9.5L12 11M20.5 19.25V4.75H8.5V7H17.83Q18.17 7 18.42 7.25 18.67 7.5 18.67 7.83V16.17Q18.67 16.5 18.42 16.75 18.17 17 17.83 17H8.5V19.25Z" />
                    </svg>
                  </span>
                  <span className="tool-name">Excel</span>
                </div>
              </div>

              {/* Cell 4: Browser Testing & Debugging */}
              <div className="toolset-cell cell-border-bottom">
                <h4 className="toolset-cell-heading">
                  Browser Testing &amp; Debugging
                </h4>
                <div className="tool-entry">
                  <span className="tool-brand-icon browser-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2B1810"
                      strokeWidth="2"
                    >
                      <rect
                        x="2"
                        y="3"
                        width="20"
                        height="14"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </span>
                  <div className="tool-text-group">
                    <span className="tool-name">Cross-Browser Testing</span>
                    <span className="tool-subtext">(Chrome, Firefox)</span>
                  </div>
                </div>
                <div className="tool-entry">
                  <span className="tool-brand-icon devtools-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#722F37"
                      strokeWidth="2"
                    >
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                    </svg>
                  </span>
                  <div className="tool-text-group">
                    <span className="tool-name">Browser DevTools</span>
                    <span className="tool-subtext">(Chrome, Firefox)</span>
                  </div>
                </div>
              </div>

              {/* Cell 5: Database */}
              <div className="toolset-cell cell-full-width">
                <h4 className="toolset-cell-heading">Database</h4>
                <div className="tool-entry">
                  <span className="tool-brand-icon postgres-icon">
                    <svg viewBox="0 0 24 24" fill="#336791">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5zm4 4h-2v-6h2v6zm0-8h-2V7h2v1z" />
                    </svg>
                  </span>
                  <span className="tool-name">PostgreSQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Luxury Star Divider Line from Mockup */}
        <div className="mockup-star-divider" aria-hidden="true">
          <span className="star-symbol">&#10022;</span>
        </div>
      </div>
    </section>
  );
}
