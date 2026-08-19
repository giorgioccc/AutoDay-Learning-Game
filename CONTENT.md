# Writing challenges

The whole product is the writing. Vague challenges make a worthless site.
Read `src/content/challenges/monday-filter.ts` before writing anything — it is
the benchmark, and everything else should match it.

## The rule that governs everything

AutoDay never hands over a finished solution. The deepest layer of help is an
architectural approach and a list of pitfalls. There is no copy-paste answer
and no full code, anywhere, ever. The user builds the thing themselves.

Every field you write has to respect that. If a sentence would let someone ship
without thinking, it is wrong.

## Scenario

Two to four sentences. A **named person**, a **specific task**, a **concrete
volume and rhythm**.

- Failure: "Sort emails with AI."
- Failure: "Automate customer feedback analysis."
- Right: "Every Monday the team lead pastes a wall of thirty-odd project
  updates into the channel. Marta reads all of them to find the two or three
  that touch her work, and by Wednesday she has forgotten one anyway."

If you cannot picture the person's screen, the scenario is not specific enough.
The volume matters because it is usually what makes the problem a problem.

## Constraints

Two to four bullets that create **genuine design tension**. Good sources of
tension:

- cost, or a budget that scales badly with volume
- latency, especially interactive versus batch
- privacy, or a boundary data must not cross
- the case where the correct answer is "nothing"
- inputs that are messy, inconsistent, or arrive in an unpredictable format
- somebody downstream who has to trust the output, and what it costs when they
  cannot

Test: **if a constraint could be dropped without changing how you would build
the thing, it is filler.** Delete it.

## Nudge

One conceptual push, and only one. It reframes the problem without answering
it. It must not name the pattern, a library, or an architecture.

The register to match:

> Relevance is not a property of the text. It only exists relative to something
> the model does not have yet — so what do you have to give it?

That tells you where to look and refuses to tell you what to build.

## Approach

Shape, not implementation. Three to six steps. **No code and no library names.**

Say which AI capability fits and why — a single structured-output call, tool
calling, an agent loop, retrieval — what the inputs and outputs are, and where
the real design decisions and failure modes live.

Deciding to store a person profile as durable configuration is shape. Naming a
vector database is implementation. Keep to the first kind.

## Pitfalls

Two to four things that genuinely bite people building **this specific**
automation. The ones that actually recur:

- the model inventing an answer rather than returning empty
- no evaluation set, so no way to tell whether a prompt change improved
  anything
- silent failures on edge cases, with nothing to signal it happened
- cost scaling with input size or volume
- a confident wrong answer that is indistinguishable from a right one

Test: **if a pitfall could be pasted onto any other challenge in the library,
it is too vague to keep.**

## Starter prompt

A kickoff for Claude Code that sets up the problem and the first move, then
stops. It sits behind an unchecked box, so it exists for someone who wants to
start building — not for someone who wants the answer.

It must **not** contain the architecture from the approach section. Good
starter prompts end by asking the user a question, which keeps the thinking
with them.

## Italian

Both languages, every field. The risk is Italian that reads like a translation.

- Write it as if for an Italian workplace, not converted sentence by sentence
  from the English.
- Keep technical vocabulary in English where that is how people actually speak:
  *prompt, tool calling, structured output, agent, embedding, batch, flag*.
- Do not calque English syntax. Recast the sentence instead.
- Keep the same person's name across both versions, and choose names that sit
  naturally in both.
- `constraints`, `approach.steps` and `pitfalls` are arrays of `{ en, it }`
  pairs, so the bullet **count must match** across the two languages. If an
  Italian bullet wants to split, restructure both sides.

## Metadata

- `mode` — `quick` is roughly 30 minutes, one model call or a small loop.
  `deep` is half a day or more: state, tool use, failure handling, evaluation.
  Mode is a property of the challenge, not a depth setting on one challenge.
- `level` — `beginner`, `intermediate`, `advanced`.
- `category` — one of the six in `src/content/types.ts`.
- `estimatedMinutes` — a real number, used by the Phase 3 timer presets.

## Non-negotiable across the library

**No two challenges may share the same premise wearing different clothes.**
Three challenges that each summarise a different document type are one
challenge, not three. If you produce near-duplicates, replace them rather than
reword them.

## Current library

