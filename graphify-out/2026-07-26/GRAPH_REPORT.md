# Graph Report - poolegarden  (2026-07-26)

## Corpus Check
- 35 files · ~68,781 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 107 nodes · 157 edges · 12 communities (8 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `06a431e8`
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
- Favicon
- Z.ai Prompt — Pool & Garden Corporate Website
- main.js
- i18n.js

## God Nodes (most connected - your core abstractions)
1. `Site Structure & Required Sections` - 11 edges
2. `Z.ai Prompt — Pool & Garden Corporate Website` - 8 edges
3. `site` - 7 edges
4. `translations` - 6 edges
5. `scripts` - 5 edges
6. `applyLang()` - 3 edges
7. `navLinks` - 3 edges
8. `include` - 3 edges
9. `engines` - 2 edges
10. `@tailwindcss/vite` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Graphify Tooling Workflow** — agents_md, claude_md, graphify_concept [EXTRACTED 1.00]

## Communities (12 total, 4 thin omitted)

### Community 0 - "tsconfig.json"
Cohesion: 0.25
Nodes (7): **/*, astro/tsconfigs/strict, .astro/types.d.ts, dist, exclude, extends, include

### Community 1 - "package.json"
Cohesion: 0.11
Nodes (17): astro, dependencies, astro, tailwindcss, @tailwindcss/vite, engines, node, name (+9 more)

### Community 2 - "translations.ts"
Cohesion: 0.19
Nodes (8): sizes, variants, string, Lang, languages, valueIcons, items, accentMap

### Community 3 - "Site Structure & Required Sections"
Cohesion: 0.18
Nodes (11): 10. Footer, 1. Header / Navigation, 2. Hero Section, 3. Services Overview, 4. Detailed Service Sections (one per service, each split into Construction + Maintenance), 5. About Us (Chi Siamo), 6. Testimonials / Reviews (optional but recommended), 7. Gallery / Portfolio (optional but recommended) (+3 more)

### Community 4 - "site.ts"
Cohesion: 0.15
Nodes (11): galleryImages, navLinks, ServiceId, serviceLinks, services, site, translations, jsonLd (+3 more)

### Community 9 - "Z.ai Prompt — Pool & Garden Corporate Website"
Cohesion: 0.25
Nodes (7): Additional Standard Elements to Include, Deliverables, Language & Localization, Role & Objective, Technical Requirements, Tone & Style Guidance, Z.ai Prompt — Pool & Garden Corporate Website

### Community 11 - "i18n.js"
Cohesion: 0.83
Nodes (3): applyLang(), init(), resolve()

## Knowledge Gaps
- **48 isolated node(s):** `name`, `type`, `version`, `node`, `dev` (+43 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Site Structure & Required Sections` connect `Site Structure & Required Sections` to `Z.ai Prompt — Pool & Garden Corporate Website`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **Why does `Z.ai Prompt — Pool & Garden Corporate Website` connect `Z.ai Prompt — Pool & Garden Corporate Website` to `Site Structure & Required Sections`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **What connects `name`, `type`, `version` to the rest of the system?**
  _48 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._