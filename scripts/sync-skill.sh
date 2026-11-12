#!/bin/sh
# Rebuilds skills/antislop/ from GUIDE.md and reference/. Run after editing either.
cd "$(dirname "$0")/.." || exit 1
mkdir -p skills/antislop/reference
{
  printf '%s\n' '---' 'name: antislop' 'description: Use before designing or building any user interface (web page, landing page, dashboard, form, component, app screen) or writing the text on one. Replaces default AI habits with choices taken from the subject, sets a standard the result must meet, bans invented content, and lists the writing patterns to cut.' '---' ''
  cat GUIDE.md
} > skills/antislop/SKILL.md
cp reference/*.md skills/antislop/reference/
