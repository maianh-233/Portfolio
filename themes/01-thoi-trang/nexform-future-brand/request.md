# Yêu cầu ban đầu của BA

Loại dự án: Landing page — chế độ nhanh (không có SRS)

# MASTER PROMPT — NEXFORM DIGITAL FASHION ART GALLERY

## 1. ROLE & OBJECTIVE

Act as a senior Creative Director, Fashion Art Director, Digital Experience Designer, and Frontend Developer.

Design and implement a premium editorial landing page for NEXFORM, a conceptual independent fashion brand exploring the intersection of avant-garde fashion, 3D design, and digital art.

The website must feel like a curated digital exhibition rather than a conventional fashion storefront.

The main objective is to communicate the brand's creative philosophy, showcase conceptual fashion collections, document its creative process, and establish a distinctive visual identity.

This is a brand presentation and artistic portfolio website only.

Do not implement e-commerce features, shopping carts, checkout flows, product pricing, inventory, or purchase-oriented product cards.

## 2. BRAND IDENTITY

Brand name: NEXFORM

Brand category: Independent Experimental Fashion Studio.

Creative disciplines: Avant-garde fashion, 3D art, digital fashion visualization, material research, and editorial photography.

Primary tagline:
"Beyond the Known Form."

Brand statement:
"NEXFORM explores the evolving relationship between the human body, material, and digital space through experimental fashion and visual art."

Brand personality:
- Intellectual and experimental.
- Minimal and refined.
- Contemporary and future-oriented.
- Artistic rather than commercial.
- Premium without unnecessary visual luxury clichés.

Brand philosophy:
1. Form is Expression.
2. Material is Language.
3. Technology Expands Imagination.

The brand identity should feel consistent across typography, image selection, layout, interactions, and editorial copy.

Treat NEXFORM as a fictional creative concept. Do not fabricate real-world achievements, customer testimonials, media coverage, awards, or historical claims.

## 3. ART DIRECTION

Create a visual system inspired by contemporary art galleries, high-end fashion editorials, independent art publications, and experimental 3D design studios.

The overall atmosphere should be quiet, precise, architectural, and visually confident.

Prioritize:
- Large-scale editorial photography.
- Sculptural silhouettes and unusual garment proportions.
- Abstract chrome and metallic 3D forms.
- Neutral backgrounds and controlled lighting.
- Intentional negative space.
- Asymmetric editorial compositions.
- Large expressive typography.
- Small technical labels and archival metadata.
- Strong contrast between imagery and typography.

Avoid generic SaaS layouts, conventional agency templates, excessive rounded cards, decorative gradients, neon cyberpunk clichés, and repetitive three-column grids.

The website should appear art-directed, not automatically assembled from generic UI components.

## 4. COLOR SYSTEM

Use the following design tokens:

- Ivory: #F3F0E9
- Carbon: #222321
- Silver: #B8B8B2
- Stone: #D7D4CC
- Muted Olive: #777C70

Ivory should dominate the primary page background.

Carbon should establish typography, navigation, and contrast.

Silver and Stone should support material studies, subtle dividers, and secondary surfaces.

Muted Olive should be used sparingly.

Keep the palette restrained and allow the photography to provide most of the visual richness.

Do not apply gradients to every section. Use material reflections and lighting within the imagery instead.

## 5. TYPOGRAPHY

Build a clear editorial type hierarchy.

Display typography:
- Elegant expressive serif.
- Large headlines with deliberate line breaks.
- Selective italic styling.
- High contrast between title and supporting text.

Interface typography:
- Clean modern sans-serif.
- Highly legible body text.
- Compact uppercase metadata.
- Subtle letter spacing for labels.

Suggested typefaces:
- Cormorant Garamond for expressive editorial headings.
- DM Sans or Inter for body text, navigation, and technical labels.

Use no more than two primary type families unless a compelling design reason exists.

Ensure Vietnamese characters render correctly if Vietnamese content is included.

Typography must remain legible at all breakpoints.

## 6. INFORMATION ARCHITECTURE

Build the landing page using the following sections in this exact order:

1. Exhibition Hero.
2. Brand Manifesto.
3. Collections as Art.
4. Creative Lab.
5. Visual Archive.
6. Contact.

Use a minimal header and footer.

Suggested header navigation:
- Manifesto
- Collections
- Creative Lab
- Archive
- Contact

The NEXFORM wordmark should link to the top of the page.

Use anchor navigation or existing routing conventions. Avoid unnecessary pages or complicated navigation.

## 7. SECTION 01 — EXHIBITION HERO

Create a cinematic editorial opening that occupies approximately 85–100% of the desktop viewport height.

