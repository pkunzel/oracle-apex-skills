# APEX_UTIL.CACHE_PURGE_BY_APPLICATION Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CACHE_PURGE_BY_APPLICATION-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure purges all cached pages and regions for a given application.

## When To Use

Use this page when code needs the `APEX_UTIL.CACHE_PURGE_BY_APPLICATION` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.CACHE_PURGE_BY_APPLICATION (
    p_application  IN NUMBER );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application` | The identification number (ID) of the application. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Purge page and region cache for an application after a data refresh.

```sql
begin
    apex_util.cache_purge_by_application(
        p_application => :APP_ID);
end;
/
```

