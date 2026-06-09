# APEX 26.1 Reference

Local, skill-oriented reference for Oracle APEX 26.1 APIs.

This reference is generated and curated from official Oracle documentation, then shaped for LLM skills and GPT creation. It favors predictable Markdown structure, source links, concise guidance, and short examples over long copied documentation.

## Source Documentation

- PL/SQL API Reference: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/toc.htm
- JavaScript API Reference: https://docs.oracle.com/en/database/oracle/apex/26.1/aexjs/index.html

## Structure

- [PLSQL](PLSQL/INDEX.md): 62 package chapters and 1252 indexed package members.
- [JavaScript](JavaScript/INDEX.md): 46 indexed namespaces, interfaces, widgets, and global APIs.
- [_meta](./_meta): generated manifests and coverage.
- [_tools](./_tools): generator scripts for refreshing indexes.

## Skill/GPT Usage

Use this folder as retrieval material. Prefer the focused package/module pages first, then follow source links when exact behavior must be verified against Oracle docs.

Every mature page should follow this shape:

- Purpose
- When to use
- Signatures or API surface
- Parameters/options
- Return behavior
- Important notes
- Simple example
- More complex example
- Related APIs

## Copyright Note

This project is not a mirror of Oracle documentation. Keep generated content concise and original, include source links, and avoid copying long Oracle examples or prose into local pages.
