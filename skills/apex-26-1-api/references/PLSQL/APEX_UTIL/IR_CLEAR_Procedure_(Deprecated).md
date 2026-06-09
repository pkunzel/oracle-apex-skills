# APEX_UTIL.IR_CLEAR Procedure (Deprecated)

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/IR_CLEAR-Procedure-DEPRECATED.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

Note:

## When To Use

Use this page when code needs the `APEX_UTIL.IR_CLEAR` procedure. Confirm security, workspace, and session requirements for your calling context.

## Deprecation

This member is marked deprecated in the APEX 26.1 documentation. Prefer the documented replacement when available.

## Signature

```sql
APEX_UTIL.IR_CLEAR (
    p_page_id       IN NUMBER,
    p_report_alias  IN VARCHAR2 DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_page_id` | Page of the current Oracle APEX application that contains an interactive report. |
| `p_report_alias` | Identifies the saved report alias within the current application page. To clear a Primary report, set p_report_alias to PRIMARY or leave as NULL. To clear a saved report, p_report_alias must be the name of the saved report. For example, to clear report 1234 , set p_report_alias to 1234 . |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_util.IR_CLEAR(
        p_page_id => 1,
        p_report_alias => 'EXAMPLE'
    );
end;
/
```

