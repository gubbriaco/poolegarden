# Graph Report - poolegarden  (2026-07-27)

## Corpus Check
- 36 files · ~107,286 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 96 nodes · 156 edges · 17 communities (12 shown, 5 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `2c376d10`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- tsconfig.json
- package.json
- translations.ts
- Site Structure & Required Sections
- site.ts
- Graphify Knowledge Graph
- Astro Framework
- astro.config.mjs
- Footer.astro
- main.js
- i18n.js
- Favicon
- Header.astro
- CTAButton.astro

## God Nodes (most connected - your core abstractions)
1. `site` - 7 edges
2. `images` - 6 edges
3. `translations` - 6 edges
4. `scripts` - 5 edges
5. `applyLang()` - 3 edges
6. `navLinks` - 3 edges
7. `include` - 3 edges
8. `Pool & Garden Logo` - 3 edges
9. `engines` - 2 edges
10. `@tailwindcss/vite` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Graphify Tooling Workflow** — agents_md, claude_md, graphify_concept [EXTRACTED 1.00]

## Communities (17 total, 5 thin omitted)

### Community 0 - "tsconfig.json"
Cohesion: 0.26
Nodes (4): string, assets, images, items

### Community 1 - "package.json"
Cohesion: 0.11
Nodes (17): astro, dependencies, astro, tailwindcss, @tailwindcss/vite, engines, node, name (+9 more)

### Community 2 - "translations.ts"
Cohesion: 0.28
Nodes (4): enableAnalytics(), parse(), run(), set()

### Community 3 - "Site Structure & Required Sections"
Cohesion: 0.40
Nodes (4): ServiceId, serviceLinks, services, site

### Community 4 - "site.ts"
Cohesion: 0.25
Nodes (7): **/*, astro/tsconfigs/strict, .astro/types.d.ts, dist, exclude, extends, include

### Community 5 - "Graphify Knowledge Graph"
Cohesion: 0.47
Nodes (3): Lang, languages, translations

### Community 6 - "Astro Framework"
Cohesion: 0.83
Nodes (3): applyLang(), init(), resolve()

### Community 7 - "astro.config.mjs"
Cohesion: 0.50
Nodes (3): Pool & Garden Logo, jsonLd, ogImageURL

### Community 16 - "CTAButton.astro"
Cohesion: 0.40
Nodes (3): sizes, variants, accentMap

## Knowledge Gaps
- **32 isolated node(s):** `assets`, `name`, `type`, `version`, `node` (+27 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `assets`, `name`, `type` to the rest of the system?**
  _32 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._