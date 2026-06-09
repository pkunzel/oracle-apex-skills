# APEX_UTIL.DELETE_FEEDBACK_ATTACHMENT Procedure

Source: [Oracle APEX 26.1 API Reference](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_UTIL.DELETE_FEEDBACK_ATTACHMENT-Procedure.html)

Status: generated detailed reference. Review edge cases against the source before production use.

Parent package: [APEX_UTIL](../APEX_UTIL.md)

## Purpose

This procedure deletes the attachment of a feedback with the specified ID.

## When To Use

Use this page when code needs the `APEX_UTIL.DELETE_FEEDBACK_ATTACHMENT` procedure. Confirm security, workspace, and session requirements for your calling context.

## Signature

```sql
APEX_UTIL.DELETE_FEEDBACK_ATTACHMENT (
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

```sql
begin
    apex_util.DELETE_FEEDBACK_ATTACHMENT(
        p_feedback_id => 1
    );
end;
/
```

