import type { Metadata } from "next";
import { CaseStudyHero }    from "@/components/case-study/hero";
import { CaseStudySummary } from "@/components/case-study/summary";
import { CsScrollLinks }    from "@/components/case-study/scroll-links";
import { ScrollReveal }     from "@/components/scroll-reveal";
import { CaseImage }        from "@/components/case-study/case-image";

const SECTIONS = [
  { id: "overview",      label: "Overview"      },
  { id: "smart-tv",      label: "Smart TV"      },
  { id: "tesla-display", label: "Tesla Display" },
  { id: "reflection",    label: "Reflection"    },
];

export const metadata: Metadata = {
  title:       "Google Drive for Emerging Interfaces",
  description: "Adapting cloud file management for Smart TV and Tesla in-car displays through context-aware, hardware-native design.",
  robots:      { index: false, follow: false },
};

const IMG = (name: string) => `/images/google-drive-emerging/${name}`;

export default function GoogleDriveEmergingPage() {
  return (
    <main>
      <CaseStudyHero study={{
        hero:       IMG("hero.jpg"),
        coverColor: "#0e1018",
        tags:       ["Emerging Interfaces", "Interaction Design", "Multi-Platform"],
        title:      "Google Drive for Emerging Interfaces",
        subtitle:   "Adapting cloud file management for Smart TV and Tesla in-car displays through context-aware, hardware-native design.",
        meta: {
          role:  "UX Designer",
          items: [
            { label: "Role",     value: "UX Designer"            },
            { label: "Platform", value: "Smart TV, Tesla Display" },
            { label: "Type",     value: "Speculative Design"      },
            { label: "Context",  value: "MS Thesis Project"       },
          ],
        },
      }} />

      <CaseStudySummary summary={{
        problem:  "Google Drive was designed for keyboard and mouse. Adapting it for a 65-inch TV operated by a remote control and a Tesla touchscreen mid-drive required a different design logic for each platform — not a responsive port.",
        role:     "Sole UX designer: platform constraint analysis, MoSCoW feature prioritization, proto-persona work, and context-native interaction design across two radically different hardware environments.",
        timeline: "MS Thesis Project — speculative design exploration.",
        outcome:  "Two distinct context-native adaptations: a remote-first, voice-elevated Smart TV experience optimized for lean-back consumption, and a dual-mode Tesla interface that automatically restricts interaction based on vehicle state.",
      }} />

      <CsScrollLinks sections={SECTIONS} />

      <div className="cs-body">

        {/* ── Overview ──────────────────────────────────────────────────── */}
        <section id="overview" className="cs-section" aria-labelledby="overview-heading">
          <ScrollReveal>
            <h2 id="overview-heading" className="cs-section-heading">The Brief</h2>

            <p className="cs-section-body">
              This project explored what it means to adapt an existing product to radically different
              environments. Google Drive was designed for keyboard and mouse. The question was whether it
              could work meaningfully on a 65-inch TV across the room and on a Tesla touchscreen at
              60 miles per hour.
            </p>

            <p className="cs-section-body">
              The answer required a different design logic for each platform. Not responsive adaptation,
              but context-native redesign: understanding what the hardware affords, what the user needs
              in that environment, and what should be deliberately left out.
            </p>

            <div className="cs-nda-note">
              <span className="cs-nda-note-label">Honest framing</span>
              <p>
                This is a speculative thesis project. There are no real users, no usability testing,
                and no validated outcomes. The value is in the constraint-mapping process and the design
                rationale &mdash; treating each platform&rsquo;s constraints as the design brief rather
                than problems to work around.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* ── Smart TV ──────────────────────────────────────────────────── */}
        <section id="smart-tv" className="cs-section" aria-labelledby="smart-tv-heading">
          <ScrollReveal>
            <h2 id="smart-tv-heading" className="cs-section-heading">Smart TV Display</h2>

            <div className="cs-subsection" style={{ marginBottom: "2rem" }}>
              <h3 className="cs-subsection-heading">
                Designing for distance, lean-back posture, and remote-first interaction
              </h3>
              <p className="cs-subsection-body">
                The Smart TV context flips most assumptions about how people interact with files. Users
                are seated across the room. Input is a remote control with directional buttons. Precision
                clicking is not available. The primary use cases split between work &mdash; reviewing
                documents, running presentations &mdash; and personal: media playback, photo slideshows,
                ambient screensavers.
              </p>
            </div>
          </ScrollReveal>

          {/* Research and scoping */}
          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">Research and Scoping</span>
              <h3 className="cs-subsection-heading">
                MoSCoW prioritization to determine what the TV context could actually support
              </h3>
              <p className="cs-subsection-body">
                I used a MoSCoW prioritization framework to determine which Google Drive capabilities
                made sense for the TV context and which did not. Features like team collaboration tools,
                new document creation, and third-party app integrations were placed in the Won&rsquo;t
                Have category because the TV is a consumption and presentation surface, not a creation
                surface.
              </p>

              <div className="cs-two-col" style={{ marginTop: "1.5rem" }}>
                <div className="cs-ds-group">
                  <div className="cs-ds-group-header">
                    <span className="cs-ds-group-name">Must Have</span>
                  </div>
                  <div style={{ padding: "1rem 1.25rem" }}>
                    <p className="cs-subsection-body" style={{ marginTop: 0 }}>
                      Search and voice search
                    </p>
                    <p className="cs-subsection-body" style={{ marginTop: "0.75rem" }}>
                      Quick file access for recently and frequently used files
                    </p>
                    <p className="cs-subsection-body" style={{ marginTop: "0.75rem" }}>
                      Video and audio playback
                    </p>
                    <p className="cs-subsection-body" style={{ marginTop: "0.75rem" }}>
                      File previews in thumbnail format
                    </p>
                    <p className="cs-subsection-body" style={{ marginTop: "0.75rem" }}>
                      Slideshow mode for presentations
                    </p>
                  </div>
                </div>

                <div className="cs-ds-group">
                  <div className="cs-ds-group-header">
                    <span className="cs-ds-group-name">Should Have</span>
                  </div>
                  <div style={{ padding: "1rem 1.25rem" }}>
                    <p className="cs-subsection-body" style={{ marginTop: 0 }}>
                      File previews with broader format support
                    </p>
                    <p className="cs-subsection-body" style={{ marginTop: "0.75rem" }}>
                      Screensaver mode using image folders
                    </p>
                    <p className="cs-subsection-body" style={{ marginTop: "0.75rem" }}>
                      Dark mode for low-light viewing comfort
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Key design decisions */}
          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">Key Design Decisions</span>
              <h3 className="cs-subsection-heading">
                Voice search, slideshow mode, and ambient screensavers as primary patterns
              </h3>

              <div className="cs-feature" style={{ marginTop: "1.5rem" }}>
                <span className="cs-feature-name">Decision 01</span>
                <h3 className="cs-feature-title">Voice search as primary interaction, not accessibility add-on</h3>
                <p className="cs-feature-body">
                  On a TV, navigating through folders with directional buttons to find a file is
                  friction-heavy. Saying a file name is always faster. Voice search was elevated as the
                  primary interaction pattern &mdash; positioned centrally, activated by the remote&rsquo;s
                  microphone button, and treated as the default way to find anything rather than a fallback
                  for users who can&rsquo;t type.
                </p>
              </div>

              <div className="cs-feature" style={{ marginTop: "1.5rem" }}>
                <span className="cs-feature-name">Decision 02</span>
                <h3 className="cs-feature-title">Slideshow mode for professional and personal use</h3>
                <p className="cs-feature-body">
                  Slideshow mode turns Google Slides presentations into a full-screen, remote-controlled
                  experience. Users can advance slides, pause, and exit without touching a keyboard. This
                  supports both professional use &mdash; presenting from the living room &mdash; and personal
                  use: family photo slideshows driven by the same remote navigation.
                </p>
              </div>

              <div className="cs-feature" style={{ marginTop: "1.5rem" }}>
                <span className="cs-feature-name">Decision 03</span>
                <h3 className="cs-feature-title">Image folders as cloud-connected screensavers</h3>
                <p className="cs-feature-body">
                  When the TV is idle, it pulls from a designated Drive folder and rotates images as a
                  dynamic screensaver. This connects Drive to the TV&rsquo;s ambient state &mdash; adding
                  a cloud-connected layer to a feature TVs already have, without requiring any active user
                  interaction to set it up.
                </p>
              </div>

              <div className="cs-feature-img-wrap" style={{ marginTop: "2rem" }}>
                <CaseImage
                  src={IMG("smart-tv-overview.jpg")}
                  alt="Smart TV: home screen with quick access, voice search active state, slideshow mode, and screensaver"
                  description="Smart TV designs — home screen, voice search, slideshow mode, screensaver"
                  fill
                  sizes="(max-width: 768px) 100vw, 72rem"
                  className="cs-hero-img"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Hardware leverage */}
          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">Hardware Leverage</span>
              <h3 className="cs-subsection-heading">
                Treating the remote as the primary design constraint, not an afterthought
              </h3>
              <p className="cs-subsection-body">
                The Smart TV remote was treated as the primary design constraint. Navigation relies on
                directional pad scrolling between files. The microphone button activates voice search.
                Media playback controls on the remote map directly to Drive&rsquo;s audio and video
                player &mdash; meaning no on-screen controls are needed during playback, which would
                require the user to pick up a keyboard or phone.
              </p>
              <div className="cs-feature-decision" style={{ marginTop: "1rem" }}>
                <span className="cs-feature-decision-label">Design rationale</span>
                <p className="cs-feature-decision-text">
                  Every successful TV interface treats the remote as a constraint to design around
                  rather than fight against. Designing information architecture for one-axis sequential
                  navigation forced simpler hierarchy and clearer visual affordances than a mouse-driven
                  interface would require.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ── Tesla Display ─────────────────────────────────────────────── */}
        <section id="tesla-display" className="cs-section" aria-labelledby="tesla-display-heading">
          <ScrollReveal>
            <h2 id="tesla-display-heading" className="cs-section-heading">Tesla Display</h2>

            <div className="cs-subsection" style={{ marginBottom: "2rem" }}>
              <h3 className="cs-subsection-heading">
                Designing for safety first, with two distinct modes for driving and parked states
              </h3>
              <p className="cs-subsection-body">
                The Tesla context introduces a constraint that does not exist on any other platform: the
                user may be operating a vehicle. Every design decision has to be evaluated against the
                question of whether it adds distraction or removes it.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                <strong>Driving Mode</strong> restricts all file interaction to read-aloud only.
                Documents are converted to audio and played through the car&rsquo;s speaker system. No
                visual file browsing is available while the vehicle is in motion. Files that cannot be
                accessed in this mode show a clear lockout state rather than disappearing from the UI,
                so users understand the restriction without confusion.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                <strong>Parking Mode</strong> restores full access. Users can browse files, view
                presentations in slideshow mode, preview documents, and interact with Drive as they
                would on a tablet.
              </p>
            </div>

            <div className="cs-feature-img-wrap" style={{ marginTop: "0.5rem" }}>
              <CaseImage
                src={IMG("tesla-modes-overview.jpg")}
                alt="Tesla: parking mode home screen and driving mode lockout state"
                description="Tesla designs — parking mode home, driving mode lockout, voice search, read-aloud, location-aware quick access"
                fill
                sizes="(max-width: 768px) 100vw, 72rem"
                className="cs-hero-img"
              />
            </div>
          </ScrollReveal>

          {/* Research and scoping */}
          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">Research and Scoping</span>
              <h3 className="cs-subsection-heading">
                A stricter MoSCoW pass than Smart TV &mdash; the in-car context tolerates less
              </h3>
              <p className="cs-subsection-body">
                The MoSCoW process for Tesla was stricter than for Smart TV. Features involving
                real-time collaboration, new document creation, and multiple user profiles were placed
                in Won&rsquo;t Have because they introduce complexity and distraction that conflicts
                with the in-car context.
              </p>

              <div className="cs-two-col" style={{ marginTop: "1.5rem" }}>
                <div className="cs-ds-group">
                  <div className="cs-ds-group-header">
                    <span className="cs-ds-group-name">Must Have</span>
                  </div>
                  <div style={{ padding: "1rem 1.25rem" }}>
                    <p className="cs-subsection-body" style={{ marginTop: 0 }}>
                      File preview and format support
                    </p>
                    <p className="cs-subsection-body" style={{ marginTop: "0.75rem" }}>
                      Search and voice search
                    </p>
                    <p className="cs-subsection-body" style={{ marginTop: "0.75rem" }}>
                      Quick file access (recent and frequent)
                    </p>
                    <p className="cs-subsection-body" style={{ marginTop: "0.75rem" }}>
                      Audio playback
                    </p>
                  </div>
                </div>

                <div className="cs-ds-group">
                  <div className="cs-ds-group-header">
                    <span className="cs-ds-group-name">Should Have</span>
                  </div>
                  <div style={{ padding: "1rem 1.25rem" }}>
                    <p className="cs-subsection-body" style={{ marginTop: 0 }}>
                      Hands-free sharing
                    </p>
                    <p className="cs-subsection-body" style={{ marginTop: "0.75rem" }}>
                      File reading mode (text-to-speech)
                    </p>
                    <p className="cs-subsection-body" style={{ marginTop: "0.75rem" }}>
                      Car-specific file folders (insurance, registration)
                    </p>
                    <p className="cs-subsection-body" style={{ marginTop: "0.75rem" }}>
                      Offline downloads to car storage
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Key design decisions */}
          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">Key Design Decisions</span>
              <h3 className="cs-subsection-heading">
                Location-aware access, car-native offline storage, and voice-controlled navigation
              </h3>

              <div className="cs-feature" style={{ marginTop: "1.5rem" }}>
                <span className="cs-feature-name">Decision 01</span>
                <h3 className="cs-feature-title">Location-aware quick file access</h3>
                <p className="cs-feature-body">
                  Quick file access surfaces different files depending on where the car is. Near a
                  workplace, the system prioritizes work documents and presentations. Near home, it
                  surfaces personal files. This reduces the time users spend searching and keeps their
                  eyes off the screen.
                </p>
              </div>

              <div className="cs-feature" style={{ marginTop: "1.5rem" }}>
                <span className="cs-feature-name">Decision 02</span>
                <h3 className="cs-feature-title">Offline downloads to car storage, not a connected phone</h3>
                <p className="cs-feature-body">
                  Rather than syncing to a phone, files download directly to Tesla&rsquo;s built-in
                  storage. This means no dependency on a connected device and no reliance on cellular
                  data in low-coverage areas &mdash; a meaningful difference from the mobile app&rsquo;s
                  offline model.
                </p>
              </div>

              <div className="cs-feature" style={{ marginTop: "1.5rem" }}>
                <span className="cs-feature-name">Decision 03</span>
                <h3 className="cs-feature-title">Voice-controlled access that triggers read-aloud automatically</h3>
                <p className="cs-feature-body">
                  Voice commands allow users to find and open files without touching the screen. In
                  Driving Mode, opening a file via voice immediately triggers read-aloud playback rather
                  than displaying the document &mdash; eliminating any visual attention cost entirely.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Hardware leverage */}
          <ScrollReveal>
            <div className="cs-subsection">
              <span className="cs-subsection-label">Hardware Leverage</span>
              <h3 className="cs-subsection-heading">
                The Tesla display, voice recognition, and driving detection API
              </h3>
              <p className="cs-subsection-body">
                The Tesla display is a large landscape touchscreen, which makes it suitable for rich
                information display when parked. Tesla&rsquo;s built-in voice recognition system handles
                file search and navigation commands. The driving detection API triggers the automatic
                mode switch between Driving and Parking states without requiring user input.
              </p>
              <div className="cs-feature-decision" style={{ marginTop: "1rem" }}>
                <span className="cs-feature-decision-label">Design rationale</span>
                <p className="cs-feature-decision-text">
                  The mode switch is automatic and instantaneous &mdash; there is no manual toggle. The
                  system reads the vehicle state and adapts. This removes a decision from the driver
                  entirely, which is the only acceptable outcome when the primary user task is
                  operating a vehicle.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ── Reflection ────────────────────────────────────────────────── */}
        <section id="reflection" className="cs-section" aria-labelledby="reflection-heading">
          <ScrollReveal>
            <h2 id="reflection-heading" className="cs-section-heading">
              What This Project Taught Me About Constraints
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-wid" style={{ marginTop: 0, paddingTop: 0, borderTop: "none" }}>
              <p className="cs-wid-body">
                The most useful design thinking in this project came from treating each
                platform&rsquo;s constraints as the design brief rather than as problems to work
                around.
              </p>

              <p className="cs-wid-body">
                On Smart TV, the remote control is the primary input. Designing for the remote means
                designing for one-axis navigation, which forced simpler information architecture and
                clearer visual hierarchy than a mouse-driven interface requires.
              </p>

              <p className="cs-wid-body">
                On Tesla, the safety constraint is non-negotiable. Driving Mode is not a feature.
                It is a design principle that shapes every other decision in the Tesla adaptation.
                Any feature that could not survive the question &ldquo;does this work safely at 60
                miles per hour?&rdquo; was either removed or restructured.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="cs-wid">
              <h3 className="cs-wid-heading">The proto-persona insight</h3>

              <p className="cs-wid-body">
                The proto-persona work clarified that both platforms have users with fundamentally
                different relationships to their files. Smart TV users are in a lean-back, consumption
                mode. Tesla users are time-pressured and often in motion. The same file management
                system needed to feel effortless in both contexts for entirely different reasons.
              </p>

              <p className="cs-wid-body">
                The failure mode in speculative design is producing solutions that solve a hypothetical
                problem with a hypothetical solution. The constraint is keeping the rationale honest:
                every decision here is grounded in the hardware, not in a wished-for use case.
              </p>
            </div>
          </ScrollReveal>
        </section>

      </div>
    </main>
  );
}
