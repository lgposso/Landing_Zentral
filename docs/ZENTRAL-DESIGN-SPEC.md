# ZENTRAL DESIGN SPECIFICATION v1.0

> **Mission:** Build a premium technology brand that communicates engineering excellence, trust and execution.

---

# 1. Brand

## Company

**Name:** Zentral Solutions

**Brand:** ZENTRAL

## Positioning

Zentral designs intelligent business systems.

We do **not** sell AI.
We do **not** sell chatbots.

We build systems that orchestrate business operations through automation, integrations and AI.

## Brand Attributes

- Premium
- Minimal
- Technical
- Calm
- Confident
- Modern
- Reliable

## Avoid

- Futuristic clichés
- Robots
- Brain icons
- Gear icons
- Stock photography
- Loud gradients
- Neon overload

---

# 2. Visual Principles

1. Engineering before marketing.
2. Clarity before complexity.
3. Trust before conversion.
4. Motion has purpose.
5. Every component must be reusable.
6. Simplicity wins.

---

# 3. Color System

| Token | Value |
|-------|-------|
| Background | #0A0A0A |
| Surface | #111111 |
| Card | #171717 |
| Border | #27272A |
| Primary | #2563EB |
| Primary Hover | #3B82F6 |
| Text | #FFFFFF |
| Secondary Text | #A1A1AA |

Rules:

- Blue is the only accent color.
- No rainbow gradients.
- High contrast.
- Dark mode first.

---

# 4. Typography

## Fonts

Headings

- Manrope ExtraBold

Body

- Inter

## Scale

| Element | Desktop |
|----------|----------|
| Hero | 72px |
| H1 | 56px |
| H2 | 42px |
| H3 | 28px |
| Body | 18px |
| Small | 16px |

---

# 5. Grid

- 12-column layout
- Max width: 1280px
- Desktop padding: 96px
- Tablet: 48px
- Mobile: 24px

Spacing Scale

8 / 16 / 24 / 32 / 48 / 64 / 96 / 128

Section spacing

140px desktop

---

# 6. Hero

Headline:

> Design Intelligent Systems That Work For Your Business.

Supporting copy:

We design automations, AI agents and custom software that eliminate repetitive work, connect existing tools and help businesses scale efficiently.

Buttons

- Schedule a Conversation
- Explore Solutions

Right column

**Zentral Core**

An animated SVG showing:

- CRM
- ERP
- WhatsApp
- OpenAI
- API
- Email
- Dashboard

connected to a central glowing cube.

No images.

---

# 7. Landing Structure

1. Navbar
2. Hero
3. Problem
4. Solutions
5. How We Work
6. Use Cases
7. Technology Stack
8. CTA
9. Footer

---

# 8. Components

## Buttons

Radius: 16px

Primary

- Blue
- White text
- Hover glow
- Scale 1.02

Secondary

- Transparent
- Border only

## Cards

Radius: 24px

Hover

- translateY(-6px)
- border changes to primary

---

# 9. Motion

Framer Motion only.

Hero

- Fade Up
- 0.6s
- easeOut

Cards

- stagger 0.08
- translateY 30px

Navbar

- Blur on scroll

Mouse

- subtle parallax on Zentral Core

---

# 10. Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide Icons

Architecture

```
app/
components/
features/
hooks/
lib/
config/
styles/
types/
public/
```

---

# 11. Copywriting

Always talk about business outcomes.

Prefer:

- Intelligent Systems
- Automation
- Integration
- Reliability
- Engineering

Avoid:

- Revolutionize
- Disrupt
- Magic AI
- Cutting-edge buzzwords

---

# 12. Accessibility

- Lighthouse >95
- Keyboard navigation
- Visible focus states
- Semantic HTML
- WCAG AA contrast

---

# 13. Performance

Targets

- LCP <2.5s
- CLS <0.1
- INP <200ms

Optimize:

- SVG illustrations
- next/font
- next/image
- Dynamic imports

---

# 14. SEO

Title:

Zentral Solutions | Intelligent Business Systems

Meta description:

Custom software, AI agents, workflow automation and integrations for modern businesses.

Structured Data:

Organization
WebSite
BreadcrumbList

---

# 15. Vision

Every product built by Zentral should feel like it belongs to the same ecosystem.

Whether it is:

- Landing
- Dashboard
- CRM
- Admin
- Client Portal

Everything follows this specification.
