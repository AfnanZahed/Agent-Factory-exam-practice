# Chapter 3 Questions: General Agents

## Question 1

A developer pastes snippets into a chat assistant that has never seen the full repository. The assistant suggests broad fixes that repeatedly conflict with the project’s architecture. After moving to a terminal-based agent with file access, recommendation quality improves quickly. Which explanation best fits this change?

A. Filesystem access effectively expands context capacity, so structural consistency emerges from larger historical memory coverage.
B. Terminal execution enforces deterministic output pathways, so architectural mismatches decline once command-line tooling is available.
C. Local indexing suppresses probabilistic variation, so model responses converge toward one stable architectural interpretation.
D. Direct repository visibility lets the agent reason from real project structure, so recommendations align with existing implementation constraints.

**Correct Answer:** D
**Rationale:** Agentic workflows improve when models can inspect real files rather than rely on abstract descriptions.

## Question 2

A team asks the same AI for help in two modes. In mode one, the AI only answers conversationally and cannot verify changes. In mode two, it reads files, runs tests, and revises patches after failures. What is the key paradigm distinction?

A. Retrieval mode versus generation mode, where one reads context stores while the other writes implementation artifacts directly.
B. Synchronous mode versus asynchronous mode, where one blocks on prompts while the other pipelines autonomous operations.
C. Advisory mode versus execution mode, where one suggests approaches while the other performs and validates workflow steps.
D. Deterministic mode versus stochastic mode, where one gives fixed outputs while the other explores variant solution paths.

**Correct Answer:** C
**Rationale:** Chapter 3 contrasts passive assistants with agentic systems that act, verify, and adapt.

## Question 3

A developer creates a custom skill whose description says, “Helpful for technical work.” The skill almost never auto-activates when relevant tasks appear. Which issue is most likely?

A. Auto-activation is intentionally conservative, so custom skills generally require explicit invocation in production workflows.
B. Skill discovery is deferred until cloud sync completes, so local descriptions have limited influence on runtime activation.
C. The description is underspecified, so activation logic lacks clear action-input-output cues for reliable triggering.
D. Activation depends primarily on examples, so missing sample prompts weakens trigger confidence even with broad descriptions.

**Correct Answer:** C
**Rationale:** Activation quality depends heavily on precise, trigger-oriented skill descriptions.

## Question 4

A team keeps restating coding conventions in each new session: naming style, test framework, and folder architecture. They want this context available automatically every time Claude starts in the repo. What is the best mechanism?

A. Store conventions in CLAUDE.md at project root so session initialization consistently loads project-specific guidance.
B. Add startup shell aliases that prepend conventions before each request, ensuring repeated context injection at launch.
C. Encode conventions in skill metadata so activation-time retrieval supplies style constraints for all coding interactions.
D. Create a global standards document in the home directory so every repository inherits one shared convention baseline.

**Correct Answer:** A
**Rationale:** CLAUDE.md provides persistent, auto-loaded project context across sessions.

## Question 5

A cross-vendor team worries that moving from Claude Code to another CLI agent will waste months of workflow learning. They already use AGENTS.md-style instructions, MCP integrations, and skill-like packaging. Which assessment is most accurate?

A. Execution-model differences dominate, so only conceptual habits transfer and operational assets usually cannot be reused.
B. Full asset portability is automatic, because standards guarantee identical runtime behavior across all agent interfaces.
C. Portability applies mostly to MCP tools, while instruction files and skill structures generally need full redesign by platform.
D. Most workflow knowledge transfers with modest adaptation, mainly around directory conventions and vendor-specific configuration details.

**Correct Answer:** D
**Rationale:** Standards and shared patterns enable high transferability with limited format adjustments.

## Question 6

A user asks the assistant to investigate a bug, draft a migration, and write release notes in one long thread. By step three, context is noisy and irrelevant artifacts dominate attention. Which tactic most directly addresses this?

