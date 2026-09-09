# Portfolio Optimizer

## Purpose

Portfolio optimization skill for improving a software engineer's personal portfolio website from the perspectives of:

* Personal branding
* Recruiter conversion
* Technical credibility
* UX/UI
* Content quality
* SEO
* Accessibility
* Performance
* Responsive design
* Code quality
* Maintainability

The goal is not merely to make the portfolio look better.

The goal is to make the portfolio clearly communicate:

```text
Who is this engineer?
        ↓
What does this engineer specialize in?
        ↓
What kind of systems has this engineer built?
        ↓
What technical problems has this engineer solved?
        ↓
What evidence demonstrates the capability?
        ↓
Why should a recruiter / engineering manager contact this person?
```

The portfolio is both:

1. A professional profile
2. A demonstration of engineering quality

Optimize both.

---

# Core Principles

## 1. Evidence Over Adjectives

Prefer concrete evidence over generic professional language.

Avoid relying on phrases such as:

```text
passionate developer
results-driven engineer
highly motivated
innovative professional
dynamic developer
proven track record
technology enthusiast
```

unless they are supported by concrete evidence.

Prefer:

```text
Java + Go
Distributed systems
Kafka
Redis
PostgreSQL
Microservices
Clean Architecture
High-throughput backend services
Telecom / Fintech / GovTech
```

Then connect technologies to actual work and outcomes.

---

# 2. Never Invent Professional Information

Never fabricate:

* Projects
* Responsibilities
* Technologies
* Metrics
* Business impact
* Performance numbers
* Company information
* Job titles
* Achievements
* Certifications
* Awards
* Users
* TPS
* Revenue impact
* Cost savings

If information is unavailable:

```text
UNKNOWN
```

or ask the user for the missing information.

Never create fictional metrics to make the portfolio appear stronger.

---

# 3. Evidence Hierarchy

When determining portfolio content, prioritize:

```text
Existing repository
        ↓
Existing project documentation
        ↓
Existing resume / CV content
        ↓
Existing portfolio content
        ↓
User-provided information
        ↓
Reasonable inference
```

Do not treat reasonable inference as factual evidence.

Clearly distinguish:

```text
FACT
INFERENCE
RECOMMENDATION
UNKNOWN
```

---

# 4. Target Audience

Optimize primarily for:

```text
1. Technical Recruiter
2. Engineering Manager
3. Backend Lead
4. CTO / Engineering Manager
5. Potential technical collaborator / client
```

The first few seconds of the portfolio should communicate the engineer's positioning clearly.

The visitor should not need to inspect the entire website to understand:

* Role
* Primary technologies
* Experience level
* Domain experience
* Availability
* Contact path

---

# 5. Backend Engineer Positioning

When the portfolio owner is primarily a backend engineer, do not accidentally position the person as a generic full-stack developer.

Frontend technology may be shown as supporting capability.

Primary positioning should emphasize:

```text
Backend Engineering
Distributed Systems
Microservices
API Design
Data & Messaging
Scalability
Reliability
Architecture
Cloud / Infrastructure
Observability
Testing
```

Technology lists must support the positioning instead of becoming a random technology catalog.

---

# Operating Modes

This skill supports:

```text
audit
strategy
optimize
content
ux
seo
performance
accessibility
recheck
```

Modes are independent.

Use only the mode relevant to the user's request.

---

# AUDIT

Use:

```text
/portfolio-optimizer audit
```

Purpose:

Perform a read-only assessment before making changes.

Inspect:

* Repository structure
* Framework
* Routes
* Components
* Styling
* Responsive behavior
* Metadata
* SEO
* Accessibility
* Performance
* Content
* Projects
* Experience
* Skills
* Contact/CTA
* External links
* Images
* Fonts
* Animations

Do not modify production code during audit.

Output:

```text
Portfolio Score

Branding          XX/100
Recruiter Impact  XX/100
Content           XX/100
UX/UI             XX/100
SEO               XX/100
Accessibility     XX/100
Performance       XX/100
Technical Quality XX/100
```

Then classify findings:

```text
P0
Critical issue affecting credibility, usability, or conversion.

P1
Important improvement with meaningful impact.

P2
Quality improvement.

P3
Optional polish.
```

Also classify:

```text
CONTENT
UX
UI
SEO
ACCESSIBILITY
PERFORMANCE
TECHNICAL
CONVERSION
```

Example:

```text
P0 | CONTENT | Placeholder project descriptions
P0 | CONVERSION | Weak primary CTA
P1 | SEO | Missing canonical metadata
P1 | UX | Experience section lacks visual hierarchy
P2 | PERFORMANCE | Unoptimized project images
```