50 challenges. Totals: **30 quick / 20 deep**; **18 beginner / 20 intermediate /
12 advanced**. Every category has at least one beginner challenge and exactly
two advanced ones.

| category | count | quick | deep |
| --- | --- | --- | --- |
| work-admin | 9 | 5 | 4 |
| data-research | 9 | 5 | 4 |
| marketing-content | 8 | 6 | 2 |
| software-dev | 8 | 4 | 4 |
| communication | 8 | 5 | 3 |
| personal | 8 | 5 | 3 |

### AI pattern coverage

The pattern is the **primary** thing a challenge teaches. Most challenges touch
several; each is listed once, under the one it exists for.

| | pattern | n | challenges |
| --- | --- | --- | --- |
| P1 | Single structured-output call | 4 | `monday-filter`, `exec-rollup`, `ad-copy-variants`, `meeting-followups` |
| P2 | Classification / routing with an explicit "cannot decide" | 2 | `inbox-routing`, `escalation-router` |
| P3 | Deterministic layer first, model only on the residue | 7 | `board-deck-numbers`, `price-watch`, `regulatory-diff`, `csv-cleaning`, `release-notes`, `migration-risk`, `subscription-audit` |
| P4 | Judge / flag against a rubric | 2 | `brand-voice-judge`, `tone-check` |
| P5 | Extraction into a typed schema with provenance | 6 | `renewal-watch`, `testimonial-mining`, `pdf-table-extract`, `crm-writeback`, `recipes-to-list`, `medical-timeline` |
| P6 | Agent loop with tools | 3 | `rota-swap-agent`, `lit-review-agent`, `trip-planner` |
| P7 | Retrieval grounded in a maintained corpus | 3 | `expense-policy-check`, `support-reply-draft`, `language-drills` |
| P8 | Blocking, then pairwise adjudication of identity | 2 | `crm-dedupe`, `error-grouping` |
| P9 | Eval-set design and the human-agreement ceiling | 2 | `handbook-answers`, `complaint-quality` |
| P10 | Two passes: derive an artefact, freeze it, then apply it | 2 | `survey-freetext`, `docs-drift` |
| P11 | Chained calls carrying a verbatim artefact between them | 2 | `podcast-repurpose`, `seo-brief-builder` |
| P12 | Autonomy banded by confidence or exposure | 5 | `approval-gate`, `campaign-localisation`, `flake-backlog`, `pr-first-pass`, `multilingual-replies` |
| P13 | Absence as a first-class output | 4 | `metric-commentary`, `repro-from-bug`, `commit-message`, `school-emails` |
| P14 | Image or audio input paired with an authoritative record | 4 | `product-photo-alt`, `voicemail-to-task`, `receipt-shoebox`, `listing-writer` |
| P15 | Selection against an absolute bar, not a ranking | 2 | `newsletter-curation`, `paper-triage` |

### Failure-theme coverage

| | theme | n |
| --- | --- | --- |
| Fa | Invents an answer rather than returning empty | 10 |
| Fb | No eval set, so no way to tell whether anything improved | 4 |
| Fc | Cost or latency scales badly with volume | 4 |
| Fd | The human stops checking | 8 |
| Fe | Nuance destroyed, sources flattened | 7 |
| Ff | A scheduled job drifts or goes stale | 4 |
| Fg | Silent failure on messy input | 6 |
| Fh | A confident wrong answer, trusted downstream | 7 |

### The 50

