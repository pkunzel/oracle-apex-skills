# APEX_UTIL.CUSTOM_CALENDAR Procedure (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CUSTOM_CALENDAR-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_UTIL.CUSTOM_CALENDAR` procedure. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
APEX_UTIL.CUSTOM_CALENDAR(
    p_date_type_field IN VARCHAR2 );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_date_type_field` | Identifies the item name used to define the type of calendar to be displayed. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Legacy only. Prefer native Calendar regions for new applications.

```sql
begin
    apex_util.custom_calendar(
        p_date_type_field => 'P10_EVENT_DATE');
end;
/
```

