---
name: apex-26-1-api
description: Use when writing, reviewing, debugging, or explaining Oracle APEX 26.1 PL/SQL API package calls, JavaScript apex namespace APIs, client/server Ajax patterns, page item and region code, APEX plug-in client/server code, or mixed PL/SQL and JavaScript behavior in Oracle APEX applications.
metadata:
  short-description: Oracle APEX 26.1 PL/SQL and JavaScript APIs
---

# APEX 26.1 API

Use this skill for Oracle APEX 26.1 API work involving PL/SQL packages, JavaScript APIs, or mixed client/server page behavior.

## Retrieval Workflow

1. Identify whether the task is PL/SQL, JavaScript, or mixed APEX page behavior.
2. Open `references/LLM_SKILL_INDEX.md` first for routing.
3. Open the focused package or module guide next, such as `references/PLSQL/APEX_JSON.md` or `references/JavaScript/apex.server.md`.
4. Open generated PL/SQL member detail pages only when exact signatures, parameters, return behavior, or edge cases matter.
5. Prefer local reference pages first, then follow Oracle source links when exact behavior must be verified.

## Answering Guidance

- State assumptions for application ID, page ID, region Static ID, item names, table structure, credentials, REST sources, and session context.
- For PL/SQL examples, use code that can run in an APEX session unless the user asks for install-time or workspace administration code.
- For JavaScript examples, assume the code runs on an APEX page where the `apex` namespace is available.
- For Ajax examples, pair `apex.server` with appropriate PL/SQL response generation such as `APEX_JSON`.
- For production-sensitive code, include validation, authorization, escaping, cleanup, and session-state notes where relevant.
- Keep examples concise and adapt them to the user's existing naming conventions when visible.

## High-Value Routes

- Ajax: `references/JavaScript/apex.server.md`, `references/PLSQL/APEX_JSON.md`, `references/PLSQL/APEX_APPLICATION.md`
- Page items: `references/JavaScript/apex.item.md`, `references/JavaScript/item.md`, `references/PLSQL/APEX_SESSION_STATE.md`
- Regions: `references/JavaScript/apex.region.md`, `references/JavaScript/region.md`, `references/PLSQL/APEX_REGION.md`
- Interactive Grid: `references/JavaScript/interactiveGrid.md`, `references/JavaScript/interactiveGridView.md`, `references/JavaScript/apex.model.md`, `references/PLSQL/APEX_IG.md`
- Plug-ins: `references/PLSQL/APEX_PLUGIN.md`, `references/PLSQL/APEX_PLUGIN_UTIL.md`, `references/JavaScript/apex.server.md`, `references/JavaScript/apex.item.md`, `references/JavaScript/apex.region.md`
- Safe output: `references/PLSQL/APEX_ESCAPE.md`, `references/PLSQL/APEX_JAVASCRIPT.md`, `references/PLSQL/APEX_CSS.md`, `references/JavaScript/htmlBuilder.md`
