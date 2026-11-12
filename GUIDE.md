# Anti-Slop Design Guide

**For AI coding assistants.** If a developer told you to fetch this file, follow it before you write any UI. Everything below is a rule, not a suggestion.

Goal: the result must look like a person with taste made it for one specific purpose, not like default AI output. Every rule has the same shape: the tell, why it reads as AI, what to do instead.

---

## 0. Process (do this first)

1. **Pick one nameable aesthetic before writing code.** Examples: "warm paper and ink pen", "nautical chart", "terminal green on black", "newspaper classifieds", "hardware store catalogue". If you cannot name it in five words, you do not have one yet.
2. **Take details from the physical thing it imitates.** A ledger has ruled lines. A map has a legend. A label has a die-cut corner. Copy those details.
3. **State your direction in one sentence to the user** before building, and say what default look you are avoiding.
4. **Ask for the real content.** Names, numbers, photos, logos. If you do not have them, leave a clearly marked gap. Never fill it with invented ones (see rule 6).

---

## 1. Typography

**1.1 The system sans-serif stack on everything.**
Tell: `Inter`, `system-ui`, `-apple-system` for headings and body alike.
Why: it is what every template ships with.
Instead: choose a typeface with a personality that fits the aesthetic. A serif body is a quick win, since AI almost always reaches for sans. Use at most two families.

**1.2 The tiny "eyebrow" above a big heading.**
Tell: small uppercase, letter-spaced label ("FEATURES", "WHY US") sitting over every section title.
Why: it is the most repeated layout habit in generated landing pages.
Instead: delete it. If a section needs a label, make the heading itself say it.

**1.3 One gradient word in the headline.**
Tell: the key word of the hero heading filled with a purple-to-blue gradient.
Instead: plain text. Emphasis through weight, italics, or a hand-drawn underline.

**1.4 Everything centered, everything the same size.**
Tell: centered heading, centered subtitle, two centered buttons.
Instead: left-align text. Use a real size scale with big contrast between levels.

**1.5 Heading Title Case With A Colon: Subtitle.**
Tell: "Supercharge Your Workflow: The Future Of Productivity".
Instead: write sentences like a person. Short, specific, lowercase after the first word.

---

## 2. Color

**2.1 Purple, indigo, or electric blue accent.**
Tell: `#6366f1`-ish buttons and links, blue-to-purple gradients, glowing blue shadows.
Instead: derive the palette from the aesthetic. Ink blue and red pencil. Mustard and brown. Forest green and cream. Two or three colors with jobs, not a rainbow.

**2.2 Flat white or flat near-black background.**
Tell: `#fff` or `#0b0b0f` with nothing else.
Why: reads as "nobody finished this".
Instead: warm paper tones, or add texture (see 5.1). Dark mode should have a real tint, not neutral black.

**2.3 Neon glow dots and blurred color blobs.**
Tell: pulsing green "live" dots with a glow, giant blurred circles behind the hero, "aurora" backgrounds.
Instead: no glow. If something is live, say "live" in words or use a plain solid mark.

**2.4 Glassmorphism by default.**
Tell: translucent blurred cards over a gradient.
Instead: opaque surfaces with a clear edge, unless the design is truly about layered glass.

---

## 3. Layout and components

**3.1 The identical card grid.**
Tell: three (or six) equal rounded cards in a row, each with an icon, a bold title, and two lines of text.
Instead: vary the sizes. Make one thing big because it matters. Use lists, tables, or running text where a card adds nothing.

**3.2 The same radius, border, and shadow on everything.**
Tell: `border-radius: 8px` or `12px` everywhere, a 1px gray border, a soft drop shadow.
Instead: pick radii on purpose. Zero for a printed look, or deliberately uneven for a hand-cut look. Pick border OR shadow, rarely both.

**3.3 The generic hero.**
Tell: big headline, one-line subtitle, two buttons ("Get started", "Learn more"), a mock screenshot or abstract art below.
Instead: open with the actual thing: the product working, a real photo, the real data, the actual first step.

