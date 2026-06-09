# APEX_IG.CLEAR_REPORT Procedure Signature 2

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG-CLEAR_REPORT-Procedure-Signature-2.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IG](../APEX_IG.md)

## Purpose

This procedure clears filter report settings to the developer defined default settings using the report name.

## When To Use

Use this page when code needs the `APEX_IG.CLEAR_REPORT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_IG.CLEAR_REPORT (
    p_page_id     IN NUMBER,
    p_region_id   IN NUMBER,
    p_report_name IN VARCHAR2 DEFAULT NULL )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_page_id` | Page of the current Oracle APEX application that contains an interactive grid. |
| `p_region_id` | The interactive grid region (ID). |
| `p_report_name` | The saved report name within the current application page. If p_report_name is NULL, it clears the last viewed report settings. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_ig.CLEAR_REPORT(
        p_page_id => 1,
        p_region_id => 1,
        p_report_name => 'EXAMPLE'
    );
end;
/
```

