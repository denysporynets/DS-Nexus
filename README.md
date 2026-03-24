# DS-NEXUS

A meta-prompt framework for calibrating AI collaboration to your cognitive architecture.

DS-NEXUS is not a generic productivity system. It is a structured protocol that optimizes how you communicate with AI — adapting density, format, reasoning style, and operation modes to the way your mind actually works.

## What it is

Most people interact with LLMs using default, generic prompts. DS-NEXUS inverts this: instead of adapting to the AI, the AI adapts to you.

The framework defines:
- A **cognitive profile** (NEXUS Profile) that captures how you process and communicate
- A **calibrated system prompt** generated from that profile
- **Operation modes** that switch automatically based on context (routine, critical, social, synthesis, exploration)
- A **marker system** for high-density, low-noise communication
- **KPIs** to measure whether the protocol is actually working

## Structure

```
DS-NEXUS/
├── protocol/
│   ├── v2.0/          ← Current stable version (validated, N=4 projects)
│   └── v3.0-draft/    ← Product-oriented evolution
├── profiles/
│   ├── NEXUS-D.txt    ← Original profile (TEA+ACI, CI 141)
│   ├── NEXUS-A.txt    ← Analytical standard
│   ├── NEXUS-C.txt    ← Creative-technical
│   ├── NEXUS-E.txt    ← Executive
│   └── NEXUS-L.txt    ← Learner
└── calibration/
    └── questionnaire.md   ← Start here
```

## Start here

1. Read `calibration/questionnaire.md`
2. Pick the closest reference profile from `profiles/`
3. Paste the system prompt into your LLM of choice
4. Run a calibration session and adjust

## Validation

DS-NEXUS v2.0 has been validated across 4 projects:
- ML pipeline (8.9M rows, AUC 0.735, 3 days, RAM-constrained)
- AI app development (10 specialized agents, 3 days, MVP-ready)
- Content experiment (LinkedIn, hypothesis empirically validated)
- Corporate evaluation (3.63/4.0, "exceptional critical thinking")

Consistent pattern: 5–10x speed, higher output quality, minimal technical debt.

## Version

Current: v2.0 (stable) · v3.0 (draft)
Author: Denys Porynets
License: MIT
