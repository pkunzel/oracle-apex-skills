# APEX_UTIL.DELETE_FEEDBACK Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UTIL.DELETE_FEEDBACK-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure deletes feedback with the specified ID.

## When To Use

Use this page when code needs the `APEX_UTIL.DELETE_FEEDBACK` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.DELETE_FEEDBACK (
    p_feedback_id      IN NUMBER )
```

## Parameters

| Parameter | Description |
| --- | --- |
| `p_feedback_id` | The ID of the feedback. |

## Returns

This is a procedure and does not return a value.

## Important Notes

- Most APEX APIs assume the correct APEX workspace, application, and session context.
- Validate user-controlled values before passing them into administrative, security, SQL, or web-service APIs.
- Use the source link for exact behavior, defaults, and version-specific caveats.

## Simple Example

Delete a feedback record after an administrator confirms it is obsolete.

```sql
begin
    apex_util.delete_feedback(
        p_feedback_id => :P50_FEEDBACK_ID);
end;
/
```