A. Delegate phases to separate subagents so each task begins with a clean, purpose-specific context window.
B. Increase model context size to absorb all artifacts, allowing phase-specific relevance to emerge naturally over time.
C. Keep one session but add recap prompts between phases, so recent objectives are reweighted against prior traces.
D. Reset the thread after each phase, then manually restate context to preserve continuity and reduce contamination.

**Correct Answer:** A
**Rationale:** Subagent orchestration isolates context and prevents cross-task contamination.

## Question 7

A team configures an MCP server and exposes “create invoice” as a Resource instead of a Tool. The model can see invoice templates but cannot perform creation. Why?

A. Resource endpoints require elevated policy scopes, so execution is delayed until interactive approvals are granted.
B. Resources are context surfaces for reading, while Tools are executable interfaces intended for action invocation.
C. Tools support only asynchronous jobs, so synchronous create operations must be represented as Resources instead.
D. Prompt templates mediate all MCP writes, so missing prompt bindings prevent execution regardless endpoint category.

**Correct Answer:** B
**Rationale:** MCP distinguishes read-only Resources from executable Tools.

## Question 8

A non-technical operations team uses prebuilt Connectors for Slack and Sheets, while engineering uses custom MCP servers for broader control. Some stakeholders claim these are unrelated systems. What is the most accurate relationship?

A. Connectors are legacy wrappers with partial overlap, while MCP provides the only standards-compliant integration path.
B. Connectors and MCP are parallel ecosystems, with one optimized for office workflows and the other for developer tooling.
C. MCP supersedes connectors conceptually, so both teams should converge on custom servers for long-term compatibility.
D. Connectors are packaged MCP-style integrations that abstract server setup and maintenance for non-technical users.

**Correct Answer:** D
**Rationale:** Chapter 3 frames connectors as MCP-aligned convenience layers for non-technical workflows.

## Question 9

A team repeatedly loads large MCP tool definitions despite using only a few tools each session. Token costs climb quickly. Which optimization directly targets this overhead?

A. Enable Tool Search behavior, so tool definitions are loaded on demand rather than all at once.
B. Merge related tools into one endpoint, so repeated definitions are replaced by a single composite schema.
C. Remove detailed tool descriptions, so inference relies on names and arguments without explanatory overhead.
D. Trim response payload limits, so lower output volume implicitly reduces schema-related context expansion.

**Correct Answer:** A
**Rationale:** Tool Search reduces up-front definition loading by fetching tools selectively.

## Question 10

A compliance lead wants guaranteed execution of a pre-deployment check before any risky action, rather than relying on prompt reminders. Which mechanism best fits that requirement?

A. Event hooks, since checks are bound to execution lifecycle points rather than discretionary prompt compliance.
B. Subagent delegation rules, since orchestration boundaries introduce approval checkpoints before side-effecting actions.
C. Persistent CLAUDE.md constraints, since always-loaded context can enforce policy behavior across command workflows.
D. Auto-triggered skills, since reusable procedures can encode mandatory checks before operational task completion.

**Correct Answer:** A
**Rationale:** Hooks are designed for guaranteed, event-triggered enforcement beyond reminder-style prompting.

## Question 11

A knowledge worker needs to summarize 70 PDFs and produce a polished executive brief without shell-heavy workflows. She can choose between Claude Code and Cowork. Which choice is better aligned?

A. Cowork, because document-centric workflows and built-in productivity affordances match this non-coding objective.
B. Neither is ideal, because large document synthesis usually requires custom API pipelines for acceptable reliability.
C. Claude Code, because terminal orchestration scales better for batch tasks regardless user technical comfort.
D. Either is effectively equivalent, since both products use similar reasoning models and context mechanisms.

**Correct Answer:** A
**Rationale:** Chapter guidance positions Cowork as stronger for non-technical document-heavy workflows.

## Question 12

A developer runs Claude in multiple directories with differing local settings and is surprised that one behavior overrides another. She asks why changing one config file didn’t affect another project. Which concept best explains this?

A. Session-level caches prioritize recent edits, so unchanged directories may delay propagation of config updates.
B. Settings are evaluated hierarchically, so scope level determines which values override or inherit defaults.
C. Skill metadata is authoritative for behavior control, so settings changes apply only when skills are inactive.
D. Hook precedence dominates runtime behavior, so settings files are secondary unless hooks are explicitly disabled.

