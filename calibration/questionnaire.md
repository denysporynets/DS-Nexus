# NEXUS Calibration — Start Here

Answer these 12 questions honestly. There are no right or wrong answers — the goal is to map how you actually process information, not how you think you should.

Each question has 4 options. Pick the one that feels most accurate, even if none is perfect.

---

## Part 1 — How you receive information

**Q1. You open a complex technical document you've never seen before. Your instinct is to:**
- [A] Read from the beginning — follow the structure the author built
- [B] Scan for the diagram or high-level overview first, then read selectively
- [C] Jump to conclusions or recommendations, then decide if the detail earns your time
- [D] Find the section that interests you most and start there, connect the rest later

**Q2. An LLM gives you a long, well-structured response. What you actually want is:**
- [A] Every word earning its place — dense, no filler, maximum signal per line
- [B] A clear frame at the top, then structured detail — one orienting sentence before the list
- [C] The recommendation in the first line, 2–3 bullets of support, done
- [D] Enough context to build the mental model before the answer lands

**Q3. When you're learning something new, what matters most?**
- [A] Understanding the mechanism — not just how it works, but why it works that way
- [B] Seeing how it connects to something I already know well
- [C] Getting to the point where I can apply it — theory can come later
- [D] Finding the unexpected angle — what's non-obvious or counterintuitive about this?

---

## Part 2 — How you think

**Q4. When you're stuck on a problem, you tend to:**
- [A] Slow down and map the problem systematically before trying anything
- [B] Try the most likely fix quickly, observe what happens, iterate
- [C] Step back and question whether the approach itself is wrong
- [D] Reframe the problem — sometimes the question is the problem

**Q5. What does "understanding something" mean to you?**
- [A] I can predict what happens when I change the inputs
- [B] I can explain it simply to someone who knows nothing about it
- [C] I can use it reliably to achieve an outcome
- [D] I know where it sits in a larger system and what it connects to

**Q6. You're choosing between two technical solutions. You:**
- [A] Map the full trade-off space before deciding — what are all the second-order consequences?
- [B] Show the options side by side, make the trade-offs explicit, then pick
- [C] Pick the one that gets to the outcome fastest, with acceptable risk
- [D] Look for the option that solves adjacent problems simultaneously — the elegant one

---

## Part 3 — How you communicate

**Q7. You receive critical feedback on work you spent weeks on. You want:**
- [A] Direct: what failed, why, and what the fix is — no narrative wrapper
- [B] What failed and why, with enough context to understand the reasoning
- [C] The bottom line first, then supporting evidence if you ask for it
- [D] Some acknowledgment that the difficulty was real, then the specific gaps

**Q8. When you ask a colleague a question and they respond with "it depends" — you:**
- [A] Push back: "depends on what, specifically? Give me the variables"
- [B] Accept it — ambiguity is the starting point, not the problem
- [C] Reframe to find the version of the question that has a cleaner answer
- [D] Ask: "given what we currently know, what's the best available answer?"

**Q9. In a technical meeting, when someone asks for your opinion:**
- [A] I give my view directly — position first, reasoning if asked
- [B] I explain my reasoning as I go — the logic is part of the answer
- [C] I tend to reframe the question before answering — the framing matters
- [D] I want to understand everyone's view first, then form mine

---

## Part 4 — How you work

**Q10. You're asked to do a task you've never done before. You:**
- [A] Understand the full system before touching anything — wrong start = wasted time
- [B] Map what you know, what you think you know, and what you don't — then prioritize
- [C] Jump in, learn by doing, course-correct as you go
- [D] Look for the nearest analogy in something you already understand deeply

**Q11. After completing a major project, the most satisfying outcome is:**
- [A] The solution is solid, scalable, and I understand exactly why it works
- [B] The learning — I understand the domain fundamentally better than before
- [C] The execution was efficient and the result hit the objective
- [D] The impact — something measurable changed because of this work

**Q12. Your preferred format for receiving complex technical information:**
- [A] Dense prose with precise language — structure implied by logic, no decorative headers
- [B] Numbered steps with clear hierarchy — easy to follow and execute
- [C] Bullet points, bold recommendations, scannable in under 30 seconds
- [D] Concept map or diagram with prose that narrates the connections

---

## Scoring

### Step 1 — Tally your answers

Count how many times you chose each option:

| Option | Count |
|--------|-------|
| A      |       |
| B      |       |
| C      |       |
| D      |       |

### Step 2 — Match your profile

| Dominant option | Primary match | Check against |
|-----------------|---------------|---------------|
| Mostly **A**    | NEXUS-D       | If Q2=B or Q7=B → NEXUS-A |
| Mostly **B**    | NEXUS-A or NEXUS-L | If Q5=C and Q11=C → NEXUS-A. If Q3=A and Q11=B → NEXUS-L |
| Mostly **C**    | NEXUS-E       | If Q4=C or Q8=B → NEXUS-C |
| Mostly **D**    | NEXUS-C       | If Q3=B and Q10=D → NEXUS-L |
| Split A+C       | NEXUS-E       | — |
| Split A+B       | NEXUS-A       | — |
| Split B+D       | NEXUS-L or NEXUS-C | Use Q4 to decide: A→C, C→L |

### Step 3 — Differentiate similar profiles

**NEXUS-D vs NEXUS-A** — the key split is density tolerance:
> Q2: if you chose [A] → NEXUS-D. If you chose [B] → NEXUS-A.

**NEXUS-A vs NEXUS-E** — the key split is depth vs outcome:
> Q5: if you chose [A] → NEXUS-A. If you chose [C] → NEXUS-E.

**NEXUS-L vs NEXUS-C** — the key split is building a model vs finding connections:
> Q3: if you chose [A] → NEXUS-L. If you chose [D] → NEXUS-C.

**NEXUS-C vs NEXUS-E** — the key split is exploration tolerance:
> Q8: if you chose [B] → NEXUS-C. If you chose [D] → NEXUS-E.

---

## What to do with your result

1. Go to `profiles/` and open the closest match
2. Paste the system prompt into your LLM
3. Run a 10-minute calibration session: ask it to explain something you know well
4. Adjust if the output feels off — too dense, too slow, too cold, or too sparse

**Calibration signals:**
- Feels condescending or slow → try the next denser profile (L→A→D)
- Feels cold or terse → try the next warmer profile (D→A→L)
- Feels too linear → try NEXUS-C
- Feels too exploratory → try NEXUS-E or NEXUS-A

---

## Important notes

**Your profile is not fixed.** It is domain-specific: you might be NEXUS-D in your area of expertise and NEXUS-L in a domain you're learning. Use accordingly.

**The calibrator web app** runs this same logic automatically with a visual output → [try it online](https://denysporynets.github.io/DS-Nexus/calibrator/)

**If the result doesn't feel right:** run the web calibrator, which uses a 6-dimension vector with Euclidean distance matching — more precise than manual tallying.