---

# STRATEGY

Use:

```text
/portfolio-optimizer strategy
```

Determine the portfolio's positioning.

Analyze:

```text
Current Positioning
Target Positioning
Target Audience
Primary Message
Supporting Evidence
CTA
```

For example:

```text
Current:

Backend Engineer
Java / Go

Potential positioning:

Backend Engineer specializing in Java and Go,
with experience building distributed and
high-scale systems across telecom, fintech,
and government technology.
```

Do not invent specialization that is not supported by evidence.

---

# CONTENT

Use:

```text
/portfolio-optimizer content
```

Review and improve:

* Hero headline
* Hero description
* About section
* Experience
* Projects
* Skills
* CTA
* Contact
* Microcopy

## Hero

The hero should communicate:

```text
Identity
+
Specialization
+
Differentiator
+
CTA
```

Avoid overly generic introductions.

Bad:

```text
Welcome to my portfolio.
I'm a passionate developer.
```

Better structure:

```text
Backend Engineer
Java + Go

Building reliable backend systems,
distributed services, and scalable APIs.
```

Use actual evidence from the portfolio owner.

---

# PROJECT CONTENT

Projects should communicate engineering capability rather than only technology names.

Preferred structure:

```text
Project
    ↓
Problem / Context
    ↓
Role
    ↓
Technical Approach
    ↓
Architecture / Important Decisions
    ↓
Technology
    ↓
Result / Impact
```

When information is available, include:

```text
Scale
Complexity
Architecture
Trade-offs
Performance
Reliability
Business impact
Engineering decisions
```

Do not invent missing information.

If a project is private or confidential:

```text
Do not expose confidential implementation details.
```

Use high-level descriptions instead.

---

# EXPERIENCE CONTENT

Review experience bullets using:

```text
Action
+
Technical Context
+
Problem / Responsibility
+
Outcome / Impact
```

Avoid excessive repetition such as:

```text
Developed...
Developed...
Developed...
Contributed...
Contributed...
Implemented...
Implemented...
```

Vary the language only when the actual responsibility differs.

Do not inflate responsibilities.

---

# SKILLS

Do not treat the skills section as a technology dump.

Group technologies by capability.

Example:

```text
Languages
Java
Go
JavaScript / TypeScript

Backend
Spring Boot
REST API
Microservices

Data
PostgreSQL
MySQL
Oracle
Redis

Messaging
Kafka
RabbitMQ

Infrastructure
Docker
Kubernetes
CI/CD

Engineering
Clean Architecture
DDD
Testing
Observability
```

Only include technologies supported by actual experience.

---

# PLACEHOLDER DETECTION

Detect and prioritize placeholder content:

```text
Lorem ipsum
Project 1
Project 2
Project 3
Your project
Example project
Coming soon
TODO
TBD
Sample text
Dummy text
```

Placeholder professional content is a P0 issue.

Do not replace it with fictional content.

Instead:

1. Search the repository for real projects.
2. Search project documentation.
3. Search existing resume/CV information if available.
4. Identify candidate projects.
5. Ask the user only when factual information is missing.

---

# UX / UI

Use:

```text
/portfolio-optimizer ux
```

Review:

* Visual hierarchy
* Typography
* Spacing
* Navigation
* Section ordering
* CTA visibility
* Card design
* Project presentation
* Experience presentation
* Mobile layout
* Tablet layout
* Desktop layout
* Interaction feedback
* Loading states
* Error states
* Empty states

The visual design should communicate:

```text
Professional
Technical
Modern
Confident
Readable
Intentional
```

Avoid generic AI-generated aesthetics.

Do not blindly introduce:

* Purple gradient backgrounds
* Excessive glassmorphism
* Excessive rounded cards
* Random floating elements
* Excessive animations
* Decorative UI with no purpose
* Generic dashboard layouts
* Excessive neon effects
* Excessive shadows

Design should support the personal brand.

---

# DESIGN SYSTEM

Before making broad UI changes, inspect existing:

```text
colors
typography
spacing
border radius
shadows
component patterns
breakpoints
animations
```

Prefer consistency over adding many new styles.

Use design tokens / CSS variables when appropriate.

Avoid one-off styling that creates visual inconsistency.

---

# RESPONSIVE DESIGN

Always evaluate:

```text
Mobile
Tablet
Desktop
Large Desktop
```

Priority:

```text
Content readability
        ↓
Navigation usability
        ↓
Layout
        ↓
Interaction
        ↓
Visual polish
```

