# Antislop

You are an AI about to design or build a user interface, or write the words on one. Read this whole file first, then follow it. It replaces your default habits for this task.

Longer reference files sit next to this one in `reference/`. Read the ones your task touches. If you fetched this file from a URL, they are at the same address under `reference/`:

- `reference/visual-design.md`: composition, hierarchy, colour, space, finish
- `reference/type.md`: choosing fonts, self-hosting, fonts already on each device, other scripts
- `reference/images.md`: finding real pictures, licences, what to do when there are none
- `reference/writing.md`: every kind of text, with the patterns to cut
- `reference/product-ui.md`: dashboards, tables, forms, settings, states

## What slop is

Slop is a choice nobody made. When a brief leaves something open, you fill the gap with the most common answer in your training data, and so does every other model, so the results all look and read alike. That is true of the purple gradient. It is equally true of whatever you reach for when told not to use the purple gradient.

So there are two ways to fail. One is the default page. The other is a page with the defaults stripped out and nothing put in their place: bare, timid, unfinished. The job is a page that is specific to its subject and good to look at.

If the project already has a design system, brand or established styling, follow that. This guide fills gaps. It does not overrule the project.

## 1. Get the material

1. Work out what this is, who uses it, and the one job this screen has.
2. Search the project for real material: logo, colours, fonts, photos, screenshots, copy, numbers, names. Check CSS variables, asset folders and the README.
3. Ask the user once, specifically, for what is missing and would matter: which photos, which figures, which facts.
4. Get pictures. A page about a place, a product, food or a person needs real images of it. Follow `reference/images.md`: the project's own files, then screenshots of the real product, then openly licensed photographs downloaded into the project and credited. Make the effort before deciding there are none.
5. Whatever is still missing, do not invent it and do not leave a hole. See "When material is missing" below.

## 2. Take the design from the subject

Do this in writing before any code.

1. **List the subject's world.** At least eight concrete things that belong to it: objects, materials, tools, places, documents, signs, packaging. For a bakery: flour sacks, proofing baskets, the chalk price board, waxed paper, the oven door.
2. **Find its native document.** Every field already lays out its information somehow: a timetable, a menu, a receipt, a spec sheet, a field guide, a score sheet, a map legend, a parts catalogue. Borrow that structure. It fits the content better than a hero and three cards.
3. **Derive each choice from the list.**
   - Colour: sampled from real things in that world, each given a job.
   - Type: what that world prints itself in. See `reference/type.md`.
   - Layout: the native document's structure.
   - Detail: marks that carry information there (a date stamp, a rule between fare zones), never marks that only decorate.
4. **Swap test.** Replace the product name with a competitor's, then with a company from another industry. If the design still fits, it is generic. Go back to step 1.
5. **Because test.** For each visible decision, finish "because..." with a fact about the subject or the user. "It looks clean", "modern", "premium" or "less AI" are not reasons.
6. **Tell the user your direction in two sentences,** including what the generic version would have been. Then build.

One idea carried all the way through beats ten decorations. Do not reuse the direction from your last build.

## 3. Make it good

The finished page has to meet all of these. Details are in `reference/visual-design.md`.

- **A composed first screen.** At desktop and phone size the visitor sees what this is, the one thing to do, and something worth looking at: a picture, a drawing that explains something, a striking piece of type, the product itself working.
- **One focal point per screen.** Shrink the page to a thumbnail. It should still be obvious where to look first.
- **Clear hierarchy.** Three levels that are plainly different in size and weight. One primary action per view.
- **Type chosen and set with care.** A typeface picked for a reason, a real size scale, readable line length, headlines that wrap well.
- **Colour with jobs.** One colour dominates, one supports, one marks action and appears rarely. Neutrals are tinted from the palette.
- **Everything aligned to something.** One spacing scale. Tight inside groups, generous between them and at the edges.
- **The frame is used.** A narrow column of small text in a wide window is not a design. Vary scale: something large next to something small.
- **Rhythm down the page.** Sections differ in layout and weight. The page has an opening, a middle and an end.
- **Finished at close range.** Designed states, icons from one set at one weight, set image sizes, a title and favicon, nothing that jumps on load.
- **Complete.** Every link goes somewhere. Every control works.

Then ask whether you would put your name on it. If not, it is not done.

### When material is missing

Do not ship an empty shell, and do not pad.

- Show the thing itself: the product working, a real example, the actual content the brief implies.
- Draw what can be drawn truthfully, in inline SVG: a map, a diagram of how it works, the object with its parts named.
- Where a real photo, figure or fact belongs and you do not have it, put a slot of the right size holding one plain note such as "Photo of the shop front goes here". Style it as a note to the owner, never as content.
- List every slot in your final report so the user can fill them.

## 4. The defaults you will reach for

Each time one look is called out, models move to the next. Read these to learn the mechanism, and assume there is a newer one not listed.

**Wave 1: template SaaS.** The default sans on everything. Indigo, violet or blue-to-purple gradients on a headline word and the main button. Dark navy with blurred colour blobs. A pill badge over a centred headline, a subtitle, two buttons ("Get started", "Learn more"). Three identical rounded cards with an icon or emoji each. Glass panels. A glowing "live" dot. One large radius and one soft shadow on everything. Every section fading up on scroll. A logo row and "Trusted by 10,000+".

