# APEX_UTIL.PURGE_REGIONS_BY_NAME Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/PURGE_REGIONS_BY_NAME-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

Deletes all cached values for a region identified by the application ID, page number and region name.

## When To Use

Use this page when code needs the `APEX_UTIL.PURGE_REGIONS_BY_NAME` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.PURGE_REGIONS_BY_NAME (
     p_application IN NUMBER,
     p_page        IN NUMBER,
     p_region_name IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_application` | The identification number (ID) of the application. |
| `p_page` | The number of the page containing the region to be deleted. |
| `p_region_name` | The region name to be deleted. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.PURGE_REGIONS_BY_NAME(
        p_application => 1,
        p_page => 1,
        p_region_name => 'EXAMPLE'
    );
end;
/
```

