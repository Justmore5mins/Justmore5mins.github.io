# Repository Guidelines

## Project Structure & Module Organization
This repository is a small static website. The main entry points are:
- `index.html` for the homepage markup
- `style.css` for layout and visual styling
- `script.js` for UI behavior and custom elements
- `subpages/FRC.html` for the robotics subpage
- `images/` for local image and icon assets

Keep new assets in `images/` or a similarly named folder, and keep page-specific markup close to the page that uses it.

## Build, Test, and Development Commands
There is no build pipeline or package manager metadata in this repo. Work directly with the files above.
- `python3 -m http.server 8000` from the repo root: serves the site locally for manual testing
- Open `http://localhost:8000` in a browser: verify layout, links, and interaction changes

If you add tooling later, document the exact command in this file and keep it reproducible.

## Coding Style & Naming Conventions
Use plain HTML, CSS, and vanilla JavaScript.
- Indentation: 4 spaces in existing files
- Filenames: use lowercase with hyphens only when a new file benefits from it
- CSS: prefer class selectors over inline styles when adding reusable patterns
- JavaScript: use descriptive function names like `showPanel` and `hidePanel`

Keep DOM IDs unique. Avoid repeating IDs like `id="robotics"` on multiple elements.

## Testing Guidelines
No automated test framework is configured. Validate changes manually:
- Load the page in a browser and confirm sections render correctly
- Check interactive elements such as overlay panels and external links
- Verify mobile layout if the change affects sizing or positioning

If you introduce tests, name them clearly and document how to run them here.

## Commit & Pull Request Guidelines
Recent commits are short, informal, and task-focused, such as `fixed error showing github icon` and `add deploment specification`. Follow the same style unless the project adopts a stricter convention.

For pull requests:
- Summarize what changed and why
- Link any related issue or task
- Include screenshots or short screen recordings for visual changes
- Note any manual checks performed, especially on desktop and mobile

## Agent-Specific Notes
- Prefer small, localized edits over broad rewrites.
- Preserve the existing site voice and content unless the user asks otherwise.
- When adding behavior, keep it dependency-free unless a strong reason exists to introduce tooling.