**Correct Answer:** B
**Rationale:** Chapter sections on settings hierarchy explain layered precedence and scoped overrides.

## Question 13

A team creates a plugin expecting it to run automatically for every request, but nothing happens because no activation path was defined. They assumed installation alone was sufficient. What did they miss?

A. Plugin runtime is restricted to tool-calling contexts, so conversational prompts cannot initiate plugin execution flows.
B. Activation occurs after model warmup phases, so first-session inactivity is expected before stable trigger behavior begins.
C. Installation provides availability, but execution still depends on configured triggers, bindings, or invocation pathways.
D. Plugin lifecycles run only in desktop interfaces, so CLI installations remain inert until cross-surface sync completes.

**Correct Answer:** C
**Rationale:** Extensibility components still require proper activation hooks/paths in workflow design.

## Question 14

A team wants autonomous iteration loops for repetitive refactor-check-fix cycles but fears losing control over risky commands. Which setup balances automation and governance best?

A. Structured iteration loops with guardrails and approvals for high-impact actions, preserving controlled autonomy.
B. Manual-only command execution with generated plans, so governance remains explicit at every operational step.
C. Full auto-approval plus retrospective audits, so throughput remains high while risk is corrected after execution.
D. Single-pass generation with extended prompts, reducing loop count and therefore cumulative execution exposure.

**Correct Answer:** A
**Rationale:** The chapter advocates automation patterns with explicit approval boundaries and safeguards.

## Question 15

A developer asks whether a skill should include broad “development helper” wording to maximize activation frequency. The skill starts triggering in unrelated contexts and degrades quality. What is the better design principle?

A. Prefer precise trigger language and bounded scope, so activation favors relevance over raw invocation frequency.
B. Partition by file extension first, because trigger semantics are less reliable than structural input classification.
C. Prefer broad descriptions with narrower examples, so recall stays high while precision is tuned iteratively.
D. Disable auto-activation for all complex skills, since precision generally conflicts with adaptive trigger behavior.

**Correct Answer:** A
**Rationale:** Precise descriptions improve activation precision and reduce false positives.

## Question 16

A manager says, “If we already have skills, we don’t need MCP integrations.” The team then struggles to access external systems and live data. Which architecture clarification is most accurate?

A. Skills and MCP are interchangeable abstractions, so architecture choice should depend primarily on token economics.
B. Skills can encapsulate integration behavior, but external access still requires connectors or protocol-level tool surfaces.
C. MCP can replace domain instructions, since tool connectivity naturally captures operational expertise requirements over time.
D. Skills encode expertise while MCP provides connectivity; practical systems need both layers working together.

**Correct Answer:** D
**Rationale:** Chapter 3 repeatedly frames skills and MCP as complementary capability layers.

## Question 17

A team defines project rules only in CLAUDE.md and expects other vendor CLIs to honor them without translation. Migration quality drops. Which adjustment is most appropriate?

A. Encode project rules in skill descriptions only, so cross-platform activation carries conventions implicitly.
B. Keep CLAUDE.md canonical and auto-convert it through wrapper scripts before each non-Claude execution run.
C. Move universal instructions to AGENTS.md and keep tool-specific details in vendor-native context files.
D. Shift standards into MCP prompt templates, so runtime tool calls inject guidance independent of interface.

**Correct Answer:** C
**Rationale:** AGENTS.md is the cross-vendor instruction anchor; tool-specific files should remain additive.

## Question 18

A support engineer uses one agent session for unrelated tasks across three products and sees recommendations blend contexts incorrectly. She wants isolation without starting over manually each time. Which pattern helps most?

A. Maintain one global conventions file, so shared rules prevent accidental cross-product recommendation overlap.
B. Expand context capacity and re-anchor prompts periodically, so unrelated domains are deprioritized by recency.
C. Lower creativity settings globally, so cross-domain bleed is reduced through narrower token distribution.
D. Use dedicated sessions/worktrees per stream, so task context and filesystem state remain isolated.

