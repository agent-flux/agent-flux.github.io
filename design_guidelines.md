# AgentFlux Design Guidelines

## Design Approach
**Reference-Based with Academic Focus**: Drawing primary inspiration from OpenVLA's clean, professional academic project page aesthetic, combined with modern web standards for research presentations. The design prioritizes clarity, readability, and professional presentation of technical content.

**Key Design Principles**:
- Academic credibility through clean, minimal design
- Information hierarchy that guides readers from overview to technical depth
- Professional presentation without visual clutter
- Efficient scanning of technical content and benchmarks

## Core Design Elements

### A. Color Palette

**Light Mode (Primary)**:
- Background: 0 0% 100% (pure white)
- Text Primary: 0 0% 13% (near black for body text)
- Text Secondary: 0 0% 40% (medium gray for metadata)
- Accent/Links: 217 91% 60% (professional blue, similar to OpenVLA)
- Code/Technical: 0 0% 95% (light gray background for code blocks)
- Table Headers: 217 91% 97% (very light blue tint)
- Borders: 0 0% 90% (subtle gray borders)

**Dark Mode**:
- Background: 0 0% 7%
- Text Primary: 0 0% 95%
- Text Secondary: 0 0% 65%
- Accent/Links: 217 91% 65%
- Code/Technical: 0 0% 12%
- Table Headers: 217 30% 15%
- Borders: 0 0% 20%

### B. Typography

**Font Families**:
- Headers: 'Inter', system-ui, sans-serif (clean, modern)
- Body: 'Inter', system-ui, sans-serif (consistent throughout)
- Code/Technical: 'JetBrains Mono', 'Fira Code', monospace

**Type Scale**:
- Hero Title: text-4xl md:text-5xl lg:text-6xl, font-bold
- Section Headers: text-2xl md:text-3xl, font-semibold
- Subsection Headers: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg, leading-relaxed
- Captions/Metadata: text-sm, text-secondary
- Code: text-sm, monospace

### C. Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24 for consistency
- Component padding: p-4 (mobile), p-8 (desktop)
- Section spacing: py-12 md:py-20
- Element gaps: gap-4, gap-6, gap-8
- Container max-width: max-w-6xl for main content

**Grid System**:
- Author grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Results tables: full-width with horizontal scroll on mobile
- Architecture diagrams: single column, centered, max-w-4xl

### D. Component Library

**Navigation**:
- Sticky header with project title, minimal navigation
- Quick links to: Paper, Code, sections
- Subtle shadow on scroll: shadow-sm

**Hero Section**:
- Large, centered title with gradient text (optional subtle gradient)
- Author list in organized columns with institution superscripts
- Action buttons row: Paper, Code links with icons
- Brief tagline/description (2-3 sentences)
- Use a diagram/architecture image as hero visual

**Content Sections**:
- Clear section headers with anchor links
- Two-column layout for text + image where applicable
- Tables with alternating row backgrounds for readability
- Code blocks with syntax highlighting
- Collapsible sections for detailed technical content

**Tables & Benchmarks**:
- Sticky headers on scroll
- Highlight best results (bold, subtle background)
- Comparison tables with clear column alignment
- Responsive: stack columns on mobile

**Architecture Diagrams**:
- Centered, full-width (within container)
- Placeholder boxes with descriptive text for diagram components
- Caption below each diagram
- Light border and subtle shadow

**Footer**:
- BibTeX citation section with copy button
- Links to related resources
- Simple, minimal footer

### E. Animations

**Minimal, Purposeful Only**:
- Smooth scroll to anchor links
- Fade-in on scroll for sections (subtle, single use)
- Hover states on buttons/links (scale or underline)
- NO carousel animations, NO parallax, NO distracting effects

## Images

**Required Images**:
1. **Hero Architecture Diagram**: Place after the title/author section. A technical diagram showing AgentFlux's architecture (LoRA adapters, inference pipeline). Should be wide, approximately 1200x600px, with clear labels and professional styling.

2. **Model Architecture Visual**: In the "Core Architecture" section. Detailed diagram showing the post-training pipeline and decoupled inference framework. Similar style to OpenVLA's model diagram.

3. **Results Visualizations**: Optional charts/graphs for benchmark comparisons. Can use placeholder div elements with chart.js or similar if needed.

**Image Treatment**:
- All images should have subtle borders (border, rounded-lg)
- Drop shadows: shadow-md
- Responsive: scale appropriately on mobile
- Alt text for accessibility
- Lazy loading for performance

## Page Structure

1. **Header/Nav**: Minimal, sticky navigation
2. **Hero**: Title, authors, links, brief description, hero image
3. **Introduction**: Key highlights (3-4 bullet points), motivating use-cases
4. **Core Architecture**: Post-training pipeline, inference framework with diagrams
5. **Key Results**: Benchmark tables, performance metrics, comparison data
6. **Detailed Analysis**: Decoupled fine-tuning explanation, tool selection vs argument generation
7. **Applications**: Use-case demonstrations (blockchain, AI browsers, coding agents)
8. **Citation**: BibTeX section with copy functionality

## Responsive Behavior

- Mobile (< 768px): Single column, stacked layout, horizontal scroll tables
- Tablet (768px - 1024px): Two-column author grid, comfortable reading width
- Desktop (> 1024px): Full multi-column layouts, wider tables, side-by-side content

## Accessibility

- High contrast text (WCAG AA minimum)
- Semantic HTML structure
- Focus indicators on interactive elements
- Alt text for all images
- Keyboard navigation support
- Dark mode fully accessible with consistent contrast ratios