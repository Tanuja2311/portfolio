import type { Metadata } from "next";
import { CsScrollLinks } from "@/components/case-study/scroll-links";
import { Reveal }         from "@/components/case-study/reveal";
import { CaseImage }      from "@/components/case-study/case-image";
import { StaggerContainer, StaggerItem } from "@/components/stagger";

const SECTIONS = [
  { id: "problem",    label: "Problem"    },
  { id: "research",   label: "Research"   },
  { id: "solution",   label: "Solution"   },
  { id: "reflection", label: "Reflection" },
];

export const metadata: Metadata = {
  title: "Google Drive for Emerging Interfaces",
  description:
    "Adapting cloud file management for a Tesla in-car display and a Smart TV, two platforms that break every assumption desktop interfaces rely on.",
};

const IMG = (name: string) => `/images/google-drive-emerging/${name}`;

export default function GoogleDriveEmergingPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <StaggerContainer as="section" className="cs-hero">
        <StaggerItem className="cs-hero-media" style={{ background: "#0e1018" }}>
          <CaseImage
            src={IMG("hero.jpg")}
            alt="Google Drive for Emerging Interfaces"
            description="Google Drive adapted for Tesla in-car display and Smart TV"
            fill
            priority
            sizes="100vw"
            className="cs-hero-img"
          />
          <div className="cs-hero-overlay" aria-hidden />
          <div className="cs-hero-text">
            <h1 className="cs-hero-title">Google Drive for Emerging Interfaces</h1>
            <p className="cs-hero-subtitle">
              Adapting cloud file management for a Tesla in-car display and a
              Smart TV, two platforms that break every assumption desktop
              interfaces rely on.
            </p>
          </div>
        </StaggerItem>

        <StaggerItem className="cs-meta-bar">
          <div className="cs-meta-inner">
            {[
              ["Role",     "UX Designer"],
              ["Duration", "8 weeks"],
              ["Context",  "Academic Project (MS coursework)"],
              ["Scope",    "Speculative Design, Multimodal Interaction"],
            ].map(([label, value]) => (
              <div key={label} className="cs-meta-item">
                <span className="cs-meta-label">{label}</span>
                <span className="cs-meta-value">{value}</span>
              </div>
            ))}
          </div>
        </StaggerItem>
      </StaggerContainer>

      <CsScrollLinks sections={SECTIONS} />

      <div className="cs-body">

        {/* ── Problem ────────────────────────────────────────────────── */}
        <section id="problem" className="cs-section">
          <Reveal>
            <h2 className="cs-section-heading">The Problem</h2>

            <p className="cs-section-body">
              Google Drive works because it was built for keyboards, mice, and
              high-resolution screens. Remove any one of those inputs and the
              experience starts to collapse. Remove all three and it becomes
              unusable.
            </p>

            <p className="cs-section-body">
              This project asked a specific question: what does file management
              look like on platforms where the core interaction model is
              fundamentally different?
            </p>

            <p className="cs-section-body">
              Two platforms. Two sets of constraints. One shared challenge.
            </p>

            <p className="cs-section-body">
              <strong>Tesla in-car display:</strong> A 15-inch touchscreen
              operated by a driver whose primary task is not file management.
              Interaction time is limited. Attention is split. Safety is the
              dominant constraint, and every tap that pulls focus from the road
              is a design failure.
            </p>

            <p className="cs-section-body">
              <strong>Smart TV:</strong> A large screen controlled by a
              directional remote with four arrow keys and a select button. No
              keyboard. No precise pointer. No hover states. Navigation must be
              entirely sequential, and every action that would normally require
              a text input needs an alternative path.
            </p>

            <p className="cs-section-body">
              The question was never &ldquo;how do we shrink Google Drive to fit
              these screens.&rdquo; It was &ldquo;how do we rethink what file
              access means when the input method changes this dramatically.&rdquo;
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="cs-nda-note">
              <span className="cs-nda-note-label">Honest framing</span>
              <p>
                This is a speculative academic project. There are no real users,
                no usability testing, and no validated outcomes. The value is in
                the constraint-mapping process and the design rationale, not in
                claiming these solutions would work in production.
              </p>
            </div>
          </Reveal>
        </section>

        {/* ── Research ───────────────────────────────────────────────── */}
        <section id="research" className="cs-section">
          <Reveal>
            <h2 className="cs-section-heading">Research</h2>
          </Reveal>

          {/* 02.1 — Heuristic Evaluation */}
          <Reveal delay={80}>
            <div className="cs-subsection">
              <span className="cs-subsection-label">02.1 — Heuristic Evaluation of Google Drive Mobile</span>
              <h3 className="cs-subsection-heading">
                Auditing an existing product to understand what transfers and
                what breaks.
              </h3>
              <p className="cs-subsection-body">
                Before designing for new platforms, I audited Google Drive&rsquo;s
                existing mobile experience against Nielsen&rsquo;s 10 usability
                heuristics. The goal was to identify which patterns could
                transfer to constrained interfaces and which would break.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                The search-first architecture assumes a keyboard. On platforms
                without text input, search becomes inaccessible, and the entire
                information architecture needs to shift toward browsing, recency,
                and contextual surfacing.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                Nested folder hierarchies require precision navigation. Each
                level of depth adds cognitive load that is manageable with a
                mouse but punishing with a d-pad or voice command.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                Sharing and permissions flows rely on email input fields and
                multi-step dialogs. These are non-starters on both target
                platforms.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                File previews are small and text-heavy. On a TV viewed from
                10 feet away, or a car screen glanced at for 2 seconds, these
                previews communicate nothing.
              </p>
              <div className="cs-feature-img-wrap" style={{ marginTop: "1.5rem" }}>
                <CaseImage
                  src={IMG("heuristic-eval.jpg")}
                  alt="Heuristic evaluation of Google Drive mobile"
                  description="Heuristic evaluation - Google Drive mobile audit against Nielsen's 10 heuristics"
                  fill
                  sizes="(max-width: 768px) 100vw, 72rem"
                  className="cs-hero-img"
                />
              </div>
            </div>
          </Reveal>

          {/* 02.2 — Competitive Analysis */}
          <Reveal delay={80}>
            <div className="cs-subsection">
              <span className="cs-subsection-label">02.2 — Competitive Analysis</span>
              <h3 className="cs-subsection-heading">
                The right comparators aren&rsquo;t competitors. They&rsquo;re
                analogous platforms that already solved the same input problem.
              </h3>
              <p className="cs-subsection-body">
                I analyzed existing interfaces across both platform categories
                to extract patterns that already work under similar constraints.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                <strong>In-car interfaces reviewed:</strong> Tesla&rsquo;s
                native media player, Apple CarPlay, Android Auto, BMW iDrive.
                The strongest pattern across all of them: mode-switching based
                on vehicle state. CarPlay suppresses complex interactions while
                driving. Tesla separates entertainment controls from vehicle
                controls spatially. The principle is consistent: reduce
                available actions when the driver&rsquo;s attention budget is
                smallest.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                <strong>TV interfaces reviewed:</strong> Apple TV, Roku, Fire
                TV, Google TV. The dominant pattern: card-based grids with
                large preview thumbnails, minimal text, and d-pad-optimized
                focus states. Every successful TV interface treats content as
                something to be browsed visually, not searched textually. The
                remote is a constraint these interfaces design around rather
                than fight against.
              </p>
              <div className="cs-feature-img-wrap" style={{ marginTop: "1.5rem" }}>
                <CaseImage
                  src={IMG("competitive-analysis.jpg")}
                  alt="Competitive analysis of in-car and TV interfaces"
                  description="Competitive analysis - in-car and TV interface patterns compared"
                  fill
                  sizes="(max-width: 768px) 100vw, 72rem"
                  className="cs-hero-img"
                />
              </div>
            </div>
          </Reveal>

          {/* 02.3 — Constraint Mapping */}
          <Reveal delay={80}>
            <div className="cs-subsection">
              <span className="cs-subsection-label">02.3 — Constraint Mapping</span>
              <h3 className="cs-subsection-heading">
                Every subsequent design decision was traceable back to one of
                these constraints.
              </h3>
              <p className="cs-subsection-body">
                I mapped the specific constraints of each platform into a
                framework that drove every subsequent design decision.
              </p>

              <div className="cs-two-col" style={{ marginTop: "1.5rem" }}>
                <div className="cs-ds-group">
                  <div className="cs-ds-group-header">
                    <span className="cs-ds-group-name">Tesla In-Car Display</span>
                  </div>
                  <div style={{ padding: "1rem 1.25rem" }}>
                    <p className="cs-subsection-body" style={{ marginTop: 0 }}>
                      Primary user task is driving, not file management.
                    </p>
                    <p className="cs-subsection-body" style={{ marginTop: "0.75rem" }}>
                      Interaction window: 2 to 3 seconds of safe glance time
                      (NHTSA guideline).
                    </p>
                    <p className="cs-subsection-body" style={{ marginTop: "0.75rem" }}>
                      Input: touch (parked) or voice (driving). No physical
                      keyboard.
                    </p>
                    <p className="cs-subsection-body" style={{ marginTop: "0.75rem" }}>
                      Screen is shared with navigation, music, and vehicle
                      controls.
                    </p>
                    <p className="cs-subsection-body" style={{ marginTop: "0.75rem" }}>
                      Latency tolerance is near zero; the driver will not wait
                      for a loading state.
                    </p>
                  </div>
                </div>

                <div className="cs-ds-group">
                  <div className="cs-ds-group-header">
                    <span className="cs-ds-group-name">Smart TV</span>
                  </div>
                  <div style={{ padding: "1rem 1.25rem" }}>
                    <p className="cs-subsection-body" style={{ marginTop: 0 }}>
                      Input: 4-directional remote with select button.
                    </p>
                    <p className="cs-subsection-body" style={{ marginTop: "0.75rem" }}>
                      Viewing distance: 6 to 10 feet. No hover states, no
                      right-click, no multi-select.
                    </p>
                    <p className="cs-subsection-body" style={{ marginTop: "0.75rem" }}>
                      Text input requires an on-screen keyboard navigated one
                      character at a time.
                    </p>
                    <p className="cs-subsection-body" style={{ marginTop: "0.75rem" }}>
                      Screen real estate is large but information density must
                      be low.
                    </p>
                    <p className="cs-subsection-body" style={{ marginTop: "0.75rem" }}>
                      Users expect lean-back, passive interaction patterns.
                    </p>
                  </div>
                </div>
              </div>

              <div className="cs-feature-img-wrap" style={{ marginTop: "1.5rem" }}>
                <CaseImage
                  src={IMG("constraint-mapping.jpg")}
                  alt="Constraint mapping framework"
                  description="Constraint mapping - Tesla vs Smart TV platform analysis"
                  fill
                  sizes="(max-width: 768px) 100vw, 72rem"
                  className="cs-hero-img"
                />
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── Solution ───────────────────────────────────────────────── */}
        <section id="solution" className="cs-section">
          <Reveal>
            <h2 className="cs-section-heading">Solution</h2>
            <p className="cs-section-body">
              This section splits into two distinct design directions. Each
              responds to its platform&rsquo;s constraints with a different
              interaction model. They share one principle: reduce the available
              feature set to match the input method, rather than porting the
              full desktop experience.
            </p>
          </Reveal>

          {/* 03.1 — Tesla */}
          <Reveal delay={80}>
            <div className="cs-subsection">
              <span className="cs-subsection-label">03.1 — Tesla: Driving Mode and Parking Mode</span>
              <h3 className="cs-subsection-heading">
                The interface adapts to the vehicle state. Not the other way
                around.
              </h3>
              <p className="cs-subsection-body">
                The core design decision was a dual-mode system that adapts the
                interface based on vehicle state.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                <strong>Driving Mode</strong> activates when the car is in
                motion. It strips the interface down to three elements: a voice
                command trigger, a list of the 5 most recently accessed files,
                and a single-tap &ldquo;play&rdquo; action for
                audio-compatible files (podcasts, audiobooks, voice memos).
                There is no browsing, no folder navigation, and no file
                management. The entire interaction can be completed in under 3
                seconds without looking away from the road.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                Voice commands follow a simple grammar: &ldquo;Open
                [filename],&rdquo; &ldquo;Play [filename],&rdquo; &ldquo;Show
                recent files.&rdquo; No complex queries. No disambiguation
                dialogs. If the system cannot match a command, it responds with
                &ldquo;File not found&rdquo; and does not ask follow-up
                questions while driving.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                <strong>Parking Mode</strong> activates when the vehicle is in
                park. It unlocks the full interface: folder browsing, file
                previews, search (via on-screen keyboard), and sharing. The
                interaction model here is closer to a tablet experience,
                optimized for the 15-inch screen. Touch targets are a minimum
                of 48&times;48dp. The layout uses a two-column split: folder
                tree on the left, file preview on the right.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                The mode switch is automatic and instantaneous. There is no
                manual toggle. The system reads the vehicle state and adapts.
                This removes a decision from the driver entirely.
              </p>
              <div className="cs-feature-img-wrap" style={{ marginTop: "1.5rem" }}>
                <CaseImage
                  src={IMG("tesla-driving-mode.jpg")}
                  alt="Tesla Driving Mode: voice-first interface showing recent files only"
                  description="Tesla Driving Mode - voice prompt and recent files, stripped-down interface"
                  fill
                  sizes="(max-width: 768px) 100vw, 72rem"
                  className="cs-hero-img"
                />
              </div>
              <div className="cs-feature-img-wrap" style={{ marginTop: "1.5rem" }}>
                <CaseImage
                  src={IMG("tesla-parking-mode.jpg")}
                  alt="Tesla Parking Mode: full file browsing interface with two-column layout"
                  description="Tesla Parking Mode - two-column layout with folder tree and file preview"
                  fill
                  sizes="(max-width: 768px) 100vw, 72rem"
                  className="cs-hero-img"
                />
              </div>
              <div className="cs-feature-decision" style={{ marginTop: "1.5rem" }}>
                <span className="cs-feature-decision-label">Design rationale</span>
                <p className="cs-feature-decision-text">
                  The dual-mode approach was borrowed from the competitive
                  analysis of CarPlay&rsquo;s interaction suppression pattern,
                  extended to a full interface bifurcation rather than just
                  hiding buttons. Voice-first in driving mode is not a
                  preference; it is a safety requirement. Limiting driving mode
                  to recent files eliminates the need for search or navigation
                  entirely. The assumption (untested, since this is speculative)
                  is that the files a driver needs while driving are
                  overwhelmingly files they accessed recently.
                </p>
              </div>
            </div>
          </Reveal>

          {/* 03.2 — Smart TV */}
          <Reveal delay={80}>
            <div className="cs-subsection">
              <span className="cs-subsection-label">03.2 — Smart TV: Card-Based D-Pad Navigation</span>
              <h3 className="cs-subsection-heading">
                Replace text-heavy lists with visual cards. Replace search with
                filters.
              </h3>
              <p className="cs-subsection-body">
                The core design decision was to replace Google Drive&rsquo;s
                list-based, text-heavy layout with a card grid that communicates
                file identity through visual previews rather than filenames.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                Each file is represented as a card showing: a large thumbnail
                preview (for images, PDFs, slides, and docs), the file type
                icon, a truncated filename (max 2 lines), and a &ldquo;last
                opened&rdquo; timestamp. Cards are arranged in a
                horizontal-scrolling grid grouped by category: Recent, Shared
                with Me, Starred, and folders.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                Navigation is entirely sequential. The d-pad moves focus from
                card to card. Each focused card scales up slightly (110%) and
                displays a subtle border highlight. Pressing select opens a
                context menu with three options: Open, Share Link, and Info.
                There is no drag-and-drop, no multi-select, and no right-click
                equivalent.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                <strong>Search alternative:</strong> Rather than forcing users
                through an on-screen keyboard, the TV interface offers voice
                search (if the remote supports it) and a filter system
                accessible via the remote&rsquo;s dedicated buttons. Filters
                include: file type (Docs, Sheets, Slides, Images, Video), date
                range (Today, This Week, This Month), and owner (My Files,
                Shared). These filters are stackable and can narrow results to a
                manageable set without typing a single character.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                <strong>Preview mode:</strong> Selecting &ldquo;Open&rdquo; on
                a document does not launch a full editor. Instead, it opens a
                read-only preview optimized for the viewing distance. Text is
                rendered at a minimum of 24pt. Slides and PDFs display in a
                full-screen view. The user can scroll through pages using the
                up/down buttons on the remote. Editing is not supported; the TV
                interface is strictly for accessing, previewing, and sharing.
              </p>
              <div className="cs-feature-img-wrap" style={{ marginTop: "1.5rem" }}>
                <CaseImage
                  src={IMG("smart-tv-card-grid.jpg")}
                  alt="Smart TV: card-based file grid with d-pad focus state"
                  description="Smart TV card grid - horizontal scroll with d-pad focus state at 110% scale"
                  fill
                  sizes="(max-width: 768px) 100vw, 72rem"
                  className="cs-hero-img"
                />
              </div>
              <div className="cs-feature-img-wrap" style={{ marginTop: "1.5rem" }}>
                <CaseImage
                  src={IMG("smart-tv-filters.jpg")}
                  alt="Smart TV: filter panel replacing keyboard search"
                  description="Smart TV filter panel - file type, date range, and owner filters without keyboard"
                  fill
                  sizes="(max-width: 768px) 100vw, 72rem"
                  className="cs-hero-img"
                />
              </div>
              <div className="cs-feature-decision" style={{ marginTop: "1.5rem" }}>
                <span className="cs-feature-decision-label">Design rationale</span>
                <p className="cs-feature-decision-text">
                  Card-based layouts are the established pattern for TV
                  interfaces (Netflix, Roku, Apple TV). Users already have a
                  learned mental model for this interaction. Removing editing
                  capabilities was a deliberate scope decision, not a
                  limitation. The TV viewing context is lean-back, not
                  productivity. The filter-first approach to search reflects the
                  constraint analysis: on-screen keyboards on TVs are
                  universally frustrating. Filters achieve the same narrowing
                  effect without requiring character-by-character input.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── Reflection ─────────────────────────────────────────────── */}
        <section id="reflection" className="cs-section">
          <Reveal>
            <h2 className="cs-section-heading">Reflection</h2>
          </Reveal>

          <Reveal delay={80}>
            <div className="cs-wid" style={{ marginTop: 0, paddingTop: 0, borderTop: "none" }}>
              <h3 className="cs-wid-heading">What this project demonstrates</h3>

              <p className="cs-wid-body">
                The value here is not in the pixel-level fidelity of the
                mockups. It is in the process of mapping platform constraints
                to interaction models and making defensible design decisions
                within those constraints.
              </p>

              <p className="cs-wid-body">
                <strong>How to decompose an existing product into its core
                user tasks and reassemble them for a different input
                paradigm.</strong> Google Drive&rsquo;s essential
                job-to-be-done is file access. Everything else &mdash; editing,
                sharing workflows, folder organization &mdash; is secondary. On
                constrained platforms, stripping back to the core job reveals
                what actually needs to survive the port.
              </p>

              <p className="cs-wid-body">
                <strong>How to use competitive analysis of analogous platforms,
                not just direct competitors, to extract transferable
                patterns.</strong> CarPlay and Netflix are not Google Drive
                competitors. They are platforms that already solved the same
                input problem. Treating them as design references rather than
                comparators produced more actionable insights than any direct
                feature comparison would have.
              </p>

              <p className="cs-wid-body">
                <strong>How to scope aggressively.</strong> Deciding what a
                product should not do on a given platform is as important as
                deciding what it should do. Every &ldquo;won&rsquo;t
                have&rdquo; in this project was a decision grounded in the
                constraint analysis, not a workaround for the available time.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="cs-wid">
              <h3 className="cs-wid-heading">What would change with real research</h3>

              <p className="cs-wid-body">
                This project is built entirely on heuristic reasoning and
                competitive analysis. If this were a real product initiative,
                the first step would be usability testing with actual drivers
                and TV users to validate several assumptions.
              </p>

              <p className="cs-wid-body">
                The assumption that recent files are sufficient for driving mode.
                A study tracking which files users actually access from their
                cars would either confirm this or reveal a different access
                pattern entirely.
              </p>

              <p className="cs-wid-body">
                The assumption that TV users do not want to edit. Observation
                of real TV-based file access behavior might reveal use cases not
                anticipated here.
              </p>

              <p className="cs-wid-body">
                The 2-to-3-second glance time guideline is well-established for
                general in-car interfaces, but may not hold for
                parked-but-idling states (waiting in a parking lot, charging).
                The hard binary of driving mode vs. parking mode may need a
                third state.
              </p>

              <p className="cs-wid-body">
                None of these were tested. The project stands as a design
                exploration grounded in constraint analysis, not as a validated
                solution.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="cs-wid">
              <h3 className="cs-wid-heading">What I&rsquo;d do differently</h3>

              <p className="cs-wid-body">
                <strong>Narrow the scope to one platform instead of two.</strong>
                Covering both Tesla and Smart TV meant neither direction got the
                depth it deserved. A single-platform deep dive with scenario
                mapping, prototype testing (even informal guerrilla testing with
                5 participants), and iterative refinement would produce a
                stronger case study than two surface-level explorations.
              </p>

              <p className="cs-wid-body">
                <strong>Build interactive prototypes rather than static
                screens.</strong> The Tesla voice interaction, in particular, is
                impossible to evaluate without hearing it. A prototype using a
                Wizard of Oz method (simulating voice responses manually) would
                have revealed interaction breakdowns that static mockups cannot
                surface.
              </p>
            </div>
          </Reveal>
        </section>

      </div>
    </>
  );
}
