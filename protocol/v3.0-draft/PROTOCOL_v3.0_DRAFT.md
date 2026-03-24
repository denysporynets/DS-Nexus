# DS-NEXUS Protocol v3.0 — DRAFT

Status: Work in progress · Date: March 2026 · Authors: Denys Porynets + Claude (Anthropic)

## What's new in v3.0

v2.0 validated the protocol for one cognitive architecture (NEXUS-D).
v3.0 turns it into a system that generates the optimal protocol for any architecture.

### Key additions

| Area | v2.0 | v3.0 |
|------|------|------|
| User | Single profile (Denys) | 5 reference profiles + calibration system |
| Protocol | Static document | Dynamic, versioned per user |
| Distribution | Personal | Product: app / API / exportable templates |
| KPIs | Qualitative | Quantitative + session tracking |
| Modes | 3 (Routine/Critical/Social) | 5 (+ Synthesis/Exploration) + auto-switching |

### NEXUS Profiles (reference)

- **NEXUS-D** — TEA+ACI, CI 141 · Validated
- **NEXUS-A** — Analytical standard · Proposed
- **NEXUS-C** — Creative-technical · Proposed
- **NEXUS-E** — Executive · Proposed
- **NEXUS-L** — Learner · Proposed

### Product architecture

```
Layer 0 — Open Source Core (free)
  Protocol + docs + 5 profile templates + calibration questionnaire

Layer 1 — NEXUS Calibrator (B2C)
  Automated calibration · Profile generation · System prompt export · KPI dashboard

Layer 2 — NEXUS Teams (B2B)
  Team profile mapping · Cross-profile communication · Onboarding automation · API
```

### Roadmap

| Phase | Deliverables | Validation gate |
|-------|-------------|-----------------|
| 0 — Foundation | GitHub repo + templates + questionnaire | 50 stars / 10 external users |
| 1 — MVP Calibrator | Web app: questionnaire → profile → export | 100 active users / NPS >50 |
| 2 — Full product | Automated calibration + KPI dashboard | First recurring revenue |
| 3 — Teams + API | API + integrations + community | Sustainable MRR |

[!] Everything outside NEXUS-D is proposed, not validated. Phase 0 exists to generate that validation before building.

Full draft: see `DS-NEXUS_v3.0_DRAFT.html` (extended version with all sections).
