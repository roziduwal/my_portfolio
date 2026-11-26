"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface ProjectItem {
  id: string;
  badge: string;
  title: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  link: string;
  description: string;
}

const projects: ProjectItem[] = [
  {
    id: "rms",
    badge: "Restaurant System",
    title: "RestroSphere",
    image: "/assets/images/restrosphere.jpg",
    imageAlt: "RestroSphere: Restaurant Management System",
    imageWidth: 800,
    imageHeight: 520,
    link: "/project-rms",
    description:
      "A restaurant management system I tested across multiple modules and user roles, focusing on functionality, validations, data accuracy, and workflow consistency.",
  },
  {
    id: "ecommerce",
    badge: "E-Commerce",
    title: "The Khwopa",
    image: "/assets/images/the-khwopa.jpg",
    imageAlt: "The Khwopa",
    imageWidth: 800,
    imageHeight: 520,
    link: "/project-ecommerce",
    description:
      "An e-commerce website I tested across customer-facing and admin functionalities, focusing on shopping workflows, validations, data integrity, and end-to-end functionality.",
  },
  {
    id: "ams",
    badge: "Attendance System",
    title: "Trackora",
    image: "/assets/images/trackora.png",
    imageAlt: "Trackora",
    imageWidth: 825,
    imageHeight: 395,
    link: "/project-ams",
    description:
      "An attendance management system I tested, focusing on attendance tracking, shift scheduling, leave management, validations, and workflow accuracy.",
  },
  {
    id: "art-gallery",
    badge: "E-Commerce",
    title: "Phenomenal Art Gallery",
    image: "/assets/images/phenomenal-art-gallery.jpg",
    imageAlt: "Phenomenal Art Gallery",
    imageWidth: 1024,
    imageHeight: 558,
    link: "/project-art-gallery",
    description:
      "An art gallery application for which I performed API testing to verify endpoint functionality, response accuracy, data handling, and API behavior.",
  },
];

export default function ProjectsSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const getCardStep = useCallback(() => {
    if (!trackRef.current) return 300;
    const cards = trackRef.current.querySelectorAll(".project-card");
    if (cards.length > 1) {
      return (cards[1] as HTMLElement).offsetLeft - (cards[0] as HTMLElement).offsetLeft;
    }
    return (cards[0] as HTMLElement)?.offsetWidth || 300;
  }, []);

  const updateUI = useCallback(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const scrollLeft = Math.round(track.scrollLeft);
    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
    const cards = track.querySelectorAll(".project-card");

    let closestIndex = 0;
    let minDiff = Infinity;
    cards.forEach((card, i) => {
      const diff = Math.abs((card as HTMLElement).offsetLeft - scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = i;
      }
    });

    const atEnd = maxScroll > 0 && scrollLeft >= maxScroll - 10;
    const atStart = scrollLeft <= 10;

    setIsAtStart(atStart);
    setIsAtEnd(atEnd);
    setCurrentIndex(atEnd ? projects.length - 1 : closestIndex);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateUI, 40);
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateUI);
    updateUI();

    return () => {
      clearTimeout(timeoutId);
      track.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateUI);
    };
  }, [updateUI]);

  const scrollToCard = (index: number) => {
    if (!trackRef.current || index < 0 || index >= projects.length) return;
    const cards = trackRef.current.querySelectorAll(".project-card");
    const targetCard = cards[index] as HTMLElement;
    if (!targetCard) return;

    const maxScroll = Math.max(0, trackRef.current.scrollWidth - trackRef.current.clientWidth);
    const targetLeft = Math.min(targetCard.offsetLeft, maxScroll);
    trackRef.current.scrollTo({
      left: targetLeft,
      behavior: "smooth",
    });
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!trackRef.current) return;
    const step = getCardStep();
    trackRef.current.scrollTo({
      left: Math.max(0, trackRef.current.scrollLeft - step),
      behavior: "smooth",
    });
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!trackRef.current) return;
    const step = getCardStep();
    const maxScroll = Math.max(0, trackRef.current.scrollWidth - trackRef.current.clientWidth);
    trackRef.current.scrollTo({
      left: Math.min(maxScroll, trackRef.current.scrollLeft + step),
      behavior: "smooth",
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!trackRef.current) return;
    const maxScroll = Math.max(0, trackRef.current.scrollWidth - trackRef.current.clientWidth);
    if (e.key === "ArrowRight") {
      if (trackRef.current.scrollLeft < maxScroll - 5) {
        e.preventDefault();
        trackRef.current.scrollTo({
          left: Math.min(maxScroll, trackRef.current.scrollLeft + getCardStep()),
          behavior: "smooth",
        });
      }
    } else if (e.key === "ArrowLeft") {
      if (trackRef.current.scrollLeft > 5) {
        e.preventDefault();
        trackRef.current.scrollTo({
          left: Math.max(0, trackRef.current.scrollLeft - getCardStep()),
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      {/* Projects Slider Container with Left and Right Arrows */}
      <div className="projects-slider-container">
        {/* Left Arrow Button (<) */}
        <button
          type="button"
          className="project-slider-arrow project-slider-prev"
          id="project-prev-btn"
          aria-label="Previous project"
          title="Previous project"
          disabled={isAtStart}
          aria-disabled={isAtStart}
          onClick={handlePrev}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* Horizontal Slider Wrapper and Track */}
        <div className="projects-slider-wrapper">
          <div
            className="projects-slider-track"
            id="projects-track"
            ref={trackRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Featured QA Projects"
            tabIndex={0}
            onKeyDown={handleKeyDown}
          >
            {projects.map((project) => (
              <article
                key={project.id}
                className="project-card"
                aria-label={project.title}
              >
                <div className="project-card-thumb-wrapper">
                  <span className="project-badge-floating">{project.badge}</span>
                  <Link
                    href={project.link}
                    className="project-card-thumb-link"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="project-card-thumb-img"
                      width={project.imageWidth}
                      height={project.imageHeight}
                      loading="lazy"
                    />
                  </Link>
                </div>
                <div className="project-card-body">
                  <div className="project-card-title-row">
                    <h3 className="heading-4 project-card-small-title">
                      <Link href={project.link} className="project-title-link">
                        {project.title}
                      </Link>
                    </h3>
                    <Link
                      href={project.link}
                      className="project-card-arrow-btn"
                      aria-label={`View case study for ${project.title}`}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Link>
                  </div>
                  <p className="body-3 project-card-desc">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Right Arrow Button (>) */}
        <button
          type="button"
          className="project-slider-arrow project-slider-next"
          id="project-next-btn"
          aria-label="Next project"
          title="Next project"
          disabled={isAtEnd}
          aria-disabled={isAtEnd}
          onClick={handleNext}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      {/* Pagination Dots Indicator */}
      <div className="projects-pagination-wrapper">
        <div
          className="projects-pagination"
          id="projects-pagination"
          role="tablist"
          aria-label="Project slide navigation"
        >
          {projects.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`project-dot ${i === currentIndex ? "active" : ""}`}
              role="tab"
              aria-selected={i === currentIndex}
              aria-label={`Slide ${i + 1} of ${projects.length}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToCard(i);
              }}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
}
