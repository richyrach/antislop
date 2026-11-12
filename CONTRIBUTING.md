# Contributing

## Report a kind of slop or a missing mark

Open an issue with a screenshot or a link, and say what gives it away. One or two sentences is enough. New kinds are the most useful thing you can send, because the lists go out of date.

## Report a result

If you used the guide, say what you asked for, which tool and model you used, and what came back. A screenshot helps. Bad results are as useful as good ones.

## Change the guide

1. Edit `GUIDE.md`. Keep it short. Every line costs tokens in someone's context window.
2. Run `scripts/sync-skill.sh` to rebuild `skills/antislop/SKILL.md`.
3. If you added a mark to section 3, consider adding a rule for it in `evals/detect.mjs`.

Rules for the guide's own text:

- It gives the model a method, not a look. Do not add recommended fonts, palettes or layouts.
- Nothing in it may tell the model to invent content.
- Plain sentences. No words from its own cut list.

## Run the test

See [evals/README.md](evals/README.md).
