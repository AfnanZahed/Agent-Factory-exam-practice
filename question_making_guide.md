# Question Making Guide (General Agents Foundations)

## Purpose

Use this guide to generate **new, scenario-based MCQs** from these three chapter sources:

1. `Agent Factory Paradigm.md` (Chapter 1)
2. `Markdown Writing Instructions.md` (Chapter 2)
3. `General Agents.md` (Chapter 3)

This guide is based on the pattern used in `questions.md`.

---

## 1) Pattern Fingerprint from Existing Questions

The existing exam questions follow these consistent patterns:

- **Scenario-first style**: almost every question starts with a realistic situation (developer, team, manager, startup, hospital, law firm, etc.).
- **Applied reasoning over memorization**: questions test how concepts are used in practice, not just definitions.
- **Single best answer**: 4 options (A–D), one clearly best when reasoning is correct.
- **Plausible distractors**: wrong options sound believable and are often partially true.
- **Concept-linking**: many stems connect two ideas (example: “constraint + mitigation”, “tool + best use”, “strategy + risk”).
- **Decision framing words**: frequent use of terms like **PRIMARY**, **most likely**, **best**, **correct mitigation**, **key weakness**.
- **Explanation embedded in options**: options are full statements, often including causal logic.

---

## 2) Question Format Template

Use this exact structure:

```markdown
## Question <number>

<2-5 sentence scenario ending in a direct question>

A. <Option A>
B. <Option B>
C. <Option C>
D. <Option D>
```

Optional (recommended during generation, can be hidden in final student version):

```markdown
**Correct Answer:** <A/B/C/D>
**Rationale:** <1-3 lines>
```

---

## 3) Question Types You Should Generate

Use a mix of these high-value types (all appear in the source style):

### Type 1: Concept Relationship Mapping
- Ask how two concepts relate.
- Example pattern: “What is the relationship between X and Y?”

### Type 2: Symptom → Root Cause → Mitigation
- Scenario shows a problem.
- Ask the underlying cause and best fix.

### Type 3: Tool / Interface Selection
- Person has a goal and constraints.
- Ask which tool or workflow is best and why.

### Type 4: Misconfiguration Consequence
- Setup mistake is described.
- Ask the most likely outcome.

### Type 5: Strategy Risk / Weakness Analysis
- Stakeholder proposes a strategy.
- Ask the primary weakness or hidden risk.

### Type 6: Competitive Advantage Reasoning
- Compare two builders/teams/approaches.
- Ask who has durable advantage and why.

### Type 7: Analogy-to-Principle Mapping
- Use a non-AI analogy (aviation, medicine, construction, legal ops).
- Ask which AI principle it maps to.

---

## 4) How to Build the Stem (Question Body)

Use this stem formula:

1. **Actor + Context** (who, where)
2. **Constraint / Tension** (what is hard or failing)
3. **Decision Prompt** (what must be identified)

### Stem quality rules

- Use practical settings (teams, products, workflows, deployment decisions).
- Include enough detail to require reasoning.
- Ask only **one** core thing.
- Prefer action-oriented questions over definition-only questions.

Good stem prompt endings:

- “What is the most likely cause?”
- “What is the correct mitigation?”
- “Which option best explains this outcome?”
- “What is the PRIMARY weakness of this approach?”

---

## 5) How to Build Options (A/B/C/D)

Each option should be plausible, grammatically parallel, and close in length.

### Recommended option roles

- **One correct option**: accurate, complete, and directly answers the asked scope.
- **Distractor 1 (Near-miss)**: partially true but misses the key point.
- **Distractor 2 (Category error)**: mixes related concepts incorrectly.
- **Distractor 3 (Overclaim/absolutist)**: “always/never/everything/nothing” style overstatement.

### Distractor design rules

- Wrong options must be *intelligent mistakes*, not silly mistakes.
- Keep them conceptually adjacent to the correct answer.
- Avoid obvious giveaways (“always”, “impossible”, “all of the above”).
- Do not make one option much longer/clearer than others.

---

## 6) How Answers Are Made (Pattern from Source)

In the source set, the best answers usually:

- identify the correct principle,
- apply it to scenario mechanics,
- and include *why* it solves the problem.

So your correct option should usually contain:

1. **Concept name** (e.g., statelessness, hooks, MCP, skills)
2. **Mechanism** (how it works)
3. **Outcome link** (why it fits this scenario)

---

## 7) Chapter Concept Banks (Use for New Questions)

## Chapter 1 — Agent Factory Paradigm
Use concepts such as:

- General Agents vs Custom Agents
- Incubator → Specialist maturity model
- OODA loop
- Three LLM constraints (statelessness, probabilistic output, context limits)
- Context engineering
- AI amplification
- Shadow mode deployment
- 80/20 moat (domain expertise advantage)
- Digital FTE economics and positioning
- AAIF standards foundation (MCP, AGENTS.md, skills)
- Spec-driven development vs vibe coding

## Chapter 2 — Markdown Writing Instructions
Use concepts such as:

- Structured vs unstructured requirements
- Heading hierarchy (`#`, `##`, `###`)
- Ordered vs unordered lists
- Fenced code blocks + language tags
- Inline code vs fenced blocks
- Links (descriptive text) and image alt text
- Common markdown mistakes and validation checklists
- Markdown as intent layer for AI-driven development

## Chapter 3 — General Agents (Claude Code/Cowork)
Use concepts such as:

- Agentic vs passive workflow
- CLAUDE.md role and auto-loading context
- Skills (SKILL.md), description formula, activation behavior
- Subagents for context isolation and orchestration
- MCP primitives (Tools, Resources, Prompts)
- Connectors vs MCP relationship
- Tool Search token optimization
- Hooks as guaranteed enforcement points
- Claude Code vs Cowork task fit
- Cross-vendor portability (AGENTS.md, skills, MCP)

---

## 8) Generation Workflow (Step-by-Step)

1. Pick chapter + concept(s).
2. Choose question type from Section 3.
3. Write a realistic scenario with one clear tension.
4. Write the question prompt using decision language (best/primary/most likely).
5. Draft correct option (concept + mechanism + outcome).
6. Draft 3 distractors using near-miss/category error/overclaim patterns.
7. Verify only one option is best.
8. Shuffle answer position (avoid predictable answer letters).
9. Run quality checklist (Section 9).

---

## 9) Quality Checklist (Must Pass)

- [ ] Scenario is realistic and specific.
- [ ] Question tests reasoning, not pure recall.
- [ ] Exactly 4 options (A–D).
- [ ] Only one clearly best answer.
- [ ] Distractors are plausible but wrong.
- [ ] No trivial wording clues.
- [ ] Option lengths are balanced.
- [ ] Concept alignment with one of the 3 chapters is clear.
- [ ] If cross-chapter, connection is meaningful (not forced).

---

## 10) Difficulty Calibration

### Easy
- Single concept, direct application.

### Medium
- Two related concepts, requires comparison or diagnosis.

### Hard
- Multi-step reasoning, trade-off analysis, or cross-chapter synthesis.

Target mix recommendation for a 30-question set:

- 8 Easy
- 14 Medium
- 8 Hard

---

## 11) Anti-Patterns to Avoid

Do **not** generate questions that are:

- pure definition recall with no scenario,
- opinion-based with multiple equally correct answers,
- dependent on obscure trivia not in chapters,
- structurally inconsistent (different option formats),
- answer-key patterned (e.g., too many B answers in a row).

---

## 12) Output Modes

### Mode A: Student Version (no key)
Output only question + A/B/C/D options.

### Mode B: Instructor Version (with key)
After each question add:

- `Correct Answer: <letter>`
- `Rationale: <why correct + why others fail briefly>`

---

## 13) Quick Prompt for AI Question Generation

Use this when generating new questions:

```text
Generate <N> new scenario-based MCQs from Chapters 1–3 of General Agents Foundations.
Follow the style in question_making_guide.md:
- 4 options (A-D), one best answer
- scenario-first, applied reasoning
- plausible distractors (near-miss, category error, overclaim)
- decision framing (PRIMARY / most likely / best)
- include chapter tag and difficulty tag per question

Output in Instructor Version with answer key and 1-2 line rationale.
```

---

## Final Note

The goal is not to test memorization of words. The goal is to test whether the learner can **reason correctly in realistic AI development situations** using concepts from Chapters 1, 2, and 3.
