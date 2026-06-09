# APEX_IR.CHANGE_REPORT_OWNER Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/CHANGE_REPORT_OWNER-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_IR](../APEX_IR.md)

## Purpose

This procedure changes the owner of a saved interactive report using a report ID. This procedure cannot change the owner of default interactive reports.

## When To Use

Use this page when code needs the `APEX_IR.CHANGE_REPORT_OWNER` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_IR.CHANGE_REPORT_OWNER (
    p_report_id    IN NUMBER,
    p_old_owner    IN VARCHAR2,
    p_new_owner    IN VARCHAR2 )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_report_id` | The saved report ID within the current application page. |
| `p_old_owner` | The previous owner name to change from (case sensitive). The owner needs to a valid login user accessing the report. |
| `p_new_owner` | The new owner name to change to (case sensitive). The owner must be a valid login user accessing the report. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

```sql
begin
    apex_ir.CHANGE_REPORT_OWNER(
        p_report_id => 1,
        p_old_owner => 'EXAMPLE',
        p_new_owner => 'EXAMPLE'
    );
end;
/
```

## More Complex Example

```sql
begin
    -- Assuming this runs inside an APEX page process with the right workspace/app context.
    apex_ir.CHANGE_REPORT_OWNER(
            p_report_id => 1,
            p_old_owner => 'EXAMPLE',
            p_new_owner => 'EXAMPLE'
        );
end;
/
```