| id | mode | category | level | min |
| --- | --- | --- | --- | --- |
| `monday-filter` | quick | work-admin | beginner | 30 |
| `inbox-routing` | quick | work-admin | beginner | 30 |
| `expense-policy-check` | quick | work-admin | intermediate | 40 |
| `renewal-watch` | quick | work-admin | intermediate | 35 |
| `exec-rollup` | quick | work-admin | beginner | 35 |
| `approval-gate` | deep | work-admin | advanced | 300 |
| `rota-swap-agent` | deep | work-admin | advanced | 300 |
| `board-deck-numbers` | deep | work-admin | intermediate | 240 |
| `handbook-answers` | deep | work-admin | intermediate | 200 |
| `podcast-repurpose` | quick | marketing-content | beginner | 35 |
| `ad-copy-variants` | quick | marketing-content | beginner | 30 |
| `brand-voice-judge` | deep | marketing-content | advanced | 240 |
| `seo-brief-builder` | quick | marketing-content | intermediate | 45 |
| `testimonial-mining` | quick | marketing-content | intermediate | 45 |
| `newsletter-curation` | quick | marketing-content | beginner | 40 |
| `campaign-localisation` | deep | marketing-content | advanced | 300 |
| `product-photo-alt` | quick | marketing-content | beginner | 35 |
| `price-watch` | deep | data-research | advanced | 360 |
| `survey-freetext` | quick | data-research | beginner | 40 |
| `pdf-table-extract` | quick | data-research | intermediate | 45 |
| `paper-triage` | quick | data-research | beginner | 30 |
| `crm-dedupe` | deep | data-research | intermediate | 240 |
| `lit-review-agent` | deep | data-research | advanced | 360 |
| `regulatory-diff` | deep | data-research | intermediate | 240 |
| `metric-commentary` | quick | data-research | beginner | 40 |
| `csv-cleaning` | quick | data-research | beginner | 45 |
| `release-notes` | quick | software-dev | intermediate | 45 |
| `flake-backlog` | deep | software-dev | advanced | 300 |
| `pr-first-pass` | deep | software-dev | intermediate | 240 |
| `error-grouping` | quick | software-dev | intermediate | 45 |
| `repro-from-bug` | quick | software-dev | beginner | 40 |
| `docs-drift` | deep | software-dev | intermediate | 240 |
| `commit-message` | quick | software-dev | beginner | 25 |
| `migration-risk` | deep | software-dev | advanced | 300 |
| `meeting-followups` | quick | communication | intermediate | 40 |
| `support-reply-draft` | deep | communication | intermediate | 240 |
| `tone-check` | quick | communication | beginner | 25 |
| `voicemail-to-task` | quick | communication | beginner | 30 |
| `escalation-router` | quick | communication | intermediate | 40 |
| `crm-writeback` | quick | communication | intermediate | 45 |
| `complaint-quality` | deep | communication | advanced | 300 |
| `multilingual-replies` | deep | communication | advanced | 240 |
| `receipt-shoebox` | deep | personal | intermediate | 240 |
| `recipes-to-list` | quick | personal | beginner | 25 |
| `school-emails` | quick | personal | beginner | 30 |
| `medical-timeline` | deep | personal | advanced | 300 |
| `trip-planner` | deep | personal | advanced | 360 |
| `subscription-audit` | quick | personal | intermediate | 45 |
| `language-drills` | quick | personal | beginner | 30 |
| `listing-writer` | quick | personal | intermediate | 40 |

### The three weakest, and why

Replace these before writing anything new.

1. **`ad-copy-variants`** — the least design tension in the library. "Name the
   axes of variation" is closer to a prompting tip than an architectural
   decision, and nothing in the challenge forces a hard trade-off. The
   character-limit constraint is the only one doing real work.
2. **`exec-rollup`** — the least differentiated of the three "summarise for a
   reader" challenges (`board-deck-numbers` and `metric-commentary` are the
   others). Its premise survives the duplicate test, but its architecture — one
   call over six updates — is the thinnest of the three, and the bad-news
   compression rule is the only thing carrying it.
3. **`listing-writer`** — the nudge does less work here than anywhere else,
   because the lesson (a photo cannot answer half the fields; price is a market
   lookup) is close to visible in the constraints already. Sound, but it hands
   over more than it should.

### Adjacent pairs worth watching

Not duplicates, but the closest the library comes. Anything new in these areas
has to clear a higher bar.

- `crm-dedupe` / `error-grouping` — both collapse many records into one
  identity. Separated by reversible merges versus identity that survives a
  redeploy.
- `board-deck-numbers` / `exec-rollup` / `metric-commentary` — all produce prose
  for an executive. Separated by input type (figures, prose updates, a metric
  stream) and by which layer stays deterministic.
- `newsletter-curation` / `paper-triage` — both reduce many items to a few.
  Separated by an absolute bar versus the recall/precision asymmetry.
- `brand-voice-judge` / `complaint-quality` — both score against a rubric.
  Separated by judging copy versus judging people's work.
- `handbook-answers` / `expense-policy-check` — both answer from a policy
  corpus. Separated by corpus audit and staleness versus verdict shape and
  quotable clauses.
