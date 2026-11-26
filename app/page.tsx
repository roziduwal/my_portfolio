import React from "react";
import Navbar from "@/components/Navbar";
import HeroCta from "@/components/HeroCta";
import ProjectsSlider from "@/components/ProjectsSlider";
import SkillsSection from "@/components/SkillsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Primary Main Content */}
      <main id="main-content">
        {/* ======================================================================
             SECTION 2: HERO / INTRODUCTION
             ====================================================================== */}
        <section
          id="hero"
          className="section hero-section bg-cream"
          aria-labelledby="hero-heading"
        >
          {/* Left Corner Organic Waves (Box 1 in design) */}
          <div className="hero-bg-left-waves" aria-hidden="true"></div>

          {/* Right Side Background: Sun Disc, Pagoda Temples & Dune Waves (Box 3 in design) */}
          <div className="hero-bg-temple-composition" aria-hidden="true"></div>

          <div className="container">
            <div className="hero-grid">
              {/* Left Column: Editorial Typography & CTAs */}
              <div className="hero-content">
                <span className="editorial-kicker hero-kicker">QA Engineer</span>

                <h1 id="hero-heading" className="heading-1 hero-title">
                  ROJINA DUWAL
                </h1>

                <p className="hero-description body-1">
                  Passionate about uncovering hidden issues and making digital
                  experiences more reliable.
                </p>

                <HeroCta />
              </div>

              {/* Right Column: Hero Visual Frame */}
              <div className="hero-visual-wrapper">
                <div className="hero-editorial-frame">
                  {/* Playful Radiance / Sparkle Accent Ticks (as highlighted in design) */}
                  <div className="hero-sparkle-accent" aria-hidden="true">
                    <svg
                      width="46"
                      height="46"
                      viewBox="0 0 46 46"
                      fill="none"
                      stroke="currentColor"
                    >
                      {/* Top steep tick */}
                      <line
                        x1="33"
                        y1="6"
                        x2="38"
                        y2="18"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                      />
                      {/* Middle diagonal tick */}
                      <line
                        x1="12"
                        y1="14"
                        x2="29"
                        y2="24"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                      />
                      {/* Bottom horizontal tick */}
                      <line
                        x1="6"
                        y1="36"
                        x2="28"
                        y2="36"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <div className="hero-frame-media">
                    <img
                      src="/assets/images/hero-typing.gif"
                      alt="Animated visual of Rojina Duwal testing software applications"
                      className="hero-portrait-img"
                      width={1280}
                      height={720}
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================================
             ABOUT ME SECTION
             ====================================================================== */}
        <section
          id="about"
          className="section about-section bg-secondary reveal-on-scroll"
          aria-labelledby="about-heading"
        >
          <div className="container">
            <div className="section-header text-center">
              <span className="editorial-kicker">Get to Know Me</span>
              <h2 id="about-heading" className="heading-2">
                A Little About Me
              </h2>
            </div>

            <div className="about-grid">
              {/* Left: Narrative Story */}
              <div className="about-narrative">
                <p className="body-2 about-p">
                  I&apos;m passionate about understanding how software works,
                  exploring different possibilities, and finding issues that
                  might go unnoticed. My journey in Quality Assurance has given
                  me hands-on experience in software testing, test case design,
                  defect identification, and functional verification.
                </p>
                <p className="body-2 about-p">
                  I enjoy approaching problems from a user&apos;s perspective,
                  paying attention to details, and continuously learning new
                  tools and testing techniques to grow as a QA Engineer.
                </p>
              </div>

              {/* Right: What Defines Me Card */}
              <div className="about-profile-card about-defines-card">
                <h3 className="heading-4 about-defines-title">
                  What Defines Me
                </h3>
                <ul className="about-pillars-list" role="list">
                  <li className="about-pillar-item">
                    <svg
                      className="pillar-icon"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="title-3 pillar-title">
                      Attention to Detail
                    </span>
                  </li>
                  <li className="about-pillar-item">
                    <svg
                      className="pillar-icon"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.001z" />
                    </svg>
                    <span className="title-3 pillar-title">
                      Analytical Thinking
                    </span>
                  </li>
                  <li className="about-pillar-item">
                    <svg
                      className="pillar-icon"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="title-3 pillar-title">Problem Solving</span>
                  </li>
                  <li className="about-pillar-item">
                    <svg
                      className="pillar-icon"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a10.978 10.978 0 00-.25 2.57c0 .884.09 1.748.261 2.58a1 1 0 00.976.8 1 1 0 00.976-.8A9.018 9.018 0 017 10.621c0-.447.03-.889.088-1.325l2.912 1.248a1 1 0 00.788 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01-.25-2.57c0-.528.04-1.044.11-1.543l.39.162zM12 15.657l3.89-.972a1 1 0 00.758-.97v-3.33l-4 1.714v3.558z" />
                    </svg>
                    <span className="title-3 pillar-title">
                      Continuous Learning
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================================
             SECTION 3: FEATURED QA PROJECTS (Horizontal Carousel Slider)
             ====================================================================== */}
        <section
          id="projects"
          className="section projects-section bg-cream reveal-on-scroll"
          aria-labelledby="projects-heading"
        >
          <div className="container">
            <div className="section-header text-center">
              <span className="editorial-kicker">MY WORK</span>
              <h2 id="projects-heading" className="heading-2">
                Projects &amp; Testing Experience
              </h2>
              <p
                className="section-intro-text body-2"
                style={{ marginLeft: "auto", marginRight: "auto" }}
              >
                A collection of real-world projects showcasing my QA experience,
                testing activities, practical contributions, and approach to
                identifying software defects.
              </p>
            </div>

            <ProjectsSlider />
          </div>
        </section>

        {/* ======================================================================
             SECTION 4: TESTING EXPERTISE & TECHNICAL SKILLS
             ====================================================================== */}
        <SkillsSection />

        {/* ======================================================================
             SECTION 5: PROFESSIONAL EXPERIENCE (My Career Journey Dual Cards)
             ====================================================================== */}
        <section
          id="experience"
          className="section experience-section bg-cream reveal-on-scroll"
          aria-labelledby="experience-heading"
        >
          <div className="container">
            <div className="section-header text-center">
              <span className="editorial-kicker">Professional Experience</span>
              <h2 id="experience-heading" className="heading-2">
                My Career Journey
              </h2>
            </div>

            <div className="career-journey-grid">
              {/* Career Card 1: QA Engineer */}
              <article
                className="career-card"
                aria-label="Infotraid Technology QA Engineer experience"
              >
                <div className="career-card-header">
                  <div className="career-card-meta">
                    <h3 className="career-company-name">
                      Infotraid Technology Pvt. Ltd.
                    </h3>
                    <span className="career-role-title">QA Engineer</span>
                  </div>
                  <div className="career-date-badge">
                    <svg
                      className="career-calendar-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>Jul 2026 – Present</span>
                  </div>
                </div>

                <p className="career-desc-line">
                  Performed manual and API testing, defect tracking, and feature
                  documentation for web applications.
                </p>
              </article>

              {/* Career Card 2: QA Intern */}
              <article
                className="career-card"
                aria-label="Infotraid Technology QA Intern experience"
              >
                <div className="career-card-header">
                  <div className="career-card-meta">
                    <h3 className="career-company-name">
                      Infotraid Technology Pvt. Ltd.
                    </h3>
                    <span className="career-role-title">QA Intern</span>
                  </div>
                  <div className="career-date-badge">
                    <svg
                      className="career-calendar-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>Feb 2026 – May 2026</span>
                  </div>
                </div>

                <p className="career-desc-line">
                  Designed and executed test cases, conducted functional
                  testing, and reported bugs.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ======================================================================
             SECTION 6: EDUCATION
             ====================================================================== */}
        <section
          id="education"
          className="section education-section bg-secondary reveal-on-scroll"
          aria-labelledby="education-heading"
        >
          <div className="container">
            <div className="section-header text-center">
              <span className="editorial-kicker">Academic Foundation</span>
              <h2 id="education-heading" className="heading-2">
                Education
              </h2>
            </div>

            <div className="education-card-wrapper">
              <article
                className="career-card education-card"
                aria-label="Bachelor of Information Management at Bhaktapur Multiple Campus"
              >
                <div className="career-card-header education-card-header">
                  <div className="career-card-meta">
                    <h3 className="career-company-name">
                      Bachelor of Information Management (BIM)
                    </h3>
                    <span className="career-role-title">
                      Bhaktapur Multiple Campus, Tribhuvan University
                    </span>
                  </div>
                  <div className="career-date-badge">
                    <svg
                      className="career-calendar-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>2021 – 2026</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ======================================================================
             SECTION 7: CONTACT (Luxury Deep Wine / Burgundy Editorial)
             ====================================================================== */}
        <section
          id="contact"
          className="section contact-section bg-wine reveal-on-scroll"
          aria-labelledby="contact-heading"
        >
          <div className="container">
            <div className="contact-grid">
              {/* Left: Contact Details & Context */}
              <div className="contact-info-col">
                <div>
                  <span className="editorial-kicker">GET IN TOUCH</span>
                  <h2
                    id="contact-heading"
                    className="heading-2 contact-title"
                  >
                    Let&apos;s discuss software quality.
                  </h2>
                  <p className="body-2 contact-lead">
                    Open to new opportunities, meaningful collaborations, and
                    conversations about building better software.
                  </p>

                  <hr
                    className="contact-divider"
                    style={{
                      border: "none",
                      borderTop: "1px solid rgba(255, 255, 255, 0.14)",
                      margin: "24px 0 28px 0",
                      width: "100%",
                    }}
                  />

                  <div className="contact-details-list">
                    {/* Location */}
                    <div className="contact-detail-item">
                      <div className="contact-detail-icon" aria-hidden="true">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </div>
                      <div className="contact-detail-content">
                        <span className="contact-detail-label">LOCATION</span>
                        <span className="contact-detail-value">
                          Bhaktapur, Nepal
                        </span>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="contact-detail-item">
                      <div className="contact-detail-icon" aria-hidden="true">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </div>
                      <div className="contact-detail-content">
                        <span className="contact-detail-label">EMAIL</span>
                        <a
                          href="mailto:roziduwal1@gmail.com"
                          className="contact-detail-value"
                        >
                          roziduwal1@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* LinkedIn */}
                    <div className="contact-detail-item">
                      <div className="contact-detail-icon" aria-hidden="true">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </div>
                      <div className="contact-detail-content">
                        <span className="contact-detail-label">LINKEDIN</span>
                        <a
                          href="https://www.linkedin.com/in/rojina-duwal"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="contact-detail-value"
                        >
                          www.linkedin.com/in/rojina-duwal
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Validated Editorial Contact Form */}
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollReveal />
    </>
  );
}
