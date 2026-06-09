# APEX_EXEC.PURGE_JSON_SOURCE_CACHE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_EXEC.PURGE_JSON_SOURCE_CACHE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_EXEC](../APEX_EXEC.md)

## Purpose

Purges the local cache for a Duality View of JSON sources based on REST-enabled SQL. The Duality View or JSON source must exist in the current application and must be identified by its static ID. If caching is disabled or no cache entries exist, nothing happens.

## When To Use

Use this page when code needs the `APEX_EXEC.PURGE_JSON_SOURCE_CACHE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_EXEC.PURGE_JSON_SOURCE_CACHE (
    p_static_id            IN VARCHAR2,
    p_current_session_only IN BOOLEAN DEFAULT FALSE );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_static_id` | Static ID of the JSON or Duality View source. |
| `p_current_session_only` | Default FALSE . Specify TRUE to only purge entries that were saved for the current session. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_exec.PURGE_JSON_SOURCE_CACHE(
        p_static_id => 'EXAMPLE_STATIC_ID',
        p_current_session_only => true
    );
end;
/
```

