# Anti-Slop

A single file you point your AI at, so the UI it builds doesn't look AI-made.

## Use it

Paste this into Claude Code, Cursor, ChatGPT, or any AI coding tool before it builds a UI:

```
Before building any UI, fetch and follow this guide:
https://raw.githubusercontent.com/richyrach/antislop/main/GUIDE.md
```

Or copy [GUIDE.md](GUIDE.md) into your project as `DESIGN.md` or into your `CLAUDE.md` / rules file.

## What it does

The guide lists the habits that make a page read as AI-generated, such as eyebrow labels over headings, purple gradients, identical rounded card grids, emoji icons, flat backgrounds and invented stats. For each one it says what the tell is, why it reads as AI, and what to do instead. It ends with a checklist the AI runs before handing work back.

## See the difference

The `demo/` folder has two pages for this same project. `before.html` is deliberately built with the habits in the guide. `after.html` follows it. Open both in a browser.

## Rules of the guide

- One file, short, rules not essays.
- No third-party fonts or scripts in the demos, so they load anywhere.
- Never suggests inventing content. Real numbers or none.

## Contributing

Found a tell that isn't listed? Open an issue or PR with: what it looks like, why it reads as AI, and what to do instead.

## License

MIT
