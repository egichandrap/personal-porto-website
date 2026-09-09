# Portfolio Optimizer

Claude Code skill untuk mengoptimalkan personal portfolio website dari sisi:

* Personal branding
* Recruiter conversion
* Content
* UX/UI
* SEO
* Accessibility
* Performance
* Technical quality

Tujuannya bukan hanya membuat portfolio terlihat bagus, tetapi membuat **value sebagai software engineer terlihat jelas dan credible**.

---

# Installation

Global skill:

```text
~/.claude/skills/portfolio-optimizer/
├── SKILL.md
└── README.md
```

Setelah tersedia, skill dapat digunakan dari project portfolio.

---

# Commands

## Audit

Melakukan assessment tanpa mengubah code.

```text
/portfolio-optimizer audit
```

Review:

```text
Branding
Recruiter Impact
Content
UX/UI
SEO
Accessibility
Performance
Technical Quality
```

Hasil akan dikategorikan:

```text
P0
P1
P2
P3
```

---

## Strategy

Menentukan positioning portfolio.

```text
/portfolio-optimizer strategy
```

Claude akan mengevaluasi:

```text
Target Audience
Positioning
Primary Message
Differentiator
CTA
```

---

## Content

Optimasi copywriting portfolio.

```text
/portfolio-optimizer content
```

Fokus:

```text
Hero
About
Experience
Projects
Skills
CTA
Contact
```

---

## UX

Review dan optimasi UX/UI.

```text
/portfolio-optimizer ux
```

Fokus:

```text
Visual hierarchy
Navigation
Spacing
Typography
Responsive design
Project presentation
Experience presentation
CTA
Animation
```

---

## SEO

Audit dan optimasi SEO.

```text
/portfolio-optimizer seo
```

Fokus:

```text
Title
Description
Canonical
Open Graph
Sitemap
Robots
Heading hierarchy
Structured data
Semantic HTML
```

---

## Performance

Audit performance.

```text
/portfolio-optimizer performance
```

Fokus:

```text
LCP
INP
CLS
Images
Fonts
JavaScript
Client Components
Third-party scripts
Network requests
Rendering strategy
```

---

## Accessibility

Audit accessibility.

```text
/portfolio-optimizer accessibility
```

Fokus:

```text
Semantic HTML
Keyboard navigation
Focus state
Contrast
Alt text
ARIA
Reduced motion
Screen reader
```

---

## Optimize

Melakukan improvement secara langsung.

```text
/portfolio-optimizer optimize
```

Workflow:

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

Specific scope juga bisa diberikan:

```text
/portfolio-optimizer optimize hero
```

```text
/portfolio-optimizer optimize projects
```

```text
/portfolio-optimizer optimize mobile
```

```text
/portfolio-optimizer optimize seo
```

```text
/portfolio-optimizer optimize performance
```

```text
/portfolio-optimizer optimize recruiter-conversion
```

---

## Re-check

Melakukan final validation.

```text
/portfolio-optimizer recheck
```

Memastikan:

```text
Content
UX/UI
SEO
Accessibility
Performance
Technical Quality
```

tetap sesuai setelah perubahan.

---

# Recommended Workflow

Untuk initial review:

```text
/portfolio-optimizer audit
```

Kemudian:

```text
/portfolio-optimizer strategy
```

Lalu perbaikan:

```text
/portfolio-optimizer optimize
```

Dan final verification:

```text
/portfolio-optimizer recheck
```

Full workflow:

```text
Audit
  ↓
Strategy
  ↓
Optimize
  ↓
Re-check
```

---

# Quick Workflow

Jika langsung ingin Claude memperbaiki portfolio:

```text
/portfolio-optimizer optimize
```

Jika ingin Claude hanya memberikan rekomendasi:

```text
/portfolio-optimizer audit
```

Jika ingin fokus project:

```text
/portfolio-optimizer optimize projects
```

Jika ingin fokus recruiter:

```text
/portfolio-optimizer optimize recruiter-conversion
```

---

# Important Rules

Skill memiliki beberapa aturan penting.

### Never Invent

Claude tidak boleh mengarang:

```text
Project
Achievement
Metric
Technology
Responsibility
Business Impact
Performance Number
```

Jika informasi tidak tersedia:

```text
UNKNOWN
```

atau tanyakan kepada user.

---

### Evidence Over Adjectives

Hindari copy seperti:

```text
Passionate
Innovative
Results-driven
Highly motivated
Dynamic
Proven track record
```

tanpa evidence.

Lebih baik:

```text
Java
Go
Kafka
Redis
PostgreSQL
Kubernetes
Microservices
Distributed Systems
Clean Architecture
```

kemudian tunjukkan bagaimana teknologi tersebut digunakan.

---

### Backend Positioning

Jika portfolio ditujukan untuk backend engineer, jangan membuat positioning menjadi terlalu generic.

Prioritaskan:

```text
Backend Engineering
Distributed Systems
Microservices
API
Messaging
Data
Scalability
Reliability
Architecture
Infrastructure
```

---

### No Placeholder

Prioritaskan placeholder seperti:

```text
Lorem ipsum
Project 1
Project 2
Project 3
Coming soon
TODO
TBD
```

Jangan mengganti placeholder dengan informasi fiktif.

Cari informasi project yang benar terlebih dahulu.

---

### No Over-engineering

Jangan:

```text
Rewrite seluruh application
Menambah framework tanpa alasan
Menambah library tanpa kebutuhan
Membuat abstraction berlebihan
Mengubah architecture yang tidak berkaitan
```

Gunakan perubahan terkecil yang memberikan impact terbesar.

---

# Priority

Urutan prioritas:

```text
P0
Credibility / broken UX / placeholder / major conversion issue

P1
Positioning / Content / UX / SEO / Performance

P2
Visual refinement / Accessibility

P3
Optional polish
```

Jangan menghabiskan waktu pada P3 jika P0/P1 masih ada.

---

# Example Prompts

Natural language juga bisa digunakan.

### Audit

```text
Audit my portfolio and identify the highest-impact improvements
for recruiter conversion, technical credibility, UX, SEO,
accessibility, and performance.
Do not modify the code.
```

### Optimize

```text
Optimize my portfolio for backend engineering job opportunities.

Prioritize recruiter impact and technical credibility.
Do not invent any professional information.
Do not over-engineer the implementation.
```

### Project Section

```text
Optimize the project section.

Replace placeholder content only with information that can be
verified from the repository or existing project information.
Make each project demonstrate engineering capability rather than
just listing technologies.
```

### Recruiter Conversion

```text
Review the portfolio from the perspective of a technical recruiter
and engineering manager.

Identify what would make them continue reading, what would create
doubt, and what would make them contact me.
Then implement the highest-impact improvements.
```

### Final Review

```text
Re-check the portfolio after the changes.

Verify content accuracy, recruiter impact, UX/UI, SEO,
accessibility, performance, and technical quality.
```

---

# Philosophy

```text
Professional credibility
        ↓
Clear positioning
        ↓
Strong evidence
        ↓
Good UX
        ↓
Good visual design
        ↓
SEO
        ↓
Performance
        ↓
Polish
```

> The portfolio should demonstrate the same engineering quality that it claims to represent.