Design requirements:
- Minimal navigation positioned at the top.
- NEXFORM wordmark with generous letter spacing.
- Oversized headline: "BEYOND THE KNOWN FORM."
- Supporting copy: "An independent exploration of fashion, material and digital space."
- One dominant fashion editorial image or a carefully art-directed composition of fashion imagery and abstract 3D art.
- Small exhibition metadata such as "INDEPENDENT FASHION STUDIO", "VISUAL RESEARCH / 001", or "DIGITAL EXHIBITION".
- A subtle "EXPLORE THE EXHIBITION" scroll cue.

The main visual must dominate the composition.

Use asymmetry, deliberate whitespace, and strong typography.

Do not create a generic centered hero with a background image, paragraph, and two conventional CTA buttons.

The primary CTA should scroll to the next relevant section.

The first viewport must communicate the brand's visual identity immediately.

## 8. SECTION 02 — BRAND MANIFESTO

Create a typography-led section that communicates the brand's philosophy.

Main statement:
"We do not follow form. We question it."

Supporting narrative:
"NEXFORM explores fashion as a language of structure, material, and identity. Through experimental silhouettes and digital image-making, each project investigates how the human form can be interpreted beyond familiar boundaries."

Use generous whitespace and a carefully controlled text width.

Combine one expressive editorial statement with shorter supporting paragraphs.

Optional imagery includes sculptural fashion details, abstract forms, or material studies.

The section should feel like an art publication rather than a corporate About Us page.

## 9. SECTION 03 — COLLECTIONS AS ART

Create a visually rich collection gallery featuring three fictional conceptual projects.

Each collection must have:
- Project number.
- Collection title.
- Concept description.
- Artistic inspiration.
- Representative imagery.
- Material or visual research notes.
- A contextual link to explore the project.

Collection A:
POST-HUMAN

Theme: Body, structure, transformation.

Creative direction:
Explore the relationship between the human body and sculptural clothing through architectural silhouettes, exaggerated proportions, and experimental forms.

Visual language:
Carbon black, dramatic shadows, sculptural garments, and monochrome editorial photography.

Collection B:
SYNTHETIC NATURE

Theme: Material, light, organic geometry.

Creative direction:
Reinterpret organic structures through reflective surfaces, translucent materials, metallic textures, and digitally constructed forms.

Visual language:
Ivory, silver, soft grey, reflective surfaces, and realistic 3D material studies.

Collection C:
FORM / FLUX

Theme: Motion, digital identity, fluidity.

Creative direction:
Explore evolving silhouettes and fluid forms through digital visualization, flowing materials, and experimental compositions.

Visual language:
Cool neutrals, abstract movement, soft gradients within imagery when appropriate, and refined digital art.

Layout requirements:
- Do not display collections as ordinary product cards.
- Give each collection a distinct composition.
- Alternate between large landscape imagery, portrait imagery, text-led layouts, and asymmetric image pairings.
- Use different image ratios to create rhythm.
- Integrate project numbers and metadata into the composition.
- Keep descriptions concise and editorial.
- Use generous vertical spacing between projects.

The collection section should feel like three curated exhibitions within a larger gallery.

Collection links may open a project detail view, expand a project panel, or navigate to an existing project page.

If detailed project pages are not implemented, create a meaningful accessible modal or expanded content state rather than a dead link.

All project names and narratives are fictional creative concepts, not claims about actual released collections.

## 10. SECTION 04 — CREATIVE LAB

Present the design process as a visual research studio.

Organize the section into three research stages:

A. FORM RESEARCH
Show silhouette studies, sketches, sculptural shapes, and proportions.

B. DIGITAL PROTOTYPING
Show 3D garment models, wireframes, material previews, and digital experiments.

C. VISUAL EXPERIMENTS
Show lighting studies, abstract compositions, material explorations, and editorial tests.

Design direction:
- Editorial collage.
- Asymmetric image placement.
- Compact technical labels.
- Small explanatory notes.
- Restrained dividers and generous whitespace.

Use the headline:
"FROM FORM TO POSSIBILITY."

The section should communicate that technology is part of the creative process, not a decorative gimmick.

Do not add fake software dashboards, artificial performance statistics, or invented technical claims.

## 11. SECTION 05 — VISUAL ARCHIVE

Create a curated image archive featuring:
- Fashion editorials.
- 3D form studies.
- Material experiments.
- Behind-the-scenes documentation.
- Digital sketches and visual research.

Use a controlled masonry or editorial collage layout.

Requirements:
- Mix portrait, landscape, and square images.
- Preserve consistent gutters and visual balance.
- Avoid identical image cards with identical captions.
- Provide meaningful image alt text.
- Display compact captions or project metadata where appropriate.
- Implement a functional lightbox for selected images.
- Support keyboard interaction and a clear close action.
- Prevent background scrolling while the lightbox is open when appropriate.

The archive should feel like an evolving body of creative research.

Do not use repetitive stock imagery or repeat the same hero image throughout the page.

## 12. SECTION 06 — CONTACT

Create a quiet, typography-led closing section.

Headline:
"EVERY FORM BEGINS WITH A QUESTION."

