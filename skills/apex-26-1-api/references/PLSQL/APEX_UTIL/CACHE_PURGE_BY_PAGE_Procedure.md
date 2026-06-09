# APEX_UTIL.CACHE_PURGE_BY_PAGE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CACHE_PURGE_BY_PAGE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure purges the cache for a given application and page. If the page itself is not cached but contains one or more cached regions, then the cache for these is also purged.

## When To Use

Use this page when code needs the `APEX_UTIL.CACHE_PURGE_BY_PAGE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.CACHE_PURGE_BY_PAGE (
    p_application  IN NUMBER,
    p_page         IN NUMBER,
    p_user_name    IN VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application` | The identification number (ID) of the application. |
| `p_page` | The page number (ID). |
| `p_user_name` | The user associated with cached pages and regions. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.CACHE_PURGE_BY_PAGE(
        p_application => 1,
        p_page => 1,
        p_user_name => 'USER'
    );
end;
/
```

