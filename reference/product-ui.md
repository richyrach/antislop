# Product UI

Dashboards, tables, forms, settings and other screens people work in. The method in the main guide still applies: the subject here is the user's task, and the native document is whatever people used for this job before software (a ledger, a job sheet, a logbook, a ticket, a roster).

## Start from the task

Write down, before any layout:

1. Who opens this screen, and how often.
2. The question they come to answer or the action they come to take.
3. What they do next.

Put the answer to 2 where the eye lands first. Everything else on the screen supports it or leaves.

## Dashboards

- **Show a number only if someone acts on it.** For each one, name the decision it informs. If you cannot, cut it.
- **Give numbers context:** compared with what, over what period, and whether up is good.
- **Choose a chart from the question.** Change over time is a line. Comparison between items is bars, sorted. Part of a whole with few parts is a single stacked bar or just the numbers. Two values never need a doughnut.
- **Label charts directly** on the lines or bars where you can. Start bar axes at zero. No 3D, no gradients under lines for effect.
- **Do not open with a greeting,** a row of four stat cards, or a "welcome back" banner unless the task calls for it.
- **Most dashboards are better as a list** of things that need attention, with counts, than as a wall of charts.

## Tables

- Tabular data goes in a table. Do not turn rows into cards on desktop.
- Left-align text, right-align numbers, and use tabular figures. Align the header with its column.
- Put the identifying column first and make it the link.
- Show units once in the header, not in every cell.
- Give rows enough height to scan, and separate them with a light line or alternating tone, not both.
- Sorting, filtering and the current sort are visible. So is the total count.
- Row actions are named. A row of identical icon buttons needs labels or tooltips.
- On a phone, decide per table: horizontal scroll with a fixed first column, or a stacked layout showing the two or three fields that matter.
- Plan for the empty table, one row, ten thousand rows, and a cell with a very long value.

## Forms

- One column. Labels above fields, always visible. Placeholder text is not a label.
- Ask only for what is needed. Mark optional fields as optional.
- Use the right input type, `autocomplete` and `inputmode`, so phones show the right keyboard and browsers can fill it in.
- Size a field to the answer it expects.
- Group related fields under a plain heading.
- Validate when the user leaves a field, not on each keystroke and not only on submit. Put the message beside the field. Say how to fix it.
- Never clear what the user typed because of an error.
- The submit button says what will happen: "Create account", "Pay €24.00".
- After submit, show what happened and what comes next.
- The form must actually do something. If the backend does not exist yet, say so in your report, and do not fake success.

## Settings

- Group by what the user is trying to do, not by how the system stores it.
- Each setting has a name, the current value, and one line on what it changes if that is not obvious.
- Say when a change takes effect: immediately, or on save. Do not mix the two on one screen without making it clear.
- Put destructive actions apart from the rest, name the consequence, and ask for confirmation in words.

## Navigation and layout

- Use a sidebar when there are many destinations. For three or four, a row of links is enough.
- The current location is always marked.
- Density follows use. A screen someone works in all day can be tight. One they visit monthly needs more guidance.
- Use space, alignment and headings to separate regions before reaching for a card. A card inside a card means the structure needs rethinking.
- A dialog interrupts. Use one only when the user must decide before continuing.

## States

Design each of these for every view that loads data:

- **Empty, first time:** what will appear here and how to add the first one.
- **Empty, no results:** what was searched for and how to widen it.
- **Loading:** keep the layout stable. A skeleton only where content takes more than a moment.
- **Partial:** some data loaded, some failed.
- **Error:** what failed, whether the user's work is safe, and what to try.
- **Too much:** pagination or virtualised rows, and a count.
- **No permission:** what is hidden and who can grant access.

## Data in demos

- Use the project's real schema and field names.
- Sample rows look like sample rows: plain names such as "Customer A", round but varied values, and a visible "sample" label. Give a way to clear them.
- Never invent a company's revenue, user counts or growth figures to make a screen look alive.
