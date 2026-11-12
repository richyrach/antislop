# Antislop

You are an AI about to design or build a user interface. Read this whole file first, then follow it. It replaces your default visual habits for this task.

## What slop is

Slop is a choice nobody made. When a brief leaves something open, you fill the gap with the most common answer in your training data, and so does every other model, so the results all look alike. That is true of the purple gradient, and it is equally true of whatever you reach for when told not to use the purple gradient.

So this file does not give you a better look to copy. A look copied from here would be the next slop. It gives you a way to make choices that come from the thing you are building.

If the project already has a design system, brand, or established styling, follow that. This guide fills gaps. It does not overrule the project.

## 1. Get the material before you design

1. Work out three things: what this is, who uses it, and the one job this screen has.
2. Look for real material in the project: logo, colours, fonts, photos, screenshots, copy, numbers, customer names. Check existing CSS variables, assets folders, and the README.
3. Ask the user once for whatever is missing and would matter: real photos, real figures, real quotes, the tone they want.
4. If the material does not exist, design with what is true. A shorter honest page beats a full page of filler.

## 2. Take the design from the subject

Do this in writing before any code.

1. **List the subject's world.** Write at least eight concrete things that belong to it: objects, materials, tools, places, documents, signage, packaging, uniforms. For a bakery: flour sacks, proofing baskets, the chalk price board, waxed paper, the oven door. For a database tool: query plans, index cards, ledger rows, rack labels.
2. **Find its native document.** Every field already has a way of laying out information: a timetable, a menu, a receipt, a spec sheet, a field guide, a score sheet, a map legend, a parts catalogue, a prescription label. Borrow that structure. It will fit the content better than a hero plus three cards.
3. **Derive each choice from the list.**
   - Colour: sampled from real things in that world, each colour given a job.
   - Type: what that world prints itself in, and why.
   - Layout: the native document's structure.
   - Detail: marks that carry information in that world (a stamp that says a date, a rule that separates fare zones), never marks that only decorate.
4. **Run the swap test.** Imagine the product name replaced by a competitor's, then by a company in a different industry. If the design still fits, it is generic. Go back to step 1.
5. **Run the because test.** For each visible decision, finish the sentence "because..." with a fact about the subject or the user. "Because it looks clean", "modern", "premium", or "less AI" are not reasons.
6. **Tell the user your direction in two sentences,** including what the generic version would have been, then build.

One idea carried all the way through beats ten decorations. Do not reuse the direction from your last build.

## 3. The defaults you will reach for

Each time one look gets called out, models move to the next. Read these lists to learn the mechanism, then assume there is a newer one not written here yet.

**Wave 1: template SaaS.**
Inter or the system sans on everything. Indigo, violet, or blue-to-purple gradients, often on one headline word and the main button. Dark navy background with blurred colour blobs. A pill badge above a centred headline, a one-line subtitle, two buttons ("Get started", "Learn more"). Three identical rounded cards, each with an icon or emoji, a bold title, two lines of text. Glass panels with backdrop blur. A glowing "live" dot. One large radius and one soft shadow on every element. Everything fading up on scroll. A logo row and "Trusted by 10,000+".

**Wave 2: tasteful slop.** This is what you produce when told "don't look AI". It is now as recognisable as wave 1.
- Cream or warm paper background with a serif headline and a terracotta, rust, or sage accent.
- Near-black background with a single acid green, orange, or vermilion accent.
- The broadsheet look: hairline rules, zero radius, newspaper columns, for something that is not a newspaper.
- One italic or coloured word inside an otherwise plain headline.
- A small tracked uppercase label above every heading, often in monospace.
- Monospace for small labels and metadata on a page that has nothing to do with code.
- Facts strung together with middle dots under a title ("Open source · MIT · One file").
- "01", "02", "03" in front of things that are not a sequence.
- An arrow glued to the end of every link.
- A bento grid: the same icon cards as before, now in boxes of uneven size.
- Grain or noise laid over the whole page, things rotated one degree, scribbled underlines, and faux handwriting, added to seem hand-made.
- A drawn browser window or fake terminal as the hero image.
- Fashionable type pairings of the moment (a grotesque with a display serif and a mono).

**Wave 3: whatever you are about to choose because it seems like the non-AI option.** Catch that thought. Choosing something to avoid looking generated is the same reflex as choosing the default.

**What stays the same in every wave.** These are the real tells:
- **Uniformity.** One radius, one shadow, one spacing value, one animation, applied to everything.
- **Decoration that says nothing.** Labels, dots, numbers, borders, and badges that would not be missed.
- **Template structure.** Three cards because three fills a row. A section because pages have that section.
- **Words any site could use.**
- **Invented proof.**

None of the items above is banned when the subject gives a reason. A purple brand should be purple. A newspaper should look like one. The problem is a cluster of them with no reason behind any.

## 4. Honesty (never waived)

