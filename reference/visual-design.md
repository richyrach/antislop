# Visual design

Avoiding the defaults is not the goal. A page with nothing wrong and nothing to look at has also failed. This file is the standard the finished page has to meet.

## Composition

- **Give every screen one focal point.** One element is clearly the largest, boldest or most colourful, and it is the most important thing there. Blur your eyes or shrink the screenshot to a thumbnail: you should still see where to look first, second and third.
- **Compose the first screen.** At 1280×800 and at 390×844 the visitor sees what this is, the one thing to do, and something worth looking at. It should not look like the top of a document.
- **Fill the frame on purpose.** Empty space is good when it sets something off. It is bad when it is what was left over. A page that is a narrow column of small text in a wide window has not been designed.
- **Align everything to something.** Each element shares an edge or an axis with another. Pick a grid, including its margins, and keep to it. Break it once, deliberately, for the thing that matters most.
- **Vary scale.** Put something very large next to something small. Pages where everything is medium look flat.
- **Give the page a shape.** An opening, a body where the content changes rhythm from section to section, and an end. Sections should not all have the same height, the same layout and the same weight.
- **Asymmetry is usually stronger than centring.** Centre short things that stand alone. Left-align anything meant to be read.

## Hierarchy

- Three levels are enough for most screens: the main thing, supporting things, and detail. Each level should be plainly different from the next, not a shade apart.
- Build it with size, weight and space before colour.
- De-emphasise instead of emphasising. Making secondary text quieter works better than making primary text louder.
- A label is quieter than its value. A caption is quieter than its picture.
- Only one primary button per view. Other actions are visibly secondary.

## Colour

- **Take it from the subject,** then give each colour a job: a ground, a text colour, one colour for action, and at most one or two more for meaning (status, category).
- **Use it unevenly.** One colour covers most of the surface, a second supports it, and the action colour appears rarely so it stays noticeable.
- **Tint the neutrals.** Greys mixed from the palette's own hue sit better than pure grey. Pure black on pure white is harsh for long reading.
- **Check contrast** for every text and background pair, including text on colour and on images: 4.5 to 1 for body text, 3 to 1 for large text and for the edges of controls.
- **Do not rely on colour alone** to carry meaning. Pair it with a word, an icon or a shape.
- **Dark mode is a second design.** Lower the saturation, lighten the accent, and use lighter surfaces for raised elements instead of shadows. Do it properly or not at all.

## Space

- Use one scale for all spacing (for example 4, 8, 12, 16, 24, 32, 48, 72, 112) and no values outside it.
- Space shows grouping. Things that belong together are closer to each other than to anything else. The gap above a heading is larger than the gap below it.
- Be generous at the outer edges and between sections. Be tight inside components.
- Padding inside a container is at least as large as the gaps between the things in it.

## Surfaces and depth

- Decide how the design separates things: space, lines, tone, or shadow. Use mostly one.
- If you use shadows, use them to mean "this is above that" and keep them consistent with one light source. Two or three elevations are enough.
- Choose corner radii on purpose and relate them: an inner radius is smaller than the outer radius that contains it.
- A border and a shadow and a background tint on the same box is three answers to one question.

## Detail and finish

These are what separate "designed" from "generated" at close range.

- Every interactive element has hover, focus-visible, active and disabled states that fit the design. The focus ring uses the palette.
- Icons come from one set, at one stroke weight, sized to the text beside them, and aligned to its baseline or centre. If an icon needs a label to be understood, keep the label.
- Optical alignment: text next to an icon, a play triangle in a circle, a number beside a label. Nudge until it looks right.
- Images share one treatment and have set dimensions.
- The page has a title, a description, a favicon, and a share image if it is public.
- Text selection, scrollbars, form controls and the `::placeholder` colour agree with the palette.
- Long words, long names, empty values, very large numbers and a second language do not break the layout.
- Nothing shifts as the page loads.

## Motion

- Use motion to show what changed or where something went. Decoration is the least important use.
- Short: 100 to 200ms for small changes, up to 400ms for large ones. Ease out for things arriving, ease in for things leaving.
- Animate `transform` and `opacity`. Never `transition: all`.
- One well-made moment is better than every element moving.
- With `prefers-reduced-motion`, replace movement with a fade or nothing.

## Self-review

Take a screenshot at desktop and phone width if you can, then answer:

1. Where does the eye land first? Is that the most important thing?
2. Shrunk to a thumbnail, does it still have a clear shape, or is it grey texture?
3. Is there anything worth looking at: a picture, a drawing, a striking piece of type, real data?
4. Does anything float without lining up with something else?
5. Is every gap a value from the scale?
6. Would a designer in this field recognise it as belonging to the subject?
7. Is it finished at close range: states, icons, alignment, edge cases?
8. Would you be content to put your name on it?

If the answer to 3 or 8 is no, it is not done.