**Wave 2: tasteful slop.** What you produce when told "don't look AI".
- Cream or warm paper with a serif headline and a terracotta, rust or sage accent.
- Near-black with a single acid green, orange or vermilion accent.
- The broadsheet look (hairline rules, zero radius) for something that is not a newspaper.
- One italic or coloured word in an otherwise plain headline.
- A small label in spaced capitals above every heading, often in monospace.
- Monospace for labels and metadata on a page that has nothing to do with code.
- Facts joined by middle dots under a title ("Open source · MIT · One file").
- "01", "02", "03" in front of things that are not a sequence.
- An arrow on the end of every link.
- A bento grid: the same icon cards in boxes of uneven size.
- Grain over the whole page, things rotated one degree, scribbled underlines, faux handwriting.
- A drawn browser window or fake terminal as the hero image.

**Wave 3: whatever you are about to choose because it seems like the non-AI option.** Catch that thought. It is the same reflex.

**What stays the same in every wave:**
- **Uniformity.** One radius, one shadow, one spacing value, one animation, on everything.
- **Decoration that says nothing.** Labels, dots, numbers, borders and badges nobody would miss.
- **Template structure.** Three cards because three fills a row. A section because pages have that section.
- **Words any site could use.**
- **Invented proof.**

None of these is banned when the subject gives a reason. A purple brand should be purple. The problem is a cluster of them with no reason behind any.

## 5. Honesty (never waived)

- Never invent numbers, customers, testimonials, reviews, ratings, logos, awards, press mentions, team members, founding dates or addresses.
- No "Trusted by" row, star rating or user count unless the user gave you the real one.
- Sample data in a demo looks like sample data and is labelled as such.
- No form, signup box or button that does nothing.
- No placeholder passed off as content ("Lorem ipsum", "Acme", "John Doe").
- No stock or generated image presented as the real product, place or people.

## 6. Words

This applies to page copy, buttons, errors, READMEs, and your own messages to the user. The full list is in `reference/writing.md`.

- **Say the concrete thing.** The headline states what this is or does. If a competitor could print the sentence unchanged, rewrite it. Use the real noun and the real number.
- **Lead with the point. Stop when you are done.** No warm-up and no closing summary.
- **Do not narrate.** Cut text that describes the page, labels the obvious, or explains the design.
- **Name sections by their content** and buttons by their action. Not "Features" or "Get started".
- **No dashes for asides.** Use a comma, brackets or a new sentence.
- **No third item tacked on with ", and".** "It saves time, cuts costs, and helps your team grow." List what is true and stop.
- **No "not just X, but Y",** no "whether you're X, Y or Z", no question answered at once ("The result? Fewer bugs."), no trailing "-ing" phrase claiming importance.
- **Cut:** seamless, robust, powerful, elevate, empower, unlock, supercharge, streamline, leverage, delve, cutting-edge, next-generation, effortless, world-class, innovative, game-changing, holistic, and their synonyms. If the sentence says nothing without the word, cut the sentence.
- **Sentence case headings.** No emoji bullets. No bold scattered through sentences.
- **Other languages:** write in the page's language from the first word. Do not translate English marketing idiom.

## 7. Craft floor

- **Contrast** meets WCAG AA, including grey text and text over images.
- **Every control** has hover, focus-visible, active and disabled states.
- **Every view** has empty, loading and error states. Errors say what happened and how to fix it.
- **Responsive** from 360px with no horizontal scroll. Tap targets at least 44px.
- **Motion** only where it explains a change. Animate transform and opacity only. Respect `prefers-reduced-motion`. Content is visible without JavaScript.
- **Structure.** Semantic HTML, one `h1`, headings in order, labels on inputs, alt text on images.
- **No third-party hosts.** Self-host fonts, scripts and images, or use fonts already on the device. Many networks block font and script CDNs, and a blocking request to one leaves a blank page. The page must render fully with every outside host unreachable.
- **Right-to-left and non-Latin scripts.** Set `lang` and `dir`. Use logical properties (`margin-inline`, `padding-inline`, `text-align: start`). Use a typeface drawn for the script. No letter-spacing, uppercase or italics on Arabic-script text. Mirror directional icons, not logos or media controls.

## 8. Product UI

For dashboards, tables, forms and settings, read `reference/product-ui.md`. In short: start from the task, show a number only if someone acts on it, put tabular data in a table, make forms that work, design every state, and never invent metrics or users to fill a screen.

## 9. Before you hand it back

1. Does it pass the swap test?
2. Can you give a "because" from the subject for the palette, the type and the layout?
3. Does it meet every line of section 3? Take a screenshot if you can and look at it. Where does the eye land first?
4. Is there something worth looking at on the first screen?
5. Count the items from section 4 on the page. Does each have a reason from the subject?
6. Is every number, name, quote and image real, supplied by the user, or a marked slot?
7. Read every line of text. Does it tell the reader something? Could a competitor use it unchanged?
8. Does it pass the craft floor at 360px, with the keyboard only, and with outside hosts blocked?
9. Remove one decorative element. Did the page get worse? If not, leave it out.

Then report to the user in a few lines: the direction you chose and why, every slot waiting for real material, and anything you could not check.