- Never invent numbers, customers, testimonials, reviews, ratings, logos, awards, press mentions, team members, or addresses.
- Never show a "Trusted by" row, a star rating, or a user count unless the user gave you the real one.
- Sample data in a demo UI must look like sample data and be labelled as such.
- Do not ship a form, signup box, or button that does nothing.
- Do not leave placeholders ("Lorem ipsum", "Acme", "John Doe", "Feature one").
- Do not use stock or generated images as if they showed the real product, place, or people.
- If a section feels empty without proof, remove the section.

## 5. Words

**Say the concrete thing.** The headline states what this is or does. If a competitor could use the sentence unchanged, rewrite it. "Prints a shipping label in one click" beats "Streamline your logistics".

**Do not narrate.** Cut every piece of text that describes the page, labels something already obvious, or exists to fill a gap: taglines under the logo, captions restating the heading, metadata nobody asked for, lines explaining how the design was made or how honest it is. If removing it loses no information, remove it.

**Name sections by their content.** Not "Features", "Why us", "How it works", "What people say". Buttons name the action: "Download the PDF", not "Get started".

**Cut these words:** seamless, robust, powerful, elevate, empower, unlock, supercharge, streamline, leverage, cutting-edge, next-generation, revolutionary, effortless, world-class, tailored, holistic, innovative, game-changing, "in today's fast-paced world", "take it to the next level", "your trusted partner".

**Cut these patterns:**
- "It's not just X, it's Y." Also "X, not Y." as a slogan.
- Three adjectives or three short fragments in a row for rhythm ("Fast. Simple. Yours.").
- A question answered at once ("The result? Fewer outages.").
- "Whether you're X, Y, or Z."
- Dashes used for asides. Use a comma or a full stop.
- Title Case Headings. Use sentence case.
- Emoji as bullets or in headings. Bold scattered through sentences.
- Hedging ("can help you", "may potentially").

**Other languages.** Write the copy in the page's language from the start. Do not translate English marketing idiom. These patterns have equivalents in every language. Cut those too.

## 6. Craft floor

A page that fails these looks unfinished, and unfinished reads as generated.

- **Contrast** meets WCAG AA. Check grey text and text over images or colour.
- **Every control** has designed hover, focus-visible, active, and disabled states. Hover is more than a fade.
- **Every view** has its empty, loading, and error state. Errors say what happened and how to fix it.
- **Responsive** from 360px wide with no horizontal scroll. Tap targets at least 44px.
- **Type.** A real scale with clear steps between levels. Body lines 45 to 75 characters. At most two families unless the subject calls for more.
- **Spacing.** One scale, used everywhere. Tight inside a group, loose between groups.
- **Motion.** Only where it explains a change of state. Animate transform and opacity only. Respect `prefers-reduced-motion`. Content is visible without JavaScript.
- **Structure.** Semantic HTML, one `h1`, heading levels in order, labels on inputs, alt text on images.
- **Fonts and scripts.** Self-host them or use fonts already on the device. Many networks block or throttle third-party font and script hosts, and a blocking request to one leaves a blank page. The page must render fully with every third-party host unreachable.
- **Right-to-left and non-Latin scripts.** Set `lang` and `dir`. Use logical properties (`margin-inline`, `padding-inline`, `inset-inline`, `text-align: start`). Use a typeface drawn for the script. No letter-spacing, uppercase, or italics on Arabic-script text. Give it more line height. Mirror directional icons, not logos or media controls.

## 7. Product UI: dashboards, forms, tables, settings

Slop here looks different from landing pages.

- A row of four stat cards (big number, small label, green arrow with a percentage) at the top of every dashboard. Show a number only if the user acts on it.
- A chart because dashboards have charts. Pick the chart from the question it answers. No donut for two values.
- Every block wrapped in a card, and cards inside cards. Use space and alignment first.
- Tabular data forced into cards. Use a table. Right-align numbers, use tabular figures.
- A sidebar with icons for three destinations.
- A modal for everything. A skeleton shimmer on everything.
- Metrics, activity feeds, and user names invented to fill the screen. Use the real schema, or clearly marked sample rows.
- Forms: visible labels above fields, the right input type, validation that says how to fix the problem, and a button that names what happens.
- Density follows use. A tool used all day is denser than a marketing page.

## 8. Before you hand it back

Answer each one. Fix anything that fails.

1. Does it pass the swap test from section 2?
2. Can you give a "because" from the subject for the palette, the type, and the layout?
3. Count the items from section 3 on the page. Does each have a reason from the subject?
4. Is every number, name, quote, and logo real or supplied by the user?
5. Read every line of text. Would the page lose information without it? Could a competitor use it unchanged?
6. Does it pass every line of the craft floor? Check it at 360px, with the keyboard only, and with third-party hosts blocked.
7. Remove one decorative element. Did the page get worse? If not, leave it out and repeat.
8. If you can take a screenshot, look at it. What is the first thing the eye lands on? Is that the most important thing?

Then report to the user in a few lines: the direction you chose and why, what you left out because the real material is missing, and anything you could not check.
