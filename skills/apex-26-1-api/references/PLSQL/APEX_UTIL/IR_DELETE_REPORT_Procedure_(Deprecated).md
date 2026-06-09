# APEX_UTIL.IR_DELETE_REPORT Procedure (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IR_DELETE_REPORT-Procedure-DEPRECATED.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_UTIL.IR_DELETE_REPORT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
APEX_UTIL.IR_DELETE_REPORT (
    p_report_id     IN NUMBER );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_report_id` | Report ID to delete within the current Oracle APEX application. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.IR_DELETE_REPORT(
        p_report_id => 1
    );
end;
/
```

