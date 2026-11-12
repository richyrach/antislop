#!/bin/sh
# Rebuilds skills/antislop/SKILL.md from GUIDE.md. Run after editing the guide.
cd "$(dirname "$0")/.." || exit 1
{
  printf '%s\n' '---' 'name: antislop' 'description: Use before designing or building any user interface (web page, landing page, dashboard, form, component, app screen). Replaces default AI visual habits with choices taken from the subject, bans invented content, and sets a craft floor.' '---' ''
  cat GUIDE.md
} > skills/antislop/SKILL.md
