# APEX_APP_OBJECT_DEPENDENCY

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APP_OBJECT_DEPENDENCY.html)

Status: curated first-pass reference.

## Purpose

`APEX_APP_OBJECT_DEPENDENCY` scans an APEX application and builds the object dependency report used to understand which database objects an app page or application references. It is useful before deployments, refactors, privilege reviews, and schema cleanup.

## When To Use

Use this package when you need to refresh dependency metadata for an application or page from PL/SQL. Prefer it over hand-searching exported app SQL when you want the same dependency view APEX exposes internally.

Do not use it as a runtime authorization check. It is an analysis/metadata tool and can be expensive on large applications.

## API Surface

| Member | Use |
| --- | --- |
| `SCAN` | Generate dependency report data for an application or one page. |
| `CLEAR_CACHE` | Remove cached dependency report data for an application. |
| Constants | Select scan behavior: all sources, dependency-only, identifier-level, or errors-only. |

## Scan Options

`SCAN` accepts `p_options`, defaulting to `c_option_all`.

| Option | Meaning |
| --- | --- |
| `c_option_all` | Scan all available dependency sources. |
| `c_option_dependencies` | Use top-level dependencies from database dependency metadata. |
| `c_option_identifiers` | Use PL/Scope identifier detail when available for deeper object/member/column dependency detection. |
| `c_option_errors` | Skip dependency scans and report compilation errors only. |

## Simple Example

Refresh all dependency data for the current application:

```sql
begin
    apex_app_object_dependency.scan(
        p_application_id => :APP_ID);
end;
/
```

## Page-Scoped Example

Assuming page `10` is being reviewed after a refactor:

```sql
begin
    apex_app_object_dependency.clear_cache(
        p_application_id => :APP_ID);

    apex_app_object_dependency.scan(
        p_application_id => :APP_ID,
        p_page_id        => 10,
        p_options        => apex_app_object_dependency.c_option_identifiers);
end;
/
```

## Notes

- Run scans from a trusted admin/deployment context, not from ordinary user interactions.
- Identifier-level scans are most useful when database code is compiled with PL/Scope identifiers enabled.
- Clear the cache before rescanning if stale report data could mislead a deployment decision.

## Related APIs

- [APEX_EXPORT](APEX_EXPORT.md) for export-time inspection and CI artifacts.
- [APEX_APPLICATION_INSTALL](APEX_APPLICATION_INSTALL.md) for deployment installs.
- [APEX_INSTANCE_ADMIN](APEX_INSTANCE_ADMIN.md) for workspace/application administration.

<!-- BEGIN GENERATED MEMBER LINKS -->

## Local Member Detail Pages

Generated navigation for LLM retrieval. Use the local detail page first, then follow the Oracle source link when exact wording or edge-case behavior must be verified.

| Member | Kind | Local detail | Source |
| --- | --- | --- | --- |
| Constants | constants | [local](APEX_APP_OBJECT_DEPENDENCY/Constants.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APP_OBJECT_DEPENDENCY.Constants.html) |
| CLEAR_CACHE Procedure | procedure | [local](APEX_APP_OBJECT_DEPENDENCY/CLEAR_CACHE_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APP_OBJECT_DEPENDENCY.CLEAR_CACHE-Procedure.html) |
| SCAN Procedure | procedure | [local](APEX_APP_OBJECT_DEPENDENCY/SCAN_Procedure.md) | [Oracle](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_APP_OBJECT_DEPENDENCY.SCAN-Procedure.html) |

<!-- END GENERATED MEMBER LINKS -->
