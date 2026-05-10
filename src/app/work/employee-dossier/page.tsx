import type { Metadata } from "next";
import { CsScrollLinks } from "@/components/case-study/scroll-links";
import { Reveal }         from "@/components/case-study/reveal";
import { CaseImage }      from "@/components/case-study/case-image";
import { StaggerContainer, StaggerItem } from "@/components/stagger";

const SECTIONS = [
  { id: "challenge", label: "Challenge" },
  { id: "process",   label: "Process"   },
  { id: "solution",  label: "Solution"  },
  { id: "impact",    label: "Impact"    },
];

export const metadata: Metadata = {
  title: "Employee Dossier",
  description:
    "Redesigning ZingHR's centralized employee record into a single, scannable page.",
};

const IMG = (name: string) => `/images/employee-dossier/${name}`;

export default function EmployeeDossierPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <StaggerContainer as="section" className="cs-hero">
        <StaggerItem className="cs-hero-media" style={{ background: "#0e1520" }}>
          <CaseImage
            src={IMG("hero.jpg")}
            alt="Employee Dossier redesign"
            description="Employee Dossier - redesigned single-page profile view"
            fill
            priority
            sizes="100vw"
            className="cs-hero-img"
          />
          <div className="cs-hero-overlay" aria-hidden />
          <div className="cs-hero-text">
            <h1 className="cs-hero-title">Employee Dossier</h1>
            <p className="cs-hero-subtitle">
              Redesigning ZingHR&rsquo;s centralized employee record into a
              single, scannable page.
            </p>
          </div>
        </StaggerItem>

        <StaggerItem className="cs-meta-bar">
          <div className="cs-meta-inner">
            {[
              ["Role",     "UX Designer"],
              ["Duration", "5 weeks"],
              ["Company",  "ZingHR"],
              ["Team",     "1 designer · 1 design manager · 1 tech lead"],
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

        {/* ── Challenge ──────────────────────────────────────────────── */}
        <section id="challenge" className="cs-section">
          <Reveal>
            <h2 className="cs-section-heading">Challenge</h2>

            <p className="cs-section-body">
              The Employee Dossier is one of the most-visited modules in
              ZingHR&rsquo;s platform. Every employee, manager, and HR admin
              interacts with it. It&rsquo;s where personal details, contact
              information, bank records, identity documents, family data, and
              work history all live. If the HRMS is the system of record, the
              dossier is the page that proves it.
            </p>

            <p className="cs-section-body">
              The existing version had accumulated friction over years of
              incremental feature additions without a corresponding design
              pass. Navigation was split across vertical tabs (About Me,
              e-PMS) and horizontal sub-tabs nested inside them, creating a
              two-axis structure that users had to learn rather than scan.
              Visual noise compounded the problem: persistent scrollbars
              appeared inside content areas that didn&rsquo;t need them,
              underlines decorated fields inconsistently, and the overall
              layout gave no clear signal about which content was editable
              and which was read-only.
            </p>

            <p className="cs-section-body">
              The most telling usability issue was a single &ldquo;Update
              Details&rdquo; button positioned ambiguously between sections.
              Users couldn&rsquo;t tell whether tapping it would save changes
              to one section or the entire page. Worse, the system surfaced
              update prompts even when no data had changed, training users to
              distrust the interface rather than rely on it.
            </p>

            <p className="cs-section-body">
              For a module that HR teams use during audits, managers reference
              in reviews, and employees depend on for paycheck accuracy, that
              distrust was not a cosmetic problem. It was an operational one.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="cs-feature-img-wrap" style={{ marginTop: "2rem" }}>
              <CaseImage
                src={IMG("before.jpg")}
                alt="Legacy Employee Dossier interface"
                description="Legacy dossier - two-axis tab navigation, before state"
                fill
                sizes="(max-width: 768px) 100vw, 72rem"
                className="cs-hero-img"
              />
            </div>
          </Reveal>
        </section>

        {/* ── Process ────────────────────────────────────────────────── */}
        <section id="process" className="cs-section">
          <Reveal>
            <h2 className="cs-section-heading">Process</h2>
          </Reveal>

          {/* 01 - Usability Audit */}
          <Reveal delay={80}>
            <div className="cs-subsection">
              <span className="cs-subsection-label">01 - Usability Audit</span>
              <h3 className="cs-subsection-heading">
                No brief. No research plan. Just the module.
              </h3>
              <p className="cs-subsection-body">
                The only direction was &ldquo;redesign the Employee
                Dossier.&rdquo; No user complaints were handed over, no
                support tickets were flagged, no specific pain points were
                pre-identified. So the first step was using the product
                myself, methodically, and documenting every point where I
                got stuck, confused, or had to guess. That self-directed
                audit surfaced the structural problems: the two-axis tab
                navigation, the ambiguous update button, the false save
                prompts, the visual noise from unnecessary scrollbars and
                inconsistent underlines. But auditing alone only reveals
                what&rsquo;s broken. It doesn&rsquo;t tell you what people
                have silently adapted to, or what they&rsquo;ve given up
                trying to do.
              </p>
            </div>
          </Reveal>

          {/* 02 - Internal Interviews */}
          <Reveal delay={80}>
            <div className="cs-subsection">
              <span className="cs-subsection-label">02 - Internal Interviews</span>
              <h3 className="cs-subsection-heading">
                Existing employees had adapted. New employees hadn&rsquo;t.
                Both perspectives were necessary.
              </h3>
              <p className="cs-subsection-body">
                I spoke to coworkers across the company, deliberately
                splitting conversations between long-tenured employees and
                recent hires. The two groups surfaced completely different
                problems.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                Long-tenured employees had internalized the dossier&rsquo;s
                quirks. They couldn&rsquo;t immediately point to issues
                because they&rsquo;d stopped noticing them. Direct questions
                didn&rsquo;t work. Instead, I asked specifics: &ldquo;Do you
                know what this button does? Did it do what you expected? What
                does HR typically ask you to provide that should already be in
                your dossier? What did the employee dossier look like at
                companies you&rsquo;ve worked at before?&rdquo; Those
                questions broke through the familiarity and surfaced
                frustrations they&rsquo;d stopped articulating.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                Recent hires were the opposite. They hadn&rsquo;t built
                workarounds yet, so every friction point was still visible.
                I gave them simple retrieval tasks and watched where they
                hesitated, where they looked first, and whether the
                information was where they expected it to be. The combination
                was critical. Tenured employees told me what the dossier
                failed to do over time. New employees told me what it failed
                to communicate on first contact.
              </p>
            </div>
          </Reveal>

          {/* 03 - First Exploration */}
          <Reveal delay={80}>
            <div className="cs-subsection">
              <span className="cs-subsection-label">03 - First Exploration: Tabbed Navigation</span>
              <h3 className="cs-subsection-heading">
                The obvious solution broke against ZingHR&rsquo;s product model.
              </h3>
              <p className="cs-subsection-body">
                The first design direction replaced the vertical tabs with a
                persistent left navigation menu that expanded on hover, and
                converted the sub-sections into horizontal tabs, each with
                its own dedicated &ldquo;Update Details&rdquo; button. This
                solved the original ambiguity about what the update button
                controlled.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                My design manager and the implementation team manager flagged
                the fundamental flaw: ZingHR is a product-based company that
                customizes modules per client. Every buyer configures the
                dossier differently depending on their size, function, and
                requirements. Some clients need twelve sections. Others need
                four. Clients can also add custom fields to any section,
                meaning one company&rsquo;s &ldquo;Personal Details&rdquo;
                tab might contain thirty fields while another&rsquo;s
                contains three.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                The tabbed layout I&rsquo;d designed already occupied the
                full page width with a fixed set of tabs. There was no room
                to add more. And for clients with sparse configurations, a
                tab containing a single custom field would leave the rest of
                the page visually empty. The design solved the navigation
                problem for one hypothetical configuration but broke for the
                range of configurations ZingHR actually ships. That feedback
                killed the tabbed direction entirely. The next solution had
                to work for a dossier with four sections and a dossier with
                twenty, with no layout changes between them.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="cs-feature-img-wrap" style={{ marginTop: "2rem" }}>
              <CaseImage
                src={IMG("tabbed-exploration.jpg")}
                alt="First design exploration - tabbed navigation"
                description="First exploration - tabbed navigation direction, discarded"
                fill
                sizes="(max-width: 768px) 100vw, 72rem"
                className="cs-hero-img"
              />
            </div>
          </Reveal>

          {/* 04 - Final Direction */}
          <Reveal delay={80}>
            <div className="cs-subsection">
              <span className="cs-subsection-label">04 - Final Direction: Single-Page Scroll</span>
              <h3 className="cs-subsection-heading">
                A conversation about LinkedIn profiles reframed the problem.
              </h3>
              <p className="cs-subsection-body">
                The connection came sideways. A colleague was updating his
                LinkedIn profile ahead of a job search and asked me for
                feedback on how to optimize it. That conversation surfaced
                something obvious in hindsight: a LinkedIn profile and an
                employee dossier are structurally the same thing. Both are
                single-person records with variable sections, each
                independently editable, designed to be scanned rather than
                read end to end.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                I brought the idea to my design manager before exploring it
                further. She approved the direction, and the structural fit
                became clear immediately. LinkedIn&rsquo;s profile pattern
                resolved every concern that killed the tabbed approach.
                Scalability was no longer constrained by tab count or page
                width. New sections simply extend the page, whether a client
                configures four or twenty. Sparse sections with a single
                custom field sit naturally in a scroll layout without leaving
                a screen of empty space. And the continuous scroll eliminated
                the cognitive overhead of switching between tabs to build a
                complete picture of an employee&rsquo;s record.
              </p>
              <p className="cs-subsection-body" style={{ marginTop: "1rem" }}>
                The key design decision was treating LinkedIn as a structural
                reference, not a visual one. The layout pattern transferred.
                The information density, hierarchy, and edit interactions
                were designed for ZingHR&rsquo;s specific content types,
                client configurations, and user permissions.
              </p>
            </div>
          </Reveal>
        </section>

        {/* ── Solution ───────────────────────────────────────────────── */}
        <section id="solution" className="cs-section">
          <Reveal>
            <h2 className="cs-section-heading">Solution</h2>
            <p className="cs-section-body">
              The final design consolidates every piece of employee
              information onto one continuous page. Horizontal tabs at the
              top function as anchor links that scroll the user to the
              relevant section rather than swapping content between views.
            </p>
          </Reveal>

          {/* Feature 01 */}
          <Reveal delay={80}>
            <div className="cs-feature">
              <span className="cs-feature-name">Feature 01</span>
              <h3 className="cs-feature-title">
                Profile header as a persistent summary
              </h3>
              <p className="cs-feature-body">
                The profile header stays visible at the top and serves as a
                snapshot of the employee&rsquo;s identity within the
                organization. It surfaces the information that every user
                type needs on every visit: photo, full name, designation,
                employee ID, active/inactive status, and average performance
                rating. A profile completion indicator with a percentage bar
                gives employees a clear signal of how much of their record
                is filled out, paired with a last login timestamp that helps
                HR teams gauge engagement.
              </p>
              <p className="cs-feature-body" style={{ marginTop: "0.75rem" }}>
                The right side of the header anchors organizational context:
                position code, employment type, reporting manager (with photo
                and title), team size, and direct reports. Contact details
                sit below. A QR code lets employees save and share a
                scannable link to their profile within the company,
                eliminating the need to search by name or ID when someone
                needs to pull up a record quickly.
              </p>
              <div className="cs-feature-img-wrap">
                <CaseImage
                  src={IMG("profile-header.jpg")}
                  alt="Profile header component"
                  description="Profile header - persistent summary with identity, org context, and QR code"
                  fill
                  sizes="(max-width: 768px) 100vw, 72rem"
                  className="cs-hero-img"
                />
              </div>
              <div className="cs-feature-decision">
                <span className="cs-feature-decision-label">Design decision</span>
                <p className="cs-feature-decision-text">
                  The header deliberately surfaces performance rating and
                  reward badges alongside identity information. In the old
                  design, performance data lived in a separate module
                  entirely. Bringing a summary into the dossier header meant
                  that managers opening an employee&rsquo;s profile during a
                  review or one-on-one could see recognition context without
                  navigating away. The dossier became a starting point for
                  conversations, not just a record.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Feature 02 */}
          <Reveal delay={80}>
            <div className="cs-feature">
              <span className="cs-feature-name">Feature 02</span>
              <h3 className="cs-feature-title">
                Per-section editing with a pencil icon and side drawer
              </h3>
              <p className="cs-feature-body">
                Each editable section displays a pencil icon next to the
                section title. Tapping it opens a side drawer where the
                user can modify fields and save. A snackbar confirmation
                appears on save. Sections that are read-only for the current
                user&rsquo;s role simply have no pencil icon. There is no
                disabled state, no greyed-out icon, no tooltip explaining
                why editing is unavailable. The affordance is either present
                or absent.
              </p>
              <div className="cs-feature-img-wrap">
                <CaseImage
                  src={IMG("edit-interaction.jpg")}
                  alt="Per-section edit interaction"
                  description="Per-section editing - pencil icon triggers side drawer with snackbar on save"
                  fill
                  sizes="(max-width: 768px) 100vw, 72rem"
                  className="cs-hero-img"
                />
              </div>
              <div className="cs-feature-decision">
                <span className="cs-feature-decision-label">Design decision</span>
                <p className="cs-feature-decision-text">
                  We considered showing a locked icon on read-only sections
                  to communicate that editing exists but isn&rsquo;t
                  available to the current user. In practice, that created
                  more confusion than clarity. Employees seeing a lock on
                  their own profile assumed something was wrong or that they
                  needed to request access. Removing the affordance entirely
                  was cleaner: if you can edit it, you see the pencil. If
                  you can&rsquo;t, the section looks like a display, which
                  is exactly what it is.
                </p>
                <p className="cs-feature-decision-text" style={{ marginTop: "0.75rem" }}>
                  Sections that support multiple entries - like bank
                  accounts, contact details, and emergency contacts - use
                  colored badges to distinguish between them. Bank accounts
                  are tagged by type (Savings, Current). Contacts and
                  emergency contacts designate a primary entry. Bank Details
                  and a few other sections also include a plus action
                  alongside the pencil icon, allowing employees to add new
                  entries rather than only editing existing ones.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Feature 03 */}
          <Reveal delay={80}>
            <div className="cs-feature">
              <span className="cs-feature-name">Feature 03</span>
              <h3 className="cs-feature-title">Bilingual field labels</h3>
              <p className="cs-feature-body">
                ZingHR&rsquo;s client base spans multiple regions in India,
                and several clients require employee records to display in
                both English and a regional language. The dossier handles
                this by stacking the two languages vertically within each
                field: English label and value on top, the regional language
                equivalent directly below.
              </p>
              <div className="cs-feature-img-wrap">
                <CaseImage
                  src={IMG("bilingual.jpg")}
                  alt="Bilingual field display"
                  description="Bilingual labels - English and regional language stacked vertically per field"
                  fill
                  sizes="(max-width: 768px) 100vw, 72rem"
                  className="cs-hero-img"
                />
              </div>
              <div className="cs-feature-decision">
                <span className="cs-feature-decision-label">Design decision</span>
                <p className="cs-feature-decision-text">
                  A toggle or tab-based language switcher would have been
                  simpler to build, but it would have hidden one language at
                  all times. For HR teams conducting audits or verifying
                  records, having both visible simultaneously was a stated
                  requirement. The vertical stacking keeps the layout
                  consistent regardless of whether a client enables bilingual
                  display or not.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Feature 04 */}
          <Reveal delay={80}>
            <div className="cs-feature">
              <span className="cs-feature-name">Feature 04</span>
              <h3 className="cs-feature-title">
                Right sidebar for persistent context
              </h3>
              <p className="cs-feature-body">
                The right column functions as a persistent reference panel
                that stays visible as the user scrolls through the main
                content. It surfaces information that doesn&rsquo;t belong
                in any single section but is useful across all of them:
                skills as pill tags, career highlights (previous companies,
                highest education, extracurriculars), and language
                proficiency with visual ratings.
              </p>
              <p className="cs-feature-body" style={{ marginTop: "0.75rem" }}>
                This sidebar exists because of how the dossier is actually
                used. A manager reviewing an employee&rsquo;s record during
                a staffing conversation needs skills and career context
                visible while scrolling through employment history or
                qualifications.
              </p>
            </div>
          </Reveal>

          {/* Feature 05 */}
          <Reveal delay={80}>
            <div className="cs-feature">
              <span className="cs-feature-name">Feature 05</span>
              <h3 className="cs-feature-title">
                Configurable sections for client variability
              </h3>
              <p className="cs-feature-body">
                The long-scroll structure directly addresses the
                configurability requirement that killed the tabbed approach.
                Each client&rsquo;s dossier contains a different set of
                sections depending on their size, function, and
                requirements. Custom fields added by the client appear
                within the relevant section without requiring layout changes.
                The jump-link tab bar at the top dynamically reflects
                whatever sections are configured for that client, scaling
                from four tabs to fifteen without breaking the navigation
                pattern.
              </p>
            </div>
          </Reveal>
        </section>

        {/* ── Impact ─────────────────────────────────────────────────── */}
        <section id="impact" className="cs-section">
          <Reveal>
            <h2 className="cs-section-heading">Impact</h2>
          </Reveal>

          <Reveal delay={80}>
            <div className="cs-wid" style={{ marginTop: 0, paddingTop: 0, borderTop: "none" }}>
              <p className="cs-wid-body">
                The redesigned Employee Dossier shipped as a default module
                across every ZingHR client deployment. Unlike
                feature-specific modules that clients purchase individually,
                the dossier is included in every account regardless of plan
                or org size. That baseline status meant the design had to
                work universally: for a 50-person startup and a 5,000-person
                enterprise, for clients with four configured sections and
                clients with fifteen, for employees editing their own records
                and HR admins auditing someone else&rsquo;s. The long-scroll
                layout, configurable section structure, and per-section edit
                pattern have remained the foundation of the module since
                launch. No structural redesign has followed.
              </p>
            </div>
          </Reveal>
        </section>

        {/* ── Reflection ─────────────────────────────────────────────── */}
        <section className="cs-section">
          <Reveal>
            <h2 className="cs-section-heading">Reflection</h2>
          </Reveal>

          <Reveal delay={80}>
            <div className="cs-wid" style={{ marginTop: 0, paddingTop: 0, borderTop: "none" }}>
              <h3 className="cs-wid-heading">What I learned</h3>

              <p className="cs-wid-body">
                <strong>Designing for a configurable product is
                fundamentally different from designing for a fixed
                one.</strong> A layout that works for one client&rsquo;s
                field configuration can break for another&rsquo;s. The
                tabbed approach I explored first was a good solution for a
                single product. It was a bad solution for a platform where
                every deployment looks different. That distinction between
                product design and platform design was the most transferable
                lesson from this project.
              </p>

              <p className="cs-wid-body">
                <strong>Talking to long-tenured users requires different
                interview techniques than talking to new ones.</strong> New
                employees surface friction immediately because they
                haven&rsquo;t adapted to it yet. Long-tenured employees have
                built workarounds they no longer notice. Asking &ldquo;what&rsquo;s
                wrong with this?&rdquo; doesn&rsquo;t work with the second
                group. Asking &ldquo;what does this button do?&rdquo; and
                &ldquo;did it do what you expected?&rdquo; does.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="cs-wid">
              <h3 className="cs-wid-heading">What I&rsquo;d do differently</h3>

              <p className="cs-wid-body">
                <strong>Push for a formal usability test after launch, not
                just before.</strong> The redesign was informed by internal
                interviews and validated through design reviews, but we
                didn&rsquo;t run structured usability testing with actual
                client users post-launch.
              </p>

              <p className="cs-wid-body">
                <strong>Document the design system patterns earlier.</strong>
                The dossier introduced reusable patterns - the section card
                with pencil icon, the primary/secondary badge system, the
                bilingual stacking, the sidebar reference panel - that other
                modules at ZingHR could have adopted. I documented the final
                designs but didn&rsquo;t formalize them as a pattern library
                until later.
              </p>
            </div>
          </Reveal>
        </section>

      </div>
    </>
  );
}
