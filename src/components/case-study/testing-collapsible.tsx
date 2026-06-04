"use client";

import { useState } from "react";

export function TestingCollapsible() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginTop: "3rem", marginBottom: "1rem" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "none",
          border: "1px solid var(--border)",
          borderRadius: "0.5rem",
          cursor: "pointer",
          padding: "0.75rem 1.25rem",
          color: "var(--text)",
          fontFamily: "var(--font-sans)",
          fontSize: "0.9rem",
          fontWeight: 500,
          letterSpacing: "0.01em",
          transition: "border-color 0.15s ease",
        }}
      >
        See full testing details
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
            flexShrink: 0,
          }}
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div style={{ marginTop: "2.5rem" }}>

          {/* Subsection 1 */}
          <div>
            <h3 className="cs-subsection-heading">
              Testing assumptions before building anything
            </h3>
            <p className="cs-subsection-body">
              Before designing a single screen I ran two pretotyping experiments
              to test the riskiest assumptions in the product.
            </p>

            <div
              style={{
                marginTop: "1.5rem",
                paddingLeft: "1.25rem",
                borderLeft: "2px solid var(--border)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.09em",
                  color: "var(--text-muted)",
                  marginBottom: "0.5rem",
                }}
              >
                Fake Front Door
              </p>
              <p className="cs-subsection-body">
                I built a landing page to test whether homeowners would actually
                want to use a product like this. The threshold for success was
                10% email signups. 36% of visitors signed up. That told me the
                demand was real enough to design for.
              </p>
              <img
                src="/images/urbanpark/pretotype-fakefrontdoor.jpg"
                alt="Fake Front Door pretotype landing page"
                style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px", marginTop: "1rem" }}
              />
            </div>

            <div
              style={{
                marginTop: "1.5rem",
                paddingLeft: "1.25rem",
                borderLeft: "2px solid var(--border)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.09em",
                  color: "var(--text-muted)",
                  marginBottom: "0.5rem",
                }}
              >
                Mechanical Turk
              </p>
              <p className="cs-subsection-body">
                I tested whether homeowners could naturally position a home
                security camera to capture a readable license plate without
                technical guidance. 2 out of 3 participants captured a readable
                plate under daylight. The third could not in low light. That
                limitation directly informed the design: the app now prompts
                floodlight cameras as a default and offers alternate verification
                through car color, make, and model as a fallback.
              </p>
              <img
                src="/images/urbanpark/pretotype-mechanicalturk.jpg"
                alt="Mechanical Turk pretotype camera placement test"
                style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px", marginTop: "1rem" }}
              />
            </div>
          </div>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid var(--border)",
              margin: "2.5rem 0",
            }}
          />

          {/* Subsection 2 */}
          <div>
            <h3 className="cs-subsection-heading">
              Testing with the right homeowners
            </h3>
            <p className="cs-subsection-body">
              I ran usability testing with 5 homeowners who had prior experience
              renting out their driveways or garages. Participants walked through
              four key flows: listing a space, reviewing renter details, approving
              a booking, and interpreting verification signals.
            </p>
            <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
              Two issues surfaced consistently. Homeowners could not find the
              availability calendar without prompting. It was buried in the
              listing setup flow rather than surfaced on the main dashboard.
              Calendar management is a recurring task, not a one time setup step.
              The calendar was moved to a persistent dashboard module.
            </p>
            <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
              Renter profile information was not accessible at the point of
              decision. When homeowners reached the booking approval screen, the
              renter details they needed were one tap away but not visible by
              default. The approval screen was redesigned to surface verification
              status, vehicle details, and renter history inline.
            </p>
            <img
              src="/images/urbanpark/usability-testing.jpg"
              alt="Usability testing session with homeowner participants"
              style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px", marginTop: "1rem" }}
            />
          </div>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid var(--border)",
              margin: "2.5rem 0",
            }}
          />

          {/* Subsection 3 */}
          <div>
            <h3 className="cs-subsection-heading">
              Defining success before designing screens
            </h3>
            <p className="cs-subsection-body">
              Because the core problem was emotional, not functional, I defined
              success metrics before designing anything. This kept the work
              anchored to the real problem rather than optimizing for engagement
              or speed.
            </p>
            <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
              Performance metrics measure whether the system is actually reducing
              risk: reduction in incidents involving unverifiable renters,
              increase in bookings flagged due to ID or plate mismatches, and
              reduction in disputes requiring platform escalation. I set
              directional targets as design guardrails, not post-launch
              measurements.
            </p>
            <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
              Experience metrics measure how homeowners feel: confidence before
              approving a renter, trust in the verification process, sense of
              control over their property and schedule, and satisfaction with
              platform support when something goes wrong. Increasing scores here
              signals homeowners are relying on the system rather than their
              anxiety.
            </p>
          </div>

        </div>
      )}
    </div>
  );
}
