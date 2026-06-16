# APEX Skills

Local, skill-oriented reference project for Oracle APEX 26.1 APIs (not APEXlang) 

This repository is organized as a small monorepo for installable Codex skills. The first skill is focused on Oracle APEX 26.1 PL/SQL and JavaScript APIs.

For APEXlang, please check the [APEXlang Official Skills](https://github.com/oracle/skills)

## Source Documentation

- PL/SQL API Reference: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/toc.htm
- JavaScript API Reference: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/index.html

## Structure

- [skills/apex-26-1-api](skills/apex-26-1-api/SKILL.md): installable skill for Oracle APEX 26.1 PL/SQL and JavaScript APIs.
- [PLSQL](skills/apex-26-1-api/references/PLSQL/INDEX.md): 62 package chapters and 1252 indexed package members.
- [JavaScript](skills/apex-26-1-api/references/JavaScript/INDEX.md): 46 indexed namespaces, interfaces, widgets, and global APIs.
- [meta](meta): generated manifests, coverage, and verification reports.
- [tools](tools): generator scripts for refreshing indexes and detail pages.

## Skill/GPT Usage

Install or copy `skills/apex-26-1-api` as the skill. Use its `references/LLM_SKILL_INDEX.md` as the retrieval entrypoint, then open focused package/module pages before member detail pages.

Every mature page should follow this shape:

- Purpose
- When to use
- Signatures or API surface
- Parameters/options
- Return behavior
- Important notes
- Simple example
- More complex example when there is a distinct documented scenario
- Related APIs

## Copyright Note

This project is not a mirror of Oracle documentation. Keep generated content concise and original, include source links, and avoid copying long Oracle examples or prose into local pages.
