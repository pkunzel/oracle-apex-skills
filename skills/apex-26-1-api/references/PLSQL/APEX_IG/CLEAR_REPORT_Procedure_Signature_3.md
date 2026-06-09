# APEX_IG.CLEAR_REPORT Procedure Signature 3

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_IG-CLEAR_REPORT-Procedure-Signature-3.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IG](../APEX_IG.md)

## Purpose

This procedure clears filter report settings to the developer defined default settings using the report static ID.

## When To Use

Use this page when code needs the `APEX_IG.CLEAR_REPORT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_IG.CLEAR_REPORT (
    p_page_id            IN   NUMBER,
    p_region_static_id   IN   VARCHAR2,
    p_report_static_id   IN   VARCHAR2     DEFAULT NULL );
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_page_id` | The page of the current Oracle APEX application that contains the interactive grid. |
| `p_region_static_id` | The interactive grid region static ID. |
| `p_report_static_id` | The saved report static ID within the current application page. If p_report_static_id is NULL, it clears the last viewed report settings. |

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
        p_region_static_id => 'EXAMPLE_STATIC_ID',
        p_report_static_id => 'EXAMPLE_STATIC_ID'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_ig.CLEAR_REPORT(
            p_page_id => 1,
            p_region_static_id => 'EXAMPLE_STATIC_ID',
            p_report_static_id => 'EXAMPLE_STATIC_ID'
        );
end;
/
```