Supporting copy:
"For creative collaborations, editorial projects, and conversations at the intersection of fashion and digital art."

Include clearly labeled contact links and social links only when valid destinations are available.

Do not invent a real email address or social media account.

Use a restrained footer containing:
- NEXFORM wordmark.
- Navigation links.
- Copyright year generated dynamically.
- A concise closing statement.

The ending should feel like the final room of a curated exhibition.

## 13. INTERACTION AND MOTION

Use motion selectively to reinforce the exhibition experience.

Potential interactions:
- Subtle fade and reveal transitions.
- Gentle image scale changes on hover.
- Restrained text movement.
- Smooth anchor scrolling.
- Lightbox transitions.
- Minimal image parallax where appropriate.

Motion should be refined and deliberate.

Avoid:
- Aggressive glitch effects.
- Constant floating elements.
- Excessive cursor-following effects.
- Long loading animations.
- Scroll hijacking.
- Animations that prevent access to content.

Respect the user's reduced-motion preferences.

All interactive elements must work on both desktop and touch devices.

## 14. RESPONSIVE DESIGN

Desktop:
- Use an editorial grid, potentially based on 12 columns.
- Allow full-width imagery and asymmetric compositions.
- Preserve substantial whitespace.
- Establish clear hierarchy between images, titles, and metadata.

Tablet:
- Simplify overlapping compositions.
- Adjust grid proportions and image ratios.
- Maintain a deliberate visual rhythm.

Mobile:
- Recompose asymmetric layouts into a logical vertical sequence.
- Preserve the intended image-to-text hierarchy.
- Use readable typography and appropriate side margins.
- Make navigation and interactive controls touch-friendly.
- Disable or simplify performance-heavy effects.
- Prevent horizontal overflow.

Do not merely shrink the desktop layout. Redesign compositions where necessary.

## 15. TECHNICAL IMPLEMENTATION

If an existing codebase is available:
- Inspect the project structure, package configuration, current framework, styling system, and existing components before making changes.
- Reuse existing dependencies and conventions whenever possible.
- Avoid unnecessary package installation or architectural changes.
- Implement the landing page directly in the project.
- Keep components modular and maintainable.
- Separate collection content from presentation where appropriate.
- Preserve existing functionality unrelated to the requested page.

If starting from scratch:
- Use the framework and tooling appropriate to the environment.
- Create reusable components for shared navigation, image presentation, and section layouts.
- Keep visual content and metadata easy to update.
- Use responsive images and lazy loading for below-the-fold media.
- Optimize asset sizes and prevent layout shifts.
- Use semantic HTML and accessible interaction patterns.

For 3D content, prioritize high-quality rendered assets and optimized media.

Do not introduce a heavyweight real-time 3D engine unless it is genuinely necessary and supported by the project.

Do not simulate functional technology with meaningless controls.

## 16. IMAGE AND ASSET REQUIREMENTS

Use coherent, high-quality fashion editorial and 3D imagery.

The imagery must support the brand's art direction and remain visually consistent.

Prioritize:
- Sculptural fashion photography.
- Architectural silhouettes.
- Metallic and translucent materials.
- Neutral studio environments.
- Abstract 3D sculptures.
- Wireframe and material studies.

Use available project assets first.

If suitable assets are unavailable, use an available image sourcing method or create appropriate assets.

Do not reference nonexistent local image paths.

Do not reuse the same image across multiple unrelated collections.

Ensure images load correctly, use suitable aspect ratios, and have appropriate alternative text.

Avoid broken image placeholders and unrelated stock photography.

## 17. QUALITY ASSURANCE

Before completion:
- Verify every section is present.
- Verify navigation and anchor links.
- Verify collection detail interactions.
- Verify archive lightbox behavior.
- Verify mobile navigation.
- Test desktop, tablet, and mobile layouts.
- Check image loading and responsive image behavior.
- Check text contrast and keyboard focus states.
- Check for horizontal overflow.
- Check for console errors and broken links.
- Confirm that no e-commerce components have been introduced.

If browser preview or testing tools are available, inspect the actual rendered page and fix visual issues before finishing.

Do not claim to have tested functionality that was not actually tested.

## 18. FINAL DESIGN STANDARD

The final result must feel like a premium independent fashion studio with a sophisticated digital art direction.

The experience should combine:
- The restraint of a contemporary art gallery.
- The visual storytelling of an independent fashion magazine.
- The precision of a digital design studio.
- The experimental imagination of 3D art.

Every section should contribute to one coherent visual narrative.

Prioritize art direction, image quality, editorial composition, typography, and meaningful storytelling over unnecessary interface elements.

Deliver a complete, responsive, functional landing page rather than a static wireframe or a collection of generic UI cards.

The final experience must communicate one clear idea:

NEXFORM is not simply presenting clothes. It is exploring what fashion can become when form, material, and digital imagination meet.
