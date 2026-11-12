# The test

This folder measures one thing: when a model is asked for a page with and without the guide, how many of the marks from `GUIDE.md` section 3 end up in the page.

## How it runs

1. `briefs.txt` holds ten short requests, written the way people ask. None of them supplies a logo, photos, numbers or customers.
2. `run.sh` sends each brief to the Claude Code CLI twice: once as it is, once with `GUIDE.md` and the files in `reference/` pasted above it. Both runs are a single prompt with no tools, no project memory, and the same one-line system prompt.
3. `detect.mjs` reads each page's source and reports which marks it shows.
4. `score.mjs` writes the tables in `results/`.

The pages themselves are in `out/`. Open them. A count of marks says less than looking.

## History

The guide was revised once after the first run. The first version scored well on marks but several of its pages were bare, so the guide gained a section on what a finished page must have. The guided pages from that first run are kept in `history/guide-v1/`. The pages without the guide are the same in both runs.

The detector was corrected once after the first run, before either set was scored for the tables: it now resolves fonts set through CSS variables, and it counts founding dates and attributed quotes as invented proof.

## Run it yourself

```bash
evals/run.sh sonnet        # needs the Claude Code CLI, signed in
node evals/score.mjs sonnet
```

To check a single page of your own:

```bash
node evals/detect.mjs path/to/page.html
```

## What this does not show

- **It does not show the pages are good.** The detector counts marks. A page can have none and still be poor, or have several for a good reason.
- **The detector and the guide have the same author.** The detector checks for the marks the guide names, so a guided page scoring lower is partly the guide teaching to its own test.
- **It is small.** Ten briefs, one page each way, one model. Run it twice and the numbers will move.
- **It reads source text only.** It does not render the page, so it cannot see layout, contrast or how the page behaves on a phone.
- **Single prompt.** The guide tells the model to ask for real material. Here it cannot ask, so that part is untested.