**Correct Answer:** D
**Rationale:** Workstream isolation via separate sessions/worktrees reduces context bleed and state conflicts.

## Question 19

A team wants to collaborate on parallel features without branch conflicts while keeping agent context tightly scoped per feature. What workflow from Chapter 3 is most aligned?

A. One shared branch with strict prompt conventions, so conflicts are minimized through communication discipline.
B. Frequent rebasing in a single branch strategy, letting synchronization absorb concurrent edit divergence.
C. Separate git worktrees per feature with separate agent sessions, isolating both code state and context.
D. One worktree with multiple terminals, relying on local commit hygiene to avoid cross-task contamination.

**Correct Answer:** C
**Rationale:** Worktrees provide practical parallel isolation for both git state and agent context.

## Question 20

A distributed team wants to monitor long-running agent workflows from mobile and reconnect later without losing session continuity. Which chapter capability addresses this need most directly?

A. Hook-based snapshot capture, allowing execution state to be reconstructed from event logs after disconnection.
B. Remote-control patterns with persistent terminal sessions, enabling reconnectable oversight across devices.
C. Skill checkpoint metadata, so unfinished procedures can be resumed from last completed instruction blocks.
D. MCP output caching, where tool-response history restores conversational and command context transparently.

**Correct Answer:** B
**Rationale:** Remote-control patterns are designed for persistent, resumable session operation.

## Question 21

A team insists all tasks should be done in Claude Code because “same model equals same productivity everywhere.” They later find non-technical users slower for document-centric tasks. What was overlooked?

A. Lower-complexity document tasks often expose training gaps first, so measured slowdown is usually onboarding-related.
B. Interface fit and workflow ergonomics matter; model capability parity does not erase surface-level productivity differences.
C. Model outputs converge across interfaces only after settings harmonization, so workflow mismatches reflect config drift.
D. Terminal environments remain optimal with sufficient practice, so early productivity gaps are temporary adaptation effects.

**Correct Answer:** B
**Rationale:** Chapter 3 provides a code-vs-cowork decision framework based on task and user context.

## Question 22

A founder says proprietary platform lock-in is unavoidable, so investing in portable skills and standards is wasted effort. Which response best reflects the cross-vendor section?

A. Portability should focus on tools only, because instruction and skill assets rarely transfer across agent runtimes.
B. Full portability is unrealistic, but standards still reduce migration friction and preserve strategic flexibility.
C. Lock-in matters less now, since frontier-model parity has minimized practical differences between vendor ecosystems.
D. Cross-vendor portability is mostly theoretical unless organizations maintain self-hosted orchestration infrastructure.

**Correct Answer:** B
**Rationale:** The chapter emphasizes portability through standards and reusable patterns.

## Question 23

A team overuses one mega-skill containing dozens of unrelated procedures. Activation becomes noisy and output quality drops in narrowly scoped tasks. Which refinement is most appropriate?

A. Split into focused skills with specific descriptions, improving relevance and reducing accidental trigger overlap.
B. Keep one consolidated skill and tune examples, so broad capability remains while trigger precision improves gradually.
C. Disable auto-activation globally, since broad procedural bundles inherently conflict with selective task routing.
D. Move general procedures into CLAUDE.md, reserving skills only for deterministic command-sequence operations.

**Correct Answer:** A
**Rationale:** Focused, well-scoped skills trigger more accurately and preserve output relevance.

## Question 24

A project manager asks why hook-based checks are preferred over reminder text for mandatory policy enforcement. Which explanation is strongest?

A. Hooks expose stronger audit metadata, whereas reminders are optimized for conversational guidance rather than control.
B. Hooks reduce token overhead, making policy enforcement cheaper while preserving equivalent compliance reliability.
C. Reminder prompts improve awareness, but hooks enforce controls at execution time regardless model interpretation.
D. Reminder text is non-binding by design, while hooks are evaluated under deterministic system-level constraints.

**Correct Answer:** C
**Rationale:** Hooks enforce policy at runtime events; reminders depend on model/user compliance.

