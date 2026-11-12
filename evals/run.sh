#!/bin/sh
# Generates one page per brief, with and without the guide, using the Claude Code CLI.
#   evals/run.sh [model]        model defaults to "sonnet"
# Each run is a single prompt with no tools, no project memory and a neutral system prompt.
# The guided run gets GUIDE.md and the reference files pasted above the same task. Nothing else differs.
cd "$(dirname "$0")/.." || exit 1
MODEL="${1:-sonnet}"
n=0
OUT="evals/out/$MODEL"
mkdir -p "$OUT"
TASK_TAIL='Reply with one complete, self-contained HTML file in a single ```html code block and nothing else. You cannot ask me questions, so make the decisions yourself.'

one() { # id, brief, condition
  f="$OUT/$1.$3.html"
  [ -s "$f" ] && return 0
  if [ "$3" = guided ]; then
    { cat GUIDE.md; for r in reference/*.md; do printf '\n\n---\n\n(file: %s)\n\n' "$r"; cat "$r"; done
      printf '\n\n---\n\nTask: %s\n\n%s\n' "$2" "$TASK_TAIL"; }
  else
    printf 'Task: %s\n\n%s\n' "$2" "$TASK_TAIL"
  fi | (cd "${TMPDIR:-/tmp}" && claude -p --model "$MODEL" --system-prompt "You are a web developer." \
        --tools "" --strict-mcp-config --setting-sources "" --no-session-persistence) \
    | awk '/^```html/{on=1;next} /^```/{if(on)exit} on' > "$f.tmp"
  if [ -s "$f.tmp" ]; then mv "$f.tmp" "$f"; echo "ok   $f"; else rm -f "$f.tmp"; echo "FAIL $f"; fi
}

while IFS='|' read -r id brief; do
  [ -z "$id" ] && continue
  one "$id" "$brief" plain &
  one "$id" "$brief" guided &
  n=$((n + 1))
  [ $((n % 3)) -eq 0 ] && wait
done < evals/briefs.txt
wait
