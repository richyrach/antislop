# Type

Type is most of what a page looks like. A good typeface, set well, makes a plain page look designed. A default one, set by default, makes a designed page look generated.

## Choosing

1. **Start from the subject.** What is this world printed in? Timetables, shop signs, lab reports, paperback novels, parts catalogues, school exercise books and concert posters each have a look. Pick a face from that world, or one that carries the same qualities.
2. **Decide the roles.** Most pages need two: one for reading (body, interface) and one for display (headlines). They can be the same family. Add a third only for a real job, such as code or tabular numbers.
3. **Pair by contrast or by family.** Two faces that are nearly alike look like a mistake. Either use one family in different weights, or pair faces that differ clearly in structure.
4. **Check the face has what the content needs:** the weights you will use, italics if the text has any, the characters of every language on the page, tabular figures if you show numbers in columns.
5. **Do not take the first name that comes to mind.** That name is the default. Consider at least three candidates and say why you chose one.

## Getting fonts onto the page

Never link a font from a third-party host. On filtered or slow networks the request blocks rendering and the visitor gets a blank page.

**Option A: self-host an open-licensed font.**

1. Choose one under the SIL Open Font License or a similar open licence. Catalogues to search: the Google Fonts catalogue (download the files, do not use its hosted stylesheet), Fontshare, The League of Moveable Type, Velvetyne, Open Foundry. Read the licence for each font.
2. Put the `.woff2` files in the project. Subset to the scripts the page uses if the files are large.
3. Keep the licence file next to the fonts.
4. Declare it:

```css
@font-face {
  font-family: "Name";
  src: url("/fonts/name-regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

5. Preload only the one or two files the first screen needs. Always end the stack with fallbacks close in width to the web font.

If you cannot download files in this environment, say so, use Option B, and name the font you would have used so the user can add it.

**Option B: use fonts already on the device.** These cost nothing to load. Build a stack that names a good face for each platform, because no single font is on all of them.

| Kind | macOS and iOS | Windows | Android |
| --- | --- | --- | --- |
| Book serif | Iowan Old Style, Palatino, Charter, Hoefler Text, Baskerville, Georgia | Palatino Linotype, Sitka Text, Cambria, Constantia, Georgia | Noto Serif |
| High-contrast serif | Didot, Bodoni 72, Big Caslon | (few; fall back to a book serif) | |
| Slab | Rockwell, American Typewriter, Superclarendon | Rockwell (with Office) | |
| Humanist sans | Gill Sans, Optima, Avenir Next, Seravek | Gill Sans MT (with Office), Candara, Corbel, Calibri, Trebuchet MS | |
| Geometric sans | Futura, Avenir | Century Gothic (with Office), Bahnschrift | |
| Grotesque and neutral | Helvetica Neue, SF (system-ui) | Segoe UI, Franklin Gothic Medium, Arial | Roboto |
| Condensed | DIN Condensed, Avenir Next Condensed, Impact | Bahnschrift Condensed, Impact | |
| Monospace | Menlo, SF Mono, Courier New | Cascadia Mono, Consolas, Courier New | Roboto Mono, Droid Sans Mono |
| Script and hand | Snell Roundhand, Bradley Hand, Noteworthy, Marker Felt | Segoe Script, Segoe Print, Ink Free | Dancing Script, Coming Soon |

Availability varies by OS version, and some of these ship only with Microsoft Office. Test the stack by looking at each fallback, not only the first name.

An example stack for a humanist sans headline: `"Gill Sans", "Gill Sans MT", Candara, Calibri, "Trebuchet MS", sans-serif`.

## Other scripts

Use a typeface drawn for the script. Do not rely on the browser's fallback.

- **Arabic script (Arabic, Persian, Urdu).** Open-licensed options include Vazirmatn and the Noto Arabic families (Noto Sans Arabic, Noto Naskh Arabic, Noto Nastaliq Urdu). No letter-spacing, which breaks the joins. No uppercase, no italics. Line height around 1.8 for body text. Choose the right numerals for the language.
- **Chinese, Japanese, Korean.** Files are large. Prefer the system fonts for each platform, or subset heavily.
- **Mixed scripts.** Put the script-specific font first in the stack only for the elements in that language, using `:lang()`. Match the apparent size of the two scripts, which often means different font sizes.

## Setting

- **Scale.** Pick a ratio and derive sizes from it. A landing page headline is often three to five times the body size. An app screen needs a tighter scale.
- **Body size.** At least 16px on phones. Reading text is often better at 17 to 20px.
- **Line height.** About 1.5 for body. 1.0 to 1.2 for large headlines. It falls as size rises.
- **Measure.** 45 to 75 characters per line for reading text. Use `max-width` in `ch`.
- **Headlines.** `text-wrap: balance`. Tighten letter-spacing slightly at large sizes. Never widen it on lowercase.
- **Paragraphs.** `text-wrap: pretty` where supported. Left-aligned, not justified, on the web.
- **Numbers.** `font-variant-numeric: tabular-nums` in tables and anything that updates. Right-align columns of numbers.
- **Punctuation.** Real quotation marks and apostrophes for the language. A real multiplication sign and minus sign where they are meant.
- **Weights.** Use two or three. Regular and bold are enough for most pages. Do not fake bold or italic: load the real file or do without.
- **Hierarchy comes from size, weight and space first.** Colour and capitals are last resorts.
