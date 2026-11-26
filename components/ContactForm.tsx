"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameInvalid, setNameInvalid] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [messageInvalid, setMessageInvalid] = useState(false);

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error" | "";
    html: string;
  }>({ type: "", html: "" });

  const validateEmail = (val: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(val).toLowerCase());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let isValid = true;

    if (name.trim().length < 2) {
      setNameInvalid(true);
      isValid = false;
    } else {
      setNameInvalid(false);
    }

    if (!validateEmail(email.trim())) {
      setEmailInvalid(true);
      isValid = false;
    } else {
      setEmailInvalid(false);
    }

    if (message.trim().length < 10) {
      setMessageInvalid(true);
      isValid = false;
    } else {
      setMessageInvalid(false);
    }

    if (!isValid) return;

    setLoading(true);
    setFeedback({ type: "", html: "" });

    const subject = `[Portfolio Inquiry] Message from ${name.trim()}`;
    const payload = {
      name: name.trim(),
      email: email.trim(),
      _subject: subject,
      message: message.trim(),
      _template: "table",
      _captcha: "false",
    };

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/roziduwal1@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json().catch(() => ({}));

      if (
        response.ok &&
        (data.success === "true" ||
          data.success === true ||
          response.status === 200)
      ) {
        setName("");
        setEmail("");
        setMessage("");
        setFeedback({
          type: "success",
          html: "Thank you! Your message has been sent successfully to <strong>roziduwal1@gmail.com</strong>. Rojina will review your inquiry shortly.",
        });
        setTimeout(() => {
          setFeedback({ type: "", html: "" });
        }, 9000);
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      console.warn("FormSubmit endpoint error, providing direct mailto fallback:", err);
      const mailtoUrl = `mailto:roziduwal1@gmail.com?subject=${encodeURIComponent(
        payload._subject
      )}&body=${encodeURIComponent(
        "From: " + payload.name + " (" + payload.email + ")\n\n" + payload.message
      )}`;
      setFeedback({
        type: "error",
        html: `Unable to send automatically via network. <a href="${mailtoUrl}" style="color: #fff; text-decoration: underline; font-weight: 600;">Click here to send directly to roziduwal1@gmail.com via your email client</a>.`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form-col">
      <h3
        className="heading-4"
        style={{ color: "var(--color-light-text)", marginBottom: "24px" }}
      >
        Send an Inquiry
      </h3>

      <form id="contact-form" className="contact-form" noValidate onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="form-name" className="form-label">
            Name *
          </label>
          <input
            type="text"
            id="form-name"
            className={`form-input ${nameInvalid ? "is-invalid" : ""}`}
            placeholder="e.g. Eleanor Vance"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (nameInvalid) setNameInvalid(false);
            }}
          />
          <span className="form-error-msg">Please enter your name.</span>
        </div>

        <div className="form-group">
          <label htmlFor="form-email" className="form-label">
            Email *
          </label>
          <input
            type="email"
            id="form-email"
            className={`form-input ${emailInvalid ? "is-invalid" : ""}`}
            placeholder="e.g. eleanor@company.com"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (emailInvalid) setEmailInvalid(false);
            }}
          />
          <span className="form-error-msg">Please enter a valid email address.</span>
        </div>

        <div className="form-group">
          <label htmlFor="form-message" className="form-label">
            Message *
          </label>
          <textarea
            id="form-message"
            className={`form-textarea ${messageInvalid ? "is-invalid" : ""}`}
            rows={4}
            placeholder="Detail your project scope, testing needs, or role overview..."
            required
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              if (messageInvalid) setMessageInvalid(false);
            }}
          ></textarea>
          <span className="form-error-msg">
            Please enter a message (at least 10 characters).
          </span>
        </div>

        <button
          type="submit"
          id="form-submit-btn"
          className="btn btn-gold button-md"
          disabled={loading}
        >
          <span>{loading ? "Sending Message..." : "Send Message"}</span>
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
        </button>

        {feedback.type ? (
          <div
            id="form-feedback"
            className={`form-feedback ${
              feedback.type === "success"
                ? "is-success"
                : feedback.type === "error"
                ? "is-error"
                : ""
            }`}
            style={{ display: "block" }}
            role="alert"
            aria-live="polite"
            dangerouslySetInnerHTML={{ __html: feedback.html }}
          />
        ) : (
          <div
            id="form-feedback"
            className="form-feedback"
            style={{ display: "none" }}
            role="alert"
            aria-live="polite"
          />
        )}
      </form>
    </div>
  );
}