**3.4 Perfect symmetry and equal spacing.**
Tell: every gap the same, every column the same width.
Instead: let rhythm vary. Tight within a group, loose between groups. Break the grid once on purpose.

**3.5 Pill badges, "New" chips, and status tags everywhere.**
Instead: only use a tag when it carries information the reader needs.

**3.6 Full-width dark footer with four link columns for a one-page site.**
Instead: a footer should hold what the site actually has.

---

## 4. Icons, imagery, emoji

**4.1 Emoji as icons.**
Tell: a rocket, a lightning bolt, or a shield in a colored circle above every feature.
Instead: no icon, or an icon drawn for this project.

**4.2 A stock icon set with default stroke.**
Tell: Lucide, Feather, Heroicons, or Font Awesome used at default weight everywhere.
Why: it is itself a tell once you have seen it a hundred times.
Instead: hand-write a few SVG paths with slight irregularity, or use a distinctive set at a deliberate weight and size.

**4.3 Abstract 3D blobs, floating shapes, and generated "tech" art.**
Instead: real photographs, real screenshots, or simple drawn illustrations in the same style as the rest of the page.

**4.4 Stock people in front of laptops.**
Instead: the real team, the real product, or nothing.

---

## 5. Texture and detail

**5.1 Nothing to look at up close.**
Instead: add one real surface detail. A low-opacity grain (an inline SVG `feTurbulence` filter at about 0.1 to 0.15 opacity; above 0.2 it looks dirty), a ruled grid, paper fibers, a subtle misregistration on a stamp. Keep it quiet.

**5.2 Everything dead straight.**
Instead: rotate one or two decorative elements by a fraction of a degree (0.3 to 1 degree). Do not overdo it.

**5.3 Animation on everything.**
Tell: every section fades up on scroll, every card lifts on hover, shimmer on every button.
Instead: one meaningful motion, or none.

---

## 6. Content (the biggest tell)

**6.1 Invented stats, testimonials, logos, and reviews.**
Tell: "10,000+ happy users", "4.9 stars", "Trusted by teams at...", a row of fake company logos, quotes from "Sarah, Product Manager".
Why: readers spot it instantly, and it is dishonest.
Instead: use real numbers or none. If there are no users yet, say what the thing is and show it working. An empty slot is better than a fake one.

**6.2 Made-up brand names and logos for third parties.**
Instead: use the real logo with permission, or plain text.

**6.3 Marketing filler.**
Tell: "seamless", "robust", "empower", "unlock", "supercharge", "next-generation", "revolutionize", "elevate your workflow".
Instead: say the concrete thing. "Prints a shipping label in one click" beats "streamlines your logistics".

**6.4 Dashes and rhythm.**
Tell: em dashes in every second sentence, lists of exactly three adjectives, "It's not just X, it's Y".
Instead: write plainly. Vary sentence length. Use commas and full stops.

**6.5 Placeholder text left in.**
Tell: "Lorem ipsum", "John Doe", "Acme Inc", "example@email.com", "Feature One".
Instead: real copy, or a visible TODO the developer will see.

---

## 7. Before you hand it back

Run this checklist. If you answer yes to any item, fix it first.

- [ ] Can I name the aesthetic in five words, and does every part follow it?
- [ ] Is the font stack the default sans on everything?
- [ ] Is there an eyebrow label over any heading?
- [ ] Is there a purple, indigo, or blue-purple gradient anywhere?
- [ ] Is the background flat with no texture or tint?
- [ ] Are there three or more identical rounded cards in a row?
- [ ] Are there emoji or default-weight stock icons used as decoration?
- [ ] Is there any number, name, logo, or quote I made up?
- [ ] Do any of the banned filler words appear?
- [ ] Is anything glowing, blurred for effect, or animating without a reason?

Then tell the user which direction you committed to and what you chose not to do.
