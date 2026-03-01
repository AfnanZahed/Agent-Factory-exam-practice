# Chapter 2 Questions: Markdown Writing Instructions

## Question 1

A product owner sends an AI agent one dense paragraph describing a scheduling app, mixing features, user flow, and error behavior in no clear order. The generated code misses two required behaviors and invents one extra feature. Which change would most directly improve implementation fidelity?

A. Rewrite requirements as structured markdown sections and lists, so intent is explicit and parseable.
B. Keep prose format but add acceptance criteria sentences at the end to clarify implementation priorities.
C. Keep paragraph style but add explicit labels like “Feature,” “Flow,” and “Error” inside the same block of text.
D. Use a stronger model first, then preserve the current format so requirements remain natural-language friendly.

**Correct Answer:** A
**Rationale:** The chapter emphasizes structured markdown as the main bridge between intent and accurate implementation.

## Question 2

A junior writer creates this spec skeleton: `# App`, then immediately `### Installation`, then `## Features`. The team notices repeated misunderstanding of section ownership during implementation. What is the core markdown issue?

A. Section sequencing is mismatched, because installation should be placed after user-facing behavior requirements.
B. Heading hierarchy is broken, because skipped levels weaken document structure and section semantics.
C. Heading syntax is inconsistent, because technical specs should keep all second-level headings adjacent before thirds.
D. Title granularity is weak, because one-word H1 headings reduce semantic anchoring for downstream readers.

**Correct Answer:** B
**Rationale:** Skipping heading levels creates unclear structure and harms AI interpretation of section relationships.

## Question 3

A team documents product capabilities under `## Features` using numbered steps: `1. Dark mode`, `2. Export PDF`, `3. Auto-save`. Reviewers keep treating these as required execution sequence. Which fix best preserves intent?

A. Convert feature entries to unordered bullets, so items are treated as a set rather than a process.
B. Keep numbering but add a sentence clarifying that order is not mandatory for implementation.
C. Prefix each numbered item with “Capability:” so readers infer categorization instead of sequence.
D. Keep numbering but split features into two sublists for core and optional capabilities.

**Correct Answer:** A
**Rationale:** Unordered lists are the correct representation when item order does not matter.

## Question 4

An engineering lead writes expected console output using inline backticks across multiple lines in one paragraph. The AI misses line breaks and menu formatting in generated code. What markdown change is most appropriate?

A. Use a two-column table for prompt and output lines, preserving structure without fenced blocks.
B. Use an ordered list of output lines, with each line wrapped in inline code for readability.
C. Use inline code per line with forced line breaks, so output remains embedded but visually separated.
D. Use a fenced code block with a `text` tag, because multiline output should be represented as block content.

**Correct Answer:** D
**Rationale:** Multiline examples should be in fenced code blocks; inline code is for short, single-token snippets.

## Question 5

A spec references setup commands and file paths in plain prose without backticks, and reviewers repeatedly misread one path as a sentence fragment. Which improvement best matches chapter guidance?

A. Put every path in quotation marks, so parsers distinguish path-like strings from ordinary prose.
B. Bold commands and paths consistently, so technical tokens stand out from descriptive text.
C. Use inline code formatting for commands and paths, so technical tokens are clearly separated from text.
D. Move all command/path references to a final appendix, keeping implementation sections narrative-first.

**Correct Answer:** C
**Rationale:** Inline code is recommended for short commands, paths, and technical identifiers inside normal text.

## Question 6

A documentation draft includes links labeled “click here” and “read more” for critical APIs. New contributors often open the wrong resource and misconfigure dependencies. Which revision best improves clarity?

A. Keep generic labels but add a tooltip sentence after each link describing the linked source.
B. Replace generic labels with descriptive link text that names the destination resource and purpose.
C. Keep labels but append short domain tags like `[docs]` or `[api]` to disambiguate destination type.
D. Replace labels with raw URLs in running text so readers can inspect destination before clicking.

**Correct Answer:** B
**Rationale:** The chapter warns against vague link text and recommends descriptive, context-rich labels.

## Question 7

A team adds screenshots to a spec with alt text like “image1” and “screen.” A visually impaired reviewer cannot determine what each image demonstrates. Which fix aligns with markdown best practice in the chapter?

A. Keep concise alt text but ensure each image is followed by an explanatory paragraph.
B. Keep short alt text and use descriptive filenames so assistive tools can infer richer semantics.
C. Use descriptive alt text that states what the image shows and why it matters in the workflow.
D. Move visuals to an appendix and reference them by caption numbers in the main implementation flow.

**Correct Answer:** C
**Rationale:** The chapter emphasizes meaningful alt text over vague placeholders.

## Question 8

A manager asks why markdown is treated as an “intent layer” rather than just formatting polish. The team debates whether structure is mostly cosmetic. Which explanation best reflects the chapter’s model?

A. Markdown improves readability, while implementation intent should primarily live in conversation prompts.
B. Markdown organizes discussion context, but implementation intent is better represented in test failures and patches.
C. Markdown captures authoritative requirements, enabling AI reasoning and implementation to align with approved intent.
D. Markdown is a drafting convenience, while source code is the only reliable carrier of final intent.

**Correct Answer:** C
**Rationale:** Chapter 2 frames markdown as the explicit intent layer that guides reasoning and implementation.

## Question 9

A spec mixes problem statement, features, install steps, and expected output in one continuous section with no subheadings. The AI output is partially correct but misses user flow constraints. What is the most likely cause?

A. Retrieval coverage is insufficient, so formatting quality has less impact than external document grounding.
B. The prompt is near token limits, so mixed-content sections are compressed unevenly during generation.
C. Output variance is dominating, so structural improvements would not materially improve implementation fidelity.
D. Missing hierarchy is the issue, because unlabeled sections weaken semantic boundaries between requirement types.

**Correct Answer:** D
**Rationale:** Clear headings and section boundaries help models map requirements accurately.

## Question 10

A team finishes a markdown spec and immediately starts coding without checking list types, heading sequence, or code-block usage. Integration defects later reveal ambiguous requirements. Which habit best prevents this pattern?

A. Split work into smaller sessions, so ambiguity is isolated to fewer requirement segments per run.
B. Add a post-write validation checklist for structural correctness before implementation begins.
C. Expand implementation prompts to restate requirements, compensating for missing document-level validation.
D. Require dual-model generation and compare outputs before coding to catch likely interpretation mismatches.

**Correct Answer:** B
**Rationale:** The chapter repeatedly recommends explicit validation checks before handing specs to AI for execution.
