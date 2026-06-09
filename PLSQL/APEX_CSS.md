# APEX_CSS

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_CSS.html)

Status: curated first-pass reference.

## Purpose

`APEX_CSS` lets PL/SQL add inline CSS snippets or CSS file links to the rendered APEX page. It is mostly used by plug-ins and server-rendered components that need to include component-specific styles once.

For normal application styling, prefer Theme Roller, application static CSS files, page CSS attributes, and template classes. Use this package when CSS inclusion is driven by PL/SQL render logic.

## When To Use

Use `APEX_CSS` when:

- A plug-in render function must register its stylesheet.
- A component conditionally adds small scoped CSS to the page.
- A reusable server-side component needs duplicate protection with `P_KEY`.
- A CSS file should be linked from `#APP_FILES#`, `#WORKSPACE_FILES#`, or a plug-in file prefix.

Avoid generating CSS from user-controlled values unless the values are strictly allowlisted. Escaping CSS is not enough for arbitrary CSS injection.

## API Surface

| Need | Members |
| --- | --- |
| Inline CSS | `ADD` |
| CSS file link | `ADD_FILE` |
| Legacy third-party library helper | `ADD_3RD_PARTY_LIBRARY_FILE` deprecated |

## Add A CSS File

Assuming application static file `css/task-board.css`:

```sql
begin
    apex_css.add_file(
        p_name      => 'task-board',
        p_directory => '#APP_FILES#css/',
        p_version   => '1.0.0');
end;
/
```

`ADD_FILE` appends `.css` unless `P_SKIP_EXTENSION => TRUE`.

## Add Scoped Inline CSS

Assuming a region with Static ID `task_board`:

```sql
begin
    apex_css.add(
        p_css => '#task_board .task-overdue { color: #b00020; font-weight: 600; }',
        p_key => 'task-board-overdue-style');
end;
/
```

Use `P_KEY` to prevent duplicate inline snippets.

## Conditional Component Style

Assuming a plug-in render function receives `p_region.static_id`:

```sql
begin
    apex_css.add(
        p_css => '#' || apex_escape.css_selector(p_region.static_id) ||
                 ' .my-plugin-empty { min-height: 8rem; }',
        p_key => 'my-plugin-empty-state');
end;
/
```

Use `APEX_ESCAPE.CSS_SELECTOR` for dynamic selector fragments. Still prefer stable developer-defined Static IDs over user-provided values.

## Notes

- `P_ATTRIBUTES` on `ADD_FILE` is caller-escaped. Escape dynamic attribute values before adding them.
- `P_IE_CONDITION` is desupported on `ADD_FILE`; do not build new code around it.
- `ADD_3RD_PARTY_LIBRARY_FILE` is deprecated; prefer `ADD_FILE` with explicit directories.
- Keep inline CSS small and scoped to a component or Static ID.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| ADD Procedure | procedure | [local](APEX_CSS/ADD_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD-Procedure.html) |
| ADD_3RD_PARTY_LIBRARY_FILE Procedure (Deprecated) | procedure | [local](APEX_CSS/ADD_3RD_PARTY_LIBRARY_FILE_Procedure_(Deprecated).md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_3RD_PARTY_LIBRARY_FILE-Procedure.html) |
| ADD_FILE Procedure | procedure | [local](APEX_CSS/ADD_FILE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/ADD_FILE-Procedure.html) |

<!-- END GENERATED MEMBER LINKS -->
