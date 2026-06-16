# APEX_UTIL.PURGE_REGIONS_BY_PAGE Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PURGE_REGIONS_BY_PAGE-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

Deletes all cached regions by application and page.

## When To Use

Use this page when code needs the `APEX_UTIL.PURGE_REGIONS_BY_PAGE` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.PURGE_REGIONS_BY_PAGE (
     p_application IN NUMBER,
     p_page        IN NUMBER );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application` | The identification number (ID) of the application. |
| `p_page` | The identification number of page containing the region. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Purge all cached regions on one page.

```sql
begin
    apex_util.purge_regions_by_page(
        p_application => :APP_ID,
        p_page        => 20);
end;
/
```

