# APEX_EXEC.PURGE_WEB_SOURCE_CACHE Procedure (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.PURGE_WEB_SOURCE_CACHE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_EXEC.PURGE_WEB_SOURCE_CACHE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
APEX_EXEC.PURGE_WEB_SOURCE_CACHE (
    p_module_static_id     IN VARCHAR2,
    p_current_session_only IN BOOLEAN DEFAULT FALSE )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_module_static_id` | Static ID of the web source module to invoke. |
| `p_current_session_only` | Specify TRUE to only purge entries that were saved for the current session. Default FALSE . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_exec.PURGE_WEB_SOURCE_CACHE(
        p_module_static_id => 'EXAMPLE_STATIC_ID',
        p_current_session_only => true
    );
end;
/
```