## Question 25

A team integrates multiple MCP servers but observes bloated context from loading extensive schemas each session. They ask whether converting repetitive workflows into local skills can help. Which answer is most aligned?

A. Not significantly, because schema overhead remains dominated by MCP definitions even when skills are present.
B. Only partially, because token savings appear mainly when all tools are manually invoked in fixed sequence.
C. Yes, because local workflow compilation can reduce repeated schema loading and large tool-response dependence.
D. Usually no, since MCP optimization should focus on payload truncation rather than workflow representation changes.

**Correct Answer:** C
**Rationale:** Chapter content discusses compiling repetitive workflows to reduce token-heavy tool interactions.

## Question 26

A team cannot decide where to place universal team conventions versus tool-specific guidance. Their current files mix everything, causing confusion during migration. Which split best matches chapter recommendations?

A. Place universal guidance in skill metadata, and keep tool specifics in MCP prompt templates for interoperability.
B. Place universal guidance in plugin manifests, and define tool specifics through runtime resource annotations.
C. Place universal guidance in CLAUDE.md, and map migration differences through shell aliases across environments.
D. Place universal guidance in AGENTS.md, and keep tool-specific operational details in per-tool context files.

**Correct Answer:** D
**Rationale:** The chapter distinguishes cross-vendor instruction standards from vendor-specific context files.

## Question 27

An organization adopts agent teams for parallel problem-solving but gets inconsistent results because each session starts with different assumptions. They ask for a shared baseline. What is the most direct fix?

A. Use one master conversation and branch subtasks from it, so all sessions inherit one canonical context lineage.
B. Normalize sampling settings across all sessions, reducing behavioral divergence from model-level generation variance.
C. Restrict each agent to one directory subtree, minimizing interpretation differences caused by repository-wide visibility.
D. Maintain shared project context artifacts loaded consistently across sessions to align assumptions and conventions.

**Correct Answer:** D
**Rationale:** Consistent shared context artifacts (e.g., project instruction files) align multi-agent behavior.

## Question 28

A user expects installing plugins/connectors to instantly solve workflow quality issues without process redesign, context hygiene, or validation practices. Results remain erratic. Which diagnosis is most accurate?

A. Runtime quality remains almost entirely model-driven, so extension layers have marginal practical influence on outcomes.
B. Extensions increase capability surface, but quality still depends on structured workflow design and disciplined execution.
C. Connectors should replace custom skill logic first, because quality issues mainly come from procedural redundancy.
D. Plugin ecosystems are inherently unstable, so consistent outcomes require minimizing external extensibility dependencies.

**Correct Answer:** B
**Rationale:** Tools expand reach, but outcomes still depend on process, context engineering, and validation.

## Question 29

A team wants fast migration between coding-agent vendors and asks what is least likely to transfer cleanly. They already use standards for instructions and tools. Which category usually needs the most adaptation?

A. Core workflow principles, because reasoning differences usually require redesign of planning and validation practices.
B. Skill trigger descriptions, because activation logic generally requires vendor-specific metadata model translations.
C. Directory paths and local configuration conventions, even when conceptual patterns transfer with minimal change.
D. MCP integration semantics, because standards-compliant servers still vary significantly by client runtime behavior.

**Correct Answer:** C
**Rationale:** Concepts often transfer; practical adaptation is typically in file paths and local conventions.

## Question 30

A company mandates one AI interface for every role to reduce training overhead, ignoring task-specific fit across engineering and operations teams. Which primary weakness mirrors chapter strategy guidance?

A. Training efficiencies usually dominate, so role-specific specialization provides limited measurable operational upside.
B. Unified interfaces simplify governance, but can suppress role-specific productivity gains from complementary tool strengths.
C. Single-tool policies reduce standards adoption, creating technical debt through incompatible multi-agent integration paths.
D. Interface consolidation improves consistency but weakens deterministic reproducibility across compliance-sensitive workflows.

**Correct Answer:** B
**Rationale:** Chapter 3 highlights that different interfaces/tools excel at different task classes and user contexts.
