---
name: concise-response
description: 'Compress replies while preserving meaning. Use for concise rewrites, summary edits, and token-saving responses without losing key intent.'
argument-hint: 'Rewrite this text more concisely while keeping the meaning.'
user-invocable: true
disable-model-invocation: false
---

# Concise Response

## When to Use
- Any reply that can be shorter without losing meaning
- Summaries, rewrites, clarifications, and email/chat drafts
- Token-saving edits when brevity matters

## Goal
Keep only the words needed to preserve the original meaning, intent, and required facts.

## Procedure
1. Read the full message and identify the core intent, action, and required facts.
2. Remove filler, repetition, hedging, and low-value padding.
3. Keep the structure clear and grammatical.
4. Prefer shorter, direct wording over longer explanations.
5. Use symbols or compact forms only when they do not change meaning or reduce clarity.
6. Preserve names, numbers, dates, actions, conditions, and any must-keep requirements.
7. Re-read the result and check that the meaning is unchanged.

## Compression Rules
- Cut redundant words: "in order to" -> "to"; "due to the fact that" -> "because"
- Prefer strong verbs and concrete nouns.
- Remove repeated ideas unless they are essential.
- Keep tone appropriate to the audience.
- Keep enough context to avoid ambiguity.

## Symbol Use
Symbols are allowed when they save tokens and remain readable, for example:
- `&` for "and" in short labels
- `->` for flow or sequence
- `vs` for contrast
- `w/` only if widely understood in context

Do not use symbols if they make the message harder to read or change the meaning.

## Quality Check
Before finalizing, confirm all of the following:
- Core meaning is preserved
- No required fact was dropped
- The message is still understandable
- The sentence remains grammatically sound
- The rewrite is shorter than the original without being cryptic

## Example
Original: "I would like to request a slightly shorter version of this message so that we can save tokens while still keeping the meaning and all important details intact."

Compressed: "Please shorten this while keeping the meaning and key details; we need to save tokens."