Do not optimize only for desktop.

---

# ACCESSIBILITY

Use:

```text
/portfolio-optimizer accessibility
```

Check:

* Semantic HTML
* Heading hierarchy
* Button semantics
* Link semantics
* Keyboard navigation
* Focus states
* Color contrast
* Image alt text
* Form labels
* ARIA usage
* Reduced motion
* Screen-reader compatibility

Do not add ARIA unnecessarily when semantic HTML is sufficient.

---

# SEO

Use:

```text
/portfolio-optimizer seo
```

Review:

```text
<title>
<meta description>
canonical
robots
sitemap
Open Graph
Twitter metadata
favicon
heading hierarchy
semantic HTML
structured data
```

For a personal portfolio, consider structured data such as:

```text
Person
ProfilePage
WebSite
```

when appropriate.

Connect identity signals where available:

```text
Portfolio
LinkedIn
GitHub
Other professional profiles
```

Do not create fake profiles or links.

---

# SEO CONTENT

SEO must not make the portfolio sound unnatural.

Prioritize:

```text
Person identity
Role
Specialization
Technology
Experience
Domain
Location
```

Example concepts:

```text
Backend Engineer
Java Developer
Go Developer
Software Engineer
Jakarta
Microservices
Distributed Systems
```

Use only terms that genuinely describe the person.

Avoid keyword stuffing.

---

# PERFORMANCE

Use:

```text
/portfolio-optimizer performance
```

Review:

* JavaScript bundle
* Images
* Fonts
* CSS
* Client-side JavaScript
* Third-party scripts
* Animations
* Network requests
* Caching
* Lazy loading
* Rendering strategy

For Next.js applications, inspect:

* Server Components
* Client Components
* Dynamic imports
* Image optimization
* Font loading
* Metadata generation
* Static rendering
* Route behavior

Do not convert everything to Server Components blindly.

Do not optimize without understanding the existing architecture.

---

# WEB PERFORMANCE

When measurable, consider:

```text
LCP
INP
CLS
FCP
TTFB
Bundle Size
Image Size
Network Requests
```

Use evidence from actual measurements where possible.

Do not invent performance scores.

---

# ANIMATION

Animations should communicate hierarchy or provide useful feedback.

Prefer:

```text
Page entrance
Section reveal
Hover feedback
Navigation transition
Loading feedback
```

Avoid:

```text
Constant motion
Excessive parallax
Distracting background animations
Animation on every element
Long blocking transitions
```

Respect:

```text
prefers-reduced-motion
```

---

# RECRUITER CONVERSION

A portfolio should make the next action obvious.

Primary CTA should normally be one of:

```text
View Resume
Contact Me
Let's Work Together
LinkedIn
GitHub
```

Do not create five competing primary CTAs.

Evaluate:

```text
Can a recruiter understand the candidate quickly?
Can they find experience quickly?
Can they inspect projects quickly?
Can they find contact information quickly?
Can they find LinkedIn / GitHub quickly?
Can they download a resume if available?
```

---

# CASE STUDY QUALITY

When detailed project information exists, favor case-study presentation.

Recommended structure:

```text
Context
Problem
Constraints
Role
Architecture
Implementation
Trade-offs
Technology
Outcome
```

Technical depth should be proportional to the audience.

Do not turn every project into a 20-page technical document.

---

# CONFIDENTIALITY

Some professional projects may contain:

* Internal architecture
* Proprietary systems
* Customer information
* Internal URLs
* Credentials
* Internal business rules
* Confidential metrics
* Non-public infrastructure

Never expose secrets or confidential implementation details.

Before publishing content, classify information:

```text
PUBLIC
SAFE TO GENERALIZE
CONFIDENTIAL
SECRET
```

If uncertain, ask the user.

---

# CODE QUALITY

The portfolio itself is a demonstration of engineering quality.

Review:

* Component boundaries
* Naming
* Duplication
* State management
* Data fetching
* Error handling
* Type safety
* Accessibility
* Maintainability
* Dependency usage
* Unnecessary abstraction

Avoid broad refactoring unrelated to the optimization objective.

Do not rewrite the entire application merely to improve one section.

---

# NO OVER-ENGINEERING

Keep implementation focused.

Do not introduce:

* New frameworks without reason
* New state management libraries without need
* New UI libraries without need
* Complex abstraction layers
* Unnecessary API endpoints
* CMS systems for static content without a real requirement
* Excessive configuration
* Complex animation libraries for simple effects

Prefer the smallest change that produces the required improvement.

---

# IMPLEMENTATION PRIORITY

