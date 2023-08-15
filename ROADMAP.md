# Roadmap

## Basic Prototype

- [x] Integrate `esbuild`
- [x] Create basic server with `tinyhttp`
- [x] ~~Integrate `sqlite` with migrations~~
- [x] Create a module for static HTML rendering using template literals
- [x] Add `markdown-it` for Markdown rendering
- [x] Add `shiki` for static code highlighting
- [ ] Add `mathjax` math formulas SVG rendering
- [x] Add CSS bundling via external `blog-css` module
- [x] Add formatting via Prettier
- [x] Add git hooks via Husky
- [x] Add Lint Staged to run formatting of only changed files
- [ ] Add ESLint
- [x] Migrate TS CLI build and watch calls to JS scripts
- [x] Migrate CSS CLI build and watch calls to JS scripts
  - [x] Integrate CSS build step into a TS build script via custom plugin
- [ ] Testing
  - [ ] Increase test coverage
  - [x] Add vitest
- [x] Add favicon
- [x] Add provisioning Ansible role
- [x] Add deployment Ansible role
- [x] Create staging and production environments
- [ ] Add Mermaid diagrams
- [ ] Dark mode
  - [x] Automatic dark/light mode based on system theme
  - [ ] Manual dark mode using controls and Nginx magic
