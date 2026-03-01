const EXAM_DATA = {
  "meta": {
    "title": "General Agents Foundations Practice Exam",
    "theme": "OpenAI",
    "totalQuestions": 70,
    "chapters": 3
  },
  "chapters": [
    {
      "id": "chapter1",
      "number": 1,
      "title": "Chapter 1: Agent Factory Paradigm",
      "shortTitle": "Agent Factory Paradigm",
      "questionCount": 30,
      "questions": [
        {
          "id": "ch1-q1",
          "chapter": "chapter1",
          "chapterNumber": 1,
          "number": 1,
          "stem": "A startup rushes to build a highly specialized customer-support agent before testing whether customers mostly ask billing questions, technical questions, or policy questions. Three months later, the team realizes the workflow assumptions were wrong and most logic must be rebuilt. Which mistake best explains this failure?",
          "options": {
            "A": "They sequenced governance checkpoints ahead of discovery synthesis, reducing responsiveness during early design uncertainty.",
            "B": "They extended exploration without setting convergence criteria, so they delayed specialization beyond the useful decision window.",
            "C": "They moved from incubation to specialization before stable patterns were validated, so they optimized around premature assumptions.",
            "D": "They anchored on commercial hypotheses too early, causing feature architecture to drift from observed user behavior."
          },
          "correctAnswer": "C",
          "rationale": "The maturity model says incubation discovers stable patterns first; specialization comes after requirements crystallize."
        },
        {
          "id": "ch1-q2",
          "chapter": "chapter1",
          "chapterNumber": 1,
          "number": 2,
          "stem": "A CTO sees one vendor claim “AI now writes most production code” and wants to restructure the whole engineering organization immediately. Another leader asks for independent validation from benchmarks, surveys, and enterprise spending behavior before major changes. Which approach aligns with the chapter’s evidence model?",
          "options": {
            "A": "Use convergent evidence from independent sources, because aligned signals across domains reduce single-source bias.",
            "B": "Prioritize vendor telemetry first, then treat independent reports as secondary confirmation only if contradictions appear.",
            "C": "Wait for full metric parity across providers, since partial agreement usually indicates methodological inconsistency.",
            "D": "Focus on internal pilot narratives only, because external benchmark conditions rarely transfer to enterprise teams."
          },
          "correctAnswer": "A",
          "rationale": "The chapter emphasizes convergent evidence: academic, industry, startup, and financial signals aligning independently."
        },
        {
          "id": "ch1-q3",
          "chapter": "chapter1",
          "chapterNumber": 1,
          "number": 3,
          "stem": "A product team gives the same high-level prompt to an AI model five times and gets five slightly different implementation suggestions. They conclude the model is unreliable and unusable. What is the most accurate interpretation?",
          "options": {
            "A": "The model is stateless, so repeated prompts should converge once historical context is removed between trials.",
            "B": "Variation indicates prompt instability, so deterministic behavior requires freezing wording and response temperature jointly.",
            "C": "Output drift reflects context-window bleed, so repeated attempts should be done in isolated session threads.",
            "D": "The model is probabilistic, so variation is expected; control comes from constraints, specs, and validation."
          },
          "correctAnswer": "D",
          "rationale": "Probabilistic generation creates variation; the response is to constrain outputs through specs and quality gates."
        },
        {
          "id": "ch1-q4",
          "chapter": "chapter1",
          "chapterNumber": 1,
          "number": 4,
          "stem": "An engineer keeps one massive chat thread for planning, debugging, deployment notes, and postmortems. After an hour, recommendations become less relevant to the current task. Which constraint-mechanism pair best explains this?",
          "options": {
            "A": "Context-window limits with attention dilution, where irrelevant prior turns crowd out high-priority current details.",
            "B": "Probabilistic variance with cumulative drift, where repeated outputs diverge as token paths become less stable.",
            "C": "Session statelessness with recall gaps, where earlier constraints must be repeatedly reintroduced to maintain focus.",
            "D": "Tool-latency interleaving with ordering bias, where delayed responses overwrite the latest planning context."
          },
          "correctAnswer": "A",
          "rationale": "As context grows, limited window capacity dilutes focus on recent, relevant information."
        },
        {
          "id": "ch1-q5",
          "chapter": "chapter1",
          "chapterNumber": 1,
          "number": 5,
          "stem": "A consulting team documents project conventions during sprint planning but does not store them in any persistent artifact. In every new AI session, developers must restate naming rules, architecture preferences, and test policies. What is the core issue?",
          "options": {
            "A": "Their base model over-generalizes to public patterns, so local style conventions are systematically deprioritized.",
            "B": "Their prompts are too compressed, so deterministic constraint-following weakens over multi-sprint execution cycles.",
            "C": "Their context windows are oversized, so model attention reallocates toward recently opened repository files.",
            "D": "Their workflow lacks persistent external memory, so stateless sessions cannot carry conventions forward."
          },
          "correctAnswer": "D",
          "rationale": "Stateless models need external memory artifacts to preserve conventions across sessions."
        },
        {
          "id": "ch1-q6",
          "chapter": "chapter1",
          "chapterNumber": 1,
          "number": 6,
          "stem": "Two developers receive the same feature brief. Developer A writes code line-by-line and asks AI for autocomplete. Developer B writes acceptance criteria, constraints, and test expectations, then asks an agent to implement and validate. Over repeated features, who is likely to scale quality better?",
          "options": {
            "A": "Developer A, because direct line-level authorship reduces ambiguity accumulation across successive implementation cycles.",
            "B": "Developer A, because autocomplete better preserves architectural continuity than delegated multi-step task execution.",
            "C": "Developer B, because delegation eliminates uncertainty by replacing human interpretation with model-level determinism.",
            "D": "Developer B, because specification-first orchestration compounds consistency, reviewability, and verification quality."
          },
          "correctAnswer": "D",
          "rationale": "The orchestrator model shifts value to specification, validation, and coordination rather than manual typing."
        },
        {
          "id": "ch1-q7",
          "chapter": "chapter1",
          "chapterNumber": 1,
          "number": 7,
          "stem": "A team asks an agent to fix a failing workflow. It inspects logs, identifies a likely root cause, applies a change, reruns checks, and revises the patch after a failed test. Which reasoning pattern is this demonstrating?",
          "options": {
            "A": "Static decomposition, where predefined substeps are executed sequentially without runtime reprioritization.",
            "B": "Progressive abstraction, where implementation details are deferred until architectural decisions stabilize.",
            "C": "OODA-loop behavior, where observe-orient-decide-act cycles repeat with corrective feedback.",
            "D": "Shadow validation discipline, where all actions are simulated before any executable updates are attempted."
          },
          "correctAnswer": "C",
          "rationale": "The cycle of inspect-decide-act-correct maps directly to OODA iterative reasoning."
        },
        {
          "id": "ch1-q8",
          "chapter": "chapter1",
          "chapterNumber": 1,
          "number": 8,
          "stem": "A company has stabilized a fraud-review process after months of experimentation with a general agent. The flow, policies, and escalation rules now rarely change. What is the best next architectural move?",
          "options": {
            "A": "Continue open-ended prototyping, because mature workflows still benefit from unrestricted exploration behavior.",
            "B": "Replace formal specs with operational prompting, because stable processes require less structural enforcement.",
            "C": "Maintain general-agent flexibility to preserve optionality, because specialization increases change-management overhead.",
            "D": "Build a specialized custom agent around the stabilized workflow to improve reliability and governance."
          },
          "correctAnswer": "D",
          "rationale": "Once patterns stabilize, the model recommends crystallizing into specialist systems."
        },
        {
          "id": "ch1-q9",
          "chapter": "chapter1",
          "chapterNumber": 1,
          "number": 9,
          "stem": "A founder says, “We should skip exploration and go directly to production-grade automation so we can launch faster.” The product domain is still ambiguous and requirements change weekly. What is the primary risk?",
          "options": {
            "A": "Early monetization pressure can distort model behavior, reducing policy compliance in high-throughput workloads.",
            "B": "Reduced stochastic exploration can narrow idea diversity, limiting solution-space discovery during launch.",
            "C": "Premature specialization can lock in incorrect assumptions, forcing expensive redesign once patterns emerge.",
            "D": "Delayed standardization can increase vendor friction, making future interoperability retrofits operationally costly."
          },
          "correctAnswer": "C",
          "rationale": "Skipping incubation often hardens assumptions too early and forces expensive rewrites."
        },
        {
          "id": "ch1-q10",
          "chapter": "chapter1",
          "chapterNumber": 1,
          "number": 10,
          "stem": "Two teams build legal AI assistants. Team X focuses on lower token cost and faster response time. Team Y encodes deep contract-negotiation judgment into reusable workflows and review criteria. Which team has the more defensible moat?",
          "options": {
            "A": "Team X, because efficiency gains are harder to copy than process-level domain interpretation frameworks.",
            "B": "Team Y, because specialist legal workflows are protected once converted into repeatable model instructions.",
            "C": "Team Y, because encoded domain expertise creates differentiation competitors cannot easily replicate.",
            "D": "Team X, because enterprise procurement weights throughput economics above all domain-specific quality signals."
          },
          "correctAnswer": "C",
          "rationale": "The chapter’s 80/20 moat emphasizes irreplaceable domain expertise over commodity speed/cost gains."
        },
        {
          "id": "ch1-q11",
          "chapter": "chapter1",
          "chapterNumber": 1,
          "number": 11,
          "stem": "A healthcare organization wants to deploy an AI triage assistant that can recommend next steps for nurses. Leadership is confident because offline tests look strong and asks for immediate autonomous rollout. What deployment strategy best aligns with chapter guidance?",
          "options": {
            "A": "Roll out to one unit directly, then compare retrospective error rates against historical nurse baselines.",
            "B": "Keep deployment manual-only indefinitely, because high-stakes domains should avoid autonomous recommendation systems.",
            "C": "Run shadow mode first, so real-world edge conditions are observed before decisions affect patients.",
            "D": "Begin with constrained autonomy plus nurse override, so safety and speed objectives can be balanced early."
          },
          "correctAnswer": "C",
          "rationale": "Shadow mode is recommended for high-stakes environments before granting direct decision authority."
        },
        {
          "id": "ch1-q12",
          "chapter": "chapter1",
          "chapterNumber": 1,
          "number": 12,
          "stem": "A team reports 96% backtest accuracy for an AI risk engine and uses that as proof for direct production control. Which criticism is strongest in this framework?",
          "options": {
            "A": "Historical simulations miss live-system edge dynamics, so shadow-mode validation is still required.",
            "B": "Offline benchmarks overfit static datasets, so model choice should defer to frontier leaderboard updates.",
            "C": "Backtest metrics understate operating cost behavior, so pricing volatility is the main unresolved risk factor.",
            "D": "Accuracy above 95% implies robust calibration, so rollout risk is mostly concentrated in governance workflows."
          },
          "correctAnswer": "A",
          "rationale": "Backtesting alone cannot capture live-system variability; staged real-world observation is critical."
        },
        {
          "id": "ch1-q13",
          "chapter": "chapter1",
          "chapterNumber": 1,
          "number": 13,
          "stem": "A solo builder lists a niche compliance agent in a marketplace with thousands of similar offerings and expects discovery to drive growth. Which strategic risk is most emphasized in the chapter’s business analysis?",
          "options": {
            "A": "High competition can bury discovery, weakening visibility even for strongly differentiated specialist agents.",
            "B": "Platform fee structures can compress gross margins before product-market fit is fully demonstrated.",
            "C": "Compliance-heavy verticals usually require direct sales cycles, reducing marketplace conversion reliability.",
            "D": "Marketplace channels may force pricing normalization, making premium domain positioning harder to sustain."
          },
          "correctAnswer": "A",
          "rationale": "The chapter highlights discoverability pressure in crowded marketplaces as a core strategic risk."
        },
        {
          "id": "ch1-q14",
          "chapter": "chapter1",
          "chapterNumber": 1,
          "number": 14,
          "stem": "A services firm pitches Digital FTE solutions by saying, “This is just like hiring a junior analyst, but software.” The client asks what real economic difference they should expect. Which framing best fits the chapter?",
          "options": {
            "A": "Digital FTEs shift work into software-like scale dynamics, changing throughput and marginal cost behavior.",
            "B": "Digital FTEs increase utilization of existing teams, but output ceilings still track human staffing limits.",
            "C": "Digital FTEs mainly reduce tool sprawl, with productivity impact depending on analyst supervision intensity.",
            "D": "Digital FTEs offer lower onboarding friction while preserving mostly linear labor-capacity economics over time."
          },
          "correctAnswer": "A",
          "rationale": "The concept emphasizes software-like scale characteristics versus linear human labor constraints."
        },
        {
          "id": "ch1-q15",
          "chapter": "chapter1",
          "chapterNumber": 1,
          "number": 15,
          "stem": "A consultancy supports clients on Claude, GPT, and Gemini stacks and wants reusable agent assets instead of platform-specific rewrites. Which standards-oriented strategy best supports portability?",
          "options": {
            "A": "Adopt open standards like MCP, AGENTS.md, and reusable skill patterns for cross-platform continuity.",
            "B": "Build provider-specific adapters first, then unify behavior through centrally managed prompt transformation layers.",
            "C": "Isolate each deployment stack end-to-end to avoid cross-vendor variance in agent instruction behavior.",
            "D": "Anchor all workflows to one vendor API and expose compatibility wrappers only for enterprise accounts."
          },
          "correctAnswer": "A",
          "rationale": "Standards reduce lock-in and improve portability across vendor ecosystems."
        },
        {
          "id": "ch1-q16",
          "chapter": "chapter1",
          "chapterNumber": 1,
          "number": 16,
          "stem": "A team treats model choice as the entire architecture and ignores context design, tool connectivity, and reusable expertise packaging. Delivery quality remains inconsistent. Which diagnosis best matches chapter guidance?",
          "options": {
            "A": "Quality inconsistency usually reflects benchmark drift, so architecture changes are secondary to model upgrades.",
            "B": "Model-centric optimization alone is insufficient; resilient outcomes require a composed stack architecture.",
            "C": "Expertise packaging is optional once prompt quality exceeds baseline implementation correctness thresholds.",
            "D": "Tool connectivity increases complexity, so architecture simplification should prioritize single-model workflows."
          },
          "correctAnswer": "B",
          "rationale": "The chapter frames modern systems as layered architecture, not just model selection."
        },
        {
          "id": "ch1-q17",
          "chapter": "chapter1",
          "chapterNumber": 1,
          "number": 17,
          "stem": "A regulated fintech team says, “We can move faster by coding first and writing requirements later.” Defects then appear around edge-case handling and auditability. Which process shift addresses this most directly?",
          "options": {
            "A": "Reduce model variability during coding, then infer missing requirements from post-implementation test signals.",
            "B": "Shift validation into manual review checkpoints, where domain experts resolve ambiguous behavior cases.",
            "C": "Use spec-driven development so constraints and success criteria govern implementation from the start.",
            "D": "Expand context retention so early implementation decisions stay visible when requirements are backfilled."
          },
          "correctAnswer": "C",
          "rationale": "SDD emphasizes explicit intent and measurable criteria before implementation."
        },
        {
          "id": "ch1-q18",
          "chapter": "chapter1",
          "chapterNumber": 1,
          "number": 18,
          "stem": "A team writes a detailed spec but never defines measurable success criteria or quality gates. Development appears fast, yet releases fail in production checks. What is the strongest missing element?",
          "options": {
            "A": "Validation discipline, because untestable specs cannot reliably enforce quality expectations.",
            "B": "Domain fine-tuning strategy, because base-model behavior remains unstable without specialized adaptation.",
            "C": "Prompt optimization cycles, since generation consistency is the main dependency for release-grade behavior.",
            "D": "Deployment telemetry loops, because production monitoring should substitute for pre-release verification rigor."
          },
          "correctAnswer": "A",
          "rationale": "SDD requires measurable validation; otherwise “done” is ambiguous and quality degrades."
        },
        {
          "id": "ch1-q19",
          "chapter": "chapter1",
          "chapterNumber": 1,
          "number": 19,
          "stem": "A product spec lists goals and features but omits non-goals. Engineers implement optional workflows that were never intended, delaying release and increasing risk. Why is this omission costly?",
          "options": {
            "A": "Non-goals define boundaries, preventing accidental scope expansion and requirement drift.",
            "B": "Non-goals optimize benchmark comparability, helping teams calibrate generated output quality consistently.",
            "C": "Non-goals reduce lexical ambiguity in prompts, improving deterministic interpretation under token pressure.",
            "D": "Non-goals improve retrieval precision, reducing irrelevant documentation pulls during implementation planning."
          },
          "correctAnswer": "A",
          "rationale": "Clear boundaries are essential to avoid scope creep and misaligned implementation effort."
        },
        {
          "id": "ch1-q20",
          "chapter": "chapter1",
          "chapterNumber": 1,
          "number": 20,
          "stem": "An organization adopts only two of the nine AIDD pillars and expects full transformation benefits. Productivity improves slightly but does not compound. What best explains the outcome?",
          "options": {
            "A": "Transformation drag usually reflects organizational inertia rather than architecture completeness effects.",
            "B": "Incomplete adoption weakens specialization readiness, so gains remain tied to manual coding throughput.",
            "C": "Partial adoption yields local gains, but compounding impact depends on integrated pillar interactions.",
            "D": "Benefits flatten mainly when token economics remain volatile during transitional tooling adoption phases."
          },
          "correctAnswer": "C",
          "rationale": "The chapter argues for completeness effects: integrated pillars compound value together."
        },
        {
          "id": "ch1-q21",
          "chapter": "chapter1",
          "chapterNumber": 1,
          "number": 21,
          "stem": "A senior engineer argues that becoming “M-shaped” means mastering every domain manually, so AI tools are irrelevant to skill expansion. Which response best reflects the chapter’s position?",
          "options": {
            "A": "AI can expand cross-domain execution capacity, making broader capability profiles more attainable.",
            "B": "AI support helps depth in one domain, but breadth expansion still requires independent manual specialization.",
            "C": "M-shaped growth should remain human-only, because delegated execution weakens foundational competence transfer.",
            "D": "M-shaped development matters less now, since orchestration displaces most role-specific differentiation patterns."
          },
          "correctAnswer": "A",
          "rationale": "The chapter frames AI as an enabler of broader, composable capability—not a replacement for judgment."
        },
        {
          "id": "ch1-q22",
          "chapter": "chapter1",
          "chapterNumber": 1,
          "number": 22,
          "stem": "A product lead says, “Our assistant can reason well, so we don’t need memory or action capabilities.” The system gives good advice but cannot execute workflows or maintain continuity. Which principle is being ignored?",
          "options": {
            "A": "Reasoning-first systems can defer memory/action layers until workflow complexity reaches production scale.",
            "B": "Action capability is optional when high-quality recommendations can be consumed by human operators.",
            "C": "Agent capability is compositional; reasoning alone cannot deliver full end-to-end agentic function.",
            "D": "Memory primarily benefits compliance logging, so execution limitations indicate tool integration gaps instead."
          },
          "correctAnswer": "C",
          "rationale": "See/hear/reason/act/remember combine to create practical agentic systems."
        },
        {
          "id": "ch1-q23",
          "chapter": "chapter1",
          "chapterNumber": 1,
          "number": 23,
          "stem": "A team redesigns onboarding by asking users to describe outcomes in plain goals instead of navigating rigid menu trees. Completion rates improve and support tickets drop. Which shift does this illustrate?",
          "options": {
            "A": "From static workflow templates toward probabilistic navigation that encourages serendipitous discovery.",
            "B": "From specialist software design toward incubator-style interfaces that preserve broad exploration range.",
            "C": "From action-optimized architecture toward memory-optimized architecture for adaptive personalization.",
            "D": "From deterministic UI pathways toward intent-driven interaction centered on user goals."
          },
          "correctAnswer": "D",
          "rationale": "The chapter contrasts traditional UI navigation with intent-driven agentic interaction."
        },
        {
          "id": "ch1-q24",
          "chapter": "chapter1",
          "chapterNumber": 1,
          "number": 24,
          "stem": "A manager says software disruption will unfold slowly like heavy-industry automation, so teams can postpone adaptation for years. Which chapter argument directly challenges this?",
          "options": {
            "A": "Software transitions are mostly policy-driven, making adaptation speed dependent on regulatory cadence.",
            "B": "Software adoption cycles are shorter because cloud distribution compresses enterprise deployment timelines.",
            "C": "Software capability gains plateau quickly, so long-run disruption is less severe than physical automation.",
            "D": "Software disrupts itself, so tools and practices shift together faster than external-force transitions."
          },
          "correctAnswer": "D",
          "rationale": "The text emphasizes self-disruption as unusually fast and comprehensive."
        },
        {
          "id": "ch1-q25",
          "chapter": "chapter1",
          "chapterNumber": 1,
          "number": 25,
          "stem": "A junior developer says she will wait until AI-native workflows are fully standardized before learning them. A mentor recommends learning during the active transition window. Why?",
          "options": {
            "A": "Learning early improves model familiarity, though production impact remains mostly unchanged long-term.",
            "B": "Late learning remains viable, but certification pathways become harder once tools consolidate operationally.",
            "C": "Standardized ecosystems usually restrict customization, so innovation potential is highest before stabilization.",
            "D": "Early participation builds directional intuition while conventions are still forming across organizations."
          },
          "correctAnswer": "D",
          "rationale": "The chapter frames current timing as a high-leverage opportunity window."
        },
        {
          "id": "ch1-q26",
          "chapter": "chapter1",
          "chapterNumber": 1,
          "number": 26,
          "stem": "A services firm pitches “prompt engineering packages” as its primary long-term competitive edge. Clients initially buy but quickly compare alternatives and switch. Which chapter concept best explains this fragility?",
          "options": {
            "A": "Prompt practices degrade rapidly across model versions, making long-term service reliability hard to preserve.",
            "B": "Prompt assets are usually easy to imitate unless backed by domain workflow depth and execution know-how.",
            "C": "Prompt-only offerings underperform because enterprise buyers prioritize infrastructure ownership over advisory design.",
            "D": "Prompt specialization is constrained by standards bodies, limiting defensibility of reusable instruction libraries."
          },
          "correctAnswer": "B",
          "rationale": "Durable advantage is tied to domain expertise and embedded operational knowledge, not generic prompts."
        },
        {
          "id": "ch1-q27",
          "chapter": "chapter1",
          "chapterNumber": 1,
          "number": 27,
          "stem": "A consultancy enters AI services through existing ecosystems, validates demand quickly, then gradually moves toward proprietary vertical solutions. Which strategic pattern is this closest to?",
          "options": {
            "A": "Competitive benchmark rotation, where model-selection cycles drive temporary differentiation windows.",
            "B": "Closed-stack acceleration, where early lock-in improves governance consistency before growth expansion.",
            "C": "Progressive ecosystem leverage, where staged entry de-risks learning before independent productization.",
            "D": "Incubator persistence, where firms avoid specialization to preserve adaptability across uncertain demand signals."
          },
          "correctAnswer": "C",
          "rationale": "This matches phased market entry and capability layering described in the strategy section."
        },
        {
          "id": "ch1-q28",
          "chapter": "chapter1",
          "chapterNumber": 1,
          "number": 28,
          "stem": "A team plans to automate high-stakes legal decisions end-to-end but has no human escalation path, no transparency requirements, and no rollback protocol. Which chapter guidance is most relevant?",
          "options": {
            "A": "Introduce scaled deployment first, then attach governance controls once baseline reliability stabilizes in production.",
            "B": "Prioritize latency controls and throughput guarantees, since most legal risk emerges from operational bottlenecks.",
            "C": "Restrict all legal automation to static rule systems, because adaptive agents are unsuitable by definition.",
            "D": "Apply risk guardrails and staged controls before autonomy in sensitive, high-consequence workflows."
          },
          "correctAnswer": "D",
          "rationale": "The framework explicitly stresses guardrails and caution for high-risk or high-consequence contexts."
        },
        {
          "id": "ch1-q29",
          "chapter": "chapter1",
          "chapterNumber": 1,
          "number": 29,
          "stem": "A developer gives a goal-level prompt with no prescribed steps, and the general agent decomposes tasks, executes checks, and adapts sequencing as it learns from results. What capability is being used?",
          "options": {
            "A": "Prompt templating, where workflow decomposition is selected from predefined instruction blueprints.",
            "B": "Dynamic planning, where the agent constructs and updates execution structure during runtime problem-solving.",
            "C": "Context serialization, where external memory snapshots determine each subsequent planning branch.",
            "D": "Shadow orchestration, where executable actions are mirrored without mutating the active environment."
          },
          "correctAnswer": "B",
          "rationale": "Dynamic planning is a defining incubator behavior for ambiguous, evolving tasks."
        },
        {
          "id": "ch1-q30",
          "chapter": "chapter1",
          "chapterNumber": 1,
          "number": 30,
          "stem": "A product team asks when to transition from a general-agent prototyping workflow to a custom-agent build. Which trigger is most consistent with the maturity model?",
          "options": {
            "A": "Transition when benchmark leaders change, because capability shifts reduce uncertainty in architecture decisions.",
            "B": "Transition when patterns, constraints, and success criteria are stable and repeatedly validated.",
            "C": "Transition after complete standards adoption, because specialization requires full interoperability readiness first.",
            "D": "Transition when token costs rise, because specialist systems should be primarily economics-driven milestones."
          },
          "correctAnswer": "B",
          "rationale": "Specialization should begin when solution patterns are proven and stable, not merely when tools change."
        }
      ]
    },
    {
      "id": "chapter2",
      "number": 2,
      "title": "Chapter 2: Markdown Writing Instructions",
      "shortTitle": "Markdown Writing Instructions",
      "questionCount": 10,
      "questions": [
        {
          "id": "ch2-q1",
          "chapter": "chapter2",
          "chapterNumber": 2,
          "number": 1,
          "stem": "A product owner sends an AI agent one dense paragraph describing a scheduling app, mixing features, user flow, and error behavior in no clear order. The generated code misses two required behaviors and invents one extra feature. Which change would most directly improve implementation fidelity?",
          "options": {
            "A": "Rewrite requirements as structured markdown sections and lists, so intent is explicit and parseable.",
            "B": "Keep prose format but add acceptance criteria sentences at the end to clarify implementation priorities.",
            "C": "Keep paragraph style but add explicit labels like “Feature,” “Flow,” and “Error” inside the same block of text.",
            "D": "Use a stronger model first, then preserve the current format so requirements remain natural-language friendly."
          },
          "correctAnswer": "A",
          "rationale": "The chapter emphasizes structured markdown as the main bridge between intent and accurate implementation."
        },
        {
          "id": "ch2-q2",
          "chapter": "chapter2",
          "chapterNumber": 2,
          "number": 2,
          "stem": "A junior writer creates this spec skeleton: `# App`, then immediately `### Installation`, then `## Features`. The team notices repeated misunderstanding of section ownership during implementation. What is the core markdown issue?",
          "options": {
            "A": "Section sequencing is mismatched, because installation should be placed after user-facing behavior requirements.",
            "B": "Heading hierarchy is broken, because skipped levels weaken document structure and section semantics.",
            "C": "Heading syntax is inconsistent, because technical specs should keep all second-level headings adjacent before thirds.",
            "D": "Title granularity is weak, because one-word H1 headings reduce semantic anchoring for downstream readers."
          },
          "correctAnswer": "B",
          "rationale": "Skipping heading levels creates unclear structure and harms AI interpretation of section relationships."
        },
        {
          "id": "ch2-q3",
          "chapter": "chapter2",
          "chapterNumber": 2,
          "number": 3,
          "stem": "A team documents product capabilities under `## Features` using numbered steps: `1. Dark mode`, `2. Export PDF`, `3. Auto-save`. Reviewers keep treating these as required execution sequence. Which fix best preserves intent?",
          "options": {
            "A": "Convert feature entries to unordered bullets, so items are treated as a set rather than a process.",
            "B": "Keep numbering but add a sentence clarifying that order is not mandatory for implementation.",
            "C": "Prefix each numbered item with “Capability:” so readers infer categorization instead of sequence.",
            "D": "Keep numbering but split features into two sublists for core and optional capabilities."
          },
          "correctAnswer": "A",
          "rationale": "Unordered lists are the correct representation when item order does not matter."
        },
        {
          "id": "ch2-q4",
          "chapter": "chapter2",
          "chapterNumber": 2,
          "number": 4,
          "stem": "An engineering lead writes expected console output using inline backticks across multiple lines in one paragraph. The AI misses line breaks and menu formatting in generated code. What markdown change is most appropriate?",
          "options": {
            "A": "Use a two-column table for prompt and output lines, preserving structure without fenced blocks.",
            "B": "Use an ordered list of output lines, with each line wrapped in inline code for readability.",
            "C": "Use inline code per line with forced line breaks, so output remains embedded but visually separated.",
            "D": "Use a fenced code block with a `text` tag, because multiline output should be represented as block content."
          },
          "correctAnswer": "D",
          "rationale": "Multiline examples should be in fenced code blocks; inline code is for short, single-token snippets."
        },
        {
          "id": "ch2-q5",
          "chapter": "chapter2",
          "chapterNumber": 2,
          "number": 5,
          "stem": "A spec references setup commands and file paths in plain prose without backticks, and reviewers repeatedly misread one path as a sentence fragment. Which improvement best matches chapter guidance?",
          "options": {
            "A": "Put every path in quotation marks, so parsers distinguish path-like strings from ordinary prose.",
            "B": "Bold commands and paths consistently, so technical tokens stand out from descriptive text.",
            "C": "Use inline code formatting for commands and paths, so technical tokens are clearly separated from text.",
            "D": "Move all command/path references to a final appendix, keeping implementation sections narrative-first."
          },
          "correctAnswer": "C",
          "rationale": "Inline code is recommended for short commands, paths, and technical identifiers inside normal text."
        },
        {
          "id": "ch2-q6",
          "chapter": "chapter2",
          "chapterNumber": 2,
          "number": 6,
          "stem": "A documentation draft includes links labeled “click here” and “read more” for critical APIs. New contributors often open the wrong resource and misconfigure dependencies. Which revision best improves clarity?",
          "options": {
            "A": "Keep generic labels but add a tooltip sentence after each link describing the linked source.",
            "B": "Replace generic labels with descriptive link text that names the destination resource and purpose.",
            "C": "Keep labels but append short domain tags like `[docs]` or `[api]` to disambiguate destination type.",
            "D": "Replace labels with raw URLs in running text so readers can inspect destination before clicking."
          },
          "correctAnswer": "B",
          "rationale": "The chapter warns against vague link text and recommends descriptive, context-rich labels."
        },
        {
          "id": "ch2-q7",
          "chapter": "chapter2",
          "chapterNumber": 2,
          "number": 7,
          "stem": "A team adds screenshots to a spec with alt text like “image1” and “screen.” A visually impaired reviewer cannot determine what each image demonstrates. Which fix aligns with markdown best practice in the chapter?",
          "options": {
            "A": "Keep concise alt text but ensure each image is followed by an explanatory paragraph.",
            "B": "Keep short alt text and use descriptive filenames so assistive tools can infer richer semantics.",
            "C": "Use descriptive alt text that states what the image shows and why it matters in the workflow.",
            "D": "Move visuals to an appendix and reference them by caption numbers in the main implementation flow."
          },
          "correctAnswer": "C",
          "rationale": "The chapter emphasizes meaningful alt text over vague placeholders."
        },
        {
          "id": "ch2-q8",
          "chapter": "chapter2",
          "chapterNumber": 2,
          "number": 8,
          "stem": "A manager asks why markdown is treated as an “intent layer” rather than just formatting polish. The team debates whether structure is mostly cosmetic. Which explanation best reflects the chapter’s model?",
          "options": {
            "A": "Markdown improves readability, while implementation intent should primarily live in conversation prompts.",
            "B": "Markdown organizes discussion context, but implementation intent is better represented in test failures and patches.",
            "C": "Markdown captures authoritative requirements, enabling AI reasoning and implementation to align with approved intent.",
            "D": "Markdown is a drafting convenience, while source code is the only reliable carrier of final intent."
          },
          "correctAnswer": "C",
          "rationale": "Chapter 2 frames markdown as the explicit intent layer that guides reasoning and implementation."
        },
        {
          "id": "ch2-q9",
          "chapter": "chapter2",
          "chapterNumber": 2,
          "number": 9,
          "stem": "A spec mixes problem statement, features, install steps, and expected output in one continuous section with no subheadings. The AI output is partially correct but misses user flow constraints. What is the most likely cause?",
          "options": {
            "A": "Retrieval coverage is insufficient, so formatting quality has less impact than external document grounding.",
            "B": "The prompt is near token limits, so mixed-content sections are compressed unevenly during generation.",
            "C": "Output variance is dominating, so structural improvements would not materially improve implementation fidelity.",
            "D": "Missing hierarchy is the issue, because unlabeled sections weaken semantic boundaries between requirement types."
          },
          "correctAnswer": "D",
          "rationale": "Clear headings and section boundaries help models map requirements accurately."
        },
        {
          "id": "ch2-q10",
          "chapter": "chapter2",
          "chapterNumber": 2,
          "number": 10,
          "stem": "A team finishes a markdown spec and immediately starts coding without checking list types, heading sequence, or code-block usage. Integration defects later reveal ambiguous requirements. Which habit best prevents this pattern?",
          "options": {
            "A": "Split work into smaller sessions, so ambiguity is isolated to fewer requirement segments per run.",
            "B": "Add a post-write validation checklist for structural correctness before implementation begins.",
            "C": "Expand implementation prompts to restate requirements, compensating for missing document-level validation.",
            "D": "Require dual-model generation and compare outputs before coding to catch likely interpretation mismatches."
          },
          "correctAnswer": "B",
          "rationale": "The chapter repeatedly recommends explicit validation checks before handing specs to AI for execution."
        }
      ]
    },
    {
      "id": "chapter3",
      "number": 3,
      "title": "Chapter 3: General Agents",
      "shortTitle": "General Agents",
      "questionCount": 30,
      "questions": [
        {
          "id": "ch3-q1",
          "chapter": "chapter3",
          "chapterNumber": 3,
          "number": 1,
          "stem": "A developer pastes snippets into a chat assistant that has never seen the full repository. The assistant suggests broad fixes that repeatedly conflict with the project’s architecture. After moving to a terminal-based agent with file access, recommendation quality improves quickly. Which explanation best fits this change?",
          "options": {
            "A": "Filesystem access effectively expands context capacity, so structural consistency emerges from larger historical memory coverage.",
            "B": "Terminal execution enforces deterministic output pathways, so architectural mismatches decline once command-line tooling is available.",
            "C": "Local indexing suppresses probabilistic variation, so model responses converge toward one stable architectural interpretation.",
            "D": "Direct repository visibility lets the agent reason from real project structure, so recommendations align with existing implementation constraints."
          },
          "correctAnswer": "D",
          "rationale": "Agentic workflows improve when models can inspect real files rather than rely on abstract descriptions."
        },
        {
          "id": "ch3-q2",
          "chapter": "chapter3",
          "chapterNumber": 3,
          "number": 2,
          "stem": "A team asks the same AI for help in two modes. In mode one, the AI only answers conversationally and cannot verify changes. In mode two, it reads files, runs tests, and revises patches after failures. What is the key paradigm distinction?",
          "options": {
            "A": "Retrieval mode versus generation mode, where one reads context stores while the other writes implementation artifacts directly.",
            "B": "Synchronous mode versus asynchronous mode, where one blocks on prompts while the other pipelines autonomous operations.",
            "C": "Advisory mode versus execution mode, where one suggests approaches while the other performs and validates workflow steps.",
            "D": "Deterministic mode versus stochastic mode, where one gives fixed outputs while the other explores variant solution paths."
          },
          "correctAnswer": "C",
          "rationale": "Chapter 3 contrasts passive assistants with agentic systems that act, verify, and adapt."
        },
        {
          "id": "ch3-q3",
          "chapter": "chapter3",
          "chapterNumber": 3,
          "number": 3,
          "stem": "A developer creates a custom skill whose description says, “Helpful for technical work.” The skill almost never auto-activates when relevant tasks appear. Which issue is most likely?",
          "options": {
            "A": "Auto-activation is intentionally conservative, so custom skills generally require explicit invocation in production workflows.",
            "B": "Skill discovery is deferred until cloud sync completes, so local descriptions have limited influence on runtime activation.",
            "C": "The description is underspecified, so activation logic lacks clear action-input-output cues for reliable triggering.",
            "D": "Activation depends primarily on examples, so missing sample prompts weakens trigger confidence even with broad descriptions."
          },
          "correctAnswer": "C",
          "rationale": "Activation quality depends heavily on precise, trigger-oriented skill descriptions."
        },
        {
          "id": "ch3-q4",
          "chapter": "chapter3",
          "chapterNumber": 3,
          "number": 4,
          "stem": "A team keeps restating coding conventions in each new session: naming style, test framework, and folder architecture. They want this context available automatically every time Claude starts in the repo. What is the best mechanism?",
          "options": {
            "A": "Store conventions in CLAUDE.md at project root so session initialization consistently loads project-specific guidance.",
            "B": "Add startup shell aliases that prepend conventions before each request, ensuring repeated context injection at launch.",
            "C": "Encode conventions in skill metadata so activation-time retrieval supplies style constraints for all coding interactions.",
            "D": "Create a global standards document in the home directory so every repository inherits one shared convention baseline."
          },
          "correctAnswer": "A",
          "rationale": "CLAUDE.md provides persistent, auto-loaded project context across sessions."
        },
        {
          "id": "ch3-q5",
          "chapter": "chapter3",
          "chapterNumber": 3,
          "number": 5,
          "stem": "A cross-vendor team worries that moving from Claude Code to another CLI agent will waste months of workflow learning. They already use AGENTS.md-style instructions, MCP integrations, and skill-like packaging. Which assessment is most accurate?",
          "options": {
            "A": "Execution-model differences dominate, so only conceptual habits transfer and operational assets usually cannot be reused.",
            "B": "Full asset portability is automatic, because standards guarantee identical runtime behavior across all agent interfaces.",
            "C": "Portability applies mostly to MCP tools, while instruction files and skill structures generally need full redesign by platform.",
            "D": "Most workflow knowledge transfers with modest adaptation, mainly around directory conventions and vendor-specific configuration details."
          },
          "correctAnswer": "D",
          "rationale": "Standards and shared patterns enable high transferability with limited format adjustments."
        },
        {
          "id": "ch3-q6",
          "chapter": "chapter3",
          "chapterNumber": 3,
          "number": 6,
          "stem": "A user asks the assistant to investigate a bug, draft a migration, and write release notes in one long thread. By step three, context is noisy and irrelevant artifacts dominate attention. Which tactic most directly addresses this?",
          "options": {
            "A": "Delegate phases to separate subagents so each task begins with a clean, purpose-specific context window.",
            "B": "Increase model context size to absorb all artifacts, allowing phase-specific relevance to emerge naturally over time.",
            "C": "Keep one session but add recap prompts between phases, so recent objectives are reweighted against prior traces.",
            "D": "Reset the thread after each phase, then manually restate context to preserve continuity and reduce contamination."
          },
          "correctAnswer": "A",
          "rationale": "Subagent orchestration isolates context and prevents cross-task contamination."
        },
        {
          "id": "ch3-q7",
          "chapter": "chapter3",
          "chapterNumber": 3,
          "number": 7,
          "stem": "A team configures an MCP server and exposes “create invoice” as a Resource instead of a Tool. The model can see invoice templates but cannot perform creation. Why?",
          "options": {
            "A": "Resource endpoints require elevated policy scopes, so execution is delayed until interactive approvals are granted.",
            "B": "Resources are context surfaces for reading, while Tools are executable interfaces intended for action invocation.",
            "C": "Tools support only asynchronous jobs, so synchronous create operations must be represented as Resources instead.",
            "D": "Prompt templates mediate all MCP writes, so missing prompt bindings prevent execution regardless endpoint category."
          },
          "correctAnswer": "B",
          "rationale": "MCP distinguishes read-only Resources from executable Tools."
        },
        {
          "id": "ch3-q8",
          "chapter": "chapter3",
          "chapterNumber": 3,
          "number": 8,
          "stem": "A non-technical operations team uses prebuilt Connectors for Slack and Sheets, while engineering uses custom MCP servers for broader control. Some stakeholders claim these are unrelated systems. What is the most accurate relationship?",
          "options": {
            "A": "Connectors are legacy wrappers with partial overlap, while MCP provides the only standards-compliant integration path.",
            "B": "Connectors and MCP are parallel ecosystems, with one optimized for office workflows and the other for developer tooling.",
            "C": "MCP supersedes connectors conceptually, so both teams should converge on custom servers for long-term compatibility.",
            "D": "Connectors are packaged MCP-style integrations that abstract server setup and maintenance for non-technical users."
          },
          "correctAnswer": "D",
          "rationale": "Chapter 3 frames connectors as MCP-aligned convenience layers for non-technical workflows."
        },
        {
          "id": "ch3-q9",
          "chapter": "chapter3",
          "chapterNumber": 3,
          "number": 9,
          "stem": "A team repeatedly loads large MCP tool definitions despite using only a few tools each session. Token costs climb quickly. Which optimization directly targets this overhead?",
          "options": {
            "A": "Enable Tool Search behavior, so tool definitions are loaded on demand rather than all at once.",
            "B": "Merge related tools into one endpoint, so repeated definitions are replaced by a single composite schema.",
            "C": "Remove detailed tool descriptions, so inference relies on names and arguments without explanatory overhead.",
            "D": "Trim response payload limits, so lower output volume implicitly reduces schema-related context expansion."
          },
          "correctAnswer": "A",
          "rationale": "Tool Search reduces up-front definition loading by fetching tools selectively."
        },
        {
          "id": "ch3-q10",
          "chapter": "chapter3",
          "chapterNumber": 3,
          "number": 10,
          "stem": "A compliance lead wants guaranteed execution of a pre-deployment check before any risky action, rather than relying on prompt reminders. Which mechanism best fits that requirement?",
          "options": {
            "A": "Event hooks, since checks are bound to execution lifecycle points rather than discretionary prompt compliance.",
            "B": "Subagent delegation rules, since orchestration boundaries introduce approval checkpoints before side-effecting actions.",
            "C": "Persistent CLAUDE.md constraints, since always-loaded context can enforce policy behavior across command workflows.",
            "D": "Auto-triggered skills, since reusable procedures can encode mandatory checks before operational task completion."
          },
          "correctAnswer": "A",
          "rationale": "Hooks are designed for guaranteed, event-triggered enforcement beyond reminder-style prompting."
        },
        {
          "id": "ch3-q11",
          "chapter": "chapter3",
          "chapterNumber": 3,
          "number": 11,
          "stem": "A knowledge worker needs to summarize 70 PDFs and produce a polished executive brief without shell-heavy workflows. She can choose between Claude Code and Cowork. Which choice is better aligned?",
          "options": {
            "A": "Cowork, because document-centric workflows and built-in productivity affordances match this non-coding objective.",
            "B": "Neither is ideal, because large document synthesis usually requires custom API pipelines for acceptable reliability.",
            "C": "Claude Code, because terminal orchestration scales better for batch tasks regardless user technical comfort.",
            "D": "Either is effectively equivalent, since both products use similar reasoning models and context mechanisms."
          },
          "correctAnswer": "A",
          "rationale": "Chapter guidance positions Cowork as stronger for non-technical document-heavy workflows."
        },
        {
          "id": "ch3-q12",
          "chapter": "chapter3",
          "chapterNumber": 3,
          "number": 12,
          "stem": "A developer runs Claude in multiple directories with differing local settings and is surprised that one behavior overrides another. She asks why changing one config file didn’t affect another project. Which concept best explains this?",
          "options": {
            "A": "Session-level caches prioritize recent edits, so unchanged directories may delay propagation of config updates.",
            "B": "Settings are evaluated hierarchically, so scope level determines which values override or inherit defaults.",
            "C": "Skill metadata is authoritative for behavior control, so settings changes apply only when skills are inactive.",
            "D": "Hook precedence dominates runtime behavior, so settings files are secondary unless hooks are explicitly disabled."
          },
          "correctAnswer": "B",
          "rationale": "Chapter sections on settings hierarchy explain layered precedence and scoped overrides."
        },
        {
          "id": "ch3-q13",
          "chapter": "chapter3",
          "chapterNumber": 3,
          "number": 13,
          "stem": "A team creates a plugin expecting it to run automatically for every request, but nothing happens because no activation path was defined. They assumed installation alone was sufficient. What did they miss?",
          "options": {
            "A": "Plugin runtime is restricted to tool-calling contexts, so conversational prompts cannot initiate plugin execution flows.",
            "B": "Activation occurs after model warmup phases, so first-session inactivity is expected before stable trigger behavior begins.",
            "C": "Installation provides availability, but execution still depends on configured triggers, bindings, or invocation pathways.",
            "D": "Plugin lifecycles run only in desktop interfaces, so CLI installations remain inert until cross-surface sync completes."
          },
          "correctAnswer": "C",
          "rationale": "Extensibility components still require proper activation hooks/paths in workflow design."
        },
        {
          "id": "ch3-q14",
          "chapter": "chapter3",
          "chapterNumber": 3,
          "number": 14,
          "stem": "A team wants autonomous iteration loops for repetitive refactor-check-fix cycles but fears losing control over risky commands. Which setup balances automation and governance best?",
          "options": {
            "A": "Structured iteration loops with guardrails and approvals for high-impact actions, preserving controlled autonomy.",
            "B": "Manual-only command execution with generated plans, so governance remains explicit at every operational step.",
            "C": "Full auto-approval plus retrospective audits, so throughput remains high while risk is corrected after execution.",
            "D": "Single-pass generation with extended prompts, reducing loop count and therefore cumulative execution exposure."
          },
          "correctAnswer": "A",
          "rationale": "The chapter advocates automation patterns with explicit approval boundaries and safeguards."
        },
        {
          "id": "ch3-q15",
          "chapter": "chapter3",
          "chapterNumber": 3,
          "number": 15,
          "stem": "A developer asks whether a skill should include broad “development helper” wording to maximize activation frequency. The skill starts triggering in unrelated contexts and degrades quality. What is the better design principle?",
          "options": {
            "A": "Prefer precise trigger language and bounded scope, so activation favors relevance over raw invocation frequency.",
            "B": "Partition by file extension first, because trigger semantics are less reliable than structural input classification.",
            "C": "Prefer broad descriptions with narrower examples, so recall stays high while precision is tuned iteratively.",
            "D": "Disable auto-activation for all complex skills, since precision generally conflicts with adaptive trigger behavior."
          },
          "correctAnswer": "A",
          "rationale": "Precise descriptions improve activation precision and reduce false positives."
        },
        {
          "id": "ch3-q16",
          "chapter": "chapter3",
          "chapterNumber": 3,
          "number": 16,
          "stem": "A manager says, “If we already have skills, we don’t need MCP integrations.” The team then struggles to access external systems and live data. Which architecture clarification is most accurate?",
          "options": {
            "A": "Skills and MCP are interchangeable abstractions, so architecture choice should depend primarily on token economics.",
            "B": "Skills can encapsulate integration behavior, but external access still requires connectors or protocol-level tool surfaces.",
            "C": "MCP can replace domain instructions, since tool connectivity naturally captures operational expertise requirements over time.",
            "D": "Skills encode expertise while MCP provides connectivity; practical systems need both layers working together."
          },
          "correctAnswer": "D",
          "rationale": "Chapter 3 repeatedly frames skills and MCP as complementary capability layers."
        },
        {
          "id": "ch3-q17",
          "chapter": "chapter3",
          "chapterNumber": 3,
          "number": 17,
          "stem": "A team defines project rules only in CLAUDE.md and expects other vendor CLIs to honor them without translation. Migration quality drops. Which adjustment is most appropriate?",
          "options": {
            "A": "Encode project rules in skill descriptions only, so cross-platform activation carries conventions implicitly.",
            "B": "Keep CLAUDE.md canonical and auto-convert it through wrapper scripts before each non-Claude execution run.",
            "C": "Move universal instructions to AGENTS.md and keep tool-specific details in vendor-native context files.",
            "D": "Shift standards into MCP prompt templates, so runtime tool calls inject guidance independent of interface."
          },
          "correctAnswer": "C",
          "rationale": "AGENTS.md is the cross-vendor instruction anchor; tool-specific files should remain additive."
        },
        {
          "id": "ch3-q18",
          "chapter": "chapter3",
          "chapterNumber": 3,
          "number": 18,
          "stem": "A support engineer uses one agent session for unrelated tasks across three products and sees recommendations blend contexts incorrectly. She wants isolation without starting over manually each time. Which pattern helps most?",
          "options": {
            "A": "Maintain one global conventions file, so shared rules prevent accidental cross-product recommendation overlap.",
            "B": "Expand context capacity and re-anchor prompts periodically, so unrelated domains are deprioritized by recency.",
            "C": "Lower creativity settings globally, so cross-domain bleed is reduced through narrower token distribution.",
            "D": "Use dedicated sessions/worktrees per stream, so task context and filesystem state remain isolated."
          },
          "correctAnswer": "D",
          "rationale": "Workstream isolation via separate sessions/worktrees reduces context bleed and state conflicts."
        },
        {
          "id": "ch3-q19",
          "chapter": "chapter3",
          "chapterNumber": 3,
          "number": 19,
          "stem": "A team wants to collaborate on parallel features without branch conflicts while keeping agent context tightly scoped per feature. What workflow from Chapter 3 is most aligned?",
          "options": {
            "A": "One shared branch with strict prompt conventions, so conflicts are minimized through communication discipline.",
            "B": "Frequent rebasing in a single branch strategy, letting synchronization absorb concurrent edit divergence.",
            "C": "Separate git worktrees per feature with separate agent sessions, isolating both code state and context.",
            "D": "One worktree with multiple terminals, relying on local commit hygiene to avoid cross-task contamination."
          },
          "correctAnswer": "C",
          "rationale": "Worktrees provide practical parallel isolation for both git state and agent context."
        },
        {
          "id": "ch3-q20",
          "chapter": "chapter3",
          "chapterNumber": 3,
          "number": 20,
          "stem": "A distributed team wants to monitor long-running agent workflows from mobile and reconnect later without losing session continuity. Which chapter capability addresses this need most directly?",
          "options": {
            "A": "Hook-based snapshot capture, allowing execution state to be reconstructed from event logs after disconnection.",
            "B": "Remote-control patterns with persistent terminal sessions, enabling reconnectable oversight across devices.",
            "C": "Skill checkpoint metadata, so unfinished procedures can be resumed from last completed instruction blocks.",
            "D": "MCP output caching, where tool-response history restores conversational and command context transparently."
          },
          "correctAnswer": "B",
          "rationale": "Remote-control patterns are designed for persistent, resumable session operation."
        },
        {
          "id": "ch3-q21",
          "chapter": "chapter3",
          "chapterNumber": 3,
          "number": 21,
          "stem": "A team insists all tasks should be done in Claude Code because “same model equals same productivity everywhere.” They later find non-technical users slower for document-centric tasks. What was overlooked?",
          "options": {
            "A": "Lower-complexity document tasks often expose training gaps first, so measured slowdown is usually onboarding-related.",
            "B": "Interface fit and workflow ergonomics matter; model capability parity does not erase surface-level productivity differences.",
            "C": "Model outputs converge across interfaces only after settings harmonization, so workflow mismatches reflect config drift.",
            "D": "Terminal environments remain optimal with sufficient practice, so early productivity gaps are temporary adaptation effects."
          },
          "correctAnswer": "B",
          "rationale": "Chapter 3 provides a code-vs-cowork decision framework based on task and user context."
        },
        {
          "id": "ch3-q22",
          "chapter": "chapter3",
          "chapterNumber": 3,
          "number": 22,
          "stem": "A founder says proprietary platform lock-in is unavoidable, so investing in portable skills and standards is wasted effort. Which response best reflects the cross-vendor section?",
          "options": {
            "A": "Portability should focus on tools only, because instruction and skill assets rarely transfer across agent runtimes.",
            "B": "Full portability is unrealistic, but standards still reduce migration friction and preserve strategic flexibility.",
            "C": "Lock-in matters less now, since frontier-model parity has minimized practical differences between vendor ecosystems.",
            "D": "Cross-vendor portability is mostly theoretical unless organizations maintain self-hosted orchestration infrastructure."
          },
          "correctAnswer": "B",
          "rationale": "The chapter emphasizes portability through standards and reusable patterns."
        },
        {
          "id": "ch3-q23",
          "chapter": "chapter3",
          "chapterNumber": 3,
          "number": 23,
          "stem": "A team overuses one mega-skill containing dozens of unrelated procedures. Activation becomes noisy and output quality drops in narrowly scoped tasks. Which refinement is most appropriate?",
          "options": {
            "A": "Split into focused skills with specific descriptions, improving relevance and reducing accidental trigger overlap.",
            "B": "Keep one consolidated skill and tune examples, so broad capability remains while trigger precision improves gradually.",
            "C": "Disable auto-activation globally, since broad procedural bundles inherently conflict with selective task routing.",
            "D": "Move general procedures into CLAUDE.md, reserving skills only for deterministic command-sequence operations."
          },
          "correctAnswer": "A",
          "rationale": "Focused, well-scoped skills trigger more accurately and preserve output relevance."
        },
        {
          "id": "ch3-q24",
          "chapter": "chapter3",
          "chapterNumber": 3,
          "number": 24,
          "stem": "A project manager asks why hook-based checks are preferred over reminder text for mandatory policy enforcement. Which explanation is strongest?",
          "options": {
            "A": "Hooks expose stronger audit metadata, whereas reminders are optimized for conversational guidance rather than control.",
            "B": "Hooks reduce token overhead, making policy enforcement cheaper while preserving equivalent compliance reliability.",
            "C": "Reminder prompts improve awareness, but hooks enforce controls at execution time regardless model interpretation.",
            "D": "Reminder text is non-binding by design, while hooks are evaluated under deterministic system-level constraints."
          },
          "correctAnswer": "C",
          "rationale": "Hooks enforce policy at runtime events; reminders depend on model/user compliance."
        },
        {
          "id": "ch3-q25",
          "chapter": "chapter3",
          "chapterNumber": 3,
          "number": 25,
          "stem": "A team integrates multiple MCP servers but observes bloated context from loading extensive schemas each session. They ask whether converting repetitive workflows into local skills can help. Which answer is most aligned?",
          "options": {
            "A": "Not significantly, because schema overhead remains dominated by MCP definitions even when skills are present.",
            "B": "Only partially, because token savings appear mainly when all tools are manually invoked in fixed sequence.",
            "C": "Yes, because local workflow compilation can reduce repeated schema loading and large tool-response dependence.",
            "D": "Usually no, since MCP optimization should focus on payload truncation rather than workflow representation changes."
          },
          "correctAnswer": "C",
          "rationale": "Chapter content discusses compiling repetitive workflows to reduce token-heavy tool interactions."
        },
        {
          "id": "ch3-q26",
          "chapter": "chapter3",
          "chapterNumber": 3,
          "number": 26,
          "stem": "A team cannot decide where to place universal team conventions versus tool-specific guidance. Their current files mix everything, causing confusion during migration. Which split best matches chapter recommendations?",
          "options": {
            "A": "Place universal guidance in skill metadata, and keep tool specifics in MCP prompt templates for interoperability.",
            "B": "Place universal guidance in plugin manifests, and define tool specifics through runtime resource annotations.",
            "C": "Place universal guidance in CLAUDE.md, and map migration differences through shell aliases across environments.",
            "D": "Place universal guidance in AGENTS.md, and keep tool-specific operational details in per-tool context files."
          },
          "correctAnswer": "D",
          "rationale": "The chapter distinguishes cross-vendor instruction standards from vendor-specific context files."
        },
        {
          "id": "ch3-q27",
          "chapter": "chapter3",
          "chapterNumber": 3,
          "number": 27,
          "stem": "An organization adopts agent teams for parallel problem-solving but gets inconsistent results because each session starts with different assumptions. They ask for a shared baseline. What is the most direct fix?",
          "options": {
            "A": "Use one master conversation and branch subtasks from it, so all sessions inherit one canonical context lineage.",
            "B": "Normalize sampling settings across all sessions, reducing behavioral divergence from model-level generation variance.",
            "C": "Restrict each agent to one directory subtree, minimizing interpretation differences caused by repository-wide visibility.",
            "D": "Maintain shared project context artifacts loaded consistently across sessions to align assumptions and conventions."
          },
          "correctAnswer": "D",
          "rationale": "Consistent shared context artifacts (e.g., project instruction files) align multi-agent behavior."
        },
        {
          "id": "ch3-q28",
          "chapter": "chapter3",
          "chapterNumber": 3,
          "number": 28,
          "stem": "A user expects installing plugins/connectors to instantly solve workflow quality issues without process redesign, context hygiene, or validation practices. Results remain erratic. Which diagnosis is most accurate?",
          "options": {
            "A": "Runtime quality remains almost entirely model-driven, so extension layers have marginal practical influence on outcomes.",
            "B": "Extensions increase capability surface, but quality still depends on structured workflow design and disciplined execution.",
            "C": "Connectors should replace custom skill logic first, because quality issues mainly come from procedural redundancy.",
            "D": "Plugin ecosystems are inherently unstable, so consistent outcomes require minimizing external extensibility dependencies."
          },
          "correctAnswer": "B",
          "rationale": "Tools expand reach, but outcomes still depend on process, context engineering, and validation."
        },
        {
          "id": "ch3-q29",
          "chapter": "chapter3",
          "chapterNumber": 3,
          "number": 29,
          "stem": "A team wants fast migration between coding-agent vendors and asks what is least likely to transfer cleanly. They already use standards for instructions and tools. Which category usually needs the most adaptation?",
          "options": {
            "A": "Core workflow principles, because reasoning differences usually require redesign of planning and validation practices.",
            "B": "Skill trigger descriptions, because activation logic generally requires vendor-specific metadata model translations.",
            "C": "Directory paths and local configuration conventions, even when conceptual patterns transfer with minimal change.",
            "D": "MCP integration semantics, because standards-compliant servers still vary significantly by client runtime behavior."
          },
          "correctAnswer": "C",
          "rationale": "Concepts often transfer; practical adaptation is typically in file paths and local conventions."
        },
        {
          "id": "ch3-q30",
          "chapter": "chapter3",
          "chapterNumber": 3,
          "number": 30,
          "stem": "A company mandates one AI interface for every role to reduce training overhead, ignoring task-specific fit across engineering and operations teams. Which primary weakness mirrors chapter strategy guidance?",
          "options": {
            "A": "Training efficiencies usually dominate, so role-specific specialization provides limited measurable operational upside.",
            "B": "Unified interfaces simplify governance, but can suppress role-specific productivity gains from complementary tool strengths.",
            "C": "Single-tool policies reduce standards adoption, creating technical debt through incompatible multi-agent integration paths.",
            "D": "Interface consolidation improves consistency but weakens deterministic reproducibility across compliance-sensitive workflows."
          },
          "correctAnswer": "B",
          "rationale": "Chapter 3 highlights that different interfaces/tools excel at different task classes and user contexts."
        }
      ]
    }
  ]
};

if (typeof window !== 'undefined') {
  window.EXAM_DATA = EXAM_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = EXAM_DATA;
}