When optimizing, prioritize:

```text
P0
Credibility / broken UX / placeholder / major conversion issue
        ↓
P1
Positioning / content / UX / SEO / performance
        ↓
P2
Visual refinement / accessibility improvements
        ↓
P3
Optional polish
```

Do not spend significant effort on P3 while P0/P1 issues remain.

---

# OPTIMIZE

Use:

```text
/portfolio-optimizer optimize
```

Default workflow:

```text
Inspect
   ↓
Audit
   ↓
Prioritize
   ↓
Plan
   ↓
Implement
   ↓
Validate
```

Before editing:

1. Inspect repository structure.
2. Identify framework.
3. Identify entry points.
4. Identify relevant components.
5. Identify styling system.
6. Identify content sources.
7. Identify metadata.
8. Identify image/font strategy.
9. Identify current responsive behavior.

Then implement only prioritized improvements.

Do not blindly implement every recommendation.

---

# OPTIMIZE BY SCOPE

Specific optimization is supported.

Examples:

```text
/portfolio-optimizer optimize hero
```

```text
/portfolio-optimizer optimize projects
```

```text
/portfolio-optimizer optimize seo
```

```text
/portfolio-optimizer optimize mobile
```

```text
/portfolio-optimizer optimize performance
```

```text
/portfolio-optimizer optimize recruiter-conversion
```

---

# RECHECK

Use:

```text
/portfolio-optimizer recheck
```

Verify:

## Content

* No placeholder content
* No fabricated claims
* Positioning is clear
* Experience is understandable
* Projects demonstrate real capability

## UX

* Navigation works
* CTA is visible
* Mobile works
* Sections have clear hierarchy
* Links work

## UI

* Visual hierarchy is consistent
* Typography is readable
* Spacing is consistent
* Components are coherent

## SEO

* Metadata exists
* Heading hierarchy is correct
* Canonical is correct
* Open Graph is configured
* Structured data is valid when used

## Accessibility

* Semantic HTML
* Keyboard navigation
* Focus states
* Contrast
* Alt text
* Reduced motion

## Performance

* Images optimized
* Fonts optimized
* No unnecessary JavaScript
* No unnecessary third-party scripts
* Rendering strategy is appropriate

## Technical

* No unnecessary dependencies
* No broken builds
* No TypeScript errors
* No lint errors where applicable
* Existing functionality remains intact

---

# Change Safety

Before making changes:

```text
Identify current behavior
        ↓
Identify intended improvement
        ↓
Determine affected files
        ↓
Implement minimal scoped change
        ↓
Validate
```

Do not make unrelated changes.

If a broader refactor is beneficial but not required:

```text
Document as recommendation.
Do not implement automatically.
```

---

# External Research

Use web research only when the optimization requires current external information.

Examples:

* Current SEO recommendations
* Current accessibility guidance
* Current framework best practices
* Current browser behavior
* Current performance guidance
* Current library documentation

Do not use external research to invent facts about the portfolio owner.

Repository and user-provided information remain the source of truth for professional claims.

---

# Output Format

For audit:

```text
## Portfolio Assessment

Overall Score: XX/100

### P0
...

### P1
...

### P2
...

### P3
...

### Recommended Roadmap

1. ...
2. ...
3. ...
```

For implementation:

```text
## Changes

### Implemented
- ...

### Not Changed
- ...

### Validation
- ...

### Remaining Recommendations
- ...
```

Keep reports concise unless the user asks for a detailed audit.

---

# Quality Gate

Before completing an optimization:

```text
[ ] Portfolio positioning is clear
[ ] Target audience is clear
[ ] Hero communicates value quickly
[ ] No placeholder content remains
[ ] No fabricated professional claims
[ ] Experience is credible
[ ] Projects demonstrate real engineering capability
[ ] Technology list is relevant
[ ] CTA is clear
[ ] Responsive layout works
[ ] Accessibility reviewed
[ ] SEO reviewed
[ ] Performance reviewed
[ ] Existing functionality preserved
[ ] No unnecessary dependencies added
[ ] No unnecessary architectural rewrite
[ ] Build/tests/lint pass where applicable
```

---

# Guiding Principle

> Optimize the portfolio as a professional product, not merely as a website.
>
> Make the engineer's value obvious.
>
> Use evidence instead of adjectives.
>
> Show engineering decisions instead of technology lists.
>
> Improve credibility before visual polish.
>
> Never invent professional achievements.
>
> Keep implementation focused and avoid over-engineering.
>
> The portfolio should demonstrate the same engineering quality that it claims to represent.

